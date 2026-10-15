// PETs Practice Quiz Application - Multi-Route Support (Lecture MCQs, Assignment Quizzes, Combined Mega Pool)

let currentQuizState = {
  route: 'lectures', // 'lectures', 'assignments', 'combined'
  questions: [], // list of active question objects (with shuffled options)
  userAnswers: {}, // qId -> array of selected option keys (e.g. ['a'])
  checkedStatus: {}, // qId -> boolean (true if checked/submitted)
  mode: 'practice', // 'practice' (instant check & auto explanation) or 'exam' (submit all at end)
  isSubmitted: false
};

const ROUTE_CONFIG = {
  lectures: {
    title: 'Privacy Enabling Techniques (PETs) • Lecture MCQs (94 Questions from Lecture Notes)',
    filterLabel: 'Select Week / Lecture Topic'
  },
  assignments: {
    title: 'Privacy Enabling Techniques (PETs) • Assignment Quizzes (Weeks 1 to 12 • 240 Questions)',
    filterLabel: 'Select Week / Assignment'
  },
  combined: {
    title: 'Privacy Enabling Techniques (PETs) • Master Question Bank (334 Questions: Lectures + Assignments)',
    filterLabel: 'Select Week / Question Source'
  }
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

// Utility: Escape HTML for safe rendering
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Prepare question with shuffled options
function prepareQuestion(rawQ) {
  const shuffledOpts = shuffleArray(rawQ.options);
  const correctArr = Array.isArray(rawQ.correct) ? rawQ.correct : [rawQ.correct];
  return {
    ...rawQ,
    correct: correctArr,
    shuffledOptions: shuffledOpts,
    isMultiSelect: correctArr.length > 1
  };
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  initRoute();
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

function getRouteFromHash() {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (hash === 'assignments' || hash === 'assignment') return 'assignments';
  if (hash === 'combined' || hash === 'all') return 'combined';
  if (hash === 'lectures' || hash === 'lecture' || hash === 'lec') return 'lectures';
  return localStorage.getItem('pets_active_route') || 'lectures';
}

function initRoute() {
  const route = getRouteFromHash();
  switchRoute(route, false);
}

function switchRoute(newRoute, updateHash = true) {
  if (!['lectures', 'assignments', 'combined'].includes(newRoute)) {
    newRoute = 'lectures';
  }
  currentQuizState.route = newRoute;
  localStorage.setItem('pets_active_route', newRoute);

  if (updateHash) {
    window.location.hash = newRoute;
  }

  // Update tabs UI
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.dataset.route === newRoute) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Update header title & filter label
  const cfg = ROUTE_CONFIG[newRoute];
  const subTitleEl = document.getElementById('portal-subtitle');
  if (subTitleEl) subTitleEl.innerText = cfg.title;

  const filterLabelEl = document.getElementById('filter-label');
  if (filterLabelEl) filterLabelEl.innerText = cfg.filterLabel;

  populateWeekFilter();
  startNewQuiz();
}

function populateWeekFilter() {
  const weekSelect = document.getElementById('week-filter');
  if (!weekSelect) return;
  weekSelect.innerHTML = '';

  const route = currentQuizState.route;

  if (route === 'lectures') {
    const options = [
      { value: 'all', text: '🔀 All Lecture MCQs Shuffled (94 Questions Pool)' },
      { value: 'w8', text: 'Week 8 — Lecture MCQs: MPC, Real-Ideal & OT (30 Questions)' },
      { value: 'w9', text: 'Week 9 — Lecture MCQs: SSE, Leakage & Attacks (30 Questions)' },
      { value: 'w10', text: 'Week 10 — All Lecture MCQs (34 Questions)' },
      { value: 'lec_40', text: '   ↳ Lecture 40 — Hidden Vector Encryption (HVE / SHVE) (10 Qs)' },
      { value: 'lec_41', text: '   ↳ Lecture 41 — Disjunctive SSE & Meta-Keywords (4 Qs)' },
      { value: 'lec_42', text: '   ↳ Lecture 42 — Functional Encryption Part I: DDH (6 Qs)' },
      { value: 'lec_43', text: '   ↳ Lecture 43 — Functional Encryption Part II: LWE (6 Qs)' },
      { value: 'lec_44', text: '   ↳ Lecture 44 — Zero-Knowledge Proofs (8 Qs)' }
    ];
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.value;
      el.textContent = opt.text;
      weekSelect.appendChild(el);
    });
  } else if (route === 'assignments') {
    const options = [
      { value: 'all', text: '🔀 All Weeks Shuffled (Full 240 Questions Pool)' },
      { value: '1', text: 'Week 1 — Homomorphic Encryption & Intro' },
      { value: '2', text: 'Week 2 — TGLWE, TGSW & TFHE Bootstrapping' },
      { value: '3', text: 'Week 3 — CKKS Scheme & Approximate Arithmetic' },
      { value: '4', text: 'Week 4 — CKKS Rescaling, CRT & Bootstrapping' },
      { value: '5', text: 'Week 5 — TFHE Gates, MPC & Secret Sharing' },
      { value: '6', text: 'Week 6 — Beaver Triples & MPC Division' },
      { value: '7', text: 'Week 7 — Oblivious Transfer (OT) & GMW' },
      { value: '8', text: 'Week 8 — Shamir, SSE & Security Games' },
      { value: '9', text: 'Week 9 — Searchable Symmetric Encryption (SSE)' },
      { value: '10', text: 'Week 10 — Symmetric-key Hidden Vector Encryption (SHVE)' },
      { value: '11', text: 'Week 11 — Zero-Knowledge Proofs, zk-SNARKs & Verifiable Computation' },
      { value: '12', text: 'Week 12 — Differential Privacy & Trusted Execution Environments (TEEs)' }
    ];
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.value;
      el.textContent = opt.text;
      weekSelect.appendChild(el);
    });
  } else if (route === 'combined') {
    const options = [
      { value: 'all', text: '🔀 All 334 Questions Shuffled (Combined Master Pool)' },
      { value: 'route_lectures', text: '🎓 All Lecture MCQs (94 Questions)' },
      { value: 'route_assignments', text: '📋 All Assignment MCQs (240 Questions)' },
      { value: 'w8', text: 'Week 8 — Shamir, MPC, Real-Ideal & OT (50 Questions: 20 Asg + 30 Lec)' },
      { value: 'w9', text: 'Week 9 — Searchable Symmetric Encryption & Attacks (50 Questions: 20 Asg + 30 Lec)' },
      { value: 'w10', text: 'Week 10 — SHVE, FE & ZKP (54 Questions: 20 Asg + 34 Lec)' },
      { value: 'w1', text: 'Week 1 — Homomorphic Encryption (20 Questions)' },
      { value: 'w2', text: 'Week 2 — TGLWE & Bootstrapping (20 Questions)' },
      { value: 'w3', text: 'Week 3 — CKKS Scheme (20 Questions)' },
      { value: 'w4', text: 'Week 4 — CKKS Rescaling (20 Questions)' },
      { value: 'w5', text: 'Week 5 — TFHE Gates & MPC (20 Questions)' },
      { value: 'w6', text: 'Week 6 — Beaver Triples (20 Questions)' },
      { value: 'w7', text: 'Week 7 — Oblivious Transfer (20 Questions)' },
      { value: 'w11', text: 'Week 11 — Zero-Knowledge Proofs & zk-SNARKs (20 Questions)' },
      { value: 'w12', text: 'Week 12 — Differential Privacy & TEEs (20 Questions)' }
    ];
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.value;
      el.textContent = opt.text;
      weekSelect.appendChild(el);
    });
  }
}

function populateCountFilter(poolSize) {
  const countSelect = document.getElementById('count-filter');
  if (!countSelect) return;

  const prevVal = countSelect.value;
  countSelect.innerHTML = '';

  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.textContent = `All Questions (${poolSize})`;
  countSelect.appendChild(allOpt);

  const limits = [10, 20, 30, 50, 100, 200, 240, 334].filter(lim => lim < poolSize);
  limits.forEach(lim => {
    const opt = document.createElement('option');
    opt.value = lim.toString();
    opt.textContent = `${lim} Questions`;
    countSelect.appendChild(opt);
  });

  if (prevVal && (prevVal === 'all' || parseInt(prevVal, 10) <= poolSize)) {
    countSelect.value = prevVal;
  } else {
    countSelect.value = 'all';
  }
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

  // Route tab navigation clicks
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetRoute = tab.dataset.route;
      if (targetRoute && targetRoute !== currentQuizState.route) {
        switchRoute(targetRoute, true);
      }
    });
  });

  // Handle URL hash changes
  window.addEventListener('hashchange', () => {
    const route = getRouteFromHash();
    if (route !== currentQuizState.route) {
      switchRoute(route, false);
    }
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

function resolvePool(route, filterVal) {
  let pool = [];

  const getAsgQuestions = () => {
    const list = [];
    if (window.QUIZ_DATA) {
      window.QUIZ_DATA.forEach(w => {
        w.questions.forEach(q => list.push({ ...q, source: 'assignment' }));
      });
    }
    return list;
  };

  const getLecQuestions = () => {
    const list = [];
    if (window.LECTURE_DATA) {
      window.LECTURE_DATA.forEach(w => {
        w.questions.forEach(q => list.push({ ...q, source: 'lecture' }));
      });
    }
    return list;
  };

  if (route === 'lectures') {
    const allLec = getLecQuestions();
    if (filterVal === 'all') {
      pool = allLec;
    } else if (filterVal === 'w8') {
      pool = allLec.filter(q => q.week === 8);
    } else if (filterVal === 'w9') {
      pool = allLec.filter(q => q.week === 9);
    } else if (filterVal === 'w10') {
      pool = allLec.filter(q => q.week === 10);
    } else if (filterVal.startsWith('lec_')) {
      pool = allLec.filter(q => q.lectureId === filterVal);
    } else {
      pool = allLec;
    }
  } else if (route === 'assignments') {
    const allAsg = getAsgQuestions();
    if (filterVal === 'all') {
      pool = allAsg;
    } else {
      const weekNum = parseInt(filterVal, 10);
      pool = allAsg.filter(q => q.week === weekNum);
    }
  } else if (route === 'combined') {
    const allAsg = getAsgQuestions();
    const allLec = getLecQuestions();

    if (filterVal === 'all') {
      pool = [...allAsg, ...allLec];
    } else if (filterVal === 'route_lectures') {
      pool = allLec;
    } else if (filterVal === 'route_assignments') {
      pool = allAsg;
    } else if (filterVal.startsWith('w')) {
      const wNum = parseInt(filterVal.replace('w', ''), 10);
      pool = [...allAsg.filter(q => q.week === wNum), ...allLec.filter(q => q.week === wNum)];
    } else {
      pool = [...allAsg, ...allLec];
    }
  }

  return pool;
}

function startNewQuiz() {
  const weekVal = document.getElementById('week-filter').value || 'all';
  const modeVal = document.getElementById('mode-filter').value;

  currentQuizState.mode = modeVal;
  currentQuizState.isSubmitted = false;
  currentQuizState.userAnswers = {};
  currentQuizState.checkedStatus = {};

  let pool = resolvePool(currentQuizState.route, weekVal);

  // Update count limits dropdown based on total pool size
  populateCountFilter(pool.length);
  const countVal = document.getElementById('count-filter').value;

  // Shuffle questions pool
  pool = shuffleArray(pool);

  // Limit count if specified
  if (countVal !== 'all') {
    const limit = parseInt(countVal, 10);
    if (!isNaN(limit) && limit > 0) {
      pool = pool.slice(0, limit);
    }
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
    if (isDone) {
      const userSel = currentQuizState.userAnswers[q.id] || [];
      const isCorrect = checkAnswerCorrectness(userSel, q.correct);
      const statusClass = isCorrect ? 'status-correct' : 'status-incorrect';
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
          <span>💡 Simplest Explanation & Rationale</span>
        </div>
        <div class="explanation-content">
          ${q.explanation || 'No detailed explanation provided.'}
        </div>
      </div>
    `;

    // Badges
    const isLecture = q.source === 'lecture';
    const sourceBadge = isLecture
      ? `<span class="badge badge-lecture">🎓 ${q.lecture ? escapeHtml(q.lecture) : 'Lecture Notes'}</span>`
      : `<span class="badge badge-assignment">📋 Assignment</span>`;

    card.innerHTML = `
      <div class="question-header">
        <div class="badge-group">
          <span class="badge badge-week">Week ${q.week}</span>
          ${sourceBadge}
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
  if (!userSel || !correctKeys || userSel.length !== correctKeys.length) return false;
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
