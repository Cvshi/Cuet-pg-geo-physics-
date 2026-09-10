import { Question } from '../types';

export const questionsPart1: Question[] = [
  {
    id: 1,
    questionId: '6801918937',
    category: 'Optics & Waves',
    textEn: "The shape of air film formed between the plano-convex lens and the glass slab in Newton's ring experiment is of-",
    textHi: "न्यूटन के वलय प्रयोग में समतल-उत्तल (प्लेनो-कॉन्वेक्स) लेंस और कांच के स्लैब (पट्टिका) के बीच बनी वायु फिल्म का आकार होता है-",
    options: [
      { id: 1, optionId: '68019135201', textEn: 'Rectangular shape', textHi: 'आयताकार आकृति का' },
      { id: 2, optionId: '68019135202', textEn: 'Uniform thickness', textHi: 'एकसमान मोटाई का' },
      { id: 3, optionId: '68019135203', textEn: 'Wedge Shape', textHi: 'वेज (पन्नी) आकृति का / फानाकार' },
      { id: 4, optionId: '68019135204', textEn: 'No air film is formed', textHi: 'कोई एयर फिल्म नहीं बनती है' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "In Newton's rings experiment, the curved surface of a plano-convex lens of large radius of curvature rests on a flat glass plate. The thickness of the enclosed air film is zero at the point of contact and increases gradually outwards in all directions, forming a wedge-shaped circular film of increasing thickness.",
      hi: "न्यूटन के वलय प्रयोग में समतल-उत्तल लेंस की वक्र सतह एक सपाट कांच की पट्टिका पर रखी जाती है। संपर्क बिंदु पर वायु फिल्म की मोटाई शून्य होती है और बाहर की ओर जाने पर धीरे-धीरे बढ़ती है, जिससे यह वेज (फानाकार) आकृति बनाती है।",
      keyFormula: "t = R - \\sqrt{R^2 - r^2} \\approx \\frac{r^2}{2R}"
    }
  },
  {
    id: 2,
    questionId: '6801918938',
    category: 'Mechanics & Relativity',
    textEn: 'Match List I with List II:',
    textHi: 'सूची I का सूची II से मिलान कीजिए:',
    listI: [
      { label: 'A', textEn: 'The linear momentum of the system remains constant', textHi: 'एक निकाय का रैखिक संवेग स्थिर रहता है' },
      { label: 'B', textEn: 'The Angular momentum of the system remains constant', textHi: 'एक निकाय का कोणीय संवेग स्थिर रहता है' },
      { label: 'C', textEn: 'Inertial frame', textHi: 'जड़त्वीय फ्रेम' },
      { label: 'D', textEn: 'Non inertial frame', textHi: 'अजड़त्वीय फ्रेम' }
    ],
    listII: [
      { label: 'I', textEn: 'The frames relative to which an unaccelerated body appear to be unaccelerated', textHi: 'वे फ्रेम जिनके सापेक्ष एक अत्वरित पिंड अत्वरित प्रतीत होता है' },
      { label: 'II', textEn: 'The frames relative to which an unaccelerated body appear to be accelerated', textHi: 'वे फ्रेम जिनके सापेक्ष एक अत्वरित पिंड त्वरित प्रतीत होता है' },
      { label: 'III', textEn: 'The external torque acting on a system of particels is zero', textHi: 'कणों के एक निकाय पर कार्य करने वाला बाहरी बल आघूर्ण शून्य है' },
      { label: 'IV', textEn: 'The net External force acting on a system of particles is zero', textHi: 'कणों के एक निकाय पर कार्य करने वाला शुद्ध बाह्य बल शून्य है' }
    ],
    options: [
      { id: 1, optionId: '68019135205', textEn: 'A-III, B-IV, C-I, D-II' },
      { id: 2, optionId: '68019135206', textEn: 'A-IV, B-III, C-I, D-II' },
      { id: 3, optionId: '68019135207', textEn: 'A-IV, B-III, C-II, D-I' },
      { id: 4, optionId: '68019135208', textEn: 'A-III, B-I, C-IV, D-II' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "From Newton's laws: (A) dp/dt = F_ext = 0 implies linear momentum is constant -> IV. (B) dL/dt = tau_ext = 0 implies angular momentum is constant -> III. (C) Inertial frames are unaccelerated frames where Newton's laws hold directly -> I. (D) Non-inertial frames are accelerated frames -> II.",
      hi: "न्यूटन के नियमानुसार: शुद्ध बाह्य बल शून्य होने पर रैखिक संवेग संरक्षित रहता है (A-IV); बाह्य बल आघूर्ण शून्य होने पर कोणीय संवेग संरक्षित रहता है (B-III); जड़त्वीय फ्रेम में अत्वरित पिंड अत्वरित रहता है (C-I); अजड़त्वीय फ्रेम त्वरित होता है (D-II)।"
    }
  },
  {
    id: 3,
    questionId: '6801918939',
    category: 'Electrodynamics & EM',
    textEn: 'Match List I with List II (Maxwell Equations):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (मैक्सवेल समीकरण):',
    listI: [
      { label: 'A', textEn: "Maxwell's First Equation", textHi: 'मैक्सवेल का पहला समीकरण' },
      { label: 'B', textEn: "Maxwell's Second Equation", textHi: 'मैक्सवेल का दूसरा समीकरण' },
      { label: 'C', textEn: "Maxwell's Third Equation", textHi: 'मैक्सवेल का तीसरा समीकरण' },
      { label: 'D', textEn: "Maxwell's Fourth Equation", textHi: 'मैक्सवेल का चौथा समीकरण' }
    ],
    listII: [
      { label: 'I', textEn: "Modified Ampere's Law", textHi: "एम्पीयर का संशोधित नियम" },
      { label: 'II', textEn: "Faraday's Laws of Electromagnetic Induction", textHi: "फैराडे का विद्युत चुम्बकीय प्रेरण का नियम" },
      { label: 'III', textEn: 'Gauss Law in electrostatics', textHi: 'स्थिरवैद्युतिकी में गौस का नियम' },
      { label: 'IV', textEn: 'Gauss Law in magnetostatics', textHi: 'स्थिरचुंबकिकी में गौस का नियम' }
    ],
    options: [
      { id: 1, optionId: '68019135209', textEn: 'A-I, B-IV, C-II, D-III' },
      { id: 2, optionId: '68019135210', textEn: 'A-III, B-II, C-IV, D-I' },
      { id: 3, optionId: '68019135211', textEn: 'A-I, B-II, C-III, D-IV' },
      { id: 4, optionId: '68019135212', textEn: 'A-III, B-IV, C-II, D-I' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "1st Equation: div D = rho (Gauss's law in electrostatics, III). 2nd Equation: div B = 0 (Gauss's law in magnetostatics, IV). 3rd Equation: curl E = -dB/dt (Faraday's law of induction, II). 4th Equation: curl H = J + dD/dt (Modified Ampere's law, I).",
      hi: "पहला समीकरण: स्थिरवैद्युतिकी में गौस नियम (III); दूसरा समीकरण: स्थिरचुंबकिकी में गौस नियम div B = 0 (IV); तीसरा समीकरण: फैराडे का प्रेरण नियम curl E = -dB/dt (II); चौथा समीकरण: मैक्सवेल-एम्पीयर संशोधित नियम (I)।",
      keyFormula: "\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0,\\; \\nabla \\cdot \\mathbf{B} = 0,\\; \\nabla \\times \\mathbf{E} = -\\partial\\mathbf{B}/\\partial t,\\; \\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0\\partial\\mathbf{E}/\\partial t"
    }
  },
  {
    id: 4,
    questionId: '6801918940',
    category: 'Thermodynamics & Stat Mech',
    textEn: "The efficiency of the Carnot's Engine working between the steam point and the ice point is",
    textHi: "भाप बिंदु और हिम बिंदु के बीच काम करने वाले कार्नो के इंजन की दक्षता है",
    options: [
      { id: 1, optionId: '68019135213', textEn: '26.8%', textHi: '26.8%' },
      { id: 2, optionId: '68019135214', textEn: '2.68%', textHi: '2.68%' },
      { id: 3, optionId: '68019135215', textEn: '62.8%', textHi: '62.8%' },
      { id: 4, optionId: '68019135216', textEn: '82.6%', textHi: '82.6%' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Steam point T_hot = 100°C = 373.15 K. Ice point T_cold = 0°C = 273.15 K. Efficiency eta = 1 - (T_cold / T_hot) = 1 - (273.15 / 373.15) = 100 / 373.15 ≈ 0.26798 = 26.8%.",
      hi: "भाप बिंदु T_h = 373 K, हिम बिंदु T_c = 273 K। दक्षता = 1 - (273 / 373) = 100 / 373 ≈ 26.8%।",
      keyFormula: "\\eta = 1 - \\frac{T_{cold}}{T_{hot}} = \\frac{100}{373.15} \\approx 26.8\\%"
    }
  },
  {
    id: 5,
    questionId: '6801918941',
    category: 'Thermodynamics & Stat Mech',
    textEn: "Match List I with List II (Maxwell's Thermodynamic Relations):",
    textHi: "सूची I का सूची II से मिलान कीजिए (मैक्सवेल के ऊष्मागतिक संबंध):",
    listI: [
      { label: 'A', textEn: '(∂S/∂P)_T', textHi: '(∂S/∂P)_T' },
      { label: 'B', textEn: '(∂T/∂V)_S', textHi: '(∂T/∂V)_S' },
      { label: 'C', textEn: '(∂T/∂P)_S', textHi: '(∂T/∂P)_S' },
      { label: 'D', textEn: '(∂S/∂V)_T', textHi: '(∂S/∂V)_T' }
    ],
    listII: [
      { label: 'I', textEn: '(∂P/∂T)_V', textHi: '(∂P/∂T)_V' },
      { label: 'II', textEn: '(∂V/∂S)_P', textHi: '(∂V/∂S)_P' },
      { label: 'III', textEn: '-(∂V/∂T)_P', textHi: '-(∂V/∂T)_P' },
      { label: 'IV', textEn: '-(∂P/∂S)_V', textHi: '-(∂P/∂S)_V' }
    ],
    options: [
      { id: 1, optionId: '68019135217', textEn: 'A-III, B-IV, C-II, D-I' },
      { id: 2, optionId: '68019135218', textEn: 'A-II, B-IV, C-III, D-I' },
      { id: 3, optionId: '68019135219', textEn: 'A-I, B-II, C-III, D-IV' },
      { id: 4, optionId: '68019135220', textEn: 'A-IV, B-III, C-II, D-I' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "From Maxwell's four thermodynamic relations derived from state functions U, H, F, G: (∂S/∂P)_T = -(∂V/∂T)_P (from Gibbs free energy G, A-III); (∂T/∂V)_S = -(∂P/∂S)_V (from internal energy U, B-IV); (∂T/∂P)_S = (∂V/∂S)_P (from enthalpy H, C-II); (∂S/∂V)_T = (∂P/∂T)_V (from Helmholtz free energy F, D-I).",
      hi: "चार मैक्सवेल संबंध: (∂S/∂P)_T = -(∂V/∂T)_P (A-III); (∂T/∂V)_S = -(∂P/∂S)_V (B-IV); (∂T/∂P)_S = (∂V/∂S)_P (C-II); (∂S/∂V)_T = (∂P/∂T)_V (D-I)।"
    }
  },
  {
    id: 6,
    questionId: '6801918942',
    category: 'Thermodynamics & Stat Mech',
    textEn: 'Which of the following is true for reversible process?',
    textHi: 'निम्नलिखित में से कौन सा उत्क्रमणीय प्रक्रम के लिए सही है?',
    options: [
      { id: 1, optionId: '68019135221', textEn: 'The pressure and temperature of the working substance and the surroundings should differ at any stage of the operation of cycle.', textHi: 'चक्र के संचालन के किसी भी चरण में कार्यशील पदार्थ और परिवेश का दबाव और तापमान भिन्न होना चाहिए।' },
      { id: 2, optionId: '68019135222', textEn: 'The process should take place very slowly during operation', textHi: 'संचालन के दौरान प्रक्रिया बहुत धीरे से होनी चाहिए।' },
      { id: 3, optionId: '68019135223', textEn: 'The process should take place very fast during operation', textHi: 'संचालन के दौरान प्रक्रिया बहुत तेजी से होनी चाहिए।' },
      { id: 4, optionId: '68019135224', textEn: 'Energy should be lost due to conduction or radiation during operation of the cycle.', textHi: 'चक्र के संचालन के दौरान संवहन या विकिरण के कारण ऊर्जा का क्षय होना चाहिए।' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "A reversible process is a quasi-static process that occurs infinitely slowly so that the system remains in thermodynamic equilibrium with its surroundings at all intermediate stages, with no dissipative effects like friction or unrestrained expansion.",
      hi: "एक उत्क्रमणीय प्रक्रिया अर्ध-स्थैतिक (क्वासी-स्टैटिक) होती है जो अत्यंत धीमी गति से संपन्न होती है ताकि प्रणाली हर क्षण ऊष्मागतिक साम्यावस्था में बनी रहे।"
    }
  },
  {
    id: 7,
    questionId: '6801918943',
    category: 'Modern Physics & Quantum',
    textEn: "If the radiation emitted by the star has a maximum intensity at a wavelength of 446 nm, its surface temperature will be nearly equal to ...... (Wien's constant = 2.9 × 10^-3 m·K)",
    textHi: "यदि एक तारे द्वारा उत्सर्जित विकिरण की अधिकतम तीव्रता 446 nm की तरंग दैर्घ्य पर है, तो उसकी सतह का तापमान लगभग बराबर होगा...... (वीन नियतांक = 2.9 × 10^-3 m·K)",
    options: [
      { id: 1, optionId: '68019135225', textEn: '650 K', textHi: '650 K' },
      { id: 2, optionId: '68019135226', textEn: '65 K', textHi: '65 K' },
      { id: 3, optionId: '68019135227', textEn: '6500 K', textHi: '6500 K' },
      { id: 4, optionId: '68019135228', textEn: '65000 K', textHi: '65000 K' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "According to Wien's Displacement Law: λ_max · T = b => T = b / λ_max = (2.9 × 10^-3 m·K) / (446 × 10^-9 m) = (2.9 / 446) × 10^6 ≈ 6502 K ≈ 6500 K.",
      hi: "वीन के विस्थापन नियमानुसार: T = b / λ_max = (2.9 × 10^-3) / (446 × 10^-9) = 6502 K ≈ 6500 K।",
      keyFormula: "T = \\frac{b}{\\lambda_{max}} = \\frac{2.9 \\times 10^{-3}}{446 \\times 10^{-9}} \\approx 6500\\text{ K}"
    }
  },
  {
    id: 8,
    questionId: '6801918944',
    category: 'Modern Physics & Quantum',
    textEn: "Ultraviolet light of wavelength 350 nm and intensity 1.00 W·m^-2 falls on a potassium surface. The maximum kinetic energy of the photoelectron is",
    textHi: "350 nm तरंगदैर्घ्य और 1.00 W·m^-2 तीव्रता का पराबैंगनी प्रकाश पोटेशियम की सतह पर गिरता है। फोटोइलेक्ट्रॉन (प्रकाश इलेक्ट्रॉन) की अधिकतम गतिज ऊर्जा है",
    options: [
      { id: 1, optionId: '68019135229', textEn: '3.3 eV', textHi: '3.3 eV' },
      { id: 2, optionId: '68019135230', textEn: '1.9 eV', textHi: '1.9 eV' },
      { id: 3, optionId: '68019135231', textEn: '3.2 eV', textHi: '3.2 eV' },
      { id: 4, optionId: '68019135232', textEn: '1.3 eV', textHi: '1.3 eV' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Photon energy E = hc / λ = (1240 eV·nm) / (350 nm) ≈ 3.54 eV. The work function of potassium Φ ≈ 2.25 eV. Einstein's photoelectric equation gives K_max = E - Φ = 3.54 eV - 2.25 eV ≈ 1.29 eV ≈ 1.3 eV. Notice that intensity only affects photon flux/current, not K_max.",
      hi: "फोटॉन ऊर्जा E = hc/λ ≈ 1240 / 350 ≈ 3.54 eV। पोटेशियम का कार्य फलन Φ ≈ 2.25 eV होता है। K_max = 3.54 - 2.25 ≈ 1.3 eV।",
      keyFormula: "K_{max} = h\\nu - \\Phi = \\frac{hc}{\\lambda} - \\Phi \\approx 3.54 - 2.25 = 1.29\\text{ eV} \\approx 1.3\\text{ eV}"
    }
  },
  {
    id: 9,
    questionId: '6801918945',
    category: 'Modern Physics & Quantum',
    textEn: "Which of the following statements are true for Compton effect?\n(A) The wavelength of the scattered X-rays is larger than the incident X-rays\n(B) The change in the wavelength of the incident and scattered X-rays depends on the intensity of the incident X-rays.\n(C) The change in the wavelength of the incident and scattered X-rays depends on the scattering angle.\n(D) The wavelength of the scattered X-rays is smaller than the incident X-rays",
    textHi: "निम्नलिखित में से कौन से कथन कॉम्पटन प्रभाव के लिए सही हैं?\n(A) प्रकीर्णित एक्स-किरणों की तरंगदैर्घ्य आपतित एक्स-किरणों से बड़ी होती है।\n(B) आपतित एवं प्रकीर्णित एक्स-किरणों की तरंगदैर्घ्य में परिवर्तन आपतित एक्स-किरणों की तीव्रता पर निर्भर करता है।\n(C) आपतित एवं प्रकीर्णित एक्स-किरणों की तरंगदैर्घ्य में परिवर्तन प्रकीर्णित कोण पर निर्भर करता है।\n(D) प्रकीर्णित एक्स-किरणों की तरंगदैर्घ्य आपतित X-rays की तुलना में छोटी होती है।",
    options: [
      { id: 1, optionId: '68019135233', textEn: 'A and B are correct', textHi: 'A और B सही हैं' },
      { id: 2, optionId: '68019135234', textEn: 'B and C are correct', textHi: 'B और C सही हैं' },
      { id: 3, optionId: '68019135235', textEn: 'A and D are correct', textHi: 'A और D सही हैं' },
      { id: 4, optionId: '68019135236', textEn: 'A and C are correct', textHi: 'A और C सही हैं' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Compton shift formula is Δλ = λ' - λ = (h / m_e c)(1 - cos θ). Since (1 - cos θ) ≥ 0, λ' ≥ λ (scattered photon wavelength is greater). The shift depends solely on the scattering angle θ, not on the intensity or initial wavelength of incident X-rays. Thus (A) and (C) are correct.",
      hi: "कॉम्पटन प्रभाव में Δλ = (h/m_e c)(1 - cos θ)। प्रकीर्णित किरण की तरंगदैर्घ्य आपतित से अधिक होती है (A सत्य), तथा यह केवल प्रकीर्णन कोण θ पर निर्भर करता है, तीव्रता पर नहीं (C सत्य)।",
      keyFormula: "\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)"
    }
  },
  {
    id: 10,
    questionId: '6801918946',
    category: 'Thermodynamics & Stat Mech',
    textEn: "Clausius-Clapeyron's latent heat equation is represented as",
    textHi: "क्लॉसियस-क्लैपेरॉन के गुप्त ऊष्मा समीकरण को इस प्रकार दर्शाया गया है",
    options: [
      { id: 1, optionId: '68019135237', textEn: '(∂P/∂T)_V = L / [T(V₂ - V₁)]', textHi: '(∂P/∂T)_V = L / [T(V₂ - V₁)]' },
      { id: 2, optionId: '68019135238', textEn: '(∂T/∂P)_V = L / [T(V₂ - V₁)]', textHi: '(∂T/∂P)_V = L / [T(V₂ - V₁)]' },
      { id: 3, optionId: '68019135239', textEn: '(∂V/∂T)_P = L / [T(V₂ - V₁)]', textHi: '(∂V/∂T)_P = L / [T(V₂ - V₁)]' },
      { id: 4, optionId: '68019135240', textEn: '(∂P/∂T)_V = T / [L(V₂ - V₁)]', textHi: '(∂P/∂T)_V = T / [L(V₂ - V₁)]' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The Clausius-Clapeyron equation relates the slope of the coexistence curve (dP/dT) during a phase change to the latent heat L, temperature T, and volume change (V₂ - V₁): dP/dT = L / [T(V₂ - V₁)].",
      hi: "क्लॉसियस-क्लैपेरॉन समीकरण प्रावस्था संक्रमण में वाष्प दाब ढाल को गुप्त ऊष्मा L, तापमान T और आयतन परिवर्तन (V₂ - V₁) से जोड़ता है: dP/dT = L / [T(V₂ - V₁)]।",
      keyFormula: "\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}"
    }
  },
  {
    id: 11,
    questionId: '6801918947',
    category: 'Modern Physics & Quantum',
    textEn: "X-ray wavelength of 10.0 pm are scattered from a target in Compton experiment. The wavelength of the X-rays scattered through 45° is .... (rest mass of electron = 9.11 × 10^-31 Kg, planck's constant = 6.64 × 10^-34 J·Sec and speed of light = 3 × 10^8 m/sec)",
    textHi: "कॉम्पटन प्रयोग में एक लक्ष्य से 10.0 pm की एक्स-किरण तरंगदैर्घ्य प्रकीर्णित हुई हैं। 45° से प्रकीर्णित एक्स-किरणों की तरंगदैर्घ्य है..... (इलेक्ट्रॉन विराम द्रव्यमान = 9.11 × 10^-31 Kg, प्लैंक का स्थिरांक = 6.64 × 10^-34 J·Sec और प्रकाश की गति = 3 × 10^8 m/sec)",
    options: [
      { id: 1, optionId: '68019135241', textEn: '1.07 pm', textHi: '1.07 pm' },
      { id: 2, optionId: '68019135242', textEn: '70.1 pm', textHi: '70.1 pm' },
      { id: 3, optionId: '68019135243', textEn: '10.7 pm', textHi: '10.7 pm' },
      { id: 4, optionId: '68019135244', textEn: '107 pm', textHi: '107 pm' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Compton wavelength λ_c = h / (m_e c) = 2.43 pm. Δλ = λ_c (1 - cos 45°) = 2.43 pm × (1 - 0.7071) = 2.43 × 0.2929 ≈ 0.71 pm. Therefore λ' = λ + Δλ = 10.0 pm + 0.71 pm = 10.71 pm ≈ 10.7 pm.",
      hi: "λ_c = h/(m_e c) = 2.43 pm। Δλ = 2.43(1 - cos 45°) = 2.43 × 0.293 = 0.71 pm। अत: नई तरंगदैर्घ्य λ' = 10.0 + 0.71 = 10.71 pm ≈ 10.7 pm।",
      keyFormula: "\\lambda' = \\lambda + \\frac{h}{m_e c}(1 - \\cos 45^\\circ) = 10.0 + 2.43(0.293) = 10.71\\text{ pm}"
    }
  },
  {
    id: 12,
    questionId: '6801918948',
    category: 'Thermodynamics & Stat Mech',
    textEn: "Which of the following statements are correct for Second law of thermodynamics.\n(A) It is impossible to derive a continuous supply of energy from a body by cooling it below the temperature of its surrounding.\n(B) It is possible to derive a continuous supply of energy from a body by cooling it below the temperature of its surrounding.\n(C) It is impossible for a self acting machine, unaided by any external agency to convey heat from a body at lower temperature to another body at higher temperature.\n(D) It is possible for a self acting machine, unaided by any external agency to convey heat from a body at lower temperature to another body at higher temperature.",
    textHi: "निम्नलिखित में से कौन सा कथन ऊष्मागतिकी के द्वितीय नियम के लिए सही है?\n(A) अपने आसपास के तापमान से कम तापमान पर ठंडा करके किसी पिंड से ऊर्जा की निरंतर आपूर्ति प्राप्त करना असंभव है।\n(B) अपने आसपास के तापमान से कम तापमान पर ठंडा करके किसी पिंड ऊर्जा की निरंतर आपूर्ति प्राप्त करना संभव है।\n(C) एक स्वचालित मशीन के लिए, किसी अन्य बाह्य स्रोत की सहायता के बिना, निम्न तापमान की किसी वस्तु से उच्च तापमान की किसी अन्य वस्तु को ऊष्मा पहुँचाना असंभव है।\n(D) एक स्वचालित मशीन के लिए, किसी अन्य बाह्य स्रोत की सहायता के बिना, निम्न तापमान की किसी वस्तु से उच्च तापमान की किसी अन्य वस्तु को ऊष्मा पहुँचाना संभव है।",
    options: [
      { id: 1, optionId: '68019135245', textEn: '(A) and (B) only', textHi: 'केवल (A) और (B)' },
      { id: 2, optionId: '68019135246', textEn: '(B) and (C) only', textHi: 'केवल (B) और (C)' },
      { id: 3, optionId: '68019135247', textEn: '(B) and (D) only', textHi: 'केवल (B) और (D)' },
      { id: 4, optionId: '68019135248', textEn: '(A) and (C) only', textHi: 'केवल (A) और (C)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "(A) is the Kelvin-Planck statement of the 2nd Law (no cyclic engine can extract heat from a single reservoir and convert it completely to work). (C) is the Clausius statement of the 2nd Law (heat cannot spontaneously flow from cold to hot without external work). Both statements (A) and (C) are classic formulations of the Second Law of Thermodynamics.",
      hi: "कथन (A) केल्विन-प्लांक कथन है और कथन (C) क्लॉसियस कथन है। दोनों ही ऊष्मागतिकी के द्वितीय नियम के प्रामाणिक कथन हैं।",
      keyFormula: "\\Delta S_{universe} \\ge 0"
    }
  },
  {
    id: 13,
    questionId: '6801918949',
    category: 'Thermodynamics & Stat Mech',
    textEn: "10 gm of water at 100°C is converted into steam. At the same temperature, the change in entropy will be ........ (The latent heat of steam = 540 cal/gm).",
    textHi: "100 डिग्री सेल्सियस पर 10 ग्राम पानी को वाष्प में परिवर्तित किया जाता है। उसी तापमान पर एन्ट्रॉपी में परिवर्तन होगा ...... (वाष्प की गुप्त ऊष्मा = 540 कैलोरी/ग्राम)।",
    options: [
      { id: 1, optionId: '68019135249', textEn: '14.47 cal/K', textHi: '14.47 cal/K' },
      { id: 2, optionId: '68019135250', textEn: '144.7 cal/K', textHi: '144.7 cal/K' },
      { id: 3, optionId: '68019135251', textEn: '74.47 cal/K', textHi: '74.47 cal/K' },
      { id: 4, optionId: '68019135252', textEn: '47.47 cal/K', textHi: '47.47 cal/K' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Heat absorbed Q = m · L = 10 gm × 540 cal/gm = 5400 cal. Absolute temperature T = 100 + 273.15 = 373.15 K. Change in entropy ΔS = Q / T = 5400 / 373.15 ≈ 14.47 cal/K.",
      hi: "अवशोषित ऊष्मा Q = m × L = 10 × 540 = 5400 cal। तापमान T = 100 + 273.15 = 373.15 K। एन्ट्रॉपी परिवर्तन ΔS = 5400 / 373.15 ≈ 14.47 cal/K।",
      keyFormula: "\\Delta S = \\frac{m L_{vap}}{T} = \\frac{10 \\times 540}{373.15} \\approx 14.47\\text{ cal/K}"
    }
  },
  {
    id: 14,
    questionId: '6801918950',
    category: 'Modern Physics & Quantum',
    textEn: "Higher energy photons are scattered from electrons initially at rest. Assume the photons are back scattered and their energies are much higher than the electron's rest mass energy. The wavelength shift will be .......... (h/m_e c = 2.43 × 10^-12 m, h = planck constant, m_e = mass of electron and c = speed of light)",
    textHi: "उच्च ऊर्जा वाले फोटॉन्स को, प्रारम्भ में स्थिर इलेक्ट्रॉनों से प्रकीर्णित किया जाता हैं। मान लीजिए कि फोटॉन वापस प्रकीर्णित हुए हैं और उनकी ऊर्जाएँ इलेक्ट्रॉन की स्थिर द्रव्यमान ऊर्जा की तुलना में बहुत अधिक है, तो तरंगदैर्घ्य परिवर्तन होगा ..... ((h/m_e c = 2.43 × 10^-12 m, h = प्लैंक स्थिरांक, m_e = इलेक्ट्रॉन का द्रव्यमान और c = प्रकाश की गति)",
    options: [
      { id: 1, optionId: '68019135253', textEn: '4.86 × 10^-10 m', textHi: '4.86 × 10^-10 m' },
      { id: 2, optionId: '68019135254', textEn: '48.6 × 10^-12 m', textHi: '48.6 × 10^-12 m' },
      { id: 3, optionId: '68019135255', textEn: '4.86 × 10^-12 m', textHi: '4.86 × 10^-12 m' },
      { id: 4, optionId: '68019135256', textEn: '0.486 × 10^-12 m', textHi: '0.486 × 10^-12 m' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Back scattering implies scattering angle θ = 180°. Compton shift formula: Δλ = (h / m_e c)(1 - cos 180°) = λ_c(1 - (-1)) = 2 λ_c = 2 × (2.43 × 10^-12 m) = 4.86 × 10^-12 m.",
      hi: "वापस प्रकीर्णित (बैक स्कैटर्ड) होने का अर्थ है θ = 180°। cos 180° = -1, अतः Δλ = 2 × λ_c = 2 × 2.43 × 10^-12 m = 4.86 × 10^-12 m।",
      keyFormula: "\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos 180^\\circ) = 2 \\times 2.43 \\times 10^{-12} = 4.86 \\times 10^{-12}\\text{ m}"
    }
  },
  {
    id: 15,
    questionId: '6801918951',
    category: 'Electronics & Semiconductors',
    textEn: "Which of the following statements are correct for a P-N junction diode\n(A) For Forward Biasing, the P-side of a diode is connected with positive terminal and N-side of the diode is connected with negative terminal of the battery\n(B) For Forward Biasing, the P-side of a diode is connected with negative terminal and N-side of the diode is connected with positive terminal of the battery\n(C) For Reverse Biasing, the P-side of a diode is connected with negative terminal and N-side of the diode is connected with positive terminal of the battery\n(D) For Reverse Biasing, the P-side of a diode is connected with positive terminal and N-side of the diode is connected with negative terminal of the battery",
    textHi: "निम्नलिखित में से कौन से कथन पी-एन जंक्शन डायोड के लिए सही हैं?\n(A) फॉरवर्ड (अग्रदिशिक) बायसिंग के लिए, डायोड का पी-साइड बैटरी के धनात्मक सिरे से जुड़ा होता है और डायोड का एन-साइड बैटरी के ऋणात्मक सिरे से जुड़ा होता है।\n(B) फॉरवर्ड (अग्रदिशिक) बायसिंग के लिए, डायोड का पी-साइड बैटरी के ऋणात्मक सिरे से जुड़ा होता है और डायोड का एन-साइड बैटरी के धनात्मक सिरे टर्मिनल से जुड़ा होता है।\n(C) रिवर्स (पश्चदिशिक) बायसिंग के लिए, डायोड का पी-साइड बैटरी के ऋणात्मक सिरे से जुड़ा होता है और डायोड का एन-साइड बैटरी के धनात्मक सिरे से जुड़ा होता है।\n(D) रिवर्स (पश्चदिशिक) बायसिंग के लिए, डायोड का पी-साइड बैटरी के धनात्मक सिरे से जुड़ा होता है और डायोड का एन-साइड बैटरी के ऋणात्मक सिरे से जुड़ा होता है।",
    options: [
      { id: 1, optionId: '68019135257', textEn: '(A) and (B) only', textHi: 'केवल (A) और (B)' },
      { id: 2, optionId: '68019135258', textEn: '(A) and (D) only', textHi: 'केवल (A) और (D)' },
      { id: 3, optionId: '68019135259', textEn: '(A) and (C)', textHi: 'केवल (A) और (C)' },
      { id: 4, optionId: '68019135260', textEn: '(B), (C) and (D) only', textHi: 'केवल (B), (C) और (D)' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "In forward bias, P-type anode is connected to the battery's positive terminal and N-type cathode to negative (statement A). In reverse bias, P-side is connected to negative terminal and N-side to positive (statement C). Thus (A) and (C) are correct.",
      hi: "अग्र अभिनति में P-सिरा धनात्मक तथा N-सिरा ऋणात्मक से जुड़ता है (A)। पश्च अभिनति में P-सिरा ऋणात्मक तथा N-सिरा धनात्मक से जुड़ता है (C)। अतः (A) और (C) सही हैं।"
    }
  },
  {
    id: 16,
    questionId: '6801918952',
    category: 'Electrodynamics & EM',
    textEn: "In a LCR circuit, the current and emf in the circuit differ in phase by Ø, the value of Ø is given by",
    textHi: "एक LCR परिपथ में, धारा और विद्युत वाहक बल, फेस (कला) में Ø द्वारा भिन्न होते हैं, Ø का मान इस प्रकार दिया जाता है-",
    options: [
      { id: 1, optionId: '68019135261', textEn: 'Ø = tan^-1[(X_L - X_C)/R], where X_L and X_C are reactance and R is resistance', textHi: 'Ø = tan^-1[(X_L - X_C)/R], जहाँ X_L और X_C प्रतिघात हैं और R प्रतिरोध है' },
      { id: 2, optionId: '68019135262', textEn: 'Ø = tan^-1[(X_L + X_C)/R], where X_L and X_C are reactance and R is resistance', textHi: 'Ø = tan^-1[(X_L + X_C)/R], जहाँ X_L और X_C प्रतिघात हैं और R प्रतिरोध है' },
      { id: 3, optionId: '68019135263', textEn: 'Ø = tan^-1[(R)/(X_L - X_C)], where X_L and X_C are reactance and R is resistance', textHi: 'Ø = tan^-1[(R)/(X_L - X_C)], जहाँ X_L और X_C प्रतिघात हैं और R प्रतिरोध है' },
      { id: 4, optionId: '68019135264', textEn: 'Ø = tan^-1[(R)/(X_L + X_C)], where X_L and X_C are reactance and R is resistance', textHi: 'Ø = tan^-1[(R)/(X_L + X_C)], जहाँ X_L और X_C प्रतिघात हैं और R प्रतिरोध है' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In a series LCR AC circuit, impedance phasor diagram gives tan Ø = (V_L - V_C) / V_R = (X_L - X_C) / R. Thus phase difference Ø = tan^-1[(X_L - X_C)/R].",
      hi: "श्रेणी LCR परिपथ में प्रतिबाधा आरेख से: tan Ø = (X_L - X_C) / R। अतः कलांतर Ø = tan^-1[(X_L - X_C)/R]।",
      keyFormula: "\\tan\\phi = \\frac{X_L - X_C}{R} = \\frac{\\omega L - 1/(\\omega C)}{R}"
    }
  },
  {
    id: 17,
    questionId: '6801918953',
    category: 'Optics & Waves',
    textEn: "If the resonance (angular) frequency of an acoustic system is 300 Hz and half power frequencies are 150 Hz and 450 Hz respectively, the quality factor is",
    textHi: "यदि ध्वनिक निकाय की अनुनाद (कोणीय) आवृत्ति 300 हर्ट्ज है और अर्ध-शक्ति आवृत्तियाँ क्रमशः 150 हर्ट्ज और 450 हर्ट्ज हैं तो उसका विशेषता गुणांक है",
    options: [
      { id: 1, optionId: '68019135265', textEn: '1.25', textHi: '1.25' },
      { id: 2, optionId: '68019135266', textEn: '1.50', textHi: '1.50' },
      { id: 3, optionId: '68019135267', textEn: '1.0', textHi: '1.0' },
      { id: 4, optionId: '68019135268', textEn: '1.75', textHi: '1.75' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "The Quality factor Q = f_0 / Δf = f_0 / (f_2 - f_1) = 300 Hz / (450 Hz - 150 Hz) = 300 / 300 = 1.0.",
      hi: "गुणवत्ता कारक Q = f_0 / (f_2 - f_1) = 300 / (450 - 150) = 300 / 300 = 1.0।",
      keyFormula: "Q = \\frac{f_0}{\\Delta f} = \\frac{300}{450 - 150} = 1.0"
    }
  },
  {
    id: 18,
    questionId: '6801918954',
    category: 'Optics & Waves',
    textEn: "A Fraunhofer diffraction pattern is produced by a circular aperture of radius 0.05 cm at the focal plane of a convex lens of focal length 20 cm. The radius of first dark ring is (Assume wavelength to be 5 × 10^-5 cm)",
    textHi: "20 से. मी. फोकस लंबाई के उत्तल लेंस के फोकस तल पर 0.05 से. मी. त्रिज्या के एक वर्तुल द्वारक द्वारा एक फ्राउनहोफर विवर्तन पैटर्न निर्मित किया जाता है। पहले अदीप्त वलय की त्रिज्या है (मान लीजिए कि तरंगदैर्घ्य 5 × 10^-5 से. मी. है)",
    options: [
      { id: 1, optionId: '68019135269', textEn: '1.22 × 10^-3 cm', textHi: '1.22 × 10^-3 सेमी.' },
      { id: 2, optionId: '68019135270', textEn: '12.20 × 10^-3 cm', textHi: '12.20 × 10^-3 सेमी.' },
      { id: 3, optionId: '68019135271', textEn: '12.20 × 10^-2 cm', textHi: '12.20 × 10^-2 सेमी.' },
      { id: 4, optionId: '68019135272', textEn: '12.20 cm', textHi: '12.20 सेमी.' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Diameter of circular aperture D = 2r = 2 × 0.05 cm = 0.1 cm. First dark Airy ring angular radius θ = 1.22 λ / D. Linear radius r_ring = f · θ = (1.22 × λ × f) / D = (1.22 × 5 × 10^-5 cm × 20 cm) / 0.1 cm = 1.22 × 10^-2 cm = 12.20 × 10^-3 cm.",
      hi: "द्वारक का व्यास D = 2 × 0.05 = 0.1 cm। प्रथम अदीप्त वलय की त्रिज्या r = 1.22 λ f / D = (1.22 × 5×10^-5 × 20) / 0.1 = 12.20 × 10^-3 cm।",
      keyFormula: "r = \\frac{1.22 \\lambda f}{D} = \\frac{1.22 \\times (5\\times 10^{-5}) \\times 20}{0.1} = 12.20 \\times 10^{-3}\\text{ cm}"
    }
  },
  {
    id: 19,
    questionId: '6801918955',
    category: 'Optics & Waves',
    textEn: "Brewster's law can be expressed as",
    textHi: "ब्रूस्टर के नियम को इस प्रकार व्यक्त किया जा सकता है",
    options: [
      { id: 1, optionId: '68019135273', textEn: 'μ = tan r, where μ is refractive index and r is the angle of refraction', textHi: 'μ = tan r, यहाँ μ अपवर्तनांक है और r अपवर्तन कोण है' },
      { id: 2, optionId: '68019135274', textEn: 'tan i = 1/μ, where μ is refractive index and i is the polarizing angle', textHi: 'tan i = 1/μ, यहाँ μ अपवर्तनांक है और i ध्रुवीकरण कोण है' },
      { id: 3, optionId: '68019135275', textEn: 'cos r = μ where μ is refractive index and r is the angle of refraction', textHi: 'cos r = μ, यहाँ μ अपवर्तनांक है और r अपवर्तन कोण है' },
      { id: 4, optionId: '68019135276', textEn: 'μ = tan i, where μ is refractive index and i is the polarizing angle', textHi: 'μ = tan i, यहाँ μ अपवर्तनांक है और i ध्रुवीकरण कोण है' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Brewster's law states that when light is incident at the polarizing angle i_p, the tangent of this angle is equal to the refractive index of the reflecting medium: μ = tan(i_p), and reflected and refracted rays are perpendicular.",
      hi: "ब्रूस्टर के नियमानुसार जब प्रकाश ध्रुवण कोण i पर आपतित होता है, तो माध्यम का अपवर्तनांक ध्रुवण कोण की स्पर्शज्या (tan) के बराबर होता है: μ = tan i।",
      keyFormula: "\\mu = \\tan i_p"
    }
  },
  {
    id: 20,
    questionId: '6801918956',
    category: 'Optics & Waves',
    textEn: "In Fraunhofer N slit diffraction experiment, if the diffraction grating has 5000 lines/cm and the monochromatic light of wavelength of 5 × 10^-5 cm is used. The highest order spectrum which may be seen is",
    textHi: "फ्राउनहोफर N स्लिट विवर्तन प्रयोग में, यदि विवर्तन ग्रेटिंग 5000 रेखा/सेमी की है और 5 × 10^-5 सेमी की तरंग दैर्घ्य के एकवर्णी प्रकाश का उपयोग किया जाता है, तो उच्चतम कोटि का वर्णक्रम जो देखा जा सकता है",
    options: [
      { id: 1, optionId: '68019135277', textEn: '1', textHi: '1' },
      { id: 2, optionId: '68019135278', textEn: '2', textHi: '2' },
      { id: 3, optionId: '68019135279', textEn: '3', textHi: '3' },
      { id: 4, optionId: '68019135280', textEn: '4', textHi: '4' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Grating element d = (a + b) = 1 / 5000 cm = 2 × 10^-4 cm. Grating equation: d sin θ = n λ. For highest order, sin θ ≤ 1 => n_max ≤ d / λ = (2 × 10^-4 cm) / (5 × 10^-5 cm) = 20 / 5 = 4.",
      hi: "ग्रेटिंग नियतांक d = 1 / 5000 cm = 2 × 10^-4 cm। अधिकतम कोटि n_max ≤ d / λ = (2 × 10^-4) / (5 × 10^-5) = 4। अतः अधिकतम कोटि 4 देखी जा सकती है।",
      keyFormula: "n_{max} = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor = \\frac{2 \\times 10^{-4}}{5 \\times 10^{-5}} = 4"
    }
  },
  {
    id: 21,
    questionId: '6801918957',
    category: 'Mathematical Methods',
    textEn: "The function f(x) is said to be piecewise continuous, if it satisfies the following conditions (Dirichlet conditions) -\n(A) The function must have finite number of maxima and minima\n(B) The function must have a finite number of infinite discontinuities, in a period of one oscillation\n(C) The function must have infinite number of maxima and minima\n(D) The function must have a finite number of finite discontinuities, in a period of one oscillation",
    textHi: "फलन f(x) को पीसवाइज कंटीन्यूअस(सतत) कहा जाता है, यदि यह निम्नलिखित शर्तों को पूरा करता है -\n(A) फलन में उच्चिष्ठ और निम्निष्ठ की सीमित संख्या होनी चाहिए\n(B) फलन में एक दोलन की अवधि में अनंत असंततताओं की एक सीमित संख्या होनी चाहिए\n(C) फलन में उच्चिष्ठ और निम्निष्ठ की संख्या अनंत होनी चाहिए\n(D) फलन में एक दोलन की अवधि में परिमित असंततताओं की एक सीमित संख्या होनी चाहिए।",
    options: [
      { id: 1, optionId: '68019135281', textEn: '(A) and (D) only.', textHi: 'केवल (A) और (D)' },
      { id: 2, optionId: '68019135282', textEn: '(A) and (C) only.', textHi: 'केवल (A) और (C)' },
      { id: 3, optionId: '68019135283', textEn: '(B) and (C) only.', textHi: 'केवल (B) और (C)' },
      { id: 4, optionId: '68019135284', textEn: '(B) and (D) only.', textHi: 'केवल (B) और (D)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Dirichlet conditions for Fourier series expansion require that: 1. f(x) is single-valued and periodic; 2. f(x) has a finite number of finite discontinuities in any one period (D); 3. f(x) has a finite number of maxima and minima in any one period (A).",
      hi: "डिरिचलेट शर्तों के अनुसार फलन में केवल परिमित संख्या में उच्चिष्ठ/निम्निष्ठ होने चाहिए (A) तथा किसी आवर्त में असंततताएँ परिमित संख्या में एवं परिमित परिमाण की होनी चाहिए (D)।"
    }
  },
  {
    id: 22,
    questionId: '6801918958',
    category: 'Optics & Waves',
    textEn: 'Match List I with List II:',
    textHi: 'सूची I का सूची II से मिलान कीजिए:',
    listI: [
      { label: 'A', textEn: 'Fraunhofer Diffraction', textHi: 'फ्राउनहोफर विवर्तन' },
      { label: 'B', textEn: 'Fresnel Diffraction', textHi: 'फ्रेनल विवर्तन' },
      { label: 'C', textEn: 'Interference of Light', textHi: 'प्रकाश का व्यतिकरण' },
      { label: 'D', textEn: 'Polarization of Light', textHi: 'प्रकाश का ध्रुवण' }
    ],
    listII: [
      { label: 'I', textEn: 'Interaction of the light waves from two different wave fronts', textHi: 'दो अलग-अलग तरंगाग्रों से प्रकाश तरंगों की अंतःक्रिया' },
      { label: 'II', textEn: 'The distance between the source and the screen are effectively at infinite distance', textHi: 'स्रोत और स्क्रीन के बीच की दूरी प्रभावी रूप से अनंत दूरी पर है' },
      { label: 'III', textEn: "It's a phenomenon in which the wave vibrations are restricted to a particular direction in a plane.", textHi: 'यह एक ऐसी परिघटना है जिसमें तरंग कंपन एक तल में एक विशेष दिशा तक सीमित होते हैं।' },
      { label: 'IV', textEn: 'The source and screen or both are at finite distances from the aperture or obstacle', textHi: 'स्रोत और स्क्रीन या दोनों एपर्चर (द्वारक) या बाधा से सीमित दूरी पर हैं।' }
    ],
    options: [
      { id: 1, optionId: '68019135285', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135286', textEn: '(A)-(II), (B)-(III), (C)-(I), (D)-(IV)' },
      { id: 3, optionId: '68019135287', textEn: '(A)-(I), (B)-(II), (C)-(IV), (D)-(III)' },
      { id: 4, optionId: '68019135288', textEn: '(A)-(II), (B)-(IV), (C)-(I), (D)-(III)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Fraunhofer diffraction: Source and screen at infinite distance (plane wavefronts, A-II). Fresnel diffraction: Source and/or screen at finite distance (spherical/cylindrical wavefronts, B-IV). Interference: Superposition of waves from coherent wave fronts (C-I). Polarization: Vibration restricted to a single plane (D-III).",
      hi: "फ्राउनहोफर विवर्तन: स्रोत व पर्दा अनंत दूरी पर (A-II); फ्रेनल विवर्तन: स्रोत व पर्दा सीमित दूरी पर (B-IV); व्यतिकरण: दो तरंगाग्रों की अंतःक्रिया (C-I); ध्रुवण: कंपन का एक निश्चित तल में सीमित होना (D-III)।"
    }
  },
  {
    id: 23,
    questionId: '6801918959',
    category: 'Mechanics & Relativity',
    textEn: "The inter-molecular distance between two atoms of hydrogen molecule is 0.77 Å and the mass of proton is 1.67 × 10^-27 Kg. The moment of inertia of a molecule is",
    textHi: "हाइड्रोजन अणु के दो परमाणुओं के बीच अंतर-आणविक दूरी 0.77 Å है और प्रोटॉन का द्रव्यमान 1.67 × 10^-27 Kg है। अणु का जड़त्व आघूर्ण है",
    options: [
      { id: 1, optionId: '68019135289', textEn: '4.95 × 10^-47 Kg·m²', textHi: '4.95 × 10^-47 किग्रा.·मी²' },
      { id: 2, optionId: '68019135290', textEn: '0.495 × 10^-47 Kg·m²', textHi: '0.495 × 10^-47 किग्रा.·मी²' },
      { id: 3, optionId: '68019135291', textEn: '49.5 × 10^-47 Kg·m²', textHi: '49.5 × 10^-47 किग्रा.·मी²' },
      { id: 4, optionId: '68019135292', textEn: '45.9 × 10^-47 Kg·m²', textHi: '45.9 × 10^-47 किग्रा.·मी²' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "For a diatomic homonuclear molecule (H₂), reduced mass μ = m / 2 = (1.67 × 10^-27 kg) / 2 = 0.835 × 10^-27 kg. Internuclear distance r = 0.77 Å = 0.77 × 10^-10 m. Moment of inertia I = μ r² = 0.835 × 10^-27 × (0.77 × 10^-10)² = 0.835 × 0.5929 × 10^-47 ≈ 0.495 × 10^-47 Kg·m².",
      hi: "समान द्रव्यमान के द्वि-परमाणुक अणु के लिए समानीत द्रव्यमान μ = m/2 = 0.835 × 10^-27 kg। I = μ r² = 0.835 × 10^-27 × (0.77 × 10^-10)² ≈ 0.495 × 10^-47 Kg·m²।",
      keyFormula: "I = \\mu r^2 = \\frac{m}{2} r^2 = 0.495 \\times 10^{-47}\\text{ Kg}\\cdot\\text{m}^2"
    }
  },
  {
    id: 24,
    questionId: '6801918960',
    category: 'Optics & Waves',
    textEn: "For Fresnel half period zone:\n(A) The amplitude of disturbance is directly proportional to the area of the zone.\n(B) The radii of half period zone are directly proportional to the square root of the natural number.\n(C) The area of each zone is directly proportional to the wavelength of the light.\n(D) The radii of half period zone are directly proportional to the square root of the wavelength of the light.",
    textHi: "फ्रेनेल हाफ ज़ोन के लिए:\n(A) विक्षोभ का आयाम ज़ोन के क्षेत्रफल के अनुक्रमानुपाती होता है।\n(B) अर्ध काल ज़ोन की त्रिज्याएँ प्राकृतिक संख्या के वर्गमूल के अनुक्रमानुपाती होती हैं।\n(C) प्रत्येक ज़ोन का क्षेत्रफल प्रकाश की तरंगदैर्घ्य के अनुक्रमानुपाती होता है।\n(D) अर्ध काल ज़ोन की त्रिज्याएँ प्रकाश की तरंगदैर्घ्य के वर्गमूल के अनुक्रमानुपाती होती हैं।",
    options: [
      { id: 1, optionId: '68019135293', textEn: '(A), (B) and (C) only', textHi: 'केवल (A), (B) और (C)' },
      { id: 2, optionId: '68019135294', textEn: '(B), (C) and (D) only', textHi: 'केवल (B), (C) और (D)' },
      { id: 3, optionId: '68019135295', textEn: '(A), (B), (C) and (D) only', textHi: 'केवल (A), (B), (C) और (D)' },
      { id: 4, optionId: '68019135296', textEn: '(A), (C) and (D) only', textHi: 'केवल (A), (C) और (D)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "In Fresnel's diffraction by half-period zones: The radius of nth zone is r_n = √(n b λ), which is directly proportional to √n (B) and to √λ (D). The area of each zone is A_n ≈ π b λ, which is directly proportional to λ (C). The amplitude depends on area/distance and the obliquity factor (1 + cos θ), not simply proportional to area alone. Hence (B), (C) and (D) are strictly correct.",
      hi: "अर्ध-आवर्त कटिबंधों (half-period zones) में: त्रिज्या r_n = √(n b λ) ∝ √n (कथन B सत्य) और r_n ∝ √λ (कथन D सत्य)। प्रत्येक कटिबंध का क्षेत्रफल A = π b λ ∝ λ (कथन C सत्य)। अतः (B), (C) और (D) सही हैं।",
      keyFormula: "r_n = \\sqrt{n b \\lambda},\\quad A_n \\approx \\pi b \\lambda"
    }
  },
  {
    id: 25,
    questionId: '6801918961',
    category: 'Optics & Waves',
    textEn: "In order to introduce a phase difference of π/2 in a Quarter wave plate, thickness of the crystal should have a value of ....... (Given: wavelength = 5893 × 10^-10 m, refractive index for O-ray is 1.65836 and refractive index for E-ray is 1.48641)",
    textHi: "चातुर्थिक (एक चौथाई) तरंग प्लेट में π/2 के कलांतर को लाने के लिए, क्रिस्टल की मोटाई का मान---------- होना चाहिए (दिया गया: तरंग दैर्घ्य = 5893 × 10^-10 m, O-किरण के लिए अपवर्तनांक 1.65836 है और E-किरण के लिए अपवर्तनांक 1.48641 है)",
    options: [
      { id: 1, optionId: '68019135297', textEn: '8.57 × 10^-4 mm', textHi: '8.57 × 10^-4 mm' },
      { id: 2, optionId: '68019135298', textEn: '8.57 × 10^-4 cm', textHi: '8.57 × 10^-4 cm' },
      { id: 3, optionId: '68019135299', textEn: '8.57 × 10^-4 m', textHi: '8.57 × 10^-4 m' },
      { id: 4, optionId: '68019135300', textEn: '8.57 × 10^-4 nm', textHi: '8.57 × 10^-4 nm' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For a quarter-wave plate, the path difference between O-ray and E-ray is λ / 4: t · (μ_o - μ_e) = λ / 4 => t = λ / [4(μ_o - μ_e)]. Here μ_o - μ_e = 1.65836 - 1.48641 = 0.17195. t = (5893 × 10^-10 m) / (4 × 0.17195) = 8.5679 × 10^-7 m = 8.57 × 10^-4 mm.",
      hi: "चतुर्थांश तरंग पट्टिका के लिए: t(μ_o - μ_e) = λ/4। t = 5893×10^-10 / [4 × (1.65836 - 1.48641)] = 8.57 × 10^-7 m = 8.57 × 10^-4 mm।",
      keyFormula: "t = \\frac{\\lambda}{4(\\mu_o - \\mu_e)} = \\frac{5893 \\times 10^{-10}}{4(0.17195)} = 8.57 \\times 10^{-4}\\text{ mm}"
    }
  }
];
