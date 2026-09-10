import { Question } from '../types';

export const additionalQuestions: Question[] = [
  // --- SOLID EARTH GEOPHYSICS (CRITICAL DOMAIN) ---
  {
    id: 76,
    questionId: 'CUET23_GEO_01',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "Which seismic wave cannot propagate through the Earth's outer core, and what fundamental property explains this behavior?",
    textHi: "कौन सी भूकंपीय तरंग पृथ्वी के बाह्य क्रोड (आउटर कोर) से होकर संचरित नहीं हो सकती है, और कौन सा मूल गुण इस व्यवहार की व्याख्या करता है?",
    options: [
      { id: 1, optionId: 'OPT_76_1', textEn: 'P-waves, because bulk modulus is zero in liquids', textHi: 'P-तरंगें, क्योंकि द्रवों में आयतन प्रत्यास्थता गुणांक शून्य होता है' },
      { id: 2, optionId: 'OPT_76_2', textEn: 'S-waves, because shear modulus (rigidity) is zero in liquids', textHi: 'S-तरंगें, क्योंकि द्रवों में अपरूपण प्रत्यास्थता गुणांक (दृढ़ता) शून्य होती है' },
      { id: 3, optionId: 'OPT_76_3', textEn: 'Rayleigh waves, because of high pressure in core', textHi: 'रेले तरंगें, क्योंकि क्रोड में अत्यधिक दाब होता है' },
      { id: 4, optionId: 'OPT_76_4', textEn: 'Love waves, because wavelength exceeds core diameter', textHi: 'लव तरंगें, क्योंकि तरंगदैर्ध्य क्रोड व्यास से अधिक होती है' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "S-waves (transverse/shear waves) have velocity Vs = √(μ/ρ), where μ is the shear modulus (rigidity). Since the outer core is liquid and liquids cannot sustain shear stress (μ = 0), Vs becomes zero. P-waves can propagate because bulk modulus K > 0 in fluids.",
      hi: "S-तरंगों (अपरूपण तरंगों) का वेग Vs = √(μ/ρ) होता है, जहाँ μ अपरूपण मापांक (दृढ़ता) है। चूंकि बाह्य क्रोड द्रव अवस्था में है और द्रव अपरूपण तनाव का विरोध नहीं कर सकते (μ = 0), इसलिए Vs शून्य हो जाता है।",
      keyFormula: "V_s = \\sqrt{\\frac{\\mu}{\\rho}} = 0 \\quad (\\text{since } \\mu_{\\text{fluid}} = 0)"
    }
  },
  {
    id: 77,
    questionId: 'CUET23_GEO_02',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "The Mohorovičić discontinuity (Moho) represents the boundary separating which two major Earth layers?",
    textHi: "मोहोरोविसिक असातत्य (मोहो असंततता) किन दो प्रमुख पृथ्वी परतों को अलग करने वाली सीमा का प्रतिनिधित्व करती है?",
    options: [
      { id: 1, optionId: 'OPT_77_1', textEn: 'Crust and Mantle', textHi: 'क्रस्ट (भूपर्पटी) और मेंटल' },
      { id: 2, optionId: 'OPT_77_2', textEn: 'Mantle and Outer Core', textHi: 'मेंटल और बाह्य क्रोड' },
      { id: 3, optionId: 'OPT_77_3', textEn: 'Outer Core and Inner Core', textHi: 'बाह्य क्रोड और आंतरिक क्रोड' },
      { id: 4, optionId: 'OPT_77_4', textEn: 'Upper Continental Crust and Lower Crust', textHi: 'ऊपरी महाद्वीपीय क्रस्ट और निचली क्रस्ट' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The Moho discontinuity marks the boundary between the crust and the underlying mantle, where P-wave seismic velocity abruptly increases from around 6.5 km/s in the crust to over 8.0 km/s in the upper mantle (peridotite rock).",
      hi: "मोहो असातत्य भूपर्पटी (क्रस्ट) और मेंटल के बीच की सीमा है, जहाँ P-तरंग वेग अचानक ~6.5 किमी/से से बढ़कर 8.0+ किमी/से हो जाता है।",
      keyFormula: "V_p \\text{ increases from } \\sim 6.5 \\text{ km/s (crust) to } \\ge 8.1 \\text{ km/s (mantle)}"
    }
  },
  {
    id: 78,
    questionId: 'CUET23_GEO_03',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "If the Poisson's ratio (ν) of an isotropic elastic rock formation is 0.25, the ratio of P-wave velocity to S-wave velocity (Vp / Vs) is:",
    textHi: "यदि किसी समदैशिक प्रत्यास्थ शैल संरचना का प्वासों अनुपात (ν) 0.25 है, तो P-तरंग वेग और S-तरंग वेग का अनुपात (Vp / Vs) क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_78_1', textEn: '1.414 (√2)', textHi: '1.414 (√2)' },
      { id: 2, optionId: 'OPT_78_2', textEn: '1.732 (√3)', textHi: '1.732 (√3)' },
      { id: 3, optionId: 'OPT_78_3', textEn: '2.000', textHi: '2.000' },
      { id: 4, optionId: 'OPT_78_4', textEn: '1.500', textHi: '1.500' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "The ratio of velocities in an isotropic medium is given by (Vp/Vs)² = 2(1-ν)/(1-2ν). For a Poisson solid (ν = 0.25 = 1/4): (Vp/Vs)² = 2(0.75)/(0.50) = 3. Therefore, Vp/Vs = √3 ≈ 1.732.",
      hi: "समदैशिक माध्यम में वेगों का अनुपात (Vp/Vs)² = 2(1-ν)/(1-2ν) होता है। ν = 0.25 रखने पर: (Vp/Vs)² = 2(0.75)/(0.50) = 3, अतः Vp/Vs = √3 ≈ 1.732।",
      keyFormula: "\\frac{V_p}{V_s} = \\sqrt{\\frac{2(1-\\nu)}{1-2\\nu}} = \\sqrt{\\frac{2(0.75)}{0.50}} = \\sqrt{3} \\approx 1.732"
    }
  },
  {
    id: 79,
    questionId: 'CUET23_GEO_04',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "In geophysical gravity prospecting, the Bouguer correction for an infinite horizontal slab of density ρ and thickness h is given by:",
    textHi: "भूभौतिकीय गुरुत्व पूर्वेक्षण में, घनत्व ρ और मोटाई h की अनंत क्षैतिज पट्टिका के लिए बोगर संशोधन का मान होता है:",
    options: [
      { id: 1, optionId: 'OPT_79_1', textEn: '2π G ρ h', textHi: '2π G ρ h' },
      { id: 2, optionId: 'OPT_79_2', textEn: '4π G ρ h', textHi: '4π G ρ h' },
      { id: 3, optionId: 'OPT_79_3', textEn: 'π G ρ h / 2', textHi: 'π G ρ h / 2' },
      { id: 4, optionId: 'OPT_79_4', textEn: 'G ρ / h²', textHi: 'G ρ / h²' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The Bouguer slab correction models the gravitational attraction of a rock layer between the station elevation and the datum plane as an infinite horizontal slab of thickness h and density ρ. The vertical gravitational attraction of this slab is Δg_B = 2π G ρ h.",
      hi: "बोगर पट्टिका संशोधन स्टेशन की ऊंचाई और डेटम तल के बीच की शैल परत के गुरुत्वाकर्षण आकर्षण को मोटाई h और घनत्व ρ की अनंत क्षैतिज पट्टिका के रूप में मॉडल करता है: Δg_B = 2π G ρ h।",
      keyFormula: "\\Delta g_B = 2\\pi G \\rho h"
    }
  },
  {
    id: 80,
    questionId: 'CUET23_GEO_05',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Advanced',
    textEn: "The Gutenberg-Richter recurrence law describing the frequency of earthquakes of magnitude M or greater is given by:",
    textHi: "परिमाण M या उससे अधिक के भूकंपों की आवृत्ति का वर्णन करने वाला गुटेनबर्ग-रिख्टर पुनरावृत्ति नियम है:",
    options: [
      { id: 1, optionId: 'OPT_80_1', textEn: 'log₁₀ N = a - b M', textHi: 'log₁₀ N = a - b M' },
      { id: 2, optionId: 'OPT_80_2', textEn: 'N = a M^b', textHi: 'N = a M^b' },
      { id: 3, optionId: 'OPT_80_3', textEn: 'ln N = a + b / M', textHi: 'ln N = a + b / M' },
      { id: 4, optionId: 'OPT_80_4', textEn: 'N = a e^{-b / M}', textHi: 'N = a e^{-b / M}' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The Gutenberg-Richter relation is log₁₀ N = a - bM, where N is the cumulative number of earthquakes with magnitude ≥ M in a given region and time, 'a' represents total seismicity, and the 'b-value' is typically close to 1.0.",
      hi: "गुटेनबर्ग-रिख्टर संबंध log₁₀ N = a - bM है, जहाँ N परिमाण ≥ M वाले भूकंपों की संचयी संख्या है, a कुल भूकंपीयता को दर्शाता है और b-मान सामान्यतः 1.0 के निकट होता है।",
      keyFormula: "\\log_{10} N = a - bM"
    }
  },

  // --- ELECTRODYNAMICS & EM THEORY ---
  {
    id: 81,
    questionId: 'CUET23_EM_01',
    category: 'Electrodynamics & EM',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A plane electromagnetic wave propagates in free space with electric field amplitude E₀ = 300 V/m. The average Poynting vector magnitude (intensity) is approximately: (Take c = 3 × 10⁸ m/s, ε₀ = 8.85 × 10⁻¹² F/m)",
    textHi: "एक समतल विद्युतचुंबकीय तरंग मुक्त आकाश में विद्युत क्षेत्र आयाम E₀ = 300 V/m के साथ संचरित होती है। औसत पोयंटिंग वेक्टर परिमाण (तीव्रता) लगभग क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_81_1', textEn: '119.5 W/m²', textHi: '119.5 W/m²' },
      { id: 2, optionId: 'OPT_81_2', textEn: '239 W/m²', textHi: '239 W/m²' },
      { id: 3, optionId: 'OPT_81_3', textEn: '59.8 W/m²', textHi: '59.8 W/m²' },
      { id: 4, optionId: 'OPT_81_4', textEn: '300 W/m²', textHi: '300 W/m²' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Average Poynting vector magnitude ⟨S⟩ = (1/2) ε₀ c E₀² = 0.5 × (8.854 × 10⁻¹²) × (3 × 10⁸) × (300)² = 0.5 × 2.656 × 10⁻³ × 90,000 ≈ 119.5 W/m².",
      hi: "औसत पोयंटिंग वेक्टर का परिमाण ⟨S⟩ = (1/2) ε₀ c E₀² = 0.5 × 8.854 × 10⁻¹² × 3 × 10⁸ × 90000 ≈ 119.5 W/m²।",
      keyFormula: "\\langle S \\rangle = \\frac{1}{2} \\varepsilon_0 c E_0^2 = \\frac{E_0^2}{2 \\eta_0} \\quad (\\eta_0 \\approx 377\\, \\Omega)"
    }
  },
  {
    id: 82,
    questionId: 'CUET23_EM_02',
    category: 'Electrodynamics & EM',
    examYear: '2023',
    difficulty: 'Advanced',
    textEn: "At an interface between two linear dielectric media with no free surface charges (σ_f = 0), which pair of electromagnetic field components must be continuous?",
    textHi: "दो रैखिक परावैद्युत माध्यमों के बीच की सीमा पर जहाँ कोई मुक्त पृष्ठ आवेश नहीं है (σ_f = 0), विद्युतचुंबकीय क्षेत्र के घटकों का कौन सा युग्म निरंतर (सतत) होना चाहिए?",
    options: [
      { id: 1, optionId: 'OPT_82_1', textEn: 'Normal D and Tangential E', textHi: 'अभिलम्बवत D और स्पर्शरेखीय E' },
      { id: 2, optionId: 'OPT_82_2', textEn: 'Normal E and Tangential D', textHi: 'अभिलम्बवत E और स्पर्शरेखीय D' },
      { id: 3, optionId: 'OPT_82_3', textEn: 'Normal B and Normal E', textHi: 'अभिलम्बवत B और अभिलम्बवत E' },
      { id: 4, optionId: 'OPT_82_4', textEn: 'Tangential B and Tangential E', textHi: 'स्पर्शरेखीय B और स्पर्शरेखीय E' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "From Gauss's law ∇·D = ρ_f, with σ_f = 0, D₁ₙ - D₂ₙ = 0 ⇒ D₁ₙ = D₂ₙ (Normal D is continuous). From Faraday's law ∇×E = -∂B/∂t, line integral over a shrinking rectangle gives E₁ₜ - E₂ₜ = 0 ⇒ E₁ₜ = E₂ₜ (Tangential E is continuous).",
      hi: "गॉस नियम से σ_f = 0 होने पर D का अभिलम्ब घटक निरंतर होता है (D₁ₙ = D₂ₙ), और फैराडे नियम से E का स्पर्शरेखीय घटक निरंतर होता है (E₁ₜ = E₂ₜ)।",
      keyFormula: "D_{1n} = D_{2n} \\quad \\text{and} \\quad E_{1t} = E_{2t}"
    }
  },
  {
    id: 83,
    questionId: 'CUET23_EM_03',
    category: 'Electrodynamics & EM',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "The skin depth (δ) of electromagnetic waves in a good conductor with conductivity σ and magnetic permeability μ at angular frequency ω is given by:",
    textHi: "कोणीय आवृत्ति ω पर चालकता σ और चुंबकीय पारगम्यता μ वाले सुचालक में विद्युतचुंबकीय तरंगों की त्वचा गहराई (स्किन डेप्थ, δ) का सूत्र है:",
    options: [
      { id: 1, optionId: 'OPT_83_1', textEn: '√(2 / (ω μ σ))', textHi: '√(2 / (ω μ σ))' },
      { id: 2, optionId: 'OPT_83_2', textEn: '√(ω μ / 2σ)', textHi: '√(ω μ / 2σ)' },
      { id: 3, optionId: 'OPT_83_3', textEn: '2 / (ω μ σ)', textHi: '2 / (ω μ σ)' },
      { id: 4, optionId: 'OPT_83_4', textEn: '1 / √(ω μ σ)', textHi: '1 / √(ω μ σ)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Skin depth δ is the distance at which wave amplitude decays to 1/e of its surface value in a good conductor (σ ≫ ωε): δ = √(2 / (ω μ σ)).",
      hi: "अच्छे चालक में त्वचा गहराई वह दूरी है जिस पर आयाम घटकर अपने मूल मान का 1/e रह जाता है: δ = √(2 / (ω μ σ))।",
      keyFormula: "\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}}"
    }
  },

  // --- QUANTUM MECHANICS & MODERN PHYSICS ---
  {
    id: 84,
    questionId: 'CUET23_QM_01',
    category: 'Modern Physics & Quantum',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "For a particle of mass m trapped in a one-dimensional infinite potential well of length L (0 < x < L), the ratio of the energy of the second excited state to the ground state is:",
    textHi: "लंबाई L के एक-विमीय अनंत विभव कूप (0 < x < L) में द्रव्यमान m के कण के लिए, द्वितीय उत्तेजित अवस्था की ऊर्जा और मूल अवस्था की ऊर्जा का अनुपात क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_84_1', textEn: '4 : 1', textHi: '4 : 1' },
      { id: 2, optionId: 'OPT_84_2', textEn: '9 : 1', textHi: '9 : 1' },
      { id: 3, optionId: 'OPT_84_3', textEn: '3 : 1', textHi: '3 : 1' },
      { id: 4, optionId: 'OPT_84_4', textEn: '16 : 1', textHi: '16 : 1' }
    ],
    correctOptionId: 2,
    explanation: {
      en: "Energy levels are En = n² E₁, where n=1 is ground state (E₁), n=2 is 1st excited state (4E₁), and n=3 is 2nd excited state (9E₁). Hence E₃ / E₁ = 3² / 1² = 9 : 1.",
      hi: "ऊर्जा स्तर En = n² E₁ होते हैं। n=1 मूल अवस्था है (E₁), n=2 प्रथम उत्तेजित अवस्था है (4E₁), और n=3 द्वितीय उत्तेजित अवस्था है (9E₁)। अतः E₃ / E₁ = 9 : 1।",
      keyFormula: "E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}, \\quad \\frac{E_3}{E_1} = 3^2 = 9"
    }
  },
  {
    id: 85,
    questionId: 'CUET23_QM_02',
    category: 'Modern Physics & Quantum',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "The commutator of position x and momentum operator p_x squared, [x, p_x²], evaluates to:",
    textHi: "स्थिति x और संवेग संकारक p_x के वर्ग का क्रमविनिमेय मान, [x, p_x²], क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_85_1', textEn: '2 i ħ p_x', textHi: '2 i ħ p_x' },
      { id: 2, optionId: 'OPT_85_2', textEn: '-2 i ħ p_x', textHi: '-2 i ħ p_x' },
      { id: 3, optionId: 'OPT_85_3', textEn: 'i ħ p_x', textHi: 'i ħ p_x' },
      { id: 4, optionId: 'OPT_85_4', textEn: '0', textHi: '0' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Using the commutator identity [A, BC] = [A, B]C + B[A, C]: [x, p_x²] = [x, p_x] p_x + p_x [x, p_x]. Since [x, p_x] = iħ, we get: iħ p_x + p_x (iħ) = 2 i ħ p_x.",
      hi: "क्रमविनिमेय सर्वसमिका [A, BC] = [A, B]C + B[A, C] का प्रयोग करने पर: [x, p_x²] = [x, p_x]p_x + p_x[x, p_x] = iħ p_x + iħ p_x = 2 i ħ p_x।",
      keyFormula: "[x, p_x^2] = 2 i \\hbar p_x"
    }
  },
  {
    id: 86,
    questionId: 'CUET23_QM_03',
    category: 'Modern Physics & Quantum',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "In the Compton scattering experiment, the maximum possible shift in wavelength (Δλ_max) occurs when the photon scattering angle θ is:",
    textHi: "कॉम्पटन प्रकीर्णन प्रयोग में, तरंगदैर्ध्य में अधिकतम संभव विस्थापन (Δλ_max) तब होता है जब फोटॉन का प्रकीर्णन कोण θ होता है:",
    options: [
      { id: 1, optionId: 'OPT_86_1', textEn: '0°', textHi: '0°' },
      { id: 2, optionId: 'OPT_86_2', textEn: '90°', textHi: '90°' },
      { id: 3, optionId: 'OPT_86_3', textEn: '180°', textHi: '180°' },
      { id: 4, optionId: 'OPT_86_4', textEn: '45°', textHi: '45°' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "Compton shift formula is Δλ = (h / m₀c) (1 - cos θ). The term (1 - cos θ) reaches its maximum value of 1 - (-1) = 2 when θ = 180° (backscattering), resulting in Δλ_max = 2h / m₀c ≈ 0.0485 Å.",
      hi: "कॉम्पटन विस्थापन सूत्र Δλ = (h/m₀c)(1 - cos θ) है। (1 - cos θ) का अधिकतम मान 2 होता है जब θ = 180° (पश्च-प्रकीर्णन) हो, जिससे Δλ_max = 2h/m₀c प्राप्त होता है।",
      keyFormula: "\\Delta \\lambda = \\frac{h}{m_0 c}(1 - \\cos \\theta) \\implies \\Delta \\lambda_{max} = \\frac{2h}{m_0 c} \\quad (\\text{at } \\theta = 180^\\circ)"
    }
  },

  // --- THERMODYNAMICS & STATISTICAL MECHANICS ---
  {
    id: 87,
    questionId: 'CUET23_TH_01',
    category: 'Thermodynamics & Stat Mech',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A Carnot engine works between heat reservoirs at temperatures 500 K and 300 K. If it absorbs 1000 J of heat from the high-temperature reservoir per cycle, the work output per cycle is:",
    textHi: "एक कार्नो इंजन 500 K और 300 K तापमान वाले ऊष्मा जलाशयों के बीच कार्य करता है। यदि यह प्रति चक्र उच्च तापमान वाले जलाशय से 1000 J ऊष्मा अवशोषित करता है, तो प्रति चक्र कार्य उत्पादन होगा:",
    options: [
      { id: 1, optionId: 'OPT_87_1', textEn: '400 J', textHi: '400 J' },
      { id: 2, optionId: 'OPT_87_2', textEn: '600 J', textHi: '600 J' },
      { id: 3, optionId: 'OPT_87_3', textEn: '200 J', textHi: '200 J' },
      { id: 4, optionId: 'OPT_87_4', textEn: '800 J', textHi: '800 J' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Efficiency η = 1 - (Tc / Th) = 1 - (300 / 500) = 1 - 0.6 = 0.40 (40%). Work done W = η · Qh = 0.40 × 1000 J = 400 J.",
      hi: "दक्षता η = 1 - (300/500) = 0.40। किया गया कार्य W = η · Qh = 0.40 × 1000 J = 400 J।",
      keyFormula: "W = \\eta \\cdot Q_H = \\left(1 - \\frac{T_C}{T_H}\\right) Q_H = \\left(1 - \\frac{300}{500}\\right) \\times 1000 = 400\\text{ J}"
    }
  },
  {
    id: 88,
    questionId: 'CUET23_TH_02',
    category: 'Thermodynamics & Stat Mech',
    examYear: '2022',
    difficulty: 'Advanced',
    textEn: "Which thermodynamic potential remains constant in a reversible, isothermal and isobaric process?",
    textHi: "एक उत्क्रमणीय, समतापीय (isothermal) और समदाबीय (isobaric) प्रक्रम में कौन सा ऊष्मागतिक विभव स्थिर रहता है?",
    options: [
      { id: 1, optionId: 'OPT_88_1', textEn: 'Internal Energy (U)', textHi: 'आंतरिक ऊर्जा (U)' },
      { id: 2, optionId: 'OPT_88_2', textEn: 'Helmholtz Free Energy (F)', textHi: 'हेल्महोल्ट्ज़ मुक्त ऊर्जा (F)' },
      { id: 3, optionId: 'OPT_88_3', textEn: 'Gibbs Free Energy (G)', textHi: 'गिब्स मुक्त ऊर्जा (G)' },
      { id: 4, optionId: 'OPT_88_4', textEn: 'Enthalpy (H)', textHi: 'एन्थैल्पी (H)' }
    ],
    correctOptionId: 3,
    explanation: {
      en: "The differential of Gibbs free energy is dG = -S dT + V dP. In an isothermal (dT = 0) and isobaric (dP = 0) process, dG = 0, meaning Gibbs free energy G remains constant. This is why phase transitions at constant T and P are characterized by constant G.",
      hi: "गिब्स मुक्त ऊर्जा का अवकल रूप dG = -S dT + V dP होता है। समतापीय (dT = 0) एवं समदाबीय (dP = 0) प्रक्रम में dG = 0 होता है, अर्थात G स्थिर रहता है।",
      keyFormula: "dG = -S\\,dT + V\\,dP \\implies dG = 0 \\quad (\\text{at constant } T, P)"
    }
  },

  // --- OPTICS & WAVES ---
  {
    id: 89,
    questionId: 'CUET23_OP_01',
    category: 'Optics & Waves',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "Light is incident on a glass plate (refractive index n = √3 ≈ 1.732) at Brewster's angle. The angle of refraction inside the glass is:",
    textHi: "प्रकाश कांच की पट्टिका (अपवर्तनांक n = √3 ≈ 1.732) पर ब्रूस्टर कोण पर आपतित होता है। कांच के अंदर अपवर्तन कोण क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_89_1', textEn: '30°', textHi: '30°' },
      { id: 2, optionId: 'OPT_89_2', textEn: '60°', textHi: '60°' },
      { id: 3, optionId: 'OPT_89_3', textEn: '45°', textHi: '45°' },
      { id: 4, optionId: 'OPT_89_4', textEn: '90°', textHi: '90°' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "By Brewster's Law, tan(θ_p) = n = √3 ⇒ θ_p = 60°. At Brewster's angle, the reflected and refracted rays are perpendicular to each other: θ_p + r = 90°. Therefore, angle of refraction r = 90° - 60° = 30°.",
      hi: "ब्रूस्टर नियम से: tan(θ_p) = n = √3 ⇒ θ_p = 60°। ब्रूस्टर कोण पर परावर्तित एवं अपवर्तित किरणें परस्पर लंबवत होती हैं: θ_p + r = 90°, अतः r = 90° - 60° = 30°।",
      keyFormula: "\\tan \\theta_p = n, \\quad \\theta_p + r = 90^\\circ \\implies r = 90^\\circ - 60^\\circ = 30^\\circ"
    }
  },
  {
    id: 90,
    questionId: 'CUET23_OP_02',
    category: 'Optics & Waves',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "In a diffraction grating having 5000 lines per centimeter, what is the maximum order visible for yellow light of wavelength 6000 Å (600 nm) at normal incidence?",
    textHi: "5000 रेखाएं प्रति सेंटीमीटर वाली एक विवर्तन ग्रेटिंग में 6000 Å (600 nm) तरंगदैर्ध्य के पीले प्रकाश के लिए अभिलंबवत आपतन पर दिखाई देने वाली अधिकतम कोटि (ऑर्डर) क्या है?",
    options: [
      { id: 1, optionId: 'OPT_90_1', textEn: '3', textHi: '3' },
      { id: 2, optionId: 'OPT_90_2', textEn: '4', textHi: '4' },
      { id: 3, optionId: 'OPT_90_3', textEn: '2', textHi: '2' },
      { id: 4, optionId: 'OPT_90_4', textEn: '5', textHi: '5' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Grating element d = (a + b) = 1 cm / 5000 = 10⁻² / 5000 = 2 × 10⁻⁶ m = 2000 nm. Grating equation is d sin θ = n λ. Maximum order occurs when sin θ ≤ 1: n ≤ d / λ = 2000 nm / 600 nm = 3.33. Since n must be an integer, n_max = 3.",
      hi: "ग्रेटिंग अवयव d = 1/5000 सेमी = 2 × 10⁻⁶ मीटर = 2000 एनएम। d sin θ = n λ में sin θ ≤ 1 रखने पर: n ≤ 2000/600 = 3.33। चूंकि n पूर्णांक होना चाहिए, n_max = 3।",
      keyFormula: "n_{max} = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor = \\left\\lfloor \\frac{2000 \\text{ nm}}{600 \\text{ nm}} \\right\\rfloor = 3"
    }
  },

  // --- MECHANICS & SPECIAL RELATIVITY ---
  {
    id: 91,
    questionId: 'CUET23_MECH_01',
    category: 'Mechanics & Relativity',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A relativistic spaceship moves past Earth at speed v = 0.8c. According to Earth observers, the spaceship's clock takes 50 seconds to tick. How much time elapses on the clock according to an astronaut on board the spaceship?",
    textHi: "एक आपेक्षिकीय अंतरिक्ष यान v = 0.8c की गति से पृथ्वी के पास से गुजरता है। पृथ्वी के प्रेक्षकों के अनुसार यान की घड़ी 50 सेकंड लेती है। यान में सवार अंतरिक्ष यात्री के अनुसार घड़ी पर कितना समय बीतेगा?",
    options: [
      { id: 1, optionId: 'OPT_91_1', textEn: '30 seconds', textHi: '30 सेकंड' },
      { id: 2, optionId: 'OPT_91_2', textEn: '83.3 seconds', textHi: '83.3 सेकंड' },
      { id: 3, optionId: 'OPT_91_3', textEn: '40 seconds', textHi: '40 सेकंड' },
      { id: 4, optionId: 'OPT_91_4', textEn: '50 seconds', textHi: '50 सेकंड' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Lorentz factor γ = 1 / √(1 - (0.8)²) = 1 / √(0.36) = 1 / 0.6 = 5/3. Earth observers measure dilated time Δt = γ Δt₀ = 50 s. Proper time elapsed for the astronaut on board is Δt₀ = Δt / γ = 50 / (5/3) = 50 × 0.6 = 30 seconds.",
      hi: "गामा कारक γ = 1 / √(1 - 0.64) = 1/0.6 = 5/3। पृथ्वी प्रेक्षक विस्तारित समय Δt = γ Δt₀ = 50 सेकंड मापते हैं। उचित समय Δt₀ = 50 × 0.6 = 30 सेकंड।",
      keyFormula: "\\Delta t = \\gamma \\Delta t_0 \\implies \\Delta t_0 = \\frac{\\Delta t}{\\gamma} = 50 \\times \\sqrt{1 - (0.8)^2} = 30\\text{ s}"
    }
  },
  {
    id: 92,
    questionId: 'CUET23_MECH_02',
    category: 'Mechanics & Relativity',
    examYear: '2022',
    difficulty: 'Advanced',
    textEn: "For a central force field V(r), which of the following quantities is strictly conserved throughout the motion?",
    textHi: "एक केंद्रीय बल क्षेत्र V(r) के लिए, निम्नलिखित में से कौन सी राशि गति के दौरान पूर्णतः संरक्षित रहती है?",
    options: [
      { id: 1, optionId: 'OPT_92_1', textEn: 'Total Energy and Angular Momentum Vector', textHi: 'कुल ऊर्जा और कोणीय संवेग सदिश' },
      { id: 2, optionId: 'OPT_92_2', textEn: 'Linear Momentum Vector', textHi: 'रैखिक संवेग सदिश' },
      { id: 3, optionId: 'OPT_92_3', textEn: 'Only the radial component of velocity', textHi: 'केवल वेग का त्रिज्यीय घटक' },
      { id: 4, optionId: 'OPT_92_4', textEn: 'Only Angular Momentum magnitude, not direction', textHi: 'केवल कोणीय संवेग का परिमाण, दिशा नहीं' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In central force motion F = f(r) r̂, torque τ = r × F = 0 because r and F are parallel. Since τ = dL/dt = 0, the angular momentum vector L (both magnitude and direction) is strictly conserved, confining motion to a plane. Energy E = T + V is also conserved because the field is conservative.",
      hi: "केंद्रीय बल गति में बल आघूर्ण τ = r × F = 0 होता है क्योंकि r और F समानांतर होते हैं। चूंकि dL/dt = 0, कोणीय संवेग सदिश L (परिमाण एवं दिशा दोनों) संरक्षित रहता है, जिससे गति एक समतल तक सीमित रहती है। ऊर्जा E भी संरक्षित रहती है।",
      keyFormula: "\\vec{\\tau} = \\vec{r} \\times \\vec{F}(r) = 0 \\implies \\vec{L} = \\text{constant vector}"
    }
  },

  // --- ELECTRONICS & SEMICONDUCTORS ---
  {
    id: 93,
    questionId: 'CUET23_EL_01',
    category: 'Electronics & Semiconductors',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "An inverting operational amplifier circuit has an input resistor R₁ = 10 kΩ and feedback resistor R_f = 100 kΩ. If an input voltage of +0.5 V is applied, what is the output voltage?",
    textHi: "एक इनवर्टिंग ऑपरेशनल एम्प्लीफायर परिपथ में इनपुट प्रतिरोध R₁ = 10 kΩ और फीडबैक प्रतिरोध R_f = 100 kΩ है। यदि +0.5 V का इनपुट वोल्टेज लगाया जाता है, तो आउटपुट वोल्टेज क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_93_1', textEn: '-5.0 V', textHi: '-5.0 V' },
      { id: 2, optionId: 'OPT_93_2', textEn: '+5.0 V', textHi: '+5.0 V' },
      { id: 3, optionId: 'OPT_93_3', textEn: '-0.05 V', textHi: '-0.05 V' },
      { id: 4, optionId: 'OPT_93_4', textEn: '+5.5 V', textHi: '+5.5 V' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For an ideal inverting op-amp configuration, closed-loop voltage gain Av = -R_f / R₁ = -100 kΩ / 10 kΩ = -10. Output voltage Vout = Av × Vin = (-10) × (+0.5 V) = -5.0 V.",
      hi: "इनवर्टिंग ऑप-एम्प के लिए वोल्टेज लब्धि Av = -R_f / R₁ = -100/10 = -10। आउटपुट वोल्टेज Vout = -10 × 0.5 V = -5.0 V।",
      keyFormula: "V_{out} = -\\frac{R_f}{R_1} V_{in} = -\\frac{100\\text{ k}\\Omega}{10\\text{ k}\\Omega} \\times 0.5\\text{ V} = -5.0\\text{ V}"
    }
  },
  {
    id: 94,
    questionId: 'CUET23_EL_02',
    category: 'Electronics & Semiconductors',
    examYear: '2022',
    difficulty: 'Foundational',
    textEn: "A Zener diode is predominantly operated in which region of its characteristic curve when utilized as a voltage regulator?",
    textHi: "वोल्टेज नियामक के रूप में उपयोग किए जाने पर जेनर डायोड को मुख्य रूप से अपने अभिलाक्षणिक वक्र के किस क्षेत्र में संचालित किया जाता है?",
    options: [
      { id: 1, optionId: 'OPT_94_1', textEn: 'Reverse breakdown region', textHi: 'उत्क्रम भंजन क्षेत्र (रिवर्स ब्रेकडाउन)' },
      { id: 2, optionId: 'OPT_94_2', textEn: 'Forward bias active region', textHi: 'अग्र अभिनति सक्रिय क्षेत्र' },
      { id: 3, optionId: 'OPT_94_3', textEn: 'Reverse saturation current region prior to breakdown', textHi: 'भंजन से पूर्व उत्क्रम संतृप्ति धारा क्षेत्र' },
      { id: 4, optionId: 'OPT_94_4', textEn: 'Cutoff region at zero voltage', textHi: 'शून्य वोल्टेज पर अंतक क्षेत्र' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In the reverse breakdown region, a Zener diode maintains an almost perfectly constant terminal voltage (Zener voltage Vz) over a wide range of reverse currents, making it ideal for shunt voltage regulation.",
      hi: "उत्क्रम भंजन क्षेत्र में, जेनर डायोड उत्क्रम धाराओं की एक विस्तृत श्रृंखला में लगभग पूरी तरह से स्थिर टर्मिनल वोल्टेज (Vz) बनाए रखता है, जो इसे वोल्टेज नियमन के लिए आदर्श बनाता है।",
      keyFormula: "V_Z \\approx \\text{constant when } I_{Z(min)} \\le I_Z \\le I_{Z(max)}"
    }
  },

  // --- MATHEMATICAL METHODS ---
  {
    id: 95,
    questionId: 'CUET23_MATH_01',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "If a 3 × 3 matrix A has eigenvalues λ₁ = 2, λ₂ = -1, and λ₃ = 4, then the determinant and trace of matrix A are respectively:",
    textHi: "यदि एक 3 × 3 आव्यूह A के आइगेनमान λ₁ = 2, λ₂ = -1, और λ₃ = 4 हैं, तो आव्यूह A का सारणिक (determinant) और अनुरेख (trace) क्रमशः क्या होंगे?",
    options: [
      { id: 1, optionId: 'OPT_95_1', textEn: 'det(A) = -8, Tr(A) = 5', textHi: 'det(A) = -8, Tr(A) = 5' },
      { id: 2, optionId: 'OPT_95_2', textEn: 'det(A) = 8, Tr(A) = 5', textHi: 'det(A) = 8, Tr(A) = 5' },
      { id: 3, optionId: 'OPT_95_3', textEn: 'det(A) = 5, Tr(A) = -8', textHi: 'det(A) = 5, Tr(A) = -8' },
      { id: 4, optionId: 'OPT_95_4', textEn: 'det(A) = -6, Tr(A) = 6', textHi: 'det(A) = -6, Tr(A) = 6' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Trace is the sum of eigenvalues: Tr(A) = λ₁ + λ₂ + λ₃ = 2 + (-1) + 4 = 5. Determinant is the product of eigenvalues: det(A) = λ₁ · λ₂ · λ₃ = (2) × (-1) × (4) = -8.",
      hi: "अनुरेख आइगेनमानों का योग होता है: Tr(A) = 2 + (-1) + 4 = 5। सारणिक आइगेनमानों का गुणनफल होता है: det(A) = 2 × (-1) × 4 = -8।",
      keyFormula: "\\text{Tr}(A) = \\sum \\lambda_i = 5, \\quad \\det(A) = \\prod \\lambda_i = -8"
    }
  },
  {
    id: 96,
    questionId: 'CUET23_MATH_02',
    category: 'Mathematical Methods',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "For vector field F = (2xy) î + (x² + 2yz) ĵ + (y²) k̂, the curl ∇ × F is equal to:",
    textHi: "सदिश क्षेत्र F = (2xy) î + (x² + 2yz) ĵ + (y²) k̂ के लिए कर्ल ∇ × F का मान क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_96_1', textEn: '0 (zero vector, F is conservative)', textHi: '0 (शून्य सदिश, F संरक्षी है)' },
      { id: 2, optionId: 'OPT_96_2', textEn: '2y î + 2x ĵ', textHi: '2y î + 2x ĵ' },
      { id: 3, optionId: 'OPT_96_3', textEn: '4xy k̂', textHi: '4xy k̂' },
      { id: 4, optionId: 'OPT_96_4', textEn: 'x î + y ĵ + z k̂', textHi: 'x î + y ĵ + z k̂' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Compute curl: (∇ × F)_x = ∂(y²)/∂y - ∂(x²+2yz)/∂z = 2y - 2y = 0. (∇ × F)_y = ∂(2xy)/∂z - ∂(y²)/∂x = 0 - 0 = 0. (∇ × F)_z = ∂(x²+2yz)/∂x - ∂(2xy)/∂y = 2x - 2x = 0. Hence ∇ × F = 0, indicating an irrotational and conservative vector field.",
      hi: "कर्ल के घटक निकालने पर: x-घटक: 2y - 2y = 0; y-घटक: 0 - 0 = 0; z-घटक: 2x - 2x = 0। अतः ∇ × F = 0 (अघूर्णी एवं संरक्षी क्षेत्र)।",
      keyFormula: "\\vec{\\nabla} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\partial/\\partial x & \\partial/\\partial y & \\partial/\\partial z \\\\ 2xy & x^2+2yz & y^2 \\end{vmatrix} = \\vec{0}"
    }
  },

  // --- MORE PRACTICE DPPS & SOLID EARTH GEOPHYSICS ---
  {
    id: 97,
    questionId: 'DPP_GEO_06',
    category: 'Solid Earth Geophysics',
    examYear: 'DPP Practice',
    difficulty: 'Moderate',
    textEn: "Which geophysical logging tool is primarily based on Archie's Law to estimate the water saturation (S_w) and hydrocarbon presence in petroleum reservoirs?",
    textHi: "पेट्रोलियम भंडारों में जल संतृप्ति (S_w) और हाइड्रोकार्बन उपस्थिति का अनुमान लगाने के लिए कौन सा भूभौतिकीय लॉगिंग उपकरण मुख्य रूप से आर्ची के नियम पर आधारित है?",
    options: [
      { id: 1, optionId: 'OPT_97_1', textEn: 'Electrical Resistivity / Induction Log', textHi: 'विद्युत प्रतिरोधकता / प्रेरण लॉग' },
      { id: 2, optionId: 'OPT_97_2', textEn: 'Gamma Ray Log', textHi: 'गामा किरण लॉग' },
      { id: 3, optionId: 'OPT_97_3', textEn: 'Sonic / Acoustic Velocity Log', textHi: 'ध्वनिक वेग लॉग' },
      { id: 4, optionId: 'OPT_97_4', textEn: 'Neutron Porosity Log', textHi: 'न्यूट्रॉन सरंध्रता लॉग' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Archie's Law (1942) relates the electrical resistivity of a rock (R_t) to its porosity (φ), formation brine resistivity (R_w), and water saturation (S_w): S_w^n = (a · R_w) / (φ^m · R_t). Hydrocarbons are electrical insulators compared to salty formation brine, producing anomalously high electrical resistivity readings.",
      hi: "आर्ची का नियम शैल की विद्युत प्रतिरोधकता (R_t) को उसकी सरंध्रता (φ) और जल संतृप्ति (S_w) से जोड़ता है। नमकीन पानी की तुलना में हाइड्रोकार्बन विद्युत कुचालक होते हैं, जिससे उच्च प्रतिरोधकता दर्ज होती है।",
      keyFormula: "S_w^n = \\frac{a R_w}{\\phi^m R_t}"
    }
  },
  {
    id: 98,
    questionId: 'DPP_GEO_07',
    category: 'Solid Earth Geophysics',
    examYear: 'DPP Practice',
    difficulty: 'Moderate',
    textEn: "In seismology, the shadow zone for direct P-waves on the Earth's surface occurs at angular epicentral distances between approximately:",
    textHi: "भूकंप विज्ञान में, पृथ्वी की सतह पर प्रत्यक्ष P-तरंगों का छाया क्षेत्र लगभग किस कोणीय अधिकेंद्रीय दूरी के बीच होता है?",
    options: [
      { id: 1, optionId: 'OPT_98_1', textEn: '103° to 143°', textHi: '103° से 143°' },
      { id: 2, optionId: 'OPT_98_2', textEn: '0° to 90°', textHi: '0° से 90°' },
      { id: 3, optionId: 'OPT_98_3', textEn: '143° to 180°', textHi: '143° से 180°' },
      { id: 4, optionId: 'OPT_98_4', textEn: '90° to 103°', textHi: '90° से 103°' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Due to the drastic drop in P-wave velocity as waves enter the liquid outer core from the solid silicate mantle (refraction strongly bending waves downwards), direct P-waves are not recorded by seismographs between 103° and 143° from the earthquake focus.",
      hi: "ठोस मेंटल से द्रव बाह्य क्रोड में प्रवेश करते समय P-तरंग के वेग में भारी कमी के कारण तीव्र अपवर्तन होता है, जिससे 103° से 143° के बीच प्रत्यक्ष P-तरंगें प्राप्त नहीं होती हैं।",
      keyFormula: "\\text{P-wave Shadow Zone: } 103^\\circ \\le \\Delta \\le 143^\\circ"
    }
  },
  {
    id: 99,
    questionId: 'DPP_GEO_08',
    category: 'Solid Earth Geophysics',
    examYear: 'DPP Practice',
    difficulty: 'Foundational',
    textEn: "The Earth's main geomagnetic field is primarily generated by:",
    textHi: "पृथ्वी का मुख्य भू-चुंबकीय क्षेत्र मुख्य रूप से किसके द्वारा उत्पन्न होता है?",
    options: [
      { id: 1, optionId: 'OPT_99_1', textEn: 'Convective motion of molten iron-nickel in the liquid outer core (Geodynamo)', textHi: 'द्रव बाह्य क्रोड में पिघले लोहे-निकल की संवहनी गति (भू-डायनेमो)' },
      { id: 2, optionId: 'OPT_99_2', textEn: 'Permanent magnetization of ferromagnetic rocks in the crust', textHi: 'भूपर्पटी में लौहचुंबकीय चट्टानों का स्थायी चुंबकत्व' },
      { id: 3, optionId: 'OPT_99_3', textEn: 'Solar wind interaction with the upper ionosphere', textHi: 'ऊपरी आयनमंडल के साथ सौर पवन की अंतःक्रिया' },
      { id: 4, optionId: 'OPT_99_4', textEn: 'Solid inner core rotation alone', textHi: 'केवल ठोस आंतरिक क्रोड का घूर्णन' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The geodynamo hypothesis explains Earth's magnetic field through the self-exciting dynamo mechanism driven by thermal and compositional convection of electrically conducting liquid iron-nickel alloy in the outer core, combined with the Coriolis effect from Earth's rotation.",
      hi: "भू-डायनेमो सिद्धांत के अनुसार, पृथ्वी का चुंबकीय क्षेत्र बाह्य क्रोड में विद्युत चालक पिघले हुए लोहे-निकल के संवहन और कोरिओलिस प्रभाव द्वारा उत्पन्न होता है।",
      keyFormula: "\\text{Geodynamo: Convection of liquid outer core Fe-Ni} + \\text{Coriolis Effect}"
    }
  },
  {
    id: 100,
    questionId: 'DPP_GEO_09',
    category: 'Solid Earth Geophysics',
    examYear: 'DPP Practice',
    difficulty: 'Advanced',
    textEn: "According to Airy's hypothesis of isostasy, topographic mountains are supported by:",
    textHi: "एयरी के समस्थिति (आइसोस्टेसी) सिद्धांत के अनुसार, स्थलाकृतिक पर्वतों को सहारा मिलता है:",
    options: [
      { id: 1, optionId: 'OPT_100_1', textEn: 'Deep crustal roots of lower density protruding into the denser mantle', textHi: 'सघन मेंटल में उभरी कम घनत्व वाली गहरी भूपर्पटी जड़ों द्वारा' },
      { id: 2, optionId: 'OPT_100_2', textEn: 'Uniform depth of compensation with varying crustal densities (Pratt model)', textHi: 'परिवर्तनीय क्रस्ट घनत्व के साथ एकसमान प्रतिकार गहराई द्वारा' },
      { id: 3, optionId: 'OPT_100_3', textEn: 'Rigid lithospheric flexure with no mantle displacement', textHi: 'बिना किसी मेंटल विस्थापन के दृढ़ लिथोस्फेरिक मोड़ द्वारा' },
      { id: 4, optionId: 'OPT_100_4', textEn: 'Magnetic levitation forces', textHi: 'चुंबकीय उत्तोलन बलों द्वारा' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Sir George Airy proposed that crustal rocks have constant density, and taller topographic features like mountain ranges are compensated by deeper crustal roots penetrating into the denser mantle, much like icebergs floating in water (depth of root t = h · ρ_c / (ρ_m - ρ_c)).",
      hi: "सर जॉर्ज एयरी ने प्रस्तावित किया कि क्रस्ट की चट्टानों का घनत्व एकसमान होता है, और ऊंचे पर्वत सघन मेंटल में धंसी गहरी क्रस्टीय जड़ों द्वारा संतुलित होते हैं, जैसे पानी में तैरते हिमखंड।",
      keyFormula: "t = \\frac{\\rho_c}{\\rho_m - \\rho_c} h \\quad (\\text{Airy Root Depth})"
    }
  },

  // --- MATHEMATICAL METHODS & LINEAR ALGEBRA (101-107) ---
  {
    id: 101,
    questionId: 'CUET_MATH_03',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "If A = [[1, 2], [3, 4]], then using the Cayley-Hamilton theorem, A² is equal to:",
    textHi: "यदि A = [[1, 2], [3, 4]] है, तो केली-हैमिल्टन प्रमेय का प्रयोग करने पर A² का मान किसके बराबर होगा?",
    options: [
      { id: 1, optionId: 'OPT_101_1', textEn: '5A + 2I', textHi: '5A + 2I' },
      { id: 2, optionId: 'OPT_101_2', textEn: '5A - 2I', textHi: '5A - 2I' },
      { id: 3, optionId: 'OPT_101_3', textEn: '4A + 5I', textHi: '4A + 5I' },
      { id: 4, optionId: 'OPT_101_4', textEn: '-5A + 2I', textHi: '-5A + 2I' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Trace of A is Tr(A) = 1 + 4 = 5. Determinant is det(A) = (1)(4) - (2)(3) = 4 - 6 = -2. The characteristic equation is λ² - Tr(A)λ + det(A) = 0 ⇒ λ² - 5λ - 2 = 0. By Cayley-Hamilton theorem, A satisfies this: A² - 5A - 2I = 0 ⇒ A² = 5A + 2I.",
      hi: "अनुरेख Tr(A) = 1 + 4 = 5 और सारणिक det(A) = 4 - 6 = -2 है। अभिलाक्षणिक समीकरण λ² - 5λ - 2 = 0 होता है। केली-हैमिल्टन प्रमेय से A² - 5A - 2I = 0 ⇒ A² = 5A + 2I।",
      keyFormula: "A^2 - \\text{Tr}(A)A + \\det(A)I = 0 \\implies A^2 = 5A + 2I"
    }
  },
  {
    id: 102,
    questionId: 'CUET_MATH_04',
    category: 'Mathematical Methods',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "For an orthogonal matrix Q (satisfying Q^T Q = I), which of the following is always true regarding its eigenvalues?",
    textHi: "एक लांबिक आव्यूह Q (जो Q^T Q = I को संतुष्ट करता है) के आइगेनमानों के संबंध में निम्नलिखित में से कौन सा सदैव सत्य है?",
    options: [
      { id: 1, optionId: 'OPT_102_1', textEn: 'The modulus (absolute value) of each eigenvalue is 1 (|λ| = 1)', textHi: 'प्रत्येक आइगेनमान का मापांक (परम मान) 1 होता है (|λ| = 1)' },
      { id: 2, optionId: 'OPT_102_2', textEn: 'All eigenvalues must be purely imaginary', textHi: 'सभी आइगेनमान शुद्ध काल्पनिक होने चाहिए' },
      { id: 3, optionId: 'OPT_102_3', textEn: 'All eigenvalues must be zero', textHi: 'सभी आइगेनमान शून्य होने चाहिए' },
      { id: 4, optionId: 'OPT_102_4', textEn: 'The sum of eigenvalues is always zero', textHi: 'आइगेनमानों का योग सदैव शून्य होता है' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For any orthogonal matrix Q, lengths of vectors are preserved under multiplication: ‖Qx‖ = ‖x‖. If λ is an eigenvalue with eigenvector x, then Qx = λx, so ‖Qx‖ = |λ| ‖x‖ = ‖x‖. Since ‖x‖ ≠ 0, it follows that |λ| = 1. The eigenvalues lie on the unit circle in the complex plane.",
      hi: "लांबिक आव्यूह Q के लिए सदिशों की लंबाई संरक्षित रहती है: ‖Qx‖ = ‖x‖। यदि Qx = λx, तो |λ|‖x‖ = ‖x‖ ⇒ |λ| = 1। अतः सभी आइगेनमान सम्मिश्र तल में इकाई वृत्त पर स्थित होते हैं।",
      keyFormula: "|\\lambda| = 1 \\quad (\\text{for any eigenvalue of orthogonal } Q)"
    }
  },
  {
    id: 103,
    questionId: 'CUET_MATH_05',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "According to Leibniz's theorem, the n-th derivative of the product of two functions u(x) and v(x) is given by:",
    textHi: "लाइबनिज़ प्रमेय के अनुसार, दो फलनों u(x) और v(x) के गुणनफल का n-वाँ अवकलज होता है:",
    options: [
      { id: 1, optionId: 'OPT_103_1', textEn: 'Σ [n! / (r! (n-r)!)] · u_{n-r} · v_r', textHi: 'Σ [n! / (r! (n-r)!)] · u_{n-r} · v_r' },
      { id: 2, optionId: 'OPT_103_2', textEn: 'u_n · v_n', textHi: 'u_n · v_n' },
      { id: 3, optionId: 'OPT_103_3', textEn: 'u_n · v + u · v_n', textHi: 'u_n · v + u · v_n' },
      { id: 4, optionId: 'OPT_103_4', textEn: 'n! (u_n · v_n)', textHi: 'n! (u_n · v_n)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Leibniz's theorem generalizes the product rule to n-th order derivatives, mirroring the binomial theorem expansion: (uv)_n = Σ_{r=0}^n ⁿC_r · u_{n-r} · v_r.",
      hi: "लाइबनिज़ प्रमेय दो फलनों के गुणनफल के n-वें अवकलज को द्विपद प्रमेय के समरूप व्यक्त करता है: (uv)_n = Σ_{r=0}^n ⁿC_r · u_{n-r} · v_r।",
      keyFormula: "(u v)_n = \\sum_{r=0}^n \\binom{n}{r} u^{(n-r)} v^{(r)}"
    }
  },
  {
    id: 104,
    questionId: 'CUET_MATH_06',
    category: 'Mathematical Methods',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "The orthogonal trajectories of the family of parabolas y² = 4ax (where 'a' is an arbitrary parameter) are the family of:",
    textHi: "परवलयों के कुल y² = 4ax (जहाँ 'a' एक स्वेच्छ प्राचल है) के लांबिक प्रक्षेप पथ (ऑर्थोगोनल ट्रैजेक्ट्रीज) किस कुल का निर्माण करते हैं?",
    options: [
      { id: 1, optionId: 'OPT_104_1', textEn: 'Ellipses: 2x² + y² = c', textHi: 'दीर्घवृत्त: 2x² + y² = c' },
      { id: 2, optionId: 'OPT_104_2', textEn: 'Circles: x² + y² = c', textHi: 'वृत्त: x² + y² = c' },
      { id: 3, optionId: 'OPT_104_3', textEn: 'Hyperbolas: 2x² - y² = c', textHi: 'अतिपरवलय: 2x² - y² = c' },
      { id: 4, optionId: 'OPT_104_4', textEn: 'Straight lines: y = mx + c', textHi: 'सरल रेखाएं: y = mx + c' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Differentiating y² = 4ax with respect to x gives 2y dy/dx = 4a. Since 4a = y²/x, we have 2y dy/dx = y²/x ⇒ dy/dx = y / (2x). For orthogonal trajectories, replace dy/dx with -dx/dy: -dx/dy = y / (2x) ⇒ 2x dx = -y dy ⇒ 2x dx + y dy = 0. Integrating gives x² + y²/2 = c/2 ⇒ 2x² + y² = c (a family of coaxial ellipses).",
      hi: "y² = 4ax का अवकलन करने पर: 2y dy/dx = 4a = y²/x ⇒ dy/dx = y/(2x)। लांबिक पथ हेतु dy/dx को -dx/dy से प्रतिस्थापित करने पर: 2x dx + y dy = 0। समाकलन करने पर 2x² + y² = c (दीर्घवृत्त कुल) प्राप्त होता है।",
      keyFormula: "\\frac{dy}{dx} \\to -\\frac{dx}{dy} \\implies 2x\\,dx + y\\,dy = 0 \\implies 2x^2 + y^2 = c"
    }
  },
  {
    id: 105,
    questionId: 'CUET_MATH_07',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "An integrating factor for the first-order linear differential equation (x² + y²) dx - 2xy dy = 0 is:",
    textHi: "प्रथम कोटि के अवकल समीकरण (x² + y²) dx - 2xy dy = 0 का एक समाकलन गुणक (IF) है:",
    options: [
      { id: 1, optionId: 'OPT_105_1', textEn: '1 / x²', textHi: '1 / x²' },
      { id: 2, optionId: 'OPT_105_2', textEn: '1 / y²', textHi: '1 / y²' },
      { id: 3, optionId: 'OPT_105_3', textEn: 'e^x', textHi: 'e^x' },
      { id: 4, optionId: 'OPT_105_4', textEn: '1 / (x + y)', textHi: '1 / (x + y)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Here M = x² + y² and N = -2xy. ∂M/∂y = 2y and ∂N/∂x = -2y. Then (∂M/∂y - ∂N/∂x) / N = (2y - (-2y)) / (-2xy) = 4y / (-2xy) = -2/x, which is a function of x alone. Integrating factor IF = e^{∫ (-2/x) dx} = e^{-2 ln x} = 1/x².",
      hi: "यहाँ M = x² + y² और N = -2xy है। ∂M/∂y = 2y और ∂N/∂x = -2y। ((∂M/∂y - ∂N/∂x)/N) = 4y/(-2xy) = -2/x (केवल x का फलन)। अतः समाकलन गुणक IF = e^{∫ (-2/x) dx} = 1/x² है।",
      keyFormula: "\\text{IF} = e^{\\int \\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) dx} = e^{\\int -\\frac{2}{x}\\,dx} = \\frac{1}{x^2}"
    }
  },
  {
    id: 106,
    questionId: 'CUET_MATH_08',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "If r = x î + y ĵ + z k̂ is the position vector and r = |r|, then the divergence ∇ · r and curl ∇ × r are respectively:",
    textHi: "यदि r = x î + y ĵ + z k̂ स्थिति सदिश है और r = |r| है, तो अपसरण ∇ · r और कर्ल ∇ × r क्रमशः क्या होंगे?",
    options: [
      { id: 1, optionId: 'OPT_106_1', textEn: '3 and 0', textHi: '3 और 0' },
      { id: 2, optionId: 'OPT_106_2', textEn: '1 and 0', textHi: '1 और 0' },
      { id: 3, optionId: 'OPT_106_3', textEn: '0 and 3', textHi: '0 और 3' },
      { id: 4, optionId: 'OPT_106_4', textEn: '3 and r', textHi: '3 और r' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "∇ · r = ∂x/∂x + ∂y/∂y + ∂z/∂z = 1 + 1 + 1 = 3. The curl ∇ × r is computed as (∂z/∂y - ∂y/∂z)î + (∂x/∂z - ∂z/∂x)ĵ + (∂y/∂x - ∂x/∂y)k̂ = 0 î + 0 ĵ + 0 k̂ = 0.",
      hi: "स्थिति सदिश का अपसरण ∇ · r = 1 + 1 + 1 = 3 होता है तथा कर्ल ∇ × r = 0 (शून्य सदिश) होता है।",
      keyFormula: "\\vec{\\nabla} \\cdot \\vec{r} = 3, \\quad \\vec{\\nabla} \\times \\vec{r} = \\vec{0}"
    }
  },
  {
    id: 107,
    questionId: 'CUET_MATH_09',
    category: 'Mathematical Methods',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "The radius of curvature ρ at the origin (0, 0) for the parabola y = 2x² is:",
    textHi: "परवलय y = 2x² के लिए मूल बिंदु (0, 0) पर वक्रता त्रिज्या ρ क्या होगी?",
    options: [
      { id: 1, optionId: 'OPT_107_1', textEn: '1/4', textHi: '1/4' },
      { id: 2, optionId: 'OPT_107_2', textEn: '4', textHi: '4' },
      { id: 3, optionId: 'OPT_107_3', textEn: '1/2', textHi: '1/2' },
      { id: 4, optionId: 'OPT_107_4', textEn: '2', textHi: '2' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "First derivative: y' = dy/dx = 4x. At x = 0, y' = 0. Second derivative: y'' = d²y/dx² = 4. The radius of curvature formula is ρ = (1 + y'²)^{3/2} / |y''| = (1 + 0)^{3/2} / 4 = 1/4.",
      hi: "प्रथम अवकलज: y' = 4x; x = 0 पर y' = 0। द्वितीय अवकलज: y'' = 4। वक्रता त्रिज्या सूत्र ρ = (1 + y'²)^{3/2} / |y''| = 1/4।",
      keyFormula: "\\rho = \\frac{(1 + y'^2)^{3/2}}{|y''|} = \\frac{(1+0)^{3/2}}{4} = \\frac{1}{4}"
    }
  },

  // --- MECHANICS & OSCILLATIONS (108-111) ---
  {
    id: 108,
    questionId: 'CUET_MECH_03',
    category: 'Mechanics & Relativity',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A rocket moves in gravity-free space with initial mass m₀ and constant exhaust gas speed u relative to the rocket. What is the final burnout velocity v when 90% of its initial mass is consumed as fuel?",
    textHi: "एक रॉकेट गुरुत्वाकर्षण-मुक्त अंतरिक्ष में प्रारंभिक द्रव्यमान m₀ और रॉकेट के सापेक्ष स्थिर निकास गैस गति u से गति करता है। जब इसके प्रारंभिक द्रव्यमान का 90% ईंधन के रूप में जल जाता है, तो इसका अंतिम वेग v क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_108_1', textEn: 'u ln(10) ≈ 2.30 u', textHi: 'u ln(10) ≈ 2.30 u' },
      { id: 2, optionId: 'OPT_108_2', textEn: '0.9 u', textHi: '0.9 u' },
      { id: 3, optionId: 'OPT_108_3', textEn: 'u ln(1.1) ≈ 0.095 u', textHi: 'u ln(1.1) ≈ 0.095 u' },
      { id: 4, optionId: 'OPT_108_4', textEn: '10 u', textHi: '10 u' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "From Tsiolkovsky's rocket equation in gravity-free space: v = u ln(m₀ / m). When 90% of the mass is consumed as fuel, remaining mass m = m₀ - 0.9 m₀ = 0.1 m₀ = m₀ / 10. Therefore, burnout velocity v = u ln(m₀ / (0.1 m₀)) = u ln(10) ≈ 2.303 u.",
      hi: "गुरुत्वाकर्षण-मुक्त अंतरिक्ष में रॉकेट समीकरण v = u ln(m₀/m) है। 90% ईंधन जलने पर शेष द्रव्यमान m = 0.1 m₀ = m₀/10 रह जाता है। अतः v = u ln(10) ≈ 2.303 u।",
      keyFormula: "v = u \\ln\\left(\\frac{m_0}{m}\\right) = u \\ln\\left(\\frac{m_0}{0.1 m_0}\\right) = u \\ln(10) \\approx 2.30 u"
    }
  },
  {
    id: 109,
    questionId: 'CUET_MECH_04',
    category: 'Optics & Waves',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "Two simple harmonic motions acting at right angles have the same frequency ω but different amplitudes A and B, with a mutual phase difference of π/2. The resulting Lissajous figure is:",
    textHi: "समकोण पर कार्यरत दो सरल आवर्त गतियों की आवृत्ति ω समान है किंतु आयाम A और B भिन्न हैं, तथा उनके बीच परस्पर कलांतर π/2 है। परिणामी लिसाजू आकृति क्या होगी?",
    options: [
      { id: 1, optionId: 'OPT_109_1', textEn: 'An ellipse with principal axes along the coordinate axes', textHi: 'निर्देशांक अक्षों के अनुदिश मुख्य अक्षों वाला एक दीर्घवृत्त' },
      { id: 2, optionId: 'OPT_109_2', textEn: 'A circle of radius (A + B) / 2', textHi: '(A + B) / 2 त्रिज्या का एक वृत्त' },
      { id: 3, optionId: 'OPT_109_3', textEn: 'A straight line inclined at 45°', textHi: '45° पर झुकी हुई एक सरल रेखा' },
      { id: 4, optionId: 'OPT_109_4', textEn: 'A parabola opening along the y-axis', textHi: 'y-अक्ष के अनुदिश खुलने वाला एक परवलय' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Let x = A sin(ωt) and y = B sin(ωt + π/2) = B cos(ωt). Then x/A = sin(ωt) and y/B = cos(ωt). Squaring and adding gives (x/A)² + (y/B)² = sin²(ωt) + cos²(ωt) = 1. Since A ≠ B, this is the standard equation of an ellipse with semi-major and semi-minor axes A and B aligned with the x and y axes.",
      hi: "माना x = A sin(ωt) और y = B cos(ωt)। दोनों का वर्ग करके जोड़ने पर: (x/A)² + (y/B)² = 1 प्राप्त होता है। A ≠ B होने के कारण यह निर्देशांक अक्षों के अनुदिश एक मानक दीर्घवृत्त का समीकरण है।",
      keyFormula: "\\frac{x^2}{A^2} + \\frac{y^2}{B^2} = 1 \\quad (\\text{Standard Ellipse})"
    }
  },
  {
    id: 110,
    questionId: 'CUET_MECH_05',
    category: 'Mechanics & Relativity',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "For a compound pendulum of mass M and radius of gyration k about an axis through its center of gravity, the minimum time period of oscillation occurs when the distance l of the pivot from the center of gravity satisfies:",
    textHi: "द्रव्यमान M और गुरुत्व केंद्र से गुजरने वाले अक्ष के परितः परिभ्रमण त्रिज्या k वाले यौगिक लोलक के लिए, दोलन का न्यूनतम आवर्तकाल तब प्राप्त होता है जब गुरुत्व केंद्र से आलंब (पिवट) की दूरी l का मान होता है:",
    options: [
      { id: 1, optionId: 'OPT_110_1', textEn: 'l = k', textHi: 'l = k' },
      { id: 2, optionId: 'OPT_110_2', textEn: 'l = 2k', textHi: 'l = 2k' },
      { id: 3, optionId: 'OPT_110_3', textEn: 'l = k / 2', textHi: 'l = k / 2' },
      { id: 4, optionId: 'OPT_110_4', textEn: 'l = 0', textHi: 'l = 0' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The time period of a compound pendulum is T = 2π √[(k² + l²) / (gl)]. Let L = (k² + l²) / l = l + k²/l. To minimize T, we minimize L: dL/dl = 1 - k²/l² = 0 ⇒ l² = k² ⇒ l = k. The minimum time period is T_min = 2π √(2k / g).",
      hi: "यौगिक लोलक का आवर्तकाल T = 2π √[(k² + l²)/(gl)] होता है। L = l + k²/l को न्यूनतम करने के लिए: dL/dl = 1 - k²/l² = 0 ⇒ l = k। न्यूनतम आवर्तकाल T_min = 2π √(2k/g) होता है।",
      keyFormula: "\\frac{dL}{dl} = 1 - \\frac{k^2}{l^2} = 0 \\implies l = k, \\quad T_{min} = 2\\pi \\sqrt{\\frac{2k}{g}}"
    }
  },
  {
    id: 111,
    questionId: 'CUET_MECH_06',
    category: 'Mechanics & Relativity',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "In the intrinsic equation of a common catenary y = c cosh(x/c), the tension T at any point P(x, y) along the suspended chain of uniform weight per unit length w is:",
    textHi: "प्रति इकाई लंबाई समान भार w वाली लटकी हुई जंजीर के सामान्य कैटेनरी समीकरण y = c cosh(x/c) में, किसी बिंदु P(x, y) पर तनाव T का मान होता है:",
    options: [
      { id: 1, optionId: 'OPT_111_1', textEn: 'T = w y', textHi: 'T = w y' },
      { id: 2, optionId: 'OPT_111_2', textEn: 'T = w c', textHi: 'T = w c' },
      { id: 3, optionId: 'OPT_111_3', textEn: 'T = w x', textHi: 'T = w x' },
      { id: 4, optionId: 'OPT_111_4', textEn: 'T = w (x² + y²)', textHi: 'T = w (x² + y²)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In catenary statics, the horizontal tension is constant T₀ = wc. The vertical tension at any point is Ty = ws (where s is arc length). Total tension T = √(T₀² + Ty²) = √[(wc)² + (ws)²] = w √(c² + s²). Using the catenary identity y² = c² + s², this simplifies directly to T = w y.",
      hi: "कैटेनरी में क्षैतिज तनाव T₀ = wc और ऊर्ध्वाधर तनाव Ty = ws होता है। कुल तनाव T = w √(c² + s²) होता है। y² = c² + s² संबंध का उपयोग करने पर T = w y प्राप्त होता है।",
      keyFormula: "T = w \\sqrt{c^2 + s^2} = w y"
    }
  },

  // --- SEISMOLOGY & GEOPHYSICAL EXPLORATION (112-121) ---
  {
    id: 112,
    questionId: 'CUET_GEO_10',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "In a seismic refraction survey across a two-layer horizontal earth model, the upper layer has P-wave velocity V₁ = 3.0 km/s and the lower layer has V₂ = 5.0 km/s. The critical angle of refraction (i_c) is:",
    textHi: "दो-परत क्षैतिज पृथ्वी मॉडल में भूकंपीय अपवर्तन सर्वेक्षण में, ऊपरी परत का P-तरंग वेग V₁ = 3.0 किमी/से और निचली परत का V₂ = 5.0 किमी/से है। अपवर्तन का क्रांतिक कोण (i_c) क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_112_1', textEn: 'sin⁻¹(0.6) ≈ 36.87°', textHi: 'sin⁻¹(0.6) ≈ 36.87°' },
      { id: 2, optionId: 'OPT_112_2', textEn: 'sin⁻¹(0.8) ≈ 53.13°', textHi: 'sin⁻¹(0.8) ≈ 53.13°' },
      { id: 3, optionId: 'OPT_112_3', textEn: '45.0°', textHi: '45.0°' },
      { id: 4, optionId: 'OPT_112_4', textEn: '30.0°', textHi: '30.0°' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "According to Snell's law, critical refraction occurs when the angle of refraction in the lower layer is 90°: sin i_c / V₁ = sin(90°) / V₂ ⇒ sin i_c = V₁ / V₂ = 3.0 / 5.0 = 0.6. Thus, i_c = sin⁻¹(0.6) ≈ 36.87°.",
      hi: "स्नेल के नियम के अनुसार क्रांतिक अपवर्तन तब होता है जब अपवर्तन कोण 90° हो: sin i_c = V₁ / V₂ = 3.0 / 5.0 = 0.6। अतः i_c = sin⁻¹(0.6) ≈ 36.87°।",
      keyFormula: "\\sin i_c = \\frac{V_1}{V_2} = \\frac{3.0}{5.0} = 0.6 \\implies i_c \\approx 36.87^\\circ"
    }
  },
  {
    id: 113,
    questionId: 'CUET_GEO_11',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "In seismic refraction, the crossover distance (x_cross) is the distance from the shot point at which:",
    textHi: "भूकंपीय अपवर्तन में, क्रॉसओवर दूरी (x_cross) शॉट बिंदु से वह दूरी है जिस पर:",
    options: [
      { id: 1, optionId: 'OPT_113_1', textEn: 'The direct wave and refracted head wave arrive simultaneously', textHi: 'प्रत्यक्ष तरंग और अपवर्तित हेड तरंग एक ही समय पर पहुँचती हैं' },
      { id: 2, optionId: 'OPT_113_2', textEn: 'The refracted wave first emerges from the subsurface', textHi: 'अपवर्तित तरंग पहली बार उपसतह से बाहर निकलती है' },
      { id: 3, optionId: 'OPT_113_3', textEn: 'Reflected wave amplitude reaches maximum', textHi: 'परावर्तित तरंग का आयाम अधिकतम हो जाता है' },
      { id: 4, optionId: 'OPT_113_4', textEn: 'P-wave converts completely into S-wave', textHi: 'P-तरंग पूरी तरह से S-तरंग में परिवर्तित हो जाती है' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The crossover distance x_cross is the offset distance where the travel time of the direct wave (t_dir = x/V₁) equals the travel time of the refracted head wave (t_refr = x/V₂ + t_i). Beyond x_cross, the refracted wave arrives before the direct wave, forming the first arrivals on seismograms.",
      hi: "क्रॉसओवर दूरी वह ऑफसेट दूरी है जहाँ प्रत्यक्ष तरंग (t = x/V₁) और अपवर्तित तरंग का यात्रा-समय बराबर होता है। इस दूरी के बाद अपवर्तित तरंगें सीस्मोग्राम पर प्रत्यक्ष तरंगों से पहले दर्ज होती हैं।",
      keyFormula: "t_{dir} = t_{refr} \\implies x_{cross} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}}"
    }
  },
  {
    id: 114,
    questionId: 'CUET_GEO_12',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A seismograph station records the arrival of a P-wave at 10:00:00 AM and the S-wave at 10:00:40 AM (a 40-second time lag). If Vp = 8 km/s and Vs = 4.8 km/s, what is the distance from the station to the earthquake epicenter?",
    textHi: "एक भूकंपमापी स्टेशन सुबह 10:00:00 बजे P-तरंग और 10:00:40 बजे S-तरंग (40 सेकंड का समय अंतराल) दर्ज करता है। यदि Vp = 8 किमी/से और Vs = 4.8 किमी/से है, तो स्टेशन से भूकंप के अधिकेंद्र की दूरी क्या है?",
    options: [
      { id: 1, optionId: 'OPT_114_1', textEn: '480 km', textHi: '480 किमी' },
      { id: 2, optionId: 'OPT_114_2', textEn: '320 km', textHi: '320 किमी' },
      { id: 3, optionId: 'OPT_114_3', textEn: '240 km', textHi: '240 किमी' },
      { id: 4, optionId: 'OPT_114_4', textEn: '600 km', textHi: '600 किमी' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Travel time difference Δt = t_s - t_p = d/Vs - d/Vp = d (Vp - Vs) / (Vp · Vs). Therefore, distance d = Δt · (Vp · Vs) / (Vp - Vs) = 40 · (8 × 4.8) / (8 - 4.8) = 40 · (38.4) / (3.2) = 40 × 12 = 480 km.",
      hi: "यात्रा समय अंतर Δt = d/Vs - d/Vp = d(Vp - Vs)/(Vp · Vs) होता है। अतः दूरी d = 40 × (8 × 4.8) / (8 - 4.8) = 40 × 38.4 / 3.2 = 480 किमी।",
      keyFormula: "d = (t_s - t_p) \\frac{V_p V_s}{V_p - V_s} = 40 \\times \\frac{38.4}{3.2} = 480\\text{ km}"
    }
  },
  {
    id: 115,
    questionId: 'CUET_GEO_13',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "Normal Moveout (NMO) in reflection seismology refers to:",
    textHi: "परावर्तन भूकंप विज्ञान में सामान्य चालन सुधार (नॉर्मल मूवआउट, NMO) से तात्पर्य है:",
    options: [
      { id: 1, optionId: 'OPT_115_1', textEn: 'The increase in reflection travel time with increasing source-receiver offset distance', textHi: 'स्रोत-अभिग्राही ऑफसेट दूरी बढ़ने के साथ परावर्तन यात्रा समय में होने वाली वृद्धि' },
      { id: 2, optionId: 'OPT_115_2', textEn: 'The vertical shift caused by elevation variations', textHi: 'ऊंचाई भिन्नता के कारण होने वाला ऊर्ध्वाधर विस्थापन' },
      { id: 3, optionId: 'OPT_115_3', textEn: 'The frequency change caused by the Doppler effect', textHi: 'डॉप्लर प्रभाव द्वारा होने वाला आवृत्ति परिवर्तन' },
      { id: 4, optionId: 'OPT_115_4', textEn: 'The decay of seismic amplitude due to geometric spreading', textHi: 'ज्यामितीय प्रसार के कारण भूकंपीय आयाम का क्षय' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For a horizontal reflecting boundary at depth h, reflection travel time follows the hyperbolic relation t² = t₀² + x²/V², where t₀ = 2h/V is the zero-offset travel time. The additional time Δt_{NMO} = t(x) - t₀ ≈ x² / (2 V² t₀) is the Normal Moveout (NMO), which must be corrected prior to common midpoint (CMP) stacking.",
      hi: "परावर्तन यात्रा-समय t² = t₀² + x²/V² अतिपरवलय का अनुसरण करता है। ऑफसेट x बढ़ने के साथ यात्रा समय में होने वाली वृद्धि Δt_{NMO} ≈ x²/(2V²t₀) को नॉर्मल मूवआउट (NMO) कहते हैं।",
      keyFormula: "\\Delta t_{NMO} = t(x) - t_0 = \\sqrt{t_0^2 + \\frac{x^2}{V^2}} - t_0 \\approx \\frac{x^2}{2 V^2 t_0}"
    }
  },
  {
    id: 116,
    questionId: 'CUET_GEO_14',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "The normal vertical gradient of Earth's gravity in free air (Free-Air Correction factor) is approximately:",
    textHi: "मुक्त वायु में पृथ्वी के गुरुत्वाकर्षण का सामान्य ऊर्ध्वाधर प्रवणता मान (मुक्त-वायु संशोधन कारक) लगभग होता है:",
    options: [
      { id: 1, optionId: 'OPT_116_1', textEn: '0.3086 mGal / meter (positive with elevation)', textHi: '0.3086 mGal / मीटर (ऊंचाई के साथ धनात्मक)' },
      { id: 2, optionId: 'OPT_116_2', textEn: '0.0419 mGal / meter', textHi: '0.0419 mGal / मीटर' },
      { id: 3, optionId: 'OPT_116_3', textEn: '9.81 mGal / meter', textHi: '9.81 mGal / मीटर' },
      { id: 4, optionId: 'OPT_116_4', textEn: '0.1119 mGal / meter', textHi: '0.1119 mGal / मीटर' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Differentiating Newton's law g = GM/R² with respect to R gives dg/dR = -2GM/R³ = -2g/R. Substituting g ≈ 980,000 mGal and R ≈ 6.371 × 10⁶ m yields |dg/dR| ≈ 0.3086 mGal/m. Because gravity decreases with height, stations at elevation h require a positive correction of Δg_{FA} = +0.3086 h mGal to reduce them to datum.",
      hi: "dg/dR = -2g/R = -2(980000)/(6.371 × 10⁶) ≈ -0.3086 mGal/m। ऊंचाई बढ़ने पर गुरुत्व कम होता है, अतः डेटम तल पर लाने के लिए +0.3086 h mGal का धनात्मक संशोधन जोड़ा जाता है।",
      keyFormula: "\\Delta g_{FA} = \\frac{2g}{R} h \\approx 0.3086 \\, h \\quad (\\text{mGal, for } h \\text{ in meters})"
    }
  },
  {
    id: 117,
    questionId: 'CUET_GEO_15',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "For an axial geocentric dipole model of Earth's magnetic field, the relationship between the magnetic inclination (dip angle I) and the geomagnetic latitude (λ) is:",
    textHi: "पृथ्वी के चुंबकीय क्षेत्र के अक्षीय भू-केंद्रीय द्विध्रुव मॉडल के लिए चुंबकीय नति (डिप कोण I) और भू-चुंबकीय अक्षांश (λ) के बीच का संबंध है:",
    options: [
      { id: 1, optionId: 'OPT_117_1', textEn: 'tan I = 2 tan λ', textHi: 'tan I = 2 tan λ' },
      { id: 2, optionId: 'OPT_117_2', textEn: 'tan I = 0.5 tan λ', textHi: 'tan I = 0.5 tan λ' },
      { id: 3, optionId: 'OPT_117_3', textEn: 'sin I = 2 sin λ', textHi: 'sin I = 2 sin λ' },
      { id: 4, optionId: 'OPT_117_4', textEn: 'cos I = 2 cos λ', textHi: 'cos I = 2 cos λ' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "For a magnetic dipole, radial field component is Br = -2(μ₀M / 4π r³) sin λ (vertical Z) and tangential component is Bθ = (μ₀M / 4π r³) cos λ (horizontal H). Inclination tan I = Z / H = (2 sin λ) / (cos λ) = 2 tan λ. At the magnetic equator (λ=0), I = 0°; at the poles (λ=90°), I = 90°.",
      hi: "चुंबकीय द्विध्रुव के लिए Z = 2(M/r³)sin λ तथा H = (M/r³)cos λ होता है। नति कोण tan I = Z/H = 2 tan λ। भूमध्य रेखा पर नति कोण शून्य और ध्रुवों पर 90° होता है।",
      keyFormula: "\\tan I = \\frac{Z}{H} = 2 \\tan \\lambda"
    }
  },
  {
    id: 118,
    questionId: 'CUET_GEO_16',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "The Curie temperature of magnetite (Fe₃O₄), the primary magnetic mineral in crustal igneous rocks, is approximately:",
    textHi: "भूपर्पटी की आग्नेय चट्टानों में प्राथमिक चुंबकीय खनिज मैग्नेटाइट (Fe₃O₄) का क्यूरी तापमान लगभग होता है:",
    options: [
      { id: 1, optionId: 'OPT_118_1', textEn: '580°C (853 K)', textHi: '580°C (853 K)' },
      { id: 2, optionId: 'OPT_118_2', textEn: '100°C', textHi: '100°C' },
      { id: 3, optionId: 'OPT_118_3', textEn: '1200°C', textHi: '1200°C' },
      { id: 4, optionId: 'OPT_118_4', textEn: '360°C', textHi: '360°C' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Magnetite loses its spontaneous ferrimagnetism and becomes paramagnetic above its Curie temperature of ~580°C. In the Earth's crust, rocks buried deeper than the ~580°C isotherm (typically at 15–25 km depth) cannot sustain remanent magnetization, defining the Curie depth for magnetic prospecting.",
      hi: "मैग्नेटाइट 580°C के क्यूरी तापमान से ऊपर अपना लौहचुंबकत्व खो देता है और अनुचुंबकीय बन जाता है। इस तापमान से अधिक गहराई पर स्थित चट्टानें स्थायी चुंबकत्व बनाए नहीं रख सकती हैं।",
      keyFormula: "T_C(\\text{Magnetite}) \\approx 580^\\circ\\text{C}"
    }
  },
  {
    id: 119,
    questionId: 'CUET_GEO_17',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "In electrical resistivity prospecting with the Wenner electrode configuration, four electrodes are arranged in a straight line with equal spacing 'a'. If current I is injected and potential difference ΔV is measured, the apparent resistivity ρ_a is given by:",
    textHi: "वेनर इलेक्ट्रोड विन्यास के साथ विद्युत प्रतिरोधकता पूर्वेक्षण में चार इलेक्ट्रोड समान दूरी 'a' के साथ एक सीधी रेखा में व्यवस्थित होते हैं। यदि धारा I प्रवाहित की जाती है और विभवांतर ΔV मापा जाता है, तो आभासी प्रतिरोधकता ρ_a का सूत्र होगा:",
    options: [
      { id: 1, optionId: 'OPT_119_1', textEn: '2π a (ΔV / I)', textHi: '2π a (ΔV / I)' },
      { id: 2, optionId: 'OPT_119_2', textEn: '4π a (ΔV / I)', textHi: '4π a (ΔV / I)' },
      { id: 3, optionId: 'OPT_119_3', textEn: 'π a² (ΔV / I)', textHi: 'π a² (ΔV / I)' },
      { id: 4, optionId: 'OPT_119_4', textEn: 'a / (2π) · (ΔV / I)', textHi: 'a / (2π) · (ΔV / I)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In the Wenner array, AM = MN = NB = a. The geometric factor is 1/K = (1/r_AM - 1/r_BM) - (1/r_AN - 1/r_BN) = (1/a - 1/2a) - (1/2a - 1/a) = 1/a. Thus geometric factor K = 2π a, and apparent resistivity ρ_a = 2π a (ΔV / I) = 2π a R.",
      hi: "वेनर विन्यास में इलेक्ट्रोड दूरी समान (a) होती है। ज्यामितीय कारक K = 2π a होता है, जिससे आभासी प्रतिरोधकता ρ_a = 2π a (ΔV / I) प्राप्त होती है।",
      keyFormula: "\\rho_a = 2\\pi a \\frac{\\Delta V}{I} = 2\\pi a R"
    }
  },
  {
    id: 120,
    questionId: 'CUET_GEO_18',
    category: 'Solid Earth Geophysics',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "According to Archie's Law, the Formation Factor F of a 100% water-saturated clean sandstone with porosity φ = 20% (0.20), tortuosity a = 1, and cementation exponent m = 2 is:",
    textHi: "आर्ची के नियम के अनुसार, 100% जल-संतृप्त बलुआ पत्थर का शैल कारक (फॉर्मेशन फैक्टर F) क्या होगा जिसकी सरंध्रता φ = 20% (0.20), a = 1 और सीमेंटेशन घातांक m = 2 है?",
    options: [
      { id: 1, optionId: 'OPT_120_1', textEn: '25', textHi: '25' },
      { id: 2, optionId: 'OPT_120_2', textEn: '5', textHi: '5' },
      { id: 3, optionId: 'OPT_120_3', textEn: '50', textHi: '50' },
      { id: 4, optionId: 'OPT_120_4', textEn: '10', textHi: '10' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Archie's first empirical law defines Formation Resistivity Factor F = a / φ^m. Given a = 1, φ = 0.20, and m = 2: F = 1 / (0.20)² = 1 / 0.04 = 25.",
      hi: "आर्ची का पहला नियम F = a / φ^m होता है। a = 1, φ = 0.20 और m = 2 रखने पर: F = 1 / (0.20)² = 1 / 0.04 = 25।",
      keyFormula: "F = \\frac{a}{\\phi^m} = \\frac{1}{(0.20)^2} = \\frac{1}{0.04} = 25"
    }
  },
  {
    id: 121,
    questionId: 'CUET_GEO_19',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "What is the primary fundamental difference between Airy's and Pratt's models of Isostasy?",
    textHi: "समस्थिति (आइसोस्टेसी) के एयरी और प्रैट के मॉडलों के बीच प्राथमिक मूल अंतर क्या है?",
    options: [
      { id: 1, optionId: 'OPT_121_1', textEn: 'Airy assumes uniform crustal density with variable root depth; Pratt assumes uniform compensation depth with variable crustal densities', textHi: 'एयरी परिवर्तनीय जड़ गहराई के साथ एकसमान क्रस्ट घनत्व मानता है; प्रैट परिवर्तनीय क्रस्ट घनत्व के साथ एकसमान प्रतिकार गहराई मानता है' },
      { id: 2, optionId: 'OPT_121_2', textEn: 'Airy assumes variable compensation depth and variable densities; Pratt assumes constant density everywhere', textHi: 'एयरी परिवर्तनीय प्रतिकार गहराई और परिवर्तनीय घनत्व मानता है; प्रैट हर जगह स्थिर घनत्व मानता है' },
      { id: 3, optionId: 'OPT_121_3', textEn: 'Airy applies only to oceanic crust; Pratt applies only to continental mountains', textHi: 'एयरी केवल महासागरीय क्रस्ट पर लागू होता है; प्रैट केवल महाद्वीपीय पर्वतों पर लागू होता है' },
      { id: 4, optionId: 'OPT_121_4', textEn: 'Airy requires zero gravity anomaly; Pratt requires positive Bouguer anomaly', textHi: 'एयरी के लिए शून्य गुरुत्व विसंगति आवश्यक है; प्रैट के लिए धनात्मक बोगर विसंगति आवश्यक है' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Airy's model (Roots model) treats the crust as having constant density ρ_c, with mountains supported by deeper crustal roots extending into the denser mantle. Pratt's model (Density model) assumes all crustal columns end at a uniform level of compensation depth D, where taller columns have lower densities.",
      hi: "एयरी मॉडल में क्रस्ट का घनत्व स्थिर माना जाता है और ऊंचे पर्वतों की मेंटल में गहरी जड़ें होती हैं। प्रैट मॉडल में सभी स्तंभ एक समान गहराई (प्रतिकार तल) पर समाप्त होते हैं और ऊंचे पहाड़ों का घनत्व कम होता है।",
      keyFormula: "\\text{Airy: } \\rho = \\text{const, root } t \\propto h; \\quad \\text{Pratt: depth } D = \\text{const, } \\rho \\propto \\frac{1}{h+D}"
    }
  },

  // --- OPTICS, THERMODYNAMICS & ELECTRONICS (122-135) ---
  {
    id: 122,
    questionId: 'CUET_OPT_03',
    category: 'Optics & Waves',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "In a Michelson interferometer illuminated with monochromatic light of wavelength λ = 500 nm, how many fringes cross the field of view when the movable mirror is displaced by 0.1 mm?",
    textHi: "λ = 500 nm तरंगदैर्ध्य के एकवर्णी प्रकाश से प्रकाशित माइकलसन व्यतिकरणमापी में, जब चल दर्पण को 0.1 mm विस्थापित किया जाता है, तो दृष्टि क्षेत्र से कितने फ्रिंज गुजरते हैं?",
    options: [
      { id: 1, optionId: 'OPT_122_1', textEn: '400', textHi: '400' },
      { id: 2, optionId: 'OPT_122_2', textEn: '200', textHi: '200' },
      { id: 3, optionId: 'OPT_122_3', textEn: '100', textHi: '100' },
      { id: 4, optionId: 'OPT_122_4', textEn: '800', textHi: '800' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In a Michelson interferometer, a mirror shift of d changes the optical path by 2d. Each fringe shift corresponds to a path change of λ: 2d = N λ ⇒ N = 2d / λ = 2 × (0.1 × 10⁻³ m) / (500 × 10⁻⁹ m) = 2 × 10⁻⁴ / 5 × 10⁻⁷ = 400 fringes.",
      hi: "दर्पण के d विस्थापन से प्रकाशिक पथ 2d बदलता है। प्रत्येक फ्रिंज λ पथ परिवर्तन के संगत होती है: N = 2d/λ = 2 × (10⁻⁴) / (5 × 10⁻⁷) = 400 फ्रिंज।",
      keyFormula: "N = \\frac{2d}{\\lambda} = \\frac{2 \\times 10^{-4}\\text{ m}}{500 \\times 10^{-9}\\text{ m}} = 400"
    }
  },
  {
    id: 123,
    questionId: 'CUET_OPT_04',
    category: 'Optics & Waves',
    examYear: '2022',
    difficulty: 'Foundational',
    textEn: "A half-wave plate of birefringent crystal introduces a path difference between ordinary and extraordinary rays equal to:",
    textHi: "द्वि-अपवर्तक क्रिस्टल की एक अर्ध-तरंग पट्टिका (हाफ-वेव प्लेट) साधारण और असाधारण किरणों के बीच कितना पथ अंतर उत्पन्न करती है?",
    options: [
      { id: 1, optionId: 'OPT_123_1', textEn: 'λ / 2 (corresponding to a phase difference of π)', textHi: 'λ / 2 (π के कलांतर के संगत)' },
      { id: 2, optionId: 'OPT_123_2', textEn: 'λ / 4 (phase difference π/2)', textHi: 'λ / 4 (कलांतर π/2)' },
      { id: 3, optionId: 'OPT_123_3', textEn: 'λ (phase difference 2π)', textHi: 'λ (कलांतर 2π)' },
      { id: 4, optionId: 'OPT_123_4', textEn: '3λ / 4', textHi: '3λ / 4' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "A half-wave plate (HWP) has thickness t = λ / (2|μ_e - μ_o|), which produces an optical path difference of Δ = |μ_e - μ_o| t = λ/2 and a phase difference of δ = (2π/λ)(λ/2) = π radians. It rotates the plane of polarization of linearly polarized light by 2θ.",
      hi: "अर्ध-तरंग पट्टिका साधारण एवं असाधारण किरणों के बीच λ/2 का पथांतर और π का कलांतर उत्पन्न करती है।",
      keyFormula: "\\Delta = \\frac{\\lambda}{2}, \\quad \\delta = \\pi \\text{ radians}"
    }
  },
  {
    id: 124,
    questionId: 'CUET_OPT_05',
    category: 'Optics & Waves',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "The chromatic resolving power (λ / Δλ) of a plane diffraction grating in the n-th order having N total illuminated lines is given by:",
    textHi: "N कुल प्रदीप्त रेखाओं वाली एक समतल विवर्तन ग्रेटिंग की n-वें ऑर्डर में वर्ण विक्षेपण विभेदन क्षमता (λ / Δλ) का सूत्र है:",
    options: [
      { id: 1, optionId: 'OPT_124_1', textEn: 'n · N', textHi: 'n · N' },
      { id: 2, optionId: 'OPT_124_2', textEn: 'N / n', textHi: 'N / n' },
      { id: 3, optionId: 'OPT_124_3', textEn: 'n / N', textHi: 'n / N' },
      { id: 4, optionId: 'OPT_124_4', textEn: 'n² N', textHi: 'n² N' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "By Rayleigh's criterion, the chromatic resolving power of a diffraction grating is the product of the diffraction order n and the total number of rulings illuminated N: R = λ / Δλ = n · N.",
      hi: "रेले की कसौटी के अनुसार, विवर्तन ग्रेटिंग की विभेदन क्षमता विवर्तन कोटि n और प्रदीप्त रेखाओं की कुल संख्या N का गुणनफल होती है: R = n · N।",
      keyFormula: "\\frac{\\lambda}{\\Delta \\lambda} = n \\cdot N"
    }
  },
  {
    id: 125,
    questionId: 'CUET_TH_03',
    category: 'Thermodynamics & Stat Mech',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "From the Clausius-Clapeyron equation dP/dT = L / [T(V₂ - V₁)], why does the melting point of ice decrease with an increase in external pressure?",
    textHi: "क्लॉसियस-क्लेपरॉन समीकरण dP/dT = L / [T(V₂ - V₁)] के आधार पर, बाह्य दाब बढ़ने पर बर्फ का गलनांक क्यों घट जाता है?",
    options: [
      { id: 1, optionId: 'OPT_125_1', textEn: 'Because water has a smaller specific volume than ice (V_liquid < V_solid, ΔV < 0)', textHi: 'क्योंकि जल का विशिष्ट आयतन बर्फ से कम होता है (V_द्रव < V_ठोस, ΔV < 0)' },
      { id: 2, optionId: 'OPT_125_2', textEn: 'Because latent heat of ice is negative', textHi: 'क्योंकि बर्फ की गुप्त ऊष्मा ऋणात्मक होती है' },
      { id: 3, optionId: 'OPT_125_3', textEn: 'Because ice expands upon melting', textHi: 'क्योंकि बर्फ पिघलने पर फैलती है' },
      { id: 4, optionId: 'OPT_125_4', textEn: 'Because temperature of ice is below absolute zero', textHi: 'क्योंकि बर्फ का तापमान परम शून्य से नीचे होता है' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "When ice melts into water, its volume decreases (water is denser than ice: V₂ - V₁ = V_water - V_ice < 0). Since latent heat L > 0 and T > 0, dP/dT = L / (T ΔV) is negative. Hence, increasing pressure dP > 0 lowers the melting temperature (dT < 0).",
      hi: "बर्फ पिघलने पर सिकुड़ती है (जल का आयतन बर्फ से कम होता है: ΔV < 0)। चूंकि L > 0 और T > 0 है, इसलिए dP/dT ऋणात्मक हो जाता है। अतः दाब बढ़ाने पर गलनांक घटता है।",
      keyFormula: "\\frac{dP}{dT} = \\frac{L}{T(V_{\\text{water}} - V_{\\text{ice}})} < 0 \\quad (\\text{since } V_{\\text{water}} < V_{\\text{ice}})"
    }
  },
  {
    id: 126,
    questionId: 'CUET_TH_04',
    category: 'Thermodynamics & Stat Mech',
    examYear: '2022',
    difficulty: 'Foundational',
    textEn: "If the absolute temperature of a blackbody radiator is doubled from 300 K to 600 K, by what factor does its total emissive power increase?",
    textHi: "यदि किसी कृष्णिका विकिरण स्रोत का परम तापमान 300 K से दोगुना करके 600 K कर दिया जाता है, तो इसकी कुल उत्सर्जन क्षमता किस कारक से बढ़ जाएगी?",
    options: [
      { id: 1, optionId: 'OPT_126_1', textEn: '16 times', textHi: '16 गुना' },
      { id: 2, optionId: 'OPT_126_2', textEn: '8 times', textHi: '8 गुना' },
      { id: 3, optionId: 'OPT_126_3', textEn: '4 times', textHi: '4 गुना' },
      { id: 4, optionId: 'OPT_126_4', textEn: '2 times', textHi: '2 गुना' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "By the Stefan-Boltzmann law, total emissive power E = σ T⁴. When temperature doubles (T₂ = 2 T₁), E₂ / E₁ = (T₂ / T₁)⁴ = 2⁴ = 16.",
      hi: "स्टीफन-बोल्ट्ज़मान नियम के अनुसार E = σ T⁴ होता है। तापमान दोगुना होने पर: E₂/E₁ = (2)⁴ = 16 गुना वृद्धि होगी।",
      keyFormula: "\\frac{E_2}{E_1} = \\left(\\frac{T_2}{T_1}\\right)^4 = 2^4 = 16"
    }
  },
  {
    id: 127,
    questionId: 'CUET_MOD_04',
    category: 'Modern Physics & Quantum',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "In Raman scattering, why do Anti-Stokes lines have higher frequencies than the incident excitation frequency (ν_anti > ν₀)?",
    textHi: "रामन प्रकीर्णन में, एंटी-स्टोक्स रेखाओं की आवृत्ति आपतित उत्तेजन आवृत्ति से अधिक क्यों होती है (ν_anti > ν₀)?",
    options: [
      { id: 1, optionId: 'OPT_127_1', textEn: 'The photon absorbs vibrational energy from an already excited molecule', textHi: 'फोटॉन पहले से उत्तेजित अणु से कंपन ऊर्जा अवशोषित कर लेता है' },
      { id: 2, optionId: 'OPT_127_2', textEn: 'The molecule is initially in its ground vibrational state', textHi: 'अणु प्रारंभ में अपनी मूल कंपन अवस्था में होता है' },
      { id: 3, optionId: 'OPT_127_3', textEn: 'Due to relativistic Doppler shift', textHi: 'आपेक्षिकीय डॉप्लर विस्थापन के कारण' },
      { id: 4, optionId: 'OPT_127_4', textEn: 'Because of spontaneous positron emission', textHi: 'स्वतः पॉज़िट्रॉन उत्सर्जन के कारण' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "In Raman scattering: Stokes lines (ν_stokes = ν₀ - Δν) occur when molecule starts in ground state and absorbs energy. Anti-Stokes lines (ν_anti = ν₀ + Δν) occur when molecule starts in an already excited vibrational state and transitions to ground state, transferring energy to the scattered photon.",
      hi: "एंटी-स्टोक्स रेखाओं (ν = ν₀ + Δν) में अणु पहले से उत्तेजित अवस्था में होता है और मूल अवस्था में लौटते समय अतिरिक्त ऊर्जा आपतित फोटॉन को दे देता है।",
      keyFormula: "h\\nu_{\\text{anti}} = h\\nu_0 + \\Delta E_{\\text{vib}} \\implies \\nu_{\\text{anti}} > \\nu_0"
    }
  },
  {
    id: 128,
    questionId: 'CUET_EM_04',
    category: 'Electrodynamics & EM',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "The intrinsic characteristic impedance of free space (vacuum) for electromagnetic waves is approximately equal to:",
    textHi: "विद्युतचुंबकीय तरंगों के लिए मुक्त आकाश (निर्वात) की आंतरिक अभिलाक्षणिक प्रतिबाधा लगभग किसके बराबर होती है?",
    options: [
      { id: 1, optionId: 'OPT_128_1', textEn: '377 Ω (120π Ω)', textHi: '377 Ω (120π Ω)' },
      { id: 2, optionId: 'OPT_128_2', textEn: '50 Ω', textHi: '50 Ω' },
      { id: 3, optionId: 'OPT_128_3', textEn: '75 Ω', textHi: '75 Ω' },
      { id: 4, optionId: 'OPT_128_4', textEn: '3 × 10⁸ Ω', textHi: '3 × 10⁸ Ω' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Wave impedance of free space is η₀ = √(μ₀ / ε₀) = √(4π × 10⁻⁷ / 8.854 × 10⁻¹²) ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.",
      hi: "निर्वात की तरंग प्रतिबाधा η₀ = √(μ₀/ε₀) = 120π Ω ≈ 377 Ω होती है।",
      keyFormula: "\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 376.73\\, \\Omega \\approx 377\\, \\Omega"
    }
  },
  {
    id: 129,
    questionId: 'CUET_EM_05',
    category: 'Electrodynamics & EM',
    examYear: '2022',
    difficulty: 'Moderate',
    textEn: "The capacitance per unit length of a cylindrical coaxial cable with inner conductor radius 'a', outer conductor radius 'b', and dielectric permittivity ε is:",
    textHi: "आंतरिक चालक त्रिज्या 'a', बाहरी चालक त्रिज्या 'b' और परावैद्युतांक ε वाले बेलनाकार समाक्षीय केबल की प्रति इकाई लंबाई धारिता है:",
    options: [
      { id: 1, optionId: 'OPT_129_1', textEn: '2π ε / ln(b / a)', textHi: '2π ε / ln(b / a)' },
      { id: 2, optionId: 'OPT_129_2', textEn: '4π ε / ln(b / a)', textHi: '4π ε / ln(b / a)' },
      { id: 3, optionId: 'OPT_129_3', textEn: '2π ε (b - a)', textHi: '2π ε (b - a)' },
      { id: 4, optionId: 'OPT_129_4', textEn: 'ε ln(b / a) / (2π)', textHi: 'ε ln(b / a) / (2π)' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "By Gauss's law, the electric field between cylinders is E(r) = λ / (2π ε r). Potential difference V = ∫_a^b E dr = [λ / (2π ε)] ln(b/a). Capacitance per unit length C/L = λ / V = 2π ε / ln(b/a).",
      hi: "गॉस नियम से दो बेलनों के बीच विद्युत क्षेत्र E = λ / (2πεr) होता है। विभवांतर V = [λ / (2πε)] ln(b/a) तथा प्रति इकाई लंबाई धारिता C/L = 2πε / ln(b/a) होती है।",
      keyFormula: "\\frac{C}{L} = \\frac{2\\pi \\varepsilon}{\\ln(b/a)}"
    }
  },
  {
    id: 130,
    questionId: 'CUET_EL_03',
    category: 'Electronics & Semiconductors',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "If the common-base current gain α of a bipolar junction transistor is 0.98, its common-emitter current gain β is:",
    textHi: "यदि द्विध्रुवी संधि ट्रांजिस्टर (BJT) का उभयनिष्ठ-आधार धारा लाभ α = 0.98 है, तो इसका उभयनिष्ठ-उत्सर्जक धारा लाभ β क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_130_1', textEn: '49', textHi: '49' },
      { id: 2, optionId: 'OPT_130_2', textEn: '98', textHi: '98' },
      { id: 3, optionId: 'OPT_130_3', textEn: '50', textHi: '50' },
      { id: 4, optionId: 'OPT_130_4', textEn: '24.5', textHi: '24.5' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The relationship between common-base gain α and common-emitter gain β is β = α / (1 - α). Substituting α = 0.98: β = 0.98 / (1 - 0.98) = 0.98 / 0.02 = 49.",
      hi: "α और β में संबंध β = α / (1 - α) होता है। α = 0.98 रखने पर: β = 0.98 / 0.02 = 49।",
      keyFormula: "\\beta = \\frac{\\alpha}{1 - \\alpha} = \\frac{0.98}{1 - 0.98} = \\frac{0.98}{0.02} = 49"
    }
  },
  {
    id: 131,
    questionId: 'CUET_EL_04',
    category: 'Electronics & Semiconductors',
    examYear: '2022',
    difficulty: 'Foundational',
    textEn: "What is the theoretical ripple factor (γ) of an ideal full-wave rectifier without filter?",
    textHi: "बिना फिल्टर वाले एक आदर्श पूर्ण-तरंग दिष्टकारी का सैद्धांतिक उर्मिका गुणांक (रिपल फैक्टर γ) क्या होता है?",
    options: [
      { id: 1, optionId: 'OPT_131_1', textEn: '0.482', textHi: '0.482' },
      { id: 2, optionId: 'OPT_131_2', textEn: '1.21', textHi: '1.21' },
      { id: 3, optionId: 'OPT_131_3', textEn: '0.707', textHi: '0.707' },
      { id: 4, optionId: 'OPT_131_4', textEn: '0.500', textHi: '0.500' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Ripple factor is defined as γ = √( (I_rms / I_dc)² - 1 ). For a full-wave rectifier, I_rms = I_m / √2 and I_dc = 2 I_m / π. Hence γ = √( (π² / 8) - 1 ) = √(1.2337 - 1) = √0.2337 ≈ 0.482 (compared to 1.21 for half-wave).",
      hi: "पूर्ण-तरंग दिष्टकारी के लिए I_rms = I_m/√2 और I_dc = 2I_m/π होता है। उर्मिका गुणांक γ = √((π²/8) - 1) ≈ 0.482 होता है (अर्ध-तरंग हेतु 1.21)।",
      keyFormula: "\\gamma = \\sqrt{\\left(\\frac{I_{rms}}{I_{dc}}\\right)^2 - 1} = \\sqrt{\\frac{\\pi^2}{8} - 1} \\approx 0.482"
    }
  },
  {
    id: 132,
    questionId: 'CUET_GEO_20',
    category: 'Mathematical Methods',
    examYear: '2023',
    difficulty: 'Foundational',
    textEn: "Two planes 2x - y + 2z = 5 and 3x + 2y + 6z = 8 have angle θ between them. The value of cos θ is:",
    textHi: "दो समतलों 2x - y + 2z = 5 और 3x + 2y + 6z = 8 के बीच का कोण θ है। cos θ का मान क्या होगा?",
    options: [
      { id: 1, optionId: 'OPT_132_1', textEn: '16 / 21', textHi: '16 / 21' },
      { id: 2, optionId: 'OPT_132_2', textEn: '12 / 21', textHi: '12 / 21' },
      { id: 3, optionId: 'OPT_132_3', textEn: '4 / 7', textHi: '4 / 7' },
      { id: 4, optionId: 'OPT_132_4', textEn: '8 / 15', textHi: '8 / 15' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Normal vectors are n₁ = (2, -1, 2) and n₂ = (3, 2, 6). |n₁| = √(4 + 1 + 4) = √9 = 3. |n₂| = √(9 + 4 + 36) = √49 = 7. Dot product n₁ · n₂ = (2)(3) + (-1)(2) + (2)(6) = 6 - 2 + 12 = 16. Therefore, cos θ = (n₁ · n₂) / (|n₁| |n₂|) = 16 / (3 × 7) = 16 / 21.",
      hi: "अभिलम्ब सदिश n₁ = (2, -1, 2) और n₂ = (3, 2, 6) हैं। |n₁| = 3 और |n₂| = 7। n₁ · n₂ = 6 - 2 + 12 = 16। अतः cos θ = 16 / (3 × 7) = 16 / 21।",
      keyFormula: "\\cos \\theta = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{16}{3 \\times 7} = \\frac{16}{21}"
    }
  },
  {
    id: 133,
    questionId: 'CUET_STAT_01',
    category: 'Mechanics & Relativity',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "A vertical rectangular plate of height h and width b is submerged in liquid with its upper edge in the liquid surface. The depth of the center of pressure below the free surface is:",
    textHi: "ऊंचाई h और चौड़ाई b की एक ऊर्ध्वाधर आयताकार पट्टिका द्रव में इस प्रकार डूबी है कि उसका ऊपरी सिरा द्रव की सतह पर है। मुक्त सतह के नीचे दाब केंद्र की गहराई होगी:",
    options: [
      { id: 1, optionId: 'OPT_133_1', textEn: '(2/3) h', textHi: '(2/3) h' },
      { id: 2, optionId: 'OPT_133_2', textEn: '(1/2) h', textHi: '(1/2) h' },
      { id: 3, optionId: 'OPT_133_3', textEn: '(3/4) h', textHi: '(3/4) h' },
      { id: 4, optionId: 'OPT_133_4', textEn: '(1/3) h', textHi: '(1/3) h' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "Depth of centroid is h̄ = h/2. Moment of inertia about centroidal axis is I_G = bh³ / 12. Area A = bh. Depth of center of pressure is h_{cp} = h̄ + I_G / (A h̄) = h/2 + (bh³/12) / (bh · h/2) = h/2 + h/6 = (3h + h)/6 = 4h/6 = (2/3) h.",
      hi: "गुरुत्व केंद्र h̄ = h/2 है। I_G = bh³/12 और क्षेत्रफल A = bh है। दाब केंद्र की गहराई h_{cp} = h̄ + I_G/(A h̄) = h/2 + h/6 = (2/3) h होती है।",
      keyFormula: "h_{cp} = \\bar{h} + \\frac{I_G}{A \\bar{h}} = \\frac{h}{2} + \\frac{bh^3/12}{bh(h/2)} = \\frac{2}{3} h"
    }
  },
  {
    id: 134,
    questionId: 'CUET_STAT_02',
    category: 'Mechanics & Relativity',
    examYear: '2022',
    difficulty: 'Foundational',
    textEn: "The principle of virtual work states that a mechanical system with frictionless constraints is in static equilibrium if and only if:",
    textHi: "आभासी कार्य का सिद्धांत बताता है कि घर्षण रहित प्रतिबंधों वाला यांत्रिक निकाय स्थैतिक संतुलन में होगा यदि और केवल यदि:",
    options: [
      { id: 1, optionId: 'OPT_134_1', textEn: 'The total virtual work done by applied active forces is zero for all virtual displacements (Σ F_i · δr_i = 0)', textHi: 'लागू सक्रिय बलों द्वारा किया गया कुल आभासी कार्य सभी आभासी विस्थापनों हेतु शून्य हो (Σ F_i · δr_i = 0)' },
      { id: 2, optionId: 'OPT_134_2', textEn: 'Total potential energy is at maximum', textHi: 'कुल स्थितिज ऊर्जा अधिकतम हो' },
      { id: 3, optionId: 'OPT_134_3', textEn: 'Internal stresses exceed external loads', textHi: 'आंतरिक प्रतिबल बाह्य भार से अधिक हों' },
      { id: 4, optionId: 'OPT_134_4', textEn: 'Kinetic energy equals potential energy', textHi: 'गतिज ऊर्जा स्थितिज ऊर्जा के बराबर हो' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "The principle of virtual work (Bernoulli, D'Alembert) states that the necessary and sufficient condition for static equilibrium of a mechanical system subjected to ideal (workless) constraints is that the sum of virtual works performed by the active external forces during any arbitrary reversible virtual displacement consistent with constraints is zero: δW = Σ F_i · δr_i = 0.",
      hi: "आदर्श प्रतिबंधों के अधीन निकाय के स्थैतिक संतुलन की आवश्यक एवं पर्याप्त शर्त यह है कि किसी भी संगत आभासी विस्थापन के दौरान सक्रिय बाह्य बलों द्वारा किया गया कुल आभासी कार्य शून्य हो: δW = Σ F_i · δr_i = 0।",
      keyFormula: "\\delta W = \\sum_{i} \\vec{F}_i \\cdot \\delta \\vec{r}_i = 0"
    }
  },
  {
    id: 135,
    questionId: 'CUET_GEO_21',
    category: 'Solid Earth Geophysics',
    examYear: '2023',
    difficulty: 'Moderate',
    textEn: "In seismic reflection survey over horizontal strata, the Root Mean Square (RMS) velocity V_rms across n layers of interval velocities V_i and interval two-way travel times Δt_i is given by the Dix formula as:",
    textHi: "क्षैतिज परतों पर भूकंपीय परावर्तन सर्वेक्षण में, अंतराल वेग V_i और अंतराल द्वि-तरफा यात्रा समय Δt_i वाली n परतों में वर्ग माध्य मूल (RMS) वेग V_rms का डिक्स सूत्र है:",
    options: [
      { id: 1, optionId: 'OPT_135_1', textEn: 'V_{rms} = √[ (Σ V_i² Δt_i) / (Σ Δt_i) ]', textHi: 'V_{rms} = √[ (Σ V_i² Δt_i) / (Σ Δt_i) ]' },
      { id: 2, optionId: 'OPT_135_2', textEn: 'V_{rms} = (Σ V_i Δt_i) / (Σ Δt_i)', textHi: 'V_{rms} = (Σ V_i Δt_i) / (Σ Δt_i)' },
      { id: 3, optionId: 'OPT_135_3', textEn: 'V_{rms} = (Σ V_i) / n', textHi: 'V_{rms} = (Σ V_i) / n' },
      { id: 4, optionId: 'OPT_135_4', textEn: 'V_{rms} = √[ Σ (V_i Δt_i)² ]', textHi: 'V_{rms} = √[ Σ (V_i Δt_i)² ]' }
    ],
    correctOptionId: 1,
    explanation: {
      en: "C. Hewitt Dix (1955) established the relation connecting stacked stacking velocity to interval velocities: V_{rms} = √[ (Σ_{i=1}^n V_i² Δt_i) / (Σ_{i=1}^n Δt_i) ]. Inverting this formula allows geophysicists to extract true interval velocity V_n of the n-th subsurface layer.",
      hi: "डिक्स (1955) के अनुसार n परतों का RMS वेग V_{rms} = √[ (Σ V_i² Δt_i) / (Σ Δt_i) ] होता है। इसके विलोमन से n-वीं परत का वास्तविक अंतराल वेग ज्ञात किया जाता है।",
      keyFormula: "V_{rms} = \\sqrt{ \\frac{\\sum_{i=1}^n V_i^2 \\Delta t_i}{\\sum_{i=1}^n \\Delta t_i} }"
    }
  }
];
