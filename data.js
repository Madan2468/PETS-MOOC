window.QUIZ_DATA = [
  {
    "week": 1,
    "count": 23,
    "questions": [
      {
        "id": "W1_Q1",
        "week": 1,
        "header": "Q1 — Privacy vs Security (BUG example)",
        "question": "Why does the \"BUG\" cloud storage system violate its privacy policy even though the access control matrix technically enforces security?",
        "options": [
          {
            "key": "a",
            "text": "Tom and Jerry can both read each other's files directly"
          },
          {
            "key": "b",
            "text": "BUG granted itself \"share\" access to all files, letting it authorize other users without owner approval"
          },
          {
            "key": "c",
            "text": "The access control matrix was not encrypted"
          },
          {
            "key": "d",
            "text": "Jerry has \"Write\" access to Tom's files without permission"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "BUG granted itself 'share' access to all user files. This means it can re-authorize other users to view Tom's files without Tom's consent, violating the privacy policy even though access controls technically function."
      },
      {
        "id": "W1_Q2",
        "week": 1,
        "header": "Q2 — Classification of PET Types",
        "question": "Which pairings of PET category and example are accurate?",
        "options": [
          {
            "key": "a",
            "text": "Reduce identifiability: Differential Privacy, Synthetic Data"
          },
          {
            "key": "b",
            "text": "Hide/shield data: Homomorphic Encryption, Zero-Knowledge Proofs"
          },
          {
            "key": "c",
            "text": "Split dataset/control access: TEEs, SMPC, Federated Learning"
          },
          {
            "key": "d",
            "text": "Reduce identifiability: Homomorphic Encryption, Federated Learning"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "Privacy Enhancing Technologies (PETs) fall into specific functional categories: Differential Privacy and Synthetic Data reduce identifiability; Homomorphic Encryption and Zero-Knowledge Proofs hide/shield data; TEEs, SMPC, and Federated Learning control access and split datasets."
      },
      {
        "id": "W1_Q3",
        "week": 1,
        "header": "Q3 — Computing on Encrypted Data",
        "question": "Which PET lets a cloud server compute on data without ever seeing the plaintext?",
        "options": [
          {
            "key": "a",
            "text": "Differential Privacy"
          },
          {
            "key": "b",
            "text": "Homomorphic Encryption"
          },
          {
            "key": "c",
            "text": "Synthetic Data"
          },
          {
            "key": "d",
            "text": "Federated Learning"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Homomorphic Encryption (HE) allows computations to be evaluated directly on ciphertexts without ever decrypting or revealing plaintext to the cloud server."
      },
      {
        "id": "W1_Q4",
        "week": 1,
        "header": "Q4 — Homomorphism Definition",
        "question": "f: G → H is a homomorphism if:",
        "options": [
          {
            "key": "a",
            "text": "f(g1+g2) = f(g1)+f(g2), same operation in both G and H"
          },
          {
            "key": "b",
            "text": "f(g1+g2) = f(g1) † f(g2), + is the operation in G and † is the operation in H"
          },
          {
            "key": "c",
            "text": "f(g1) = f(g2) for all g1, g2"
          },
          {
            "key": "d",
            "text": "f(g1×g2) = f(g1) - f(g2)"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A algebraic homomorphism f: G → H maps an operation in group G (e.g., +) to another operation in group H (e.g., †), so f(g1 + g2) = f(g1) † f(g2)."
      },
      {
        "id": "W1_Q5",
        "week": 1,
        "header": "Q5 — RSA Multiplicative Homomorphism",
        "question": "If c1 = m1^e mod N and c2 = m2^e mod N, what does (c1 × c2) mod N represent?",
        "options": [
          {
            "key": "a",
            "text": "Encryption of (m1+m2)"
          },
          {
            "key": "b",
            "text": "Encryption of m1 only, with m2 discarded"
          },
          {
            "key": "c",
            "text": "An invalid ciphertext that cannot be decrypted"
          },
          {
            "key": "d",
            "text": "Encryption of (m1×m2)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "In textbook RSA, multiplying two ciphertexts c1 and c2 mod N results in (m1^e * m2^e) mod N = (m1*m2)^e mod N, which decrypts to the product of plaintexts (m1 × m2)."
      },
      {
        "id": "W1_Q6",
        "week": 1,
        "header": "Q6 — Paillier Additive Homomorphism",
        "question": "Which operation on Paillier ciphertexts yields Enc(m1+m2)?",
        "options": [
          {
            "key": "a",
            "text": "Multiplying the ciphertexts: c1×c2 mod n²"
          },
          {
            "key": "b",
            "text": "Adding the ciphertexts: c1+c2"
          },
          {
            "key": "c",
            "text": "Raising c1 to the power of c2"
          },
          {
            "key": "d",
            "text": "Subtracting the ciphertexts: c1-c2"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Paillier encryption is additively homomorphic: multiplying two ciphertexts (c1 × c2 mod n²) results in the encryption of the sum of the plaintexts Enc(m1 + m2)."
      },
      {
        "id": "W1_Q7",
        "week": 1,
        "header": "Q7 — Why Parameters Matter",
        "question": "A symmetric HE scheme fails to decrypt correctly when p=7, but works when p=23 (same m1, m2, similar r1, r2). What does this show?",
        "options": [
          {
            "key": "a",
            "text": "The scheme is completely broken and can't be used for additive homomorphism"
          },
          {
            "key": "b",
            "text": "The scheme only works when p is a prime number"
          },
          {
            "key": "c",
            "text": "The secret key p must be large enough relative to the noise terms (2r1+2r2+m1+m2) so the sum stays smaller than p and doesn't wrap around during the mod p operation"
          },
          {
            "key": "d",
            "text": "The value of q has no effect on correctness"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Decryption modulo p requires the accumulated noise terms (2r1 + 2r2 + m1 + m2) to remain smaller than p. If p is too small, noise wraps around mod p and corrupts decryption."
      },
      {
        "id": "W1_Q8",
        "week": 1,
        "header": "Q8 — Semantic Security via Approximate GCD",
        "question": "Given x1=s1+p·q1 and x2=s2+p·q2 (where s1, s2 are much smaller than p), can p be computed efficiently from just x1 and x2?",
        "options": [
          {
            "key": "a",
            "text": "Yes, easily, using the standard Euclidean algorithm"
          },
          {
            "key": "b",
            "text": "No — the approximate GCD problem appears hard even with arbitrarily many samples"
          },
          {
            "key": "c",
            "text": "Only possible if p is an even number"
          },
          {
            "key": "d",
            "text": "Trivial, because s1 and s2 can simply be subtracted out algebraically"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The Approximate GCD problem adds small unknown noise (s1, s2) to multiples of prime p. Finding p without knowing the noise is computationally hard, which guarantees semantic security."
      },
      {
        "id": "W1_Q9",
        "week": 1,
        "header": "Q9 — Classification of Homomorphic Encryption Schemes",
        "question": "Which pairings are correct, based on the number of operations supported?",
        "options": [
          {
            "key": "a",
            "text": "Somewhat homomorphic schemes support infinite additions but only 1 multiplication"
          },
          {
            "key": "b",
            "text": "Leveled homomorphic schemes support infinite additions and a fixed number L of multiplications"
          },
          {
            "key": "c",
            "text": "Fully homomorphic schemes support infinite additions and infinite multiplications"
          },
          {
            "key": "d",
            "text": "Somewhat homomorphic schemes support infinite multiplications but only 1 addition"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "Somewhat HE allows 1 multiplication and unlimited additions; Leveled HE allows a fixed L multiplications and unlimited additions; Fully HE (FHE) allows unlimited additions and multiplications."
      },
      {
        "id": "W1_Q10",
        "week": 1,
        "header": "Q10 — Bootstrapping Analogy (Glove Boxes)",
        "question": "In the \"defective glove box\" analogy, what does placing box B1 inside box B2 (which holds B1's key) and opening B1 represent, in actual bootstrapping?",
        "options": [
          {
            "key": "a",
            "text": "Discarding the ciphertext and starting the computation over from scratch"
          },
          {
            "key": "b",
            "text": "Decrypting the final result to reveal the plaintext to the data owner"
          },
          {
            "key": "c",
            "text": "Homomorphically evaluating the decryption circuit on an encryption of the secret key and the stiffened ciphertext, to produce a \"refreshed\" ciphertext with reduced noise"
          },
          {
            "key": "d",
            "text": "Generating a new public key pair for the next round of encryption."
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "In the glove box analogy, evaluating the decryption circuit on an encrypted secret key and noisy ciphertext homomorphically cleans the ciphertext, producing a refreshed ciphertext with smaller noise."
      },
      {
        "id": "W1_Q11",
        "week": 1,
        "header": "Q11 — The Obstacle to Full Bootstrappability",
        "question": "Even after bootstrapping computes an encryption of m1+m2, the scheme is \"almost, but not quite\" bootstrappable. What's the technical obstacle?",
        "options": [
          {
            "key": "a",
            "text": "The public key becomes too small to securely encrypt the secret key"
          },
          {
            "key": "b",
            "text": "Computing [c/p] mod 2 as part of decryption is too complex for the evaluation function to compute without introducing a decryption error"
          },
          {
            "key": "c",
            "text": "Addition can't be performed on ciphertexts encrypted under different public keys"
          },
          {
            "key": "d",
            "text": "The scheme becomes vulnerable to brute-force factoring of p once bootstrapping begins"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Computing [c/p] mod 2 during decryption requires evaluating rounding/division homomorphically, which introduces high circuit complexity and decryption noise error."
      },
      {
        "id": "W1_Q12",
        "week": 1,
        "header": "Q12 — Sparse Subset-Sum Fix (Security/Performance Trade-off)",
        "question": "Regarding the bootstrappable scheme (which uses sparse subset sums r1,...,rβ to approximate 1/p), which statements are accurate?",
        "options": [
          {
            "key": "a",
            "text": "Security relies on the hardness of the sparse subset-sum problem (SSSP), which has β^α possible secret subsets to search over"
          },
          {
            "key": "b",
            "text": "β can be chosen large enough (polynomial in the security parameter λ) that an exponential number of subsets are close to 1/p, making subset-recovery attacks infeasible"
          },
          {
            "key": "c",
            "text": "This bootstrapping approach makes the resulting FHE schemes highly practical, with small and efficient ciphertexts suitable for production deployment"
          },
          {
            "key": "d",
            "text": "The encryption key contains a \"hint\" of the secret key p, which is what makes decryption evaluable as a low-degree circuit"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "Bootstrapping uses the Sparse Subset-Sum Problem (SSSP) where β^α subsets exist. β must be polynomial in security parameter λ, and the public key includes a hint of secret key p."
      },
      {
        "id": "W1_Q13",
        "week": 1,
        "header": "Q13 — Lattices: Definition",
        "question": "What is used to describe a lattice compactly, and what shape do the connected lattice points form?",
        "options": [
          {
            "key": "a",
            "text": "A single generator point; the points form a circle"
          },
          {
            "key": "b",
            "text": "Basis vectors that span a parallelogram; connecting the dots forms parallelograms"
          },
          {
            "key": "c",
            "text": "A prime modulus; the points form a triangle"
          },
          {
            "key": "d",
            "text": "An error distribution; the points form a hexagon"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Lattices are discrete grid structures generated by basis vectors spanning a parallelogram. Connecting neighboring points forms congruent parallelograms in n-dimensional space."
      },
      {
        "id": "W1_Q14",
        "week": 1,
        "header": "Q14 — Closest Vector Problem (CVP)",
        "question": "Given a lattice L with a known basis, and a point P that's not necessarily a lattice point, what is the CVP challenge?",
        "options": [
          {
            "key": "a",
            "text": "Find the basis vectors that generate the lattice L from scratch"
          },
          {
            "key": "b",
            "text": "Determine whether P lies exactly on a lattice point"
          },
          {
            "key": "c",
            "text": "Find the lattice point Q that is closest to the given point P"
          },
          {
            "key": "d",
            "text": "Compute the greatest common divisor of the coordinates of P​"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Closest Vector Problem (CVP): Given a target point P in space, CVP asks to find the closest lattice point Q to P."
      },
      {
        "id": "W1_Q15",
        "week": 1,
        "header": "Q15 — LWE: Structure and Hardness",
        "question": "Which statements accurately describe the Learning with Errors (LWE) problem?",
        "options": [
          {
            "key": "a",
            "text": "In the search variant, the goal is to find the secret vector s by observing many pairs (ai, bi) where bi = ⟨s, ai⟩ + ei (mod q)"
          },
          {
            "key": "b",
            "text": "In the decisional variant, the goal is to distinguish LWE samples (ai, bi) from uniformly random samples"
          },
          {
            "key": "c",
            "text": "According to Regev (2005) and Peikert (2009), LWE is as hard as certain worst-case lattice problems in dimension n, for a proper choice of parameters"
          },
          {
            "key": "d",
            "text": "The error terms ei must always be large relative to q for LWE to remain secure"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "Learning with Errors (LWE) search variant finds secret vector s; decisional variant distinguishes LWE samples from uniform random; and Regev/Peikert proved LWE is as hard as worst-case lattice problems."
      },
      {
        "id": "W1_Q16",
        "week": 1,
        "header": "Q16 — LWE Homomorphic Multiplication (Tensor Product)",
        "question": "In the tensor product step (⟨s⊗s, c1⊗c2⟩ ≈ σ1σ2q²/4), what side effect requires a \"dimension reduction\" fix afterward?",
        "options": [
          {
            "key": "a",
            "text": "The error stays constant, but the secret key becomes invalid"
          },
          {
            "key": "b",
            "text": "The ciphertext becomes completely undecryptable and unrecoverable"
          },
          {
            "key": "c",
            "text": "The modulus q must be doubled after every multiplication"
          },
          {
            "key": "d",
            "text": "The error grows quadratically, and the dimension of the ciphertext/secret key squares"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Homomorphic multiplication of LWE ciphertexts via tensor product (c1 ⊗ c2) squares the dimension of the ciphertext and secret key while causing quadratic noise growth, requiring dimension reduction."
      },
      {
        "id": "W1_Q17",
        "week": 1,
        "header": "Q17 — LWE vs Ring-LWE Key Size",
        "question": "For parameters n=4, q=7, standard LWE's public key is 40 elements (120 bits), but Ring-LWE's is only 8 elements (24 bits). What's the structural reason for this reduction?",
        "options": [
          {
            "key": "a",
            "text": "Ring-LWE replaces the m×n random matrix A and length-m vector b of standard LWE with just two degree-(n-1) polynomials a(x) and b(x), each needing only n coefficients"
          },
          {
            "key": "b",
            "text": "Ring-LWE uses a smaller modulus q than standard LWE"
          },
          {
            "key": "c",
            "text": "Ring-LWE eliminates the need for an error term entirely"
          },
          {
            "key": "d",
            "text": "Ring-LWE uses a secret key of smaller dimension than standard LWE"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Ring-LWE replaces the m×n matrix A and vector b of standard LWE with degree (n-1) polynomials a(x) and b(x), reducing public key size from 40 elements to just 8 elements."
      },
      {
        "id": "W1_Q18",
        "week": 1,
        "header": "Q18 — The Torus as an Algebraic Structure",
        "question": "The Torus 𝕋 = ℝ/ℤ under the operation (𝕋, +) forms:",
        "options": [
          {
            "key": "a",
            "text": "A field"
          },
          {
            "key": "b",
            "text": "A vector space over ℤ"
          },
          {
            "key": "c",
            "text": "An abelian group"
          },
          {
            "key": "d",
            "text": "A ring"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The Torus 𝕋 = ℝ/ℤ under addition forms an abelian group (it is commutative, associative, has identity 0, and inverses mod 1)."
      },
      {
        "id": "W1_Q19",
        "week": 1,
        "header": "Q19 — Discretized Torus Representation",
        "question": "In the discretized Torus 𝕋q, for practical purposes, torus elements are represented as:",
        "options": [
          {
            "key": "a",
            "text": "Elements of ℤ_q²"
          },
          {
            "key": "b",
            "text": "Real numbers in [0,1)"
          },
          {
            "key": "c",
            "text": "Fractions i/q in floating point"
          },
          {
            "key": "d",
            "text": "Elements modulo q (i.e., just the numerator/integer part)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "In discretized Torus 𝕋q, real values in [0,1) are represented by integer numerators modulo q (elements of ℤq)."
      },
      {
        "id": "W1_Q20",
        "week": 1,
        "header": "Q20 — TLWE Ciphertext Construction",
        "question": "In TLWE, the ciphertext c = (a1,...,an, b) is constructed such that b equals which of the following? (Select all that apply)",
        "options": [
          {
            "key": "a",
            "text": "Σsⱼaⱼ − μ + e"
          },
          {
            "key": "b",
            "text": "A value independent of the secret key s"
          },
          {
            "key": "c",
            "text": "Σsⱼaⱼ + μ + e"
          },
          {
            "key": "d",
            "text": "The sum of the secret key components with the message added, plus noise"
          }
        ],
        "correct": [
          "c",
          "d"
        ],
        "explanation": "In TLWE, b is constructed as Σ(sj * aj) + μ + e, where s is secret key, a is random vector, μ is plaintext message, and e is Gaussian error noise."
      },
      {
        "id": "W1_Q21",
        "week": 1,
        "header": "Q21 — ENISA Definition of PETs",
        "question": "According to the ENISA definition discussed, PETs are best described as:",
        "options": [
          {
            "key": "a",
            "text": "Legal frameworks that regulate how governments can access citizen data"
          },
          {
            "key": "b",
            "text": "Software and hardware solutions comprising technical processes, methods, or knowledge to achieve specific privacy/data protection functionality or protect against privacy risks"
          },
          {
            "key": "c",
            "text": "Marketing techniques used by companies to advertise their commitment to user privacy"
          },
          {
            "key": "d",
            "text": "Encryption algorithms exclusively designed for securing financial transactions"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "ENISA defines PETs as software and hardware solutions comprising technical processes, methods, or knowledge to achieve specific data protection and privacy functionality."
      },
      {
        "id": "W1_Q22",
        "week": 1,
        "header": "Q22 — DPDP Act, 2023 — Rights of Data Principals",
        "question": "Which of the following are identified in the lecture as core rights granted to individuals (\"Data Principals\") under India's DPDP Act, 2023?",
        "options": [
          {
            "key": "a",
            "text": "Right to Access Information about data being processed and with whom it is shared"
          },
          {
            "key": "b",
            "text": "Right to Correction and Erasure of inaccurate or unnecessary data"
          },
          {
            "key": "c",
            "text": "Right to sell one's personal data directly to third parties for profit"
          },
          {
            "key": "d",
            "text": "Right to Nominate another person to exercise rights in case of death or incapacity"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "India's DPDP Act 2023 grants rights to access data processing info, right to correction/erasure, and right to nominate. Selling personal data is not a recognized right."
      },
      {
        "id": "W1_Q23",
        "week": 1,
        "header": "Q23 — Alice and the Workers Analogy (FHE)",
        "question": "In the \"Alice and the workers\" analogy used to explain Fully Homomorphic Encryption (FHE), what does the \"locked glove box\" represent?",
        "options": [
          {
            "key": "a",
            "text": "The secret key used for decryption"
          },
          {
            "key": "b",
            "text": "The final jewelry product, i.e., the decrypted output"
          },
          {
            "key": "c",
            "text": "The raw materials themselves, i.e., the plaintext"
          },
          {
            "key": "d",
            "text": "The encryption process that allows computation on data without exposing it, corresponding to the Eval function"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "In Alice's glove box analogy, the locked glove box represents the Eval function / encryption container that allows workers to manipulate jewelry (data) without touching plaintext."
      }
    ]
  },
  {
    "week": 2,
    "count": 20,
    "questions": [
      {
        "id": "W2_Q1",
        "week": 2,
        "header": "Q1. In TGLWE encryption, given two polynomials a, b ∈ TN,q[X], what does a · b represent?",
        "question": "In TGLWE encryption, given two polynomials a, b ∈ TN,q[X], what does a · b represent?",
        "options": [
          {
            "key": "a",
            "text": "The external product of a and b"
          },
          {
            "key": "b",
            "text": "It is not defined"
          },
          {
            "key": "c",
            "text": "The addition of a and b"
          },
          {
            "key": "d",
            "text": "The convolution of a and b"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In TGLWE, multiplication a · b between two torus polynomials a, b ∈ TN,q[X] is not defined because the Torus 𝕋 is a ℤ-module, not a ring."
      },
      {
        "id": "W2_Q2",
        "week": 2,
        "header": "Q2. Why is TGLWE preferred over TLWE when multiple torus elements need to be encrypted?",
        "question": "Why is TGLWE preferred over TLWE when multiple torus elements need to be encrypted?",
        "options": [
          {
            "key": "a",
            "text": "TGLWE produces shorter ciphertexts for a single element"
          },
          {
            "key": "b",
            "text": "TLWE cannot encrypt more than one element"
          },
          {
            "key": "c",
            "text": "Coefficient packing allows up to N torus elements to be encoded as coefficients of one polynomial plaintext"
          },
          {
            "key": "d",
            "text": "TGLWE eliminates the private key"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "TGLWE enables coefficient packing, allowing up to N torus elements to be packed into the N coefficients of a single polynomial plaintext."
      },
      {
        "id": "W2_Q3",
        "week": 2,
        "header": "Q3. Which statements about the Gadget Matrix and G-1 are TRUE?",
        "question": "Which statements about the Gadget Matrix and G-1 are TRUE?",
        "options": [
          {
            "key": "a",
            "text": "G-1(v) replaces each entry by its signed radix-B expansion"
          },
          {
            "key": "b",
            "text": "G-1(v)GT is always exactly equal to v"
          },
          {
            "key": "c",
            "text": "Gadget matrix technique helps express TLWE ciphertexts as matrices for ciphertext multiplication"
          },
          {
            "key": "d",
            "text": "Flattening via the gadget matrix helps control noise growth"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "Gadget matrix expansion G^-1(v) uses signed radix-B expansion, helps express TLWE ciphertexts as matrices for multiplication, and controls noise growth via bounded small coefficients."
      },
      {
        "id": "W2_Q4",
        "week": 2,
        "header": "Q4. Given n=1, l=2, B=4, q=64, v = (41/64, 26/64), what is G-1(v)?",
        "question": "Given n=1, l=2, B=4, q=64, v = (41/64, 26/64), what is G-1(v)?",
        "options": [
          {
            "key": "a",
            "text": "[-6, 7]"
          },
          {
            "key": "b",
            "text": "[-1, -2, -2, -1]"
          },
          {
            "key": "c",
            "text": "[40/64, 28/64]"
          },
          {
            "key": "d",
            "text": "[-1, -2, 1, -2, -1, -2]"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Decomposing v = (41/64, 26/64) with B=4, l=2 yields the signed radix-4 digit vector [-1, -2, -2, -1]."
      },
      {
        "id": "W2_Q5",
        "week": 2,
        "header": "Q5. In TGSW encryption, why is the assumption p = Bl made?",
        "question": "In TGSW encryption, why is the assumption p = Bl made?",
        "options": [
          {
            "key": "a",
            "text": "So q must always be a power of 2"
          },
          {
            "key": "b",
            "text": "So noise distribution becomes zero"
          },
          {
            "key": "c",
            "text": "So the gadget matrix is defined over Tp, matching the plaintext modulus"
          },
          {
            "key": "d",
            "text": "So the private key can be reused directly"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Setting p = B^l ensures the gadget matrix is defined over Tp, matching the plaintext modulus structure."
      },
      {
        "id": "W2_Q6",
        "week": 2,
        "header": "Q6. What is the internal product of two TGSW ciphertexts?",
        "question": "What is the internal product of two TGSW ciphertexts?",
        "options": [
          {
            "key": "a",
            "text": "C1 + C2"
          },
          {
            "key": "b",
            "text": "G(C1) · C2"
          },
          {
            "key": "c",
            "text": "G-1(C2) · C1"
          },
          {
            "key": "d",
            "text": "G-1(c2) · C1, where c2 is TLWE"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The internal product of two TGSW ciphertexts C1 and C2 is computed as G^-1(C2) · C1."
      },
      {
        "id": "W2_Q7",
        "week": 2,
        "header": "Q7. Which statements are TRUE regarding TGSW multiplicative noise growth? (MSQ)",
        "question": "Which statements are TRUE regarding TGSW multiplicative noise growth? (MSQ)",
        "options": [
          {
            "key": "a",
            "text": "Multiplicative noise remains constant regardless of multiplications"
          },
          {
            "key": "b",
            "text": "||G-1(C2)||∞ ≤ B/2, helping control noise"
          },
          {
            "key": "c",
            "text": "Error has components from amplified Z1, amplified Z2, and amplified rounding error"
          },
          {
            "key": "d",
            "text": "C3 can be written as TGSWs(0) + (m1m2)GT when errors remain small"
          }
        ],
        "correct": [
          "b",
          "c",
          "d"
        ],
        "explanation": "TGSW noise control relies on ||G^-1(C2)||∞ ≤ B/2, error components from amplified noise and rounding, and structural representation TGSWs(0) + (m1*m2)G^T."
      },
      {
        "id": "W2_Q8",
        "week": 2,
        "header": "Q8. What is the result of the External Product C1 ⊡ c2?",
        "question": "What is the result of the External Product C1 ⊡ c2?",
        "options": [
          {
            "key": "a",
            "text": "TGSW encrypting m1 + μ2"
          },
          {
            "key": "b",
            "text": "TLWE encrypting m1μ2"
          },
          {
            "key": "c",
            "text": "TGSW encrypting m1μ2"
          },
          {
            "key": "d",
            "text": "TLWE encrypting m1 + μ2"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The External Product C1 ⊡ c2 between a TGSW ciphertext C1 (encrypting m1) and a TLWE ciphertext c2 (encrypting μ2) outputs a TLWE ciphertext encrypting m1 * μ2."
      },
      {
        "id": "W2_Q9",
        "week": 2,
        "header": "Q9. For TGLWE ciphertext addition, what condition must hold?",
        "question": "For TGLWE ciphertext addition, what condition must hold?",
        "options": [
          {
            "key": "a",
            "text": "N = 1"
          },
          {
            "key": "b",
            "text": "Reduction modulo XN - 1"
          },
          {
            "key": "c",
            "text": "Keys must be different"
          },
          {
            "key": "d",
            "text": "e3 = e1 + e2 must be small"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Addition of TGLWE ciphertexts is valid when error e3 = e1 + e2 remains small enough not to cross the noise threshold."
      },
      {
        "id": "W2_Q10",
        "week": 2,
        "header": "Q10. How is the gadget matrix extended to the TGLWE polynomial setting?",
        "question": "How is the gadget matrix extended to the TGLWE polynomial setting?",
        "options": [
          {
            "key": "a",
            "text": "Defined only for k = 0"
          },
          {
            "key": "b",
            "text": "No longer requires B or l"
          },
          {
            "key": "c",
            "text": "Defined over Zq"
          },
          {
            "key": "d",
            "text": "Defined over TN,q[X]"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "For TGLWE, the gadget matrix G is extended to the polynomial setting and defined over TN,q[X]."
      },
      {
        "id": "W2_Q11",
        "week": 2,
        "header": "Q11. In the worked TGLWE example, which statements are TRUE? (MSQ)",
        "question": "In the worked TGLWE example, which statements are TRUE? (MSQ)",
        "options": [
          {
            "key": "a",
            "text": "p1* = 10 + 7X"
          },
          {
            "key": "b",
            "text": "Digit expansion begins with (1+X, -1-2X, -2-X, ...)"
          },
          {
            "key": "c",
            "text": "G-1(p)GT exactly equals p because Bl = q"
          },
          {
            "key": "d",
            "text": "Final verification gives approximately (28X + 40)/256"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "TGLWE worked example confirms p1* = 10 + 7X, signed digit expansion starting with (1+X, -1-2X, -2-X), and final verification resulting in approximately (28X + 40)/256."
      },
      {
        "id": "W2_Q12",
        "week": 2,
        "header": "Q12. What is the key structural difference between TLWE/TGSW and TGLWE G-1?",
        "question": "What is the key structural difference between TLWE/TGSW and TGLWE G-1?",
        "options": [
          {
            "key": "a",
            "text": "TGLWE G-1 is not needed"
          },
          {
            "key": "b",
            "text": "TGLWE flattens (k+1) polynomials into (k+1)l small-coefficient polynomials, while TLWE flattens scalar torus elements into small integers"
          },
          {
            "key": "c",
            "text": "TGLWE works only with zero coefficients"
          },
          {
            "key": "d",
            "text": "TGLWE produces unbounded coefficients"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "TLWE flattens scalar torus elements into small integers, whereas TGLWE flattens (k+1) polynomials into (k+1)l small-coefficient polynomials."
      },
      {
        "id": "W2_Q13",
        "week": 2,
        "header": "Q13. What is the purpose of CMUX in TFHE?",
        "question": "What is the purpose of CMUX in TFHE?",
        "options": [
          {
            "key": "a",
            "text": "Removes all noise without bootstrapping"
          },
          {
            "key": "b",
            "text": "Converts TLWE into TGSW"
          },
          {
            "key": "c",
            "text": "Homomorphically selects between two encrypted messages based on an encrypted control bit"
          },
          {
            "key": "d",
            "text": "Always outputs the sum of two encrypted messages"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "CMUX (Controlled Multiplexer) homomorphically selects between two encrypted inputs based on an encrypted control bit: CMUX(C, c0, c1) = c0 + C ⊡ (c1 - c0)."
      },
      {
        "id": "W2_Q14",
        "week": 2,
        "header": "Q14. Why does programmable bootstrapping introduce polynomials into decryption? (MSQ)",
        "question": "Why does programmable bootstrapping introduce polynomials into decryption? (MSQ)",
        "options": [
          {
            "key": "a",
            "text": "Polynomials encode the rounding function through their coefficients"
          },
          {
            "key": "b",
            "text": "It eliminates the need for decryption altogether"
          },
          {
            "key": "c",
            "text": "Linear computation of noisy plaintext is straightforward homomorphically"
          },
          {
            "key": "d",
            "text": "Rounding is difficult to evaluate homomorphically"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "Programmable bootstrapping uses polynomials because polynomials encode lookup tables & rounding functions into coefficients, making non-linear evaluation homomorphic."
      },
      {
        "id": "W2_Q15",
        "week": 2,
        "header": "Q15. Why is the exponent in blind rotation rescaled from modulo q to modulo 2N?",
        "question": "Why is the exponent in blind rotation rescaled from modulo q to modulo 2N?",
        "options": [
          {
            "key": "a",
            "text": "To eliminate all approximation errors"
          },
          {
            "key": "b",
            "text": "Because multiplication is modulo XN + 1, where X has order 2N"
          },
          {
            "key": "c",
            "text": "To reduce polynomial degree from N to q"
          },
          {
            "key": "d",
            "text": "TGLWE only represents exponents modulo N"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In blind rotation, polynomial multiplication is performed modulo X^N + 1, where X has order 2N, requiring the exponent to be rescaled to modulo 2N."
      },
      {
        "id": "W2_Q16",
        "week": 2,
        "header": "Q16. Why is the MSB of the rescaled exponent constrained to zero?",
        "question": "Why is the MSB of the rescaled exponent constrained to zero?",
        "options": [
          {
            "key": "a",
            "text": "To ensure all polynomial coefficients become zero"
          },
          {
            "key": "b",
            "text": "To guarantee only one bootstrapping key"
          },
          {
            "key": "c",
            "text": "To ensure the exponent has at most N distinct values, matching the N coefficients in the test polynomial"
          },
          {
            "key": "d",
            "text": "To prevent negative coefficients"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Constraining the MSB to 0 ensures the exponent has at most N distinct values, matching the N available coefficients in the test polynomial."
      },
      {
        "id": "W2_Q17",
        "week": 2,
        "header": "Q17. What is the primary purpose of modulus switching in TFHE bootstrapping?",
        "question": "What is the primary purpose of modulus switching in TFHE bootstrapping?",
        "options": [
          {
            "key": "a",
            "text": "Converts TGLWE into TLWE"
          },
          {
            "key": "b",
            "text": "Eliminates noise completely"
          },
          {
            "key": "c",
            "text": "Converts LWE ciphertext from a larger modulus to a smaller modulus while proportionally scaling message and noise"
          },
          {
            "key": "d",
            "text": "Removes the secret key"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Modulus switching scales down LWE ciphertext from a larger modulus to a smaller modulus while proportionally preserving message phase and scaling noise."
      },
      {
        "id": "W2_Q18",
        "week": 2,
        "header": "Q18. After switching ciphertext modulus from 64 to 32, what is the new Δ*?",
        "question": "After switching ciphertext modulus from 64 to 32, what is the new Δ*?",
        "options": [
          {
            "key": "a",
            "text": "16"
          },
          {
            "key": "b",
            "text": "4"
          },
          {
            "key": "c",
            "text": "2"
          },
          {
            "key": "d",
            "text": "8"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Switching ciphertext modulus from 64 to 32 scales the plaintext step size Δ* from 8 to 4 (64/32 * original Δ*)."
      },
      {
        "id": "W2_Q19",
        "week": 2,
        "header": "Q19. What are the three major stages of TFHE noise bootstrapping? (MSQ)",
        "question": "What are the three major stages of TFHE noise bootstrapping? (MSQ)",
        "options": [
          {
            "key": "a",
            "text": "Blind Rotation"
          },
          {
            "key": "b",
            "text": "Key Switching"
          },
          {
            "key": "c",
            "text": "Coefficient Extraction"
          },
          {
            "key": "d",
            "text": "Modulus Switching"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "The three key stages of TFHE noise bootstrapping are Modulus Switching, Blind Rotation, and Sample/Coefficient Extraction."
      },
      {
        "id": "W2_Q20",
        "week": 2,
        "header": "Q20. Why does rotating the encrypted lookup polynomial by 4 positions recover m=1m=1?",
        "question": "Why does rotating the encrypted lookup polynomial by 4 positions recover m=1m=1?",
        "options": [
          {
            "key": "a",
            "text": "Secret key is cancelled"
          },
          {
            "key": "b",
            "text": "Every rotation places plaintext in constant coefficient"
          },
          {
            "key": "c",
            "text": "Coefficient extraction automatically changes the coefficient to the message"
          },
          {
            "key": "d",
            "text": "Rotation amount is Δ*m + e* = 4, and the lookup table has v4 = 1 = m"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Rotating by 4 positions shifts coefficient v4 = 1 = m into the constant position, evaluating the target function at input m=1."
      }
    ]
  },
  {
    "week": 3,
    "count": 20,
    "questions": [
      {
        "id": "W3_Q1",
        "week": 3,
        "header": "Q1. Why is fixed-point arithmetic preferred over floating-point arithmetic in CKKS?",
        "question": "Why is fixed-point arithmetic preferred over floating-point arithmetic in CKKS?",
        "options": [
          {
            "key": "a",
            "text": "It removes the need for encryption"
          },
          {
            "key": "b",
            "text": "The scaling factor remains fixed"
          },
          {
            "key": "c",
            "text": "It eliminates noise completely"
          },
          {
            "key": "d",
            "text": "It allows exact recovery of all values"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "CKKS uses fixed-point arithmetic so the scaling factor Δ remains fixed across operations, avoiding dynamic floating-point exponent management."
      },
      {
        "id": "W3_Q2",
        "week": 3,
        "header": "Q2. What does the canonical embedding σ do?",
        "question": "What does the canonical embedding σ do?",
        "options": [
          {
            "key": "a",
            "text": "Converts ciphertext directly into plaintext"
          },
          {
            "key": "b",
            "text": "Converts complex values into integers"
          },
          {
            "key": "c",
            "text": "Evaluates a polynomial at the roots of Φ2N(X) = XN + 1"
          },
          {
            "key": "d",
            "text": "Removes the encryption noise"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The canonical embedding σ evaluates a polynomial p(X) at the 2N-th roots of unity, which are the roots of Φ2N(X) = X^N + 1."
      },
      {
        "id": "W3_Q3",
        "week": 3,
        "header": "Q3. For Aα = z, how can α be obtained when A is a Vandermonde/DFT matrix?",
        "question": "For Aα = z, how can α be obtained when A is a Vandermonde/DFT matrix?",
        "options": [
          {
            "key": "a",
            "text": "α = Az"
          },
          {
            "key": "b",
            "text": "α = ATz"
          },
          {
            "key": "c",
            "text": "α = A-1z, where A-1 = (1/N) A*"
          },
          {
            "key": "d",
            "text": "α = NAz"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "For Vandermonde/DFT matrix A, inverse transformation is α = A^-1 z where A^-1 = (1/N) A* (conjugate transpose scaled by 1/N)."
      },
      {
        "id": "W3_Q4",
        "week": 3,
        "header": "Q4. Which statements about the CKKS pipeline are correct?",
        "question": "Which statements about the CKKS pipeline are correct?",
        "options": [
          {
            "key": "a",
            "text": "Encoding converts the message into plaintext"
          },
          {
            "key": "b",
            "text": "Encryption uses the public key"
          },
          {
            "key": "c",
            "text": "Homomorphic operations are performed directly on the original message"
          },
          {
            "key": "d",
            "text": "Decryption uses the secret key"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "The CKKS pipeline consists of Encoding (message → plaintext polynomial), Encryption (using public key), and Decryption (using secret key)."
      },
      {
        "id": "W3_Q5",
        "week": 3,
        "header": "Q5. Why can the canonical embedding not map the integer polynomial ring directly onto all of CN?",
        "question": "Why can the canonical embedding not map the integer polynomial ring directly onto all of CN?",
        "options": [
          {
            "key": "a",
            "text": "The image of the integer polynomial ring is countable"
          },
          {
            "key": "b",
            "text": "G-1(v)GT = v is always exact"
          },
          {
            "key": "c",
            "text": "The complex vector space is uncountable"
          },
          {
            "key": "d",
            "text": "A projection onto the appropriate embedded space is needed"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "The integer polynomial ring image is countable while C^N is uncountable, requiring projection onto the real-symmetric canonical embedding subspace."
      },
      {
        "id": "W3_Q6",
        "week": 3,
        "header": "Q6. How many independent complex slots can CKKS provide?",
        "question": "How many independent complex slots can CKKS provide?",
        "options": [
          {
            "key": "a",
            "text": "N"
          },
          {
            "key": "b",
            "text": "2N"
          },
          {
            "key": "c",
            "text": "N - 1"
          },
          {
            "key": "d",
            "text": "N/2"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "For degree N polynomial ring X^N + 1, CKKS packs N/2 independent complex numbers into slots due to conjugate symmetry."
      },
      {
        "id": "W3_Q7",
        "week": 3,
        "header": "Q7. Given n=1, l=2, B=4, q=64, and v = (41/64, 26/64), what is the Gadget decomposition?",
        "question": "Given n=1, l=2, B=4, q=64, and v = (41/64, 26/64), what is the Gadget decomposition? What is Gadget decomposition?",
        "options": [
          {
            "key": "a",
            "text": "[-1, -2, -2, -1]"
          },
          {
            "key": "b",
            "text": "[1, 2, 2, 1]"
          },
          {
            "key": "c",
            "text": "[-2, -1, -1, -2]"
          },
          {
            "key": "d",
            "text": "[2, 1, 1, 2]"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Gadget decomposition of v = (41/64, 26/64) with B=4, l=2 yields [-1, -2, -2, -1]."
      },
      {
        "id": "W3_Q8",
        "week": 3,
        "header": "Q8. What is the correct order of CKKS encoding?",
        "question": "What is the correct order of CKKS encoding?",
        "options": [
          {
            "key": "a",
            "text": "Multiply by Δ → round → expand → project → inverse embedding"
          },
          {
            "key": "b",
            "text": "Project → expand → multiply by Δ → round → inverse embedding"
          },
          {
            "key": "c",
            "text": "Expand using π-1 → multiply by Δ → project → round → apply σ-1"
          },
          {
            "key": "d",
            "text": "Round → multiply by Δ → project → expand → inverse embedding"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "CKKS encoding pipeline order: Expand using π^-1 → multiply by Δ → project → round to integer polynomial → apply σ^-1."
      },
      {
        "id": "W3_Q9",
        "week": 3,
        "header": "Q9. For z = [4.3 + 8.1i, 7.5 - 6.7i] with N = 4, what is π-1(z)?",
        "question": "For z = [4.3 + 8.1i, 7.5 - 6.7i] with N = 4, what is π-1(z)? with N=4N=4, what is π−1(z)\\pi^{-1}(z)?",
        "options": [
          {
            "key": "a",
            "text": "[z1, z2, z1, z2]"
          },
          {
            "key": "b",
            "text": "[z1, z2, z̄2, z̄1]"
          },
          {
            "key": "c",
            "text": "[z1, z̄1, z2, z̄2]"
          },
          {
            "key": "d",
            "text": "[z1, z2, -z2, -z1]"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "π^-1(z) expands complex vector z of size N/2 into N roots by appending complex conjugates: [z1, z2, z̄2, z̄1]."
      },
      {
        "id": "W3_Q10",
        "week": 3,
        "header": "Q10. If the CKKS scaling factor is Δ = 10, what approximate precision does it provide?",
        "question": "If the CKKS scaling factor is Δ = 10, what approximate precision does it provide?",
        "options": [
          {
            "key": "a",
            "text": "10 decimal digits"
          },
          {
            "key": "b",
            "text": "1 decimal digit"
          },
          {
            "key": "c",
            "text": "0.01 decimal digits"
          },
          {
            "key": "d",
            "text": "No precision"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A scaling factor of Δ = 10^1 provides approximately 1 decimal digit of fixed-point precision (Δ = 10^k gives k decimal digits)."
      },
      {
        "id": "W3_Q11",
        "week": 3,
        "header": "Q11. Given c0 = 46, c1 = -8.13, c2 = 23, c3 = 1.30, what polynomial is obtained after rounding?",
        "question": "Given c0 = 46, c1 = -8.13, c2 = 23, c3 = 1.30, what polynomial is obtained after rounding? What polynomial is obtained after rounding?",
        "options": [
          {
            "key": "a",
            "text": "46 - 8.13X + 23X2 + 1.30X3"
          },
          {
            "key": "b",
            "text": "46 + 8X + 23X2 + X3"
          },
          {
            "key": "c",
            "text": "46 - 8X + 23X2 + X3"
          },
          {
            "key": "d",
            "text": "45 - 9X + 22X2 + 2X3"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Rounding coefficients (46, -8.13, 23, 1.30) to nearest integers gives polynomial: 46 - 8X + 23X^2 + X^3."
      },
      {
        "id": "W3_Q12",
        "week": 3,
        "header": "Q12. Which statements about CKKS decoding are correct?",
        "question": "Which statements about CKKS decoding are correct?",
        "options": [
          {
            "key": "a",
            "text": "The plaintext polynomial is first scaled by Δ-1"
          },
          {
            "key": "b",
            "text": "Decoding always recovers the exact original value"
          },
          {
            "key": "c",
            "text": "The polynomial is evaluated at the appropriate roots"
          },
          {
            "key": "d",
            "text": "The result is approximate because of rounding/noise"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "CKKS decoding scales plaintext by Δ^-1, evaluates polynomial at roots, and yields approximate results due to rounding noise."
      },
      {
        "id": "W3_Q13",
        "week": 3,
        "header": "Q13. In CKKS encryption, which expression represents the ciphertext component bb?",
        "question": "In CKKS encryption, which expression represents the ciphertext component bb?",
        "options": [
          {
            "key": "a",
            "text": "b = ∑ aisi - μ"
          },
          {
            "key": "b",
            "text": "b = ∑ aisi + μ̄, where μ̄ = μ + e"
          },
          {
            "key": "c",
            "text": "b = μ - e"
          },
          {
            "key": "d",
            "text": "b = ∑ ai + μ"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In CKKS encryption, component b is constructed as b = ∑ a_i s_i + μ̄, where μ̄ = μ + e (plaintext message plus error)."
      },
      {
        "id": "W3_Q14",
        "week": 3,
        "header": "Q14. What is a fundamental characteristic of CKKS?",
        "question": "What is a fundamental characteristic of CKKS?",
        "options": [
          {
            "key": "a",
            "text": "It performs approximate arithmetic on real/complex values"
          },
          {
            "key": "b",
            "text": "It always recovers the exact original values"
          },
          {
            "key": "c",
            "text": "It works only with integers"
          },
          {
            "key": "d",
            "text": "It does not use scaling"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "CKKS specifically targets approximate arithmetic over real and complex numbers, making it ideal for machine learning and statistics."
      },
      {
        "id": "W3_Q15",
        "week": 3,
        "header": "Q15. Which statements about homomorphic addition are correct?",
        "question": "Which statements about homomorphic addition are correct?",
        "options": [
          {
            "key": "a",
            "text": "cadd = c0 + c1"
          },
          {
            "key": "b",
            "text": "Decryption approximately gives μ0 + μ1, with combined noise"
          },
          {
            "key": "c",
            "text": "Homomorphic addition requires relinearization"
          },
          {
            "key": "d",
            "text": "Addition directly modifies the original plaintexts"
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "explanation": "Homomorphic addition adds ciphertexts component-wise (cadd = c0 + c1) and yields μ0 + μ1 with combined noise without requiring relinearization."
      },
      {
        "id": "W3_Q16",
        "week": 3,
        "header": "Q16. Why is relinearization required after ciphertext multiplication?",
        "question": "Why is relinearization required after ciphertext multiplication?",
        "options": [
          {
            "key": "a",
            "text": "To remove the scaling factor"
          },
          {
            "key": "b",
            "text": "To convert complex numbers into integers"
          },
          {
            "key": "c",
            "text": "Because multiplication introduces a higher-degree s2 term"
          },
          {
            "key": "d",
            "text": "Because addition cannot be performed without it"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Multiplying two ciphertexts produces a degree-2 term in secret key s (d2 * s^2). Relinearization transforms this back into a standard linear ciphertext (c0, c1)."
      },
      {
        "id": "W3_Q17",
        "week": 3,
        "header": "Q17. What is the fundamental problematic term created after ciphertext multiplication?",
        "question": "What is the fundamental problematic term created after ciphertext multiplication?",
        "options": [
          {
            "key": "a",
            "text": "d0s"
          },
          {
            "key": "b",
            "text": "d1s"
          },
          {
            "key": "c",
            "text": "d2s2"
          },
          {
            "key": "d",
            "text": "d0 + d1"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The quadratic secret key term d2 * s^2 created during ciphertext multiplication must be relinearized back into linear terms."
      },
      {
        "id": "W3_Q18",
        "week": 3,
        "header": "Q18. What is the primary purpose of the evaluation key in CKKS?",
        "question": "What is the primary purpose of the evaluation key in CKKS?",
        "options": [
          {
            "key": "a",
            "text": "To encode the original message"
          },
          {
            "key": "b",
            "text": "To perform initial encryption"
          },
          {
            "key": "c",
            "text": "To help transform/manage the s2 term during relinearization"
          },
          {
            "key": "d",
            "text": "To eliminate the scaling factor completely"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The evaluation key (evk) encrypts s^2 under secret key s, allowing the evaluator to replace d2 * s^2 homomorphically during relinearization."
      },
      {
        "id": "W3_Q19",
        "week": 3,
        "header": "Q19. Why is the evaluation key modified by introducing a large integer pp?",
        "question": "Why is the evaluation key modified by introducing a large integer pp?",
        "options": [
          {
            "key": "a",
            "text": "To help control the additional noise/error introduced during relinearization"
          },
          {
            "key": "b",
            "text": "To remove the s2 term without any computation"
          },
          {
            "key": "c",
            "text": "To make ciphertexts plaintext"
          },
          {
            "key": "d",
            "text": "To eliminate the need for a secret key"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Introducing large integer P scales up the evaluation key so that dividing by P during relinearization shrinks the added noise."
      },
      {
        "id": "W3_Q20",
        "week": 3,
        "header": "Q20. After multiplying two CKKS ciphertexts with scale Δ\\Delta, the scale becomes approximately Δ2\\Delta^2. What operation brings it back toward the desired scale?",
        "question": "After multiplying two CKKS ciphertexts with scale Δ\\Delta, the scale becomes approximately Δ2\\Delta^2. What operation brings it back toward the desired scale?",
        "options": [
          {
            "key": "a",
            "text": "Encoding"
          },
          {
            "key": "b",
            "text": "Rescaling"
          },
          {
            "key": "c",
            "text": "Relinearization"
          },
          {
            "key": "d",
            "text": "Bootstrapping"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Ciphertext multiplication squares the scale factor from Δ to Δ^2. The Rescaling operation divides by Δ, restoring scale back to Δ."
      }
    ]
  },
  {
    "week": 4,
    "count": 20,
    "questions": [
      {
        "id": "W4_Q1",
        "week": 4,
        "header": "QUESTION 1 [MCQ]",
        "question": "Why can we not simply divide the ciphertext RLWEs(delta2 · m1 · m2) by delta to obtain RLWEs(delta · m1 · m2)?",
        "options": [
          {
            "key": "a",
            "text": "Because delta is always a prime number and primes cannot be used as divisors"
          },
          {
            "key": "b",
            "text": "Because the secret key s changes value during division"
          },
          {
            "key": "c",
            "text": "Because m1 and m2 must first be re-encrypted before division is possible"
          },
          {
            "key": "d",
            "text": "Because modulo arithmetic does not support direct division without modulus scaling"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "As shown with the example mu1 = 26, mu2 = 4, qL = 32, delta = 2: dividing (26 x 4) mod 32 by delta directly gives 20 mod 32, which does not equal 8/2 = 4. Since the ciphertext lives in modular arithmetic, direct division by delta is not well-defined. Instead, scaling the modulus itself (dividing q by delta) works correctly, which is the basis of modulus switching."
      },
      {
        "id": "W4_Q2",
        "week": 4,
        "header": "QUESTION 2 [MCQ]",
        "question": "In the modulus switch approach to rescaling, upon each ciphertext-to-ciphertext multiplication, how does the ciphertext modulus change, and what happens once the level reaches 0?",
        "options": [
          {
            "key": "a",
            "text": "The modulus increases from q0 to q0 · delta(i+1), and further multiplications become more accurate"
          },
          {
            "key": "b",
            "text": "The modulus switches from q0 · deltai to q0 · delta(i-1); once level 0 is reached, no more ciphertext-ciphertext multiplication is possible without bootstrapping"
          },
          {
            "key": "c",
            "text": "The modulus stays fixed at q0 · deltaL throughout all computations"
          },
          {
            "key": "d",
            "text": "The modulus is reset to delta2 after every addition operation"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Upon each multiplication, the modulus switches from q0 · deltai to q0 · delta(i-1), effectively converting the plaintext's squared scaling factor delta2 back to delta. Once the ciphertext's level reaches 0 (modulus q0), no further ciphertext-ciphertext multiplication can be performed, and a special process called bootstrapping is needed to re-initialize the modulus level to L."
      },
      {
        "id": "W4_Q3",
        "week": 4,
        "header": "QUESTION 3 [MCQ]",
        "question": "What problem motivates the use of the Chinese Remainder Theorem (CRT) in the CKKS rescaling setup, and how does CRT address it?",
        "options": [
          {
            "key": "a",
            "text": "deltaL becomes a huge number, making homomorphic operations over modulo deltaL computationally expensive; CRT isomorphically decomposes it into a vector of smaller co-prime moduli (w0, w1, ..., wL) for element-wise computation"
          },
          {
            "key": "b",
            "text": "The secret key s becomes too large to store; CRT compresses s into a single small integer"
          },
          {
            "key": "c",
            "text": "The plaintext modulus t grows faster than q; CRT rebalances t and q to be equal"
          },
          {
            "key": "d",
            "text": "Floating-point overflow occurs during encoding; CRT converts all values to fixed-point before encryption"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Since deltaL is a huge number, performing homomorphic addition or multiplication over modulo deltaL directly is computationally expensive. CRT allows an integer x mod W (where W = w0 w1 ... wL, a product of L+1 co-primes) to be isomorphically mapped to a vector of smaller numbers (d0, d1, ..., dL), each reduced modulo the respective wm. This lets addition/multiplication be done element-wise on smaller values before decoding the final big-number result."
      },
      {
        "id": "W4_Q4",
        "week": 4,
        "header": "QUESTION 4 [MCQ]",
        "question": "In the CRT-based moduli setup for CKKS, how are the individual moduli w0, w1, ..., wL chosen relative to delta and q0?",
        "options": [
          {
            "key": "a",
            "text": "All wi (including w0) are set approximately equal to delta for uniform precision"
          },
          {
            "key": "b",
            "text": "w0 = q0 is much greater than delta, while all other wi are approximately equal to delta"
          },
          {
            "key": "c",
            "text": "w0 is set to 1, and all other wi are set equal to q0"
          },
          {
            "key": "d",
            "text": "All wi are chosen to be much smaller than delta to minimize ciphertext size"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The CKKS scheme's maximal ciphertext modulus is designed as W = product of wm from m=0 to L, where L is the maximum multiplicative level. Here w0 = q0 is chosen to be much greater than delta (for accuracy during bootstrapping), while all other wi are approximately equal to delta, ensuring the scaled plaintext never overflows the ciphertext modulus even at the lowest multiplicative level."
      },
      {
        "id": "W4_Q5",
        "week": 4,
        "header": "QUESTION 5 [MCQ]",
        "question": "During ciphertext-ciphertext multiplication, the encrypted noisy plaintext becomes (delta·m1 + e1)·(delta·m2 + e2) = delta2·m1m2 + delta·(m1e2 + m2e1) + e1e2. After rescaling, divide this by delta. Why does the noise still actually grow with each multiplication despite the scaling-down effect?",
        "options": [
          {
            "key": "a",
            "text": "Because rescaling only affects m1 and m2, never touching the error terms e1 and e2"
          },
          {
            "key": "b",
            "text": "Because the term e1.e2/delta becomes negative and destabilizes the ciphertext modulus"
          },
          {
            "key": "c",
            "text": "Because the resulting (m1e2 + m2e1) term is not eliminated by rescaling, so the noise accumulates and ultimately limits the multiplicative depth CKKS can support"
          },
          {
            "key": "d",
            "text": "Because rescaling multiplies the modulus by delta instead of dividing by it, doubling the noise at each step"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "After rescaling (dividing by delta), the result is approximately delta·m1m2 + m1e2 + m2e1 + e1e2/delta. While the e1e2/delta term shrinks, the (m1e2 + m2e1) term remains and adds to the noise at each multiplicative step. This accumulation of noise across successive ciphertext-ciphertext multiplications is what ultimately limits the multiplicative depth CKKS can support before decryption becomes inaccurate."
      },
      {
        "id": "W4_Q6",
        "week": 4,
        "header": "QUESTION 6 [MCQ]",
        "question": "In CKKS bootstrapping, when a ciphertext at multiplicative level 0 (modulus q0) has its modulus forcibly changed to qL and is then decrypted with reduction modulo qL, the result is Delta.M + E + q0K mod qL. Why is the q0*K term problematic?",
        "options": [
          {
            "key": "a",
            "text": "It is a garbage term arising from wrap-around modulo q0 that corrupts each coefficient, and it is no longer eliminated by reduction modulo q0"
          },
          {
            "key": "b",
            "text": "It causes the secret key S to leak, since K directly depends on S"
          },
          {
            "key": "c",
            "text": "It makes the ciphertext modulus qL smaller than q0, causing overflow"
          },
          {
            "key": "d",
            "text": "It cancels out the message M entirely, making decryption impossible"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The term q0K accounts for wrap-around modulo q0 values, where each coefficient of q0K is a multiple of q0. Since decryption is now done modulo the much larger qL instead of q0, this term is no longer reduced away, so each coefficient becomes Delta.mi + ei + q0.ki mod qL instead of the clean Delta.mi + ei mod qL. This garbage term must be eliminated (via an approximated sine function) to recover the pure plaintext coefficient."
      },
      {
        "id": "W4_Q7",
        "week": 4,
        "header": "QUESTION 7 [MCQ]",
        "question": "In the key-switching procedure, the key-switching key is defined as swk = (a', -a'·s + e' + Ps') mod (P·qL), where P is a large integer. What is the purpose of choosing P to be large?",
        "options": [
          {
            "key": "a",
            "text": "It increases the plaintext modulus t so more precision bits are available"
          },
          {
            "key": "b",
            "text": "It ensures the ciphertext can support a higher multiplicative depth"
          },
          {
            "key": "c",
            "text": "It makes the induced error term floor(P-1 · c0 · e') small relative to the original noise, since P is chosen large relative to ||c0 · e'||"
          },
          {
            "key": "d",
            "text": "It guarantees that s and s' are identical after key switching"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "From the correctness derivation, <c', sk> = <c, sk'> + eks mod ql, where eks = floor(P-1 · c0 · e') + erounding. Because P is chosen large relative to ||c0 · e'||, dividing by P shrinks this error term down to a small value, ensuring the key-switched ciphertext remains accurate under the new secret key sk."
      },
      {
        "id": "W4_Q8",
        "week": 4,
        "header": "QUESTION 8 [MCQ]",
        "question": "Why does CKKS need homomorphic rotation to compute a dot product between two encrypted vectors v1 and v2?",
        "options": [
          {
            "key": "a",
            "text": "Because CKKS ciphertexts cannot support elementwise (Hadamard) multiplication at all"
          },
          {
            "key": "b",
            "text": "Because rotation is required to convert floating-point values into fixed-point representation before multiplication"
          },
          {
            "key": "c",
            "text": "Because dot product requires summing values across different slots, but CKKS does not directly support arbitrary slot summation, so slot values must instead be aligned via rotation before adding"
          },
          {
            "key": "d",
            "text": "Because the secret key changes after every multiplication, requiring re-alignment via rotation"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The final step of a dot product requires summing all slot-wise intermediate values, but this summation across slots isn't directly supported homomorphically: doing so would require decoding the plaintext, which needs the secret key. Instead, CKKS uses n copies of the multiplied ciphertext, properly aligned via multiple rotation operations, before adding them up."
      },
      {
        "id": "W4_Q9",
        "week": 4,
        "header": "QUESTION 9 [MCQ]",
        "question": "In the matrix-vector multiplication technique using diagonal extraction, given A·x = u0 ⊙ ρ(x,0) + u1 ⊙ ρ(x,1) + ... + u(n-1) ⊙ ρ(x,n-1), what do the vectors ui represent, and what operation is ρ(x,h)?",
        "options": [
          {
            "key": "a",
            "text": "ui are randomly sampled masking vectors, and ρ(x,h) encrypts x under a rotated secret key"
          },
          {
            "key": "b",
            "text": "ui are the rows of matrix A, and ρ(x,h) is the Hadamard product of x with itself h times"
          },
          {
            "key": "c",
            "text": "ui are diagonal vectors extracted from matrix A, and ρ(x,h) is the rotation of vector x by h positions to the left"
          },
          {
            "key": "d",
            "text": "ui are the columns of matrix A, and ρ(x,h) is the conjugate of vector x shifted by h"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The n distinct diagonal vectors ui are extracted from matrix A as ui = {a(j mod m, (i+j) mod n)} for j = 0 to n-1. ρ(v,h) is defined as the rotation of v by h positions to the left. Multiplying each diagonal with its correspondingly rotated copy of x (via Hadamard product) and summing gives the matrix-vector product A·x."
      },
      {
        "id": "W4_Q10",
        "week": 4,
        "header": "QUESTION 10 [MCQ]",
        "question": "Why does CKKS switch from decoding using the representatives ω, ω³, ..., ω(n-1) to using ω, ω⁵, ω⁹, ..., ω(2n-3) (the 5j mod 2n exponents) for homomorphic rotation to work correctly (for the parameterization used in the lecture)?",
        "options": [
          {
            "key": "a",
            "text": "The original ordering only supports addition, not multiplication, over ciphertext slots"
          },
          {
            "key": "b",
            "text": "The set {1,5,9,...,2n-3} forms a cyclic multiplicative group mod 2n generated by 5, and using this ordering produces a forward-ordered Hermitian vector (second-half elements are conjugates of the first half in the same order)"
          },
          {
            "key": "c",
            "text": "Using powers of 5 reduces the ciphertext modulus needed for bootstrapping"
          },
          {
            "key": "d",
            "text": "The original ordering causes the secret key to leak during rotation"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The original reverse-ordered Hermitian vector (where M(ωi) = M(ω(2n-i))) does not preserve conjugate symmetry under rotation. Rotating it can produce an invalid Hermitian vector unusable for CKKS encoding."
      },
      {
        "id": "W4_Q11",
        "week": 4,
        "header": "QUESTION 11 [MCQ]",
        "question": "Why does the sine function f(x) = (q0/2pi) * sin(2pi * x / q0) approximate a line function y = x when evaluated at x values near multiples of q0?",
        "options": [
          {
            "key": "a",
            "text": "Because sin(x) always equals x exactly for any input value"
          },
          {
            "key": "b",
            "text": "Because the derivative dy/dx = cos(2pi.x/q0) approaches cos(2pi.k) = 1 as x approaches k.q0 for integer k, making the function locally behave like the identity line"
          },
          {
            "key": "c",
            "text": "Because q0 is chosen to be a prime number, which forces the sine function to linearize"
          },
          {
            "key": "d",
            "text": "Because the amplitude q0/(2pi) cancels out the sine term entirely at those points"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The slope of f(x) is dy/dx = (q0/2pi) * (2pi/q0) * cos(2pi.x/q0) = cos(2pi.x/q0). At x approaching k.q0 (for k = 0, 1, 2, ...), this becomes cos(2pi.k) = 1, meaning the function's slope matches that of the line y = x near these points."
      },
      {
        "id": "W4_Q12",
        "week": 4,
        "header": "QUESTION 12",
        "question": "Why does CKKS bootstrapping use the substitution ei.θ = cos(θ) + i.sin(θ) and iteratively square e(i . θ/2r) rather than directly using a high-degree Taylor series to approximate the sine function?",
        "options": [
          {
            "key": "a",
            "text": "Because homomorphic evaluation of a polynomial increases exponentially with its degree, so approximating a smaller exponent e(i . θ/2r) with fewer Taylor terms and then squaring r times reduces the overall computational cost"
          },
          {
            "key": "b",
            "text": "Because Euler's formula eliminates the need for the sine function entirely"
          },
          {
            "key": "c",
            "text": "Because squaring is not a valid homomorphic operation in CKKS, so an alternative was needed"
          },
          {
            "key": "d",
            "text": "Because Euler's formula removes the requirement for homomorphic conjugation"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "To avoid homomorphically evaluating a large degree polynomial in Taylor expansion, using a very large 2r lets e(i . θ/2r) be approximated with a much smaller-degree (and thus cheaper) Taylor expansion while still achieving good accuracy."
      },
      {
        "id": "W4_Q13",
        "week": 4,
        "header": "QUESTION 13 [MCQ]",
        "question": "In deriving sin(θ) = -i/2 * (ei.θ - e-i.θ), what homomorphic operation is used to compute the e-i.θ term from e(2.i.pi.x)/q_0",
        "options": [
          {
            "key": "a",
            "text": "Homomorphic rotation"
          },
          {
            "key": "b",
            "text": "Homomorphic conjugation"
          },
          {
            "key": "c",
            "text": "Key switching with a randomly generated key"
          },
          {
            "key": "d",
            "text": "Modulus rescaling"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Homomorphic conjugation lets CKKS express the sine function entirely in terms of additions and multiplications, which are operations it can evaluate homomorphically."
      },
      {
        "id": "W4_Q14",
        "week": 4,
        "header": "QUESTION 14 [MCQ]",
        "question": "In the CoeffToSlot step of bootstrapping, what is the purpose of transforming the input into two polynomials p1' and p2'?",
        "options": [
          {
            "key": "a",
            "text": "To reduce the ciphertext modulus back to q0 before further computation"
          },
          {
            "key": "b",
            "text": "To permanently discard the q0*K garbage term without needing the EvalMod step"
          },
          {
            "key": "c",
            "text": "To store the n coefficients of into n/2 slots each of p1' and p2' since CKKS operations act on slots rather than directly on coefficients"
          },
          {
            "key": "d",
            "text": "To convert the secret key S into two separate keys for parallel decryption"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Since CKKS performs homomorphic addition and multiplication as parallel slot-wise operations (not directly on polynomial coefficients), CoeffToSlot moves the n coefficients of the input into the n/2 slots of p1'(X) and p2'(X) respectively."
      },
      {
        "id": "W4_Q15",
        "week": 4,
        "header": "QUESTION 15 [MCQ]",
        "question": "In the worked bootstrapping example (R = Z[X]/(X4+1), n=4, Delta=4, q0=64), after ModRaise the decrypted value is M'(X) = 4 + 66X - 67X2 + 69X3, and it's expressed as M'(X) = M(X) + q0.K(X) with K(X) = X - X2 + X3. After applying the homomorphic sine evaluation f(x) = (32/pi) sin(pi . x/32), what does the output approximate?",
        "options": [
          {
            "key": "a",
            "text": "The original corrupted coefficients M_i' themselves, unchanged"
          },
          {
            "key": "b",
            "text": "The secret key coefficients s_i"
          },
          {
            "key": "c",
            "text": "q0*k_i alone, isolating just the garbage term"
          },
          {
            "key": "d",
            "text": "Erroneous message with the garbage term q0 . ki approximated out"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Since sin is periodic with period 2pi, the 2pi.ki term vanishes, thereby eliminating the q0 . ki garbage term introduced by ModRaise."
      },
      {
        "id": "W4_Q16",
        "week": 4,
        "header": "Question 16 [MCQ]",
        "question": "Why is CKKS generally faster than TFHE for many applications?",
        "options": [
          {
            "key": "a",
            "text": "CKKS supports ciphertext packing, enabling SIMD operations over multiple plaintexts simultaneously"
          },
          {
            "key": "b",
            "text": "CKKS performs bootstrapping after every gate evaluation"
          },
          {
            "key": "c",
            "text": "CKKS only supports Boolean operations instead of arithmetic operations"
          },
          {
            "key": "d",
            "text": "CKKS eliminates ciphertext noise completely"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The primary advantage of CKKS is ciphertext packing, where one ciphertext packs multiple messages and homomorphic operations are executed in SIMD (Single Instruction Multiple Data) fashion. In addition, CKKS does not require bootstrapping after every homomorphic operation, making it significantly faster for parallel workloads"
      },
      {
        "id": "W4_Q17",
        "week": 4,
        "header": "Question 17 [MCQ]",
        "question": "Why do FHE compilers replace a data-dependent loop such as while x > 0 with a fixed number of iterations?",
        "options": [
          {
            "key": "a",
            "text": "To improve the numerical precision of ciphertexts"
          },
          {
            "key": "b",
            "text": "Because encrypted values prevent the server from determining whether the loop condition is true"
          },
          {
            "key": "c",
            "text": "To reduce the ciphertext size after every iteration"
          },
          {
            "key": "d",
            "text": "Because FHE supports only recursive functions"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since x is encrypted, the server cannot evaluate the condition x > 0. Therefore, the compiler replaces the data-dependent loop with a fixed number of iterations and uses encrypted selection operations. Although unnecessary iterations increase computation and noise, the encrypted selection still produces the correct result"
      },
      {
        "id": "W4_Q18",
        "week": 4,
        "header": "Question 18 [MCQ]",
        "question": "When evaluating neural networks using CKKS, why are activation functions such as ReLU, sigmoid, and tanh replaced by low-degree polynomial approximations?",
        "options": [
          {
            "key": "a",
            "text": "Because CKKS supports only division operations"
          },
          {
            "key": "b",
            "text": "Because polynomial activations always provide higher accuracy than the original activations"
          },
          {
            "key": "c",
            "text": "Because transcendental functions and branching are not directly supported under CKKS"
          },
          {
            "key": "d",
            "text": "Because polynomial activations eliminate the need for ciphertext packing"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "CKKS efficiently supports additions and multiplications but cannot directly evaluate branching or transcendental functions. Therefore, activation functions are approximated using low-degree polynomials to control multiplicative depth, ciphertext noise, and runtime while maintaining inference accuracy"
      },
      {
        "id": "W4_Q19",
        "week": 4,
        "header": "Question 19 [MCQ]",
        "question": "What is the primary optimization introduced by the FAB FPGA accelerator for Fully Homomorphic Encryption?",
        "options": [
          {
            "key": "a",
            "text": "It replaces NTT with floating-point FFT for all computations"
          },
          {
            "key": "b",
            "text": "It accelerates ciphertext encryption by eliminating modular arithmetic"
          },
          {
            "key": "c",
            "text": "It converts TFHE computations into CKKS computations"
          },
          {
            "key": "d",
            "text": "It accelerates the bootstrapping step by optimizing on-chip memory access to remove memory bottlenecks"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "FAB is specifically designed to accelerate the bootstrapping phase, the most computationally expensive operation in many FHE schemes. It achieves this by optimizing on-chip memory accesses to eliminate memory bottlenecks and leverages High Bandwidth Memory (HBM) on modern FPGAs"
      },
      {
        "id": "W4_Q20",
        "week": 4,
        "header": "Question 20 [MCQ]",
        "question": "Why is the Fast Number Theoretic Transform (Fast NTT) preferred over direct NTT in modern FHE implementations?",
        "options": [
          {
            "key": "a",
            "text": "It replaces integer arithmetic with floating-point arithmetic"
          },
          {
            "key": "b",
            "text": "It computes polynomial multiplication directly without any transform"
          },
          {
            "key": "c",
            "text": "It removes the need for modular arithmetic"
          },
          {
            "key": "d",
            "text": "It reuses intermediate butterfly computations, significantly reducing computational complexity"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Fast NTT uses a divide-and-conquer butterfly algorithm that reuses intermediate computations. This produces the same mathematical result as direct evaluation while substantially reducing computational complexity, making it the dominant kernel in BFV, BGV, CKKS, and their hardware accelerators"
      }
    ]
  },
  {
    "week": 5,
    "count": 20,
    "questions": [
      {
        "id": "W5_Q1",
        "week": 5,
        "header": "QUESTION 1 [MCQ]",
        "question": "Why does the NOT gate in TFHE not require a bootstrapping operation, unlike AND, OR, or XOR?",
        "options": [
          {
            "key": "a",
            "text": "Because NOT gates are evaluated only on plaintext, never on ciphertext"
          },
          {
            "key": "b",
            "text": "Because NOT gates use a separate secret key that has no associated noise"
          },
          {
            "key": "c",
            "text": "Because negating a ciphertext (ct_NOT(ct) = −ct) does not increase the noise magnitude"
          },
          {
            "key": "d",
            "text": "Because NOT gates are always the last gate evaluated in a circuit, so noise growth doesn't matter"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "NOT gate is simply negating the ciphertext, with no addition of fresh randomness or noise terms. Since bootstrapping exists solely to refresh/reduce accumulated noise before it crosses the correctness threshold, and negation leaves the noise magnitude unchanged, there is nothing to refresh."
      },
      {
        "id": "W5_Q2",
        "week": 5,
        "header": "QUESTION 2 [MCQ]",
        "question": "Why does chaining two 2-input AND gates (each sampling input noise from σ = 2⁻⁶) into a 3-input AND fail, even after a bootstrapping step is applied at the end?",
        "options": [
          {
            "key": "a",
            "text": "Because AND gates in TFHE can only ever accept two ciphertext inputs, regardless of noise"
          },
          {
            "key": "b",
            "text": "Because σ = 2⁻⁶ does not provide 128-bit security, so the scheme rejects the ciphertext before evaluation"
          },
          {
            "key": "c",
            "text": "Because after two consecutive operations without an intermediate bootstrap, the accumulated noise crosses the correctness threshold"
          },
          {
            "key": "d",
            "text": "Because the plaintext encoding Δ = 1/8 is incompatible with any multi-gate construction"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "With noise sampled from the upper bound σ = 2⁻⁶, performing two consecutive AND operations (ct′ = ct₁ ∧ ct₂, then ct″ = ct′ ∧ ct₃) causes the noise to \"cross the threshold\" before the final bootstrapping is even applied. Bootstrapping refreshes noise for future operations; it cannot retroactively fix a ciphertext whose phase has already drifted past the correct-decryption region."
      },
      {
        "id": "W5_Q3",
        "week": 5,
        "header": "QUESTION 3 [MCQ]",
        "question": "When constructing a 3-input AND gate that should output (1/2)·(ct₁ + ct₂ + ct₃) with a division by 2, why can this division not be implemented directly on the Torus?",
        "options": [
          {
            "key": "a",
            "text": "Because dividing by 2 in TFHE would require an extra bootstrapping call, which would double the runtime"
          },
          {
            "key": "b",
            "text": "Because the Torus 𝕋 = ℝ mod 1 is a ℤ-module, and division is not a defined operation on the torus; the fix is to rescale the plaintext encoding Δ from 1/8 to 1/16 during encryption instead"
          },
          {
            "key": "c",
            "text": "Because dividing by 2 would leak the secret key sk to an adversary observing the ciphertext"
          },
          {
            "key": "d",
            "text": "Because the AND gate must always output an integer number of bits, and division introduces fractional bits"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since ℤ-modules don't generally support division by scalars like 2, the framework instead achieves the equivalent effect by changing the plaintext encoding Δ from 1/8 (used for standard 2-input gates) to Δ′ = 1/16, with Δ′(0) = −1/16 and Δ′(1) = 1/16. This effectively pre-scales the encoding so that summing three ciphertexts and interpreting the phase directly gives the correct 3-input AND result without requiring an explicit division step."
      },
      {
        "id": "W5_Q4",
        "week": 5,
        "header": "QUESTION 4 [MCQ]",
        "question": "What is the purpose and scope of \"Bristol format\" circuits?",
        "options": [
          {
            "key": "a",
            "text": "They are circuits restricted exclusively to representing symmetric-key block ciphers such as AES"
          },
          {
            "key": "b",
            "text": "They are proprietary circuit formats used only by FPGA vendors for hardware synthesis"
          },
          {
            "key": "c",
            "text": "They are HDL-level (Verilog/VHDL) descriptions that must be converted before FHE evaluation is possible"
          },
          {
            "key": "d",
            "text": "They are a widely used Boolean-circuit representation (consisting of binary AND, XOR, and NOT gates)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Bristol format circuits are widely used Boolean circuits, consisting of binary AND, XOR, and NOT gates, and they encompass several arithmetic functions, hash functions, block ciphers, etc."
      },
      {
        "id": "W5_Q5",
        "week": 5,
        "header": "QUESTION 5 [MCQ]",
        "question": "Approximately why does evaluating AES-128 homomorphically under TFHE take around 10 minutes?",
        "options": [
          {
            "key": "a",
            "text": "Because AES-128 uses a 256-bit key schedule that must be re-encrypted at every round"
          },
          {
            "key": "b",
            "text": "Because TFHE requires regenerating the public key after every gate evaluation"
          },
          {
            "key": "c",
            "text": "Because the AES-128 Boolean circuit contains approximately 30,000 gates (AND, XOR, NOT), and since bootstrapping is performed after operations like AND, the cumulative cost across thousands of such gates becomes very large"
          },
          {
            "key": "d",
            "text": "Because AES-128 cannot be represented as a Boolean circuit and must instead be evaluated bit-by-bit using a lookup table"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Since each AND-type gate typically triggers a costly bootstrap, and AES-128's circuit has tens of thousands of such gates, the cumulative bootstrapping cost dominates the total evaluation time."
      },
      {
        "id": "W5_Q6",
        "week": 5,
        "header": "QUESTION 6 [MCQ]",
        "question": "What does the \"bid non-malleability\" security property specifically protect against?",
        "options": [
          {
            "key": "a",
            "text": "Bob learning the exact numerical value of Alice's bid before the auction concludes"
          },
          {
            "key": "b",
            "text": "Alice's bid being altered or combined by Bob in a way that lets him construct a higher bid than hers"
          },
          {
            "key": "c",
            "text": "The auctioneer server learning the identities of Alice and Bob"
          },
          {
            "key": "d",
            "text": "Alice and Bob being unable to jointly conclude the auction at all"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "\"Bid non-malleability\" is a separate property stating that \"Alice's (alt. Bob's) bid may not be manipulated to allow Bob (alt. Alice) to construct a higher bid.\" Even without learning the bid's value outright, an adversarial party should not be able to tamper with (e.g., algebraically manipulate) the other's encrypted/shared bid to derive a bid guaranteed to win."
      },
      {
        "id": "W5_Q7",
        "week": 5,
        "header": "QUESTION 7 [MCQ]",
        "question": "In machine-learning inference, what are the two privacy requirements stated for the Client (holding input x) and Server (holding model M)?",
        "options": [
          {
            "key": "a",
            "text": "Both the client's input and the server's model must be revealed to a trusted third party for verification"
          },
          {
            "key": "b",
            "text": "Only the client's input needs privacy; the model can be public since it doesn't contain sensitive data"
          },
          {
            "key": "c",
            "text": "The client's request must be private from the server, and the model must be private from the client"
          },
          {
            "key": "d",
            "text": "Only the model needs privacy; the client's input can be shared with the server without concern"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "This is a mutual privacy requirement: the client (input owner) doesn't want the server to learn what it's querying, and the server (model owner) doesn't want to expose its proprietary model to the client, even while the client obtains the correct inference result."
      },
      {
        "id": "W5_Q8",
        "week": 5,
        "header": "QUESTION 8 [MCQ]",
        "question": "For a (t, n) secret sharing scheme, which statement correctly captures both the Correctness and Perfect Privacy properties?",
        "options": [
          {
            "key": "a",
            "text": "Any n shares are required to reconstruct the secret, and any (n−1) shares reveal partial information about it"
          },
          {
            "key": "b",
            "text": "Recombining any k ≥ t shares correctly reconstructs the secret, while any set of shares of size less than t reveals nothing about the secret in an information-theoretic sense"
          },
          {
            "key": "c",
            "text": "Recombining exactly t shares reveals the secret probabilistically, while more than t shares always fail to reconstruct it"
          },
          {
            "key": "d",
            "text": "Any single share is sufficient for reconstruction, but perfect privacy is only a heuristic guarantee, not information-theoretic"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Any set of shares of size less than t does not reveal anything about the secret in the information theoretic sense. This matches the worked example: with a (3,5) scheme (degree-2 polynomial), any 2 shares leave many possible degree-2 polynomials consistent with them (hence perfect privacy), while any 3 shares uniquely determine the polynomial via Lagrange interpolation (hence correctness)."
      },
      {
        "id": "W5_Q9",
        "week": 5,
        "header": "QUESTION 9 [MCQ]",
        "question": "In the worked (3,5) secret-sharing example with secret S = 123, prime p = 251, and polynomial f(x) = 123 + 45x + 67x² (mod 251), participants holding shares (2,230), (3,108), and (5,15) reconstruct the secret via Lagrange interpolation at x = 0. What is the computed value of f(0), and does it match the original secret?",
        "options": [
          {
            "key": "a",
            "text": "f(0) = 246, which does not match the secret, showing reconstruction requires all 5 shares"
          },
          {
            "key": "b",
            "text": "f(0) = 108, matching only one of the three shares' y-values, indicating a computation error"
          },
          {
            "key": "c",
            "text": "f(0) = 15, matching the y-value of participant 5's share by coincidence"
          },
          {
            "key": "d",
            "text": "f(0) = 230·5 + 108·246 + 15·1 (mod 251) = 123, exactly matching the original secret S = 123"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Compute the Lagrange basis polynomials at x = 0 for the three points: L₁(0) = 5 (for share (2,230)), L₂(0) = −5 ≡ 246 (mod 251) (for share (3,108)), and L₃(0) = 1 (for share (5,15)). Substituting into f(0) = Σyᵢ·Lᵢ(0) mod 251 gives f(0) = 230·5 + 108·246 + 15·1 (mod 251) = 123 (mod 251), which correctly recovers the original secret S = 123."
      },
      {
        "id": "W5_Q10",
        "week": 5,
        "header": "QUESTION 10 [MCQ]",
        "question": "How does the \"Malicious Security\" model for MPC differ from the \"Semi-Honest (Passive) Security\" model?",
        "options": [
          {
            "key": "a",
            "text": "In Malicious Security, corrupted parties honestly follow the protocol but pool their views to learn extra information, whereas Semi-Honest Security allows no collusion at all"
          },
          {
            "key": "b",
            "text": "In Semi-Honest Security, an adversary can control and arbitrarily inject network messages, whereas Malicious Security only allows passive eavesdropping"
          },
          {
            "key": "c",
            "text": "Semi-Honest Security assumes corrupted parties follow the protocol as specified while trying to learn extra information from received messages, whereas Malicious (active) Security allows corrupted parties to deviate arbitrarily from the protocol"
          },
          {
            "key": "d",
            "text": "Both models are functionally identical; the only difference is terminology used in different research communities"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Under Semi-Honest Security (also called passive security or honest-but-curious), the adversary corrupts parties, but those parties run the protocol honestly, possibly colluding by pooling their views together to learn information, but never deviating from the specified protocol steps. Under Malicious Security, an active adversary may instead cause corrupted parties to deviate arbitrarily from the prescribed protocol in an attempt to violate security and can control, manipulate, and arbitrarily inject messages on the network."
      },
      {
        "id": "W5_Q11",
        "week": 5,
        "header": "QUESTION 11 [MCQ]",
        "question": "In the additive (n, n) secret sharing scheme where x = x₁ + x₂ + ⋯ + xₙ (mod p), how many shares are required to reveal any information about the secret?",
        "options": [
          {
            "key": "a",
            "text": "Any (n−1) shares reveal partial information"
          },
          {
            "key": "b",
            "text": "Only 2 shares are needed regardless of n"
          },
          {
            "key": "c",
            "text": "All n shares are required to reveal any information about the secret"
          },
          {
            "key": "d",
            "text": "A single share is sufficient if p is prime"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "This is as an (n, n) scheme, meaning it is a special case of (t, n) secret sharing with t = n. This means any (t−1) = (n−1) shares reveal no information about the secret, and reconstruction requires all n shares together (summed mod p). Missing even one share leaves the secret completely hidden."
      },
      {
        "id": "W5_Q12",
        "week": 5,
        "header": "QUESTION 12 [MCQ]",
        "question": "Why must Party P₁ randomly permute the encrypted lookup table before sending it to P₂ in Yao's Garbled Circuits?",
        "options": [
          {
            "key": "a",
            "text": "To reduce the size of the ciphertexts before transmission"
          },
          {
            "key": "b",
            "text": "To prevent P₂ from inferring the input combination from the ciphertext's position in the table"
          },
          {
            "key": "c",
            "text": "To allow P₂ to decrypt the table without needing any keys"
          },
          {
            "key": "d",
            "text": "To make the encryption scheme information-theoretically secure"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "If P₁ does not randomly permute the table, the position of each ciphertext directly reveals which (x, y) input combination it corresponds to. Since P₂ already knows its input y*, this positional leakage would let P₂ deduce x* as well, undermining privacy. Permutation ensures the position alone provides no information."
      },
      {
        "id": "W5_Q13",
        "week": 5,
        "header": "QUESTION 13 [MCQ]",
        "question": "In the Oblivious Transfer (OT) protocol used within Yao's Garbled Circuits, what does the OT primitive guarantee?",
        "options": [
          {
            "key": "a",
            "text": "Party P₁ learns P₂'s input bit y* after the transfer"
          },
          {
            "key": "b",
            "text": "Party P₂ receives both keys k₀^y and k₁^y for full transparency"
          },
          {
            "key": "c",
            "text": "Party P₂ receives only k_{y*}^y, while P₁ learns nothing about y* and P₂ learns nothing about the other key"
          },
          {
            "key": "d",
            "text": "The sender S must reveal both secrets s₀ and s₁ to the receiver R"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "OT objective, as defined on the \"Oblivious Transfer\" slide: sender S holds {s₀, s₁} and receiver R holds bit b; OT transfers only s_b to R such that R does not learn s_{1−b} and S does not learn b. Mapped to Yao's GC, P₁ is the sender (holding {k₀^y, k₁^y}) and P₂ is the receiver, obtaining only k_{y*}^y without revealing y* to P₁."
      },
      {
        "id": "W5_Q14",
        "week": 5,
        "header": "QUESTION 14 [MCQ]",
        "question": "What technical problem does Beaver's point-and-permute technique solve in Yao's Garbled Circuits?",
        "options": [
          {
            "key": "a",
            "text": "It eliminates the need for oblivious transfer entirely"
          },
          {
            "key": "b",
            "text": "It allows P₂ to know which table entry to decrypt without leaking the plaintext input, by using appended index bits from the keys"
          },
          {
            "key": "c",
            "text": "It reduces the number of parties required from 2 to 1"
          },
          {
            "key": "d",
            "text": "It converts Boolean circuits into arithmetic circuits automatically"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Without knowing which row/column to decrypt, P₂ would have to attempt decrypting the entire table, and it's unclear which decryption is \"sound.\" Point-and-permute solves this problem by isolating the last ⌈log|X|⌉ and ⌈log|Y|⌉ bits of the keys k^x and k^y (appended to maintain key size) to directly index the row and column of the correct table entry, avoiding trial decryption."
      },
      {
        "id": "W5_Q15",
        "week": 5,
        "header": "QUESTION 15 [MCQ]",
        "question": "What happens if a garbled circuit's tables are reused for multiple evaluations?",
        "options": [
          {
            "key": "a",
            "text": "The scheme becomes more efficient with no security loss"
          },
          {
            "key": "b",
            "text": "Reuse is the standard, intended way to operate Yao's Garbled Circuits"
          },
          {
            "key": "c",
            "text": "Party P₂ can combine keys obtained across evaluations to compute a new evaluation without P₁'s participation"
          },
          {
            "key": "d",
            "text": "Reuse only affects P₁'s privacy, not P₂'s"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Yao's Garbled Circuits cannot be reused more than once. The example shows that after two legitimate evaluations, P₂ accumulates keys such as k₀^{x,G1}, k₀^{y,G1}, k₁^{x,G2}, k₀^{y,G2}. A mix-and-match combination that was never explicitly sent for a single evaluation."
      },
      {
        "id": "W5_Q16",
        "week": 5,
        "header": "QUESTION 16 [MCQ]",
        "question": "In the secret-sharing step of the arithmetic-circuit MPC protocol, what polynomial does each party construct for its private input xi ?",
        "options": [
          {
            "key": "a",
            "text": "A polynomial of degree t whose constant term is zero"
          },
          {
            "key": "b",
            "text": "A polynomial of degree t−1 whose constant term is xi​"
          },
          {
            "key": "c",
            "text": "A polynomial of degree n whose leading coefficient is xi​"
          },
          {
            "key": "d",
            "text": "A linear polynomial whose constant term is always random"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "This is by definition of Shamir’s secret sharing."
      },
      {
        "id": "W5_Q17",
        "week": 5,
        "header": "QUESTION 17 [MCQ]",
        "question": "In the 3-party example, the parties use the following polynomials: p1​(x)=x1​+12x, p2​(x)=x2​+53x, p3​(x)=x3​+42x. What polynomial is obtained by adding these three sharing polynomials?",
        "options": [
          {
            "key": "a",
            "text": "(x1​+x2​+x3​) + 107x"
          },
          {
            "key": "b",
            "text": "(x1​+x2​+x3​) + 105x"
          },
          {
            "key": "c",
            "text": "(x1​+x2​+x3​) + 42x"
          },
          {
            "key": "d",
            "text": "x1 ​ x2 ​x3​    + 107 x2"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Standard polynomial addition"
      },
      {
        "id": "W5_Q18",
        "week": 5,
        "header": "QUESTION 18 [MCQ]",
        "question": "Why can any two parties reconstruct x1​ + x2​ + x3​ in the 3-party example?",
        "options": [
          {
            "key": "a",
            "text": "Because each party knows all three private inputs"
          },
          {
            "key": "b",
            "text": "Because addition removes the random coefficients from the sharing polynomials"
          },
          {
            "key": "c",
            "text": "Because the sum of the sharing polynomials is linear, and two points uniquely determine a linear polynomial"
          },
          {
            "key": "d",
            "text": "Because multiplication of the shares produces a polynomial of degree zero"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The sum of the sharing polynomials is a linear polynomial. Two points are sufficient to uniquely determine a linear polynomial. Therefore, any two parties can interpolate this polynomial and obtain its constant term."
      },
      {
        "id": "W5_Q19",
        "week": 5,
        "header": "QUESTION 19 [MCQ]",
        "question": "What problem arises when the parties locally multiply their shares while evaluating a multiplication gate?",
        "options": [
          {
            "key": "a",
            "text": "The resulting polynomial becomes degree 2 rather than remaining linear"
          },
          {
            "key": "b",
            "text": "The private inputs are immediately revealed to all parties"
          },
          {
            "key": "c",
            "text": "The resulting polynomial always becomes a constant polynomial"
          },
          {
            "key": "d",
            "text": "The parties can no longer perform addition operations"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Since each share is initially a degree-1 polynomial, multiplying two such polynomials produces a polynomial of degree 2. Thus, the resulting sharing is no longer a linear polynomial."
      },
      {
        "id": "W5_Q20",
        "week": 5,
        "header": "QUESTION 20 [MCQ]",
        "question": "Why is an additional degree-reduction step required after multiplication in the MPC protocol without preprocessing?",
        "options": [
          {
            "key": "a",
            "text": "To convert the field into a Boolean circuit"
          },
          {
            "key": "b",
            "text": "To reduce the resulting polynomial back to degree t−1, enabling reconstruction with the required threshold"
          },
          {
            "key": "c",
            "text": "To remove the constant term containing the private inputs"
          },
          {
            "key": "d",
            "text": "To transform multiplication gates into addition gate."
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "After local multiplication, the resulting sharing polynomials have degree 2 instead of the required degree t−1. Therefore, the protocol needs an additional degree reduction step to bring the polynomial degree back to t−1."
      }
    ]
  },
  {
    "week": 6,
    "count": 20,
    "questions": [
      {
        "id": "W6_Q1",
        "week": 6,
        "header": "QUESTION 1 [MCQ]",
        "question": "Why is a Beaver triple ([a], [b], [c]) essential for evaluating multiplication gates in MPC over arithmetic circuits?",
        "options": [
          {
            "key": "a",
            "text": "It replaces the need for secret sharing entirely"
          },
          {
            "key": "b",
            "text": "It ensures the polynomial degree increases with every multiplication gate"
          },
          {
            "key": "c",
            "text": "It helps reduce multiplication to linear operations on public masked values"
          },
          {
            "key": "d",
            "text": "It allows parties to compute the product without any communication at all"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The whole point of the Beaver triple is that it is generated in advance (independent of the actual circuit inputs) and lets parties mask x and y using a and b, reveal (x−a) and (y−b) safely, and then reconstruct x·y using only additions and scalar multiplications on shares."
      },
      {
        "id": "W6_Q2",
        "week": 6,
        "header": "QUESTION 2 [MCQ]",
        "question": "In the Beaver triple protocol, why is it safe for the parties to publicly reconstruct (x − a) and (y − b)?",
        "options": [
          {
            "key": "a",
            "text": "Because x and y are already public inputs"
          },
          {
            "key": "b",
            "text": "Because the reconstruction only happens after the circuit output is computed"
          },
          {
            "key": "c",
            "text": "Because a and b are known constants agreed upon by all parties in advance"
          },
          {
            "key": "d",
            "text": "Because a and b are random field elements that act as one-time masks"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Since a and b are freshly generated random field elements independent of x and y, the masked values (x−a) and (y−b) are uniformly random and reveal nothing about the underlying secrets, similar to a one-time pad."
      },
      {
        "id": "W6_Q3",
        "week": 6,
        "header": "QUESTION 3 [MCQ]",
        "question": "Why can a single Beaver triple not be reused across multiple multiplication gates?",
        "options": [
          {
            "key": "a",
            "text": "Because Beaver triples can only represent Boolean values"
          },
          {
            "key": "b",
            "text": "Because reusing the same mask would leak information"
          },
          {
            "key": "c",
            "text": "Because the field Fq does not allow repeated use of any element"
          },
          {
            "key": "d",
            "text": "Because the triple's shares are additive but not multiplicative"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since a and b act as masks, reusing them across gates means the same mask is subtracted from different inputs, which can reveal relationships between those inputs (e.g., differences), violating the \"one-time pad\" style security guarantee. Hence multiple Beaver triples must be generated in advance for practical circuits."
      },
      {
        "id": "W6_Q4",
        "week": 6,
        "header": "QUESTION 4 [MCQ]",
        "question": "What property must the secret-sharing scheme used to generate Beaver triples satisfy, and why?",
        "options": [
          {
            "key": "a",
            "text": "Compatibility with Boolean circuits only"
          },
          {
            "key": "b",
            "text": "Perfect secrecy against an unbounded number of colluding parties"
          },
          {
            "key": "c",
            "text": "Multiplicative homomorphism, so that shares of a and b can be multiplied directly"
          },
          {
            "key": "d",
            "text": "Additive homomorphism, so that [x] − [a] correctly reconstructs to [x − a]"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "The correctness of the protocol relies on [x] − [a] ≡ [x − a] and [y] − [b] ≡ [y − b], which requires the secret sharing scheme (e.g., Shamir's or additive sharing) to be additively homomorphic."
      },
      {
        "id": "W6_Q5",
        "week": 6,
        "header": "QUESTION 5 [MCQ]",
        "question": "After all parties compute [c] + (x−a)·[b] + (y−b)·[a] + (x−a)·(y−b) and recombine, the result simplifies to c − a·b + x·y. Why does this correctly give the desired product z = x·y?",
        "options": [
          {
            "key": "a",
            "text": "Because the Beaver triple satisfies c = a·b, so c − a·b cancels out"
          },
          {
            "key": "b",
            "text": "Because the polynomial degree is reduced to zero during recombination"
          },
          {
            "key": "c",
            "text": "Because x and y are assumed to be public values"
          },
          {
            "key": "d",
            "text": "Because a and b always equal zero by construction"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The correctness of the Beaver triple technique hinges entirely on c being related to a and b via c = a·b. When expanded, the cross terms cancel algebraically, leaving c − a·b + x·y, and since c − a·b = 0 by the triple's defining property, the recombined result is exactly z = x·y."
      },
      {
        "id": "W6_Q6",
        "week": 6,
        "header": "QUESTION 6 [MCQ]",
        "question": "Why can additive secret sharing over 𝔽q (or ℤq) fail to provide privacy when uniform sampling is not possible, as illustrated by the n=2, 𝔽2 example where r=0 with probability 0.8 and r=1 with probability 0.2?",
        "options": [
          {
            "key": "a",
            "text": "Because 𝔽2 does not support additive sharing"
          },
          {
            "key": "b",
            "text": "Because non-uniform mask r allows guess secret with probability better than 1/2"
          },
          {
            "key": "c",
            "text": "Because additive sharing requires at least 3 parties to work correctly"
          },
          {
            "key": "d",
            "text": "Because the secret x must always be even in 𝔽2"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "If r is not sampled uniformly (e.g., r=0 with 80% probability), then each party's share leaks information: P1 can guess x2 = x with 80% probability, and P2 can guess x = 0 with 80% probability. This breaks the fundamental privacy guarantee of secret sharing, which relies on shares being uniformly random (like a one-time pad)."
      },
      {
        "id": "W6_Q7",
        "week": 6,
        "header": "QUESTION 7 [MCQ]",
        "question": "What is the issue with using IEEE-754 floating point numbers directly for additive secret sharing over the reals (e.g., x = x1 + x2 + x3)?",
        "options": [
          {
            "key": "a",
            "text": "Floating point numbers cannot represent negative values"
          },
          {
            "key": "b",
            "text": "The sign bit consumes too much storage and reduces the number of representable values"
          },
          {
            "key": "c",
            "text": "Limited precision introduces small rounding errors, so the reconstructed sum does not exactly equal the intended secret"
          },
          {
            "key": "d",
            "text": "IEEE-754 numbers cannot be transmitted over a network"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Because floating point numbers have limited precision, arithmetic operations like addition can introduce small representation errors. As shown in the example, x1 + x2 + x3 does not exactly reconstruct x = 10.4, but instead yields 10.4000000000000003552713678800500929355621337890625, undermining the correctness of the secret sharing scheme."
      },
      {
        "id": "W6_Q8",
        "week": 6,
        "header": "QUESTION 8 [MCQ]",
        "question": "How is the issue of correctness under limited precision?",
        "options": [
          {
            "key": "a",
            "text": "By rounding all floating point numbers to the nearest integer before sharing"
          },
          {
            "key": "b",
            "text": "By using Shamir's secret sharing instead of additive secret sharing"
          },
          {
            "key": "c",
            "text": "By restricting all secrets to be non-negative"
          },
          {
            "key": "d",
            "text": "By employing additive secret sharing over 𝔽2 instead of arithmetic addition over the reals"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Since XOR (⊕) is bitwise and exactly invertible on the fixed-width bit representation of a floating point number, sharing via x1 = r and x2 = x ⊕ r (and reconstructing via XOR) avoids any rounding or precision loss: unlike arithmetic addition/subtraction over real-valued floating point numbers."
      },
      {
        "id": "W6_Q9",
        "week": 6,
        "header": "QUESTION 9 [MCQ]",
        "question": "Why does uniformly sampling IEEE-754 bit patterns NOT produce a distribution that is uniform with respect to the real-number magnitude/range?",
        "options": [
          {
            "key": "a",
            "text": "Because the sign bit is always fixed to 0 in IEEE-754"
          },
          {
            "key": "b",
            "text": "Because each exponent range does not represent an equal portion of real number line"
          },
          {
            "key": "c",
            "text": "Because the mantissa bits are not independent of each other"
          },
          {
            "key": "d",
            "text": "Because IEEE-754 only supports positive numbers"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "For a fixed number of mantissa bits, each exponent value contributes 223 (or 252) representable numbers, but as the exponent decreases, this same count of representable numbers is packed into a range that is roughly half as wide as the previous exponent's range. So uniformly sampling exponent bits over-represents the density of smaller-magnitude numbers relative to a truly uniform distribution over the real number line."
      },
      {
        "id": "W6_Q10",
        "week": 6,
        "header": "QUESTION 10 [MCQ]",
        "question": "How do we ensure the resultant distribution over floating point numbers is uniform?",
        "options": [
          {
            "key": "a",
            "text": "By discarding all denormal numbers from consideration"
          },
          {
            "key": "b",
            "text": "By sampling the exponent uniformly and the mantissa according to a geometric distribution"
          },
          {
            "key": "c",
            "text": "By sampling the sign bit uniformly, choosing the exponent non-uniformly and sampling the mantissa uniformly"
          },
          {
            "key": "d",
            "text": "By fixing the exponent to a single constant value for all samples"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Since each smaller exponent covers half the range of the previous one, choosing exponents with probabilities that halve accordingly (e.g., 50%, 25%, 12.5%, ...) compensates for the differing range sizes. Combined with uniformly sampling the mantissa within each exponent's range and uniformly sampling the sign bit, this produces an overall uniform distribution over the representable floating point numbers."
      },
      {
        "id": "W6_Q11",
        "week": 6,
        "header": "QUESTION 11 [MCQ]",
        "question": "In the MPC division protocol, what is the primary reason each fraction of the form yᵢ/xᵢ can be computed locally by party Pᵢ without any communication?",
        "options": [
          {
            "key": "a",
            "text": "Because xᵢ and yᵢ are both public values known to all parties"
          },
          {
            "key": "b",
            "text": "Because Pᵢ already holds both its own share xᵢ and its own share yᵢ"
          },
          {
            "key": "c",
            "text": "Because division is a linear operation under additive secret sharing"
          },
          {
            "key": "d",
            "text": "Because the field is chosen to make all divisions trivial"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Each party Pᵢ starts out holding its own shares xᵢ and yᵢ of the two secret inputs. Since both operands of the fraction yᵢ/xᵢ already reside locally with Pᵢ, no interaction with other parties is needed to compute that particular term."
      },
      {
        "id": "W6_Q12",
        "week": 6,
        "header": "QUESTION 12 [MCQ]",
        "question": "Why can't Pᵢ simply compute 1/xᵢ and multiply it directly with yⱼ (held by another party Pⱼ) in plaintext to get yⱼ/xᵢ?",
        "options": [
          {
            "key": "a",
            "text": "Because 1/xᵢ cannot be computed in a finite field"
          },
          {
            "key": "b",
            "text": "Because yⱼ/xᵢ is not needed for the final reconstruction"
          },
          {
            "key": "c",
            "text": "Because multiplication is undefined between shares of different secrets"
          },
          {
            "key": "d",
            "text": "Because doing so would leak yⱼ (or xᵢ) to the other party, violating privacy"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "If Pᵢ directly received yⱼ in the clear to multiply with its local 1/xᵢ, this would leak yⱼ to party Pᵢ."
      },
      {
        "id": "W6_Q13",
        "week": 6,
        "header": "QUESTION 13 [MCQ]",
        "question": "Why are the individual terms like (y₂/x₁)₁ still called valid \"shares of y/x₁\" even though each one individually is only a share of y₂ or y₃ (not the full y)?",
        "options": [
          {
            "key": "a",
            "text": "Because they eventually combine via recombination (XOR/addition) to correctly reconstruct y/x₁"
          },
          {
            "key": "b",
            "text": "Because they are computed using a different field than the rest of the protocol"
          },
          {
            "key": "c",
            "text": "Because y₂ and y₃ are mathematically equal to y in this protocol"
          },
          {
            "key": "d",
            "text": "Because only party P₁ is allowed to use them"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "These terms are notated as shares of y/x₁ because they allow the final recombination to reconstruct y/x₁, even though individually each one only constitutes a share of y₂ or y₃. The validity of calling them shares of y/x₁ comes from how they behave under the final XOR/addition-based reconstruction, not from what each term looks like in isolation."
      },
      {
        "id": "W6_Q14",
        "week": 6,
        "header": "QUESTION 14 [MCQ]",
        "question": "In the MPC division protocol with three parties P₁, P₂, P₃, why does reconstructing y/x₁ (e.g., by party P₂) not reveal y or x₁ individually?",
        "options": [
          {
            "key": "a",
            "text": "Because P₂ only receives 2 out of the required 3 shares needed to reveal the input, since the secret sharing scheme is (n, n)"
          },
          {
            "key": "b",
            "text": "Because y/x₁ is always equal to 1 regardless of the inputs"
          },
          {
            "key": "c",
            "text": "Because P₂ discards the shares immediately after computing y/x₁"
          },
          {
            "key": "d",
            "text": "Because x₁ is a public constant known in advance"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Recombination of shares of multiplied values does not reveal the input operands: since each party holds only 2 shares of the inputs (out of the 3 required under the (n,n) secret sharing scheme), it lacks enough shares to reveal the actual input value."
      },
      {
        "id": "W6_Q15",
        "week": 6,
        "header": "QUESTION 15 [MCQ]",
        "question": "What real-world privacy problem in smart grids does the \"Privacy Preserving Real-Time Pricing (RTP)\" application address using the MPC division protocol?",
        "options": [
          {
            "key": "a",
            "text": "Preventing unauthorized parties from generating electricity"
          },
          {
            "key": "b",
            "text": "Eliminating the need for a pricing signal altogether"
          },
          {
            "key": "c",
            "text": "Preventing traditional RTP from leaking a consumer's appliance usage patterns"
          },
          {
            "key": "d",
            "text": "Replacing the demand and supply models with a single averaged model"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Traditional Real-Time Pricing (RTP) leaks the consumer's consumption data, which can reveal appliance usage patterns and daily behavior. Since the RTP pricing computation fundamentally relies on division operations, the privacy-preserving MPC division protocol discussed earlier is crucial for computing these prices without exposing individual consumers' raw data."
      },
      {
        "id": "W6_Q16",
        "week": 6,
        "header": "QUESTION 16 [MCQ]",
        "question": "In the MPC division procedure described in the lecture, why are the partial products between the parties computed first?",
        "options": [
          {
            "key": "a",
            "text": "To reconstruct all input values before division"
          },
          {
            "key": "b",
            "text": "To generate the secret shares of the required cross-products"
          },
          {
            "key": "c",
            "text": "To eliminate the need for secret sharing during multiplication"
          },
          {
            "key": "d",
            "text": "To allow one party to directly obtain the numerator and denominator"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The division procedure requires products involving shares held by different parties. The parties therefore engage in MPC multiplications to generate secret shares of the required cross-products. These partial products are subsequently combined to construct valid secret shares of the division-related quantities without revealing the underlying inputs."
      },
      {
        "id": "W6_Q17",
        "week": 6,
        "header": "QUESTION 17 [MCQ]",
        "question": "In the three-party MPC division protocol, why can a party not recover the original input from the shares it receives during the message-passing phase?",
        "options": [
          {
            "key": "a",
            "text": "Because the shares are encrypted using a public key"
          },
          {
            "key": "b",
            "text": "Because the shares are always zero-valued"
          },
          {
            "key": "c",
            "text": "Because reconstructing the input requires shares from all three parties"
          },
          {
            "key": "d",
            "text": "Because the parties discard their shares after multiplication"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Each party holds only a subset of the shares associated with the inputs. Since reconstruction requires the appropriate shares from all three parties, an individual party cannot recover the original input from the shares available to it."
      },
      {
        "id": "W6_Q18",
        "week": 6,
        "header": "QUESTION 18 [MCQ]",
        "question": "What is the purpose of combining the partial products in the MPC division protocol?",
        "options": [
          {
            "key": "a",
            "text": "To construct valid secret shares of the required quotient-related quantities"
          },
          {
            "key": "b",
            "text": "To reveal the numerator to all parties"
          },
          {
            "key": "c",
            "text": "To convert the arithmetic computation into a Boolean circuit"
          },
          {
            "key": "d",
            "text": "To eliminate the need for communication between parties"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The partial products are combined so that the resulting values form valid secret shares. The protocol specifically verifies their validity by showing that the shares can be combined with the corresponding shares held by the other parties to correctly reconstruct the desired quantity."
      },
      {
        "id": "W6_Q19",
        "week": 6,
        "header": "QUESTION 19 [MCQ]",
        "question": "At the final stage of the MPC division procedure, what is done with the quantities obtained from the earlier computation?",
        "options": [
          {
            "key": "a",
            "text": "They are discarded because division is already complete"
          },
          {
            "key": "b",
            "text": "Their reciprocals are computed to complete the division operation"
          },
          {
            "key": "c",
            "text": "They are converted into plaintext before multiplication"
          },
          {
            "key": "d",
            "text": "They are replaced with randomly generated shares"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The final steps include computing the reciprocals of the required quantities. These reciprocal computations are part of completing the MPC division while keeping the underlying inputs secret"
      },
      {
        "id": "W6_Q20",
        "week": 6,
        "header": "QUESTION 20 [MCQ]",
        "question": "Who performs the final reconstruction in the MPC division procedure described in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "Every party independently reconstructs the inputs"
          },
          {
            "key": "b",
            "text": "Only the party owning the numerator performs reconstruction"
          },
          {
            "key": "c",
            "text": "An additional computational unit on the consumer or supplier side performs the final reconstruction"
          },
          {
            "key": "d",
            "text": "The TDX module performs the reconstruction automatically"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Final reconstruction is performed by another party, described as the consumer-side or supplier-side computational unit. This unit uses the reconstructed result for computing the updated pricing signals."
      }
    ]
  },
  {
    "week": 7,
    "count": 20,
    "questions": [
      {
        "id": "W7_Q1",
        "week": 7,
        "header": "QUESTION 1 [MCQ]",
        "question": "In the 1-out-of-2 Oblivious Transfer objective, sender S holds secrets {s0, s1} and receiver R holds a bit b. Which of the following correctly states BOTH security requirements of OT?",
        "options": [
          {
            "key": "a",
            "text": "R does not learn b; S does not learn s(1-b)"
          },
          {
            "key": "b",
            "text": "R does not learn s(1-b); S does not learn b"
          },
          {
            "key": "c",
            "text": "R learns both s0 and s1; S learns b"
          },
          {
            "key": "d",
            "text": "Neither party learns anything, including sb"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "OT guarantees that the receiver R only learns the chosen secret sb and nothing about the other secret s(1-b), while the sender S never learns which bit b the receiver chose."
      },
      {
        "id": "W7_Q2",
        "week": 7,
        "header": "QUESTION 2 [MCQ]",
        "question": "In the OT-from-public-key-encryption construction (Even–Goldreich–Lempel scheme), the receiver generates (pkb, skb) ← Gen(1κ; rb) using its chosen bit b, and sets pk(1-b) to a random string. What does this rely on?",
        "options": [
          {
            "key": "a",
            "text": "The public key scheme being deterministic"
          },
          {
            "key": "b",
            "text": "The sender knowing skb in advance"
          },
          {
            "key": "c",
            "text": "Oblivious key sampling"
          },
          {
            "key": "d",
            "text": "Both public keys sharing the same secret key"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The construction requires that a random-looking bitstring of the same length as a real public key be indistinguishable from an actual public key to a polynomial-time adversary. This property, called oblivious key sampling."
      },
      {
        "id": "W7_Q3",
        "week": 7,
        "header": "QUESTION 3 [MCQ]",
        "question": "In the OT-from-PKE protocol, why does the receiver R fail to learn s(1-b), the secret it did not request?",
        "options": [
          {
            "key": "a",
            "text": "Because the sender deletes s(1-b) before sending anything"
          },
          {
            "key": "b",
            "text": "Because R never receives c(1-b) at all"
          },
          {
            "key": "c",
            "text": "Because pk(1-b) is always invalid and rejected by Enc"
          },
          {
            "key": "d",
            "text": "Because R does not know sk(1-b), and by the CPA security of Enc"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "R receives both c0 and c1, but since pk(1-b) was sampled obliviously (without a matching secret key), R cannot decrypt c(1-b). CPA security means R (or any poly-time adversary) cannot distinguish which plaintext c(1-b) corresponds to, so s(1-b) stays hidden."
      },
      {
        "id": "W7_Q4",
        "week": 7,
        "header": "QUESTION 4 [MCQ]",
        "question": "In the 1-out-of-4 OT construction, the sender generates 4 PRF keys k0, k1, k0', k1' and computes ciphertexts such as c0 = c00 = s0 ⊕ Fk0(00) ⊕ Fk0'(00). How does the receiver, holding b = b1b2, ultimately recover sb?",
        "options": [
          {
            "key": "a",
            "text": "By brute-forcing all 4 PRF keys until one decrypts correctly"
          },
          {
            "key": "b",
            "text": "By XORing all four ciphertexts c0, c1, c2, c3 together"
          },
          {
            "key": "c",
            "text": "By running two 1-out-of-2 OTs to obtain kb1 and k'b2"
          },
          {
            "key": "d",
            "text": "By directly requesting sb from the sender over an authenticated channel"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The construction reduces 1-out-of-4 OT to two invocations of 1-out-of-2 OT: one to obliviously fetch the key corresponding to bit b1, and one for bit b2. The receiver then strips off the two PRF pads from cb to recover sb, without learning anything about the other three secrets."
      },
      {
        "id": "W7_Q5",
        "week": 7,
        "header": "QUESTION 5 [MCQ]",
        "question": "In generalization of 1-out-of-4 OT to 1-out-of-N OT, where S holds n secrets {s0, ..., s(n-1)} and R holds a bitstring in {0,1}(log n). How many PRF keys does S generate, and how are they used?",
        "options": [
          {
            "key": "a",
            "text": "A single master key shared identically for all n secrets"
          },
          {
            "key": "b",
            "text": "n keys, one per secret, sent directly to R"
          },
          {
            "key": "c",
            "text": "log n keys, one per bit of b, revealed to R in the clear"
          },
          {
            "key": "d",
            "text": "2 x log n keys (2 keys per bit position of b) and using 1-out-of-2 OT"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "S generates 2 x log n PRF keys, two for each bit position of b (one for '0', one for '1'). For each bit bi, R engages in a 1-out-of-2 OT to obliviously obtain the correct key. S then XOR-masks each of the n secrets with PRF outputs under the appropriate key combination, and R reconstructs sb by XORing with the same PRF outputs using the keys it obtained."
      },
      {
        "id": "W7_Q6",
        "week": 7,
        "header": "QUESTION 6 [MCQ]",
        "question": "In a variant of OT-from-PKE construction, the sender S generates only a single key pair (pk, sk) and sends pk to R (instead of R generating keys as in the Even–Goldreich–Lempel scheme). How does R then hide which secret it is requesting?",
        "options": [
          {
            "key": "a",
            "text": "R re-encrypts both ciphertexts using its own public key before sending them back"
          },
          {
            "key": "b",
            "text": "R sets cb = Encpk(wb) using the real public key, and samples c(1-b) via the Samp"
          },
          {
            "key": "c",
            "text": "R sends pk back to S along with a random bit"
          },
          {
            "key": "d",
            "text": "R asks S to decrypt both ciphertexts and reveal which one is valid"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "This variant relies on the PKE scheme having a Samp algorithm that produces ciphertexts indistinguishable from real ones. R encrypts a random bit wb under the real key for the position it wants (cb ← Encpk(wb)) and uses Samp to produce c(1-b), which looks valid but isn't a genuine encryption."
      },
      {
        "id": "W7_Q7",
        "week": 7,
        "header": "QUESTION 7 [MCQ]",
        "question": "After S decrypts both ciphertexts to get w0 and w1, and sends back (w0 ⊕ s0, w1 ⊕ s1), how does R finally recover sb?",
        "options": [
          {
            "key": "a",
            "text": "R computes sb = wb ⊕ (wb ⊕ sb), using the wb it already knows"
          },
          {
            "key": "b",
            "text": "R asks S directly for sb over a separate authenticated channel"
          },
          {
            "key": "c",
            "text": "R XORs both received values together to isolate sb"
          },
          {
            "key": "d",
            "text": "R decrypts (w0 ⊕ s0, w1 ⊕ s1) using sk, which it possesses"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "R already knows wb since it chose it when computing cb = Encpk(wb). It never learns w(1-b) reliably, since c(1-b) came from Samp rather than genuine encryption. So R simply unmasks the b-th component: sb = wb ⊕ (wb ⊕ sb)."
      },
      {
        "id": "W7_Q8",
        "week": 7,
        "header": "QUESTION 8 [MCQ]",
        "question": "In the DDH-based OT construction, the receiver R holds bit b and computes h0 = g0r for both cases, but sets h1 = g1r when b = 0 and h1 = g1(r+1) when b = 1. What is the purpose of this construction?",
        "options": [
          {
            "key": "a",
            "text": "It ensures h0 and h1 form a valid DDH tuple wrt. exponent r for exactly one of g0/g1"
          },
          {
            "key": "b",
            "text": "It allows R to directly compute both secrets s0 and s1 without any interaction"
          },
          {
            "key": "c",
            "text": "It ensures h0 = h1 always, so S cannot distinguish between them"
          },
          {
            "key": "d",
            "text": "It lets S compute r directly from h0 and h1"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "By shifting the exponent for g1 depending on b, R creates a pair (h0, h1) where exactly one of the two \"sub-tuples\" (g0, g0r) / (g1, h1) is a genuine DDH tuple and the other looks random, by the DDH assumption."
      },
      {
        "id": "W7_Q9",
        "week": 7,
        "header": "QUESTION 9 [MCQ]",
        "question": "In the GMW protocol's AND-gate sharing, P1 holds shares (x1, y1) and P2 holds (x2, y2), with x = x1⊕x2 and y = y1⊕y2. P1 randomly samples a bit z1 and computes four ciphertexts c0, c1, c2, c3 (one for each combination of P2's possible share values), masked with PRF outputs. How does P2 recover its share z2 of the AND output z = x·y?",
        "options": [
          {
            "key": "a",
            "text": "P2 computes z2 by running the AND gate locally on (x1, y1)"
          },
          {
            "key": "b",
            "text": "P2 uses a 1-out-of-4 OT to obtain exactly the ciphertext c(x2y2) corresponding to its own shares, and unmasks it"
          },
          {
            "key": "c",
            "text": "P2 broadcasts x2 and y2 to P1, who then computes z2 directly"
          },
          {
            "key": "d",
            "text": "P2 XORs all four ciphertexts c0, c1, c2, c3 together to get z2"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "P1 precomputes all four possible outcomes masked with z1 and PRF pads. P2, without revealing (x2, y2) to P1, uses 1-out-of-4 OT (built from two 1-out-of-2 OTs) to retrieve only the entry matching its actual shares, then removes the PRF masks to recover z2 = (x1⊕x2)·(y1⊕y2) ⊕ z1 ."
      },
      {
        "id": "W7_Q10",
        "week": 7,
        "header": "QUESTION 10 [MCQ]",
        "question": "Why is a 1-out-of-4 (rather than 1-out-of-2) OT specifically needed for the AND gate in the GMW protocol, whereas XOR gates require no OT at all?",
        "options": [
          {
            "key": "a",
            "text": "Because AND gates require more PRF keys purely for efficiency reasons, unrelated to correctness"
          },
          {
            "key": "b",
            "text": "Because AND is non-linear: z = (x1⊕x2)·(y1⊕y2) involving cross-products"
          },
          {
            "key": "c",
            "text": "Because 1-out-of-2 OT is computationally infeasible for Boolean circuits"
          },
          {
            "key": "d",
            "text": "Because P2 has 4 different secrets s0, s1, s2, s3 unrelated to its shares"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "XOR gates are linear (z1⊕z2 = (x1⊕y1)⊕(x2⊕y2)), so each party can compute its share of the output purely from its own shares. AND is a nonlinear (multiplicative) function of both parties' shares, so P1 must encode 4 possible masked results (one per combination of P2's 2 bits) and P2 must obliviously select the correct one without revealing (x2, y2)."
      },
      {
        "id": "W7_Q11",
        "week": 7,
        "header": "QUESTION 11 [MCQ]",
        "question": "What is the key difference between the semi-honest and malicious security models in MPC?",
        "options": [
          {
            "key": "a",
            "text": "In the malicious model, parties cannot learn anything about the secret"
          },
          {
            "key": "b",
            "text": "In the malicious model, parties may deviate from the protocol and send arbitrary messages"
          },
          {
            "key": "c",
            "text": "In the semi-honest model, parties are allowed to modify their shares"
          },
          {
            "key": "d",
            "text": "In the malicious model, all parties are assumed to follow the protocol honestly"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In the semi-honest model, parties follow the prescribed protocol but may try to learn additional information from the messages they receive. In the malicious model, parties may arbitrarily deviate from the protocol, including sending invalid or arbitrary messages. In the malicious setting, up to n−1 parties may be malicious."
      },
      {
        "id": "W7_Q12",
        "week": 7,
        "header": "QUESTION 12 [MCQ]",
        "question": "What security property of a Message Authentication Code (MAC) prevents an adversary from replacing a valid message with a different message and generating a corresponding valid tag?",
        "options": [
          {
            "key": "a",
            "text": "Confidentiality"
          },
          {
            "key": "b",
            "text": "Randomness"
          },
          {
            "key": "c",
            "text": "Unforgeability"
          },
          {
            "key": "d",
            "text": "Correctness"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "A MAC provides authentication by associating a message with a tag generated using a secret key. The relevant security property is unforgeability: even if an adversary has valid MAC tags for certain messages, it should not be able to generate a valid tag for a new, different message."
      },
      {
        "id": "W7_Q13",
        "week": 7,
        "header": "QUESTION 13 [MCQ]",
        "question": "Why can linear functions of shared values be evaluated locally in the MPC schemes discussed in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "Because the parties reconstruct all secrets before evaluating the function"
          },
          {
            "key": "b",
            "text": "Because a linear secret sharing scheme preserves linear combinations of shares"
          },
          {
            "key": "c",
            "text": "Because multiplication of secret shares is always a local operation"
          },
          {
            "key": "d",
            "text": "Because MACs eliminate the need for communication during computation"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "We use a Linear Secret Sharing Scheme, which allows parties to locally compute linear functions of shared values. For example, if values are shared, a linear combination of their shares corresponds to a share of the same linear combination of the underlying values. This is why addition and multiplication by public constants can be performed locally without reconstructing the underlying secrets."
      },
      {
        "id": "W7_Q14",
        "week": 7,
        "header": "QUESTION 14 [MCQ]",
        "question": "What is the purpose of Beaver's triple in preprocessing-based MPC over arithmetic circuits?",
        "options": [
          {
            "key": "a",
            "text": "To convert an arithmetic circuit into a Boolean circuit"
          },
          {
            "key": "b",
            "text": "To allow multiplication of secret-shared values using preprocessed correlated randomness"
          },
          {
            "key": "c",
            "text": "To generate a MAC key independently for every multiplication gate"
          },
          {
            "key": "d",
            "text": "To eliminate the need for secret sharing during the reconstruction phase"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A Beaver triple consists of secret-shared values such that the third value is the product of the first two. The triple is generated during preprocessing and is then used to securely evaluate multiplication gates. The online phase masks the secret inputs using the preprocessed values, allowing the required intermediate differences to be revealed while keeping the actual secret inputs hidden."
      },
      {
        "id": "W7_Q15",
        "week": 7,
        "header": "QUESTION 15 [MCQ]",
        "question": "In the malicious-party setting, why does each party additionally hold a MAC share associated with its secret share?",
        "options": [
          {
            "key": "a",
            "text": "To allow the party to recover the secret without the other parties"
          },
          {
            "key": "b",
            "text": "To make the secret shares larger and therefore harder to guess"
          },
          {
            "key": "c",
            "text": "To enable detection of invalid or manipulated shares during the protocol"
          },
          {
            "key": "d",
            "text": "To replace the underlying linear secret sharing scheme"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "In the malicious setting, a party may deviate from the protocol and provide an incorrect share or message. MPC therefore augments the secret-sharing mechanism with MAC shares associated with the shared values. The MAC mechanism provides a way to authenticate the values and detect manipulation, relying on the unforgeability of the MAC."
      },
      {
        "id": "W7_Q16",
        "week": 7,
        "header": "QUESTION 16 [MCQ]",
        "question": "At the end of an MPC computation with malicious parties, why are the MAC values interactively checked?",
        "options": [
          {
            "key": "a",
            "text": "To generate a fresh Beaver triple"
          },
          {
            "key": "b",
            "text": "To reconstruct the secret inputs"
          },
          {
            "key": "c",
            "text": "To ensure that the values held by the parties have not been improperly modified"
          },
          {
            "key": "d",
            "text": "To convert the arithmetic circuit into a Boolean circuit"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The protocol performs an interactive check of the MAC values at the end of the computation. If the MACs are consistent, the parties gain confidence that the values were not improperly altered by a malicious party."
      },
      {
        "id": "W7_Q17",
        "week": 7,
        "header": "QUESTION 17 [MCQ]",
        "question": "What type of FHE circuit is sufficient for the naive preprocessing approach to generate Beaver triples?",
        "options": [
          {
            "key": "a",
            "text": "A circuit with multiplicative depth one"
          },
          {
            "key": "b",
            "text": "A circuit with unlimited multiplicative depth"
          },
          {
            "key": "c",
            "text": "A circuit containing only addition gates"
          },
          {
            "key": "d",
            "text": "A circuit with multiplicative depth equal to the number of parties"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Recall that constructing Beaver’s triples require a single multiplication"
      },
      {
        "id": "W7_Q18",
        "week": 7,
        "header": "QUESTION 18 [MCQ]",
        "question": "What additional property of the FHE scheme is assumed when using a shared FHE public key for the preprocessing procedure?",
        "options": [
          {
            "key": "a",
            "text": "Every party must know the complete secret key"
          },
          {
            "key": "b",
            "text": "The secret key is divided into shares held by the parties"
          },
          {
            "key": "c",
            "text": "The FHE scheme must use a different public key for every multiplication"
          },
          {
            "key": "d",
            "text": "The secret key must be publicly broadcast before decryption"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "We assume a shared FHE public key, where each party holds a share of the corresponding secret key. Decryption is then performed collaboratively rather than by a single party holding the complete secret key."
      },
      {
        "id": "W7_Q19",
        "week": 7,
        "header": "QUESTION 19 [MCQ]",
        "question": "In the resharing procedure for MPC using Beaver’s triples, why are fresh random values introduced?",
        "options": [
          {
            "key": "a",
            "text": "To ensure that the resulting sharing is a fresh sharing of the same underlying value"
          },
          {
            "key": "b",
            "text": "To increase the multiplicative depth of the FHE circuit"
          },
          {
            "key": "c",
            "text": "To allow a party to reconstruct the entire secret independently"
          },
          {
            "key": "d",
            "text": "To eliminate the need for homomorphic operations"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The resharing procedure introduces fresh randomness and uses it to produce a new sharing. Because the random values are fresh, the operation amounts to a reshare, while preserving correctness in the plaintext domain."
      },
      {
        "id": "W7_Q20",
        "week": 7,
        "header": "QUESTION 20 [MCQ]",
        "question": "Why is homomorphic multiplication used when generating Beaver triples in the FHE-based preprocessing approach?",
        "options": [
          {
            "key": "a",
            "text": "To perform the final MAC verification"
          },
          {
            "key": "b",
            "text": "To generate the public FHE key"
          },
          {
            "key": "c",
            "text": "To compute the product of the encrypted values needed for the Beaver triple"
          },
          {
            "key": "d",
            "text": "To convert additive shares into Boolean shares"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "To generate a Beaver triple, the preprocessing procedure needs correlated values whose third component is the product of the first two. In the FHE-based approach, the parties use homomorphic operations to compute this product while the values remain encrypted. The resulting ciphertext is then reshared so that the parties obtain the required shares."
      }
    ]
  },
  {
    "week": 8,
    "count": 20,
    "questions": [
      {
        "id": "W8_Q1",
        "week": 8,
        "header": "QUESTION 1 [MCQ]",
        "question": "In the MPC protocol for computing a linear function f(x1,...,xn) = c1·x1 + ... + cn·xn, what condition is placed on the number of corrupted parties t relative to the total number of parties n?",
        "options": [
          {
            "key": "a",
            "text": "t ≤ n/3"
          },
          {
            "key": "b",
            "text": "t = n"
          },
          {
            "key": "c",
            "text": "t < n"
          },
          {
            "key": "d",
            "text": "t > n/2"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "This is the threshold assumption underlying the use of Shamir's secret sharing in the MPC protocol."
      },
      {
        "id": "W8_Q2",
        "week": 8,
        "header": "QUESTION 2 [MCQ]",
        "question": "In Shamir's (t, n) secret sharing scheme, what degree polynomial is used to construct the shares?",
        "options": [
          {
            "key": "a",
            "text": "Degree n polynomial"
          },
          {
            "key": "b",
            "text": "Degree t polynomial"
          },
          {
            "key": "c",
            "text": "Degree (t − 1) polynomial"
          },
          {
            "key": "d",
            "text": "Degree (n − t) polynomial"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "For a (t, n) secret sharing scheme, secrets are constructed through a (t − 1) degree polynomial."
      },
      {
        "id": "W8_Q3",
        "week": 8,
        "header": "QUESTION 3 [MCQ]",
        "question": "In the (3,5) Shamir secret sharing example with secret S = 123 and prime p = 251, why do 2 shares fail to reveal the secret?",
        "options": [
          {
            "key": "a",
            "text": "Because 2 shares always sum to zero mod p"
          },
          {
            "key": "b",
            "text": "Because there are multiple quadratic polynomials through 2 points"
          },
          {
            "key": "c",
            "text": "Because the shares are individually encrypted with AES"
          },
          {
            "key": "d",
            "text": "Because 2 < p, so no polynomial can be constructed"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "With only 2 points, there are infinitely many quadratic polynomials (mod 251) consistent with those points; 3 points are needed to uniquely determine a quadratic (degree-2) polynomial."
      },
      {
        "id": "W8_Q4",
        "week": 8,
        "header": "QUESTION 4 [MCQ]",
        "question": "Which equation defines the practical (n, n) additive secret sharing scheme used in the lecture, denoted [x]?",
        "options": [
          {
            "key": "a",
            "text": "x = x1 · x2 · ... · xn (mod p)"
          },
          {
            "key": "b",
            "text": "x = max(x1, x2, ..., xn) (mod p)"
          },
          {
            "key": "c",
            "text": "x = x1 − x2 − ... − xn (mod p)"
          },
          {
            "key": "d",
            "text": "x = x1 + x2 + ... + xn (mod p)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Additive secret sharing wrt. a prime modulo p is defined as x = x1 + x2 + ⋯ + xn (mod p), with such a sharing denoted [x]."
      },
      {
        "id": "W8_Q5",
        "week": 8,
        "header": "QUESTION 5 [MCQ]",
        "question": "In the BGW worked example (4 parties, t = 2, y = x1+x2+x3+x4 over 𝔽5, with x1=2, x2=1, x3=1, x4=0), the adversary corrupts P1 and P4 and knows y. What does the adversary conclude about the unknown pair (x2, x3)?",
        "options": [
          {
            "key": "a",
            "text": "Multiple candidate pairs remain equally consistent"
          },
          {
            "key": "b",
            "text": "It uniquely determines (x2, x3) = (1,1)"
          },
          {
            "key": "c",
            "text": "The adversary learns nothing at all, not even y"
          },
          {
            "key": "d",
            "text": "It determines x2 exactly but not x3"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The adversary can list candidate guesses (x2,x3) = (0,2), (1,1), (2,0), (3,4), (4,3), and for every guess there exist consistent polynomials B(Z) and C(Z) matching the corrupted parties' views. So no guess can be ruled out."
      },
      {
        "id": "W8_Q6",
        "week": 8,
        "header": "QUESTION 6 [MCQ]",
        "question": "In the real vs. ideal paradigm used to prove MPC security, what must the \"ideal protocol execution\" be able to do?",
        "options": [
          {
            "key": "a",
            "text": "Recompute the function using a trusted third party in real time"
          },
          {
            "key": "b",
            "text": "Reveal the polynomial coefficients used in secret sharing"
          },
          {
            "key": "c",
            "text": "Recreate (simulate) whatever the adversary learns in the real execution"
          },
          {
            "key": "d",
            "text": "Guarantee zero communication rounds"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The ideal execution must show that whatever the adversary learns in the real execution can be recreated (or simulated) solely based on the function output and the inputs of the corrupt parties, and the proof shows the two executions are computationally indistinguishable."
      },
      {
        "id": "W8_Q7",
        "week": 8,
        "header": "QUESTION 7 [MCQ]",
        "question": "What is the fundamental efficiency-vs-security trade-off that defines Searchable Symmetric Encryption (SSE)?",
        "options": [
          {
            "key": "a",
            "text": "SSE eliminates all leakage in exchange for slower search"
          },
          {
            "key": "b",
            "text": "SSE requires the server to know the decryption key"
          },
          {
            "key": "c",
            "text": "SSE leaks some controlled information to the server as a trade-off for efficiency"
          },
          {
            "key": "d",
            "text": "SSE guarantees information-theoretic security with no assumptions"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "SSE leaks some controlled information to the server as a trade-off for efficiency, positioning it between fully secure but inefficient schemes (like FHE, ORAM) and fully efficient but less secure schemes (like deterministic/order-preserving encryption)."
      },
      {
        "id": "W8_Q8",
        "week": 8,
        "header": "QUESTION 8 [MCQ]",
        "question": "In a landscape diagram, which pair of techniques are positioned as maximizing security at the cost of efficiency?",
        "options": [
          {
            "key": "a",
            "text": "Deterministic Encryption and Order-Preserving Encryption"
          },
          {
            "key": "b",
            "text": "Order-Revealing Encryption and SSE"
          },
          {
            "key": "c",
            "text": "Fully Homomorphic Encryption and Oblivious RAM"
          },
          {
            "key": "d",
            "text": "Property-Preserving Encryption and Searchable Symmetric Encryption"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Fully Homomorphic Encryption, Predicate Encryption, and Oblivious RAM are at the high-security/low-efficiency end, while Deterministic and Order-Preserving Encryption sit at the high-efficiency/low-security end, with SSE occupying a middle ground."
      },
      {
        "id": "W8_Q9",
        "week": 8,
        "header": "QUESTION 9 [MCQ]",
        "question": "Which three protocols make up the SSE client-server scheme described in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "KeyGen, Encrypt, Decrypt"
          },
          {
            "key": "b",
            "text": "Setup, Search, Update"
          },
          {
            "key": "c",
            "text": "Init, Query, Finalize"
          },
          {
            "key": "d",
            "text": "Encrypt, Index, Retrieve"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "SSE executes three protocols between client and server: Setup (client generates and offloads an encrypted database and search index), Search (client sends a token; server returns results), and Update (client sends an update token; server applies it and returns success/failure)."
      },
      {
        "id": "W8_Q10",
        "week": 8,
        "header": "QUESTION 10 [MCQ] In the SSE search index, what does the \"inverted index\" map, as opposed to the \"forward index\"?",
        "question": "In the SSE search index, what does the \"inverted index\" map, as opposed to the \"forward index\"?",
        "options": [
          {
            "key": "a",
            "text": "Keyword → list of document ids containing it"
          },
          {
            "key": "b",
            "text": "Document id → keywords it contains"
          },
          {
            "key": "c",
            "text": "Client key → server key"
          },
          {
            "key": "d",
            "text": "Search token → PRF seed"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The forward index map is document id → keywords (e.g., Document 1 → Apple, Banana, Cat), while the inverted index maps keyword → document ids (e.g., Apple → 1, 3, 5). The inverted index is the structure primarily used for SSE search indices."
      },
      {
        "id": "W8_Q11",
        "week": 8,
        "header": "QUESTION 11 [MCQ]",
        "question": "In the simple SSE construction (Design 1), what does the server learn during the Setup phase?",
        "options": [
          {
            "key": "a",
            "text": "Only the number of documents, nothing else"
          },
          {
            "key": "b",
            "text": "The plaintext keywords only, not document counts"
          },
          {
            "key": "c",
            "text": "Number of documents, number of keywords, frequency of each keyword, and co-occurrence information of keyword pairs"
          },
          {
            "key": "d",
            "text": "Nothing at all — Design 1 has zero setup leakage"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Design 1 replaces keywords with PRF outputs F_k(w) but otherwise preserves the index structure directly, so the server can observe the number of documents, number of distinct keywords (rows), the frequency of each keyword (list length per row), and co-occurrence of keyword pairs (shared document ids across rows)."
      },
      {
        "id": "W8_Q12",
        "week": 8,
        "header": "QUESTION 12 [MCQ]",
        "question": "Which of the following is NOT listed as part of the \"Search phase\" leakage (ℒSearch) in the formal leakage function?",
        "options": [
          {
            "key": "a",
            "text": "Result pattern"
          },
          {
            "key": "b",
            "text": "Query equality pattern"
          },
          {
            "key": "c",
            "text": "Query intersection pattern"
          },
          {
            "key": "d",
            "text": "Frequency of each keyword"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "ℒSearch consists of the result pattern (which documents appear in the result), query equality pattern (which queries correspond to the same keyword), and query intersection pattern (which documents appear across multiple queries). Frequency of each keyword is part of ℒSetup, not ℒSearch."
      },
      {
        "id": "W8_Q13",
        "week": 8,
        "header": "QUESTION 13 [MCQ]",
        "question": "In SSE Design 2, how does the client compute the search index for a keyword w during Setup?",
        "options": [
          {
            "key": "a",
            "text": "It hashes w directly and stores it unencrypted alongside document ids"
          },
          {
            "key": "b",
            "text": "It sends the plaintext document ids to the server along with keyword counts"
          },
          {
            "key": "c",
            "text": "It uses a single shared key for all keywords with no per-keyword randomness"
          },
          {
            "key": "d",
            "text": "It splits the PRF output into k1‖k2, uses k1 to generate per-document tags F(k1, c), and encrypts document ids with k2"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Design 2's setup computes k1‖k2 = Fk(w) for each keyword, generates a tag for the c-th document as F(k1, c), and encrypts the corresponding document id as Enc(k2, id), incrementing c."
      },
      {
        "id": "W8_Q14",
        "week": 8,
        "header": "QUESTION 14 [MCQ]",
        "question": "Compared to Design 1, what does an adversary observing a snapshot of the Design 2 encrypted database (before any queries) learn?",
        "options": [
          {
            "key": "a",
            "text": "The number of keywords and their frequencies"
          },
          {
            "key": "b",
            "text": "The co-occurrence pattern of all keyword pairs"
          },
          {
            "key": "c",
            "text": "Nothing beyond the number of documents"
          },
          {
            "key": "d",
            "text": "The plaintext content of every document"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "An adversary who sees the encrypted database at a single point in time (before queries start) in Design 2 learns nothing other than the number of documents."
      },
      {
        "id": "W8_Q15",
        "week": 8,
        "header": "QUESTION 15 [MCQ]",
        "question": "Why does Design 2 sort the encrypted search index by pseudorandom labels rather than storing entries in their natural database order?",
        "options": [
          {
            "key": "a",
            "text": "To speed up binary search on plaintext keywords"
          },
          {
            "key": "b",
            "text": "To allow the server to decrypt document ids without a key"
          },
          {
            "key": "c",
            "text": "To ensure the dictionary's insertion order does not reveal the original processing order of the database"
          },
          {
            "key": "d",
            "text": "To reduce the total storage size of the index"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "By definition"
      },
      {
        "id": "W8_Q16",
        "week": 8,
        "header": "QUESTION 16 [MCQ]",
        "question": "In the code-based game-playing proof methodology, what determines the output of a game G when adversary A halts?",
        "options": [
          {
            "key": "a",
            "text": "The game runs a Final procedure on A's output"
          },
          {
            "key": "b",
            "text": "The adversary directly outputs the value of Pr[G]"
          },
          {
            "key": "c",
            "text": "The output is always 1 regardless of A's behavior"
          },
          {
            "key": "d",
            "text": "The oracle that was queried most frequently determines the output"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "By definition in the lecture"
      },
      {
        "id": "W8_Q17",
        "week": 8,
        "header": "QUESTION 17 [MCQ]",
        "question": "In the PRF security game (PRF-Real vs. PRF-Ideal), what is the key difference between the two worlds?",
        "options": [
          {
            "key": "a",
            "text": "In PRF-Real, y is computed as F(K, x) with K drawn from the dictionary; in PRF-Ideal, y is a value drawn from a random dictionary R(j, x)"
          },
          {
            "key": "b",
            "text": "In PRF-Real, the adversary sees the key K directly; in PRF-Ideal it does not"
          },
          {
            "key": "c",
            "text": "In PRF-Real, y is always a constant; in PRF-Ideal it is random"
          },
          {
            "key": "d",
            "text": "There is no difference. Both worlds use the same function F"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The diagram shows PRF-Real computing y ← F(K, x) with K drawn via the big random dictionary T[j], while PRF-Ideal computes y ← R(j, x), a genuinely random function output. The adversary must distinguish which world it is interacting with (bit b vs b′)."
      },
      {
        "id": "W8_Q18",
        "week": 8,
        "header": "QUESTION 18 [MCQ]",
        "question": "In the IND-CPA game for symmetric-key encryption, what does the adversary submit to the challenger, and what must it guess?",
        "options": [
          {
            "key": "a",
            "text": "Submits a single message m and a guessed key K; must guess if decryption succeeds"
          },
          {
            "key": "b",
            "text": "Submits two messages m0, m1; challenger encrypts m_b for random bit b; adversary must guess b"
          },
          {
            "key": "c",
            "text": "Submits a ciphertext c and must recover the key K"
          },
          {
            "key": "d",
            "text": "Submits nothing; the adversary only observes ciphertexts passively"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In IND-CPA, the adversary submits a pair (m0, m1), the challenger flips b ← {0,1} and returns c ← Enc(K, m_b); the adversary outputs b′ and the game outputs 1 if b = b′."
      },
      {
        "id": "W8_Q19",
        "week": 8,
        "header": "QUESTION 19 [MCQ]",
        "question": "What is the overall goal of the \"proof by hybrids\" (G0 → G1 → G2 → G3) used in the SSE security proof?",
        "options": [
          {
            "key": "a",
            "text": "To show RealΠ is identical (not just indistinguishable) to IdealL,SIM"
          },
          {
            "key": "b",
            "text": "To incrementally transform the Real game into the Ideal game"
          },
          {
            "key": "c",
            "text": "To prove the PRF is insecure"
          },
          {
            "key": "d",
            "text": "To eliminate the need for a leakage function entirely"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The proof structure is RealΠ ≃c G0 ≃c G1 ≃c G2 ≃c G3 ≃c IdealL,SIM . Each hybrid step is shown indistinguishable from the previous one, chaining to show Real ≃c Ideal overall."
      },
      {
        "id": "W8_Q20",
        "week": 8,
        "header": "QUESTION 20 [MCQ]",
        "question": "What information does the leakage algorithm L provide to the Simulator (SIM) in the basic SSE security definition?",
        "options": [
          {
            "key": "a",
            "text": "α = (N, V1, ..., Vq), where N is the total number of (w, id) pairs and each Vi is the set of document ids matching the i-th searched keyword"
          },
          {
            "key": "b",
            "text": "The plaintext database DB and all secret keys"
          },
          {
            "key": "c",
            "text": "Only the total number of documents, with no per-query information"
          },
          {
            "key": "d",
            "text": "The PRF key K used to generate all tags"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The simplified leakage for the basic SSE scheme is as α = (N, V1, …, Vq), where N is the total number of (w, id) pairs in the database and each Vi = DB(wi), the identifiers matching the i-th search keyword."
      }
    ]
  }
];