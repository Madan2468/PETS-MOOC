window.QUIZ_DATA = [
  {
    "week": 1,
    "count": 20,
    "questions": [
      {
        "id": "W1_Q1",
        "week": 1,
        "header": "Q1 — Privacy vs Security (BUG Cloud Storage)",
        "question": "In the \"BUG (Big Unnamed Group)\" cloud storage example from the lecture 1, why does the system violate its stated privacy policy even though the access control matrix technically enforces security?",
        "options": [
          {
            "key": "a",
            "text": "Because Tom and Jerry can both read each other's files directly"
          },
          {
            "key": "b",
            "text": "Because BUG granted itself \"share\" access to all files, letting it authorize other users to access files without the owners' approval"
          },
          {
            "key": "c",
            "text": "Because the access control matrix was not encrypted"
          },
          {
            "key": "d",
            "text": "Because Jerry has \"Write\" access to Tom's files without permission"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The example illustrates that security (enforcing the access control matrix as written) and privacy (honoring the intended policy that only owners can grant access to their files) are not the same thing. Although the matrix technically restricts direct access, i.e., Tom cannot read Jerry's files and vice versa (ruling out Option a and Option d, since the matrix does not grant them cross-access), BUG has quietly given itself \"share\" rights on every file. This means BUG could authorize any user to access any other user's files without the actual owner's consent, directly contradicting the stated policy that only the owner can grant such access. The issue has nothing to do with encryption of the matrix itself (ruling out Option c); it is about who holds the power to grant access, showing that a system can remain \"secure\" (matrix is enforced as configured) while still being fundamentally unprivate, since the privacy violation stems from the design/configuration of permissions rather than a breach of the security mechanism."
      },
      {
        "id": "W1_Q2",
        "week": 1,
        "header": "Q2 — Classification of PET Types",
        "question": ": Based on the classification of PET types, which of the following pairings of PET category and correct example are accurate?",
        "options": [
          {
            "key": "a",
            "text": "PETs that reduce identifiability of individuals: Differential Privacy, Synthetic Data"
          },
          {
            "key": "b",
            "text": "PETs that focus on hiding/shielding data: Homomorphic Encryption, Zero-Knowledge Proofs"
          },
          {
            "key": "c",
            "text": "PETs that split datasets or control access to data: Trusted Execution Environments, Secure Multi-Party Computation, Federated Learning"
          },
          {
            "key": "d",
            "text": "PETs that reduce identifiability of individuals: Homomorphic Encryption, Federated Learning"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "The first category reduces the identifiability of individuals to whom the data relates, with Differential Privacy and Synthetic Data given as examples, noting this may reduce data utility compared to the original dataset (confirming Option a). The second category focuses on hiding or shielding data itself, with Homomorphic Encryption (allowing computation on encrypted data without revealing plaintext) and Zero-Knowledge Proofs (proving a statement is true without revealing the underlying information) as examples (confirming Option b). The third category splits datasets or controls access to parts of data using a systems approach, with Trusted Execution Environments, Secure Multi-Party Computation/Private Set Intersection, and Federated Learning as examples (confirming c). Option d incorrectly reassigns Homomorphic Encryption and Federated Learning into the \"identifiability reduction\" category, since neither of these constructions are inherently designed for non-anonymous use-cases."
      },
      {
        "id": "W1_Q3",
        "week": 1,
        "header": "Q3 — Semantic Security & IND-CPA Definition",
        "question": "A privacy engineer wants to allow a cloud server to perform computations on a user's data without the server ever being able to view the unencrypted content. Which type of PET, as categorized in the lecture, directly enables this capability?",
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
        "explanation": "Homomorphic Encryption focuses on allowing computation on encrypted data without revealing the plaintext, exactly matching the scenario of a server processing data it can never actually see. Differential Privacy (Option a) belongs instead to the category of PETs that reduce identifiability of individuals by adding statistical noise to datasets or query results, which is a different mechanism aimed at protecting individual records within aggregate data rather than enabling computation on encrypted values. Synthetic Data (Option c) also falls under the identifiability-reduction category, working by generating artificial data that mimics statistical properties of the original dataset rather than operating on the real data at all. Federated Learning (Option d) belongs to the category of PETs that split datasets or control access to data, where model training happens locally on distributed devices and only model updates (not raw data or encrypted computations) are shared centrally."
      },
      {
        "id": "W1_Q4",
        "week": 1,
        "header": "Q4 — Symmetric Homomorphic Encryption (SHE)",
        "question": "In group theory terms, a function f: G → H is called a homomorphism if it satisfies which of the following properties?",
        "options": [
          {
            "key": "a",
            "text": "f(g1 + g2) = f(g1) + f(g2), where + is the same operation in both G and H"
          },
          {
            "key": "b",
            "text": "f(g1 + g2) = f(g1) † f(g2), where + is the operation in G and † is the transformed operation in H"
          },
          {
            "key": "c",
            "text": "f(g1) = f(g2) for all g1, g2 ∈ G"
          },
          {
            "key": "d",
            "text": "f(g1 × g2) = f(g1) - f(g2)"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Homomorphism from group G to group H is a function f such that f(g1 + g2) = f(g1) † f(g2), where g1 and g2 are elements of G, \"+\" denotes the operation in G, and \"†\" denotes the transformed operation in H. This formalism is important precisely because it does not require the operation in H to be identical to the operation in G. Option (a) incorrectly assumes the operations in G and H must be the same, which is too restrictive. Option © describes a constant function, which trivially preserves structure but is not homomorphism by definition. Option (d) mixes multiplication and subtraction inconsistently and does not correspond to the homomorphism."
      },
      {
        "id": "W1_Q5",
        "week": 1,
        "header": "Q5 — Limitations of Symmetric vs Asymmetric HE",
        "question": "In the RSA encryption scheme, if c 1 = m 1 e mod N and c 2 = m 2 e mod N, what does the value (c 1 × c 2 ) mod N represent, based on the multiplicative homomorphism property?",
        "options": [
          {
            "key": "a",
            "text": "An encryption of (m 1 + m 2 )"
          },
          {
            "key": "b",
            "text": "An encryption of m 1 only, with m 2 discarded"
          },
          {
            "key": "c",
            "text": "An invalid ciphertext that cannot be decrypted"
          },
          {
            "key": "d",
            "text": "An encryption of (m 1 × m 2 )"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Note that RSA exhibits multiplicative homomorphism: given ciphertexts c 1 = m 1 e mod N and c 2 = m 2 e mod N, computing c* = c 1 × c 2 × ... × c n mod N yields (m 1 × m 2 × ... × m n ) e mod N, which is precisely the valid RSA encryption of the product (m 1 × m 2 × ... × m n ). This is not additive homomorphism (ruling out Option a), since RSA as presented does not support recovering m 1 + m 2 from any combination of c 1 and c 2 using standard modular operations. The ciphertext product remains perfectly valid and decryptable using the secret key d (ruling out Option c), and both m 1 and m 2 genuinely contribute to the result rather than one being discarded (ruling out Option b)."
      },
      {
        "id": "W1_Q6",
        "week": 1,
        "header": "Q6 — Gentry's 2009 FHE Breakthrough",
        "question": "In the Paillier cryptosystem, if c 1 is an encryption of m 1 and c 2 is an encryption of m 2 , which operation on the ciphertexts yields a valid encryption of (m 1 + m 2 )?",
        "options": [
          {
            "key": "a",
            "text": "Multiplying the ciphertexts: c 1 × c 2 mod n²"
          },
          {
            "key": "b",
            "text": "Adding the ciphertexts: c 1 + c 2"
          },
          {
            "key": "c",
            "text": "Raising c 1 to the power of c 2"
          },
          {
            "key": "d",
            "text": "Subtracting the ciphertexts: c 1 - c 2"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "In the Paillier scheme, ciphertexts have the form c 1 = g m1 · r 1 n mod n² and c 2 = g m2 · r 2 n mod n². Multiplying these two ciphertexts gives c 1 × c 2 = g (m1+m2) · (r 1 × r 2 ) n mod n², which is precisely a valid Paillier encryption of the sum (m 1 + m 2 ), since the exponents of g add when the ciphertexts are multiplied. This makes Paillier an additively homomorphic scheme, in contrast to RSA's multiplicative homomorphism."
      },
      {
        "id": "W1_Q7",
        "week": 1,
        "header": "Q7 — Noise Growth in LWE Ciphertexts",
        "question": "In the lecture's numerical example demonstrating \"Why Parameters are Important,\" the encryption scheme fails to correctly decrypt when p = 7 but succeeds when p = 23, using the same m 1 , m 2 , and similarly sized r 1 , r 2 values. What does this illustrate about the homomorphic symmetric encryption scheme?",
        "options": [
          {
            "key": "a",
            "text": "The scheme is completely broken and cannot be used for any additive homomorphism"
          },
          {
            "key": "b",
            "text": "The scheme only works when p is a prime number"
          },
          {
            "key": "c",
            "text": "The secret key p must be large enough relative to the noise terms (2r 1 + 2r 2 + m 1 + m 2 ) so that the sum stays smaller than p and does not wrap around during the mod p operation"
          },
          {
            "key": "d",
            "text": "The value of q (the random large multiplier) has no effect on correctness"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The scheme's correctness relies on the combined noise term (2(r 1 +r 2 ) + (m 1 +m 2 )) remaining strictly smaller than p, so that when decryption computes ((c 1 +c 2 ) mod p) mod 2, the mod p operation correctly strips away the multiples of p and leaves only the noise term intact for the final mod 2 to extract. With p = 7, the noise term becomes large enough relative to p that it \"wraps around\" during the mod p operation, corrupting the result and yielding the incorrect plaintext. With p = 23, the noise term stays comfortably smaller than p, so the mod p operation behaves as intended and correctly yields the plaintext. This does not mean the scheme is fundamentally broken (ruling out Option a); rather, it demonstrates that correct parameter selection is essential for the scheme to function properly. The example never suggests p must be prime (ruling out Option b), and q clearly does affect the ciphertext value even though it is designed to be eliminated by the mod p operation during correct decryption (ruling out d)."
      },
      {
        "id": "W1_Q8",
        "week": 1,
        "header": "Q8 — LWE Problem (Learning With Errors)",
        "question": "Recall that the \"approximate GCD problem\" is the basis for semantic security of the homomorphic scheme discussed in the lecture. Given x 1 = s 1 + p·q 1 and x 2 = s 2 + p·q 2 , where s 1 and s 2 are much smaller than p, what is the conclusion about computing p efficiently from x 1 and x 2 alone?",
        "options": [
          {
            "key": "a",
            "text": "It is easy, using the standard Euclidean algorithm, since GCD computation is always polynomial-time"
          },
          {
            "key": "b",
            "text": "It is not possible in general, to the best of current knowledge, since the approximate GCD problem appears hard even with arbitrarily many samples"
          },
          {
            "key": "c",
            "text": "It is possible only when p is an even number"
          },
          {
            "key": "d",
            "text": "It is trivial because s1 and s2 can simply be subtracted out algebraically"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Note the difference between classical Euclidean GCD problem (which Euclid showed is easy to compute exactly for two integers) from the approximate GCD problem, where p is only an approximate common factor of x 1 and x 2 , each offset by a small unknown noise term (s 1 , s 2 ).To the best of our knowledge, computing p efficiently in this approximate setting remains hard even when given arbitrarily many samples x i = s i + p·q i rather than just two, provided the bit-lengths of s i , p, and q i are chosen appropriately (λ, λ², λ ⁵ bits respectively). Option a incorrectly conflates the easy exact-GCD problem with the hard approximate-GCD problem. Likewise option c is incorrect since the modulo-2 of p does not play a role in the hardness of the problem. Option d is incorrect because s 1 and s 2 are unknown noise terms hidden inside x 1 and x 2 , not values that can simply be subtracted out without already knowing p."
      },
      {
        "id": "W1_Q9",
        "week": 1,
        "header": "Q9 — LWE Error Distribution & Ring Choice",
        "question": "According to the classification of homomorphic encryption schemes based on the operations they support, which of the following pairings are correct? Select all that apply.",
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
        "explanation": "Somewhat homomorphic schemes permit infinite additions (since noise grows only additively/doubles) but are limited to exactly one multiplication, because multiplication causes noise quadratically rather than linearly. Leveled homomorphic schemes extend this by supporting infinite additions and a bounded, predetermined number L of multiplications, offering more flexibility at the cost of needing to fix L in advance. Fully homomorphic schemes are the strongest category, supporting infinite additions and infinite multiplications, achieved through the bootstrapping technique introduced later in the lecture. Option d inverts the actual definition and is incorrect."
      },
      {
        "id": "W1_Q10",
        "week": 1,
        "header": "Q10 — Search LWE vs Decisional LWE",
        "question": "In the \"defective glove box\" analogy for error growth, what does placing box B 1 inside box B 2 (which holds the key to B 1 ) and then opening B 1 represent in the actual bootstrapping procedure?",
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
            "text": "Generating a new public key pair for the next round of encryption"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "In the analogy, box B 1 's gloves \"stiffen\" after limited use, representing a ciphertext accumulating noise until it can no longer support further homomorphic operations. Rather than discarding the work, Alice places B 1 inside a second box B 2 that holds the key to B 1 , and B 1 is opened and processed further inside B 2 . The residue of B 1 's operation continues under B 2 's protection. This directly mirrors the formal bootstrapping procedure. This is not discarding the computation (ruling out Option a) since it explicitly preserves the \"residue\" of the prior operation. It does not reveal the plaintext to the owner, since the entire point is that the worker (analogous to the untrusted server) never sees inside the box (ruling out Option b). It also does not involve generating an entirely new keypair for future encryptions in the everyday sense (ruling out Option d)."
      },
      {
        "id": "W1_Q11",
        "week": 1,
        "header": "Q11 — LWE Encryption Scheme Operations",
        "question": "Even after the recryption/bootstrapping procedure computes an encryption of m 1 + m 2 under a new public key, the scheme is \"almost, but not quite\" bootstrappable. What specific technical obstacle prevents full bootstrappability at that point?",
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
            "text": "The addition operation cannot be performed on ciphertexts encrypted under different public keys"
          },
          {
            "key": "d",
            "text": "The scheme becomes vulnerable to brute-force factoring of p once bootstrapping begins"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Decryption in this scheme is computed as m = c - (p · [c/p]) mod 2, where [c/p] denotes c/p rounded to the nearest integer. For bootstrapping to work, this entire decryption function must itself be evaluated homomorphically on encrypted inputs, but computing [c/p] mod 2 is more complex than what the evaluation function can absorb without introducing a decryption error. This is because multiplying c by 1/p effectively means multiplying two log-p bit integers, and every output bit becomes a log-p bit polynomial of the input bits, which is too high-degree for the noise budget to support."
      },
      {
        "id": "W1_Q12",
        "week": 1,
        "header": "Q12 — LWE Homomorphic Addition & Decryption Condition",
        "question": "Regarding the security and performance trade-offs of the bootstrappable scheme (using sparse subset sums r 1 ,...,r β to approximate 1/p), which of the following statements are accurate?",
        "options": [
          {
            "key": "a",
            "text": "Security relies on the hardness of the sparse subset-sum problem (SSSP), which has β α possible secret subsets to search over"
          },
          {
            "key": "b",
            "text": "The parameter β can be chosen large enough (polynomial in the security parameter λ) that an exponential number of subsets are close to 1/p, making subset-recovery attacks infeasible"
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
        "explanation": "The lecture explains that after augmenting the public key with sparse real-number hints r 1 , ..., r β (chosen so some sparse subset S sums to approximately 1/p mod 2), security depends on the hardness of the sparse subset-sum problem, which requires searching among β α possible secret subsets, confirming statement in Option a. To keep this attack infeasible, note that β can be chosen polynomial in the security margin α = λ (specifically β = α ⁵ polylog( λ)) while still yielding an exponential number of subsets whose sum is close to 1/p, thwarting realistic attacks, confirming statement in Option b. Also note that the encryption key contains a hint of the secret key p, and this hint (via the sparse structure of S) is precisely what allows the new decryption function to be computed by a low-degree circuit, since S is sparse, thereby confirming statement Option d. However, statement in Option c is a direct contradiction, since the approach described in the question makes the scheme impractical."
      },
      {
        "id": "W1_Q13",
        "week": 1,
        "header": "Q13 — Short Integer Solution (SIS) Problem",
        "question": "In the definition of a lattice, what is used to describe/represent a lattice compactly, and what geometric shape do the lattice points form when connected?",
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
        "explanation": "Lattices are defined as a regular array of points in space, wherein connecting the dots (lattice points) forms parallelograms. A lattice may be described by giving basis vectors that span such a parallelogram, meaning a small set of vectors (the basis) can generate the entire infinite regular point structure through integer linear combinations. Option a is incorrect since a single point cannot generate a full lattice through any covered mechanism, and lattices are not circular structures. Option c incorrectly introduces \"prime modulus,\" not playing a role in the geometric definition of a lattice, and triangular tiling is not how lattice points are geometrically defined. Option d is likewise incorrect."
      },
      {
        "id": "W1_Q14",
        "week": 1,
        "header": "Q14 — Tor Onion Routing Threat Model",
        "question": "Referring to the Closest Vector Problem (CVP) using a lattice L with a known basis and a point P that is not necessarily a lattice point, what is the CVP challenge?",
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
            "text": "Compute the greatest common divisor of the coordinates of P"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "This is the definitional framing of the CVP challenge: given a known basis for lattice L and an arbitrary point P (which may not itself be a lattice point), the \"Challenge\" is to find the lattice point Q that is closest to P. This is distinct from finding the basis itself (Option a), which is a separate concern. It is also more than simply testing exact membership (option b). Option d is unrelated; GCD computation does not belong to the lattice-based CVP framework."
      },
      {
        "id": "W1_Q15",
        "week": 1,
        "header": "Q15 — Tor Onion Routing Multi-Layer Encryption",
        "question": "Regarding the Learning with Errors (LWE) problem, which of the following statements accurately describe its structure and hardness guarantees?",
        "options": [
          {
            "key": "a",
            "text": "In the search variant, the goal is to find the secret vector s by observing many pairs (a i , b i ) where b i = ⟨ s , a i ⟩ + e i (mod q)"
          },
          {
            "key": "b",
            "text": "In the decisional variant, the goal is to distinguish LWE samples (a i , b i ) from uniformly random samples"
          },
          {
            "key": "c",
            "text": "According to Regev (2005) and Peikert (2009), LWE is as hard as certain worst-case lattice problems in dimension n, for a proper choice of parameters"
          },
          {
            "key": "d",
            "text": "The error terms e i must always be large relative to q for LWE to remain secure"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "We have discussed two variants of the LWE problem: the search variant, where the objective is to recover the secret s by observing the input-output pairs ( a i , b i ), with b i = ⟨ s , a i ⟩ + e i (mod q) and e i being short (confirming Option a); and the decisional variant, where the objective is instead to distinguish genuine LWE samples from uniformly random pairs in the same space (confirming Option b). The foundational hardness result of LWE, attributed to Regev (2005) and Peikert (2009), is that LWE is as hard as certain worst-case lattice problems in dimension n, provided parameters are chosen properly (confirming Option c). Option d is false, since if the error were too large, correct decryption would fail (as shown in Regev's cryptosystem, where correct decryption requires error less than q/4); large errors do not enhance security in the way described, they would simply break correctness."
      },
      {
        "id": "W1_Q16",
        "week": 1,
        "header": "Q16 — Homomorphic Encryption Noise Bottleneck",
        "question": "In Regev's LWE-based cryptosystem, when performing homomorphic multiplication of two ciphertexts via the tensor product step ( ⟨ s ⊗ s, c1 ⊗ c2 ⟩ ≈ σ1·σ2· q²/4), what critical side effect does the lecture identify as a consequence of this operation, necessitating a second \"dimension reduction\" step?",
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
        "explanation": "Recall the discussion about two consequences of the tensor product step. First, the error grows quadratically (since the resulting error term becomes a product of the two original error-containing quantities, approximately σ1·σ2· q²/4 rather than a linear combination). Second, the dimension squares on multiply, meaning the new secret key s* = (s ⊗ s) and corresponding ciphertext c* = c1 ⊗ c2 live in a much higher-dimensional space than the original. This dimension blow-up is precisely why another step, namely \"Dimension Reduction,\" is needed. Option a is incorrect since the secret key is transformed into a new valid key relative to which the tensor-product ciphertext correctly decrypts (it isn't rendered invalid, just changed in dimension). Option c is likewise false. Option b is also incorrect, since with correct parameters and the key-switching step, the ciphertext remains decryptable, as shown by ⟨ s, c ⟩ ≈ σ· q/2 (mod q) after dimension reduction."
      },
      {
        "id": "W1_Q17",
        "week": 1,
        "header": "Q17 — FHE vs Somewhat Homomorphic Encryption (SWHE)",
        "question": "Based on the worked out example, for parameters n=4, q=7, the public key size for standard LWE was computed as 40 elements (120 bits), while for Ring-LWE it was computed as only 8 elements (24 bits). What is the primary structural reason for this significant reduction in key size under Ring-LWE?",
        "options": [
          {
            "key": "a",
            "text": "Ring-LWE replaces the m×n random matrix A and length-m vector b of standard LWE with just two degree-(n−1) polynomials a(x) and b(x), each requiring only n coefficients"
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
        "explanation": "In standard LWE, the public key consists of a full m×n random matrix A (with m=2n=8, n=4, giving 32 elements) plus a length-m vector b (8 elements), totaling 40 elements. In contrast, the Ring-LWE example represents the public key using just two polynomials, a(x) and b(x), each of degree n−1 (so each has only n=4 coefficients), for a total of just 2n=8 elements. This reduction arises because the algebraic ring structure (polynomials modulo x ⁴ +1) allows the entire matrix-vector relationship of standard LWE to be compactly captured by polynomial multiplication, replacing an m×n matrix worth of independent random elements with a single random polynomial of only n coefficients. Option b is incorrect since both examples use the identical modulus q=7. Option c is incorrect since the Ring-LWE example explicitly includes an error polynomial added during computation of b(x), just as standard LWE includes an error vector e. Option d is incorrect since both schemes use a secret key of the same underlying dimension n=4 (as a vector in standard LWE, or equivalently as a degree-(n−1) polynomial with n coefficients in Ring-LWE)."
      },
      {
        "id": "W1_Q18",
        "week": 1,
        "header": "Q18 — Public Key Encryption vs Symmetric Key Encryption",
        "question": "The Torus 𝕋 = ℝ / ℤ under the operation ( 𝕋 , +) forms:",
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
        "explanation": "Note that ( 𝕋 ,+) forms an abelian group, but it is not a ring because inner products (multiplication) between two Torus elements are not defined. A ring requires two operations that satisfy closure, associativity, and distributivity. But since 𝕋 only has a well-defined addition (with multiplication by integers via the external product, not multiplication between two torus elements), it cannot be classified as a ring, field, or vector space. It only satisfies the group axioms (closure, associativity, identity, inverses) under addition, and is commutative, making \"abelian group\" the precise and correct classification."
      },
      {
        "id": "W1_Q19",
        "week": 1,
        "header": "Q19 — LWE Parameter Growth with Homomorphic Depth",
        "question": "In the discretized Torus 𝕋 q , for practical implementation purposes, torus elements are represented as:",
        "options": [
          {
            "key": "a",
            "text": "Elements of ℤ _q²"
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
        "explanation": "For practical reasons, torus elements are not represented as fractions but rather as elements modulo q, meaning only the integer numerator is tracked, since the denominator q is fixed and implicit. This is confirmed by the addition rule: given t = a/q and u = b/q, if v = t + u = c/q, then c ≡ a + b (mod q), so all computations reduce to integer arithmetic modulo q using only the numerators. This design choice is what makes discretized Torus arithmetic efficient in practice, avoiding floating-point or fraction-based representations that would be error-prone in hardware/software implementations."
      },
      {
        "id": "W1_Q20",
        "week": 1,
        "header": "Q20 — PETs Classification & Trade-offs",
        "question": "In the TLWE (Torus LWE) encryption scheme, the ciphertext c = (a ₁ ,...,a\u0000, b) is constructed such that b equals which of the following? (Select all that apply)",
        "options": [
          {
            "key": "a",
            "text": "Σ s\u0000a\u0000 − μ + e"
          },
          {
            "key": "b",
            "text": "A value independent of the secret key s"
          },
          {
            "key": "c",
            "text": "Σ s\u0000a\u0000 + μ + e"
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
        "explanation": "Note that by definition, b = Σ (j=1...n) s\u0000a\u0000 + μ + e, where s = (s ₁ ,...,s\u0000) ← 𝔹 ⁿ is the secret key, μ ∈ P is the message, and e is sampled noise. Option (c) is a direct restatement of this formula. Option (d) is a correct plain-language paraphrase of the same construction. Option (b) is incorrect because b explicitly depends on s through the inner product term. Option (a) is incorrect because the message μ is added, not subtracted, in the correct formula; subtracting μ would break the decryption process described later (μ* = b − Σ s\u0000a\u0000)."
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
        "header": "Q1 — TGLWE Addition Noise Growth",
        "question": "In TGLWE encryption, given two polynomials a, b ∈ 𝕋 N,q [X], what does the operation a.b represent?",
        "options": [
          {
            "key": "a",
            "text": "The external product of a and b modulo (X N + 1 , q)"
          },
          {
            "key": "b",
            "text": "It is not defined"
          },
          {
            "key": "c",
            "text": "The addition of a and b modulo (X N + 1 , q)"
          },
          {
            "key": "d",
            "text": "The convolution of a and b over ℤ q"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recall that multiplication between two torus polynomials a, b ∈ 𝕋 N,q [X] is \"not defined.\" Option a describes the external product, but that operation is defined only when one operand comes from ℤ N,q [X] (integer polynomials) and the other from 𝕋 N,q [X] (torus polynomials), not when both are torus elements. Option c describes addition, which is a separate, well-defined operation on 𝕋 N,q [X]. Option d is incorrect since convolution is not the operation being described here."
      },
      {
        "id": "W2_Q2",
        "week": 2,
        "header": "Q2 — TGLWE Homomorphic Subtraction & Scalar Ops",
        "question": "Why is TGLWE preferred over TLWE when multiple torus elements need to be encrypted?",
        "options": [
          {
            "key": "a",
            "text": "Because TGLWE produces shorter ciphertexts for a single torus element than TLWE"
          },
          {
            "key": "b",
            "text": "Because TLWE cannot encrypt more than one element under any circumstances"
          },
          {
            "key": "c",
            "text": "Because coefficient packing allows up to N torus elements to be encoded as coefficients of a single polynomial plaintext, making TGLWE more efficient for batches"
          },
          {
            "key": "d",
            "text": "Because TGLWE eliminates the need for a private key when encrypting multiple elements"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "For a single torus element, TLWE is preferred since its ciphertext is shorter, which directly contradicts option a. TLWE can technically still encrypt elements one at a time (just less efficiently for batches), so option b is an incorrect statement. Option c matches the \"coefficient packing\" concept: up to N torus elements μ ₀ ,...,μ N-1 can each be represented as a coefficient of a polynomial μ( X) = μ ₀ + μ ₁ X + ... + μ N-1 X N-1 , allowing TGLWE to encrypt many elements at once within a single ciphertext, which is why it's preferred for multiple elements. Option d is false: TGLWE still requires a secret key s just like TLWE."
      },
      {
        "id": "W2_Q3",
        "week": 2,
        "header": "Q3 — External Product in TFHE (TGSW x TGLWE)",
        "question": "Which of the following statements about the Gadget Matrix and its inverse transform G ⁻ ¹ are TRUE? Select all that apply.",
        "options": [
          {
            "key": "a",
            "text": "G ⁻ ¹(v) replaces each entry of a vector by its signed radix-B expansion"
          },
          {
            "key": "b",
            "text": "G ⁻ ¹(v)·G T is always exactly equal to v for any modulus q, regardless of whether B l = q"
          },
          {
            "key": "c",
            "text": "The gadget matrix technique is used to help express TLWE ciphertexts as matrices to enable ciphertext multiplication (Gentry-Sahai-Waters technique)"
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
        "explanation": "Option a is verbatim from the lecture. Option c matches the discussion on multiplication of ciphertexts, where the GSW technique requires expressing TLWE encryptions as matrices, using the gadget matrix concept. Option d is a straightforward implication of the transform. Option b is false: recall that G ⁻ ¹(v)·G^T ≈ v (an approximation) in general, and it is only exactly equal to v in the special case when B l = q. So this statement is only conditionally true, not always true, making it incorrect as a general claim."
      },
      {
        "id": "W2_Q4",
        "week": 2,
        "header": "Q4 — TGSW Encryption & Gadget Matrix Structure",
        "question": "In the worked out example with n = 1, l = 2, B = 4, q = 64, for v = (41/64, 26/64) ≡ (−23/64, 26/64) mod 1, what is G ⁻ ¹(v)?",
        "options": [
          {
            "key": "a",
            "text": "[−1, −2, 1, −2, −1, −2]"
          },
          {
            "key": "b",
            "text": "[−6, 7]"
          },
          {
            "key": "c",
            "text": "[−1, −2, −2, −1]"
          },
          {
            "key": "d",
            "text": "[40/64, 28/64]"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "With l = 2, computes v ₁ * = round(4²·(−23/64)) = −6 and v ₂ * = round(4²·round(26/64)) = 7. Writing these in signed radix-4 form: −6 = −1·4¹ − 2, and 7 = 1·4² − 2·4¹ − 1 = −2·4¹ − 1 (mod 4²), giving digit expansions (−1, −2) and (−2, −1). Concatenating these gives G ⁻ ¹(v) = [−1, −2, −2, −1], matching option c."
      },
      {
        "id": "W2_Q5",
        "week": 2,
        "header": "Q5 — TFHE Blind Rotation & CMux Gate",
        "question": "In TGSW encryption, why is the assumption p = B l made?",
        "options": [
          {
            "key": "a",
            "text": "So that the private key s can be reused directly from TLWE"
          },
          {
            "key": "b",
            "text": "So that the gadget matrix G, whose elements are 0 or of the form B -j , is defined over p -l ℤ / ℤ = 𝕋 p , matching the plaintext modulus"
          },
          {
            "key": "c",
            "text": "So that q must always be a power of 2"
          },
          {
            "key": "d",
            "text": "So that the noise distribution χ becomes zero"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since all elements of the gadget matrix G are 0 or of the form B -j for 1 ≤ j ≤ l, G is naturally defined over B -l ℤ / ℤ ⊆ 𝕋 q . By setting p = B l , this subgroup becomes exactly p -l ℤ / ℤ = 𝕋 p , aligning the gadget matrix's domain with the plaintext space's torus structure. Option a is incorrect since the private key is independently sampled, not \"reused.\" Option c reverses the logic and is not a consequence of p = B l . Option d is unrelated; noise χ is a separate concept from this structural assumption."
      },
      {
        "id": "W2_Q6",
        "week": 2,
        "header": "Q6 — RLWE vs LWE Ciphertext Dimensions",
        "question": "What is the \"internal product\" of two TGSW ciphertexts C ₁ = TGSW s (m ₁ ) and C ₂ = TGSW s (m ₂ ) ?",
        "options": [
          {
            "key": "a",
            "text": "C ₃ = C ₁ + C ₂"
          },
          {
            "key": "b",
            "text": "C ₃ = C ₁ ⊠ C ₂ = G ⁻ ¹(C ₂ ) . C ₁"
          },
          {
            "key": "c",
            "text": "C ₃ = G(C ₁ ) . C ₂"
          },
          {
            "key": "d",
            "text": "C ₃ = C ₁ ⊡ C ₂ = G ⁻ ¹(c ₂ ) . C ₁ , where c ₂ is a TLWE ciphertext"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "This is by definition: the internal product of two TGSW ciphertexts as C ₃ = C ₁ ⊠ C ₂ = G ⁻ ¹(C ₂ ) . C ₁ , which yields a TGSW encryption of m ₁ × m ₂ (mod p) up to rounding and multiplicative noise."
      },
      {
        "id": "W2_Q7",
        "week": 2,
        "header": "Q7 — Torus GLWE Arithmetic Properties",
        "question": "Which of the following are TRUE regarding the error/noise growth in TGSW multiplicative homomorphism? Select all that apply",
        "options": [
          {
            "key": "a",
            "text": "The error term in Z ₃ has three components: noise from Z ₁ amplified by G ⁻ ¹(C ₂ ), noise from Z ₂ amplified by m ₁ , and a term from the rounding error ϵ ₂ amplified by m ₁"
          },
          {
            "key": "b",
            "text": "The multiplicative noise cannot grow and remains constant regardless of the number of multiplications"
          },
          {
            "key": "c",
            "text": "The gadget matrix helps control noise growth because ||G ⁻ ¹(C ₂ )||∞ ≤ B/2"
          },
          {
            "key": "d",
            "text": "C ₃ can be written as TGSW s (0) + (m ₁ m ₂ ).G T , assuming the rounding error and multiplicative noise remain small"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "Option a matches the three error components explicitly: noise in Z ₁ amplified by G ⁻ ¹(C ₂ ), noise in Z ₂ amplified by m ₁ , and the ϵ ₂ term amplified by m ₁ . Option c is directly stated: the gadget matrix bounds ||G ⁻ ¹(C ₂ )||∞ ≤ B/2, which helps control (not eliminate) noise growth. Option d matches the final simplified form under the stated assumption that rounding/multiplicative errors stay small. Option b is false."
      },
      {
        "id": "W2_Q8",
        "week": 2,
        "header": "Q8 — Torus Discretization & Rounding Errors",
        "question": "In the External Product of Ciphertexts (C ₁ ⊡ c ₂ = G ⁻ ¹(c ₂ ) . C ₁ , where C ₁ ← TGSW s (m ₁ ) and c ₂ ← TLWE s (μ ₂ )), what is the resulting ciphertext type and what does it encrypt?",
        "options": [
          {
            "key": "a",
            "text": "A TGSW ciphertext encrypting m ₁ + μ ₂"
          },
          {
            "key": "b",
            "text": "A TLWE ciphertext encrypting μ ₃ = m ₁ . μ ₂"
          },
          {
            "key": "c",
            "text": "A TGSW ciphertext encrypting m ₁ . μ ₂"
          },
          {
            "key": "d",
            "text": "A TLWE ciphertext encrypting m ₁ + μ ₂"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recall that c ₃ = C ₁ ⊡ c ₂ = G ⁻ ¹(c ₂ ).Z ₁ + m ₁ .G ⁻ ¹(c ₂ ).G T ≈ TLWE s (0) + m ₁ .c ₂ = TLWE s (m ₁ . μ ₂ ), which is a valid TLWE encryption of μ ₃ = m ₁ . μ ₂ (provided the rounding error and multiplicative noise stay small). This operation is specifically designed to take a \"large\" TGSW ciphertext and a \"short\" TLWE ciphertext and produce a short TLWE result, motivated by the fact that \"TLWE ciphertexts are much shorter than TGSW ciphertexts.\""
      },
      {
        "id": "W2_Q9",
        "week": 2,
        "header": "Q9 — TGSW Scalar Multiplication",
        "question": "When extending TGLWE encryption's addition of ciphertexts, if c ₁ = TGLWE s (μ ₁ ) = (a ₁ ,...,a k , b) and c ₂ = TGLWE s (μ ₂ ) = (a ₁ ',...,a k ', b'), what condition must hold for c ₃ = c ₁ + c ₂ to be a valid encryption of μ ₃ = μ ₁ + μ ₂ ?",
        "options": [
          {
            "key": "a",
            "text": "The noise e ₃ = e ₁ + e ₂ must be small"
          },
          {
            "key": "b",
            "text": "The keys s used for both ciphertexts must be different"
          },
          {
            "key": "c",
            "text": "N must equal 1 for addition to work"
          },
          {
            "key": "d",
            "text": "The polynomials must be reduced modulo X N − 1 instead of X N + 1"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Note that the addition of ciphertexts is that c ₃ = c ₁ + c ₂ = (a ₁ +a ₁ ',...,a k +a k ', b+b') is a valid encryption of μ ₃ = μ ₁ + μ ₂ provided that the error e ₃ = e ₁ + e ₂ is small, mirroring the analogous condition in TLWE. Option b is false: both ciphertexts must be encrypted under the same key s for the homomorphic addition to decrypt correctly. Option c is false: addition of ciphertexts works for general N, not just N = 1 (N = 1 is only the special case where TGLWE reduces to TLWE). Option d is false: TGLWE consistently uses modulo X N + 1."
      },
      {
        "id": "W2_Q10",
        "week": 2,
        "header": "Q10 — Gadget Matrix Inverse Decomposition G⁻¹",
        "question": "In extending the gadget matrix to the polynomial setting (TGLWE), how is the gadget matrix G redefined compared to the TLWE/TGSW case?",
        "options": [
          {
            "key": "a",
            "text": "G is defined over ℤ q instead of 𝕋 q"
          },
          {
            "key": "b",
            "text": "G is defined over 𝕋 N,q [X], so that G ∈ 𝕋 N,q [X] (k+1)×(k+1)l"
          },
          {
            "key": "c",
            "text": "G is defined only for k = 0"
          },
          {
            "key": "d",
            "text": "G no longer requires the radix B or integer l"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In the multiplication of ciphertexts, by definition, the gadget matrix G is over 𝕋 N,q [X]. Thus, G ∈ 𝕋 N,q [X] (k+1)×(k+1)l . This extends the earlier scalar-torus gadget matrix (used for TLWE/TGSW) to a matrix of polynomials, following the same structural pattern but with polynomial entries. Option a is incorrect: the matrix remains defined over the torus polynomial ring, not plain integers. Option c is very restrictive. Option d is false: the radix B and integer l (with B l | q) are still required to define g and hence G, exactly as before."
      },
      {
        "id": "W2_Q11",
        "week": 2,
        "header": "Q11 — Worked Example: G⁻¹(p) Decomposition",
        "question": "Based on the worked example (k=1, N=2, l=3, B=4, q=256) computing G ⁻ ¹(p) for p = (41/256 + 26/256X, −25/256 + 35/256X), which of the following are TRUE? Select all that apply.",
        "options": [
          {
            "key": "a",
            "text": "p ₁ * was computed as round(4³·41/256) + round(4³·26/256)X = 10 + 7X"
          },
          {
            "key": "b",
            "text": "The digit expansion of p ₁ * = 10 + 7X gives coefficients that are concatenated into G ⁻ ¹(p) as (1+X, −1−2X, −2−X, ...)"
          },
          {
            "key": "c",
            "text": "G ⁻ ¹(p)·G T exactly equals p with zero error, since B l = q in this example"
          },
          {
            "key": "d",
            "text": "The final verification shows G ⁻ ¹(p)·G T ≈ (28X+40)/256, which approximates p ₁ = 41/256 + 26/256X"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "Option a is straightforward computation: p ₁ * = round(4³·41/256) + round(4³·26/256)X = 10 + 7X. Option b is correct: the digit decomposition of 10 = 1·4² − 1·4 − 2 and 7 = 1·4² − 2·4 − 1 gives the coefficient vectors (1,−1,−2) and (1,−2,−1) per power of 4, which when combined with the X-terms yields G ⁻ ¹(p) starting with (1+X, −1−2X, −2−X, ...) as shown. Option d matches the final slide, which shows G ⁻ ¹(p)·G T = (28X+40)/256 ≈ p ₁ . Option c is false: here B l = 4³ = 64, while q = 256, so B l ≠ q; thus the approximation G ⁻ ¹(p)·G T ≈ p holds only approximately (as shown by the \"≈\" in the final result), not exactly."
      },
      {
        "id": "W2_Q12",
        "week": 2,
        "header": "Q12 — TGSW External Product Noise Bound",
        "question": "What is the key structural difference between the TLWE/TGSW gadget matrix and its TGLWE polynomial extension, in terms of what the inverse transform G ⁻ ¹ operates on?",
        "options": [
          {
            "key": "a",
            "text": "G ⁻ ¹ in TGLWE flattens a vector of (k+1) polynomials into a vector of (k+1)l polynomials in ℤ N [X] with small coefficients, whereas in TLWE it flattens scalar torus elements into small integers"
          },
          {
            "key": "b",
            "text": "G ⁻ ¹ in TGLWE only works when all polynomial coefficients are zero"
          },
          {
            "key": "c",
            "text": "G ⁻ ¹ is not needed in TGLWE since polynomials cannot be decomposed"
          },
          {
            "key": "d",
            "text": "G ⁻ ¹ in TGLWE produces coefficients unbounded in magnitude, unlike TLWE"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "By definition, the corresponding inverse transformation G ⁻ ¹ flattens a vector of (k+1) polynomials to a vector of (k+1)l polynomials of ℤ N [X] with small coefficients in the range [−round(B/2), round(B/2)). This directly parallels the TLWE case, where G ⁻ ¹ flattens a vector of scalar torus elements into a vector of small integers via signed radix-B expansion. Option b and c are contradicted by the worked example, which decomposes nonzero polynomials. Option d is false: the whole point of the gadget decomposition is that G ⁻ ¹'s output coefficients are bounded (within [−round(B/2), round(B/2))), keeping the decomposition \"small,\" just as in the non-polynomial case."
      },
      {
        "id": "W2_Q13",
        "week": 2,
        "header": "Q13 — CMux Gate Truth Table & Selection",
        "question": "What is the purpose of the CMUX (Controlled Multiplexer) operation in TFHE?",
        "options": [
          {
            "key": "a",
            "text": "It always outputs the sum of two encrypted messages irrespective of the control bit."
          },
          {
            "key": "b",
            "text": "It homomorphically selects between two encrypted messages based on an encrypted control bit."
          },
          {
            "key": "c",
            "text": "It converts a TLWE ciphertext into a TGGSW ciphertext."
          },
          {
            "key": "d",
            "text": "It removes all noise from a ciphertext without using bootstrapping."
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The primary application of the external product in TFHE is the controlled multiplexer (CMUX). Given two TGLWE encryptions of plaintexts μ ₀ and μ ₁ and a TGGSW encryption of a control bit b ∈ {0,1}, the operation decrypts to μ b . Thus, if b = 0, the output is μ ₀ , and if b = 1, the output is μ ₁ . Option (a) is incorrect because CMUX performs selection, not addition. Option (c) is false because no ciphertext conversion takes place. Option (d) is incorrect since CMUX itself is not a bootstrapping or noise-removal operation."
      },
      {
        "id": "W2_Q14",
        "week": 2,
        "header": "Q14 — Blind Rotation Look-Up Table (LUT)",
        "question": "Which of the following statements correctly describe why programmable bootstrapping introduces polynomials into the decryption process?",
        "options": [
          {
            "key": "a",
            "text": "The linear computation of the noisy plaintext is straightforward to evaluate homomorphically."
          },
          {
            "key": "b",
            "text": "The rounding step of decryption is difficult to evaluate homomorphically."
          },
          {
            "key": "c",
            "text": "Polynomials provide a mechanism to encode the rounding function through their coefficients."
          },
          {
            "key": "d",
            "text": "Programmable bootstrapping eliminates the need for decryption altogether."
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "Programmable bootstrapping separates decryption into two stages: 1. Computing the noisy plaintext, which is a linear operation and therefore easy to evaluate homomorphically. 2. Rounding the noisy plaintext to the nearest valid plaintext, which is nonlinear and difficult to evaluate directly. Recall the specially constructed polynomials whose coefficients encode the rounding function, allowing the desired rounded value to appear as the constant coefficient after an appropriate monomial rotation. Option (d) is incorrect because programmable bootstrapping still performs decryption conceptually; it merely evaluates it homomorphically"
      },
      {
        "id": "W2_Q15",
        "week": 2,
        "header": "Q15 — Sample Extraction: RLWE to LWE",
        "question": "Why is the exponent in blind rotation rescaled from modulo q to modulo 2N?",
        "options": [
          {
            "key": "a",
            "text": "Because TGLWE ciphertexts can only represent exponents modulo N."
          },
          {
            "key": "b",
            "text": "To eliminate all approximation errors introduced during bootstrapping."
          },
          {
            "key": "c",
            "text": "Because polynomial multiplication is performed modulo X N +1, where X has order 2N, making exponent arithmetic naturally occur modulo 2N."
          },
          {
            "key": "d",
            "text": "To reduce the polynomial degree from N to q."
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Blind rotation performs polynomial multiplication in the ring Z[X] / (X N + 1) where X 2N = 1. Consequently, monomial exponents are interpreted modulo 2N. Therefore, the decryption exponent is rescaled from modulo q to modulo 2N before the blind rotation is carried out. This enables the exponent to correspond correctly to polynomial rotations. Option (b) is false because the lecture explicitly notes that this rescaling introduces an additional approximation error. Options (a) and (d) do not describe the mathematical reason for the rescaling."
      },
      {
        "id": "W2_Q16",
        "week": 2,
        "header": "Q16 — Key Switching in TFHE",
        "question": "Why is the most significant bit (MSB) of the rescaled exponent constrained to be zero during blind rotation?",
        "options": [
          {
            "key": "a",
            "text": "To ensure every polynomial coefficient becomes zero before multiplication."
          },
          {
            "key": "b",
            "text": "To guarantee that only one bootstrapping key is required."
          },
          {
            "key": "c",
            "text": "To prevent negative coefficients from appearing in the test polynomial."
          },
          {
            "key": "d",
            "text": "To ensure the exponent assumes at most N distinct values, matching the N coefficients available in the test polynomial."
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "The test polynomial contains exactly N coefficients, meaning it can encode at most N different values. Since the rescaled exponent is represented modulo 2N, unrestricted values would require twice as many encodable positions. By forcing the most significant bit to zero, the exponent is restricted to only N possible values, allowing every exponent to correspond to one coefficient of the test polynomial. Options (a), (b), and (c) are unrelated to the purpose of this constraint."
      },
      {
        "id": "W2_Q17",
        "week": 2,
        "header": "Q17 — Modulus Switching & Noise Reduction",
        "question": "What is the primary purpose of modulus switching in TFHE bootstrapping?",
        "options": [
          {
            "key": "a",
            "text": "It converts an LWE ciphertext from a larger modulus to a smaller modulus while proportionally scaling the message and noise."
          },
          {
            "key": "b",
            "text": "It removes the secret key from the ciphertext."
          },
          {
            "key": "c",
            "text": "It converts a TGLWE ciphertext into a TLWE ciphertext."
          },
          {
            "key": "d",
            "text": "It eliminates the ciphertext noise completely."
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Modulus switching converts an LWE ciphertext from modulus q to a smaller modulus q* by definition. Option (b) is incorrect because the secret key remains unchanged. Option (c) describes coefficient extraction, not modulus switching. Option (d) is false since the noise is scaled rather than removed."
      },
      {
        "id": "W2_Q18",
        "week": 2,
        "header": "Q18 — Worked Example: Modulus Switching Modulus Scale",
        "question": "In the worked example, after switching the ciphertext modulus from 64 to 32 , what is the new scaled message factor Δ*?",
        "options": [
          {
            "key": "a",
            "text": "2"
          },
          {
            "key": "b",
            "text": "8"
          },
          {
            "key": "c",
            "text": "4"
          },
          {
            "key": "d",
            "text": "16"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Recall that Δ* = Δ x 32 / 64 = (q / t) x (32 / 64) = 32 / 8 = 4"
      },
      {
        "id": "W2_Q19",
        "week": 2,
        "header": "Q19 — Three Stages of TFHE Bootstrapping",
        "question": "According to the TFHE noise bootstrapping example, which of the following are the three major stages of the bootstrapping procedure?",
        "options": [
          {
            "key": "a",
            "text": "Modulus Switching"
          },
          {
            "key": "b",
            "text": "Blind Rotation"
          },
          {
            "key": "c",
            "text": "Coefficient Extraction"
          },
          {
            "key": "d",
            "text": "Key Switching"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "The lecture explicitly divides TFHE noise bootstrapping into three steps: 1. Modulus Switching 2. Blind Rotation 3. Coefficient Extraction Key switching is an important primitive in TFHE but is not one of the three stages in this end-to-end bootstrapping."
      },
      {
        "id": "W2_Q20",
        "week": 2,
        "header": "Q20 — Blind Rotation Phase Accumulator",
        "question": "During the blind rotation example, why does rotating the encrypted lookup polynomial by 4 positions recover the plaintext m=1?",
        "options": [
          {
            "key": "a",
            "text": "Because every rotation always places the plaintext in the constant coefficient."
          },
          {
            "key": "b",
            "text": "Because the computed rotation amount equals Δ* . m + e* = 4, and the lookup table is constructed so that the constant coefficient after a rotation of 4 equals v 4 = 1 =m."
          },
          {
            "key": "c",
            "text": "Because the secret key is cancelled during the rotation."
          },
          {
            "key": "d",
            "text": "Because coefficient extraction automatically changes every constant coefficient to the message."
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "After modulus switching, the blind rotation computes the rotation amount: b* - Σ i a i * s i = Δ* . m + e* = 4. The encrypted lookup polynomial is then rotated 4 positions, causing the coefficient v 4 to become the constant term. Since the lookup table is designed so that v 4 = 1, the constant coefficient corresponds to the original plaintext m=1."
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
        "header": "Q1 — CKKS Fixed-Point vs Floating-Point Arithmetic",
        "question": "In CKKS, why is fixed-point arithmetic preferred over floating-point arithmetic for homomorphic computation?",
        "options": [
          {
            "key": "a",
            "text": "Because fixed-point numbers require fewer bits to represent than floating-point numbers"
          },
          {
            "key": "b",
            "text": "Because the scaling factor stays the same for all values of a type and does not change during the entire computation"
          },
          {
            "key": "c",
            "text": "Because fixed-point arithmetic eliminates approximation error entirely"
          },
          {
            "key": "d",
            "text": "Because floating-point arithmetic cannot represent negative numbers"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recall that in IEEE-754 floating-point representation, the scaling factor (the exponent of the base) can shift with every operation, whereas in fixed-point representation, the scaling factor is fixed for all values of the same type and stays constant throughout the computation. This consistency is precisely what makes fixed-point arithmetic more suitable for homomorphic encryption, since ciphertexts must be combined predictably without needing to track a changing exponent."
      },
      {
        "id": "W3_Q2",
        "week": 3,
        "header": "Q2 — Canonical Embedding σ in CKKS Decoding",
        "question": "What does the canonical embedding σ do in the CKKS decoding step?",
        "options": [
          {
            "key": "a",
            "text": "It encrypts the plaintext polynomial using the public key"
          },
          {
            "key": "b",
            "text": "It maps a vector z ∈ ℂᴺ to a polynomial m(X) by interpolation"
          },
          {
            "key": "c",
            "text": "It evaluates the polynomial m(X) at the N roots of the cyclotomic polynomial Φ2N(X) = Xᴺ + 1, producing the vector z"
          },
          {
            "key": "d",
            "text": "It rescales the ciphertext by dividing out the scaling factor"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Decoding in CKKS is defined via the canonical embedding σ: ℂ[X]/(Xᴺ+1) → ℂᴺ, which evaluates a polynomial m(X) at the N roots of Φ2N(X) = Xᴺ + 1. These roots are the odd powers of ξ = e^(2iπ/2N) (i.e., ξ, ξ³, …, ξ^(2N−1)). This gives the decoded vector z = σ(m) = (m(ξ), m(ξ³), …, m(ξ^(2N−1))), and σ is an isomorphism, so this correspondence is unique in both directions."
      },
      {
        "id": "W3_Q3",
        "week": 3,
        "header": "Q3 — Vandermonde DFT Matrix Inversion in CKKS",
        "question": "To encode a target vector z into a polynomial m(X), recall that the unknown coefficient vector α must satisfy Aα = z, where A is the Vandermonde matrix built from powers of ξ. How is α actually computed in the worked example (N = 4)?",
        "options": [
          {
            "key": "a",
            "text": "By directly inverting A using Gaussian elimination on the full N×N matrix"
          },
          {
            "key": "b",
            "text": "By using α = A⁻¹z, where A⁻¹ is computed via the Hermitian (conjugate) transpose, A⁻¹ = (1/N)·A*"
          },
          {
            "key": "c",
            "text": "By applying the discrete Fourier transform in the real domain only"
          },
          {
            "key": "d",
            "text": "By rounding z directly to the nearest integer polynomial coefficients"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since A is a Vandermonde matrix over roots of unity (thereby being a DFT matrix), it has the special property A·A⁻¹ = I, where A⁻¹ = (1/N)·A* (A* being the complex conjugate/Hermitian transpose of A). This equation is the exact identity used."
      },
      {
        "id": "W3_Q4",
        "week": 3,
        "header": "Q4 — CKKS Message to Ciphertext Pipeline",
        "question": "Which of the following correctly describes the CKKS pipeline?",
        "options": [
          {
            "key": "a",
            "text": "Encoding converts a Message into a Plaintext, and Decoding converts a Plaintext back into a Message"
          },
          {
            "key": "b",
            "text": "Encryption uses the public key (pk), while Decryption uses the secret key (sk)"
          },
          {
            "key": "c",
            "text": "Homomorphic operations (add, mul, rescale, rotation, etc.) are performed directly on the Message before encoding"
          },
          {
            "key": "d",
            "text": "A scaling factor is associated with the plaintext at both the encoding and decoding ends of the pipeline"
          }
        ],
        "correct": [
          "a",
          "b",
          "d"
        ],
        "explanation": "The pipeline runs Message → (Encoding) → Plaintext → (Encryption, pk/sk) → Ciphertext → Homomorphic operations → Ciphertext → (Decryption, sk) → Plaintext → (Decoding) → Message, so Option a is correct. Also note that Option (b) is definitional. Option (d) is also straightforward."
      },
      {
        "id": "W3_Q5",
        "week": 3,
        "header": "Q5 — Canonical Embedding σ Range & Real Subspace ℋ",
        "question": "Why can't the canonical embedding σ map ℝ = ℤ[X]/(Xᴺ+1) directly onto all of ℂᴺ when the target vector z is drawn from ℂᴺ?",
        "options": [
          {
            "key": "a",
            "text": "Because σ is not injective, so multiple polynomials could map to the same vector"
          },
          {
            "key": "b",
            "text": "Because σ(ℝ) is countable (since ℝ has integer coefficients), while ℋ = {z ∈ ℂᴺ : zⱼ = conj(z₋ⱼ)} is uncountable, so a general element of ℋ need not lie in σ(ℝ)"
          },
          {
            "key": "c",
            "text": "Because the roots of Xᴺ+1 are not well-defined over ℂ"
          },
          {
            "key": "d",
            "text": "Because σ only works for real-valued vectors, never complex ones"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since ℝ requires integer coefficients (so that LWE/RLWE operations work on integer polynomials), the polynomial ring ℝ is countable, and therefore σ(ℝ) is countable too. However, ℋ - the subspace of ℂᴺ satisfying the conjugate-symmetry constraint zⱼ = conj(z₋ⱼ) - is isomorphic to ℝ^N (via an isometric isomorphism), which is uncountable. So an arbitrary element of ℋ is not guaranteed to already sit inside σ(ℝ). This is precisely why a projection step is needed before applying σ⁻¹."
      },
      {
        "id": "W3_Q6",
        "week": 3,
        "header": "Q6 — Conjugate Roots & N/2 Slot Packing",
        "question": "Recall that for any integer polynomial m(X) ∈ ℝ, evaluating at conjugate roots gives m(ξʲ) = conj(m(ξ⁻ʲ)). What is the direct consequence of this property that motivates using a vector of size N/2 for encoding instead of N?",
        "options": [
          {
            "key": "a",
            "text": "It shows σ is not well-defined for odd N"
          },
          {
            "key": "b",
            "text": "It shows the scaling factor Δ must always equal N/2"
          },
          {
            "key": "c",
            "text": "It proves that integer polynomials cannot be evaluated at complex roots at all"
          },
          {
            "key": "d",
            "text": "Any element of σ(ℝ) is actually constrained to a space of dimension N/2, not N, since the second half of coordinates is fully determined as the conjugate of the first half"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Because coefficients aᵢ of m(X) are integers (hence real, so conj(aᵢ) = aᵢ), evaluating at a conjugate root ω̄ gives a value that is precisely the conjugate of the value at ω: m(ω̄) = conj(m(ω)). This means half the coordinates of σ(m) are redundant, so σ(ℝ) effectively lives in a space of dimension N/2. Consequently, if a user wants to encode a complex vector of size N/2, it must first be expanded to a full-length vector in ℋ by appending the conjugates of the other half."
      },
      {
        "id": "W3_Q7",
        "week": 3,
        "header": "Q7 — Coordinate-wise Random Rounding & Scaling Δ",
        "question": "Which of the following statements correctly describe the \"coordinate-wise random rounding\" technique and the role of the scaling factor Δ in CKKS encoding?",
        "options": [
          {
            "key": "a",
            "text": "Coordinate-wise random rounding rounds a real number x to either ⌊x⌋ or ⌊x⌋+1, with higher probability assigned to whichever is closer to x"
          },
          {
            "key": "b",
            "text": "The scaling factor Δ is introduced because naive rounding to integers could destroy significant digits of small or precise values"
          },
          {
            "key": "c",
            "text": "Multiplying by Δ before rounding, then dividing by Δ afterward, allows the encoding to preserve precision up to roughly 1/Δ"
          },
          {
            "key": "d",
            "text": "The scaling factor Δ replaces the need for the canonical embedding σ entirely"
          }
        ],
        "correct": [
          "a",
          "b",
          "c"
        ],
        "explanation": "Recall that coordinate-wise random rounding maps a real x to ⌊x⌋ or ⌊x⌋+1 probabilistically, favoring the nearer integer. Also note that this rounding could \"destroy some significant numbers,\" so a scaling factor Δ > 0 is introduced. We have worked out an example (x = 1.4, Δ = 4) showing ⌊Δx⌋ = ⌊5.6⌋ = 6, and dividing back by Δ gives 6/4 = 1.5, a multiple of 1/Δ = 0.25 close to the original 1.4, thereby confirming Option c, since this preserves precision to roughly 1/Δ rather than rounding straight to the nearest integer. Option d is incorrect: Δ works alongside σ (first multiply by Δ, then project onto σ(ℝ), then apply σ⁻¹). It does not replace the canonical embedding, which remains essential to map between ℂᴺ and the polynomial ring."
      },
      {
        "id": "W3_Q8",
        "week": 3,
        "header": "Q8 — CKKS Encoding Step Sequence",
        "question": "According to the final encoding procedure in CKKS, what is the correct order of steps to encode a vector z ∈ ℂ^(N/2) into a polynomial m(X) ∈ ℝ?",
        "options": [
          {
            "key": "a",
            "text": "Expand z to π⁻¹(z) ∈ ℋ → Multiply by Δ for precision → Project the result onto σ(ℝ) using rounding → Apply σ⁻¹ to get m(X) ∈ ℝ"
          },
          {
            "key": "b",
            "text": "Project on σ(ℝ) → Expand via π⁻¹ → Multiply by Δ → Apply σ⁻¹"
          },
          {
            "key": "c",
            "text": "Apply σ⁻¹ directly to z → Multiply by Δ → Round to nearest integer"
          },
          {
            "key": "d",
            "text": "Multiply z by Δ → Apply σ directly → Expand via π⁻¹"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Recall the final encoding pipeline: take z ∈ ℂ^(N/2), expand it to π⁻¹(z) ∈ ℋ (filling in the conjugate half), multiply by Δ for precision, project the scaled value onto σ(ℝ) using coordinate-wise random rounding, and finally apply σ⁻¹ to obtain m(X) = σ⁻¹([Δ·π⁻¹(z)]_σ(ℝ)) ∈ ℝ."
      },
      {
        "id": "W3_Q9",
        "week": 3,
        "header": "Q9 — Worked Example: π⁻¹(z) Vector Expansion",
        "question": "In the worked example, the vector to be encoded is v = [4.3+8.1i, 7.5−6.7i] ∈ ℂ². Since N = 4, this vector must first be expanded to π⁻¹(z) ∈ ℋ before scaling. What is the correct expansion?",
        "options": [
          {
            "key": "a",
            "text": "π⁻¹(z) = (4.3+8.1i, 7.5−6.7i, 7.5+6.7i, 4.3−8.1i)"
          },
          {
            "key": "b",
            "text": "π⁻¹(z) = (4.3+8.1i, 7.5−6.7i, 4.3−8.1i, 7.5+6.7i)"
          },
          {
            "key": "c",
            "text": "π⁻¹(z) = (4.3−8.1i, 7.5+6.7i, 4.3+8.1i, 7.5−6.7i)"
          },
          {
            "key": "d",
            "text": "π⁻¹(z) = (4.3+8.1i, 4.3−8.1i, 7.5−6.7i, 7.5+6.7i)"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Recall the expansion π⁻¹(z) = (z₁, z₂, z̄₂, z̄₁), which appends the conjugates of the two given values in reverse order, so that the result satisfies the conjugate-symmetry condition wⱼ = conj(w₋ⱼ) needed for membership in ℋ. Substituting z₁ = 4.3+8.1i and z₂ = 7.5−6.7i gives π⁻¹(z) = (4.3+8.1i, 7.5−6.7i, 7.5+6.7i, 4.3−8.1i), which matches option a."
      },
      {
        "id": "W3_Q10",
        "week": 3,
        "header": "Q10 — Worked Example: Scaling by Δ and Rounding",
        "question": "Why does the example choose the scaling factor Δ = 10 before projecting onto σ(ℝ)?",
        "options": [
          {
            "key": "a",
            "text": "Because Δ must always equal N to keep the polynomial degree consistent"
          },
          {
            "key": "b",
            "text": "Because a larger Δ guarantees exact recovery of z with zero error"
          },
          {
            "key": "c",
            "text": "Because multiplying by Δ = 10 preserves roughly one decimal digit of precision before the values are rounded to integer coordinates"
          },
          {
            "key": "d",
            "text": "Because Δ is fixed by the choice of roots of unity ξ, ξ³, ξ⁵, ξ⁷"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Since the final encoding step rounds the projected coordinates to integers (to land in σ(ℝ), which requires integer polynomial coefficients), scaling by Δ first means that dividing back by Δ afterward recovers values accurate to about 1/Δ = 0.1."
      },
      {
        "id": "W3_Q11",
        "week": 3,
        "header": "Q11 — Worked Example: Decoding Matrix Multiplication",
        "question": "After computing the projection coefficients c₀ = 46, c₁ = −8.13, c₂ = 23, and c₃ = 1.30, it rounds them before applying σ⁻¹. What is the resulting encoded polynomial m(X)?",
        "options": [
          {
            "key": "a",
            "text": "m(X) = 46 − 8.13X + 23X² + 1.30X³"
          },
          {
            "key": "b",
            "text": "m(X) = 46 + 8X + 23X² + 1X³"
          },
          {
            "key": "c",
            "text": "m(X) = 46X − 8X² + 23X³ + 1"
          },
          {
            "key": "d",
            "text": "m(X) = 46 − 8X + 23X² + 1X³"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Coordinate-wise rounding takes c₀ = 46 🠂 46, c₁ = −8.13 🠂 −8, c₂ = 23 🠂 23, and c₃ = 1.30 🠂 1 (each to its nearest integer). Applying σ⁻¹(u) = c₀·σ⁻¹(b₀) + c₁·σ⁻¹(b₁) + c₂·σ⁻¹(b₂) + c₃·σ⁻¹(b₃), and using σ(Xᵏ) = bₖ, gives m(X) = 46·1 + (−8)·X + 23·X² + 1·X³ = 46 − 8X + 23X² + 1X³, exactly matching option d."
      },
      {
        "id": "W3_Q12",
        "week": 3,
        "header": "Q12 — Worked Example: Approximate Decoding Accuracy",
        "question": "Which of the following statements about the decoding step in the worked example are correct?",
        "options": [
          {
            "key": "a",
            "text": "Decoding first computes p(X) = Δ⁻¹m(X), giving p(X) = 2.2 − 0.5X + 1.8X² + 1.1X³"
          },
          {
            "key": "b",
            "text": "Since N = 4, decoding recovers all 4 slots of σ(p) and averages them pairwise to get the final 2-element vector"
          },
          {
            "key": "c",
            "text": "The decoded vector is obtained by evaluating p(X) at ξ and ξ³ only, since only the first N/2 = 2 slots are kept"
          },
          {
            "key": "d",
            "text": "The final decoded vector z' ≈ (1.0686+2.2243i, 3.3314−1.3757i) is close to, but not exactly equal to, the original z = (1.1+2.2i, 3.3−1.4i), due to the earlier rounding step"
          }
        ],
        "correct": [
          "a",
          "c",
          "d"
        ],
        "explanation": "Only Option b is incorrect: decoding does not average four slots pairwise. It simply discards the redundant conjugate slots and evaluates only at the two roots, ξ and ξ³, which are needed to recover the two original values."
      },
      {
        "id": "W3_Q13",
        "week": 3,
        "header": "Q13 — RLWE Public Key Encryption in CKKS",
        "question": "In the CKKS encryption step Encrypt_s(μ), what is computed as b, given the random polynomial a = (a₁,...,a_k) and the secret s = (s₁,...,s_k)?",
        "options": [
          {
            "key": "a",
            "text": "b = Σᵢ aᵢ · μ + s̄"
          },
          {
            "key": "b",
            "text": "b = μ − Σ aᵢ · sᵢ"
          },
          {
            "key": "c",
            "text": "b = Σᵢ=1,...,k aᵢ · sᵢ + μ̄, where μ̄ = μ + e"
          },
          {
            "key": "d",
            "text": "b = Δ · μ̄, where μ̄ is the noisy message"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The encryption steps given are: choose a random polynomial a = (a₁,...,a_k), compute μ̄ = μ + e (adding a small noise polynomial e), and then compute b = Σᵢ₌₁,...,k aᵢ·sᵢ + μ̄. This matches option c exactly, and the output ciphertext is c = (a₁,...,a_k, b)."
      },
      {
        "id": "W3_Q14",
        "week": 3,
        "header": "Q14 — CKKS Approximate Decryption vs Exact Decryption",
        "question": "In CKKS decryption, the output is described as μ = Δm ∈ ℤ_q[X]/(X^N+1), and the process involves computing ⌈μ̄ / Δ⌋₁/Δ ≈ m. What is the key structural difference this reflects compared to TFHE?",
        "options": [
          {
            "key": "a",
            "text": "CKKS uses a public key for decryption, while TFHE uses a secret key"
          },
          {
            "key": "b",
            "text": "Unlike TFHE, each CKKS message value mᵢ is originally a real number with decimal digits rather than an element already lying in the modulus ring, so exact decryption to the original value is not possible"
          },
          {
            "key": "c",
            "text": "CKKS ciphertexts do not require any noise term e, while TFHE ciphertexts always do"
          },
          {
            "key": "d",
            "text": "TFHE performs decryption using rounding, while CKKS never requires rounding"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In CKKS, each message value mᵢ is originally not in the modulus ring but is a real number with decimal digits. This is precisely why decryption ends with an approximate rounding step ⌈μ̄ / Δ⌋₁/Δ ≈ m rather than an exact recovery, matching option b."
      },
      {
        "id": "W3_Q15",
        "week": 3,
        "header": "Q15 — Homomorphic Addition in CKKS",
        "question": "Consider two encrypted messages c₀ = Encrypt_s(μ₀) and c₁ = Encrypt_s(μ₁), with b₀ = Σaᵢ⁰·sᵢ + μ₀ + e₀ and b₁ = Σaᵢ¹·sᵢ + μ₁ + e₁. Which of the following statements about the homomorphic addition c_add = c₀ + c₁ are correct?",
        "options": [
          {
            "key": "a",
            "text": "c_add is computed simply as (a₀+a₁, b₀+b₁)"
          },
          {
            "key": "b",
            "text": "Decrypting c_add gives exactly μ₀ + μ₁ with no residual error term"
          },
          {
            "key": "c",
            "text": "Decrypting c_add yields b_add − a_add·s = (μ₀+μ₁) + (e₀+e₁), which is approximately μ₀+μ₁ because the noise terms are small"
          },
          {
            "key": "d",
            "text": "Homomorphic addition requires first performing relinearization, just like multiplication does"
          }
        ],
        "correct": [
          "a",
          "c"
        ],
        "explanation": "Holds by definition"
      },
      {
        "id": "W3_Q16",
        "week": 3,
        "header": "Q16 — Homomorphic Multiplication & Degree Expansion",
        "question": "Why is relinearization necessary for CKKS homomorphic multiplication?",
        "options": [
          {
            "key": "a",
            "text": "Because decrypting c_mul = c₀·c₁ produces d₀ + d₁·s + d₂·s², and repeated multiplications cause the number of polynomials representing the ciphertext to grow (3, then 5, then 9, ...), making the ciphertext size grow exponentially and impractical"
          },
          {
            "key": "b",
            "text": "Because multiplication in CKKS is undefined unless relinearization is applied first"
          },
          {
            "key": "c",
            "text": "Because relinearization is needed to add the noise term e to the ciphertext before multiplication"
          },
          {
            "key": "d",
            "text": "Because the public key p = (−A·s+e, A) cannot be computed without relinearization"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Decrypting a single ciphertext product c_mul requires evaluating a degree-2 polynomial in s: Decrypt_s(c_mul) = d₀ + d₁·s + d₂·s². This means that each multiplication increases the degree of the polynomial (in s) needed to decrypt and, correspondingly, the number of polynomial components representing the ciphertext grows (from 3 to 5 to 9, and so on), causing the ciphertext size to grow exponentially and become unusable in practice."
      },
      {
        "id": "W3_Q17",
        "week": 3,
        "header": "Q17 — Relinearization & Evaluation Key (evk)",
        "question": "What is the fundamental problem that relinearization is designed to solve, as stated in CKKS?",
        "options": [
          {
            "key": "a",
            "text": "The evaluation key evk cannot be made public without compromising the secret key"
          },
          {
            "key": "b",
            "text": "The scaling factor Δ grows uncontrollably after each addition operation"
          },
          {
            "key": "c",
            "text": "Decrypting c_mul requires computing d₂·s², a degree-2 term in the secret key, which, if left unaddressed, would cause the ciphertext size to grow with every subsequent multiplication"
          },
          {
            "key": "d",
            "text": "The public key p = (a·s+e, a) cannot decrypt ciphertexts produced by homomorphic multiplication"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Recall that decryption of c_mul requires evaluating d₀ + d₁·s + d₂·s², and if a way could be found to compute d₂·s² using only a degree-1 polynomial (as in regular decryption), ciphertext size would stay constant. This is exactly the essence of relinearization: finding polynomials (d₀', d₁') = Relin(c_mul) such that Decrypt_s(d₀', d₁') = d₀'+d₁'·s equals the original degree-2 expression, avoiding the need for the ciphertext to carry an ever-growing polynomial tuple."
      },
      {
        "id": "W3_Q18",
        "week": 3,
        "header": "Q18 — Evaluation Key Decryption & d₂·s² Isolation",
        "question": "The evaluation key is initially defined as evk = (a₀·s + e₀ + s², a₀). What does applying Decrypt_s to this evk yield, and why is this useful?",
        "options": [
          {
            "key": "a",
            "text": "Decrypt_s(evk) = s², which directly gives the secret key squared for public distribution"
          },
          {
            "key": "b",
            "text": "Decrypt_s(evk) = e₀ + s², which is useful because it lets us construct P = d₂·evk so that decrypting P approximately isolates the needed d₂·s² term"
          },
          {
            "key": "c",
            "text": "Decrypt_s(evk) = a₀·s, which recovers the secret key masked by only a₀"
          },
          {
            "key": "d",
            "text": "Decrypt_s(evk) = d₀ + d₁·s, matching the regular decryption formula directly"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recall that we compute Decrypt_s(evk) = e₀ + s² directly from the definition evk = (a₀·s+e₀+s², a₀), since decryption subtracts a₀·s from the first component. Because this result is (approximately) s², multiplying evk by d₂ gives P = d₂·evk, whose decryption is d₂·s² + d₂·e₀, which is close to the target d₂·s² term needed to complete relinearization, matching option b."
      },
      {
        "id": "W3_Q19",
        "week": 3,
        "header": "Q19 — Scaling Parameter p in Evaluation Key",
        "question": "Why is the evaluation key modified to evk = (a₀·s + e₀ + p·s², a₀) mod p·q, introducing a large integer p, rather than using the simpler evk = (a₀·s + e₀ + s², a₀)?",
        "options": [
          {
            "key": "a",
            "text": "Because decrypting the simple P = d₂·evk gives d₂·s² + d₂·e₀, and since d₂ = c₁·c₁' involves uniformly sampled polynomials, the term d₂·e₀ becomes much larger than the usual small noise, breaking the approximation d₂·s²+d₂·e₀ ≈ d₂·s²"
          },
          {
            "key": "b",
            "text": "Multiplying by p and later dividing by p (rounding, then reducing mod q) shrinks the noise contribution introduced by the multiplication with d₂ back down to an acceptable size"
          },
          {
            "key": "c",
            "text": "The parameter p is required so that relinearization can be applied before any multiplication takes place"
          },
          {
            "key": "d",
            "text": "Introducing p eliminates the need for an evaluation key altogether"
          }
        ],
        "correct": [
          "a",
          "b"
        ],
        "explanation": "With the simple evk, note that Decrypt_s(P) = d₂·s² + d₂·e₀ cannot be approximated as d₂·s² because d₂·e₀ is much bigger than the usual noise. This is because d₂ = c₁·c₁' involves polynomials “a” that are uniformly sampled over ℛ_q, making them large compared to small error terms, which confirms Option a. To fix this, the evaluation key is scaled by a large integer p, and after computing P = ⌊p⁻¹·d₂·evk⌉ mod q, the division by p (with rounding) reduces the noise introduced by the multiplication with d₂ back to a manageable size, confirming Option b."
      },
      {
        "id": "W3_Q20",
        "week": 3,
        "header": "Q20 — Rescaling Operation in CKKS",
        "question": "After relinearization keeps ciphertext size constant, there is a remaining issue: RLWE_s(Δ²m₁·m₂) = RLWE_s(Δm₁)·RLWE_s(Δm₂), but we actually require RLWE_s(Δ²m₁·m₂) = RLWE_s(Δm₁·m₂). What operation is introduced in CKKS to resolve this mismatch in scaling factor?",
        "options": [
          {
            "key": "a",
            "text": "Relinearization, applied a second time"
          },
          {
            "key": "b",
            "text": "Rescale"
          },
          {
            "key": "c",
            "text": "Bootstrapping"
          },
          {
            "key": "d",
            "text": "Coordinate-wise random rounding"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "After multiplying two ciphertexts each carrying scaling factor Δ, the product carries scaling factor Δ² (since Δm₁·Δm₂ = Δ²·m₁m₂), but what's actually needed is a ciphertext carrying just Δ·(m₁m₂). This is where rescaling helps."
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
        "header": "Q1 — Why Naive Bootstrapping Fails in CKKS",
        "question": "Why can we not simply divide the ciphertext RLWE s (delta 2 · m 1 · m 2 ) by delta to obtain RLWE s (delta · m 1 · m 2 )?",
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
            "text": "Because m 1 and m 2 must first be re-encrypted before division is possible"
          },
          {
            "key": "d",
            "text": "Because modulo arithmetic does not support direct division without modulus scaling"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "As shown with the example mu 1 = 26, mu 2 = 4, q L = 32, delta = 2: dividing (26 x 4) mod 32 by delta directly gives 20 mod 32, which does not equal 8/2 = 4. Since the ciphertext lives in modular arithmetic, direct division by delta is not well-defined. Instead, scaling the modulus itself (dividing q by delta) works correctly, which is the basis of modulus switching."
      },
      {
        "id": "W4_Q2",
        "week": 4,
        "header": "Q2 — CKKS Modulus Switching & Noise Shrinking",
        "question": "In the modulus switch approach to rescaling, upon each ciphertext-to-ciphertext multiplication, how does the ciphertext modulus change, and what happens once the level reaches 0?",
        "options": [
          {
            "key": "a",
            "text": "The modulus increases from q 0 to q 0 · delta (i+1) , and further multiplications become more accurate"
          },
          {
            "key": "b",
            "text": "The modulus switches from q 0 · delta i to q 0 · delta (i-1) ; once level 0 is reached, no more ciphertext-ciphertext multiplication is possible without bootstrapping"
          },
          {
            "key": "c",
            "text": "The modulus stays fixed at q 0 · delta L throughout all computations"
          },
          {
            "key": "d",
            "text": "The modulus is reset to delta 2 after every addition operation"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Upon each multiplication, the modulus switches from q 0 · delta i to q 0 · delta (i-1) , effectively converting the plaintext's squared scaling factor delta 2 back to delta. Once the ciphertext's level reaches 0 (modulus q0), no further ciphertext-ciphertext multiplication can be performed, and a special process called bootstrapping is needed to re-initialize the modulus level to L."
      },
      {
        "id": "W4_Q3",
        "week": 4,
        "header": "Q3 — Scale-Factor Division in CKKS Rescaling",
        "question": "What problem motivates the use of the Chinese Remainder Theorem (CRT) in the CKKS rescaling setup, and how does CRT address it?",
        "options": [
          {
            "key": "a",
            "text": "delta L becomes a huge number, making homomorphic operations over modulo delta L computationally expensive; CRT isomorphically decomposes it into a vector of smaller co-prime moduli (w 0 , w 1 , ..., w L ) for element-wise computation"
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
        "explanation": "Since delta L is a huge number, performing homomorphic addition or multiplication over modulo delta L directly is computationally expensive. CRT allows an integer x mod W (where W = w 0 w 1 ... w L , a product of L+1 co-primes) to be isomorphically mapped to a vector of smaller numbers (d 0 , d 1 , ..., d L ), each reduced modulo the respective w m . This lets addition/multiplication be done element-wise on smaller values before decoding the final big-number result."
      },
      {
        "id": "W4_Q4",
        "week": 4,
        "header": "Q4 — RNS Representation (Residue Number System)",
        "question": "In the CRT-based moduli setup for CKKS, how are the individual moduli w 0 , w 1 , ..., w L chosen relative to delta and q 0 ?",
        "options": [
          {
            "key": "a",
            "text": "All w i (including w 0 ) are set approximately equal to delta for uniform precision"
          },
          {
            "key": "b",
            "text": "w 0 = q 0 is much greater than delta, while all other w i are approximately equal to delta"
          },
          {
            "key": "c",
            "text": "w 0 is set to 1, and all other w i are set equal to q 0"
          },
          {
            "key": "d",
            "text": "All w i are chosen to be much smaller than delta to minimize ciphertext size"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The CKKS scheme's maximal ciphertext modulus is designed as W = product of w m from m=0 to L, where L is the maximum multiplicative level. Here w 0 = q 0 is chosen to be much greater than delta (for accuracy during bootstrapping), while all other w i are approximately equal to delta, ensuring the scaled plaintext never overflows the ciphertext modulus even at the lowest multiplicative level."
      },
      {
        "id": "W4_Q5",
        "week": 4,
        "header": "Q5 — CRT Basis Representation for Large Moduli",
        "question": "During ciphertext-ciphertext multiplication, the encrypted noisy plaintext becomes (delta·m 1 + e 1 )·(delta·m 2 + e 2 ) = delta 2 ·m 1 m 2 + delta·(m 1 e 2 + m 2 e 1 ) + e 1 e 2 . After rescaling, divide this by delt",
        "options": [
          {
            "key": "a",
            "text": "Why does the noise still actually grow with each multiplication despite the scaling-down effect? a. Because rescaling only affects m 1 and m 2 , never touching the error terms e 1 and e 2"
          },
          {
            "key": "b",
            "text": "Because the term e 1 .e 2 /delta becomes negative and destabilizes the ciphertext modulus"
          },
          {
            "key": "c",
            "text": "Because the resulting (m 1 e 2 + m 2 e 1 ) term is not eliminated by rescaling, so the noise accumulates and ultimately limits the multiplicative depth CKKS can support"
          },
          {
            "key": "d",
            "text": "Because rescaling multiplies the modulus by delta instead of dividing by it, doubling the noise at each step"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "After rescaling (dividing by delta), the result is approximately delta·m 1 m 2 + m 1 e 2 + m 2 e 1 + e 1 e 2 /delta. While the e 1 e 2 /delta term shrinks, the (m 1 e 2 + m 2 e 1 ) term remains and adds to the noise at each multiplicative step. This accumulation of noise across successive ciphertext-ciphertext multiplications is what ultimately limits the multiplicative depth CKKS can support before decryption becomes inaccurate."
      },
      {
        "id": "W4_Q6",
        "week": 4,
        "header": "Q6 — RNS Homomorphic Operations Efficiency",
        "question": "In CKKS bootstrapping, when a ciphertext at multiplicative level 0 (modulus q 0 ) has its modulus forcibly changed to q L and is then decrypted with reduction modulo q L , the result is Delt",
        "options": [
          {
            "key": "a",
            "text": "M + E + q 0 K mod q L . Why is the q 0 *K term problematic? a. It is a garbage term arising from wrap-around modulo q 0 that corrupts each coefficient, and it is no longer eliminated by reduction modulo q 0"
          },
          {
            "key": "b",
            "text": "It causes the secret key S to leak, since K directly depends on S"
          },
          {
            "key": "c",
            "text": "It makes the ciphertext modulus q L smaller than q 0 , causing overflow"
          },
          {
            "key": "d",
            "text": "It cancels out the message M entirely, making decryption impossible"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The term q 0 K accounts for wrap-around modulo q 0 values, where each coefficient of q 0 K is a multiple of q 0 . Since decryption is now done modulo the much larger q L instead of q 0 , this term is no longer reduced away, so each coefficient becomes Delta. m i + e i + q 0 . k i mod q L instead of the clean Delta.m i + e i mod q L . This garbage term must be eliminated (via an approximated sine function) to recover the pure plaintext coefficient."
      },
      {
        "id": "W4_Q7",
        "week": 4,
        "header": "Q7 — CKKS Bootstrapping Goal: Modulus Refreshing",
        "question": "In the key-switching procedure, the key-switching key is defined as swk = (a', -a'·s + e' + Ps') mod (P·q L ), where P is a large integer. What is the purpose of choosing P to be large?",
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
            "text": "It makes the induced error term floor(P -1 · c 0 · e') small relative to the original noise, since P is chosen large relative to ||c 0 · e'||"
          },
          {
            "key": "d",
            "text": "It guarantees that s and s' are identical after key switching"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "From the correctness derivation, <c', sk> = <c, sk'> + e ks mod q l , where e ks = floor(P -1 · c 0 · e') + e rounding . Because P is chosen large relative to ||c 0 · e'||, dividing by P shrinks this error term down to a small value, ensuring the key-switched ciphertext remains accurate under the new secret key sk."
      },
      {
        "id": "W4_Q8",
        "week": 4,
        "header": "Q8 — Modulus Reduction Modulo q₀ in CKKS Decryption",
        "question": "Why does CKKS need homomorphic rotation to compute a dot product between two encrypted vectors v 1 and v 2 ?",
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
        "header": "Q9 — Slots-to-Coeffs Linear Transformation",
        "question": "In the matrix-vector multiplication technique using diagonal extraction, given A·x = u 0 ⊙ ρ( x,0) + u 1 ⊙ ρ( x,1) + ... + u (n-1) ⊙ ρ( x,n-1), what do the vectors u i represent, and what operation is ρ( x,h)?",
        "options": [
          {
            "key": "a",
            "text": "u i are randomly sampled masking vectors, and ρ( x,h) encrypts x under a rotated secret key"
          },
          {
            "key": "b",
            "text": "u i are the rows of matrix A, and ρ( x,h) is the Hadamard product of x with itself h times"
          },
          {
            "key": "c",
            "text": "u i are diagonal vectors extracted from matrix A, and ρ( x,h) is the rotation of vector x by h positions to the left"
          },
          {
            "key": "d",
            "text": "u i are the columns of matrix A, and ρ( x,h) is the conjugate of vector x shifted by h"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The n distinct diagonal vectors u i are extracted from matrix A as u i = {a (j mod m, (i+j) mod n) } for j = 0 to n-1. ρ( v,h) is defined as the rotation of v by h positions to the left. Multiplying each diagonal with its correspondingly rotated copy of x (via Hadamard product) and summing gives the matrix-vector product A·x."
      },
      {
        "id": "W4_Q10",
        "week": 4,
        "header": "Q10 — Homomorphic Slot-to-Coefficient Permutations",
        "question": "Why does CKKS switch from decoding using the representatives ω, ω³, ..., ω (n-1) to using ω, ω ⁵ , ω ⁹ , ..., ω (2n-3) (the 5 j mod 2n exponents) for homomorphic rotation to work correctly (for the parameterization used in the lecture)?",
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
        "explanation": "The original reverse-ordered Hermitian vector (where M( ω i ) = M( ω (2n-i) )) does not preserve conjugate symmetry under rotation. Rotating it can produce an invalid Hermitian vector unusable for CKKS encoding."
      },
      {
        "id": "W4_Q11",
        "week": 4,
        "header": "Q11 — Sine Approximation for Modular Reduction y = x",
        "question": "Why does the sine function f(x) = (q 0 /2 pi) * sin(2 pi * x / q 0 ) approximate a line function y = x when evaluated at x values near multiples of q0?",
        "options": [
          {
            "key": "a",
            "text": "Because sin(x) always equals x exactly for any input value"
          },
          {
            "key": "b",
            "text": "Because the derivative dy/dx = cos(2 pi. x/q 0 ) approaches cos(2 pi. k) = 1 as x approaches k. q 0 for integer k, making the function locally behave like the identity line"
          },
          {
            "key": "c",
            "text": "Because q 0 is chosen to be a prime number, which forces the sine function to linearize"
          },
          {
            "key": "d",
            "text": "Because the amplitude q 0 /(2 pi) cancels out the sine term entirely at those points"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The slope of f(x) is dy/dx = (q 0 /2pi) * (2pi/q 0 ) * cos(2 pi. x/q 0 ) = cos(2 pi. x/q 0 ). At x approaching k. q 0 (for k = 0, 1, 2, ...), this becomes cos(2 pi. k) = 1, meaning the function's slope matches that of the line y = x near these points."
      },
      {
        "id": "W4_Q12",
        "week": 4,
        "header": "Q12 — Iterative Squaring vs Taylor Approximation",
        "question": "Why does CKKS bootstrapping use the substitution e i. θ = cos( θ) + i. sin( θ) and iteratively square e (i . θ/2 r) rather than directly using a high-degree Taylor series to approximate the sine function?",
        "options": [
          {
            "key": "a",
            "text": "Because homomorphic evaluation of a polynomial increases exponentially with its degree, so approximating a smaller exponent e (i . θ/2 r) with fewer Taylor terms and then squaring r times reduces the overall computational cost"
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
        "explanation": "To avoid homomorphically evaluating a large degree polynomial in Taylor expansion, using a very large 2 r lets e (i . θ/2 r) be approximated with a much smaller-degree (and thus cheaper) Taylor expansion while still achieving good accuracy ."
      },
      {
        "id": "W4_Q13",
        "week": 4,
        "header": "Q13 — Euler's Formula for Homomorphic Sine Evaluation",
        "question": "In deriving sin( θ) = -i/2 * (e i. θ - e -i. θ ), what homomorphic operation is used to compute the e -i. θ term from e (2.i.pi.x)/q_0",
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
        "header": "Q14 — Double-Angle Formula & Chebyshev Polynomials",
        "question": "In the CoeffToSlot step of bootstrapping, what is the purpose of transforming the input into two polynomials p1' and p2'?",
        "options": [
          {
            "key": "a",
            "text": "To reduce the ciphertext modulus back to q0 before further computation"
          },
          {
            "key": "b",
            "text": "To permanently discard the q 0 *K garbage term without needing the EvalMod step"
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
        "header": "Q15 — Coeffs-to-Slots Transformation & Inversion",
        "question": "In the worked bootstrapping example (R = Z[X]/(X 4 +1), n=4, Delta=4, q 0 =64), after ModRaise the decrypted value is M'(X) = 4 + 66X - 67X 2 + 69X 3 , and it's expressed as M'(X) = M(X) + q 0 . K(X) with K(X) = X - X 2 + X 3 . After applying the homomorphic sine evaluation f(x) = (32/pi) sin(pi . x/32), what does the output approximate?",
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
            "text": "Erroneous message with the garbage term q 0 . k i approximated out"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Since sin is periodic with period 2pi, the 2pi.k i term vanishes, thereby eliminating the q 0 . k i garbage term introduced by ModRaise."
      },
      {
        "id": "W4_Q16",
        "week": 4,
        "header": "Q16 — CKKS Bootstrapping Pipeline Sequence",
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
        "header": "Q17 — Homomorphic Rotation via Galois Automorphisms",
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
        "header": "Q18 — Galois Keys (Rotation Keys) in CKKS",
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
        "header": "Q19 — Baby-step Giant-step for Linear Transformations",
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
        "header": "Q20 — Precision vs Modulus Consumption in CKKS",
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
        "header": "Q1 — TFHE NOT Gate Bootstrapping Exemption",
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
        "header": "Q2 — Noise Growth in Multi-Input Gates without Bootstrap",
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
        "header": "Q3 — Fractional Scaling in 3-Input AND Gate Construction",
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
        "header": "Q4 — Bristol Format Boolean Circuits",
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
        "header": "Q5 — Homomorphic AES-128 Latency & AND Bootstrapping",
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
        "header": "Q6 — Auction Privacy: Bid Non-Malleability",
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
        "header": "Q7 — Client-Server Private ML Inference Requirements",
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
        "header": "Q8 — Multi-Party Computation (MPC) Privacy Goal",
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
        "header": "Q9 — Shamir's Secret Sharing Reconstruction Condition",
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
        "header": "Q10 — Lagrange Interpolation for Secret Recovery",
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
        "header": "Q11 — Arithmetic Circuit Representation (+, × Gates)",
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
        "header": "Q12 — MPC Homomorphic Secret Sharing Addition",
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
        "header": "Q13 — Yao's Garbled Circuits Principle",
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
        "header": "Q14 — Beaver's Point-and-Permute Technique",
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
        "header": "Q15 — Oblivious Transfer in Garbled Circuits",
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
        "header": "Q16 — Shamir Secret Sharing Polynomial Degree",
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
        "header": "Q17 — Passive (Semi-Honest) vs Active (Malicious) Adversary",
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
            "text": "x1 ​ x2 ​x3​ + 107 x2"
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
        "header": "Q18 — MPC Communication Complexity of Multiplication Gates",
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
        "header": "Q19 — Secret Sharing Share Distribution",
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
        "header": "Q20 — Security Threshold in Honest-Majority MPC",
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
            "text": "To transform multiplication gates into addition gates"
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
        "header": "Q1 — Beaver Triples for Multi-Party Multiplication",
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
        "header": "Q2 — Beaver Multiplication Communication Overhead",
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
        "header": "Q3 — Preprocessing Phase in Beaver Triples Generation",
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
        "header": "Q4 — Triples Reconstruction & Privacy Analysis",
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
        "header": "Q5 — Semi-Honest Security in Beaver Protocol",
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
        "header": "Q6 — BGW Protocol vs BMR Protocol",
        "question": "Why can additive secret sharing over 𝔽 q (or ℤ q ) fail to provide privacy when uniform sampling is not possible, as illustrated by the n=2, 𝔽 2 example where r=0 with probability 0.8 and r=1 with probability 0.2?",
        "options": [
          {
            "key": "a",
            "text": "Because 𝔽 2 does not support additive sharing"
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
            "text": "Because the secret x must always be even in 𝔽 2"
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
        "header": "Q7 — Honest Majority vs Dishonest Majority in MPC",
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
        "explanation": "Because floating point numbers have limited precision, arithmetic operations like addition can introduce small representation errors. As shown in the example, x 1 + x 2 + x 3 does not exactly reconstruct x = 10.4, but instead yields 10.4000000000000003552713678800500929355621337890625, undermining the correctness of the secret sharing scheme."
      },
      {
        "id": "W6_Q8",
        "week": 6,
        "header": "Q8 — Information-Theoretic vs Computational Security in MPC",
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
            "text": "By employing additive secret sharing over 𝔽 2 instead of arithmetic addition over the reals"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Since XOR ( ⊕ ) is bitwise and exactly invertible on the fixed-width bit representation of a floating point number, sharing via x 1 = r and x 2 = x ⊕ r (and reconstructing via XOR) avoids any rounding or precision loss: unlike arithmetic addition/subtraction over real-valued floating point numbers."
      },
      {
        "id": "W6_Q9",
        "week": 6,
        "header": "Q9 — Homomorphic Division using Inversion & Multiplication",
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
        "explanation": "For a fixed number of mantissa bits, each exponent value contributes 2 23 (or 2 52 ) representable numbers, but as the exponent decreases, this same count of representable numbers is packed into a range that is roughly half as wide as the previous exponent's range. So uniformly sampling exponent bits over-represents the density of smaller-magnitude numbers relative to a truly uniform distribution over the real number line."
      },
      {
        "id": "W6_Q10",
        "week": 6,
        "header": "Q10 — Goldschmidt's Division Algorithm in MPC",
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
        "header": "Q11 — Newton-Raphson Inversion Approximation in MPC",
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
        "header": "Q12 — Bit-Decomposition in Arithmetic MPC",
        "question": "Why can't Pᵢ simply compute 1/xᵢ and multiply it directly with y\u0000 (held by another party P\u0000) in plaintext to get y\u0000/xᵢ?",
        "options": [
          {
            "key": "a",
            "text": "Because 1/xᵢ cannot be computed in a finite field"
          },
          {
            "key": "b",
            "text": "Because y\u0000/xᵢ is not needed for the final reconstruction"
          },
          {
            "key": "c",
            "text": "Because multiplication is undefined between shares of different secrets"
          },
          {
            "key": "d",
            "text": "Because doing so would leak y\u0000 (or xᵢ) to the other party, violating privacy"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "If Pᵢ directly received y\u0000 in the clear to multiply with its local 1/xᵢ, this would leak y\u0000 to party Pᵢ."
      },
      {
        "id": "W6_Q13",
        "week": 6,
        "header": "Q13 — Secure Comparison Protocol (Millionaires' Problem)",
        "question": "Why are the individual terms like (y ₂ /x ₁ ) ₁ still called valid \"shares of y/x ₁ \" even though each one individually is only a share of y ₂ or y ₃ (not the full y)?",
        "options": [
          {
            "key": "a",
            "text": "Because they eventually combine via recombination (XOR/addition) to correctly reconstruct y/x ₁"
          },
          {
            "key": "b",
            "text": "Because they are computed using a different field than the rest of the protocol"
          },
          {
            "key": "c",
            "text": "Because y ₂ and y ₃ are mathematically equal to y in this protocol"
          },
          {
            "key": "d",
            "text": "Because only party P ₁ is allowed to use them"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "These terms are notated as shares of y/x ₁ because they allow the final recombination to reconstruct y/x ₁ , even though individually each one only constitutes a share of y ₂ or y ₃ . The validity of calling them shares of y/x ₁ comes from how they behave under the final XOR/addition-based reconstruction, not from what each term looks like in isolation."
      },
      {
        "id": "W6_Q14",
        "week": 6,
        "header": "Q14 — Garbled Circuits vs Secret Sharing for Non-Linear Ops",
        "question": "In the MPC division protocol with three parties P ₁ , P ₂ , P ₃ , why does reconstructing y/x ₁ (e.g., by party P ₂ ) not reveal y or x ₁ individually?",
        "options": [
          {
            "key": "a",
            "text": "Because P ₂ only receives 2 out of the required 3 shares needed to reveal the input, since the secret sharing scheme is (n, n)"
          },
          {
            "key": "b",
            "text": "Because y/x ₁ is always equal to 1 regardless of the inputs"
          },
          {
            "key": "c",
            "text": "Because P ₂ discards the shares immediately after computing y/x ₁"
          },
          {
            "key": "d",
            "text": "Because x ₁ is a public constant known in advance"
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
        "header": "Q15 — Mixed-Mode MPC (ABY Framework: Arithmetic, Boolean, Yao)",
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
        "header": "Q16 — Beaver Triple Verification for Malicious Security",
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
        "header": "Q17 — SPDZ Protocol & MAC Authenticated Shares",
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
        "header": "Q18 — Cut-and-Choose in Malicious Garbled Circuits",
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
        "header": "Q19 — Round Complexity in Multi-Party Computation",
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
        "header": "Q20 — Communication vs Computation Bottlenecks in MPC",
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
        "header": "Q1 — 1-out-of-2 Oblivious Transfer (1-2 OT) Definition",
        "question": "In the 1-out-of-2 Oblivious Transfer objective, sender S holds secrets {s 0 , s 1 } and receiver R holds a bit b. Which of the following correctly states BOTH security requirements of OT?",
        "options": [
          {
            "key": "a",
            "text": "R does not learn b; S does not learn s (1-b)"
          },
          {
            "key": "b",
            "text": "R does not learn s (1-b) ; S does not learn b"
          },
          {
            "key": "c",
            "text": "R learns both s 0 and s 1 ; S learns b"
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
        "header": "Q2 — OT Sender & Receiver Privacy Guarantees",
        "question": "In the OT-from-public-key-encryption construction (Even–Goldreich–Lempel scheme), the receiver generates (pk b , sk b ) ← Gen(1 κ ; r b ) using its chosen bit b, and sets pk (1-b) to a random string. What does this rely on?",
        "options": [
          {
            "key": "a",
            "text": "The public key scheme being deterministic"
          },
          {
            "key": "b",
            "text": "The sender knowing sk b in advance"
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
        "header": "Q3 — Bellare-Micali OT Protocol using Diffie-Hellman",
        "question": "In the OT-from-PKE protocol, why does the receiver R fail to learn s (1-b) , the secret it did not request?",
        "options": [
          {
            "key": "a",
            "text": "Because the sender deletes s (1-b) before sending anything"
          },
          {
            "key": "b",
            "text": "Because R never receives c (1-b) at all"
          },
          {
            "key": "c",
            "text": "Because pk (1-b) is always invalid and rejected by Enc"
          },
          {
            "key": "d",
            "text": "Because R does not know sk (1-b) , and by the CPA security of Enc"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "R receives both c 0 and c 1 , but since pk (1-b) was sampled obliviously (without a matching secret key), R cannot decrypt c (1-b) . CPA security means R (or any poly-time adversary) cannot distinguish which plaintext c (1-b) corresponds to, so s (1-b) stays hidden."
      },
      {
        "id": "W7_Q4",
        "week": 7,
        "header": "Q4 — Even-Goldreich-Lempel OT Construction",
        "question": "In the 1-out-of-4 OT construction, the sender generates 4 PRF keys k 0 , k 1 , k 0 ', k 1 ' and computes ciphertexts such as c 0 = c 00 = s 0 ⊕ F k0 (00) ⊕ F k0' (00). How does the receiver, holding b = b 1 b 2 , ultimately recover s b ?",
        "options": [
          {
            "key": "a",
            "text": "By brute-forcing all 4 PRF keys until one decrypts correctly"
          },
          {
            "key": "b",
            "text": "By XORing all four ciphertexts c 0 , c 1 , c 2 , c 3 together"
          },
          {
            "key": "c",
            "text": "By running two 1-out-of-2 OTs to obtain k b1 and k' b2"
          },
          {
            "key": "d",
            "text": "By directly requesting sb from the sender over an authenticated channel"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The construction reduces 1-out-of-4 OT to two invocations of 1-out-of-2 OT: one to obliviously fetch the key corresponding to bit b 1 , and one for bit b 2 . The receiver then strips off the two PRF pads from c b to recover s b , without learning anything about the other three secrets."
      },
      {
        "id": "W7_Q5",
        "week": 7,
        "header": "Q5 — OT Extension: Beaver-Micali-Rogaway Technique",
        "question": "In generalization of 1-out-of-4 OT to 1-out-of-N OT, where S holds n secrets {s 0 , ..., s (n-1) } and R holds a bitstring in {0,1} (log n) . How many PRF keys does S generate, and how are they used?",
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
        "explanation": "S generates 2 x log n PRF keys, two for each bit position of b (one for '0', one for '1'). For each bit b i , R engages in a 1-out-of-2 OT to obliviously obtain the correct key. S then XOR-masks each of the n secrets with PRF outputs under the appropriate key combination, and R reconstructs sb by XORing with the same PRF outputs using the keys it obtained."
      },
      {
        "id": "W7_Q6",
        "week": 7,
        "header": "Q6 — IKNP OT Extension Protocol (1000s of OTs from Base OTs)",
        "question": "In a variant of OT-from-PKE construction, the sender S generates only a single key pair (pk, sk) and sends pk to R (instead of R generating keys as in the Even–Goldreich–Lempel scheme). How does R then hide which secret it is requesting?",
        "options": [
          {
            "key": "a",
            "text": "R re-encrypts both ciphertexts using its own public key before sending them back"
          },
          {
            "key": "b",
            "text": "R sets c b = Enc pk (w b ) using the real public key, and samples c (1-b) via the Samp"
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
        "explanation": "This variant relies on the PKE scheme having a Samp algorithm that produces ciphertexts indistinguishable from real ones. R encrypts a random bit w b under the real key for the position it wants (c b ← Enc pk (w b )) and uses Samp to produce c (1-b) , which looks valid but isn't a genuine encryption."
      },
      {
        "id": "W7_Q7",
        "week": 7,
        "header": "Q7 — GMW (Goldreich-Micali-Wigderson) Protocol Overview",
        "question": "After S decrypts both ciphertexts to get w 0 and w 1 , and sends back (w 0 ⊕ s 0 , w 1 ⊕ s 1 ), how does R finally recover s b ?",
        "options": [
          {
            "key": "a",
            "text": "R computes s b = w b ⊕ (w b ⊕ s b ), using the w b it already knows"
          },
          {
            "key": "b",
            "text": "R asks S directly for s b over a separate authenticated channel"
          },
          {
            "key": "c",
            "text": "R XORs both received values together to isolate s b"
          },
          {
            "key": "d",
            "text": "R decrypts (w 0 ⊕ s 0 , w 1 ⊕ s 1 ) using sk, which it possesses"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "R already knows w b since it chose it when computing c b = Enc pk (w b ). It never learns w (1-b) reliably, since c (1-b) came from Samp rather than genuine encryption. So R simply unmasks the b-th component: s b = w b ⊕ (w b ⊕ s b )."
      },
      {
        "id": "W7_Q8",
        "week": 7,
        "header": "Q8 — GMW Multiplication via 1-out-of-4 OT",
        "question": "In the DDH-based OT construction, the receiver R holds bit b and computes h 0 = g 0 r for both cases, but sets h 1 = g 1 r when b = 0 and h 1 = g 1 (r+1) when b = 1. What is the purpose of this construction?",
        "options": [
          {
            "key": "a",
            "text": "It ensures h 0 and h 1 form a valid DDH tuple wrt. exponent r for exactly one of g 0 /g 1"
          },
          {
            "key": "b",
            "text": "It allows R to directly compute both secrets s 0 and s 1 without any interaction"
          },
          {
            "key": "c",
            "text": "It ensures h 0 = h 1 always, so S cannot distinguish between them"
          },
          {
            "key": "d",
            "text": "It lets S compute r directly from h 0 and h 1"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "By shifting the exponent for g 1 depending on b, R creates a pair (h 0 , h 1 ) where exactly one of the two \"sub-tuples\" (g 0 , g 0 r ) / (g 1 , h 1 ) is a genuine DDH tuple and the other looks random, by the DDH assumption."
      },
      {
        "id": "W7_Q9",
        "week": 7,
        "header": "Q9 — GMW vs Yao's Garbled Circuits Comparison",
        "question": "In the GMW protocol's AND-gate sharing, P 1 holds shares (x 1 , y 1 ) and P 2 holds (x 2 , y 2 ), with x = x 1 ⊕ x 2 and y = y 1 ⊕ y 2 . P 1 randomly samples a bit z 1 and computes four ciphertexts c 0 , c 1 , c 2 , c 3 (one for each combination of P 2 's possible share values), masked with PRF outputs. How does P 2 recover its share z 2 of the AND output z = x·y?",
        "options": [
          {
            "key": "a",
            "text": "P 2 computes z 2 by running the AND gate locally on (x 1 , y 1 )"
          },
          {
            "key": "b",
            "text": "P 2 uses a 1-out-of-4 OT to obtain exactly the ciphertext c (x2y2) corresponding to its own shares, and unmasks it"
          },
          {
            "key": "c",
            "text": "P 2 broadcasts x 2 and y 2 to P 1 , who then computes z 2 directly"
          },
          {
            "key": "d",
            "text": "P 2 XORs all four ciphertexts c 0 , c 1 , c 2 , c 3 together to get z 2"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "P 1 precomputes all four possible outcomes masked with z 1 and PRF pads. P 2 , without revealing (x 2 , y 2 ) to P 1 , uses 1-out-of-4 OT (built from two 1-out-of-2 OTs) to retrieve only the entry matching its actual shares, then removes the PRF masks to recover z 2 = (x 1 ⊕ x 2 )·(y 1 ⊕ y 2 ) ⊕ z 1 ."
      },
      {
        "id": "W7_Q10",
        "week": 7,
        "header": "Q10 — OT-based Garbled Circuit Input Evaluation",
        "question": "Why is a 1-out-of-4 (rather than 1-out-of-2) OT specifically needed for the AND gate in the GMW protocol, whereas XOR gates require no OT at all?",
        "options": [
          {
            "key": "a",
            "text": "Because AND gates require more PRF keys purely for efficiency reasons, unrelated to correctness"
          },
          {
            "key": "b",
            "text": "Because AND is non-linear: z = (x 1 ⊕ x 2 )·(y 1 ⊕ y 2 ) involving cross-products"
          },
          {
            "key": "c",
            "text": "Because 1-out-of-2 OT is computationally infeasible for Boolean circuits"
          },
          {
            "key": "d",
            "text": "Because P 2 has 4 different secrets s 0 , s 1 , s 2 , s 3 unrelated to its shares"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "XOR gates are linear (z 1 ⊕ z 2 = (x 1 ⊕ y 1 ) ⊕ (x 2 ⊕ y 2 )), so each party can compute its share of the output purely from its own shares. AND is a nonlinear (multiplicative) function of both parties' shares, so P 1 must encode 4 possible masked results (one per combination of P 2 's 2 bits) and P 2 must obliviously select the correct one without revealing (x 2 , y 2 )."
      },
      {
        "id": "W7_Q11",
        "week": 7,
        "header": "Q11 — Correlated OT (COT) and Random OT (ROT)",
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
        "header": "Q12 — Malicious Security in OT Extension (KOS Protocol)",
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
        "explanation": "A MAC provides authentication by associating a message with a tag generated using a secret key. The relevant security property is unforgeability : even if an adversary has valid MAC tags for certain messages, it should not be able to generate a valid tag for a new, different message."
      },
      {
        "id": "W7_Q13",
        "week": 7,
        "header": "Q13 — Silent OT Extension using PCGs (Pseudorandom Correlation)",
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
        "explanation": "We use a Linear Secret Sharing Scheme , which allows parties to locally compute linear functions of shared values. For example, if values are shared, a linear combination of their shares corresponds to a share of the same linear combination of the underlying values. This is why addition and multiplication by public constants can be performed locally without reconstructing the underlying secrets."
      },
      {
        "id": "W7_Q14",
        "week": 7,
        "header": "Q14 — Private Set Intersection (PSI) using OT",
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
        "header": "Q15 — KKRT PSI Protocol (Batched OPRFs from OT)",
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
        "header": "Q16 — Vector OLE (VOLE) from OT Extensions",
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
        "header": "Q17 — Communication Cost of OT Extension",
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
        "header": "Q18 — Base OT Computational Bottleneck",
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
        "explanation": "We assume a shared FHE public key , where each party holds a share of the corresponding secret key. Decryption is then performed collaboratively rather than by a single party holding the complete secret key."
      },
      {
        "id": "W7_Q19",
        "week": 7,
        "header": "Q19 — OT for Boolean Gate Evaluation in MPC",
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
        "explanation": "The resharing procedure introduces fresh randomness and uses it to produce a new sharing. Because the random values are fresh, the operation amounts to a reshare , while preserving correctness in the plaintext domain."
      },
      {
        "id": "W7_Q20",
        "week": 7,
        "header": "Q20 — Applications of Oblivious Transfer in Privacy",
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
        "header": "Q1 — MPC Protocol Communication Rounds & Latency",
        "question": "In the MPC protocol for computing a linear function f(x 1 ,...,x n ) = c 1 ·x 1 + ... + c n ·x n , what condition is placed on the number of corrupted parties t relative to the total number of parties n?",
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
        "header": "Q2 — Secret Sharing vs Garbled Circuits Trade-offs",
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
        "header": "Q3 — Shamir Threshold Scheme for General Access Structures",
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
        "header": "Q4 — Linear Secret Sharing Schemes (LSSS)",
        "question": "Which equation defines the practical (n, n) additive secret sharing scheme used in the lecture, denoted [x]?",
        "options": [
          {
            "key": "a",
            "text": "x = x 1 · x 2 · ... · x n (mod p)"
          },
          {
            "key": "b",
            "text": "x = max(x 1 , x 2 , ..., x n ) (mod p)"
          },
          {
            "key": "c",
            "text": "x = x 1 − x 2 − ... − x n (mod p)"
          },
          {
            "key": "d",
            "text": "x = x 1 + x 2 + ... + x n (mod p)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Additive secret sharing wrt. a prime modulo p is defined as x = x 1 + x 2 + ⋯ + x n (mod p), with such a sharing denoted [x]."
      },
      {
        "id": "W8_Q5",
        "week": 8,
        "header": "Q5 — Searchable Symmetric Encryption (SSE) Motivation",
        "question": "In the BGW worked example (4 parties, t = 2, y = x 1 +x 2 +x 3 +x 4 over 𝔽 5 , with x 1 =2, x 2 =1, x 3 =1, x 4 =0), the adversary corrupts P1 and P4 and knows y. What does the adversary conclude about the unknown pair (x2, x3)?",
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
        "explanation": "The adversary can list candidate guesses (x 2 ,x 3 ) = (0,2), (1,1), (2,0), (3,4), (4,3), and for every guess there exist consistent polynomials B(Z) and C(Z) matching the corrupted parties' views. So no guess can be ruled out."
      },
      {
        "id": "W8_Q6",
        "week": 8,
        "header": "Q6 — SSE Server Untrusted Storage & Search Trapdoors",
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
        "header": "Q7 — Song-Wagner-Perrig (SWP) SSE Scheme",
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
        "header": "Q8 — Curtmola et al. Inverted Index SSE (SSE-2)",
        "question": "In landscape diagram, which pair of techniques are positioned as maximizing security at the cost of efficiency?",
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
        "header": "Q9 — Search Pattern vs Access Pattern Leakage",
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
        "header": "Q10 — IND-CKA1 and IND-CKA2 Security Games for SSE",
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
        "header": "Q11 — Dynamic SSE (Insertions and Deletions)",
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
        "header": "Q12 — Forward Privacy in Dynamic SSE",
        "question": "Which of the following is NOT listed as part of the \"Search phase\" leakage ( ℒ Search ) in the formal leakage function?",
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
        "explanation": "ℒ Search consists of the result pattern (which documents appear in the result), query equality pattern (which queries correspond to the same keyword), and query intersection pattern (which documents appear across multiple queries). Frequency of each keyword is part of ℒ Setup , not ℒ Search ."
      },
      {
        "id": "W8_Q13",
        "week": 8,
        "header": "Q13 — Backward Privacy in Dynamic SSE",
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
            "text": "It splits the PRF output into k1ǁk2, uses k1 to generate per-document tags F(k1, c), and encrypts document ids with k2"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Design 2's setup computes k1ǁk2 = F k(w) for each keyword, generates a tag for the c-th document as F(k 1 , c), and encrypts the corresponding document id as Enc(k 2 , id), incrementing c."
      },
      {
        "id": "W8_Q14",
        "week": 8,
        "header": "Q14 — File-Injection Attacks on SSE",
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
        "header": "Q15 — Oblivious RAM (ORAM) vs SSE Comparison",
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
        "header": "Q16 — Path ORAM Architecture & Stash",
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
        "header": "Q17 — ORAM Bandwidth Overhead & Security",
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
        "header": "Q18 — SSE Range Queries using B-Trees / Best-Match",
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
        "header": "Q19 — Differential Privacy in Searchable Encryption",
        "question": "What is the overall goal of the \"proof by hybrids\" (G0 → G1 → G2 → G3) used in the SSE security proof?",
        "options": [
          {
            "key": "a",
            "text": "To show Real Π is identical (not just indistinguishable) to Ideal L,SIM"
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
        "explanation": "The proof structure is Real Π ≃ c G 0 ≃ c G 1 ≃ c G 2 ≃ c G 3 ≃ c Ideal L,SIM . Each hybrid step is shown indistinguishable from the previous one, chaining to show Real ≃ c Ideal overall."
      },
      {
        "id": "W8_Q20",
        "week": 8,
        "header": "Q20 — Security vs Efficiency Trade-offs in Cloud PETs",
        "question": "What information does the leakage algorithm L provide to the Simulator (SIM) in the basic SSE security definition?",
        "options": [
          {
            "key": "a",
            "text": "α = (N, V 1 , ..., V q ), where N is the total number of (w, id) pairs and each V i is the set of document ids matching the i-th searched keyword"
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
        "explanation": "The simplified leakage for the basic SSE scheme is as α = (N, V 1 , …, V q ), where N is the total number of (w, id) pairs in the database and each V i = DB(w i ), the identifiers matching the i-th search keyword."
      }
    ]
  },
  {
    "week": 9,
    "count": 20,
    "questions": [
      {
        "id": "W9_Q1",
        "week": 9,
        "header": "Q1 — SSE Core Architecture & Untrusted Server",
        "question": "What is the main purpose of Searchable Symmetric Encryption (SSE)?",
        "options": [
          {
            "key": "a",
            "text": "To allow a client to search encrypted data stored on an untrusted server"
          },
          {
            "key": "b",
            "text": "To replace all symmetric-key encryption with public-key encryption"
          },
          {
            "key": "c",
            "text": "To make the server learn the plaintext database before performing a search"
          },
          {
            "key": "d",
            "text": "To eliminate the need for a client in a database system"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "SSE allows a client to store encrypted data on a server and later search the encrypted database without revealing the plaintext database to the server."
      },
      {
        "id": "W9_Q2",
        "week": 9,
        "header": "Q2 — Forward Privacy Protection against Injection Attacks",
        "question": "In a basic SSE client-server protocol, which party typically holds the secret keys used to generate search tokens?",
        "options": [
          {
            "key": "a",
            "text": "The server"
          },
          {
            "key": "b",
            "text": "The client"
          },
          {
            "key": "c",
            "text": "Both parties must publish the same secret key"
          },
          {
            "key": "d",
            "text": "A third-party auditor"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The client is the data owner and holds the secret keys. During a search, the client uses these keys to generate the appropriate search information or tokens that are sent to the server."
      },
      {
        "id": "W9_Q3",
        "week": 9,
        "header": "Q3 — Search Pattern Leakage Definition",
        "question": "What does DB(w) represent in the SSE examples?",
        "options": [
          {
            "key": "a",
            "text": "The set of all keywords in the database"
          },
          {
            "key": "b",
            "text": "The set of documents in which keyword w is present"
          },
          {
            "key": "c",
            "text": "The encrypted version of keyword w"
          },
          {
            "key": "d",
            "text": "The number of queries containing w"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "DB(w) are the documents in which the keyword w is present. For example, if Apple occurs in documents 1, 3, and 5, then DB(Apple) = {1, 3, 5}."
      },
      {
        "id": "W9_Q4",
        "week": 9,
        "header": "Q4 — Access Pattern vs Search Pattern in SSE",
        "question": "What is meant by the index-only setting in SSE?",
        "options": [
          {
            "key": "a",
            "text": "Only the search index is protected, while the database files are ignored"
          },
          {
            "key": "b",
            "text": "Security is considered only for the encrypted search index, rather than the entire system"
          },
          {
            "key": "c",
            "text": "The server is allowed to decrypt all database files"
          },
          {
            "key": "d",
            "text": "The client does not use an encrypted index"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "In the index-only setting, the security analysis focuses on the encrypted search index, whereas system-wide security considers the broader interaction with the stored data and search process."
      },
      {
        "id": "W9_Q5",
        "week": 9,
        "header": "Q5 — Curtmola Inverted Index Lookup Complexity",
        "question": "Consider a conjunctive query q = Apple ∧ Cat ∧ Elephant. In a naive SSE approach, what determines the search work?",
        "options": [
          {
            "key": "a",
            "text": "Only the number of keywords in the database"
          },
          {
            "key": "b",
            "text": "The sum of the numbers of matching document IDs for the queried keywords"
          },
          {
            "key": "c",
            "text": "Only the number of documents in the database, regardless of the query"
          },
          {
            "key": "d",
            "text": "Only the number of documents matching all three keywords"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A naive conjunctive-search complexity is proportional to |DB(Apple)| + |DB(Cat)| + |DB(Elephant)|. Thus, the work depends on the matching-document lists for the individual query terms."
      },
      {
        "id": "W9_Q6",
        "week": 9,
        "header": "Q6 — Dynamic SSE with Append-Only Encrypted Indices",
        "question": "In the Basic Cross-Tags (BXT) protocol, which keyword is normally chosen as the s-term?",
        "options": [
          {
            "key": "a",
            "text": "The most frequent keyword in the query"
          },
          {
            "key": "b",
            "text": "The first keyword alphabetically"
          },
          {
            "key": "c",
            "text": "The least frequent keyword in the query"
          },
          {
            "key": "d",
            "text": "A keyword chosen randomly by the server"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "BXT chooses the least frequent term in the conjunction as the s-term. The remaining keywords are treated as x-terms. This allows the server to start from a smaller candidate set."
      },
      {
        "id": "W9_Q7",
        "week": 9,
        "header": "Q7 — Backward Privacy: Leakage on Deletion",
        "question": "Why does BXT improve the search complexity for a conjunctive query?",
        "options": [
          {
            "key": "a",
            "text": "It searches only the documents matching the least frequent term and checks the other terms"
          },
          {
            "key": "b",
            "text": "It decrypts the complete database before every query"
          },
          {
            "key": "c",
            "text": "It removes all keywords from the query except one"
          },
          {
            "key": "d",
            "text": "It requires the client to send every document ID to the server"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "BXT begins with the least frequent term, so the candidate set is DB(w_1), where w_1 is the s-term. The server work scales as n x |DB(w_1)|, improving over the naive sum of the sizes of all matching lists when one term is much more frequent than the others."
      },
      {
        "id": "W9_Q8",
        "week": 9,
        "header": "Q8 — File-Injection / Query-Recovery Attacks",
        "question": "Suppose a query has three keywords and the least frequent keyword occurs in 4 documents. According to the BXT performance analysis, approximately how does the server's work scale?",
        "options": [
          {
            "key": "a",
            "text": "4"
          },
          {
            "key": "b",
            "text": "7"
          },
          {
            "key": "c",
            "text": "12"
          },
          {
            "key": "d",
            "text": "64"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "For a conjunctive query with n keywords, the BXT server work scales as n x|DB(w_1)|, where w_1 is the least frequent term. Here n = 3 and |DB(w_1)| = 4, giving 3 × 4 = 12."
      },
      {
        "id": "W9_Q9",
        "week": 9,
        "header": "Q9 — Hierarchical Range Queries in SSE",
        "question": "Which information is leaked in BXT because the server receives the document IDs for the s-term?",
        "options": [
          {
            "key": "a",
            "text": "The plaintext value of the encryption key"
          },
          {
            "key": "b",
            "text": "The set DB(w_1) for the least frequent term"
          },
          {
            "key": "c",
            "text": "Every keyword in the database"
          },
          {
            "key": "d",
            "text": "The client's entire plaintext database"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The BXT leakage analysis states that the document IDs for the least frequent term, DB(w_1), are leaked to the server. This is less leakage than the naive solution, but it is still information about the queried keyword."
      },
      {
        "id": "W9_Q10",
        "week": 9,
        "header": "Q10 — Order-Preserving Encryption (OPE) vs SSE Range Search",
        "question": "Why can BXT suffer from inter-query leakage?",
        "options": [
          {
            "key": "a",
            "text": "The server receives xtrap values that it can save and reuse across queries"
          },
          {
            "key": "b",
            "text": "The server never receives any information during a search"
          },
          {
            "key": "c",
            "text": "Every query uses a completely fresh database"
          },
          {
            "key": "d",
            "text": "BXT requires the client to reveal the plaintext query"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The server receives xtrap values for the x-terms. Because these values enable the server to compute f(xtrap, ind), the server can save them and use them later to test previously observed document IDs, causing inter-query leakage."
      },
      {
        "id": "W9_Q11",
        "week": 9,
        "header": "Q11 — Order-Revealing Encryption (ORE) Comparison",
        "question": "What is the main idea behind the Oblivious Cross-Tags (OXT) protocol?",
        "options": [
          {
            "key": "a",
            "text": "Replace the xtrap-based computation with an oblivious shared computation between client and server"
          },
          {
            "key": "b",
            "text": "Remove the encrypted search index completely"
          },
          {
            "key": "c",
            "text": "Send all xtrap values in plaintext to make the search faster"
          },
          {
            "key": "d",
            "text": "Perform every search by downloading the complete database"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "OXT replaces the function f(xtrap, .) with a form of oblivious shared computation between the client and server. The goal is to reduce the leakage caused by directly giving the server the xtrap values."
      },
      {
        "id": "W9_Q12",
        "week": 9,
        "header": "Q12 — SSE Multi-Keyword Boolean Queries (Conjunctive / Disjunctive)",
        "question": "In the OXT leakage analysis, what does the keyword-pair result pattern (KPRP) reveal?",
        "options": [
          {
            "key": "a",
            "text": "The secret keys used by the client"
          },
          {
            "key": "b",
            "text": "The document indices matching the s-term together with each x-term"
          },
          {
            "key": "c",
            "text": "The plaintext contents of every document"
          },
          {
            "key": "d",
            "text": "Only the total number of keywords in the universe"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "For q = w_1 ∧ ... ∧ w_n, with w_1 as the s-term, KPRP records the document intersections DB(w_1) ∩ DB(w_i) for the x-terms. Note that this pattern is revealed because the server can observe the file access pattern."
      },
      {
        "id": "W9_Q13",
        "week": 9,
        "header": "Q13 — Cryptographic Trapdoors Generation using PRFs",
        "question": "Which of the following is listed as a leakage of OXT?",
        "options": [
          {
            "key": "a",
            "text": "Equality pattern of s-terms across queries"
          },
          {
            "key": "b",
            "text": "The client's secret key"
          },
          {
            "key": "c",
            "text": "The plaintext value of every queried keyword"
          },
          {
            "key": "d",
            "text": "The private randomness used during setup"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The OXT leakage analysis includes the equality pattern, which indicates which queries have equal s-terms. Size pattern, conditional intersection pattern, keyword-pair result pattern, and total keyword appearances are the leakage components."
      },
      {
        "id": "W9_Q14",
        "week": 9,
        "header": "Q14 — Token / Trapdoor Replay Detection in SSE",
        "question": "What is the size pattern in the OXT leakage description?",
        "options": [
          {
            "key": "a",
            "text": "The number of keywords in the entire keyword universe"
          },
          {
            "key": "b",
            "text": "The number of documents matching the first keyword (the s-term) in each query"
          },
          {
            "key": "c",
            "text": "The size of the client's secret key"
          },
          {
            "key": "d",
            "text": "The size of every encrypted document"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Size pattern is the number of documents matching the first keyword in each query, written as |DB(w_1)| when w_1 is the s-term."
      },
      {
        "id": "W9_Q15",
        "week": 9,
        "header": "Q15 — ORAM for Zero-Leakage Oblivious Access",
        "question": "Why is KPRP leakage considered important in OXT?",
        "options": [
          {
            "key": "a",
            "text": "It can reveal which document IDs satisfy the s-term together with particular x-terms"
          },
          {
            "key": "b",
            "text": "It makes encryption mathematically impossible"
          },
          {
            "key": "c",
            "text": "It prevents the server from performing any search"
          },
          {
            "key": "d",
            "text": "It reveals the client's secret key directly"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "KPRP gives the server information about document intersections between the s-term and x-terms. This result-pattern leakage can reveal useful relationships between queried keywords and documents even when the keywords themselves are encrypted."
      },
      {
        "id": "W9_Q16",
        "week": 9,
        "header": "Q16 — Path ORAM Binary Tree & Position Map",
        "question": "What is the basic idea of Hidden Vector Encryption (HVE) in the SSE discussion?",
        "options": [
          {
            "key": "a",
            "text": "It hides attributes while allowing a suitable predicate to be evaluated"
          },
          {
            "key": "b",
            "text": "It reveals all attributes but hides only the message length"
          },
          {
            "key": "c",
            "text": "It is used only to encrypt symmetric keys"
          },
          {
            "key": "d",
            "text": "It removes the need for predicates in encrypted search"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "HVE is a predicate-encryption technique in which the attributes are hidden while a key for a predicate can reveal whether the predicate matches. This provides a way to support conjunctive predicates without exposing the underlying attributes."
      },
      {
        "id": "W9_Q17",
        "week": 9,
        "header": "Q17 — Path ORAM ReadAndRemove / WriteBack Logic",
        "question": "In the conjunctive file-injection attack against a 2-keyword query q=w_1^* ∧ w_2^*, why does the attacker include all keywords from W_{i,2} in every injected file when w_1^* ∈ W_{i,1} and w_2^* ∈ W_{i,2}?",
        "options": [
          {
            "key": "a",
            "text": "To ensure that w_1^* is never present in the injected files"
          },
          {
            "key": "b",
            "text": "To make w_2^* always match, so the query results reveal the same information as searching for w_1^* alone"
          },
          {
            "key": "c",
            "text": "To prevent the server from observing the file access pattern"
          },
          {
            "key": "d",
            "text": "To increase the number of possible keywords in the keyword universe"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Since every injected file contains all keywords from W_{i,2}, the keyword w_2^* always matches in these files. Therefore, the conjunctive query w_1^* ∧ w_ 2^* returns an injected file exactly when that file contains w_1^*. This allows the attacker to apply the binary-search attack to recover w_1^*."
      },
      {
        "id": "W9_Q18",
        "week": 9,
        "header": "Q18 — ORAM Stash Overflow Probability & Bounds",
        "question": "What is the role of HXT in the discussed SSE construction?",
        "options": [
          {
            "key": "a",
            "text": "It uses SHVE to hide the cross-tag set and thereby prevents KPRP leakage"
          },
          {
            "key": "b",
            "text": "It replaces SSE with ordinary plaintext database search"
          },
          {
            "key": "c",
            "text": "It intentionally exposes the X-Set to the server"
          },
          {
            "key": "d",
            "text": "It is a file-injection attack against SSE"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "HXT is an SSE construction using SHVE that hides the KPRP leakage. The intuition is to treat the membership tests in OXT as attributes of HVE and perform them without exposing the individual (x-token, ind) pairs."
      },
      {
        "id": "W9_Q19",
        "week": 9,
        "header": "Q19 — Hardware Enclaves (SGX) for Searchable Encryption",
        "question": "In a file-injection attack on SSE, what capability is assumed for the semi-honest server?",
        "options": [
          {
            "key": "a",
            "text": "The server can inject specially constructed files containing keywords of its choice before searches occur"
          },
          {
            "key": "b",
            "text": "The server can directly obtain the client's secret key"
          },
          {
            "key": "c",
            "text": "The server can decrypt every encrypted file automatically"
          },
          {
            "key": "d",
            "text": "The server can change the client's search query in plaintext"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The attack model assumes that a semi-honest server can inject maliciously generated files containing selected keywords from the keyword universe before the client performs a search. These files are handled like normal documents and can be used to learn information from the resulting access pattern."
      },
      {
        "id": "W9_Q20",
        "week": 9,
        "header": "Q20 — Practical SSE Deployment Considerations",
        "question": "For a keyword universe W, how many injected files are needed in the binary-search attack to identify a single queried keyword?",
        "options": [
          {
            "key": "a",
            "text": "|W| files"
          },
          {
            "key": "b",
            "text": "|W|^2 files"
          },
          {
            "key": "c",
            "text": "[log |W|] files"
          },
          {
            "key": "d",
            "text": "Exactly two files for every possible keyword"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "A non-adaptive binary-search attack using successive partitions of W. By using one partition for each bit position, the server can identify the keyword using [log |W|] injected files."
      }
    ]
  },
  {
    "week": 10,
    "count": 20,
    "questions": [
      {
        "id": "W10_Q1",
        "week": 10,
        "header": "Q1 — Symmetric-key Hidden Vector Encryption (SHVE)",
        "question": "What does Symmetric-key Hidden Vector Encryption (SHVE) avoid using, unlike public-key HVE constructions?",
        "options": [
          {
            "key": "a",
            "text": "PRFs"
          },
          {
            "key": "b",
            "text": "Symmetric-key encryption"
          },
          {
            "key": "c",
            "text": "Bilinear maps"
          },
          {
            "key": "d",
            "text": "Block ciphers"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "SHVE achieves HVE functionality using PRFs and CPA-secure SKE, avoiding the bilinear-map-based constructions (which proved too inefficient for SSE)."
      },
      {
        "id": "W10_Q2",
        "week": 10,
        "header": "Q2 — SHVE without Bilinear Pairings (PRFs & SKE)",
        "question": "In SHVE, what does the Setup( λ) algorithm (run by the client) output?",
        "options": [
          {
            "key": "a",
            "text": "A master secret key msk ← {0,1}^λ"
          },
          {
            "key": "b",
            "text": "A pair of public/private RSA keys"
          },
          {
            "key": "c",
            "text": "A bilinear map parameter set"
          },
          {
            "key": "d",
            "text": "A Bloom filter structure"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Setup( λ) simply samples msk uniformly at random from {0,1}^λ for security parameter λ."
      },
      {
        "id": "W10_Q3",
        "week": 10,
        "header": "Q3 — Hidden Vector Encryption (HVE) Predicates & Wildcards",
        "question": "In SHVE encryption, each ciphertext component is computed as:",
        "options": [
          {
            "key": "a",
            "text": "c i = SKE.Enc(msk, x i )"
          },
          {
            "key": "b",
            "text": "c i = F(msk, x i ∥ i)"
          },
          {
            "key": "c",
            "text": "c i = x i ⊕ msk"
          },
          {
            "key": "d",
            "text": "c i = H(x i ∥ i)"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The keyed PRF F is applied to the concatenation of the bit xi and its position i, so plaintext bits remain indistinguishable under PRF security."
      },
      {
        "id": "W10_Q4",
        "week": 10,
        "header": "Q4 — SHVE Range Query Mapping via Binary Decompositions",
        "question": "In SHVE.Keygen, the set S is defined as:",
        "options": [
          {
            "key": "a",
            "text": "All positions in the predicate vector v"
          },
          {
            "key": "b",
            "text": "Positions where the ciphertext bit is 1"
          },
          {
            "key": "c",
            "text": "Random positions chosen independently of v"
          },
          {
            "key": "d",
            "text": "Positions where the predicate v does NOT have a wildcard"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "S captures exactly the positions that must be checked for equality; wildcard positions are skipped."
      },
      {
        "id": "W10_Q5",
        "week": 10,
        "header": "Q5 — Range-to-Prefix / Wildcard Encoding in SHVE",
        "question": "In the SHVE Query algorithm, a \"match\" is declared when:",
        "options": [
          {
            "key": "a",
            "text": "Sym.Dec(K′, d1) = μ = 0"
          },
          {
            "key": "b",
            "text": "K′ is not derivable from the ciphertext"
          },
          {
            "key": "c",
            "text": "All ciphertext bits equal 1"
          },
          {
            "key": "d",
            "text": "The XOR of all ciphertext bits equals zero"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "If the predicate is satisfied, XORing the relevant ciphertext bits with d0 recovers K, so decrypting d1 with K′ = K yields μ = 0."
      },
      {
        "id": "W10_Q6",
        "week": 10,
        "header": "Q6 — SHVE Multi-Dimensional Queries & Conjunctions",
        "question": "What is the primary purpose of HXT's H-tag oracle compared to OXT's X-tag test?",
        "options": [
          {
            "key": "a",
            "text": "It reveals the exact matching document IDs to the server"
          },
          {
            "key": "b",
            "text": "It answers only match/no-match for the whole conjunction, hiding per-pair results"
          },
          {
            "key": "c",
            "text": "It replaces the PRF with a hash function for speed"
          },
          {
            "key": "d",
            "text": "It eliminates the need for a cross-tag set entirely"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "OXT leaks every per-pair test result to the server; HXT hides this by only revealing a single match/no-match outcome per conjunctive query."
      },
      {
        "id": "W10_Q7",
        "week": 10,
        "header": "Q7 — Predicate Encryption vs Attribute-Based Encryption",
        "question": "In HXT, how is the SHVE-encrypted cross-tag (X-Set) information organized?",
        "options": [
          {
            "key": "a",
            "text": "As a sorted linked list of tags"
          },
          {
            "key": "b",
            "text": "As a hash table indexed by keyword"
          },
          {
            "key": "c",
            "text": "Packed into a bit-vector via a Bloom filter for membership queries"
          },
          {
            "key": "d",
            "text": "As a balanced binary search tree"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "X-Set membership is packed into a bit-vector (Bloom filter), and this vector is then encrypted using SHVE to form the H-Set."
      },
      {
        "id": "W10_Q8",
        "week": 10,
        "header": "Q8 — Leakage Profile of SHVE Range Queries",
        "question": "The naive approach to answering a disjunctive query q = w 1 ∨ w 2 ∨ ... ∨ wn transforms it into:",
        "options": [
          {
            "key": "a",
            "text": "A single conjunctive query on the union of all documents"
          },
          {
            "key": "b",
            "text": "A random sampling of the document set"
          },
          {
            "key": "c",
            "text": "q' = w 1 ∧ w 2 ∧ ... ∧ w n"
          },
          {
            "key": "d",
            "text": "q' = NOT(w 1 ) ∧ NOT(w 2 ) ∧ ... ∧ NOT(w n ), then D − result"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "By De Morgan's law, an OR query is rewritten as an AND of negated terms, and the final answer is obtained by subtracting the intersection from the full document set D."
      },
      {
        "id": "W10_Q9",
        "week": 10,
        "header": "Q9 — SHVE Token Construction for Subsets",
        "question": "Which of the following is NOT listed as a desirable property when constructing metakeywords for disjunctive queries?",
        "options": [
          {
            "key": "a",
            "text": "Coverage : an O(N)-sized set covering all O(2^N) possible disjunctions"
          },
          {
            "key": "b",
            "text": "Compression : reducing the alphabet size of keywords"
          },
          {
            "key": "c",
            "text": "Efficiency : minimizing false positives"
          },
          {
            "key": "d",
            "text": "Security : revealing as little information as possible about the queried keyword"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Coverage, Efficiency, and Security are the desired properties; Compression is not one of them."
      },
      {
        "id": "W10_Q10",
        "week": 10,
        "header": "Q10 — SHVE Ciphertext Structure & PRF Masks",
        "question": "A metakeyword mkw i,j is formally defined as a bitstring where:",
        "options": [
          {
            "key": "a",
            "text": "Bit positions in the interval [i,j] are 0 and all other positions are 1"
          },
          {
            "key": "b",
            "text": "All bit positions are set to 1"
          },
          {
            "key": "c",
            "text": "Bit positions in the interval [i,j] are 1 and all other positions are 0"
          },
          {
            "key": "d",
            "text": "Only position i is 1, and all others are 0"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "This encoding makes DB(mkw i,j ) equal to the union of documents for all keywords outside [i,j]."
      },
      {
        "id": "W10_Q11",
        "week": 10,
        "header": "Q11 — Expressive Database Queries (SQL over Encrypted Data)",
        "question": "Without bucketization, the storage overhead of the metakeyword-based disjunctive scheme scales as:",
        "options": [
          {
            "key": "a",
            "text": "O(N)"
          },
          {
            "key": "b",
            "text": "O(N log N)"
          },
          {
            "key": "c",
            "text": "O(N²), where N is the number of metakeywords"
          },
          {
            "key": "d",
            "text": "O(1), independent of N"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "Every pair (i,j) potentially needs its own metakeyword, giving quadratic storage before bucketization is introduced."
      },
      {
        "id": "W10_Q12",
        "week": 10,
        "header": "Q12 — CryptDB Architecture & Onion Layers",
        "question": "In the bucketization technique, keywords are:",
        "options": [
          {
            "key": "a",
            "text": "Randomly shuffled before grouping"
          },
          {
            "key": "b",
            "text": "Grouped by document ID"
          },
          {
            "key": "c",
            "text": "Encrypted individually before bucketing"
          },
          {
            "key": "d",
            "text": "Arranged in increasing order of frequency and divided into fixed-size buckets"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Sorting by frequency and using constant-size buckets keeps the number of metakeywords per bucket practically bounded (e.g., 16 for bucket size 4)."
      },
      {
        "id": "W10_Q13",
        "week": 10,
        "header": "Q13 — Security Degradation in Onion-Layered Databases",
        "question": "TWINSSE can incorporate which underlying conjunctive SSE schemes in a black-box manner?",
        "options": [
          {
            "key": "a",
            "text": "Any conjunctive SSE scheme, such as OXT or HXT"
          },
          {
            "key": "b",
            "text": "Only OXT"
          },
          {
            "key": "c",
            "text": "Only functional-encryption-based schemes"
          },
          {
            "key": "d",
            "text": "Only fully homomorphic encryption schemes"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "TWINSSE is designed to layer the meta-keyword idea on top of any existing conjunctive SSE scheme, treating it as a black box."
      },
      {
        "id": "W10_Q14",
        "week": 10,
        "header": "Q14 — Functional Encryption (Inner Product FE)",
        "question": "TWINSSE achieves what improvement in storage overhead compared to the quadratic-storage scheme IEX-2LeV?",
        "options": [
          {
            "key": "a",
            "text": "2x"
          },
          {
            "key": "b",
            "text": "60x"
          },
          {
            "key": "c",
            "text": "1000x"
          },
          {
            "key": "d",
            "text": "No improvement, only latency gains"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The lecture reports a 60× reduction in storage overhead relative to IEX-2LeV, with storage now scaling linearly in the number of keywords."
      },
      {
        "id": "W10_Q15",
        "week": 10,
        "header": "Q15 — Private Information Retrieval (PIR) vs SSE",
        "question": "Which statement best distinguishes Functional Encryption (FE) from standard Homomorphic Encryption (HE)?",
        "options": [
          {
            "key": "a",
            "text": "FE requires bilinear maps while HE never does"
          },
          {
            "key": "b",
            "text": "HE and FE are functionally identical"
          },
          {
            "key": "c",
            "text": "FE reveals only the output of a function, while HE returns an encrypted result"
          },
          {
            "key": "d",
            "text": "HE reveals the function output directly to the server without any key"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "FE's defining feature is function-specific keys that expose only the evaluated output, whereas HE produces a ciphertext that must still be decrypted (typically by the data owner)."
      },
      {
        "id": "W10_Q16",
        "week": 10,
        "header": "Q16 — Single-Server Computationally Private PIR (cPIR)",
        "question": "In the DDH-based inner-product FE scheme, what does the master secret key consist of?",
        "options": [
          {
            "key": "a",
            "text": "The plaintext vector x"
          },
          {
            "key": "b",
            "text": "The public matrix A"
          },
          {
            "key": "c",
            "text": "The ciphertext components c i"
          },
          {
            "key": "d",
            "text": "The randomly chosen secret values s 1 , s 2 , ..., s ℓ"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "msk = (s 1 , ..., s ℓ ), the per-position secret exponents used to both encrypt and to derive the public key elements hi = g si ."
      },
      {
        "id": "W10_Q17",
        "week": 10,
        "header": "Q17 — Multi-Server Information-Theoretic PIR (itPIR)",
        "question": "The Decisional Diffie-Hellman (DDH) assumption states that an attacker cannot distinguish between which two tuples?",
        "options": [
          {
            "key": "a",
            "text": "(g, gᵃ, g b , g ab ) and (g, gᵃ, g b , gᶜ) for random a, b, c"
          },
          {
            "key": "b",
            "text": "(gᵃ, g b ) and (g ab , gᶜ)"
          },
          {
            "key": "c",
            "text": "(g, gᵃ) and (g, g b )"
          },
          {
            "key": "d",
            "text": "Any two random group elements"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "DDH says the real tuple with g ab is computationally indistinguishable from a tuple where the last element is replaced by g c for independent random c."
      },
      {
        "id": "W10_Q18",
        "week": 10,
        "header": "Q18 — Homomorphic PIR (XPIR, SealPIR, OnionPIR)",
        "question": "What is the key limitation of the DDH-based inner-product FE scheme instantiated in the lecture?",
        "options": [
          {
            "key": "a",
            "text": "It cannot support ℓ-dimensional vectors"
          },
          {
            "key": "b",
            "text": "Decryption requires computing a discrete logarithm, infeasible for large ranges"
          },
          {
            "key": "c",
            "text": "It requires bilinear pairings"
          },
          {
            "key": "d",
            "text": "It leaks the master secret key during encryption"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "Recovering ⟨ x,y ⟩ requires solving a discrete-log problem, which is only tractable when the output space is small, not for cryptographic-size moduli."
      },
      {
        "id": "W10_Q19",
        "week": 10,
        "header": "Q19 — Differential Privacy Integration with SSE & PIR",
        "question": "The LWE-based FE scheme improves on the DDH-based scheme mainly because:",
        "options": [
          {
            "key": "a",
            "text": "It uses smaller ciphertexts"
          },
          {
            "key": "b",
            "text": "It avoids randomness entirely during encryption"
          },
          {
            "key": "c",
            "text": "Decryption is completed via simple rescaling and rounding (i.e. feasible)"
          },
          {
            "key": "d",
            "text": "It requires no master secret key"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "After cancelling the LWE noise terms, the result is recovered by dividing by the scaling factor and rounding, no discrete-log computation needed."
      },
      {
        "id": "W10_Q20",
        "week": 10,
        "header": "Q20 — Comprehensive PETs Stack & Future Directions",
        "question": "In the formal definition of Zero-Knowledge Proof systems, which is NOT one of the three required properties?",
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
            "text": "Zero-Knowledge"
          },
          {
            "key": "d",
            "text": "Efficiency (polynomial-time provers)"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "ZKPs have Completeness (honest provers always accepted), Soundness (dishonest provers always rejected), and Zero-Knowledge (no extra knowledge leaked) as the three required properties. Prover efficiency is not one of them."
      }
    ]
  },
  {
    "week": 11,
    "count": 20,
    "questions": [
      {
        "id": "W11_Q1",
        "week": 11,
        "header": "Q1 — Three-Move Structure of Σ-Protocols",
        "question": "What is the three-move structure of a Σ-protocol?",
        "options": [
          {
            "key": "a",
            "text": "Challenge, commit, response"
          },
          {
            "key": "b",
            "text": "Setup, prove, verify"
          },
          {
            "key": "c",
            "text": "Commit, response, challenge"
          },
          {
            "key": "d",
            "text": "Commit, challenge, response"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "The prover first sends a commitment (for example a = gʳ), the verifier then sends a uniformly random challenge c, and the prover finally sends a response σ = f(r, c, w), where w is the witness."
      },
      {
        "id": "W11_Q2",
        "week": 11,
        "header": "Q2 — Discrete-Log Σ-Protocol Verification Equation",
        "question": "In the Σ-protocol for the discrete-log language (h = gˣ), the verifier accepts if which equation holds?",
        "options": [
          {
            "key": "a",
            "text": "g^σ = a · hᶜ"
          },
          {
            "key": "b",
            "text": "g^σ = a + hᶜ"
          },
          {
            "key": "c",
            "text": "gᶜ = a · h^σ"
          },
          {
            "key": "d",
            "text": "h^σ = a · gᶜ"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "The prover sends a = gʳ and σ = r + c·x. Completeness follows because g^σ = g^(r+cx) = gʳ · (gˣ)ᶜ = a · hᶜ."
      },
      {
        "id": "W11_Q3",
        "week": 11,
        "header": "Q3 — Honest-Verifier Zero-Knowledge (HVZK) Simulation & Rewinding",
        "question": "Why must the honest-verifier ZK simulator (SIM) rewind the verifier?",
        "options": [
          {
            "key": "a",
            "text": "It needs to know the challenge before it can build a consistent transcript"
          },
          {
            "key": "b",
            "text": "It must extract the witness from the prover"
          },
          {
            "key": "c",
            "text": "It needs to break the discrete-logarithm assumption"
          },
          {
            "key": "d",
            "text": "It must generate the common reference string"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "SIM has only public inputs (g, h) and not x. It runs the verifier once to learn the challenge c, then rewinds with the same random bits. It fixes the commitment as a = g^σ · h^(−c) for a random σ, which gives a transcript distributed exactly like an honest one."
      },
      {
        "id": "W11_Q4",
        "week": 11,
        "header": "Q4 — Knowledge Soundness & Witness Extraction in DLOG Σ-Protocol",
        "question": "How does the extractor recover the witness x in the knowledge-soundness argument for the DLOG Σ-protocol?",
        "options": [
          {
            "key": "a",
            "text": "x = (σ1 + σ2)(c1 + c2)^(−1) mod p"
          },
          {
            "key": "b",
            "text": "x = (σ1 − σ2)(c1 − c2)^(−1) mod p"
          },
          {
            "key": "c",
            "text": "x = (c1 − c2)(σ1 − σ2)^(−1) mod p"
          },
          {
            "key": "d",
            "text": "x = σ1 · c1^(−1) mod p"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The extractor rewinds the prover after the same commitment and obtains two accepting responses σ1, σ2 for different challenges c1, c2. Dividing the two verification equations gives g^(σ1−σ2) = h^(c1−c2), so σ1 − σ2 = x·(c1 − c2) mod p. Hence x = (σ1 − σ2)(c1 − c2)^(−1) mod p."
      },
      {
        "id": "W11_Q5",
        "week": 11,
        "header": "Q5 — Zero-Knowledge Proofs vs. Proofs of Knowledge (Locked-Door Analogy)",
        "question": "What is the difference between a zero-knowledge proof and a proof of knowledge, as illustrated by the locked-door example?",
        "options": [
          {
            "key": "a",
            "text": "A zero-knowledge proof requires interaction, while a proof of knowledge does not"
          },
          {
            "key": "b",
            "text": "A proof of knowledge is secure only against honest verifiers"
          },
          {
            "key": "c",
            "text": "A zero-knowledge proof shows a key exists, while a proof of knowledge shows the prover actually knows a key"
          },
          {
            "key": "d",
            "text": "A zero-knowledge proof reveals the key, while a proof of knowledge does not"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "A ZK proof establishes \"there exists a secret key that opens the door\" and says nothing about whether the prover has it. A proof of knowledge additionally establishes \"I know a secret key that opens the door\"."
      },
      {
        "id": "W11_Q6",
        "week": 11,
        "header": "Q6 — Honest-Verifier ZK Failure Against Malicious Verifiers",
        "question": "Why does the simulator that works for honest-verifier ZK fail against a malicious verifier?",
        "options": [
          {
            "key": "a",
            "text": "Malicious verifiers can break the discrete-logarithm assumption"
          },
          {
            "key": "b",
            "text": "A rewound run need not produce the same challenge"
          },
          {
            "key": "c",
            "text": "The response σ cannot be computed without the witness"
          },
          {
            "key": "d",
            "text": "Malicious verifiers always reject simulated transcripts"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A dishonest verifier can compute c ← V(a, $) from the commitment and its private coins. SIM changes the commitment when it rewinds, so it cannot guarantee the same challenge again. The simulation works only with probability about 1/p, when the two challenges happen to match."
      },
      {
        "id": "W11_Q7",
        "week": 11,
        "header": "Q7 — Fiat-Shamir Transformation (Non-Interactive ZK)",
        "question": "In the Fiat-Shamir transformation of the DLOG Σ-protocol, how is the challenge generated?",
        "options": [
          {
            "key": "a",
            "text": "The verifier sends a fresh random value"
          },
          {
            "key": "b",
            "text": "c ← H(g, h, a), computed by the prover"
          },
          {
            "key": "c",
            "text": "c ← H(x), where x is the witness"
          },
          {
            "key": "d",
            "text": "A trusted party supplies c in the CRS"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The prover computes the commitment a as usual, then derives the challenge as c ← H(g, h, a) instead of interacting with the verifier. The verifier recomputes the same hash and then checks the verification equation."
      },
      {
        "id": "W11_Q8",
        "week": 11,
        "header": "Q8 — Random Oracle Model (ROM) Heuristic",
        "question": "Which statement about the Random Oracle Model is correct?",
        "options": [
          {
            "key": "a",
            "text": "The oracle returns a fresh random answer every time, even for a repeated query"
          },
          {
            "key": "b",
            "text": "It assumes only the verifier has access to the oracle"
          },
          {
            "key": "c",
            "text": "A heuristic model in which real hash functions stand in for the ideal random function"
          },
          {
            "key": "d",
            "text": "It guarantees security against unbounded provers"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The ROM (Bellare and Rogaway, 1993) is an idealised model with a truly random function that all parties can query. Repeated queries get consistent answers. No ideal RO exists, so hash functions approximate it, which is a heuristic assumption."
      },
      {
        "id": "W11_Q9",
        "week": 11,
        "header": "Q9 — Soundness Loss Factor Q in Fiat-Shamir Transformation",
        "question": "In the sketch that Fiat-Shamir preserves negligible soundness, why does the reduction lose a factor of Q?",
        "options": [
          {
            "key": "a",
            "text": "Q is the number of bits in the challenge"
          },
          {
            "key": "b",
            "text": "Q is the number of witnesses the prover holds"
          },
          {
            "key": "c",
            "text": "Q is the number of rounds in the sigma protocol"
          },
          {
            "key": "d",
            "text": "A cheating prover can try Q different RO outputs as challenges"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "In the transformed protocol a cheating prover with Q RO queries effectively gets Q attempts at a \"bad\" challenge, while in the interactive protocol it gets a single challenge. The success probability is therefore at most Q·ε, which is still negligible for polynomial Q and negligible ε."
      },
      {
        "id": "W11_Q10",
        "week": 11,
        "header": "Q10 — SNARKs as Computationally Bounded Arguments",
        "question": "Which property means a SNARK is secure only against computationally bounded provers?",
        "options": [
          {
            "key": "a",
            "text": "Succinctness"
          },
          {
            "key": "b",
            "text": "Argument"
          },
          {
            "key": "c",
            "text": "Non-interactivity"
          },
          {
            "key": "d",
            "text": "Completeness"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "A SNARK is an \"argument\" and not a \"proof\" because it makes no security claims against unbounded provers. Succinctness refers to proof size, and non-interactivity refers to the absence of rounds of interaction."
      },
      {
        "id": "W11_Q11",
        "week": 11,
        "header": "Q11 — Common Reference String (CRS) Model & Setup",
        "question": "In the Common Reference String (CRS) model, which algorithm is run by a trusted party?",
        "options": [
          {
            "key": "a",
            "text": "Gen"
          },
          {
            "key": "b",
            "text": "Prove"
          },
          {
            "key": "c",
            "text": "Verify"
          },
          {
            "key": "d",
            "text": "Extract"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Gen is the setup algorithm run by a trusted party to produce the CRS. Prove takes the CRS, the statement, and the witness and outputs a proof. Verify takes the CRS, the statement, and the proof and accepts or rejects."
      },
      {
        "id": "W11_Q12",
        "week": 11,
        "header": "Q12 — Core Ingredients of zk-SNARKs",
        "question": "Which of the following is NOT one of the four main ingredients of the zk-SNARK described in the lectures?",
        "options": [
          {
            "key": "a",
            "text": "Encoding the program as a polynomial problem"
          },
          {
            "key": "b",
            "text": "Succinctness by random sampling"
          },
          {
            "key": "c",
            "text": "Fully homomorphic encryption of the entire computation"
          },
          {
            "key": "d",
            "text": "Zero-knowledge through masking with random values"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "The four ingredients are polynomial encoding, succinctness via a random evaluation point, homomorphic encoding/encryption, and zero-knowledge through obfuscation with random multiples."
      },
      {
        "id": "W11_Q13",
        "week": 11,
        "header": "Q13 — Schwartz-Zippel Lemma & Polynomial Identity Testing",
        "question": "What does the Schwartz-Zippel-style argument give the verifier when it checks h(s)·t(s) = v(s)·w(s) at a random point s?",
        "options": [
          {
            "key": "a",
            "text": "h·t = v·w holds as polynomials with high probability, given a large field"
          },
          {
            "key": "b",
            "text": "The prover's witness is revealed"
          },
          {
            "key": "c",
            "text": "The proof size grows with the degree of the polynomials"
          },
          {
            "key": "d",
            "text": "The equation must hold for every element of the field"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "If h·t − v·w is a nonzero polynomial of degree d, a random s is a root with probability at most d/|F|. With a large field this is negligible, so a passing check at one point convinces the verifier of polynomial equality."
      },
      {
        "id": "W11_Q14",
        "week": 11,
        "header": "Q14 — Bilinear Pairings in zk-SNARK Verification",
        "question": "Which property of a bilinear pairing e does the zk-SNARK verifier rely on to check the prover's values?",
        "options": [
          {
            "key": "a",
            "text": "e(aP, bQ) = e(P, Q)^(ab)"
          },
          {
            "key": "b",
            "text": "e(P, Q) = e(Q, P)^(−1)"
          },
          {
            "key": "c",
            "text": "e(P + Q, R) = e(P, R) + e(Q, R)"
          },
          {
            "key": "d",
            "text": "e(P, Q) = P · Q"
          }
        ],
        "correct": [
          "a"
        ],
        "explanation": "Bilinearity lets the verifier compare exponents hidden inside encrypted points, for example checking e(A, g^α) = e(B, g). It does this without learning the secret values. Note that in the multiplicative group G2, pairing outputs combine by multiplication, not addition."
      },
      {
        "id": "W11_Q15",
        "week": 11,
        "header": "Q15 — d-Power Knowledge of Exponent (d-PKE) Assumption",
        "question": "Which assumption underlies the belief that a prover cannot produce valid encrypted values A, B unless it actually evaluated a polynomial from the CRS?",
        "options": [
          {
            "key": "a",
            "text": "The Diffie-Hellman decision assumption"
          },
          {
            "key": "b",
            "text": "The RSA assumption"
          },
          {
            "key": "c",
            "text": "The learning-with-errors assumption"
          },
          {
            "key": "d",
            "text": "The d-power knowledge of exponent assumption"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "The soundness of the pairing check e(A, g^α) = e(B, g) rests on the d-power knowledge of exponent assumption. It says a prover can pass such a check only if it computed the values from the CRS elements."
      },
      {
        "id": "W11_Q16",
        "week": 11,
        "header": "Q16 — Zero-Knowledge Masking via Target Polynomial Multiples",
        "question": "How is zero-knowledge achieved in the zk-SNARK proof?",
        "options": [
          {
            "key": "a",
            "text": "The prover encrypts the witness with FHE"
          },
          {
            "key": "b",
            "text": "The prover interacts with the verifier over several rounds"
          },
          {
            "key": "c",
            "text": "The verifier chooses a secret witness for the prover"
          },
          {
            "key": "d",
            "text": "The prover adds random multiples of the target polynomial"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "The prover picks random δ values and replaces v(s) by v(s) + δ_v·t(s) and w(s) by w(s) + δ_w·t(s), with h adjusted accordingly. Because t(s) is a multiple of the target polynomial, the divisibility relation still holds, but the randomness hides the real evaluations."
      },
      {
        "id": "W11_Q17",
        "week": 11,
        "header": "Q17 — Verifiable ML: Proof of Inference & Parameter Commitment",
        "question": "In the proof-of-inference circuit for verifiable ML, why can a cheating prover not swap in different model parameters?",
        "options": [
          {
            "key": "a",
            "text": "The verifier retrains the model itself"
          },
          {
            "key": "b",
            "text": "The circuit checks that the hash of the prover's parameters matches public hash"
          },
          {
            "key": "c",
            "text": "Model parameters are sent in plaintext"
          },
          {
            "key": "d",
            "text": "The verifier holds the private witness"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The circuit rehashes the private parameters and compares the result with the hash embedded in the CRS, which a trusted party generated. It also checks that y − f(x; θ) = 0. Cheating would require a hash collision or a lucky RO challenge, both of which have negligible probability."
      },
      {
        "id": "W11_Q18",
        "week": 11,
        "header": "Q18 — Verifiable ML: Proof of Training vs. Proof of Inference",
        "question": "Why is a separate proof of training needed in addition to a proof of inference?",
        "options": [
          {
            "key": "a",
            "text": "Proof of inference cannot verify the hash of the parameters"
          },
          {
            "key": "b",
            "text": "Zero-knowledge is lost during inference"
          },
          {
            "key": "c",
            "text": "It does not defend against an adversary who influenced the training itself"
          },
          {
            "key": "d",
            "text": "Inference circuits cannot be expressed as QAPs"
          }
        ],
        "correct": [
          "c"
        ],
        "explanation": "A proof of inference only shows that the outputs are consistent with the committed parameters. If an adversary poisoned the training, the committed parameters are already compromised. The proof-of-training circuit checks the hashes of D and Y and that the training loss is below a threshold."
      },
      {
        "id": "W11_Q19",
        "week": 11,
        "header": "Q19 — Database Reconstruction: Differencing Attack",
        "question": "In context of reconstruction attacks, an attacker asks \"How many people have the disease?\" and then \"How many people other than Bob have the disease?\" and subtracts the answers. What is this attack called?",
        "options": [
          {
            "key": "a",
            "text": "Linkage attack"
          },
          {
            "key": "b",
            "text": "Membership inference attack"
          },
          {
            "key": "c",
            "text": "Model extraction attack"
          },
          {
            "key": "d",
            "text": "Differencing attack"
          }
        ],
        "correct": [
          "d"
        ],
        "explanation": "Each answer is an aggregate on its own, but their difference (2 − 1 = 1) reveals Bob's private bit. A linkage attack, by contrast, joins the released data with a separate public dataset."
      },
      {
        "id": "W11_Q20",
        "week": 11,
        "header": "Q20 — Reconstruction Attacks & Bounded Noise on Subset-Sum Queries",
        "question": "A mechanism adds noise bounded by E = n/401 to every subset-sum query. Following the lecture's analysis, an adversary can reconstruct the database to within how many wrong positions?",
        "options": [
          {
            "key": "a",
            "text": "About 0.25% of n"
          },
          {
            "key": "b",
            "text": "About 1% of n"
          },
          {
            "key": "c",
            "text": "About 4% of n"
          },
          {
            "key": "d",
            "text": "About 40% of n"
          }
        ],
        "correct": [
          "b"
        ],
        "explanation": "The attack rules out any candidate database whose subset sums disagree with the released answers by more than E. The surviving candidate differs from the real database in at most 4E positions. With E = n/401, that is 4n/401 ≈ 0.01n, so about 99% of the database is recovered."
      }
    ]
  }
];
