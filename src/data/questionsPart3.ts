import { Question } from '../types';

export const questionsPart3: Question[] = [
  {
    id: 51,
    questionId: '6801918987',
    category: 'Mathematical Methods',
    textEn: "Given below are two statements:\nStatement (I): Two families of curves such that every member of either family cuts each member of the other family at right angles are called orthogonal trajectories of each other.\nStatement (II): The orthogonal trajectories of the curve xy = c is y² - x² = c.\nIn light of the above statements, choose the most appropriate answer from the options given below:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): वक्रों के दो कुल इस प्रकार कि किसी भी कुल का प्रत्येक सदस्य दूसरे कुल के प्रत्येक सदस्य को समकोण पर काटता है, उन्हें एक दूसरे की ऑर्थोगोनल ट्रेजेक्टरी (लंबकोणीय वक्रपथ) कहा जाता है।\nकथन (II): वक्र xy = c की ऑर्थोगोनल ट्रेजेक्टरी y² - x² = c है।\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135401', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135402', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135403', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135404', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Statement (I) is the definition of orthogonal trajectories. For xy = c: differentiating gives y + x(dy/dx) = 0 => dy/dx = -y/x. Replacing dy/dx by -dx/dy for orthogonal trajectories: -dx/dy = -y/x => y dy = x dx. Integrating gives y²/2 - x²/2 = constant => y² - x² = c. Hence both statements are correct.",
      hi: "कथन (I) ऑर्थोगोनल ट्रेजेक्टरी की परिभाषा है। xy = c के लिए dy/dx = -y/x। लम्बकोणीय पथ के लिए dy/dx को -dx/dy से प्रतिस्थापित करने पर y dy = x dx प्राप्त होता है, जिससे y² - x² = c मिलता है। दोनों कथन सही हैं।"
    }
  },
  {
    id: 52,
    questionId: '6801918988',
    category: 'Mathematical Methods',
    textEn: "Let f(x) be a differentiable function for all values of x with f'(x) ≤ 32 and f(3) = 21, then maximum value of f(8) is:",
    textHi: "यदि f'(x) ≤ 32 और f(3) = 21 के साथ x के सभी मानों के लिए f(x) एक अवकलनीय फलन है, तो f(8) का अधिकतम मान है:",
    options: [
      { id: 1, optionId: '68019135405', textEn: '160', textHi: '160' },
      { id: 2, optionId: '68019135406', textEn: '139', textHi: '139' },
      { id: 3, optionId: '68019135407', textEn: '181', textHi: '181' },
      { id: 4, optionId: '68019135408', textEn: '32', textHi: '32' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "By Lagrange's Mean Value Theorem on [3, 8]: [f(8) - f(3)] / (8 - 3) = f'(c) for some c ∈ (3, 8). Since f'(c) ≤ 32: f(8) - 21 ≤ 32 × 5 = 160 => f(8) ≤ 160 + 21 = 181.",
      hi: "मध्यमान प्रमेय से: [f(8) - f(3)] / (8 - 3) = f'(c) ≤ 32। अतः f(8) - 21 ≤ 160 ⇒ f(8) ≤ 181।",
      keyFormula: "f(8) \\le f(3) + f'_{max} \\cdot (8 - 3) = 21 + 32(5) = 181"
    }
  },
  {
    id: 53,
    questionId: '6801918989',
    category: 'Mathematical Methods',
    textEn: "The general solution of the differential equation d²y/dx² - 5(dy/dx) + 6y = e^x cos 2x is:",
    textHi: "अवकल समीकरण d²y/dx² - 5(dy/dx) + 6y = e^x cos 2x का सामान्य हल है:",
    options: [
      { id: 1, optionId: '68019135409', textEn: 'y(x) = c₁ e^2x + c₂ e^-3x - (e^2x / 20)(3 sin 2x - cos 2x)' },
      { id: 2, optionId: '68019135410', textEn: 'y(x) = c₁ e^2x + c₂ e^3x - (e^x / 20)(3 sin 2x + cos 2x)' },
      { id: 3, optionId: '68019135411', textEn: 'y(x) = c₁ e^2x + c₂ e^-3x + (e^2x / 8)(3 sin 2x - cos 2x)' },
      { id: 4, optionId: '68019135412', textEn: 'y(x) = (c₁ + c₂ x)e^-3x + (e^2x / 8)(3 sin 2x - cos 2x)' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Auxiliary equation: m² - 5m + 6 = 0 => m = 2, 3. Complementary function y_c = c₁ e^2x + c₂ e^3x. Particular Integral y_p = [1 / (D² - 5D + 6)] e^x cos 2x = e^x [1 / ((D+1)² - 5(D+1) + 6)] cos 2x = e^x [1 / (D² - 3D + 2)] cos 2x. Replacing D² with -4: y_p = e^x [1 / (-3D - 2)] cos 2x = - (e^x / 20)(3 sin 2x + cos 2x).",
      hi: "सहायक समीकरण m² - 5m + 6 = 0 से मूल 2, 3 हैं। पूरक फलन y_c = c₁ e^2x + c₂ e^3x और विशेष समाकल y_p = -(e^x / 20)(3 sin 2x + cos 2x)।",
      keyFormula: "y(x) = c_1 e^{2x} + c_2 e^{3x} - \\frac{e^x}{20}(3\\sin 2x + \\cos 2x)"
    }
  },
  {
    id: 54,
    questionId: '6801918990',
    category: 'Mathematical Methods',
    textEn: 'Match List-I (Differential Equation) with List-II (Complementary Function):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (अवकल समीकरण और पूरक फलन):',
    listI: [
      { label: 'A', textEn: 'd²y/dx² - 4(dy/dx) + 13y = 0', textHi: 'd²y/dx² - 4(dy/dx) + 13y = 0' },
      { label: 'B', textEn: 'd²y/dx² + 4(dy/dx) + 5y = cosh 5x', textHi: 'd²y/dx² + 4(dy/dx) + 5y = cosh 5x' },
      { label: 'C', textEn: 'd²y/dx² + 2(dy/dx) + y = cos² x', textHi: 'd²y/dx² + 2(dy/dx) + y = cos² x' },
      { label: 'D', textEn: 'd²y/dx² - 4(dy/dx) + 3y = sin 3x cos 2x', textHi: 'd²y/dx² - 4(dy/dx) + 3y = sin 3x cos 2x' }
    ],
    listII: [
      { label: 'I', textEn: 'e^-x (c₁ + c₂ x)', textHi: 'e^-x (c₁ + c₂ x)' },
      { label: 'II', textEn: 'e^2x (c₁ cos 3x + c₂ sin 3x)', textHi: 'e^2x (c₁ cos 3x + c₂ sin 3x)' },
      { label: 'III', textEn: 'c₁ e^x + c₂ e^3x', textHi: 'c₁ e^x + c₂ e^3x' },
      { label: 'IV', textEn: 'e^-2x (c₁ cos x + c₂ sin x)', textHi: 'e^-2x (c₁ cos x + c₂ sin x)' }
    ],
    options: [
      { id: 1, optionId: '68019135413', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135414', textEn: '(A)-(II), (B)-(III), (C)-(I), (D)-(IV)' },
      { id: 3, optionId: '68019135415', textEn: '(A)-(III), (B)-(IV), (C)-(I), (D)-(II)' },
      { id: 4, optionId: '68019135416', textEn: '(A)-(II), (B)-(IV), (C)-(I), (D)-(III)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "(A) m² - 4m + 13 = 0 => m = 2 ± 3i => e^2x(c₁ cos 3x + c₂ sin 3x) -> II. (B) m² + 4m + 5 = 0 => m = -2 ± i => e^-2x(c₁ cos x + c₂ sin x) -> IV. (C) m² + 2m + 1 = 0 => m = -1, -1 (repeated) => e^-x(c₁ + c₂ x) -> I. (D) m² - 4m + 3 = 0 => m = 1, 3 => c₁ e^x + c₂ e^3x -> III. Match: (A)-(II), (B)-(IV), (C)-(I), (D)-(III).",
      hi: "(A) मूल 2 ± 3i हैं (II); (B) मूल -2 ± i हैं (IV); (C) पुनरावृत्त मूल -1, -1 हैं (I); (D) मूल 1, 3 हैं (III)। सही विकल्प 4 है।"
    }
  },
  {
    id: 55,
    questionId: '6801918991',
    category: 'Mathematical Methods',
    textEn: "The value of tan [i log((2 - i√3) / (2 + i√3))] is :",
    textHi: "tan [i log((2 - i√3) / (2 + i√3))] का मान है:",
    options: [
      { id: 1, optionId: '68019135417', textEn: '0', textHi: '0' },
      { id: 2, optionId: '68019135418', textEn: '1', textHi: '1' },
      { id: 3, optionId: '68019135419', textEn: '2√3', textHi: '2√3' },
      { id: 4, optionId: '68019135420', textEn: '4√3', textHi: '4√3' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Let 2 + i√3 = r e^(iθ), where tan θ = √3/2. Then 2 - i√3 = r e^(-iθ). The ratio is e^(-2iθ). Thus log[(2 - i√3)/(2 + i√3)] = -2iθ. Multiplying by i gives i(-2iθ) = 2θ. Now tan(2θ) = 2 tan θ / (1 - tan² θ) = [2(√3/2)] / [1 - (3/4)] = √3 / (1/4) = 4√3.",
      hi: "2 + i√3 = r e^(iθ) जहाँ tan θ = √3/2। अनुपात e^(-2iθ) बनता है। अतः i log(...) = 2θ। tan(2θ) = 2 tan θ / (1 - tan² θ) = √3 / (1/4) = 4√3।",
      keyFormula: "\\tan(2\\theta) = \\frac{2 \\tan\\theta}{1 - \\tan^2\\theta} = \\frac{\\sqrt{3}}{1 - 3/4} = 4\\sqrt{3}"
    }
  },
  {
    id: 56,
    questionId: '6801918992',
    category: 'Mathematical Methods',
    textEn: "The value of the integral ∮_c (x³ + xy)dx + (x² - y³)dy, where c is the square formed by the lines x = ±1, y = ±1, is :",
    textHi: "समाकलन ∮_c (x³ + xy)dx + (x² - y³)dy का मान जहाँ c, x = ±1, y = ±1 रेखाओं द्वारा निर्मित वर्ग है:",
    options: [
      { id: 1, optionId: '68019135421', textEn: '1', textHi: '1' },
      { id: 2, optionId: '68019135422', textEn: '1/8', textHi: '1/8' },
      { id: 3, optionId: '68019135423', textEn: '1/(4√2)', textHi: '1/(4√2)' },
      { id: 4, optionId: '68019135424', textEn: '0', textHi: '0' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Applying Green's Theorem: ∮_C P dx + Q dy = ∬_R (∂Q/∂x - ∂P/∂y) dx dy. Here P = x³ + xy => ∂P/∂y = x. Q = x² - y³ => ∂Q/∂x = 2x. Then ∂Q/∂x - ∂P/∂y = 2x - x = x. Integrating over symmetric square [-1, 1] × [-1, 1]: ∫_{-1}^1 ∫_{-1}^1 x dy dx = 2 ∫_{-1}^1 x dx = 2 [x²/2]_{-1}^1 = 0.",
      hi: "ग्रीन प्रमेय से: ∬_R (∂Q/∂x - ∂P/∂y) dx dy = ∬_R (2x - x) dx dy = ∬_R x dx dy = 0 (क्योंकि क्षेत्र x = -1 से 1 तक सममित है और x एक विषम फलन है)।",
      keyFormula: "\\iint_R x\\,dx\\,dy = \\int_{-1}^1 2x\\,dx = 0"
    }
  },
  {
    id: 57,
    questionId: '6801918993',
    category: 'Mathematical Methods',
    textEn: "The surface integral ∬ F·n̂ ds, where F = xî + yĵ - zk and s is the surface of the cylinder x² + y² = 4 bounded by the planes z = 0 and z = 4, equals :",
    textHi: "पृष्ठीय समाकलन ∬ F·n̂ ds, जहाँ F = xî + yĵ - zk का मान बराबर है (यहाँ s बेलन x² + y² = 4 का पृष्ठ है जो समतल z = 0 और z = 4 से परिबद्ध है):",
    options: [
      { id: 1, optionId: '68019135425', textEn: '32π', textHi: '32π' },
      { id: 2, optionId: '68019135426', textEn: '32/3', textHi: '32/3' },
      { id: 3, optionId: '68019135427', textEn: '16π', textHi: '16π' },
      { id: 4, optionId: '68019135428', textEn: '48', textHi: '48' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "By Gauss Divergence Theorem: ∬_S F·n̂ ds = ∭_V (∇·F) dV. ∇·F = ∂(x)/∂x + ∂(y)/∂y + ∂(-z)/∂z = 1 + 1 - 1 = 1. Therefore ∬_S F·n̂ ds = 1 × Volume of cylinder = π r² h = π (2)² (4) = 16π.",
      hi: "गॉस अपसरण प्रमेय से: ∬_S F·n̂ ds = ∭_V (∇·F) dV। ∇·F = 1 + 1 - 1 = 1। बेलन का आयतन = π r² h = π(2²)(4) = 16π। अतः मान 16π है।",
      keyFormula: "\\iint_S \\mathbf{F}\\cdot\\hat{n}\\,ds = \\iiint_V (\\nabla\\cdot\\mathbf{F})\\,dV = 1 \\cdot (\\pi R^2 h) = 16\\pi"
    }
  },
  {
    id: 58,
    questionId: '6801918994',
    category: 'Mathematical Methods',
    textEn: "The value of curl (grad f), where f = x² - 4y² + 5z², is :",
    textHi: "कर्ल (ग्रेड़ f) का मान, जहाँ f = x² - 4y² + 5z², है:",
    options: [
      { id: 1, optionId: '68019135429', textEn: '0', textHi: '0' },
      { id: 2, optionId: '68019135430', textEn: '1', textHi: '1' },
      { id: 3, optionId: '68019135431', textEn: '4 i + 2 j - 3 k', textHi: '4 i + 2 j - 3 k' },
      { id: 4, optionId: '68019135432', textEn: '2 x i - 3 y j + 2 z k', textHi: '2 x i - 3 y j + 2 z k' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The curl of the gradient of any twice-differentiable scalar field is identically zero: ∇ × (∇ f) = 0.",
      hi: "किसी भी अदिश फलन की प्रवणता का कर्ल सदैव शून्य होता है: ∇ × (∇ f) ≡ 0।",
      keyFormula: "\\nabla \\times (\\nabla f) \\equiv \\mathbf{0}"
    }
  },
  {
    id: 59,
    questionId: '6801918995',
    category: 'Mathematical Methods',
    textEn: "Given below are two statements:\nStatement (I): If F is an irrotational vector field then the angular velocity of the vector field is always greater than zero.\nStatement (II): For a Solenoidal vector function, the divergence is always zero.\nIn light of the above statements, choose the most appropriate answer from the options given below:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): यदि F एक आघूर्णी सदिश क्षेत्र है, तो सदिश क्षेत्र का कोणीय वेग हमेशा शून्य से अधिक होता है।\nकथन (II): एक सोलेनोइडल (परिनालिकीय) सदिश फलन के लिए, विचलन हमेशा शून्य होता है।\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135433', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135434', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135435', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135436', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "An irrotational vector field has curl F = 0, which corresponds to zero vorticity (angular velocity = 0, NOT greater than zero, making Statement I false). A solenoidal field is defined by div F = 0 (Statement II is correct).",
      hi: "अघूर्णी (irrotational) सदिश क्षेत्र का कर्ल ∇×F = 0 होता है, अतः कोणीय वेग शून्य होता है (कथन I गलत है)। सोलेनोइडल क्षेत्र का अपसरण ∇·F = 0 होता है (कथन II सही है)।"
    }
  },
  {
    id: 60,
    questionId: '6801918996',
    category: 'Mathematical Methods',
    textEn: "Let α be the magnitude of the directional derivative of the function φ(x, y) = x / (x² + y²) along a line making an angle 45° with the positive x-axis at the point (0, 2), then the value of 1/α² is :",
    textHi: "यदि α बिंदु (0, 2) पर धनात्मक X-अक्ष के साथ 45° का कोण बनाने वाली रेखा के अनुदिश फलन φ(x, y) = x / (x² + y²) के दिशात्मक अवकलज का परिमाण है, तो फिर 1/α² का मान है:",
    options: [
      { id: 1, optionId: '68019135437', textEn: '24', textHi: '24' },
      { id: 2, optionId: '68019135438', textEn: '1/(4√2)', textHi: '1/(4√2)' },
      { id: 3, optionId: '68019135439', textEn: '16√2', textHi: '16√2' },
      { id: 4, optionId: '68019135440', textEn: '32', textHi: '32' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "∂φ/∂x = (y² - x²) / (x² + y²)². At (0, 2): ∂φ/∂x = (4 - 0) / 16 = 1/4. ∂φ/∂y = -2xy / (x² + y²)² = 0. Unit vector in 45° direction: û = (cos 45°, sin 45°) = (1/√2, 1/√2). Directional derivative D_u = ∇φ · û = (1/4)(1/√2) + 0 = 1 / (4√2). Thus magnitude α = 1 / (4√2). α² = 1 / 32 => 1 / α² = 32.",
      hi: "∇φ at (0,2) = (1/4, 0)। û = (1/√2, 1/√2)। दिशात्मक अवकलज α = 1/(4√2)। अतः α² = 1/32 ⇒ 1/α² = 32।",
      keyFormula: "\\alpha = \\nabla\\phi\\cdot\\hat{u} = \\frac{1}{4\\sqrt{2}} \\implies \\frac{1}{\\alpha^2} = 32"
    }
  },
  {
    id: 61,
    questionId: '6801918997',
    category: 'Mathematical Methods',
    textEn: "The volume of the solid standing on the area common to the curves, x² = y, y = x and cut off by the surface z = y - x² is :",
    textHi: "वक्रों x² = y, y = x के उभयनिष्ठ वक्र क्षेत्र पर खड़े और पृष्ठ z = y - x² से विभेदित ठोस का आयतन है:",
    options: [
      { id: 1, optionId: '68019135441', textEn: '32', textHi: '32' },
      { id: 2, optionId: '68019135442', textEn: '1/60', textHi: '1/60' },
      { id: 3, optionId: '68019135443', textEn: '1/32', textHi: '1/32' },
      { id: 4, optionId: '68019135444', textEn: '48', textHi: '48' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Intersection of y = x and y = x² occurs at x = 0 and x = 1. Volume V = ∫_{x=0}^1 ∫_{y=x²}^x (y - x²) dy dx = ∫_0^1 [ y²/2 - x² y ]_{x²}^x dx = ∫_0^1 ( x²/2 - x³ + x⁴/2 ) dx = [ x³/6 - x⁴/4 + x⁵/10 ]_0^1 = 1/6 - 1/4 + 1/10 = (10 - 15 + 6)/60 = 1/60.",
      hi: "प्रतिच्छेदन सीमा x = 0 से 1। आयतन V = ∫_0^1 ∫_{x²}^x (y - x²) dy dx = [ x³/6 - x⁴/4 + x⁵/10 ]_0^1 = 1/6 - 1/4 + 1/10 = 1/60।",
      keyFormula: "V = \\int_0^1 \\left(\\frac{x^2}{2} - x^3 + \\frac{x^4}{2}\\right)dx = \\frac{1}{60}"
    }
  },
  {
    id: 62,
    questionId: '6801918998',
    category: 'Mathematical Methods',
    textEn: "In a submarine telegraph cable, the speed of signalling varies as x² log(1/x), where x is the ratio of the radius of the core to that of the covering. To attain greatest speed, the value of this ratio is :",
    textHi: "पनडुब्बी टेलीग्राफ केबल में, संकेत की गति x² log(1/x) से परिवर्तित होती है, यहाँ x कोर (अंतर्भाग) की त्रिज्या और कवरिंग (आवरण) की त्रिज्या का अनुपात है। अधिकतम गति प्राप्त करने के लिए, इस अनुपात का मान है:",
    options: [
      { id: 1, optionId: '68019135445', textEn: '1/2', textHi: '1/2' },
      { id: 2, optionId: '68019135446', textEn: '2/3', textHi: '2/3' },
      { id: 3, optionId: '68019135447', textEn: '3/√e', textHi: '3/√e' },
      { id: 4, optionId: '68019135448', textEn: '1/√e', textHi: '1/√e' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Let v(x) = x² ln(1/x) = -x² ln x. Taking derivative: v'(x) = -2x ln x - x² (1/x) = -x(2 ln x + 1). Setting v'(x) = 0 for maximum (x > 0): 2 ln x + 1 = 0 => ln x = -1/2 => x = e^(-1/2) = 1 / √e.",
      hi: "v(x) = -x² ln x। अवकलन v'(x) = -x(2 ln x + 1) = 0 ⇒ ln x = -1/2 ⇒ x = 1/√e।",
      keyFormula: "x = e^{-1/2} = \\frac{1}{\\sqrt{e}}"
    }
  },
  {
    id: 63,
    questionId: '6801918999',
    category: 'Mathematical Methods',
    textEn: "The asymptote of the spiral r = a/θ is:",
    textHi: "सर्पिल r = a/θ का एसिम्प्टोट (अनन्तस्पर्शी) है:",
    options: [
      { id: 1, optionId: '68019135449', textEn: 'r sin θ = a', textHi: 'r sin θ = a' },
      { id: 2, optionId: '68019135450', textEn: 'r sin θ + a + 1 = 0', textHi: 'r sin θ + a + 1 = 0' },
      { id: 3, optionId: '68019135451', textEn: 'r cos θ = a', textHi: 'r cos θ = a' },
      { id: 4, optionId: '68019135452', textEn: 'a sin θ = 2r', textHi: 'a sin θ = 2r' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "As r → ∞, θ → 0. Distance of the asymptote from the pole p = lim_{θ→0} r sin θ = lim_{θ→0} (a / θ) sin θ = a. Therefore the equation of the rectilinear asymptote parallel to the initial line is r sin θ = a.",
      hi: "r = a/θ (हाइपरबोलिक सर्पिल) के लिए r → ∞ होने पर θ → 0। लम्बवत् दूरी p = lim_{θ→0} r sin θ = a lim_{θ→0} (sin θ / θ) = a। अतः अनंतस्पर्शी का समीकरण r sin θ = a है।",
      keyFormula: "p = \\lim_{\\theta \\to 0} r \\sin\\theta = a \\implies r \\sin\\theta = a"
    }
  },
  {
    id: 64,
    questionId: '6801919000',
    category: 'Mathematical Methods',
    textEn: "If the radius of curvature of the Folium x³ + y³ - 3xy = 0 at the point (3/2, 3/2) is α/β, then the value of β² + 2α + 1 is:",
    textHi: "यदि बिंदु (3/2, 3/2) पर फोलियम x³ + y³ - 3xy = 0 की वक्रता त्रिज्या α/β है, तो β² + 2α + 1 का मान है:",
    options: [
      { id: 1, optionId: '68019135453', textEn: '128', textHi: '128' },
      { id: 2, optionId: '68019135454', textEn: '100', textHi: '100' },
      { id: 3, optionId: '68019135455', textEn: '135', textHi: '135' },
      { id: 4, optionId: '68019135456', textEn: '1', textHi: '1' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "For folium x³ + y³ - 3xy = 0 at (3/2, 3/2): y' = -1, y'' = -32/3. Radius of curvature ρ = (1 + y'²)^(3/2) / |y''| = (2√2) / (32/3) = 6√2 / 32 = 3 / (8√2) = α/β. Here α = 3 and β = 8√2. Thus β² + 2α + 1 = (8√2)² + 2(3) + 1 = 128 + 6 + 1 = 135.",
      hi: "फोलियम के बिंदु (3/2, 3/2) पर वक्रता त्रिज्या ρ = 3 / (8√2) = α/β प्राप्त होती है। अतः α = 3, β = 8√2 ⇒ β² + 2α + 1 = 128 + 6 + 1 = 135।",
      keyFormula: "\\rho = \\frac{3}{8\\sqrt{2}} \\implies \\beta^2 + 2\\alpha + 1 = (8\\sqrt{2})^2 + 2(3) + 1 = 135"
    }
  },
  {
    id: 65,
    questionId: '6801919001',
    category: 'Mathematical Methods',
    textEn: "Given below are two statements:\nStatement (I): The nth derivative of the function e^x cos x cos 2x is [(1/2) e^x { (10)^(n/2) cos(3x + n tan^-1 3) + (2)^(n/2) cos(x + nπ/3) }]\nStatement (II): The nth derivative of the function cos x cos 2x cos 3x is [(1/4) { (2)^n cos(2x + nπ/2) + (4)^n cos(4x + nπ/2) + (6)^n cos(6x + nπ/2) }]\nIn light of the above statements, choose the most appropriate answer from the options given below:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): फलन e^x cos x cos 2x का nth डेरिवेटिव (अवकलज) है [(1/2) e^x { (10)^(n/2) cos(3x + n tan^-1 3) + (2)^(n/2) cos(x + nπ/3) }]\nकथन (II): फलन cos x cos 2x cos 3x का nth डेरिवेटिव (अवकलज) है [(1/4) { (2)^n cos(2x + nπ/2) + (4)^n cos(4x + nπ/2) + (6)^n cos(6x + nπ/2) }]\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135457', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135458', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135459', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135460', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "In Statement (I), the phase term for e^x cos x has tan^-1(1) = π/4, not π/3, so Statement (I) is incorrect. In Statement (II), expanding gives (1/4)[cos 6x + cos 4x + cos 2x + 1], whose nth derivative (n ≥ 1) is precisely (1/4)[6^n cos(6x + nπ/2) + 4^n cos(4x + nπ/2) + 2^n cos(2x + nπ/2)], so Statement (II) is correct.",
      hi: "कथन (I) में tan^-1(1) = π/4 होता है जबकि सूत्र में nπ/3 दिया है (कथन I गलत है)। कथन (II) त्रिकोणमितीय प्रसार और nth अवकलज के नियमानुसार पूर्णतः सही है।"
    }
  },
  {
    id: 66,
    questionId: '6801919002',
    category: 'Mathematical Methods',
    textEn: "If θ = t^n e^(-r² / (4t)), then for what value of n, the following result holds:\n(1/r²) ∂/∂r [ r² (∂θ/∂r) ] = ∂θ/∂t",
    textHi: "अगर θ = t^n e^(-r² / (4t)) है, तो n के किस मान के लिए, निम्नलिखित परिणाम मान्य है:\n(1/r²) ∂/∂r [ r² (∂θ/∂r) ] = ∂θ/∂t",
    options: [
      { id: 1, optionId: '68019135461', textEn: '1/2', textHi: '1/2' },
      { id: 2, optionId: '68019135462', textEn: '0', textHi: '0' },
      { id: 3, optionId: '68019135463', textEn: '1', textHi: '1' },
      { id: 4, optionId: '68019135464', textEn: '-3/2', textHi: '-3/2' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "This is the 3-dimensional spherical heat conduction equation ∇²θ = ∂θ/∂t. The fundamental solution in 3 dimensions is θ(r, t) = 1/(4π t)^(3/2) · e^(-r² / (4t)) ∝ t^(-3/2) e^(-r² / (4t)). Direct substitution yields n = -3/2.",
      hi: "यह 3-विमीय गोलीय ऊष्मा समीकरण ∇²θ = ∂θ/∂t का मूल हल है। 3-D में मूल हल t^(-3/2) e^(-r² / 4t) के समानुपाती होता है, अतः n = -3/2।",
      keyFormula: "n = -\\frac{d}{2} = -\\frac{3}{2}"
    }
  },
  {
    id: 67,
    questionId: '6801919003',
    category: 'Mathematical Methods',
    textEn: "The principal value of i^i is :",
    textHi: "i^i का मुख्य मान है:",
    options: [
      { id: 1, optionId: '68019135465', textEn: 'e^(-π i)', textHi: 'e^(-π i)' },
      { id: 2, optionId: '68019135466', textEn: 'e^(π i)', textHi: 'e^(π i)' },
      { id: 3, optionId: '68019135467', textEn: 'e^(-π/2)', textHi: 'e^(-π/2)' },
      { id: 4, optionId: '68019135468', textEn: 'e^(-π/4)', textHi: 'e^(-π/4)' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Writing i in polar form: i = e^(i π/2). Then i^i = (e^(i π/2))^i = e^(i² π/2) = e^(-π/2) (a purely real number ≈ 0.20788).",
      hi: "i = e^(i π/2)। अतः i^i = (e^(i π/2))^i = e^(i² π/2) = e^(-π/2) (शुद्ध वास्तविक मान)।",
      keyFormula: "i^i = e^{i \\ln i} = e^{i(i\\pi/2)} = e^{-\\pi/2}"
    }
  },
  {
    id: 68,
    questionId: '6801919004',
    category: 'Mathematical Methods',
    textEn: "The general value of log(1 + i) + log(1 - i) is :",
    textHi: "log (1 + i) + log (1 - i) का सामान्य मान है:-",
    options: [
      { id: 1, optionId: '68019135469', textEn: 'log 2 + 4nπ i', textHi: 'log 2 + 4nπ i' },
      { id: 2, optionId: '68019135470', textEn: 'log 2 - 4nπ i', textHi: 'log 2 - 4nπ i' },
      { id: 3, optionId: '68019135471', textEn: 'log 2 + 2nπ i', textHi: 'log 2 + 2nπ i' },
      { id: 4, optionId: '68019135472', textEn: 'log 3 + nπ i', textHi: 'log 3 + nπ i' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "log(1 + i) + log(1 - i) = Log[(1 + i)(1 - i)] + 2nπ i = Log(1 - i²) + 2nπ i = Log(2) + 2nπ i = log 2 + 2nπ i.",
      hi: "लघुगणक नियम से: log(1+i) + log(1-i) = log[(1+i)(1-i)] + 2nπi = log(2) + 2nπi।",
      keyFormula: "\\text{Log}(z_1 z_2) + 2n\\pi i = \\log 2 + 2n\\pi i"
    }
  },
  {
    id: 69,
    questionId: '6801919005',
    category: 'Mathematical Methods',
    textEn: "Given below are two statements:\nStatement (I): The determinant of a matrix A and its transpose A^T are equal.\nStatement (II): The determinant of a product of two matrices A and B is the product of their determinants.\nIn light of the above statements, choose the most appropriate answer from the options given below:",
    textHi: "नीचे दो कथन दिए गए हैं:\nकथन (I): एक आव्यूह A का सारणिक और उसका परिवर्त A^T बराबर हैं।\nकथन (II): दो आव्यूहों A और B के गुणनफल का सारणिक उनके सारणिकों का गुणनफल है।\nउपरोक्त कथनों के आलोक में, नीचे दिए गए विकल्पों में से सबसे उपयुक्त उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135473', textEn: 'Both Statement (I) and Statement (II) are correct.', textHi: 'कथन (I) और कथन (II) दोनों सही हैं।' },
      { id: 2, optionId: '68019135474', textEn: 'Both Statement (I) and Statement (II) are incorrect.', textHi: 'कथन (I) और कथन (II) दोनों ही गलत हैं।' },
      { id: 3, optionId: '68019135475', textEn: 'Statement (I) is correct but Statement (II) is incorrect.', textHi: 'कथन (I) सही है लेकिन कथन (II) गलत है।' },
      { id: 4, optionId: '68019135476', textEn: 'Statement (I) is incorrect but Statement (II) is correct.', textHi: 'कथन (I) गलत है लेकिन कथन (II) सही है।' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Both statements are fundamental properties of determinants: det(A^T) = det(A) for any square matrix, and det(AB) = det(A)·det(B).",
      hi: "सारणिकों के मूलभूत नियमों के अनुसार: det(A^T) = det(A) तथा det(AB) = det(A)·det(B)। अतः दोनों कथन सही हैं।"
    }
  },
  {
    id: 70,
    questionId: '6801919006',
    category: 'Mathematical Methods',
    textEn: "If (√3 + i)^n + (√3 - i)^n = 4, then the value of n is :",
    textHi: "अगर (√3 + i)^n + (√3 - i)^n = 4 है तो n का मान है:",
    options: [
      { id: 1, optionId: '68019135477', textEn: '1', textHi: '1' },
      { id: 2, optionId: '68019135478', textEn: '2', textHi: '2' },
      { id: 3, optionId: '68019135479', textEn: '3', textHi: '3' },
      { id: 4, optionId: '68019135480', textEn: '3/2', textHi: '3/2' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Writing in polar form: √3 ± i = 2 e^(±i π/6). Then (√3 + i)^n + (√3 - i)^n = 2^n [ e^(inπ/6) + e^(-inπ/6) ] = 2^(n+1) cos(nπ/6). For n = 2: 2^(2+1) cos(2π/6) = 8 cos(π/3) = 8 × (1/2) = 4. Thus n = 2.",
      hi: "ध्रुवीय रूप: √3 ± i = 2 e^(±i π/6)। व्यंजक = 2^(n+1) cos(nπ/6)। n = 2 रखने पर: 2³ cos(π/3) = 8 × 1/2 = 4 प्राप्त होता है। अतः n = 2।",
      keyFormula: "2^{n+1} \\cos\\left(\\frac{n\\pi}{6}\\right) = 4 \\implies n = 2"
    }
  },
  {
    id: 71,
    questionId: '6801919007',
    category: 'Mathematical Methods',
    textEn: "In the system of linear equations AX = B, If A is singular matrix and B is null matrix then which of the following is correct.?",
    textHi: "रैखिक समीकरणों AX = B के निकाय में, यदि A एक अव्युत्क्रमणीय आव्यूह है और B एक शून्य आव्यूह है तो निम्नलिखित में से कौन सा सही है?",
    options: [
      { id: 1, optionId: '68019135481', textEn: 'The system is inconsistent.', textHi: 'निकाय असंगत है।' },
      { id: 2, optionId: '68019135482', textEn: 'The system has unique solution.', textHi: 'निकाय के पास विशिष्ट हल है।' },
      { id: 3, optionId: '68019135483', textEn: 'The system is consistent and has no solution.', textHi: 'निकाय सुसंगत है और इसका कोई हल नहीं है।' },
      { id: 4, optionId: '68019135484', textEn: 'The system has infinitely many solution.', textHi: 'निकाय में अनंत रूप से कई हल हैं।' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "When B = 0, AX = 0 is a homogeneous system, which is always consistent (X = 0 is trivial solution). If A is singular (det(A) = 0), rank(A) < n, giving infinitely many non-trivial solutions in addition to the zero solution.",
      hi: "जब B = 0 हो तो समांगी समीकरण AX = 0 हमेशा संगत होता है। चूंकि A अव्युत्क्रमणीय है (det A = 0), अतः निकाय के अनंत रूप से अनेक हल होते हैं।"
    }
  },
  {
    id: 72,
    questionId: '6801919008',
    category: 'Mathematical Methods',
    textEn: "In the matrix equation [3, -1; 2, 5] [x; y] = [4; -3], the values of x and y are:",
    textHi: "आव्यूह समीकरण [3, -1; 2, 5] [x; y] = [4; -3] में x और y के मान हैं:",
    options: [
      { id: 1, optionId: '68019135485', textEn: 'x = 3, y = 1', textHi: 'x = 3, y = 1' },
      { id: 2, optionId: '68019135486', textEn: 'x = -1, y = 1', textHi: 'x = -1, y = 1' },
      { id: 3, optionId: '68019135487', textEn: 'x = 1, y = -1', textHi: 'x = 1, y = -1' },
      { id: 4, optionId: '68019135488', textEn: 'x = -1, y = 3', textHi: 'x = -1, y = 3' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Equations: 1) 3x - y = 4; 2) 2x + 5y = -3. Multiplying (1) by 5: 15x - 5y = 20. Adding to (2): 17x = 17 => x = 1. Then y = 3(1) - 4 = -1. Therefore x = 1, y = -1.",
      hi: "3x - y = 4 और 2x + 5y = -3 को हल करने पर: x = 1, y = -1 प्राप्त होता है।",
      keyFormula: "x = 1,\\quad y = -1"
    }
  },
  {
    id: 73,
    questionId: '6801919009',
    category: 'Mathematical Methods',
    textEn: "If A is a skew-symmetric matrix of odd order, then the determinant of A is :",
    textHi: "यदि A विषम कोटि का विषम-सममित आव्यूह है, तो A का सारणिक है:",
    options: [
      { id: 1, optionId: '68019135489', textEn: '-1', textHi: '-1' },
      { id: 2, optionId: '68019135490', textEn: '0', textHi: '0' },
      { id: 3, optionId: '68019135491', textEn: '1', textHi: '1' },
      { id: 4, optionId: '68019135492', textEn: 'any real number', textHi: 'कोई वास्तविक संख्या' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "For a skew-symmetric matrix, A^T = -A. Taking determinants: det(A^T) = det(-A) = (-1)^n det(A). Since n is odd, (-1)^n = -1, so det(A) = -det(A) => 2 det(A) = 0 => det(A) = 0.",
      hi: "विषम-सममित आव्यूह में A^T = -A। det(A) = (-1)^n det(A)। चूंकि कोटि n विषम है, (-1)^n = -1 ⇒ det(A) = -det(A) ⇒ det(A) = 0।",
      keyFormula: "\\det(A) = (-1)^n \\det(A) = -\\det(A) \\implies \\det(A) = 0"
    }
  },
  {
    id: 74,
    questionId: '6801919010',
    category: 'Mathematical Methods',
    textEn: "Let P and Q be two matrices such that PQ = 0 and P is non-singular, then\n(A) Q is also non-singular\n(B) Q = 0\n(C) Q is singular\n(D) P = Q\nChoose the correct answer from the options given below:",
    textHi: "मानो P और Q दो आव्यूह हैं जैसे कि PQ = 0 और P व्युत्क्रमणीय है, तो\n(A) Q भी व्युत्क्रमणीय है\n(B) Q = 0\n(C) Q अव्युत्क्रमणीय है\n(D) P = Q\nनीचे दिए गए विकल्पों में से सही उत्तर चुनें:",
    options: [
      { id: 1, optionId: '68019135493', textEn: '(A), (B) and (D) only.', textHi: '(A), (B) और (D) केवल।' },
      { id: 2, optionId: '68019135494', textEn: '(B) and (C) only.', textHi: '(B) और (C) केवल।' },
      { id: 3, optionId: '68019135495', textEn: '(A) and (D) only.', textHi: '(A) और (D) केवल।' },
      { id: 4, optionId: '68019135496', textEn: '(C) only.', textHi: '(C) केवल।' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Since P is non-singular, P^-1 exists. Premultiplying PQ = 0 by P^-1 gives P^-1(PQ) = P^-1·0 => I·Q = 0 => Q = 0 (Statement B). Since the zero matrix has determinant 0, det(Q) = 0, meaning Q is also singular (Statement C). Thus both (B) and (C) are correct.",
      hi: "चूंकि P व्युत्क्रमणीय है, P^-1 का अस्तित्व है। P^-1(PQ) = 0 से Q = 0 (कथन B सत्य)। शून्य आव्यूह का सारणिक 0 होता है, अतः यह अव्युत्क्रमणीय (singular) भी है (कथन C सत्य)। अतः (B) और (C) दोनों सत्य हैं।"
    }
  },
  {
    id: 75,
    questionId: '6801919011',
    category: 'Mathematical Methods',
    textEn: 'Match List I with List II (Type of Matrix and its Defining Property):',
    textHi: 'सूची I का सूची II से मिलान कीजिए (आव्यूह प्रकार और उसका गुणधर्म):',
    listI: [
      { label: 'A', textEn: 'Symmetric Matrix', textHi: 'सममित आव्यूह' },
      { label: 'B', textEn: 'Hermitian Matrix', textHi: 'हर्मिटीयन आव्यूह' },
      { label: 'C', textEn: 'Skew-Hermitian matrix', textHi: 'विषम-हर्मिटीयन आव्यूह' },
      { label: 'D', textEn: 'Skew-Symmetric matrix', textHi: 'विषम-सममित आव्यूह' }
    ],
    listII: [
      { label: 'I', textEn: 'a_ij = -a_ji for values of i and j', textHi: 'a_ij = -a_ji (i और j के मानों के लिए)' },
      { label: 'II', textEn: 'a_ij = -ā_ji for values of i and j', textHi: 'a_ij = -ā_ji (i और j के मानों के लिए)' },
      { label: 'III', textEn: 'a_ij = ā_ji for values of i and j', textHi: 'a_ij = ā_ji (i और j के मानों के लिए)' },
      { label: 'IV', textEn: 'a_ij = a_ji for values of i and j', textHi: 'a_ij = a_ji (i और j के मानों के लिए)' }
    ],
    options: [
      { id: 1, optionId: '68019135497', textEn: '(A)-(I), (B)-(II), (C)-(III), (D)-(IV)' },
      { id: 2, optionId: '68019135498', textEn: '(A)-(I), (B)-(III), (C)-(II), (D)-(IV)' },
      { id: 3, optionId: '68019135499', textEn: '(A)-(II), (B)-(I), (C)-(IV), (D)-(III)' },
      { id: 4, optionId: '68019135500', textEn: '(A)-(IV), (B)-(III), (C)-(II), (D)-(I)' }
    ],
    correctOptionId: 4,
    explanation: {
      en: "Symmetric: A^T = A => a_ij = a_ji (A-IV). Hermitian: A† = A => a_ij = ā_ji (B-III). Skew-Hermitian: A† = -A => a_ij = -ā_ji (C-II). Skew-Symmetric: A^T = -A => a_ij = -a_ji (D-I). Correct match is (A)-(IV), (B)-(III), (C)-(II), (D)-(I).",
      hi: "सममित आव्यूह: a_ij = a_ji (A-IV); हर्मिटीयन आव्यूह: a_ij = ā_ji (B-III); विषम-हर्मिटीयन आव्यूह: a_ij = -ā_ji (C-II); विषम-सममित आव्यूह: a_ij = -a_ji (D-I)। सही मिलान विकल्प 4 है।"
    }
  }
];
