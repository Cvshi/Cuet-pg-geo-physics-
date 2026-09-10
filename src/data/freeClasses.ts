import { FreeClass } from '../types';

export const FREE_CLASSES: FreeClass[] = [
  {
    id: 'class-em-01',
    title: "Maxwell's Equations, Displacement Current & Poynting Vector",
    titleHi: "मैक्सवेल के समीकरण, विस्थापन धारा एवं पोयंटिंग वेक्टर",
    topic: 'Electrodynamics & EM',
    duration: '48 min',
    instructor: 'Dr. A. Verma (Ex-IIT / Triz Faculty)',
    level: 'Foundational',
    youtubeId: 'K40lTrW40Lg', // Clean educational lecture on Maxwell's equations
    description:
      'Master the 4 fundamental differential and integral forms of Maxwell’s Equations, the physical origin of Ampere-Maxwell law displacement current, boundary conditions at dielectric interfaces, and Poynting energy flux vector.',
    descriptionHi:
      'मैक्सवेल के 4 समीकरणों के अवकल एवं समाकलन रूप, विस्थापन धारा की अवधारणा, परावैद्युत सीमाओं पर सीमा शर्तें, और पोयंटिंग ऊर्जा प्रवाह सदिश को विस्तार से समझें।',
    keyConcepts: [
      "Gauss's Law for Electrostatics: ∇ · D = ρ_f",
      "Gauss's Law for Magnetism (No Monopoles): ∇ · B = 0",
      "Faraday's Law of Induction: ∇ × E = -∂B/∂t",
      "Ampère-Maxwell Law: ∇ × H = J_f + ∂D/∂t",
      'Displacement Current Density: J_d = ε₀ ∂E/∂t',
      "Poynting's Theorem & Energy Flux Vector: S = E × H"
    ],
    keyFormulas: [
      {
        name: 'Poynting Vector (Instantaneous Energy Flux)',
        formula: '\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}) = \\vec{E} \\times \\vec{H}',
        note: 'Units: Watts/m². Gives both magnitude and direction of electromagnetic energy transfer.'
      },
      {
        name: 'Time-Averaged Poynting Vector in Vacuum',
        formula: '\\langle S \\rangle = \\frac{1}{2} c \\varepsilon_0 E_0^2 = \\frac{E_0 B_0}{2 \\mu_0}',
        note: 'Crucial for calculating radiation pressure, intensity, and laser beam power.'
      },
      {
        name: 'Boundary Conditions at Interface',
        formula: 'D_{1n} - D_{2n} = \\sigma_f, \\quad B_{1n} = B_{2n}, \\quad E_{1t} = E_{2t}, \\quad H_{1t} - H_{2t} = K_f',
        note: 'Normal component of D is discontinuous by free surface charge density; tangential E is always continuous.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Why Ampere’s Original Law Needed Modification',
        content:
          "Taking the divergence of Ampere's original curl equation ∇ × B = μ₀ J yields ∇ · (∇ × B) = 0, which would require ∇ · J = 0. However, the continuity equation demands ∇ · J = -∂ρ/∂t. For charging capacitors or time-varying charge distributions, Ampere's original law was mathematically incomplete. Maxwell introduced the displacement current density J_d = ∂D/∂t, restoring consistency with charge conservation."
      },
      {
        heading: '2. Electromagnetic Wave Speed in Dielectric Media',
        content:
          'From Maxwell’s curl equations in non-conducting media with permittivity ε and permeability μ, the wave equation ∇²E = με ∂²E/∂t² emerges. The phase velocity is v = 1/√(με) = c/n, where n = √(ε_r μ_r) is the refractive index. For non-magnetic materials (μ_r ≈ 1), n = √ε_r.'
      },
      {
        heading: '3. Skin Depth & Wave Attenuation in Conductors',
        content:
          'In good conductors with conductivity σ, EM waves attenuate exponentially. The skin depth δ is the distance over which field amplitude falls to 1/e (≈37%): δ = √(2 / (ω μ σ)). High-frequency fields and geophysics electromagnetic prospecting (MT methods) exploit skin depth to probe subsurface depths.'
      }
    ],
    relatedQuestionIds: [3, 10, 22, 45, 62]
  },
  {
    id: 'class-geo-02',
    title: 'Solid Earth Geophysics: Seismology, P & S Waves & Earth Structure',
    titleHi: 'भूभौतिकी: भूकंप विज्ञान, P एवं S तरंगें एवं पृथ्वी की आंतरिक संरचना',
    topic: 'Solid Earth Geophysics',
    duration: '52 min',
    instructor: 'Prof. S. R. Murthy (Former NGRI / CUET PG Chair)',
    level: 'Advanced',
    youtubeId: 'W4q8h66p37Q',
    description:
      "A complete walkthrough of body waves (Compressional P-waves, Shear S-waves), surface waves (Rayleigh, Love), Adams-Williamson equation, travel-time curves, Gutenberg-Richter recurrence law, and Earth's core shadow zones.",
    descriptionHi:
      'काया तरंगें (अनुदैर्ध्य P-तरंगें, अपरूपण S-तरंगें), धरातलीय तरंगें (रेले एवं लव), यात्रा-समय वक्र, गुटेनबर्ग-रिख्टर नियम, और पृथ्वी के क्रोड छाया क्षेत्र की पूर्ण व्याख्या।',
    keyConcepts: [
      "P-wave (Primary/Compressional) Velocity: V_p = √((K + 4/3 μ) / ρ)",
      'S-wave (Secondary/Shear) Velocity: V_s = √(μ / ρ)',
      'Poisson Ratio & Elastic Moduli relations: ν = (3K - 2μ) / (2(3K + μ))',
      'Core Shadow Zones: P-wave shadow zone (103° to 143°), S-wave shadow zone (>103°)',
      'Mohorovičić, Gutenberg, and Lehmann Discontinuities',
      'Gutenberg-Richter Frequency-Magnitude Relation: log₁₀ N = a - bM'
    ],
    keyFormulas: [
      {
        name: 'Seismic Body Wave Velocities',
        formula: 'V_p = \\sqrt{\\frac{K + \\frac{4}{3}\\mu}{\\rho}}, \\quad V_s = \\sqrt{\\frac{\\mu}{\\rho}}',
        note: 'Where K is bulk modulus, μ is shear modulus (rigidity), and ρ is density. In liquids/fluids μ = 0, so Vs = 0 (S-waves cannot propagate through Earth outer core).'
      },
      {
        name: 'Velocity Ratio for Poisson Solid (ν = 0.25)',
        formula: '\\frac{V_p}{V_s} = \\sqrt{\\frac{2(1-\\nu)}{1-2\\nu}} = \\sqrt{3} \\approx 1.732',
        note: 'Very frequently asked in CUET PG and GATE Geophysics exams.'
      },
      {
        name: 'Bouguer Gravity Anomaly Slab Formula',
        formula: '\\Delta g_B = 2\\pi G \\rho h \\approx 0.1119 \\, \\rho \\, h \\quad (\\text{mGal})',
        note: 'Accounts for the gravitational pull of excess rock mass between sea level and topographic elevation h.'
      }
    ],
    lectureNotes: [
      {
        heading: "1. Why S-Waves Cannot Travel Through Earth's Outer Core",
        content:
          "Shear modulus μ represents resistance to deformation under shear stress. Fluids and liquids possess zero shear modulus (μ = 0) because they cannot support static shear stresses. Since V_s = √(μ/ρ), V_s becomes zero in the liquid outer core. This explains why seismic stations at angular distances > 103° from the earthquake epicenter detect no direct S-waves."
      },
      {
        heading: '2. Major Seismic Discontinuities in the Earth',
        content:
          "• Moho (Mohorovičić): Crust-Mantle boundary (V_p jumps from ~6.5 to ~8.1 km/s).\n• Conrad: Upper continental crust to lower crust.\n• Repetti: Transition between upper mantle and lower mantle (~660 km).\n• Gutenberg: Mantle-Core boundary at ~2900 km depth (V_p drops sharply, V_s drops to 0).\n• Lehmann: Boundary between liquid outer core and solid inner core (~5150 km depth)."
      },
      {
        heading: '3. Archie’s Law in Well Logging & Resistivity',
        content:
          'In petrophysics and electrical resistivity prospecting: Formation resistivity R_o = F · R_w, where F = a / φ^m (Formation factor, φ = porosity, m = cementation exponent, R_w = pore water resistivity).'
      }
    ],
    relatedQuestionIds: [76, 77, 78, 79, 80, 81]
  },
  {
    id: 'class-qm-03',
    title: 'Quantum Mechanics: Wave Functions, 1D Box & Commutators',
    titleHi: 'क्वांटम यांत्रिकी: तरंग फलन, 1D बॉक्स एवं क्रमविनिमेयता',
    topic: 'Modern Physics & Quantum',
    duration: '55 min',
    instructor: 'Dr. N. Roy (Triz Senior Mentor, Quantum Physics)',
    level: 'Moderate',
    youtubeId: 'q8U2X7R352Q',
    description:
      'Step-by-step masterclass on Schrödinger equation, normalization, particle in a 1D infinite potential well, expectation values, Heisenberg uncertainty principle, and angular momentum commutator algebra.',
    descriptionHi:
      'श्रोडिंगर समीकरण, प्रसामान्यीकरण (नॉर्मलाइजेशन), 1D विभव कूप में कण, प्रत्याशा मान (एक्सपेक्टेशन वैल्यू), हाइजेनबर्ग अनिश्चितता सिद्धांत, और कोणीय संवेग कम्यूटेटर का संपूर्ण विश्लेषण।',
    keyConcepts: [
      'Time-Independent Schrödinger Equation: Ĥψ = Eψ',
      'Born Interpretation & Normalization: ∫ |ψ(x)|² dx = 1',
      'Particle in 1D Box of length L: E_n = n²h² / (8mL²) = n²π²ħ² / (2mL²)',
      'Zero-point Energy: E₁ = π²ħ² / (2mL²) (non-zero due to uncertainty principle)',
      'Position-Momentum Commutator: [x, p_x] = iħ',
      'Angular Momentum Commutators: [L_x, L_y] = iħ L_z'
    ],
    keyFormulas: [
      {
        name: 'Energy Eigenvalues (1D Infinite Well)',
        formula: 'E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} = \\frac{n^2 h^2}{8 m L^2}, \\quad n = 1, 2, 3, \\dots',
        note: 'Spacing between adjacent levels: ΔE = E_{n+1} - E_n = (2n+1) E_1 (increases linearly with n).'
      },
      {
        name: 'Heisenberg Uncertainty Principle',
        formula: '\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}',
        note: 'Minimum uncertainty wave packet is a Gaussian wave packet.'
      },
      {
        name: 'Expectation Value Formula',
        formula: '\\langle A \\rangle = \\int_{-\\infty}^{\\infty} \\psi^* \\hat{A} \\psi \\, dx',
        note: 'For symmetric bound states in symmetric wells centered at x=0, ⟨x⟩ = 0 and ⟨p⟩ = 0.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Properties of a Valid Quantum Wave Function',
        content:
          'A physically acceptable wave function ψ(x) must satisfy:\n1. It must be finite everywhere (no infinite singularities).\n2. It must be single-valued at every point x.\n3. It must be continuous everywhere, and its first spatial derivative dψ/dx must be continuous (except at points where potential V(x) is infinite).\n4. It must be square-integrable (normalizable).'
      },
      {
        heading: '2. Ehrenfest Theorem & Classical Correspondence',
        content:
          'Ehrenfest’s theorem states that quantum expectation values follow Newton’s equations of classical mechanics: d⟨x⟩/dt = ⟨p⟩/m, and d⟨p⟩/dt = -⟨dV/dx⟩. In the limit of large quantum numbers n ≫ 1, quantum results merge into classical expectations (Bohr Correspondence Principle).'
      }
    ],
    relatedQuestionIds: [7, 18, 32, 54, 71]
  },
  {
    id: 'class-thermo-04',
    title: 'Thermodynamics: Carnot Engine, Entropy & Maxwell Relations',
    titleHi: 'ऊष्मागतिकी: कार्नो इंजन, एंट्रॉपी एवं मैक्सवेल के संबंध',
    topic: 'Thermodynamics & Stat Mech',
    duration: '44 min',
    instructor: 'Er. Rajesh K. (Ex-IIT Roorkee, Physics Specialist)',
    level: 'Foundational',
    youtubeId: '9GMBPz5_rL8',
    description:
      'Learn the fundamental laws of thermodynamics, Carnot cycle efficiency, Clausius inequality, entropy changes in reversible and irreversible processes, Clausius-Clapeyron equation, and thermodynamic potentials.',
    descriptionHi:
      'ऊष्मागतिकी के मूल नियम, कार्नो चक्र दक्षता, क्लॉसियस असमिका, उत्क्रमणीय एवं अनुत्क्रमणीय प्रक्रमों में एंट्रॉपी परिवर्तन, क्लॉसियस-क्लेपरॉन समीकरण और मैक्सवेल संबंधों की गहन समझ।',
    keyConcepts: [
      'First Law: dQ = dU + dW = dU + P dV',
      'Carnot Engine Efficiency: η = 1 - (T_C / T_H) = (W / Q_H)',
      'Refrigerator COP (Coefficient of Performance): β = T_C / (T_H - T_C)',
      'Second Law & Entropy: dS = dQ_rev / T ≥ 0 for isolated systems',
      'Maxwell Thermodynamic Relations derived from U, H, F, G',
      'Clausius-Clapeyron Equation: dP/dT = L / (T ΔV)'
    ],
    keyFormulas: [
      {
        name: 'Carnot Efficiency & COP Relationship',
        formula: '\\eta = 1 - \\frac{T_C}{T_H}, \\quad \\beta = \\frac{1 - \\eta}{\\eta}',
        note: 'For maximum possible efficiency between two thermal reservoirs.'
      },
      {
        name: 'Clausius-Clapeyron Equation',
        formula: '\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}',
        note: 'Governs melting point change with pressure and boiling point depression at high altitudes.'
      },
      {
        name: 'The 4 Maxwell Thermodynamic Relations',
        formula: '\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V, \\quad \\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P, \\quad \\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T, \\quad \\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T',
        note: 'Mnemonic: "Good Physicists Have Studied Under Very Fine Teachers".'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Phase Transitions: First Order vs Second Order',
        content:
          '• First-Order Phase Transitions (e.g. ice to water, water to steam): Latent heat L ≠ 0. First derivatives of Gibbs free energy (S = -∂G/∂T and V = ∂G/∂P) are discontinuous.\n• Second-Order Phase Transitions (e.g. Ferromagnetic to Paramagnetic Curie point, Superconducting transition): Latent heat L = 0. First derivatives of G are continuous, but second derivatives (heat capacity C_p = -T ∂²G/∂T², compressibility κ, magnetic susceptibility χ) show discontinuities or spikes.'
      },
      {
        heading: '2. Statistical Distributions Overview',
        content:
          '• Maxwell-Boltzmann (Classical, distinguishable particles, any spin): f(E) ∝ e^{-E/kT}\n• Bose-Einstein (Quantum, indistinguishable bosons, integer spin 0, 1, 2...): f(E) = 1 / (e^{(E-μ)/kT} - 1)\n• Fermi-Dirac (Quantum, indistinguishable fermions, half-integer spin 1/2, 3/2...): f(E) = 1 / (e^{(E-μ)/kT} + 1)'
      }
    ],
    relatedQuestionIds: [5, 14, 28, 41, 67]
  },
  {
    id: 'class-optics-05',
    title: 'Physical Optics: Newton’s Rings, Diffraction & Polarization',
    titleHi: 'भौतिक प्रकाशिकी: न्यूटन वलय, विवर्तन एवं ध्रुवण',
    topic: 'Optics & Waves',
    duration: '46 min',
    instructor: 'Dr. Manisha Sen (Triz Optics Lead)',
    level: 'Moderate',
    youtubeId: 'e_rE8u4pX7w',
    description:
      "Deep dive into interference by division of amplitude (Newton's rings, thin films), Fraunhofer single slit and diffraction grating, resolving power of optical instruments, Brewster's angle, and quarter-wave plates.",
    descriptionHi:
      'आयाम विभाजन द्वारा व्यतिकरण (न्यूटन वलय, पतली फिल्में), एकल स्लिट एवं विवर्तन ग्रेटिंग द्वारा फ्रौनहोफर विवर्तन, प्रकाशिक उपकरणों की विभेदन क्षमता, ब्रूस्टर कोण और चतुर्थांश तरंग पट्टिका का अध्ययन।',
    keyConcepts: [
      "Newton's Rings: D_n² ∝ n (bright rings ∝ (2n-1), dark rings ∝ n)",
      'Thin film interference path difference: Δ = 2μt cos(r) ± λ/2',
      'Fraunhofer Single Slit Minima Condition: a sin θ = m λ (m = 1, 2, ...)',
      'Diffraction Grating Principal Maxima: (a + b) sin θ = n λ',
      "Brewster's Law: tan θ_p = μ (Reflected ray is 100% plane-polarized perpendicular to plane of incidence)",
      "Malus's Law: I = I₀ cos² θ"
    ],
    keyFormulas: [
      {
        name: "Diameter of Newton's Rings (Reflected Light)",
        formula: 'D_{dark} = \\sqrt{4 n R \\lambda}, \\quad D_{bright} = \\sqrt{2(2n-1) R \\lambda}',
        note: 'D_n² is directly proportional to ring order n, proving concentric circular fringes.'
      },
      {
        name: 'Resolving Power of Diffraction Grating',
        formula: '\\frac{\\lambda}{\\Delta \\lambda} = n \\cdot N',
        note: 'Where n is diffraction order and N is the total number of illuminated grating rulings.'
      },
      {
        name: 'Quarter-Wave Plate Thickness',
        formula: 't = \\frac{\\lambda}{4 |\\mu_e - \\mu_o|}',
        note: 'Introduces a phase difference of π/2 (path difference λ/4) between ordinary and extraordinary rays.'
      }
    ],
    lectureNotes: [
      {
        heading: "1. Why Newton's Central Spot is Dark in Reflection",
        content:
          'At the point of physical contact (center), film thickness t → 0. The geometrical path difference 2t vanishes. However, reflection at the top surface of the lower glass plate occurs from a denser medium (air to glass), introducing a Stokes phase change of π (equivalent to path change of λ/2). Hence, total effective path difference is λ/2, causing destructive interference and producing a dark center.'
      },
      {
        heading: '2. Missing Orders in Diffraction Grating',
        content:
          'If the condition for a grating principal maximum (a+b) sin θ = n λ coincides with the condition for single slit minimum a sin θ = m λ, that particular spectrum order n will be absent: n = m (a+b)/a.'
      }
    ],
    relatedQuestionIds: [1, 9, 21, 38, 59]
  },
  {
    id: 'class-mech-06',
    title: 'Mechanics & Special Relativity: Lorentz Transformations & Lagrangian',
    titleHi: 'यांत्रिकी एवं आपेक्षिकता: लोरेंत्ज़ रूपांतरण एवं लाग्रांजियन',
    topic: 'Mechanics & Relativity',
    duration: '50 min',
    instructor: 'Er. Rajesh K. & Dr. A. Verma',
    level: 'Advanced',
    youtubeId: 'AInC2Blh3Q8',
    description:
      'Comprehensive lecture covering Einstein’s postulates of special relativity, Lorentz factor γ, time dilation, length contraction, relativistic velocity addition, relativistic momentum and mass-energy E² = p²c² + m₀²c⁴, plus Lagrangian formalism L = T - V.',
    descriptionHi:
      'विशिष्ट आपेक्षिकता के सिद्धांत, लोरेंत्ज़ गुणांक γ, समय विस्तार, लंबाई संकुचन, आपेक्षिकीय वेग संयोजन, ऊर्जा-संवेग संबंध और लाग्रांजियन समीकरण (L = T - V) की विस्तृत व्याख्या।',
    keyConcepts: [
      'Einstein Postulates: Laws of physics same in all inertial frames; c is universal invariant',
      'Lorentz Factor: γ = 1 / √(1 - v²/c²)',
      'Time Dilation: Δt = γ Δt₀ (Moving clocks run slow)',
      'Length Contraction: L = L₀ / γ (Contraction occurs only along direction of motion)',
      'Relativistic Velocity Addition: u = (u\' + v) / (1 + u\'v/c²)',
      'Energy-Momentum Invariant: E² - p²c² = m₀²c⁴'
    ],
    keyFormulas: [
      {
        name: 'Relativistic Energy-Momentum Relation',
        formula: 'E^2 = p^2 c^2 + m_0^2 c^4, \\quad E = \\gamma m_0 c^2 = K + m_0 c^2',
        note: 'For massless particles (photons), m₀ = 0, hence E = pc.'
      },
      {
        name: 'Euler-Lagrange Equation of Motion',
        formula: '\\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = 0, \\quad L = T - V',
        note: 'If a coordinate q_i is cyclic (absent from L), its conjugate momentum p_i = ∂L/∂q̇_i is conserved.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Muon Decay: Proof of Special Relativity',
        content:
          'Muons created in the upper atmosphere (~10 km) have a rest lifetime of only ~2.2 μs. Classically, at near light speed (v ≈ 0.998c), they could only travel ~660 meters before decaying. Due to relativistic time dilation (from Earth’s frame, Δt = γ Δt₀ ≈ 35 μs) or length contraction (from muon’s frame, 10 km shrinks to ~660 m), they easily reach Earth surface detectors.'
      }
    ],
    relatedQuestionIds: [2, 11, 27, 49, 69]
  },
  {
    id: 'class-electronics-07',
    title: 'Electronics & Semiconductors: Op-Amps, Zener Diode & Logic Gates',
    titleHi: 'इलेक्ट्रॉनिक्स: ऑपरेशनल एम्प्लीफायर, जेनर डायोड एवं लॉजिक गेट्स',
    topic: 'Electronics & Semiconductors',
    duration: '42 min',
    instructor: 'Er. S. Chatterjee (Analog & Digital Circuits)',
    level: 'Foundational',
    youtubeId: '7FYHt5XviGQ',
    description:
      'Detailed coverage of semiconductor physics (intrinsic, extrinsic, Fermi level), Zener diode as voltage regulator, inverting and non-inverting operational amplifiers, virtual ground concept, and Boolean logic minimization.',
    descriptionHi:
      'अर्धचालक भौतिकी (नैज, अपद्रव्यी, फर्मी स्तर), वोल्टेज नियामक के रूप में जेनर डायोड, इनवर्टिंग एवं नॉन-इनवर्टिंग ऑप-एम्प, वर्चुअल ग्राउंड और बूलियन लॉजिक का सरलीकरण।',
    keyConcepts: [
      'Fermi Level in n-type: Shifts closer to conduction band: E_F ≈ E_c - kT ln(N_c / N_d)',
      'Zener Diode: Operates in reverse breakdown; maintains constant V_z despite input fluctuations',
      'Ideal Op-Amp Characteristics: Infinite input impedance (R_in → ∞), Zero output impedance (R_out = 0), Infinite open-loop gain (A_v → ∞)',
      'Inverting Op-Amp Gain: A_v = -R_f / R_1',
      'Non-Inverting Op-Amp Gain: A_v = 1 + (R_f / R_1)',
      "De Morgan's Theorems: (A + B)' = A' · B', and (A · B)' = A' + B'"
    ],
    keyFormulas: [
      {
        name: 'Inverting & Non-Inverting Op-Amp Gains',
        formula: 'A_{inv} = -\\frac{R_f}{R_1}, \\quad A_{non-inv} = 1 + \\frac{R_f}{R_1}',
        note: 'Due to virtual ground at inverting terminal: V_inverting = V_noninverting.'
      },
      {
        name: 'Zener Diode Series Resistor Calculation',
        formula: 'R_s = \\frac{V_{in(min)} - V_z}{I_{L(max)} + I_{z(min)}}',
        note: 'Ensures Zener diode remains in breakdown even at minimum supply voltage.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Virtual Ground Concept in Negative Feedback Op-Amps',
        content:
          'Because open-loop gain A_OL is virtually infinite (~10⁵ to 10⁶) and the output voltage V_out is finite (limited by power supplies ±Vcc), the differential input voltage V_d = V_+ - V_- = V_out / A_OL ≈ 0. Therefore, V_- tracks V_+. When non-inverting terminal V_+ is connected to ground (0V), the inverting terminal V_- is held at 0V without being physically grounded.'
      }
    ],
    relatedQuestionIds: [8, 17, 35, 52, 68]
  },
  {
    id: 'class-math-08',
    title: 'Mathematical Physics: Vector Theorems, Matrices & Differential Eq',
    titleHi: 'गणितीय भौतिकी: सदिश प्रमेय, आव्यूह एवं अवकल समीकरण',
    topic: 'Mathematical Methods',
    duration: '45 min',
    instructor: 'Dr. A. Verma (Triz Maths Faculty)',
    level: 'Foundational',
    youtubeId: 'FnJqaIESC2s',
    description:
      "Core mathematical tools required for physics & geophysics: Gauss divergence theorem, Stokes' curl theorem, conservative fields, eigenvalue & eigenvector properties of Hermitian matrices, and Frobenius method solutions.",
    descriptionHi:
      'भौतिकी एवं भूभौतिकी के प्रमुख गणितीय उपकरण: गॉस अपसरण प्रमेय, स्टोक्स कर्ल प्रमेय, संरक्षी क्षेत्र, हर्मिटी आव्यूह के आइगेनमान और प्रथम एवं द्वितीय कोटि अवकल समीकरण।',
    keyConcepts: [
      'Gauss Divergence Theorem: ∯ F · dS = ∭ (∇ · F) dV',
      'Stokes Curl Theorem: ∮ F · dr = ∬ (∇ × F) · dS',
      'Irrotational Field: ∇ × F = 0 ⟺ F = -∇φ (Conservative force)',
      'Solenoidal Field: ∇ · B = 0 ⟺ B = ∇ × A',
      'Eigenvalues of Hermitian Matrix are always real',
      'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation'
    ],
    keyFormulas: [
      {
        name: "Stokes' & Divergence Theorems",
        formula: '\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\vec{\\nabla} \\times \\vec{F}) \\cdot d\\vec{S}, \\quad \\iint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_V (\\vec{\\nabla} \\cdot \\vec{F}) \\, dV',
        note: 'Crucial for converting line integrals into surface integrals and surface integrals into volume integrals.'
      },
      {
        name: 'Matrix Trace and Determinant Relations',
        formula: '\\text{Tr}(A) = \\sum_{i} \\lambda_i, \\quad \\det(A) = \\prod_{i} \\lambda_i',
        note: 'Direct shortcut to find missing eigenvalues without calculating secular determinant.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Checking Conservative Force Fields',
        content:
          'A force field F is conservative if and only if ∇ × F = 0 everywhere in a simply-connected region. In this case, work done ∮ F · dr along any closed path is zero, and work between two points is path-independent.'
      }
    ],
    relatedQuestionIds: [4, 13, 29, 44, 60]
  },
  {
    id: 'class-math-09',
    title: 'Linear Algebra: Matrices, Determinants, Rank & Cayley-Hamilton',
    titleHi: 'रैखिक बीजगणित: आव्यूह, सारणिक, कोटि एवं केली-हैमिल्टन प्रमेय',
    topic: 'Mathematical Methods',
    duration: '47 min',
    instructor: 'Dr. A. Verma (Triz Maths Lead)',
    level: 'Foundational',
    youtubeId: 'fNk_zzaMoSs', // 3Blue1Brown Essence of linear algebra / matrices
    description:
      'Master matrix operations, properties of determinants, Cramer’s rule for linear systems, rank determination, characteristic equations, and applying Cayley-Hamilton theorem to evaluate matrix powers and inverses.',
    descriptionHi:
      'आव्यूह संक्रियाएं, सारणिकों के गुणधर्म, रैखिक प्रणालियों हेतु क्रेमर का नियम, आव्यूह कोटि (रैंक), अभिलाक्षणिक समीकरण, और केली-हैमिल्टन प्रमेय के अनुप्रयोग।',
    keyConcepts: [
      'Determinant properties: det(AB) = det(A) det(B), det(kA) = k^n det(A)',
      'Trace & Determinant: Tr(A) = Σ λ_i, det(A) = Π λ_i',
      'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation p(A) = 0',
      'Inverse using Cayley-Hamilton: A⁻¹ = -1/a_n (A^{n-1} + a_1 A^{n-2} + ... + a_{n-1} I)',
      'Orthogonal Matrix: A^T A = I, det(A) = ±1',
      'Hermitian Matrix: A^† = A, all eigenvalues are strictly real'
    ],
    keyFormulas: [
      {
        name: 'Eigenvalue Shortcuts (2x2 & 3x3)',
        formula: '\\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0 \\quad (2\\times 2)',
        note: 'Allows solving 2x2 eigenvalue problems in under 15 seconds without setting up full secular determinants.'
      },
      {
        name: 'Cramer’s Rule for Linear Systems',
        formula: 'x_i = \\frac{\\det(A_i)}{\\det(A)}',
        note: 'Unique solution exists if and only if det(A) ≠ 0. If det(A) = 0 and det(A_i) ≠ 0, system is inconsistent.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Fast Computation of Aⁿ using Cayley-Hamilton',
        content:
          'For a 2x2 matrix with characteristic equation λ² - 5λ + 6 = 0, Cayley-Hamilton states A² - 5A + 6I = 0. Therefore A² = 5A - 6I. Higher powers A³ = 5A² - 6A = 5(5A - 6I) - 6A = 19A - 30I, eliminating the need for matrix multiplication.'
      }
    ],
    relatedQuestionIds: [95, 101, 102, 103]
  },
  {
    id: 'class-math-10',
    title: 'Calculus & Differential Equations: Leibniz Rule & Orthogonal Trajectories',
    titleHi: 'कलन एवं अवकल समीकरण: लाइबनिज़ नियम एवं लांबिक प्रक्षेप पथ',
    topic: 'Mathematical Methods',
    duration: '50 min',
    instructor: 'Prof. R. Sengupta (Triz Advanced Faculty)',
    level: 'Moderate',
    youtubeId: 'p_di4Zn4wz4', // Differential equations masterclass
    description:
      'Complete preparation for CUET PG calculus topics: Leibniz’s theorem for n-th order differentiation of products, curve asymptotes, radius of curvature, 1st order linear differential equations with integrating factor, and finding orthogonal trajectories.',
    descriptionHi:
      'गुणनफल के n-वें अवकलन हेतु लाइबनिज़ प्रमेय, वक्रों की अनंतस्पर्शी, वक्रता त्रिज्या, समाकलन गुणक युक्त प्रथम कोटि अवकल समीकरण और लांबिक प्रक्षेप पथ ज्ञात करने की विधियां।',
    keyConcepts: [
      'Leibniz Theorem for n-th derivative: (uv)_n = Σ C(n, r) u_{n-r} v_r',
      'Radius of Curvature: ρ = [1 + (y\')²]^{3/2} / |y\'\'|',
      'First-order Linear DE: dy/dx + P(x)y = Q(x) with IF = e^{∫ P dx}',
      'Orthogonal Trajectories in Cartesian: Replace dy/dx with -dx/dy',
      'Orthogonal Trajectories in Polar: Replace dr/dθ with -r² dθ/dr',
      'Laplace Transform of Derivatives: L{y\'} = s Y(s) - y(0)'
    ],
    keyFormulas: [
      {
        name: 'First Order Linear Integrating Factor Solution',
        formula: 'y \\cdot e^{\\int P\\,dx} = \\int Q(x) e^{\\int P\\,dx} \\, dx + C',
        note: 'The standard workhorse for solving RC, RL transient circuits and sedimentation decay models.'
      },
      {
        name: 'Radius of Curvature at Origin',
        formula: '\\rho = \\frac{(1 + y_1^2)^{3/2}}{y_2}',
        note: 'For curves tangent to x-axis at origin (y1 = 0), ρ simplifies to 1 / y2.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Finding Orthogonal Trajectories Step-by-Step',
        content:
          '1. Differentiate the given family F(x, y, c) = 0 with respect to x.\n2. Eliminate the parameter c to obtain the differential equation dy/dx = f(x, y).\n3. Replace dy/dx with -dx/dy (or -1/(dy/dx)) to get the orthogonal family equation.\n4. Integrate the resulting differential equation.'
      }
    ],
    relatedQuestionIds: [104, 105, 106, 107]
  },
  {
    id: 'class-mech-11',
    title: 'Mechanics & Oscillations: Beats, Lissajous Figures & Compound Pendulum',
    titleHi: 'यांत्रिकी एवं दोलन: विस्पंद, लिसाजू आकृतियां एवं यौगिक लोलक',
    topic: 'Mechanics & Relativity',
    duration: '46 min',
    instructor: 'Dr. A. Verma (Ex-IIT Roorkee)',
    level: 'Foundational',
    youtubeId: 'qNsdD_QxLsc',
    description:
      'Detailed analysis of superposed simple harmonic motions: analytical derivation of beats, graphical construction and interpretation of Lissajous figures with phase shifts (0, π/4, π/2, π), compound pendulum period equation, and center of oscillation.',
    descriptionHi:
      'परस्पर लंबवत सरल आवर्त गतियों का अध्यारोपण: विस्पंद आवृत्ति, कलांतर (0, π/4, π/2, π) पर लिसाजू आकृतियों का निर्माण, यौगिक लोलक का आवर्तकाल एवं दोलन केंद्र।',
    keyConcepts: [
      'Beat Frequency: f_b = |f_1 - f_2|',
      'Lissajous Figure for ω_x = ω_y and Δφ = 0 or π: Straight line y = ±(B/A)x',
      'Lissajous Figure for ω_x = ω_y and Δφ = π/2: Ellipse x²/A² + y²/B² = 1 (Circle if A = B)',
      'Compound Pendulum Period: T = 2π √((k² + l²) / (gl))',
      'Length of Equivalent Simple Pendulum: L = l + k²/l',
      'Center of Suspension and Center of Oscillation are mutually interchangeable'
    ],
    keyFormulas: [
      {
        name: 'Compound Pendulum Time Period',
        formula: 'T = 2\\pi \\sqrt{\\frac{k^2 + l^2}{g l}} = 2\\pi \\sqrt{\\frac{L}{g}}, \\quad L = l + \\frac{k^2}{l}',
        note: 'Minimum time period occurs when l = k (distance from center of mass equals radius of gyration).'
      },
      {
        name: 'Catenary Equation of Uniform Flexible Chain',
        formula: 'y = c \\cosh\\left(\\frac{x}{c}\\right), \\quad s = c \\sinh\\left(\\frac{x}{c}\\right), \\quad y^2 = c^2 + s^2',
        note: 'Where c is the parameter T₀ / w (ratio of horizontal tension to weight per unit length).'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Conditions for Circular Lissajous Figure',
        content:
          'When two perpendicular SHMs of identical frequency (ω_x = ω_y) and identical amplitude (A = B) superpose with a phase difference Δφ = π/2 (or 90°), the parametric equations x = A sin(ωt) and y = A cos(ωt) yield x² + y² = A², forming a perfect circle.'
      }
    ],
    relatedQuestionIds: [108, 109, 110, 111]
  },
  {
    id: 'class-geo-12',
    title: 'Seismic Exploration: Refraction, Reflection & Travel-Time Curves',
    titleHi: 'भूकंपीय पूर्वेक्षण: अपवर्तन, परावर्तन एवं यात्रा-समय वक्र',
    topic: 'Solid Earth Geophysics',
    duration: '54 min',
    instructor: 'Prof. S. R. Murthy (CUET PG Geophysics Chair)',
    level: 'Advanced',
    youtubeId: 'pCq2w3h-8B4',
    description:
      'Master the physics of seismic exploration: Snell’s law in stratified earth, critical refraction angle, head waves, horizontal 2-layer refraction travel-time t = x/V₂ + 2h√(V₂² - V₁²)/(V₁V₂), crossover distance, and seismic reflection NMO hyperbolas.',
    descriptionHi:
      'भूभौतिकीय अन्वेषण में भूकंपीय अपवर्तन और परावर्तन: स्नेल का नियम, क्रांतिक कोण, हेड तरंगें, क्षैतिज दो-परत अपवर्तन यात्रा-समय समीकरण, क्रॉसओवर दूरी और सामान्य चालन सुधार (NMO)।',
    keyConcepts: [
      "Snell's Law of Refraction: sin i / V₁ = sin r / V₂ = p (Ray Parameter)",
      'Critical Refraction: sin i_c = V₁ / V₂ (requires V₂ > V₁)',
      'Direct Wave Travel Time: t_{dir} = x / V₁ (straight line through origin)',
      'Refracted Head Wave: t_{refr} = x / V₂ + t_i (intercept time t_i = 2h cos i_c / V₁)',
      'Crossover Distance: x_{cross} = 2h √((V₂ + V₁) / (V₂ - V₁))',
      'Normal Moveout (NMO) in Reflection: Δt_{NMO} ≈ x² / (2 V² t₀)'
    ],
    keyFormulas: [
      {
        name: 'Two-Layer Seismic Refraction Travel-Time',
        formula: 't = \\frac{x}{V_2} + \\frac{2h \\sqrt{V_2^2 - V_1^2}}{V_1 V_2} = \\frac{x}{V_2} + t_i',
        note: 'Slope of refracted arrival line gives 1/V₂; intercept time t_i yields depth to refractor h.'
      },
      {
        name: 'Crossover Distance Formula',
        formula: 'x_{cross} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}}',
        note: 'Distance at which direct wave and refracted head wave arrive at the exact same instant.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Finding Refractor Depth h from Intercept Time t_i',
        content:
          'From the travel-time plot, the slope of the refracted arrival gives 1/V₂, and the slope of the direct arrival gives 1/V₁. The y-axis intercept of the refracted branch is t_i = 2h√(V₂² - V₁²) / (V₁V₂). Rearranging gives refractor depth h = (t_i / 2) · (V₁V₂) / √(V₂² - V₁²).'
      }
    ],
    relatedQuestionIds: [112, 113, 114, 115]
  },
  {
    id: 'class-geo-13',
    title: 'Gravity & Magnetic Prospecting: Corrections, Anomalies & Geodynamo',
    titleHi: 'गुरुत्व एवं चुंबकीय पूर्वेक्षण: संशोधन, विसंगतियां एवं भू-डायनेमो',
    topic: 'Solid Earth Geophysics',
    duration: '49 min',
    instructor: 'Prof. S. R. Murthy & Dr. Verma',
    level: 'Moderate',
    youtubeId: 'VzQpGkZq5s0',
    description:
      'Comprehensive masterclass on potential field geophysics: Latitude correction, Free-air correction (0.3086 mGal/m), Bouguer slab correction, terrain correction, regional vs residual anomalies, magnetic dipole equations, and Earth’s geodynamo mechanism.',
    descriptionHi:
      'विभव क्षेत्र भूभौतिकी: अक्षांश संशोधन, मुक्त-वायु संशोधन (0.3086 mGal/m), बोगर पट्टिका संशोधन, स्थलाकृतिक संशोधन, चुंबकीय द्विध्रुव समीकरण और पृथ्वी का भू-डायनेमो तंत्र।',
    keyConcepts: [
      'Free-Air Correction: Δg_{FA} = +0.3086 h (mGal) where h is station height in meters',
      'Bouguer Slab Correction: Δg_B = -2π G ρ h = -0.04193 ρ h (mGal)',
      'Complete Bouguer Anomaly: Δg_{CBA} = g_{obs} - g_0 + Δg_{FA} - Δg_B + Δg_{terrain}',
      'Airy Isostasy (Equal density, roots under mountains) vs Pratt Isostasy (Variable density)',
      'Geomagnetic Dipole Field: tan I = 2 tan λ (Relation between magnetic inclination I and latitude λ)',
      'Curie Temperature: Ferromagnetism transitions to paramagnetism (580°C for magnetite)'
    ],
    keyFormulas: [
      {
        name: 'Combined Free-Air & Bouguer Elevation Correction',
        formula: '\\Delta g_{elev} = (0.3086 - 0.04193 \\rho) h \\quad (\\text{mGal})',
        note: 'For standard crustal density ρ = 2.67 g/cm³, the net elevation factor is +0.1967 mGal/m.'
      },
      {
        name: 'Geomagnetic Dipole Inclination Formula',
        formula: '\\tan I = 2 \\tan \\lambda',
        note: 'At the magnetic equator (λ = 0°), dip angle I = 0° (horizontal). At the poles (λ = 90°), I = 90° (vertical).'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Why Bouguer Anomaly is Negative over High Mountains',
        content:
          'High mountain ranges have low-density crustal roots (Airy isostasy) protruding into the denser mantle below. The mass deficit of these crustal roots produces a strong negative Bouguer gravity anomaly over mountain belts like the Himalayas.'
      }
    ],
    relatedQuestionIds: [79, 100, 116, 117, 118]
  },
  {
    id: 'class-geo-14',
    title: 'Electrical Prospecting & Well Logging: Archie’s Law & Resistivity Arrays',
    titleHi: 'विद्युत पूर्वेक्षण एवं कूप संलेखन: आर्ची का नियम एवं प्रतिरोधकता विन्यास',
    topic: 'Solid Earth Geophysics',
    duration: '45 min',
    instructor: 'Er. S. Chatterjee (Triz Petroleum Geophysics)',
    level: 'Moderate',
    youtubeId: 'wWJ22hE_y7k',
    description:
      'In-depth study of DC resistivity sounding and profiling: Wenner array (equal electrode spacing a, ρ_a = 2πaR), Schlumberger array, Archie’s empirical law in petroleum petrophysics, formation resistivity factor F = a/φ^m, and reservoir hydrocarbon saturation.',
    descriptionHi:
      'दिष्ट धारा प्रतिरोधकता मापन: वेनर विन्यास (एकसमान इलेक्ट्रोड दूरी a, ρ_a = 2πaR), श्लम्बरगर विन्यास, पेट्रोलियम पेट्रोफिजिक्स में आर्ची का अनुभवजन्य नियम और हाइड्रोकार्बन संतृप्ति।',
    keyConcepts: [
      'Apparent Resistivity: ρ_a = K · (ΔV / I) where K is the geometric factor',
      'Wenner Array: Four equally spaced collinear electrodes A-M-N-B, K = 2πa, ρ_a = 2π a R',
      'Schlumberger Array: Potential electrodes MN kept close while current electrodes AB expand',
      "Archie's First Law (Formation Factor): F = R_0 / R_w = a / φ^m",
      "Archie's Second Law (Resistivity Index): I = R_t / R_0 = 1 / S_w^n",
      'Hydrocarbon Detection: Hydrocarbons are non-conductive, creating sharp positive resistivity spikes'
    ],
    keyFormulas: [
      {
        name: 'Wenner vs Schlumberger Apparent Resistivity',
        formula: '\\rho_a^{Wenner} = 2\\pi a \\frac{\\Delta V}{I}, \\quad \\rho_a^{Schlum} = \\pi \\frac{s^2 - l^2}{2l} \\frac{\\Delta V}{I}',
        note: 'Where s = AB/2 (half current spread) and l = MN/2 (half potential spread).'
      },
      {
        name: 'Archie’s Water Saturation Equation',
        formula: 'S_w = \\left( \\frac{a R_w}{\\phi^m R_t} \\right)^{1/n}',
        note: 'Hydrocarbon saturation is complementary: S_{hc} = 1 - S_w.'
      }
    ],
    lectureNotes: [
      {
        heading: '1. Why Wenner Array is Best for Profiling and Schlumberger for Sounding',
        content:
          'In Wenner sounding, all four electrodes must be shifted for each measurement depth, requiring more labour. In Schlumberger vertical electrical sounding (VES), only the outer current electrodes A and B need to be moved outwards while keeping potential electrodes M and N stationary for multiple steps.'
      }
    ],
    relatedQuestionIds: [97, 119, 120, 121]
  }
];
