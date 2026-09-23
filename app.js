// PETs Practice Quiz Application - Parchment Paper Theme & Automatic Explanation Display

let currentQuizState = {
  questions: [], // list of active question objects (with shuffled options)
  userAnswers: {}, // qId -> array of selected option keys (e.g. ['a', 'c'])
  checkedStatus: {}, // qId -> boolean (true if checked/submitted)
  mode: 'practice', // 'practice' (instant check & auto explanation) or 'exam' (submit all at end)
  isSubmitted: false
};

// Utility: Fisher-Yates shuffle
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Prepare question with shuffled options
function prepareQuestion(rawQ) {
  const shuffledOpts = shuffleArray(rawQ.options);
  return {
    ...rawQ,
    shuffledOptions: shuffledOpts,
    isMultiSelect: rawQ.correct.length > 1
  };
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  startNewQuiz();
});

function initTheme() {
  const savedTheme = localStorage.getItem('pets_paper_theme') || 'light-paper';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeBtnText(savedTheme);
}

function updateThemeBtnText(theme) {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark-paper' ? '📜 Light Paper' : '🌙 Dark Paper';
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark-paper' ? 'light-paper' : 'dark-paper';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('pets_paper_theme', newTheme);
  updateThemeBtnText(newTheme);
}

function setupEventListeners() {
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  document.getElementById('start-quiz-btn').addEventListener('click', startNewQuiz);
  document.getElementById('week-filter').addEventListener('change', startNewQuiz);
  document.getElementById('count-filter').addEventListener('change', startNewQuiz);
  document.getElementById('mode-filter').addEventListener('change', (e) => {
    currentQuizState.mode = e.target.value;
    updateBottomBar();
  });

  const submitBtn = document.getElementById('submit-quiz-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', submitFullQuiz);
  }

  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', startNewQuiz);
  }
}

function startNewQuiz() {
  const weekVal = document.getElementById('week-filter').value;
  const countVal = document.getElementById('count-filter').value;
  const modeVal = document.getElementById('mode-filter').value;

  currentQuizState.mode = modeVal;
  currentQuizState.isSubmitted = false;
  currentQuizState.userAnswers = {};
  currentQuizState.checkedStatus = {};

  let pool = [];
  if (weekVal === 'all') {
    window.QUIZ_DATA.forEach(w => {
      pool.push(...w.questions);
    });
  } else {
    const weekNum = parseInt(weekVal, 10);
    const foundWeek = window.QUIZ_DATA.find(w => w.week === weekNum);
    if (foundWeek) {
      pool = [...foundWeek.questions];
    }
  }

  // Shuffle questions pool
  pool = shuffleArray(pool);

  // Limit count
  if (countVal !== 'all') {
    const limit = parseInt(countVal, 10);
    pool = pool.slice(0, limit);
  }

  // Prepare questions with shuffled options
  currentQuizState.questions = pool.map(q => prepareQuestion(q));

  // Hide summary section
  document.getElementById('summary-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';

  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  const total = currentQuizState.questions.length;

  if (total === 0) {
    container.innerHTML = `<div class="question-card"><p>No questions found for the selected filter.</p></div>`;
    return;
  }

  updateProgress();

  currentQuizState.questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;

    const isChecked = !!currentQuizState.checkedStatus[q.id];
    const isSubmitted = currentQuizState.isSubmitted;
    const isDone = isChecked || isSubmitted;

    // Check correctness if done
    let statusClass = '';
    if (isDone) {
      const userSel = currentQuizState.userAnswers[q.id] || [];
      const isCorrect = checkAnswerCorrectness(userSel, q.correct);
      statusClass = isCorrect ? 'status-correct' : 'status-incorrect';
      card.classList.add(statusClass);
    }

    // Options HTML
    const optionsHTML = q.shuffledOptions.map((opt, oIdx) => {
      const optLetter = String.fromCharCode(65 + oIdx);
      const userSel = currentQuizState.userAnswers[q.id] || [];
      const isSelected = userSel.includes(opt.key);

      let optionStateClass = '';
      if (isDone) {
        const isTargetCorrect = q.correct.includes(opt.key);
        if (isTargetCorrect) {
          optionStateClass = 'state-correct';
        } else if (isSelected && !isTargetCorrect) {
          optionStateClass = 'state-incorrect';
        }
      }

      const inputType = q.isMultiSelect ? 'checkbox' : 'radio';

      return `
        <div class="option-item ${isSelected ? 'selected' : ''} ${optionStateClass} ${isDone ? 'disabled' : ''}"
             onclick="handleOptionClick('${q.id}', '${opt.key}')">
          <input type="${inputType}" 
                 name="input-${q.id}" 
                 value="${opt.key}" 
                 ${isSelected ? 'checked' : ''} 
                 ${isDone ? 'disabled' : ''} 
                 class="option-checkbox"
                 onclick="event.stopPropagation(); handleOptionClick('${q.id}', '${opt.key}')">
          <span class="option-key">${optLetter}</span>
          <span class="option-text">${opt.text}</span>
        </div>
      `;
    }).join('');

    // Check/Submit Action for MSQ in practice mode if not checked yet
    let actionBtnHTML = '';
    if (currentQuizState.mode === 'practice' && q.isMultiSelect && !isDone) {
      actionBtnHTML = `
        <button class="btn btn-secondary" onclick="checkSingleQuestion('${q.id}')" style="margin-top: 0.5rem;">
          Check Answer & Reveal Explanation
        </button>
      `;
    }

    // Explanation Box - Automatically visible once question is answered/checked/submitted
    const expDisplay = isDone ? 'block' : 'none';
    const explanationHTML = `
      <div class="explanation-box" id="exp-${q.id}" style="display: ${expDisplay}">
        <div class="explanation-title">
          <span>💡 Simplest Explanation</span>
        </div>
        <div class="explanation-content">
          ${q.explanation || 'No detailed explanation provided.'}
        </div>
      </div>
    `;

    card.innerHTML = `
      <div class="question-header">
        <div class="badge-group">
          <span class="badge badge-week">Week ${q.week}</span>
        </div>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">Q${idx + 1} of ${total}</span>
      </div>
      <div class="question-title">${q.question}</div>
      <div class="options-list">${optionsHTML}</div>
      ${actionBtnHTML}
      ${explanationHTML}
    `;

    container.appendChild(card);
  });

  updateBottomBar();
  renderMathIfAvailable();
}

function handleOptionClick(qId, optKey) {
  if (currentQuizState.isSubmitted || currentQuizState.checkedStatus[qId]) {
    return; // Already locked
  }

  const q = currentQuizState.questions.find(item => item.id === qId);
  if (!q) return;

  let currentSel = currentQuizState.userAnswers[qId] || [];

  if (q.isMultiSelect) {
    // Multi Select: toggle option
    if (currentSel.includes(optKey)) {
      currentSel = currentSel.filter(k => k !== optKey);
    } else {
      currentSel.push(optKey);
    }
    currentQuizState.userAnswers[qId] = currentSel;
    renderQuiz();
  } else {
    // Single Select: set option AND in practice mode automatically submit & reveal explanation immediately!
    currentSel = [optKey];
    currentQuizState.userAnswers[qId] = currentSel;

    if (currentQuizState.mode === 'practice') {
      currentQuizState.checkedStatus[qId] = true; // Auto-reveal answer & explanation immediately!
    }

    renderQuiz();
  }
}

function checkAnswerCorrectness(userSel, correctKeys) {
  if (!userSel || userSel.length !== correctKeys.length) return false;
  const sortedUser = [...userSel].sort();
  const sortedCorrect = [...correctKeys].sort();
  return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
}

function checkSingleQuestion(qId) {
  currentQuizState.checkedStatus[qId] = true;
  updateProgress();
  renderQuiz();
}

function updateProgress() {
  const total = currentQuizState.questions.length;
  const answeredCount = Object.keys(currentQuizState.userAnswers).filter(k => currentQuizState.userAnswers[k].length > 0).length;
  const pct = total > 0 ? (answeredCount / total) * 100 : 0;

  const bar = document.getElementById('progress-bar-fill');
  if (bar) bar.style.width = `${pct}%`;

  const metaTxt = document.getElementById('progress-text');
  if (metaTxt) metaTxt.innerText = `Answered ${answeredCount} of ${total} Questions`;
}

function updateBottomBar() {
  const bottomBar = document.getElementById('bottom-bar');
  if (bottomBar) {
    if (currentQuizState.mode === 'exam' && !currentQuizState.isSubmitted) {
      bottomBar.style.display = 'flex';
    } else {
      bottomBar.style.display = 'none';
    }
  }
}

function submitFullQuiz() {
  currentQuizState.isSubmitted = true;

  let correctCount = 0;
  const total = currentQuizState.questions.length;

  currentQuizState.questions.forEach(q => {
    const userSel = currentQuizState.userAnswers[q.id] || [];
    if (checkAnswerCorrectness(userSel, q.correct)) {
      correctCount++;
    }
  });

  // Re-render questions with answers revealed and explanations expanded automatically
  renderQuiz();

  // Show summary dashboard
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('summary-section').style.display = 'block';

  document.getElementById('score-number').innerText = `${correctCount}/${total}`;
  document.getElementById('score-pct-label').innerText = `${pct}% Score`;
  document.getElementById('score-circle').style.setProperty('--score-pct', pct);

  let statusMsg = "Great effort! Detailed explanations for all questions are automatically revealed below.";
  if (pct >= 80) statusMsg = "🎉 Outstanding Performance! You mastered these PETs concepts.";
  else if (pct >= 50) statusMsg = "👍 Good job! Review the automatically revealed explanations below.";

  document.getElementById('summary-status').innerText = statusMsg;

  // Scroll to summary section
  document.getElementById('summary-section').scrollIntoView({ behavior: 'smooth' });
}

function renderMathIfAvailable() {
  if (window.renderMathInElement) {
    try {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    } catch (e) {
      console.log('Math rendering error:', e);
    }
  }
}
