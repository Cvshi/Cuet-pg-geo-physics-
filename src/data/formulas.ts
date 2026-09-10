import { FormulaItem } from '../types';

export const FORMULA_HANDBOOK: FormulaItem[] = [
  // --- Electrodynamics ---
  {
    id: 'f-em-1',
    name: "Maxwell's Equations (Differential Form)",
    category: 'Electrodynamics & EM',
    formula: '\\vec{\\nabla} \\cdot \\vec{D} = \\rho_f, \\quad \\vec{\\nabla} \\cdot \\vec{B} = 0, \\quad \\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}, \\quad \\vec{\\nabla} \\times \\vec{H} = \\vec{J}_f + \\frac{\\partial \\vec{D}}{\\partial t}',
    descriptionEn: 'The four fundamental partial differential equations governing classical electromagnetism.',
    descriptionHi: 'शास्त्रीय विद्युतचुंबकत्व को नियंत्रित करने वाले चार मौलिक अवकल समीकरण।',
    keyApplications: ['Wave equation derivation', 'Boundary condition analysis', 'Antenna radiation']
  },
  {
    id: 'f-em-2',
    name: 'Poynting Vector & Radiation Pressure',
    category: 'Electrodynamics & EM',
    formula: '\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}), \\quad P_{rad} = \\frac{\\langle S \\rangle}{c} \\text{ (absorption)}, \\quad P_{rad} = \\frac{2\\langle S \\rangle}{c} \\text{ (reflection)}',
    descriptionEn: 'Measures directional energy flux density (W/m²) of electromagnetic waves and resulting pressure on surfaces.',
    descriptionHi: 'विद्युतचुंबकीय तरंगों के ऊर्जा प्रवाह घनत्व (W/m²) और सतहों पर लगने वाले विकिरण दाब को मापता है।',
    keyApplications: ['Solar sails', 'Laser intensity', 'Power flow in transmission lines']
  },
  {
    id: 'f-em-3',
    name: 'Skin Depth in Conductors',
    category: 'Electrodynamics & EM',
    formula: '\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}',
    descriptionEn: 'Depth below the surface of a conductor at which EM wave amplitude drops to 1/e (36.8%) of its surface value.',
    descriptionHi: 'चालक की सतह से वह गहराई जिस पर तरंग का आयाम घटकर सतह मान का 1/e रह जाता है।',
    keyApplications: ['Magnetotelluric (MT) prospecting', 'RF shielding', 'Induction heating']
  },

  // --- Solid Earth Geophysics ---
  {
    id: 'f-geo-1',
    name: 'Seismic Body Wave Velocities (P & S)',
    category: 'Solid Earth Geophysics',
    formula: 'V_p = \\sqrt{\\frac{K + \\frac{4}{3}\\mu}{\\rho}}, \\quad V_s = \\sqrt{\\frac{\\mu}{\\rho}}',
    descriptionEn: 'Velocities of compressional (P) and shear (S) body waves in terms of bulk modulus K, shear modulus μ, and density ρ.',
    descriptionHi: 'आयतन मापांक K, अपरूपण मापांक μ एवं घनत्व ρ के पदों में प्राथमिक (P) और द्वितीयक (S) तरंगों के वेग।',
    keyApplications: ['Earthquake epicenter locating', 'Mantle composition analysis', 'Fluid detection in oil reservoirs']
  },
  {
    id: 'f-geo-2',
    name: 'Gutenberg-Richter Recurrence Law',
    category: 'Solid Earth Geophysics',
    formula: '\\log_{10} N = a - b M',
    descriptionEn: 'Relates the cumulative number of earthquakes N of magnitude ≥ M occurring in a given region and time.',
    descriptionHi: 'किसी दिए गए क्षेत्र और समय में परिमाण M या उससे अधिक के भूकंपों की संचयी संख्या N का संबंध।',
    keyApplications: ['Seismic hazard assessment', 'Aftershock forecasting', 'Plate boundary stress state']
  },
  {
    id: 'f-geo-3',
    name: 'Bouguer Gravity Anomaly Slab Formula',
    category: 'Solid Earth Geophysics',
    formula: '\\Delta g_B = 2\\pi G \\rho h \\approx 0.04193 \\, \\rho \\, h \\quad (\\text{mGal with } \\rho \\text{ in g/cm}^3, h \\text{ in m})',
    descriptionEn: 'Gravitational attraction of an infinite horizontal rock slab of density ρ and thickness h.',
    descriptionHi: 'घनत्व ρ और मोटाई h की अनंत क्षैतिज शैल पट्टिका का गुरुत्वाकर्षण खिंचाव।',
    keyApplications: ['Subsurface ore body mapping', 'Sedimentary basin depth estimation', 'Crustal thickness calculation']
  },
  {
    id: 'f-geo-4',
    name: "Archie's Law for Well Logging",
    category: 'Solid Earth Geophysics',
    formula: 'R_t = \\frac{a R_w}{\\phi^m S_w^n} \\implies S_w = \\left( \\frac{a R_w}{\\phi^m R_t} \\right)^{1/n}',
    descriptionEn: 'Calculates water saturation S_w and hydrocarbon presence from formation resistivity R_t, porosity φ, and brine resistivity R_w.',
    descriptionHi: 'शैल प्रतिरोधकता R_t, सरंध्रता φ और जल प्रतिरोधकता R_w से हाइड्रोकार्बन उपस्थिति एवं जल संतृप्ति की गणना।',
    keyApplications: ['Petroleum exploration', 'Aquifer groundwater salinity', 'Borehole geophysics']
  },

  // --- Quantum Mechanics ---
  {
    id: 'f-qm-1',
    name: '1D Infinite Square Well Energy Eigenvalues',
    category: 'Modern Physics & Quantum',
    formula: 'E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} = \\frac{n^2 h^2}{8 m L^2}, \\quad \\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left( \\frac{n\\pi x}{L} \\right)',
    descriptionEn: 'Quantized energy spectrum and normalized stationary state wave functions for a particle confined in a box of width L.',
    descriptionHi: 'चौड़ाई L के बॉक्स में बंद कण के लिए क्वांटीकृत ऊर्जा स्तर और प्रसामान्यीकृत स्थिर तरंग फलन।',
    keyApplications: ['Quantum dots', 'Conjugated dye molecules', 'Bound state basics']
  },
  {
    id: 'f-qm-2',
    name: 'Heisenberg Uncertainty Principle & Commutators',
    category: 'Modern Physics & Quantum',
    formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}, \\quad [\\hat{x}, \\hat{p}_x] = i\\hbar, \\quad [\\hat{L}_x, \\hat{L}_y] = i\\hbar \\hat{L}_z',
    descriptionEn: 'Fundamental limit on simultaneous measurement precision of canonically conjugate quantum observables.',
    descriptionHi: 'कैनोनिकल रूप से संयुग्मी क्वांटम प्रेक्षणीय राशियों की समकालिक माप परिशुद्धता पर मौलिक सीमा।',
    keyApplications: ['Zero-point energy derivation', 'Spectral line natural width', 'Orbital angular momentum quantization']
  },

  // --- Thermodynamics ---
  {
    id: 'f-th-1',
    name: 'Carnot Engine & Refrigerator COP',
    category: 'Thermodynamics & Stat Mech',
    formula: '\\eta_{Carnot} = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}, \\quad \\beta = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C} = \\frac{1 - \\eta}{\\eta}',
    descriptionEn: 'Upper theoretical limit on the thermodynamic efficiency and coefficient of performance between heat reservoirs.',
    descriptionHi: 'दो ऊष्मा जलाशयों के बीच कार्य करने वाले इंजन की अधिकतम सैद्धांतिक दक्षता और प्रशीतक का कार्य निष्पादन गुणांक।',
    keyApplications: ['Power plant heat cycles', 'Heat pumps', 'Cryogenic cooling limits']
  },
  {
    id: 'f-th-2',
    name: 'Clausius-Clapeyron Equation',
    category: 'Thermodynamics & Stat Mech',
    formula: '\\frac{dP}{dT} = \\frac{L}{T (V_2 - V_1)} = \\frac{\\Delta S}{\\Delta V}',
    descriptionEn: 'Relates the slope of phase coexistence boundaries (dP/dT) to the latent heat L and volume change ΔV.',
    descriptionHi: 'प्रावस्था सह-अस्तित्व सीमाओं के ढलान (dP/dT) को गुप्त ऊष्मा L और आयतन परिवर्तन ΔV से संबंधित करता है।',
    keyApplications: ['Melting point variation with pressure', 'Vapor pressure curves', 'Atmospheric cloud formation']
  },

  // --- Physical Optics ---
  {
    id: 'f-op-1',
    name: "Newton's Rings Fringe Diameters",
    category: 'Optics & Waves',
    formula: 'D_{dark}^2 = 4 n R \\lambda, \\quad D_{bright}^2 = 2 (2n - 1) R \\lambda, \\quad \\lambda = \\frac{D_{n+p}^2 - D_n^2}{4 p R}',
    descriptionEn: 'Interference fringe diameters formed in the air film between a plano-convex lens of radius of curvature R and flat plate.',
    descriptionHi: 'वक्रता त्रिज्या R के समतल-उत्तल लेंस और कांच की पट्टिका के बीच बनी वायु फिल्म में व्यतिकरण फ्रिंज व्यास।',
    keyApplications: ['Optical lens testing', 'Accurate wavelength measurement', 'Refractive index of liquids']
  },
  {
    id: 'f-op-2',
    name: "Diffraction Grating & Resolving Power",
    category: 'Optics & Waves',
    formula: '(a + b) \\sin \\theta = n \\lambda, \\quad \\frac{\\lambda}{\\Delta \\lambda} = n \\cdot N',
    descriptionEn: 'Principal diffraction condition and chromatic resolving power for a transmission grating with N rulings in order n.',
    descriptionHi: 'n-वीं कोटि में N रेखाओं वाली ग्रेटिंग के लिए मुख्य विवर्तन शर्त एवं वर्णक्रमीय विभेदन क्षमता।',
    keyApplications: ['Spectroscopy', 'Sodium doublet separation', 'Astrophysical emission lines']
  },

  // --- Mechanics & Relativity ---
  {
    id: 'f-mr-1',
    name: 'Lorentz Transformations & Relativistic Invariants',
    category: 'Mechanics & Relativity',
    formula: '\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}, \\quad \\Delta t = \\gamma \\Delta t_0, \\quad L = \\frac{L_0}{\\gamma}, \\quad E^2 - p^2 c^2 = m_0^2 c^4',
    descriptionEn: 'Special relativistic transformations relating spatial and temporal intervals measured in different inertial frames.',
    descriptionHi: 'विभिन्न जड़त्वीय फ्रेमों में मापे गए स्थानिक और कालिक अंतरालों को जोड़ने वाले विशिष्ट आपेक्षिकीय रूपांतरण।',
    keyApplications: ['Particle accelerator dynamics', 'Muon lifetime extension', 'GPS satellite clock synchronization']
  },
  {
    id: 'f-mr-2',
    name: 'Euler-Lagrange Equation of Motion',
    category: 'Mechanics & Relativity',
    formula: '\\frac{d}{dt}\\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = 0, \\quad L = T - V',
    descriptionEn: 'Principle of stationary action yielding equations of motion in generalized coordinates without constraining forces.',
    descriptionHi: 'स्थिर क्रिया सिद्धांत जो बाध्यकारी बलों के बिना व्यापक निर्देशांकों में गति के समीकरण देता है।',
    keyApplications: ['Compound pendulums', 'Planetary orbits', 'Rigid body dynamics']
  },

  // --- Electronics ---
  {
    id: 'f-el-1',
    name: 'Operational Amplifier Voltage Gains',
    category: 'Electronics & Semiconductors',
    formula: 'A_{inv} = -\\frac{R_f}{R_1}, \\quad A_{non-inv} = 1 + \\frac{R_f}{R_1}, \\quad f_c = \\frac{1}{2\\pi R C}',
    descriptionEn: 'Closed-loop voltage gains for standard negative feedback operational amplifier circuits exploiting virtual short.',
    descriptionHi: 'वर्चुअल शार्ट अवधारणा पर आधारित मानक ऋणात्मक फीडबैक ऑपरेशनल एम्प्लीफायर के वोल्टेज लब्धि सूत्र।',
    keyApplications: ['Signal amplification', 'Active low-pass filters', 'Seismic geophone preamps']
  },

  // --- Mathematical Methods ---
  {
    id: 'f-math-1',
    name: 'Cayley-Hamilton Theorem & Matrix Inverses',
    category: 'Mathematical Methods',
    formula: 'p(A) = A^n + c_{n-1} A^{n-1} + \\dots + \\det(A) I = 0 \\implies A^{-1} = -\\frac{1}{\\det(A)} (A^{n-1} + \\dots + c_1 I)',
    descriptionEn: 'Every square matrix satisfies its own characteristic equation, providing immediate shortcuts for matrix powers and inverses.',
    descriptionHi: 'प्रत्येक वर्ग आव्यूह अपने स्वयं के अभिलाक्षणिक समीकरण को संतुष्ट करता है, जिससे घात और व्युत्क्रम आसानी से निकाले जा सकते हैं।',
    keyApplications: ['High-power matrix computation', 'Linear dynamical systems', 'Coordinate transformations']
  },
  {
    id: 'f-math-2',
    name: 'First-Order Linear Differential Equation & Integrating Factor',
    category: 'Mathematical Methods',
    formula: '\\frac{dy}{dx} + P(x)y = Q(x), \\quad \\text{IF} = e^{\\int P(x)\\,dx}, \\quad y \\cdot \\text{IF} = \\int Q(x) \\cdot \\text{IF}\\,dx + C',
    descriptionEn: 'General analytical solution technique for first-order linear ordinary differential equations.',
    descriptionHi: 'प्रथम कोटि के रैखिक साधारण अवकल समीकरणों को हल करने की सार्वत्रिक विधि।',
    keyApplications: ['RC and RL circuit transients', 'Radioactive decay series', 'Viscous fluid sedimentation']
  },

  // --- Seismic Prospecting & Exploration Geophysics ---
  {
    id: 'f-geo-5',
    name: 'Two-Layer Seismic Refraction Travel-Time & Crossover Offset',
    category: 'Solid Earth Geophysics',
    formula: 't = \\frac{x}{V_2} + \\frac{2h \\sqrt{V_2^2 - V_1^2}}{V_1 V_2}, \\quad x_{cross} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}}',
    descriptionEn: 'Computes head-wave travel time t and crossover offset x_cross where refracted arrivals overtake direct seismic arrivals.',
    descriptionHi: 'हेड-वेव यात्रा समय और क्रॉसओवर दूरी की गणना करता है जहाँ अपवर्तित तरंगें प्रत्यक्ष तरंगों से आगे निकल जाती हैं।',
    keyApplications: ['Bedrock depth determination', 'Groundwater table mapping', 'Civil engineering site investigation']
  },
  {
    id: 'f-geo-6',
    name: "Dix Formula for Reflection Interval Velocity",
    category: 'Solid Earth Geophysics',
    formula: 'V_{int, n} = \\sqrt{ \\frac{V_{rms, n}^2 t_n - V_{rms, n-1}^2 t_{n-1}}{t_n - t_{n-1}} }',
    descriptionEn: 'Inverts stacking / RMS velocities into true interval velocities for individual subsurface stratigraphic layers.',
    descriptionHi: 'स्टैकिंग या RMS वेगों को उपसतह की व्यक्तिगत परतों के वास्तविक अंतराल वेग में परिवर्तित करता है।',
    keyApplications: ['Hydrocarbon reservoir lithology identification', 'Depth conversion of seismic time sections']
  }
];
