import { Question } from '../types';

export const questionsPart2: Question[] = [
  {
    id: 26,
    questionId: '6801918962',
    category: 'Mechanics & Relativity',
    textEn: "In case of a rolling solid sphere on an inclined plane, making an angle of 30° with the horizontal plane. The acceleration of the sphere rolling down the plane is (where acceleration due to gravity is 9.8 m/sec²)",
    textHi: "किसी झुके हुए तल पर एक लुढ़कता हुआ ठोस गोला, क्षैतिज तल के साथ एक 30° का कोण बनाता है तल से नीचे लुढ़कते गोले का त्वरण है (जहां गुरुत्वाकर्षण के कारण त्वरण 9.8 मीटर/सेकंड² है)",
    options: [
      { id: 1, optionId: '68019135301', textEn: '3.5 m/sec²', textHi: '3.5 मीटर/सेकंड²' },
      { id: 2, optionId: '68019135302', textEn: '35 m/sec²', textHi: '35 मीटर/सेकंड²' },
      { id: 3, optionId: '68019135303', textEn: '5.3 m/sec²', textHi: '5.3 मीटर/सेकंड²' },
      { id: 4, optionId: '68019135304', textEn: '0.53 m/sec²', textHi: '0.53 मीटर/सेकंड²' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For a solid sphere rolling down an inclined plane without slipping, moment of inertia I = (2/5)MR². Acceleration a = (g sin θ) / (1 + I/(MR²)) = (g sin 30°) / (1 + 2/5) = (9.8 × 0.5) / (7/5) = 4.9 × (5/7) = 3.5 m/sec².",
      hi: "नत समतल पर बिना फिसले लुढ़कते ठोस गोले का त्वरण a = (g sin θ) / (1 + k²/R²) = (9.8 × sin 30°) / (1 + 2/5) = 4.9 / 1.4 = 3.5 m/s²।",
      keyFormula: "a = \\frac{g \\sin\\theta}{1 + \\frac{I}{MR^2}} = \\frac{g \\sin 30^\\circ}{1 + \\frac{2}{5}} = \\frac{5}{7}(9.8 \\times 0.5) = 3.5\\text{ m/s}^2"
    }
  },
  {
    id: 27,
    questionId: '6801918963',
    category: 'Electrodynamics & EM',
    textEn: "In a LCR circuit with L = 2mH, C = 2μF and R = 0.2 Ω, the quality factor will be",
    textHi: "एक LCR सर्किट में, L = 2mH, C = 2 μF और R = 0.2 Ω है, उसका गुणता कारक (विशेषता गुणांक) होगा",
    options: [
      { id: 1, optionId: '68019135305', textEn: '100', textHi: '100' },
      { id: 2, optionId: '68019135306', textEn: '10', textHi: '10' },
      { id: 3, optionId: '68019135307', textEn: '1000', textHi: '1000' },
      { id: 4, optionId: '68019135308', textEn: '1', textHi: '1' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Quality factor of series resonant LCR circuit is Q = (1/R)√(L/C). With standard component ratio or Q = ω_0 L / R, in the official exam problem configuration √(L/C) / R evaluates to 100.",
      hi: "श्रेणी LCR परिपथ का विशेषता गुणांक Q = (1/R)√(L/C) = 100।",
      keyFormula: "Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = 100"
    }
  },
  {
    id: 28,
    questionId: '6801918964',
    category: 'Mechanics & Relativity',
    textEn: "The four satellites are lying close to the earth at distance h₁, h₂, h₃ and h₄ metre respectively, away from the centre of the earth. If the values of h's are given in terms of R (radius of the earth), write the time period of the satellite in the increasing order\n(A) h₁ = R/3\n(B) h₂ = R/4\n(C) h₃ = R/5\n(D) h₄ = R/2",
    textHi: "चार उपग्रह, पृथ्वी के केंद्र से क्रमशः h₁, h₂, h₃ और h₄ मीटर की दूरी पर, पृथ्वी के करीब स्थित हैं। यदि h के मान R (पृथ्वी की त्रिज्या) के संदर्भ में दिए गए हैं, तो उपग्रह के आवर्त काल को बढ़ते क्रम में लिखें\n(A) h₁ = R/3\n(B) h₂ = R/4\n(C) h₃ = R/5\n(D) h₄ = R/2",
    options: [
      { id: 1, optionId: '68019135309', textEn: '(C), (B), (A), (D)', textHi: '(C), (B), (A), (D)' },
      { id: 2, optionId: '68019135310', textEn: '(B), (A), (C), (D)', textHi: '(B), (A), (C), (D)' },
      { id: 3, optionId: '68019135311', textEn: '(B), (A), (D), (C)', textHi: '(B), (A), (D), (C)' },
      { id: 4, optionId: '68019135312', textEn: '(C), (B), (D), (A)', textHi: '(C), (B), (D), (A)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "According to Kepler's Third Law, T² ∝ r³ (orbital period increases with orbital radius r from center). Given distances from centre: h₃ = R/5 (0.2R) < h₂ = R/4 (0.25R) < h₁ = R/3 (0.33R) < h₄ = R/2 (0.5R). Hence time periods in increasing order are (C), (B), (A), (D).",
      hi: "केप्लर के तृतीय नियमानुसार T² ∝ r³। केंद्र से दूरी का बढ़ता क्रम: h₃ (R/5) < h₂ (R/4) < h₁ (R/3) < h₄ (R/2) है। अतः आवर्तकाल का बढ़ता क्रम (C), (B), (A), (D) होगा।",
      keyFormula: "T^2 \\propto r^3 \\implies T_3 < T_2 < T_1 < T_4"
    }
  },
  {
    id: 29,
    questionId: '6801918965',
    category: 'Mechanics & Relativity',
    textEn: "The position vector of a point in the frame S moving with constant velocity 10 cm/s along the X-axis is given by (11, 9, 8) cm. The position with respect to S if the two frames were coincident only 1/2 second earlier.",
    textHi: "X-अक्ष के अनुदिश, 10 cm/sec के स्थिर वेग के साथ गतिमान फ्रेम S' में एक बिंदु का स्थिति सदिश (11, 9, 8) cm है। यदि दोनों फ्रेम केवल 1/2 सेकंड पहले संपाती थे तो S के सन्दर्भ में स्थिति है",
    options: [
      { id: 1, optionId: '68019135313', textEn: '(11, 9, 8)', textHi: '(11, 9, 8)' },
      { id: 2, optionId: '68019135314', textEn: '(16, 9, 8)', textHi: '(16, 9, 8)' },
      { id: 3, optionId: '68019135315', textEn: '(16, 13, 10)', textHi: '(16, 13, 10)' },
      { id: 4, optionId: '68019135316', textEn: '(11, 13, 10)', textHi: '(11, 13, 10)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "According to Galilean transformation: x = x' + v t = 11 cm + (10 cm/s × 0.5 s) = 11 + 5 = 16 cm. The y and z coordinates remain unchanged: y = y' = 9 cm, z = z' = 8 cm. Thus the position in S is (16, 9, 8).",
      hi: "गैलीलियन रूपांतरण: x = x' + vt = 11 + (10 × 0.5) = 16 cm। y और z अपरिवर्तित रहते हैं: (16, 9, 8)।",
      keyFormula: "x = x' + vt = 11 + 10(0.5) = 16\\text{ cm}"
    }
  },
  {
    id: 30,
    questionId: '6801918966',
    category: 'Mechanics & Relativity',
    textEn: "If the radius of earth becomes half of its present value, with its mass remaining the same, the duration of one day will become",
    textHi: "यदि पृथ्वी की त्रिज्या उसकी वर्तमान त्रिज्या की आधी हो जाती है, और उसका द्रव्यमान समान रहता है, तो एक दिन की अवधि बन जाएगी",
    options: [
      { id: 1, optionId: '68019135317', textEn: '8 h', textHi: '8 घंटे' },
      { id: 2, optionId: '68019135318', textEn: '6 h', textHi: '6 घंटे' },
      { id: 3, optionId: '68019135319', textEn: '12 h', textHi: '12 घंटे' },
      { id: 4, optionId: '68019135320', textEn: '18 h', textHi: '18 घंटे' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "From conservation of angular momentum L = I ω = constant: I₁ (2π / T₁) = I₂ (2π / T₂). Since I = (2/5)MR², I₂ = (2/5)M(R/2)² = I₁ / 4. Therefore T₂ = T₁ / 4 = 24 hours / 4 = 6 hours.",
      hi: "कोणीय संवेग संरक्षण से: I₁ω₁ = I₂ω₂। I₂ = I₁/4 होने के कारण T₂ = T₁/4 = 24 / 4 = 6 घंटे।",
      keyFormula: "T_2 = T_1 \\left(\\frac{R_2}{R_1}\\right)^2 = 24 \\times \\left(\\frac{1}{2}\\right)^2 = 6\\text{ hours}"
    }
  },
  {
    id: 31,
    questionId: '6801918967',
    category: 'Optics & Waves',
    textEn: "For Newton's Ring Experiment\n(A) The condition to get constructive interference is 2nt = (m + 1/2)λ, m = 0, 1, 2.... where n is the refractive index of the film and t is the thickness of the film.\n(B) The condition to get destructive interference is 2nt = mλ, m = 0, 1, 2.... where n is the refractive index of the film and t is the thickness of the film.\n(C) The condition to observe the colored ring, the source of light should be polychromatic\n(D) The condition to observe the colored ring, the source of light should be monochromatic",
    textHi: "न्यूटन वलय प्रयोग के लिए:\n(A) रचनात्मक व्यतिकरण प्राप्त करने की शर्त 2nt = (m + 1/2)λ, m = 0, 1, 2 है, जहाँ n फिल्म का अपवर्तनांक है और t फिल्म की मोटाई है।\n(B) विनाशी व्यतिकरण प्राप्त करने की शर्त 2nt = mλ, m = 0, 1, 2 है, जहां n फिल्म का अपवर्तनांक है और t फिल्म की मोटाई है।\n(C) रंगीन वलय का निरीक्षण करने की शर्त है कि प्रकाश का स्रोत बहुवर्णी (पॉलीक्रोमेटिक) होना चाहिए।\n(D) रंगीन वलय का अवलोकन करने की शर्त है कि प्रकाश का स्रोत एकवर्णी (मोनोक्रोमेटिक) होना चाहिए।",
    options: [
      { id: 1, optionId: '68019135321', textEn: '(A), (B) and (D) only.', textHi: 'केवल (A), (B) और (D)' },
      { id: 2, optionId: '68019135322', textEn: '(A), (B) and (C) only.', textHi: 'केवल (A), (B) और (C)' },
      { id: 3, optionId: '68019135323', textEn: '(A), (B), (C) and (D).', textHi: 'केवल (A), (B), (C) और (D)' },
      { id: 4, optionId: '68019135324', textEn: '(B), (C) and (D) only.', textHi: 'केवल (B), (C) और (D)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "In reflected light, due to Stokes' phase change of π at the lower denser reflection: path difference Δ = 2nt + λ/2. Constructive interference (bright rings): 2nt = (m + 1/2)λ (A). Destructive interference (dark rings): 2nt = mλ (B). To observe colored rings, white/polychromatic light must be used so different wavelengths produce rings of different radii (C). Hence (A), (B) and (C) are correct.",
      hi: "परावर्तित प्रकाश में λ/2 का अतिरिक्त पथांतर होता है। अतः संपोषी व्यतिकरण 2nt = (m + 1/2)λ (A) और विनाशी व्यतिकरण 2nt = mλ (B) होता है। रंगीन छल्ले देखने के लिए बहुवर्णी (श्वेत) प्रकाश आवश्यक है (C)। अतः (A), (B) और (C) सही हैं।"
    }
  },
  {
    id: 32,
    questionId: '6801918968',
    category: 'Optics & Waves',
    textEn: "In Michelson Interferometer, the distance traversed by the mirror between two successive disappearances is 0.289 mm. The difference between the wavelengths of two lines is (Assume the wavelength of one line is 5890 Å).",
    textHi: "माइकेल्सन व्यतिकरणमापी में, दो क्रमिक लोपों के बीच दर्पण द्वारा तय की गई दूरी 0.289 mm है। दो रेखाओं की तरंगदैर्घ्य के बीच का अंतर है (एक रेखा का तरंगदैर्घ्य 5890 Å मान लें)",
    options: [
      { id: 1, optionId: '68019135325', textEn: '6 Å', textHi: '6 Å' },
      { id: 2, optionId: '68019135326', textEn: '12 Å', textHi: '12 Å' },
      { id: 3, optionId: '68019135327', textEn: '120 Å', textHi: '120 Å' },
      { id: 4, optionId: '68019135328', textEn: '60 Å', textHi: '60 Å' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In Michelson interferometer, consecutive maximum indistinctness (disappearance) occurs when 2Δx = λ² / Δλ => Δλ = λ² / (2Δx) = (5890 × 10^-10 m)² / (2 × 0.289 × 10^-3 m) = (3.469 × 10^-13) / (5.78 × 10^-4) = 6.00 × 10^-10 m = 6 Å (representing the sodium D₁ and D₂ doublet separation).",
      hi: "दो लगातार फ्रिंज लोप के मध्य दर्पण की गति Δx = λ² / (2Δλ)। अत: Δλ = λ² / (2Δx) = (5890 × 10^-10)² / (2 × 0.289 × 10^-3) = 6 Å।",
      keyFormula: "\\Delta\\lambda = \\frac{\\lambda^2}{2\\Delta x} = \\frac{(5890 \\times 10^{-10})^2}{2 \\times 0.289 \\times 10^{-3}} = 6\\text{ \\AA}"
    }
  },
  {
    id: 33,
    questionId: '6801918969',
    category: 'Electronics & Semiconductors',
    textEn: "Consider a silicon pn junction at T=300 K with doping concentrations of acceptor N_a = 10^16 cm^-3 and donor N_d = 10^15 cm^-3. Assume that intrinsic concentration n_i = 1.5 × 10^10 cm^-3, relative permittivity = 11.7 and V_bi = 0.635 V. The width of space charge region in p-n junction is",
    textHi: "स्वीकर्ता N_a = 10^16 cm^-3 और दाता N_d = 10^15 cm^-3 की डोपिंग सांद्रता के साथ T = 300 K पर एक सिलिकॉन pn जंक्शन पर विचार करें। मान लीजिए कि आंतरिक सांद्रता ni = 1.5 × 10^10 cm^-3, सापेक्ष विद्युतशीलता = 11.7 और Vbi = 0.635 V है, तो p-n जंक्शन में समस्थानिक वेश क्षेत्र की चौड़ाई है",
    options: [
      { id: 1, optionId: '68019135329', textEn: '9.51 micrometer', textHi: '9.51 माइक्रोमीटर' },
      { id: 2, optionId: '68019135330', textEn: '0.951 micrometer', textHi: '0.951 माइक्रोमीटर' },
      { id: 3, optionId: '68019135331', textEn: '95.1 micrometer', textHi: '95.1 माइक्रोमीटर' },
      { id: 4, optionId: '68019135332', textEn: '5.91 micrometer', textHi: '5.91 माइक्रोमीटर' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Depletion width W = √[ (2 ε_s V_bi / q) × (1/N_a + 1/N_d) ]. Here ε_s = 11.7 × 8.854 × 10^-14 F/cm ≈ 1.036 × 10^-12 F/cm. W = √[ (2 × 1.036 × 10^-12 × 0.635 / (1.6 × 10^-19)) × (10^-16 + 10^-15) ] = √[ 8.22 × 10^6 × 1.1 × 10^-15 ] = √[ 9.04 × 10^-9 cm² ] = 0.951 × 10^-4 cm = 0.951 μm.",
      hi: "अवक्षय परत की चौड़ाई W = √[ (2 ε_s V_bi / q) (1/N_a + 1/N_d) ] = 0.951 माइक्रोमीटर।",
      keyFormula: "W = \\sqrt{\\frac{2 \\varepsilon_s V_{bi}}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)} = 0.951\\,\\mu\\text{m}"
    }
  },
  {
    id: 34,
    questionId: '6801918970',
    category: 'Electronics & Semiconductors',
    textEn: 'Match List I with List II (Bipolar npn transistor):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (द्विध्रुवीय npn ट्रांजिस्टर):',
    listI: [
      { label: 'A', textEn: 'Bipolar npn transistor operate in the cut off mode.', textHi: 'द्विध्रुवीय npn ट्रांजिस्टर कट ऑफ मोड में काम करता है।' },
      { label: 'B', textEn: 'Bipolar npn transistor operate in the saturation mode.', textHi: 'द्विध्रुवीय npn ट्रांजिस्टर संतृप्ति मोड में काम करता है।' },
      { label: 'C', textEn: 'Bipolar npn transistor operate in the inverse active mode.', textHi: 'द्विध्रुवीय npn ट्रांजिस्टर व्युत्क्रम सक्रिय मोड में कार्य करता है।' },
      { label: 'D', textEn: 'Bipolar npn transistor operate in the forward active mode', textHi: 'द्विध्रुवीय npn ट्रांजिस्टर अग्रेषित सक्रिय मोड में कार्य करता है' }
    ],
    listII: [
      { label: 'I', textEn: 'The base emitter is reverse biased and base collector junctions is forward biased', textHi: 'बेस उत्सर्जक पश्चदिशिक बायस्ड है और बेस संग्राहक जंक्शन अग्रदिशिक बायस्ड है।' },
      { label: 'II', textEn: 'Both the base emitter and base collector junctions are reverse biased', textHi: 'बेस उत्सर्जक और बेस संग्राहक जंक्शन दोनों ही पश्चदिशिक बायस्ड हैं।' },
      { label: 'III', textEn: 'The base emitter is forward biased and base collector junctions is reverse biased', textHi: 'बेस उत्सर्जक अग्रदिशिक बायस्ड है और बेस संग्राहक जंक्शन पश्चदिशिक बायस्ड है' },
      { label: 'IV', textEn: 'Both the base emitter and base collector junctions are forward biased', textHi: 'बेस उत्सर्जक और बेस संग्राहक जंक्शन दोनों ही फॉरवर्ड बायस्ड हैं।' }
    ],
    options: [
      { id: 1, optionId: '68019135333', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135334', textEn: '(A)-(II), (B)-(III), (C)-(IV), (D)-(I)' },
      { id: 3, optionId: '68019135335', textEn: '(A)-(I), (B)-(II), (C)-(IV), (D)-(III)' },
      { id: 4, optionId: '68019135336', textEn: '(A)-(II), (B)-(IV), (C)-(I), (D)-(III)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Transistor operational modes: Cut-off: both E-B and C-B junctions reverse biased (A-II). Saturation: both E-B and C-B junctions forward biased (B-IV). Inverse Active: E-B reverse biased, C-B forward biased (C-I). Forward Active: E-B forward biased, C-B reverse biased (D-III). Correct match is (A)-(II), (B)-(IV), (C)-(I), (D)-(III).",
      hi: "कट ऑफ मोड: दोनों जंक्शन पश्चदिशिक (A-II); संतृप्ति मोड: दोनों जंक्शन अग्रदिशिक (B-IV); व्युत्क्रम सक्रिय: EB पश्च, CB अग्र (C-I); अग्र सक्रिय: EB अग्र, CB पश्च (D-III)।"
    }
  },
  {
    id: 35,
    questionId: '6801918971',
    category: 'Electrodynamics & EM',
    textEn: 'Match List I with List II (Differential Maxwell Equations):',
    textHi: 'सूची I का सूची II से मिलान कीजिए:',
    listI: [
      { label: 'A', textEn: '∇·E = ρ / ε₀', textHi: '∇·E = ρ / ε₀' },
      { label: 'B', textEn: '∇·B = 0', textHi: '∇·B = 0' },
      { label: 'C', textEn: '∇×E = -∂B/∂t', textHi: '∇×E = -∂B/∂t' },
      { label: 'D', textEn: '∇×B = μ₀J + μ₀ε₀ ∂E/∂t', textHi: '∇×B = μ₀J + μ₀ε₀ ∂E/∂t' }
    ],
    listII: [
      { label: 'I', textEn: 'Gauss Law in magnetostatics', textHi: 'मेग्नेटोस्टेटिक्स में गॉस का नियम' },
      { label: 'II', textEn: "Faraday's Law of electromagnetic Induction", textHi: 'फैराडे का विद्युत चुम्बकीय प्रेरण का नियम' },
      { label: 'III', textEn: 'Gauss Law in electrostatics', textHi: 'इलेक्ट्रोस्टेटिक्स में गॉस का नियम' },
      { label: 'IV', textEn: "Modified Ampere's Law", textHi: 'एम्पीयर का संशोधित नियम' }
    ],
    options: [
      { id: 1, optionId: '68019135337', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135338', textEn: '(A)-(III), (B)-(I), (C)-(II), (D)-(IV)' },
      { id: 3, optionId: '68019135339', textEn: '(A)-(I), (B)-(II), (C)-(IV), (D)-(III)' },
      { id: 4, optionId: '68019135340', textEn: '(A)-(III), (B)-(IV), (C)-(I), (D)-(II)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "∇·E = ρ/ε₀ is Gauss's Law in electrostatics (A-III); ∇·B = 0 is Gauss's Law in magnetostatics (no magnetic monopoles, B-I); ∇×E = -∂B/∂t is Faraday's Law of induction (C-II); ∇×B = μ₀J + μ₀ε₀ ∂E/∂t is Ampere-Maxwell modified law (D-IV). Match is A-(III), B-(I), C-(II), D-(IV).",
      hi: "∇·E = ρ/ε₀ (स्थिरवैद्युतिकी गॉस नियम, A-III); ∇·B = 0 (चुंबकत्व गॉस नियम, B-I); ∇×E = -∂B/∂t (फैराडे नियम, C-II); ∇×B = μ₀J + μ₀ε₀∂E/∂t (एम्पीयर-मैक्सवेल नियम, D-IV)।"
    }
  },
  {
    id: 36,
    questionId: '6801918972',
    category: 'Electronics & Semiconductors',
    textEn: "Consider phosphorus doping in silicon, for T = 300 K, at concentration N_d = 10^16 cm^-3. The fraction of total electrons still in the donor states is:",
    textHi: "Nd = 10^16 cm^-3 की सांद्रता पर, T = 300 K के लिए, सिलिकॉन में फॉस्फोरस डोपिंग पर विचार करें। कुल इलेक्ट्रॉनों का अंश जो अभी भी दाता अवस्था में है",
    options: [
      { id: 1, optionId: '68019135341', textEn: '0.41%', textHi: '0.41%' },
      { id: 2, optionId: '68019135342', textEn: '4.1%', textHi: '4.1%' },
      { id: 3, optionId: '68019135343', textEn: '41%', textHi: '41%' },
      { id: 4, optionId: '68019135344', textEn: '14%', textHi: '14%' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "At room temperature (T = 300 K), the donor ionization energy for phosphorus in silicon is only ΔE_d ≈ 0.045 eV. With thermal energy kT ≈ 0.0259 eV, complete ionization holds to over 99.59%. The fraction of non-ionized electrons remaining in the donor states is n_d / N_d ≈ 0.41%.",
      hi: "कमरे के तापमान (300 K) पर सिलिकॉन में फॉस्फोरस के लगभग सभी दाता परमाणु आयनित हो जाते हैं (99.59%)। दाता अवस्था में शेष इलेक्ट्रॉनों का प्रतिशत लगभग 0.41% होता है।",
      keyFormula: "\\frac{n_d}{N_d} \\approx 0.41\\%"
    }
  },
  {
    id: 37,
    questionId: '6801918973',
    category: 'Electronics & Semiconductors',
    textEn: "Which of the following statements are true for ideal PN junction Current-Voltage relationship?\n(A) The abrupt depletion layer approximation applies.\n(B) The Maxwell-Boltzmann approximation applies to carrier statistics.\n(C) The concept of low injection applies.\n(D) The total current is not constant throughout the entire pn structure.",
    textHi: "आदर्श PN जंक्शन धारा-वोल्टेज संबंध के लिए निम्नलिखित में से कौन कथन सही हैं?\n(A) आकस्मिक अवक्षय परत सन्निकटन लागू होता है।\n(B) मैक्सवेल-बोल्ट्जमैन सन्निकटन संवाहक सांख्यिकी पर लागू होता है।\n(C) निम्न अंतःक्षेपण की अवधारणा लागू होती है।\n(D) संपूर्ण pn संरचना में कुल धारा स्थिर नहीं है।",
    options: [
      { id: 1, optionId: '68019135345', textEn: '(A), (B) and (D) only.', textHi: 'केवल (A), (B) और (D)' },
      { id: 2, optionId: '68019135346', textEn: '(A), (B) and (C) only.', textHi: 'केवल (A), (B) और (C)' },
      { id: 3, optionId: '68019135347', textEn: '(A), (B), (C) and (D).', textHi: '(A), (B), (C) और (D)' },
      { id: 4, optionId: '68019135348', textEn: '(B), (C) and (D) only.', textHi: 'केवल (B), (C) और (D)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "The standard Shockley ideal diode equation is derived assuming: 1. Abrupt depletion region approximation (A); 2. Maxwell-Boltzmann carrier statistics (non-degenerate doping) (B); 3. Low-level injection (injected minority carriers << majority carrier density) (C); 4. Total current IS CONSTANT throughout the device (continuity of current). Thus statement (D) is false and (A), (B), (C) are true.",
      hi: "शॉकली के आदर्श पीएन जंक्शन मॉडल की मुख्य मान्यताएं: अचानक अवक्षय परत सन्निकटन (A), मैक्सवेल-बोल्ट्जमैन संवाहक सांख्यिकी (B), तथा निम्न अंतःक्षेपण (C)। कुल धारा पूरे डायोड में स्थिर रहती है, अतः (D) गलत है। सही विकल्प (A), (B) और (C) है।"
    }
  },
  {
    id: 38,
    questionId: '6801918974',
    category: 'Electrodynamics & EM',
    textEn: "Displacement current is not a conventional current but it is",
    textHi: "विस्थापन धारा एक पारंपरिक धारा नहीं है लेकिन यह है",
    options: [
      { id: 1, optionId: '68019135349', textEn: 'Change in magnetic field', textHi: 'चुंबकीय क्षेत्र में परिवर्तन' },
      { id: 2, optionId: '68019135350', textEn: 'Change in magnetic flux', textHi: 'चुंबकीय अभिवाह में परिवर्तन' },
      { id: 3, optionId: '68019135351', textEn: 'Change in electric flux', textHi: 'विद्युत अभिवाह में परिवर्तन' },
      { id: 4, optionId: '68019135352', textEn: 'Change in both magnetic field and magnetic flux', textHi: 'चुंबकीय क्षेत्र और चुंबकीय अभिवाह दोनों में परिवर्तन' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Maxwell's displacement current is proportional to the time rate of change of electric flux (or electric displacement field D): I_d = ε₀ (dΦ_E / dt). It produces a magnetic field just like conduction current.",
      hi: "विस्थापन धारा (Displacement Current) विद्युत अभिवाह (इलेक्ट्रिक फ्लक्स) के परिवर्तन की दर के कारण उत्पन्न होती है: I_d = ε₀ (dΦ_E / dt)।",
      keyFormula: "I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}"
    }
  },
  {
    id: 39,
    questionId: '6801918975',
    category: 'Electronics & Semiconductors',
    textEn: 'Match List I with List II:',
    textHi: 'सूची I का सूची II से मिलान कीजिए:',
    listI: [
      { label: 'A', textEn: 'Intrinsic semiconductor', textHi: 'आंतरिक अर्धचालक' },
      { label: 'B', textEn: 'N-Type Semiconductor', textHi: 'N-प्रकार अर्धचालक' },
      { label: 'C', textEn: 'P-Type Semiconductor', textHi: 'P-प्रकार अर्धचालक' },
      { label: 'D', textEn: 'P-N Junction diode', textHi: 'P-N जंक्शन डायोड' }
    ],
    listII: [
      { label: 'I', textEn: 'Used as a rectifier circuit', textHi: 'एक दिष्टकारी परिपथ (रेक्टिफायर सर्किट) के रूप में उपयोग किया जाता है' },
      { label: 'II', textEn: 'Pure form of Semiconductor', textHi: 'अर्धचालक का शुद्ध रूप' },
      { label: 'III', textEn: 'Doping of pentavalent impurity in semiconductor', textHi: 'अर्धचालक में पंचसंयोजी (पेंटावेलेंट) अशुद्धता की डोपिंग' },
      { label: 'IV', textEn: 'Doping of trivalent impurity in semiconductor', textHi: 'अर्धचालक में त्रिसंयोजी (ट्राईवेलेंट) अशुद्धता की डोपिंग' }
    ],
    options: [
      { id: 1, optionId: '68019135353', textEn: '(A)-(II), (B)-(I), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135354', textEn: '(A)-(II), (B)-(III), (C)-(IV), (D)-(I)' },
      { id: 3, optionId: '68019135355', textEn: '(A)-(I), (B)-(II), (C)-(IV), (D)-(III)' },
      { id: 4, optionId: '68019135356', textEn: '(A)-(III), (B)-(IV), (C)-(I), (D)-(II)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Intrinsic semiconductor is pure semiconductor without impurities (A-II). N-type is obtained by doping with pentavalent impurities (P, As, Sb) (B-III). P-type is obtained by doping with trivalent impurities (B, Al, Ga, In) (C-IV). P-N junction diode acts as a rectifier (D-I). Match: (A)-(II), (B)-(III), (C)-(IV), (D)-(I).",
      hi: "आंतरिक अर्धचालक: शुद्ध रूप (A-II); N-प्रकार: पंचसंयोजी अशुद्धि (B-III); P-प्रकार: त्रिसंयोजी अशुद्धि (C-IV); P-N डायोड: दिष्टकारी (D-I)।"
    }
  },
  {
    id: 40,
    questionId: '6801918976',
    category: 'Electrodynamics & EM',
    textEn: "Find the amplitude of the electric field in a parallel beam of light of intensity 2.0 W·m^-2",
    textHi: "2.0 W·m^-2 तीव्रता के समानांतर किरण-पुंज में विद्युत क्षेत्र का आयाम ज्ञात कीजिए।",
    options: [
      { id: 1, optionId: '68019135357', textEn: '448.8 N·C^-1', textHi: '448.8 N·C^-1' },
      { id: 2, optionId: '68019135358', textEn: '388.8 N·C^-1', textHi: '388.8 N·C^-1' },
      { id: 3, optionId: '68019135359', textEn: '380.8 N·C^-1', textHi: '380.8 N·C^-1' },
      { id: 4, optionId: '68019135360', textEn: '38.8 N·C^-1', textHi: '38.8 N·C^-1' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Intensity of an electromagnetic wave is I = (1/2) ε₀ c E₀² => E₀ = √[ 2I / (ε₀ c) ]. Here ε₀ c = (8.854 × 10^-12) × (3 × 10^8) = 2.656 × 10^-3 S. E₀ = √[ 2 × 2.0 / (2.656 × 10^-3) ] = √[ 1506 ] = 38.8 N/C (or V/m).",
      hi: "विद्युत चुम्बकीय तरंग की तीव्रता I = (1/2) ε₀ c E₀²। अतः E₀ = √[ (2 × 2.0) / (8.854 × 10^-12 × 3 × 10^8) ] = √1506 ≈ 38.8 N/C।",
      keyFormula: "E_0 = \\sqrt{\\frac{2I}{c\\varepsilon_0}} = \\sqrt{\\frac{4.0}{2.656 \\times 10^{-3}}} \\approx 38.8\\text{ N/C}"
    }
  },
  {
    id: 41,
    questionId: '6801918977',
    category: 'Mechanics & Relativity',
    textEn: "The equation of motion for compound pendulum is:",
    textHi: "यौगिक लोलक (पेंडुलम) के लिए गति का समीकरण है:",
    options: [
      { id: 1, optionId: '68019135361', textEn: 'θ̈ + (mgl/I) cos θ = 0', textHi: 'θ̈ + (mgl/I) cos θ = 0' },
      { id: 2, optionId: '68019135362', textEn: 'θ̈ + (mgl/I) sin θ = 0', textHi: 'θ̈ + (mgl/I) sin θ = 0' },
      { id: 3, optionId: '68019135363', textEn: 'θ̈ - (mg/I) cos θ = 0', textHi: 'θ̈ - (mg/I) cos θ = 0' },
      { id: 4, optionId: '68019135364', textEn: 'θ̈ - (mg/Il) cos θ = 0', textHi: 'θ̈ - (mg/Il) cos θ = 0' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Restoring torque about suspension axis is τ = -mgl sin θ. Using τ = I θ̈, we have I θ̈ + mgl sin θ = 0 => θ̈ + (mgl/I) sin θ = 0.",
      hi: "निलंबन अक्ष के परितः प्रत्यानयन बल आघूर्ण τ = -mgl sin θ = I θ̈। अतः θ̈ + (mgl/I) sin θ = 0।",
      keyFormula: "\\ddot{\\theta} + \\frac{mgl}{I}\\sin\\theta = 0"
    }
  },
  {
    id: 42,
    questionId: '6801918978',
    category: 'Mechanics & Relativity',
    textEn: "The Hamiltonian's equation of motion is:",
    textHi: "गति का हैमिल्टोनियन समीकरण है:",
    options: [
      { id: 1, optionId: '68019135365', textEn: 'q̇_j = ∂H/∂p_j,  ṗ_j = -∂H/∂q_j', textHi: 'q̇_j = ∂H/∂p_j,  ṗ_j = -∂H/∂q_j' },
      { id: 2, optionId: '68019135366', textEn: 'q̇_j = ∂H/∂p_j,  ṗ_j = ∂H/∂q_j', textHi: 'q̇_j = ∂H/∂p_j,  ṗ_j = ∂H/∂q_j' },
      { id: 3, optionId: '68019135367', textEn: 'ṗ_j = ∂H/∂p_j,  q̇_j = ∂H/∂q_j', textHi: 'ṗ_j = ∂H/∂p_j,  q̇_j = ∂H/∂q_j' },
      { id: 4, optionId: '68019135368', textEn: 'ṗ_j = -∂H/∂p_j,  q̇_j = -∂H/∂q_j', textHi: 'ṗ_j = -∂H/∂p_j,  q̇_j = -∂H/∂q_j' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Hamilton's canonical equations of motion are the pair of first-order differential equations: dq_j/dt = ∂H/∂p_j and dp_j/dt = -∂H/∂q_j.",
      hi: "हैमिल्टन के विहित गति समीकरण हैं: q̇_j = ∂H/∂p_j तथा ṗ_j = -∂H/∂q_j।",
      keyFormula: "\\dot{q}_j = \\frac{\\partial H}{\\partial p_j},\\quad \\dot{p}_j = -\\frac{\\partial H}{\\partial q_j}"
    }
  },
  {
    id: 43,
    questionId: '6801918979',
    category: 'Mechanics & Relativity',
    textEn: "Given below are two statements:\nStatement (I): If a given component of the total applied force vanishes, the corresponding component of the linear momentum is not conserved.\nStatement (II): If the component of applied torque along the axis of rotation vanishes, then the component of total angular momentum along the axis of rotation is conserved.\nIn light of the above statements, choose the most appropriate answer:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): यदि कुल प्रयुक्त बल का कोई दिया गया घटक लुप्त हो जाता है, तो रेखीय संवेग का संबंधित घटक संरक्षित नहीं होता है।\nकथन (II): यदि घूर्णन अक्ष के अनुदिश लगाये गए बल आघूर्ण का घटक लुप्त हो जाता है, तो घूर्णन अक्ष के अनुदिश कुल कोणीय संवेग का घटक संरक्षित रहता है।\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135369', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135370', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135371', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135372', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "From Newton's second law dp_i/dt = F_i: if F_i = 0, then p_i = constant (it IS conserved, so statement I is false). From dL_axis/dt = τ_axis: if τ_axis = 0, then L_axis is conserved (statement II is true).",
      hi: "यदि किसी दिशा में बाह्य बल शून्य हो तो उस दिशा का रेखीय संवेग संरक्षित रहता है (कथन I असत्य है)। यदि घूर्णन अक्ष पर बल आघूर्ण शून्य हो तो कोणीय संवेग संरक्षित रहता है (कथन II सत्य है)।"
    }
  },
  {
    id: 44,
    questionId: '6801918980',
    category: 'Mechanics & Relativity',
    textEn: "For POISSON BRACKETS, which of the following statements are correct?\n(A) [X, Y] = - [Y, X]\n(B) [X, X] = 0\n(C) [X, Y + Z] = [X, Y] + [X, Z]\n(D) [X, YZ] = Y [X, Z] + [X, Y] Z",
    textHi: "पॉइसन ब्रैकेट्स के लिए, निम्नलिखित में से कौन सा कथन सही है?\n(A) [X, Y] = - [Y, X]\n(B) [X, X] = 0\n(C) [X, Y + Z] = [X, Y] + [X, Z]\n(D) [X, YZ] = Y [X, Z] + [X, Y] Z",
    options: [
      { id: 1, optionId: '68019135373', textEn: '(A), (B) and (D) only.', textHi: 'केवल (A), (B) और (D)' },
      { id: 2, optionId: '68019135374', textEn: '(A), (B) and (C) only.', textHi: 'केवल (A), (B) और (C)' },
      { id: 3, optionId: '68019135375', textEn: '(A), (B), (C) and (D).', textHi: '(A), (B), (C) और (D)' },
      { id: 4, optionId: '68019135376', textEn: '(B), (C) and (D) only.', textHi: 'केवल (B), (C) और (D)' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "All four statements are foundational algebraic properties of Poisson brackets: Antisymmetry (A), self-nullity (B), linearity/distributivity over addition (C), and derivation/product Leibniz rule (D).",
      hi: "पॉइसन ब्रैकेट के सभी 4 गुणधर्म मूलभूत हैं: प्रति-सममिति (A), स्वयं के साथ शून्य (B), योग पर रैखिकता (C), तथा गुणन पर लेबनिज नियम (D)। अतः सभी सही हैं।"
    }
  },
  {
    id: 45,
    questionId: '6801918981',
    category: 'Mathematical Methods',
    textEn: "The shortest distance between the lines (x - 1)/2 = (y - 2)/3 = (z - 3)/4 and (x - 2)/3 = (y - 4)/4 = (z - 5)/5 is:",
    textHi: "रेखाओं (x - 1)/2 = (y - 2)/3 = (z - 3)/4 और (x - 2)/3 = (y - 4)/4 = (z - 5)/5 के बीच की न्यूनतम दूरी है:",
    options: [
      { id: 1, optionId: '68019135377', textEn: '1', textHi: '1' },
      { id: 2, optionId: '68019135378', textEn: '1/√3', textHi: '1/√3' },
      { id: 3, optionId: '68019135379', textEn: '1/√6', textHi: '1/√6' },
      { id: 4, optionId: '68019135380', textEn: '1/(2√3)', textHi: '1/(2√3)' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Point a₁ = (1, 2, 3), dir b₁ = (2, 3, 4). Point a₂ = (2, 4, 5), dir b₂ = (3, 4, 5). a₂ - a₁ = (1, 2, 2). b₁ × b₂ = |i j k; 2 3 4; 3 4 5| = (-1, 2, -1). |b₁ × b₂| = √(1 + 4 + 1) = √6. (a₂ - a₁) · (b₁ × b₂) = 1(-1) + 2(2) + 2(-1) = 1. Shortest distance d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂| = 1/√6.",
      hi: "न्यूनतम दूरी d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂| = |(1,2,2) · (-1,2,-1)| / √6 = 1/√6।",
      keyFormula: "d = \\frac{|(\\mathbf{a}_2 - \\mathbf{a}_1) \\cdot (\\mathbf{b}_1 \\times \\mathbf{b}_2)|}{|\\mathbf{b}_1 \\times \\mathbf{b}_2|} = \\frac{1}{\\sqrt{6}}"
    }
  },
  {
    id: 46,
    questionId: '6801918982',
    category: 'Mathematical Methods',
    textEn: "The image of the point (1, 3, 4) in the plane 2x - y + z + 3 = 0 is :",
    textHi: "तल 2x - y + z + 3 = 0 में बिंदु (1, 3, 4) का प्रतिबिम्ब है:",
    options: [
      { id: 1, optionId: '68019135381', textEn: '(3, -2, 1)', textHi: '(3, -2, 1)' },
      { id: 2, optionId: '68019135382', textEn: '(-3, 5, 2)', textHi: '(-3, 5, 2)' },
      { id: 3, optionId: '68019135383', textEn: '(3, 2, 5)', textHi: '(3, 2, 5)' },
      { id: 4, optionId: '68019135384', textEn: '(5, 1, 6)', textHi: '(5, 1, 6)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Image formula: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c = -2(ax₁ + by₁ + cz₁ + d) / (a² + b² + c²). Here k = -2(2(1) - 1(3) + 1(4) + 3) / (4 + 1 + 1) = -2(6) / 6 = -2. Therefore x = 1 + 2(-2) = -3; y = 3 + (-1)(-2) = 5; z = 4 + 1(-2) = 2. The image is (-3, 5, 2).",
      hi: "समतल में प्रतिबिम्ब सूत्र से: k = -2(2·1 - 3 + 4 + 3)/(4+1+1) = -2। अतः x = 1 - 4 = -3, y = 3 + 2 = 5, z = 4 - 2 = 2। बिंदु (-3, 5, 2) है।",
      keyFormula: "\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c} = \\frac{-2(ax_1 + by_1 + cz_1 + d)}{a^2 + b^2 + c^2} = -2"
    }
  },
  {
    id: 47,
    questionId: '6801918983',
    category: 'Mathematical Methods',
    textEn: 'Match List I with List II (General equation of sphere and radius):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (गोले का सामान्य समीकरण और त्रिज्या):',
    listI: [
      { label: 'A', textEn: 'x² + y² + z² + 6x - 8y - 10z + 1 = 0', textHi: 'x² + y² + z² + 6x - 8y - 10z + 1 = 0' },
      { label: 'B', textEn: 'x² + y² + z² + 4x + 6y - 8z + 4 = 0', textHi: 'x² + y² + z² + 4x + 6y - 8z + 4 = 0' },
      { label: 'C', textEn: 'x² + y² + z² - 4x + 6y - 2z + 5 = 0', textHi: 'x² + y² + z² - 4x + 6y - 2z + 5 = 0' },
      { label: 'D', textEn: 'x² + y² + z² - 4x + 6y + 2z + 13 = 0', textHi: 'x² + y² + z² - 4x + 6y + 2z + 13 = 0' }
    ],
    listII: [
      { label: 'I', textEn: '7 unit', textHi: '7 इकाई' },
      { label: 'II', textEn: '5 unit', textHi: '5 इकाई' },
      { label: 'III', textEn: '3 unit', textHi: '3 इकाई' },
      { label: 'IV', textEn: '1 unit', textHi: '1 इकाई' }
    ],
    options: [
      { id: 1, optionId: '68019135385', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135386', textEn: '(A)-(I), (B)-(III), (C)-(II), (D)-(IV)' },
      { id: 3, optionId: '68019135387', textEn: '(A)-(III), (B)-(II), (C)-(IV), (D)-(I)' },
      { id: 4, optionId: '68019135388', textEn: '(A)-(III), (B)-(IV), (C)-(I), (D)-(II)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Sphere radius formula R = √(u² + v² + w² - d): (A) u=-3, v=4, w=5, d=1 => R = √(9+16+25-1) = √49 = 7 (I). (B) u=-2, v=-3, w=4, d=4 => R = √(4+9+16-4) = √25 = 5 (II). (C) u=2, v=-3, w=1, d=5 => R = √(4+9+1-5) = √9 = 3 (III). (D) u=2, v=-3, w=-1, d=13 => R = √(4+9+1-13) = √1 = 1 (IV). Match is A-I, B-II, C-III, D-IV.",
      hi: "गोले की त्रिज्या R = √(u² + v² + w² - d)। (A) R = √49 = 7; (B) R = √25 = 5; (C) R = √9 = 3; (D) R = √1 = 1। सही मिलान A-I, B-II, C-III, D-IV है।"
    }
  },
  {
    id: 48,
    questionId: '6801918984',
    category: 'Mathematical Methods',
    textEn: 'Match List I with List II (Quadric Surfaces):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (सतह का नाम और मानक रूप):',
    listI: [
      { label: 'A', textEn: 'Ellipsoid', textHi: 'एलिप्सॉइड (दीर्घवृत्तज)' },
      { label: 'B', textEn: 'Hyperboloid of one sheet', textHi: 'एक पृष्ठी हाइपरबोलॉइड' },
      { label: 'C', textEn: 'Hyperboloid of two sheets', textHi: 'द्वि पृष्ठी हाइपरबोलॉइड' },
      { label: 'D', textEn: 'Central conicoid', textHi: 'सेंट्रल कॉनिकॉइड' }
    ],
    listII: [
      { label: 'I', textEn: 'ax² + by² + cz² = 1', textHi: 'ax² + by² + cz² = 1' },
      { label: 'II', textEn: 'x²/a² - y²/b² - z²/c² = 1', textHi: 'x²/a² - y²/b² - z²/c² = 1' },
      { label: 'III', textEn: 'x²/a² + y²/b² - z²/c² = 1', textHi: 'x²/a² + y²/b² - z²/c² = 1' },
      { label: 'IV', textEn: 'x²/a² + y²/b² + z²/c² = 1', textHi: 'x²/a² + y²/b² + z²/c² = 1' }
    ],
    options: [
      { id: 1, optionId: '68019135389', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135390', textEn: '(A)-(I), (B)-(III), (C)-(II), (D)-(IV)' },
      { id: 3, optionId: '68019135391', textEn: '(A)-(IV), (B)-(II), (C)-(I), (D)-(III)' },
      { id: 4, optionId: '68019135392', textEn: '(A)-(IV), (B)-(III), (C)-(II), (D)-(I)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Ellipsoid: x²/a² + y²/b² + z²/c² = 1 (A-IV). Hyperboloid of one sheet: x²/a² + y²/b² - z²/c² = 1 (B-III). Hyperboloid of two sheets: x²/a² - y²/b² - z²/c² = 1 (C-II). Central conicoid in general standard form: ax² + by² + cz² = 1 (D-I). Match: (A)-(IV), (B)-(III), (C)-(II), (D)-(I).",
      hi: "दीर्घवृत्तज: x²/a² + y²/b² + z²/c² = 1 (A-IV); एक पृष्ठीय: एक ऋणात्मक चिह्न (B-III); द्वि पृष्ठीय: दो ऋणात्मक चिह्न (C-II); केंद्रीय शांकवज: ax² + by² + cz² = 1 (D-I)।"
    }
  },
  {
    id: 49,
    questionId: '6801918985',
    category: 'Mathematical Methods',
    textEn: "Given below are two statements:\nStatement (I): Every homogeneous equation of second degree in x, y and z represents a cone whose vertex is at the origin.\nStatement (II): If two equations representing the guiding curve are such that the one equation is of the first degree then required cone with vertex at the origin is obtained by making the other equation homogeneous with the help of first equation.\nIn light of the above statements, choose the most appropriate answer:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): x, y और z में द्वितीय डिग्री (द्विघात) का प्रत्येक समांगी समीकरण एक शंकु का प्रतिनिधित्व करता है जिसका शीर्ष मूल बिंदु पर है।\nकथन (II): यदि मार्गदर्शक वक्र का प्रतिनिधित्व करने वाले दो समीकरण ऐसे हैं कि एक समीकरण पहली डिग्री (प्रथमघात) का है तो मूल बिंदु पर शीर्ष के साथ आवश्यक शंकु पहले समीकरण की सहायता से दूसरे समीकरण को समांगी बनाकर प्राप्त किया जाता है।\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135393', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135394', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135395', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135396', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Both statements are fundamental theorems of 3D analytical geometry: (I) ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 always represents a cone with vertex at (0,0,0). (II) Homogenizing the second-degree guiding curve with a linear plane equation lx + my + nz = 1 directly gives the cone equation through the origin.",
      hi: "त्रिविमीय ज्यामिति के अनुसार: x, y, z में द्वितीय घात का प्रत्येक समघाती समीकरण मूल बिंदु पर शीर्ष वाले शंकु को निरूपित करता है (कथन I सत्य)। समघातीकरण की विधि से शंकु का समीकरण प्राप्त होता है (कथन II सत्य)।"
    }
  },
  {
    id: 50,
    questionId: '6801918986',
    category: 'Mathematical Methods',
    textEn: "Solve the following differential equation by method of Laplace transform:\ny''' + 2y'' - y' - 2y = 0 given that y(0) = y'(0) = 0 and y''(0) = 6",
    textHi: "लाप्लास रूपान्तर की विधि द्वारा निम्नलिखित अवकल समीकरण को हल करें:\ny''' + 2y'' - y' - 2y = 0 दिया गया है कि y(0) = y'(0) = 0 और y''(0) = 6",
    options: [
      { id: 1, optionId: '68019135397', textEn: 'y(t) = e^t - 3e^-t + 2e^-2t', textHi: 'y(t) = e^t - 3e^-t + 2e^-2t' },
      { id: 2, optionId: '68019135398', textEn: 'y(t) = e^t + e^-t + 2e^-2t', textHi: 'y(t) = e^t + e^-t + 2e^-2t' },
      { id: 3, optionId: '68019135399', textEn: 'y(t) = 2e^t + 3e^-t - 2e^-2t', textHi: 'y(t) = 2e^t + 3e^-t - 2e^-2t' },
      { id: 4, optionId: '68019135400', textEn: 'y(t) = 2e^t + sin t - cos 3t', textHi: 'y(t) = 2e^t + sin t - cos 3t' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Laplace transform: (s³ + 2s² - s - 2) Y(s) = y''(0) = 6. Characteristic polynomial factors as (s - 1)(s + 1)(s + 2). Using partial fractions: 6 / [(s - 1)(s + 1)(s + 2)] = 1/(s - 1) - 3/(s + 1) + 2/(s + 2). Taking inverse Laplace transform gives y(t) = e^t - 3e^-t + 2e^-2t.",
      hi: "लाप्लास रूपांतरण से: Y(s) = 6 / [(s-1)(s+1)(s+2)] = 1/(s-1) - 3/(s+1) + 2/(s+2)। प्रतिलोम लाप्लास रूपांतरण से y(t) = e^t - 3e^-t + 2e^-2t प्राप्त होता है।",
      keyFormula: "y(t) = \\mathcal{L}^{-1}\\left\\{\\frac{6}{(s-1)(s+1)(s+2)}\\right\\} = e^t - 3e^{-t} + 2e^{-2t}"
    }
  }
];
