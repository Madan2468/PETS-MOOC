window.LECTURE_DATA = [
  {
    "week": 8,
    "count": 30,
    "title": "Week 8 Lecture Notes",
    "questions": [
      {
        "id": "LEC_W8_Q1",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q1 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is the purpose of the real\u2013ideal paradigm?",
        "options": [
          {
            "key": "a",
            "text": "Compare real execution with ideal execution"
          },
          {
            "key": "b",
            "text": "Measure CPU speed"
          },
          {
            "key": "c",
            "text": "Publish keys"
          },
          {
            "key": "d",
            "text": "Remove communication"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Security is argued by comparing what the adversary sees in both worlds."
      },
      {
        "id": "LEC_W8_Q2",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q2 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Who recreates the adversary\u2019s view in the ideal world?",
        "options": [
          {
            "key": "a",
            "text": "Simulator"
          },
          {
            "key": "b",
            "text": "Receiver"
          },
          {
            "key": "c",
            "text": "Database"
          },
          {
            "key": "d",
            "text": "PRF key"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The simulator uses only permitted leakage."
      },
      {
        "id": "LEC_W8_Q3",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q3 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What does Pr[G] mean?",
        "options": [
          {
            "key": "a",
            "text": "Probability game G outputs 1"
          },
          {
            "key": "b",
            "text": "Number of parties"
          },
          {
            "key": "c",
            "text": "Key length"
          },
          {
            "key": "d",
            "text": "Number of documents"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "It is the probability of output 1."
      },
      {
        "id": "LEC_W8_Q4",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q4 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "PPT adversary means:",
        "options": [
          {
            "key": "a",
            "text": "Probabilistic polynomial-time algorithm"
          },
          {
            "key": "b",
            "text": "Perfectly private transcript"
          },
          {
            "key": "c",
            "text": "Public protocol token"
          },
          {
            "key": "d",
            "text": "Polynomial with no randomness"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "PPT is the standard efficient-adversary model."
      },
      {
        "id": "LEC_W8_Q5",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q5 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is the goal of MPC?",
        "options": [
          {
            "key": "a",
            "text": "Joint computation while protecting private inputs"
          },
          {
            "key": "b",
            "text": "Reveal all inputs"
          },
          {
            "key": "c",
            "text": "Avoid computation"
          },
          {
            "key": "d",
            "text": "Send keys publicly"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Parties compute a function without exposing honest inputs."
      },
      {
        "id": "LEC_W8_Q6",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q6 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "In Shamir sharing, where is the secret encoded?",
        "options": [
          {
            "key": "a",
            "text": "Constant term f(0)"
          },
          {
            "key": "b",
            "text": "Highest coefficient only"
          },
          {
            "key": "c",
            "text": "Evaluation point"
          },
          {
            "key": "d",
            "text": "Largest share"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The secret is the polynomial\u2019s constant term."
      },
      {
        "id": "LEC_W8_Q7",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q7 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "For a degree-t polynomial, how many shares reconstruct the secret?",
        "options": [
          {
            "key": "a",
            "text": "t"
          },
          {
            "key": "b",
            "text": "t+1"
          },
          {
            "key": "c",
            "text": "2t"
          },
          {
            "key": "d",
            "text": "1"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "t+1 points determine a degree-t polynomial."
      },
      {
        "id": "LEC_W8_Q8",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q8 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What do at most t Shamir shares reveal?",
        "options": [
          {
            "key": "a",
            "text": "No information about the secret"
          },
          {
            "key": "b",
            "text": "The whole polynomial"
          },
          {
            "key": "c",
            "text": "All other shares"
          },
          {
            "key": "d",
            "text": "The secret always"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "This is the threshold privacy property."
      },
      {
        "id": "LEC_W8_Q9",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q9 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "In 1-out-of-2 OT, what does the receiver learn?",
        "options": [
          {
            "key": "a",
            "text": "Both messages"
          },
          {
            "key": "b",
            "text": "Only selected message m_b"
          },
          {
            "key": "c",
            "text": "Neither message"
          },
          {
            "key": "d",
            "text": "Sender\u2019s key"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Receiver obtains only the message selected by b."
      },
      {
        "id": "LEC_W8_Q10",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q10 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "In secure OT, what should remain hidden from the sender?",
        "options": [
          {
            "key": "a",
            "text": "Receiver\u2019s choice bit b"
          },
          {
            "key": "b",
            "text": "Sender\u2019s own messages"
          },
          {
            "key": "c",
            "text": "That a protocol exists"
          },
          {
            "key": "d",
            "text": "The number two"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "OT protects receiver-choice privacy."
      },
      {
        "id": "LEC_W8_Q11",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q11 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What should OT prevent the receiver from learning?",
        "options": [
          {
            "key": "a",
            "text": "The unselected message"
          },
          {
            "key": "b",
            "text": "The selected message"
          },
          {
            "key": "c",
            "text": "The sender\u2019s public identity"
          },
          {
            "key": "d",
            "text": "That messages exist"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Receiver learns only the chosen message."
      },
      {
        "id": "LEC_W8_Q12",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q12 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is the main purpose of a MAC?",
        "options": [
          {
            "key": "a",
            "text": "Message integrity and authentication"
          },
          {
            "key": "b",
            "text": "Encrypt every file by itself"
          },
          {
            "key": "c",
            "text": "Hide all traffic"
          },
          {
            "key": "d",
            "text": "Reconstruct a polynomial"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "A valid tag authenticates the message."
      },
      {
        "id": "LEC_W8_Q13",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q13 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "A MAC forgery occurs when an adversary:",
        "options": [
          {
            "key": "a",
            "text": "Produces a valid tag it should not be able to produce"
          },
          {
            "key": "b",
            "text": "Reads a public message"
          },
          {
            "key": "c",
            "text": "Runs interpolation"
          },
          {
            "key": "d",
            "text": "Searches an index"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Forgery breaks authentication security."
      },
      {
        "id": "LEC_W8_Q14",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q14 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is a Beaver triple?",
        "options": [
          {
            "key": "a",
            "text": "(a,b,c) with c=ab"
          },
          {
            "key": "b",
            "text": "Three unrelated keys"
          },
          {
            "key": "c",
            "text": "Three documents"
          },
          {
            "key": "d",
            "text": "Three public tags"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Its multiplication relation supports secure MPC multiplication."
      },
      {
        "id": "LEC_W8_Q15",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q15 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Why are Beaver triples useful?",
        "options": [
          {
            "key": "a",
            "text": "Enable secure multiplication using masked openings"
          },
          {
            "key": "b",
            "text": "Eliminate all communication"
          },
          {
            "key": "c",
            "text": "Reveal private inputs"
          },
          {
            "key": "d",
            "text": "Replace every protocol"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Masked differences are opened instead of secret inputs."
      },
      {
        "id": "LEC_W8_Q16",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q16 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "FHE stands for:",
        "options": [
          {
            "key": "a",
            "text": "Fully Homomorphic Encryption"
          },
          {
            "key": "b",
            "text": "Fast Hash Evaluation"
          },
          {
            "key": "c",
            "text": "Formal Honest Execution"
          },
          {
            "key": "d",
            "text": "Forward Hidden Encoding"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "FHE permits computation on ciphertexts."
      },
      {
        "id": "LEC_W8_Q17",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q17 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "SSE stands for:",
        "options": [
          {
            "key": "a",
            "text": "Searchable Symmetric Encryption"
          },
          {
            "key": "b",
            "text": "Secure Share Evaluation"
          },
          {
            "key": "c",
            "text": "Secret Simulation Engine"
          },
          {
            "key": "d",
            "text": "Signature Search Exchange"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "SSE supports searching encrypted data."
      },
      {
        "id": "LEC_W8_Q18",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q18 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Why can SSE leak controlled information?",
        "options": [
          {
            "key": "a",
            "text": "To make encrypted search efficient"
          },
          {
            "key": "b",
            "text": "Because documents are plaintext"
          },
          {
            "key": "c",
            "text": "To reveal secret keys"
          },
          {
            "key": "d",
            "text": "Because search is impossible"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Search efficiency often requires some specified leakage."
      },
      {
        "id": "LEC_W8_Q19",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q19 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is the role of a PRF in basic SSE?",
        "options": [
          {
            "key": "a",
            "text": "Map keywords to pseudorandom-looking tokens"
          },
          {
            "key": "b",
            "text": "Decrypt documents"
          },
          {
            "key": "c",
            "text": "Replace all keys with IDs"
          },
          {
            "key": "d",
            "text": "Return plaintext automatically"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Tokens replace plaintext keywords in the index."
      },
      {
        "id": "LEC_W8_Q20",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q20 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What protects document contents in basic SSE?",
        "options": [
          {
            "key": "a",
            "text": "Symmetric encryption"
          },
          {
            "key": "b",
            "text": "Document IDs"
          },
          {
            "key": "c",
            "text": "The leakage function"
          },
          {
            "key": "d",
            "text": "Keyword frequency alone"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Documents are encrypted with a symmetric key."
      },
      {
        "id": "LEC_W8_Q21",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q21 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "In SSE leakage, what does N represent?",
        "options": [
          {
            "key": "a",
            "text": "Total keyword\u2013document-ID pairs"
          },
          {
            "key": "b",
            "text": "Number of clients"
          },
          {
            "key": "c",
            "text": "Secret-key length"
          },
          {
            "key": "d",
            "text": "Number of servers"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "N counts keyword\u2013ID pairs in the database."
      },
      {
        "id": "LEC_W8_Q22",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q22 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What does V_i represent?",
        "options": [
          {
            "key": "a",
            "text": "Document IDs matching the i-th query"
          },
          {
            "key": "b",
            "text": "The i-th secret key"
          },
          {
            "key": "c",
            "text": "Number of users"
          },
          {
            "key": "d",
            "text": "Plaintext contents"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "V_i is the matching document-ID set."
      },
      {
        "id": "LEC_W8_Q23",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q23 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "In the real SSE game, what does the adversary see?",
        "options": [
          {
            "key": "a",
            "text": "Encrypted database and search transcripts"
          },
          {
            "key": "b",
            "text": "Only plaintext database"
          },
          {
            "key": "c",
            "text": "Client\u2019s secret key"
          },
          {
            "key": "d",
            "text": "All future queries"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The adversary observes the encrypted database and protocol transcripts."
      },
      {
        "id": "LEC_W8_Q24",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q24 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What does the leakage algorithm do?",
        "options": [
          {
            "key": "a",
            "text": "Extracts only permitted information"
          },
          {
            "key": "b",
            "text": "Decrypts every file"
          },
          {
            "key": "c",
            "text": "Chooses all client keys"
          },
          {
            "key": "d",
            "text": "Guarantees zero leakage for every scheme"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "It formalizes what the security definition permits to leak."
      },
      {
        "id": "LEC_W8_Q25",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q25 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "What is the SSE real\u2013ideal security goal?",
        "options": [
          {
            "key": "a",
            "text": "Real and ideal views are computationally indistinguishable"
          },
          {
            "key": "b",
            "text": "Server learns all plaintext"
          },
          {
            "key": "c",
            "text": "No messages are sent"
          },
          {
            "key": "d",
            "text": "Ideal game is always faster"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "An efficient adversary should not distinguish the views."
      },
      {
        "id": "LEC_W8_Q26",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q26 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "A pre-query snapshot in the reduced-leakage design may reveal:",
        "options": [
          {
            "key": "a",
            "text": "Only document count, as specified"
          },
          {
            "key": "b",
            "text": "Every keyword"
          },
          {
            "key": "c",
            "text": "All future queries"
          },
          {
            "key": "d",
            "text": "All secret keys"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The lecture\u2019s recap describes this reduced leakage goal."
      },
      {
        "id": "LEC_W8_Q27",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q27 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Which statement about SSE is correct?",
        "options": [
          {
            "key": "a",
            "text": "Encrypted search can still reveal specified patterns"
          },
          {
            "key": "b",
            "text": "SSE always leaks nothing"
          },
          {
            "key": "c",
            "text": "SSE requires plaintext storage"
          },
          {
            "key": "d",
            "text": "SSE cannot search keywords"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Controlled leakage is a central SSE trade-off."
      },
      {
        "id": "LEC_W8_Q28",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q28 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Which pairing is correct?",
        "options": [
          {
            "key": "a",
            "text": "Beaver triple: c=ab"
          },
          {
            "key": "b",
            "text": "MAC: encrypts all documents"
          },
          {
            "key": "c",
            "text": "OT: receiver learns both messages"
          },
          {
            "key": "d",
            "text": "SSE: no search index needed"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "A Beaver triple satisfies c=ab."
      },
      {
        "id": "LEC_W8_Q29",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q29 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Which statement about Shamir sharing is correct?",
        "options": [
          {
            "key": "a",
            "text": "Secret is f(0)"
          },
          {
            "key": "b",
            "text": "Secret is the highest evaluation point"
          },
          {
            "key": "c",
            "text": "t shares always reconstruct"
          },
          {
            "key": "d",
            "text": "Shares must all be identical"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The polynomial\u2019s constant term is the secret."
      },
      {
        "id": "LEC_W8_Q30",
        "week": 8,
        "source": "lecture",
        "lectureId": "w8_lec",
        "lecture": "Week 8 \u2014 MPC, Shamir & OT",
        "header": "Lecture Q30 \u2014 Week 8 \u2014 MPC, Shamir & OT",
        "question": "Which statement correctly describes OT privacy?",
        "options": [
          {
            "key": "a",
            "text": "Receiver hides choice; receiver learns only chosen message"
          },
          {
            "key": "b",
            "text": "Sender learns the choice and receiver learns both"
          },
          {
            "key": "c",
            "text": "Receiver learns neither message"
          },
          {
            "key": "d",
            "text": "Both messages become public"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "1-out-of-2 OT provides sender-choice privacy and hides the unselected message."
      }
    ]
  },
  {
    "week": 9,
    "count": 30,
    "title": "Week 9 Lecture Notes",
    "questions": [
      {
        "id": "LEC_W9_Q1",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q1 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What does SSE allow a client to do?",
        "options": [
          {
            "key": "a",
            "text": "Search encrypted data"
          },
          {
            "key": "b",
            "text": "Decrypt every server file"
          },
          {
            "key": "c",
            "text": "Publish the secret key"
          },
          {
            "key": "d",
            "text": "Avoid using encryption"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "SSE supports searching over encrypted data."
      },
      {
        "id": "LEC_W9_Q2",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q2 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "A conjunctive query w1 AND w2 returns documents that:",
        "options": [
          {
            "key": "a",
            "text": "Contain either keyword"
          },
          {
            "key": "b",
            "text": "Contain both keywords"
          },
          {
            "key": "c",
            "text": "Contain neither keyword"
          },
          {
            "key": "d",
            "text": "Have the largest file size"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "AND means every queried keyword must be present."
      },
      {
        "id": "LEC_W9_Q3",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q3 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In the naive conjunctive-search approach, work is proportional to:",
        "options": [
          {
            "key": "a",
            "text": "Only the shortest list"
          },
          {
            "key": "b",
            "text": "The sum of document-list sizes for all query terms"
          },
          {
            "key": "c",
            "text": "The number of encryption keys only"
          },
          {
            "key": "d",
            "text": "The number of users"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The naive method processes the lists for each term."
      },
      {
        "id": "LEC_W9_Q4",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q4 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In BXT, which keyword is selected as the s-term?",
        "options": [
          {
            "key": "a",
            "text": "Most frequent"
          },
          {
            "key": "b",
            "text": "Randomly selected every time"
          },
          {
            "key": "c",
            "text": "Least frequent"
          },
          {
            "key": "d",
            "text": "Alphabetically first"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The least-frequent term reduces candidate documents."
      },
      {
        "id": "LEC_W9_Q5",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q5 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In BXT, x-terms are:",
        "options": [
          {
            "key": "a",
            "text": "The other keywords in the conjunction"
          },
          {
            "key": "b",
            "text": "Files injected by an attacker only"
          },
          {
            "key": "c",
            "text": "Encryption keys"
          },
          {
            "key": "d",
            "text": "Document IDs"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The s-term is tested against the remaining x-terms."
      },
      {
        "id": "LEC_W9_Q6",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q6 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "BXT search complexity is approximately proportional to:",
        "options": [
          {
            "key": "a",
            "text": "|DB(s)|"
          },
          {
            "key": "b",
            "text": "n \u00d7 |DB(s)|"
          },
          {
            "key": "c",
            "text": "2^n only"
          },
          {
            "key": "d",
            "text": "Total bytes of all files"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The server checks each candidate against the n query terms."
      },
      {
        "id": "LEC_W9_Q7",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q7 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Why can BXT cause inter-query leakage?",
        "options": [
          {
            "key": "a",
            "text": "It never uses trapdoors"
          },
          {
            "key": "b",
            "text": "The server can reuse exposed x-trap values across queries"
          },
          {
            "key": "c",
            "text": "It encrypts all query results twice"
          },
          {
            "key": "d",
            "text": "It hides all document IDs perfectly"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Reusable x-trap values allow cross-query testing."
      },
      {
        "id": "LEC_W9_Q8",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q8 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In BXT, what is the s-term\u2019s document-ID list called conceptually?",
        "options": [
          {
            "key": "a",
            "text": "DB(s)"
          },
          {
            "key": "b",
            "text": "XOR(s)"
          },
          {
            "key": "c",
            "text": "HVE(s)"
          },
          {
            "key": "d",
            "text": "KPRP(s)"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "DB(w) denotes documents containing keyword w."
      },
      {
        "id": "LEC_W9_Q9",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q9 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is the main idea of OXT compared with BXT?",
        "options": [
          {
            "key": "a",
            "text": "Remove conjunctive queries"
          },
          {
            "key": "b",
            "text": "Replace direct x-trap computation with oblivious shared computation"
          },
          {
            "key": "c",
            "text": "Send all plaintext files to the server"
          },
          {
            "key": "d",
            "text": "Use no encrypted index"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "OXT aims to reduce leakage from BXT\u2019s x-trap mechanism."
      },
      {
        "id": "LEC_W9_Q10",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q10 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Which structures are used in OXT\u2019s encrypted database?",
        "options": [
          {
            "key": "a",
            "text": "T-set and X-set"
          },
          {
            "key": "b",
            "text": "Only a public blockchain"
          },
          {
            "key": "c",
            "text": "Only a hash table in plaintext"
          },
          {
            "key": "d",
            "text": "RSA certificate and CRL"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "OXT uses T-set and X-set."
      },
      {
        "id": "LEC_W9_Q11",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q11 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What does the OXT size pattern reveal?",
        "options": [
          {
            "key": "a",
            "text": "The size of the database schema"
          },
          {
            "key": "b",
            "text": "The number of documents matching the first/s-term keyword"
          },
          {
            "key": "c",
            "text": "The client\u2019s password length"
          },
          {
            "key": "d",
            "text": "The plaintext content of every file"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Size pattern includes |DB(w1)| for the first keyword."
      },
      {
        "id": "LEC_W9_Q12",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q12 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What does the equality pattern indicate?",
        "options": [
          {
            "key": "a",
            "text": "Which queries have equal s-terms"
          },
          {
            "key": "b",
            "text": "Whether two files have equal byte size"
          },
          {
            "key": "c",
            "text": "Whether secret keys are identical"
          },
          {
            "key": "d",
            "text": "The order of words in a file"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "It tracks equality of s-terms across queries."
      },
      {
        "id": "LEC_W9_Q13",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q13 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is KPRP?",
        "options": [
          {
            "key": "a",
            "text": "Keyword-Pair Result Pattern"
          },
          {
            "key": "b",
            "text": "Key Protection Recovery Protocol"
          },
          {
            "key": "c",
            "text": "Known Plaintext Random Process"
          },
          {
            "key": "d",
            "text": "Keyword Public Retrieval Policy"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "KPRP is keyword-pair result-pattern leakage."
      },
      {
        "id": "LEC_W9_Q14",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q14 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Which OXT leakage can reveal document IDs matching the full conjunctive query?",
        "options": [
          {
            "key": "a",
            "text": "KPRP"
          },
          {
            "key": "b",
            "text": "Only ciphertext length"
          },
          {
            "key": "c",
            "text": "No leakage whatsoever"
          },
          {
            "key": "d",
            "text": "Key rotation pattern"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "KPRP exposes the result pattern for keyword pairs."
      },
      {
        "id": "LEC_W9_Q15",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q15 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What capability does a file-injection attacker use?",
        "options": [
          {
            "key": "a",
            "text": "Inject files containing chosen keywords"
          },
          {
            "key": "b",
            "text": "Read the client\u2019s private key directly"
          },
          {
            "key": "c",
            "text": "Disable the server\u2019s CPU"
          },
          {
            "key": "d",
            "text": "Change the encryption algorithm without access"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The attack assumes the ability to inject selected files/keywords."
      },
      {
        "id": "LEC_W9_Q16",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q16 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In the random-file intersection attack, what is intersected?",
        "options": [
          {
            "key": "a",
            "text": "Keywords in injected files returned by the query"
          },
          {
            "key": "b",
            "text": "Encryption keys from all clients"
          },
          {
            "key": "c",
            "text": "All document IDs in the database"
          },
          {
            "key": "d",
            "text": "The server\u2019s network packets"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The intersection can identify the queried keywords with high probability under the stated conditions."
      },
      {
        "id": "LEC_W9_Q17",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q17 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "The lecture\u2019s binary-search attack is used to:",
        "options": [
          {
            "key": "a",
            "text": "Recover queried keyword(s) from result patterns"
          },
          {
            "key": "b",
            "text": "Speed up AES encryption"
          },
          {
            "key": "c",
            "text": "Generate random keys"
          },
          {
            "key": "d",
            "text": "Prevent all query leakage"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Binary-search-style injections recover keyword positions/identities."
      },
      {
        "id": "LEC_W9_Q18",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q18 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Why is query privacy important according to the lecture?",
        "options": [
          {
            "key": "a",
            "text": "Keywords can reveal file contents or help classify files"
          },
          {
            "key": "b",
            "text": "Queries never reveal information"
          },
          {
            "key": "c",
            "text": "It makes storage larger"
          },
          {
            "key": "d",
            "text": "It removes the need for a database"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Query terms can expose sensitive information about documents."
      },
      {
        "id": "LEC_W9_Q19",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q19 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Which statement best describes ABE in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "It hides both message and attributes"
          },
          {
            "key": "b",
            "text": "It hides the payload, while attributes are passed in the clear"
          },
          {
            "key": "c",
            "text": "It reveals no information under any condition"
          },
          {
            "key": "d",
            "text": "It supports only wildcard vectors"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "ABE hides the message but not the attribute."
      },
      {
        "id": "LEC_W9_Q20",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q20 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What does Predicate Encryption hide?",
        "options": [
          {
            "key": "a",
            "text": "Only the ciphertext length"
          },
          {
            "key": "b",
            "text": "Both the payload and attribute"
          },
          {
            "key": "c",
            "text": "Only the server identity"
          },
          {
            "key": "d",
            "text": "Only the query timing"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "PE provides attribute hiding along with message hiding."
      },
      {
        "id": "LEC_W9_Q21",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q21 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "With a secret key for predicate f, what should a PE decryptor learn?",
        "options": [
          {
            "key": "a",
            "text": "The entire attribute x"
          },
          {
            "key": "b",
            "text": "Only the value f(x)"
          },
          {
            "key": "c",
            "text": "Every keyword in the database"
          },
          {
            "key": "d",
            "text": "The client\u2019s master key"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The key reveals only the predicate outcome."
      },
      {
        "id": "LEC_W9_Q22",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q22 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is HVE designed to support?",
        "options": [
          {
            "key": "a",
            "text": "Predicates over encrypted attribute vectors"
          },
          {
            "key": "b",
            "text": "Only public-key signatures"
          },
          {
            "key": "c",
            "text": "Plaintext file transfer"
          },
          {
            "key": "d",
            "text": "Password hashing only"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "HVE supports expressive predicates, including conjunctive matching."
      },
      {
        "id": "LEC_W9_Q23",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q23 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "In an HVE query vector, what does \u22c6 mean?",
        "options": [
          {
            "key": "a",
            "text": "The position must equal zero"
          },
          {
            "key": "b",
            "text": "The position is ignored / wildcard"
          },
          {
            "key": "c",
            "text": "The query is invalid"
          },
          {
            "key": "d",
            "text": "The position is encrypted twice"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Wildcard positions do not constrain a match."
      },
      {
        "id": "LEC_W9_Q24",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q24 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "For an HVE match, what must happen at every non-wildcard position?",
        "options": [
          {
            "key": "a",
            "text": "Values must be equal"
          },
          {
            "key": "b",
            "text": "Values must always be different"
          },
          {
            "key": "c",
            "text": "The position must be zero"
          },
          {
            "key": "d",
            "text": "The server must reveal the value"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Equality is required at all specified positions."
      },
      {
        "id": "LEC_W9_Q25",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q25 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "If the query vector is (1, \u22c6, \u22c6, \u22c6, 1), which positions are checked?",
        "options": [
          {
            "key": "a",
            "text": "All five positions"
          },
          {
            "key": "b",
            "text": "Only positions 2 and 4"
          },
          {
            "key": "c",
            "text": "Only positions 1 and 5"
          },
          {
            "key": "d",
            "text": "No positions"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The wildcard positions are ignored."
      },
      {
        "id": "LEC_W9_Q26",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q26 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is the relationship between SHVE and HVE in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "SHVE is a symmetric-key form of HVE"
          },
          {
            "key": "b",
            "text": "SHVE is unrelated to encryption"
          },
          {
            "key": "c",
            "text": "HVE is a file-injection attack"
          },
          {
            "key": "d",
            "text": "SHVE means searchable hash verification engine"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The lecture describes symmetric-key HVE built from PRF, XOR and symmetric-key encryption."
      },
      {
        "id": "LEC_W9_Q27",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q27 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is HXT intended to prevent?",
        "options": [
          {
            "key": "a",
            "text": "KPRP leakage"
          },
          {
            "key": "b",
            "text": "All encrypted storage"
          },
          {
            "key": "c",
            "text": "Use of conjunctive queries"
          },
          {
            "key": "d",
            "text": "Use of secret keys"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "HXT uses hidden membership testing to prevent KPRP leakage."
      },
      {
        "id": "LEC_W9_Q28",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q28 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "What is the main trade-off highlighted in these lectures?",
        "options": [
          {
            "key": "a",
            "text": "Efficient encrypted search can still leak patterns"
          },
          {
            "key": "b",
            "text": "Encryption always prevents all leakage"
          },
          {
            "key": "c",
            "text": "Search requires plaintext files"
          },
          {
            "key": "d",
            "text": "Conjunctive queries cannot be supported"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "SSE provides functionality but leakage must be carefully analyzed."
      },
      {
        "id": "LEC_W9_Q29",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q29 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Which is the correct match?",
        "options": [
          {
            "key": "a",
            "text": "BXT \u2014 least-frequent s-term and x-trap leakage"
          },
          {
            "key": "b",
            "text": "OXT \u2014 no leakage at all"
          },
          {
            "key": "c",
            "text": "ABE \u2014 attributes always hidden"
          },
          {
            "key": "d",
            "text": "HVE \u2014 wildcard means exact equality"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "This option matches the lecture\u2019s BXT description; the other statements are incorrect."
      },
      {
        "id": "LEC_W9_Q30",
        "week": 9,
        "source": "lecture",
        "lectureId": "w9_lec",
        "lecture": "Week 9 \u2014 SSE, Leakage & Attacks",
        "header": "Lecture Q30 \u2014 Week 9 \u2014 SSE, Leakage & Attacks",
        "question": "Which sequence best represents the evolution discussed?",
        "options": [
          {
            "key": "a",
            "text": "BXT \u2192 OXT \u2192 file-injection analysis \u2192 HVE/HXT approach"
          },
          {
            "key": "b",
            "text": "HXT \u2192 BXT \u2192 plaintext search \u2192 no encryption"
          },
          {
            "key": "c",
            "text": "ABE \u2192 AES key exchange \u2192 file deletion"
          },
          {
            "key": "d",
            "text": "OXT \u2192 remove all query functionality"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The lectures progress from BXT/OXT leakage to attacks and hidden-vector-based mitigation."
      }
    ]
  },
  {
    "week": 10,
    "count": 34,
    "title": "Week 10 Lecture Notes",
    "questions": [
      {
        "id": "LEC_W10_Q1",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q1 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "Which two building blocks does the SHVE construction assume?",
        "options": [
          {
            "key": "a",
            "text": "Bilinear maps and RSA"
          },
          {
            "key": "b",
            "text": "A secure PRF and CPA-secure symmetric encryption"
          },
          {
            "key": "c",
            "text": "LWE and a Bloom filter only"
          },
          {
            "key": "d",
            "text": "Hash functions only"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A secure PRF and CPA-secure symmetric encryption. SHVE assumes a secure keyed pseudorandom function (PRF) and CPA-secure symmetric-key encryption."
      },
      {
        "id": "LEC_W10_Q2",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q2 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "How many algorithms are listed as the SHVE scheme's core collection?",
        "options": [
          {
            "key": "a",
            "text": "Two"
          },
          {
            "key": "b",
            "text": "Three"
          },
          {
            "key": "c",
            "text": "Four"
          },
          {
            "key": "d",
            "text": "Six"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Four. Setup, Enc, Keygen, and Query make up the four algorithms."
      },
      {
        "id": "LEC_W10_Q3",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q3 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "In a SHVE predicate vector, what does a wildcard position mean?",
        "options": [
          {
            "key": "a",
            "text": "It must equal 0"
          },
          {
            "key": "b",
            "text": "It must equal 1"
          },
          {
            "key": "c",
            "text": "No equality check is required at that position"
          },
          {
            "key": "d",
            "text": "The whole query is rejected"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "No equality check is required at that position. The set S contains positions where the predicate is not a wildcard."
      },
      {
        "id": "LEC_W10_Q4",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q4 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "What is the purpose of including the index i in F(msk, x_i || i)?",
        "options": [
          {
            "key": "a",
            "text": "To sort keywords"
          },
          {
            "key": "b",
            "text": "To separate different vector positions"
          },
          {
            "key": "c",
            "text": "To remove the master key"
          },
          {
            "key": "d",
            "text": "To compute a discrete logarithm"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "To separate different vector positions. Including the index separates PRF inputs for different positions."
      },
      {
        "id": "LEC_W10_Q5",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q5 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "In SHVE Query, what happens when all required predicate positions match?",
        "options": [
          {
            "key": "a",
            "text": "The key K is recovered and decryption returns 0"
          },
          {
            "key": "b",
            "text": "The server learns the master secret key"
          },
          {
            "key": "c",
            "text": "The query always returns \u22a5"
          },
          {
            "key": "d",
            "text": "The vector is sorted"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The key K is recovered and decryption returns 0. The XOR terms cancel correctly, recovering K and allowing successful decryption of the encrypted zero."
      },
      {
        "id": "LEC_W10_Q6",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_40",
        "lecture": "Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "header": "Lecture Q6 \u2014 Lecture 40 \u2014 Hidden Vector Encryption (HVE / SHVE)",
        "question": "What is the key goal of HXT in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "Make all queries interactive"
          },
          {
            "key": "b",
            "text": "Hide individual cross-tag/result-pattern information"
          },
          {
            "key": "c",
            "text": "Replace symmetric encryption with RSA"
          },
          {
            "key": "d",
            "text": "Eliminate all false positives in every system"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Hide individual cross-tag/result-pattern information. HXT uses SHVE to hide individual cross-tag membership results, revealing the overall match/no-match outcome."
      },
      {
        "id": "LEC_W10_Q7",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q7 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "Which set operation corresponds to a conjunctive AND query?",
        "options": [
          {
            "key": "a",
            "text": "Union"
          },
          {
            "key": "b",
            "text": "Intersection"
          },
          {
            "key": "c",
            "text": "Complement"
          },
          {
            "key": "d",
            "text": "Symmetric difference"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Intersection. A document must match every keyword, so document sets are intersected."
      },
      {
        "id": "LEC_W10_Q8",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q8 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "Which set operation corresponds to a disjunctive OR query?",
        "options": [
          {
            "key": "a",
            "text": "Intersection"
          },
          {
            "key": "b",
            "text": "Union"
          },
          {
            "key": "c",
            "text": "Cartesian product"
          },
          {
            "key": "d",
            "text": "Complement only"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Union. A document qualifies if it contains at least one queried keyword."
      },
      {
        "id": "LEC_W10_Q9",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q9 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "What is the main inefficiency of the naive negation-based approach to OR queries?",
        "options": [
          {
            "key": "a",
            "text": "It cannot return correct results"
          },
          {
            "key": "b",
            "text": "It may create large intermediate result sets"
          },
          {
            "key": "c",
            "text": "It requires no encryption"
          },
          {
            "key": "d",
            "text": "It works only for numeric attributes"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "It may create large intermediate result sets. Negated terms can match most documents, increasing computation and communication costs."
      },
      {
        "id": "LEC_W10_Q10",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q10 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "How does the meta-keyword method represent a disjunctive query?",
        "options": [
          {
            "key": "a",
            "text": "As a single plaintext keyword"
          },
          {
            "key": "b",
            "text": "As a conjunction of meta-keywords"
          },
          {
            "key": "c",
            "text": "As a random vector only"
          },
          {
            "key": "d",
            "text": "As a discrete logarithm"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "As a conjunction of meta-keywords. The OR query is rewritten as an AND/conjunction of specially constructed meta-keywords."
      },
      {
        "id": "LEC_W10_Q11",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q11 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "For meta-keyword mk(i,j), which bit pattern is used?",
        "options": [
          {
            "key": "a",
            "text": "Zeros from i to j and ones elsewhere"
          },
          {
            "key": "b",
            "text": "Ones from i to j and zeros elsewhere"
          },
          {
            "key": "c",
            "text": "All zeros"
          },
          {
            "key": "d",
            "text": "All ones"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Zeros from i to j and ones elsewhere. The interval [i,j] is zero; positions outside it are one."
      },
      {
        "id": "LEC_W10_Q12",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q12 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "Which three properties are desirable for meta-keywords?",
        "options": [
          {
            "key": "a",
            "text": "Coverage, efficiency, security"
          },
          {
            "key": "b",
            "text": "Confidentiality, availability, compression"
          },
          {
            "key": "c",
            "text": "Sorting, hashing, signing"
          },
          {
            "key": "d",
            "text": "Completeness, soundness, zero knowledge"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Coverage, efficiency, security. The lecture names coverage, efficiency, and security."
      },
      {
        "id": "LEC_W10_Q13",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q13 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "How are keywords ordered before bucketization?",
        "options": [
          {
            "key": "a",
            "text": "Increasing order of frequency"
          },
          {
            "key": "b",
            "text": "Decreasing order of frequency"
          },
          {
            "key": "c",
            "text": "Always alphabetically"
          },
          {
            "key": "d",
            "text": "Randomly, with no ordering"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Increasing order of frequency. The lecture specifies increasing frequency."
      },
      {
        "id": "LEC_W10_Q14",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_41",
        "lecture": "Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "header": "Lecture Q14 \u2014 Lecture 41 \u2014 Disjunctive SSE and Meta-Keywords",
        "question": "Which scheme introduces the meta-keyword idea and can use conjunctive SSE schemes such as OXT or HXT as a black box?",
        "options": [
          {
            "key": "a",
            "text": "TWINSSE"
          },
          {
            "key": "b",
            "text": "Regev"
          },
          {
            "key": "c",
            "text": "SHVE only"
          },
          {
            "key": "d",
            "text": "DDH"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "TWINSSE. TWINSSE supports conjunctive and disjunctive Boolean queries using this idea."
      },
      {
        "id": "LEC_W10_Q15",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q15 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "What does Functional Encryption aim to reveal?",
        "options": [
          {
            "key": "a",
            "text": "Every plaintext in the database"
          },
          {
            "key": "b",
            "text": "Only the authorized function's output"
          },
          {
            "key": "c",
            "text": "The master secret key"
          },
          {
            "key": "d",
            "text": "No computation result at all"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Only the authorized function's output. A function-specific key enables recovery of the authorized function output."
      },
      {
        "id": "LEC_W10_Q16",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q16 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "Which hardness assumption underlies the first inner-product FE construction in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "Decisional Diffie\u2013Hellman (DDH)"
          },
          {
            "key": "b",
            "text": "Search-LWE only"
          },
          {
            "key": "c",
            "text": "P \u2260 NP"
          },
          {
            "key": "d",
            "text": "Bloom-filter security"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Decisional Diffie\u2013Hellman (DDH). Lecture 42 presents a DDH-based inner-product functional encryption construction."
      },
      {
        "id": "LEC_W10_Q17",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q17 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "In the DDH-based construction, what is h_i?",
        "options": [
          {
            "key": "a",
            "text": "g + s_i"
          },
          {
            "key": "b",
            "text": "g raised to s_i, i.e. g^{s_i}"
          },
          {
            "key": "c",
            "text": "The plaintext x_i"
          },
          {
            "key": "d",
            "text": "A bucket identifier"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "g raised to s_i, i.e. g^{s_i}. The public value is h_i = g^{s_i}."
      },
      {
        "id": "LEC_W10_Q18",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q18 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "What is the form of the function key for vector y in the described construction?",
        "options": [
          {
            "key": "a",
            "text": "Product of all ciphertexts"
          },
          {
            "key": "b",
            "text": "Sum of s_i y_i"
          },
          {
            "key": "c",
            "text": "The master public key alone"
          },
          {
            "key": "d",
            "text": "A random Bloom filter"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Sum of s_i y_i. The function key combines the secret values with the function coefficients."
      },
      {
        "id": "LEC_W10_Q19",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q19 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "After combining and cancelling terms in the DDH-based FE scheme, what does decryption obtain before recovering the numeric output?",
        "options": [
          {
            "key": "a",
            "text": "g raised to the inner product"
          },
          {
            "key": "b",
            "text": "The original secret vector"
          },
          {
            "key": "c",
            "text": "A PRF key"
          },
          {
            "key": "d",
            "text": "A zero-knowledge transcript"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "g raised to the inner product. The group element g^{<x,y>} is obtained, and its exponent is recovered using a discrete logarithm."
      },
      {
        "id": "LEC_W10_Q20",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_42",
        "lecture": "Lecture 42 \u2014 Functional Encryption (Part I)",
        "header": "Lecture Q20 \u2014 Lecture 42 \u2014 Functional Encryption (Part I)",
        "question": "What main computational limitation is highlighted for this DDH-based FE example?",
        "options": [
          {
            "key": "a",
            "text": "Bucketization"
          },
          {
            "key": "b",
            "text": "Discrete-log computation"
          },
          {
            "key": "c",
            "text": "Rounding noise"
          },
          {
            "key": "d",
            "text": "Interactive proof rounds"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Discrete-log computation. Recovering the inner product from g raised to that value requires a discrete logarithm."
      },
      {
        "id": "LEC_W10_Q21",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q21 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "What is the typical LWE sample equation?",
        "options": [
          {
            "key": "a",
            "text": "b = <a,s> + e mod q"
          },
          {
            "key": "b",
            "text": "b = a/s"
          },
          {
            "key": "c",
            "text": "b = g^s only"
          },
          {
            "key": "d",
            "text": "b = x OR y"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "b = <a,s> + e mod q. LWE samples are noisy linear equations modulo q."
      },
      {
        "id": "LEC_W10_Q22",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q22 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "What is the goal of Search-LWE?",
        "options": [
          {
            "key": "a",
            "text": "Distinguish two languages"
          },
          {
            "key": "b",
            "text": "Recover the secret vector"
          },
          {
            "key": "c",
            "text": "Sort keywords"
          },
          {
            "key": "d",
            "text": "Prove a statement without revealing knowledge"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recover the secret vector. Search-LWE asks for the hidden secret."
      },
      {
        "id": "LEC_W10_Q23",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q23 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "What is the goal of Decisional-LWE?",
        "options": [
          {
            "key": "a",
            "text": "Recover all plaintexts"
          },
          {
            "key": "b",
            "text": "Distinguish LWE samples from random-looking samples"
          },
          {
            "key": "c",
            "text": "Compute a union"
          },
          {
            "key": "d",
            "text": "Find a discrete logarithm"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Distinguish LWE samples from random-looking samples. The decisional version is a distinguishing problem."
      },
      {
        "id": "LEC_W10_Q24",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q24 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "In the LWE-based FE construction, why is the same randomness reused across vector components?",
        "options": [
          {
            "key": "a",
            "text": "To enable cancellation of secret-dependent terms"
          },
          {
            "key": "b",
            "text": "To reveal the secret vector"
          },
          {
            "key": "c",
            "text": "To avoid using a function key"
          },
          {
            "key": "d",
            "text": "To sort the input vector"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "To enable cancellation of secret-dependent terms. Shared randomness lets the secret-dependent terms cancel during decryption."
      },
      {
        "id": "LEC_W10_Q25",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q25 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "After cancellation in LWE-based FE, how is the inner product recovered?",
        "options": [
          {
            "key": "a",
            "text": "By taking a discrete logarithm"
          },
          {
            "key": "b",
            "text": "By rescaling and rounding"
          },
          {
            "key": "c",
            "text": "By taking a union of document sets"
          },
          {
            "key": "d",
            "text": "By repeating a coin toss"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "By rescaling and rounding. The remaining value is a scaled inner product plus small error; rescaling and rounding recover the result."
      },
      {
        "id": "LEC_W10_Q26",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_43",
        "lecture": "Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "header": "Lecture Q26 \u2014 Lecture 43 \u2014 Functional Encryption (Part II), LWE",
        "question": "What condition is important for correct rounding in the LWE-based scheme?",
        "options": [
          {
            "key": "a",
            "text": "Noise must be sufficiently small"
          },
          {
            "key": "b",
            "text": "Noise must be infinite"
          },
          {
            "key": "c",
            "text": "The plaintext must be a keyword"
          },
          {
            "key": "d",
            "text": "The modulus must equal zero"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Noise must be sufficiently small. The error must remain small enough not to change the rounded message."
      },
      {
        "id": "LEC_W10_Q27",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q27 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "Who tries to convince the verifier that a statement is true?",
        "options": [
          {
            "key": "a",
            "text": "Verifier"
          },
          {
            "key": "b",
            "text": "Prover"
          },
          {
            "key": "c",
            "text": "Database"
          },
          {
            "key": "d",
            "text": "Key generator"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Prover. The prover presents the proof; the verifier checks it."
      },
      {
        "id": "LEC_W10_Q28",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q28 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "Which property says an honest prover should be accepted?",
        "options": [
          {
            "key": "a",
            "text": "Soundness"
          },
          {
            "key": "b",
            "text": "Completeness"
          },
          {
            "key": "c",
            "text": "Zero knowledge"
          },
          {
            "key": "d",
            "text": "Coverage"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Completeness. Completeness means valid proofs from an honest prover are accepted."
      },
      {
        "id": "LEC_W10_Q29",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q29 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "Which property limits a dishonest prover's ability to prove a false statement?",
        "options": [
          {
            "key": "a",
            "text": "Completeness"
          },
          {
            "key": "b",
            "text": "Soundness"
          },
          {
            "key": "c",
            "text": "Bucketization"
          },
          {
            "key": "d",
            "text": "CPA security"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Soundness. Soundness ensures false claims cannot be successfully proved except with bounded probability."
      },
      {
        "id": "LEC_W10_Q30",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q30 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "Which property says the proof reveals no additional knowledge beyond validity of the statement?",
        "options": [
          {
            "key": "a",
            "text": "Zero knowledge"
          },
          {
            "key": "b",
            "text": "Search-LWE"
          },
          {
            "key": "c",
            "text": "Coverage"
          },
          {
            "key": "d",
            "text": "Intersection"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Zero knowledge. Zero knowledge protects the witness/private information."
      },
      {
        "id": "LEC_W10_Q31",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q31 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "In the colourblind-verifier example, what is the probability of a false claim passing one round?",
        "options": [
          {
            "key": "a",
            "text": "0"
          },
          {
            "key": "b",
            "text": "1/4"
          },
          {
            "key": "c",
            "text": "1/2"
          },
          {
            "key": "d",
            "text": "1"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "1/2. A prover unable to distinguish the colours can only guess whether the paper was flipped."
      },
      {
        "id": "LEC_W10_Q32",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q32 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "After k independent rounds, what is the false-acceptance probability in that example?",
        "options": [
          {
            "key": "a",
            "text": "k/2"
          },
          {
            "key": "b",
            "text": "1/k"
          },
          {
            "key": "c",
            "text": "2^-k"
          },
          {
            "key": "d",
            "text": "1 - 2^-k"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "2^-k. The probability of guessing correctly in every round is (1/2)^k."
      },
      {
        "id": "LEC_W10_Q33",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q33 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "What does NP mean in the lecture's complexity discussion?",
        "options": [
          {
            "key": "a",
            "text": "Every problem can be solved instantly"
          },
          {
            "key": "b",
            "text": "A proposed witness can be verified in polynomial time"
          },
          {
            "key": "c",
            "text": "All problems require exponential time"
          },
          {
            "key": "d",
            "text": "P and NP are proved equal"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A proposed witness can be verified in polynomial time. NP concerns polynomial-time verification of a proposed witness."
      },
      {
        "id": "LEC_W10_Q34",
        "week": 10,
        "source": "lecture",
        "lectureId": "lec_44",
        "lecture": "Lecture 44 \u2014 Zero-Knowledge Proofs",
        "header": "Lecture Q34 \u2014 Lecture 44 \u2014 Zero-Knowledge Proofs",
        "question": "Which relationship is stated between P and NP?",
        "options": [
          {
            "key": "a",
            "text": "P is a subset of NP"
          },
          {
            "key": "b",
            "text": "NP is a subset of P, proven"
          },
          {
            "key": "c",
            "text": "P equals NP, proven"
          },
          {
            "key": "d",
            "text": "They have no relationship"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "P is a subset of NP. Every polynomial-time decidable problem can also be polynomial-time verified, so P \u2286 NP."
      }
    ]
  }
];
