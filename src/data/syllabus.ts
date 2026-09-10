import { SubjectCategory } from '../types';

export interface SyllabusSubtopic {
  id: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  cuetWeightage: 'High' | 'Medium' | 'Foundational';
  category: SubjectCategory;
  classId?: string;
  expectedQuestions: number;
}

export interface SyllabusUnit {
  id: string;
  unitNumber: number;
  section: 'Physics' | 'Mathematics' | 'Solid Earth Geophysics';
  titleEn: string;
  titleHi: string;
  weightagePercentage: number;
  totalTopics: number;
  subtopics: SyllabusSubtopic[];
}

export const OFFICIAL_CUET_PG_SYLLABUS: SyllabusUnit[] = [
  // --- SECTION: PHYSICS ---
  {
    id: 'unit-mech',
    unitNumber: 1,
    section: 'Physics',
    titleEn: 'Mechanics & Wave Motion',
    titleHi: 'यांत्रिकी एवं तरंग गति',
    weightagePercentage: 15,
    totalTopics: 6,
    subtopics: [
      {
        id: 'mech-1',
        nameEn: 'Inertial & Non-Inertial Frames, Equivalence Principle',
        nameHi: 'जड़त्वीय एवं अजड़त्वीय निर्देश तंत्र, तुल्यता सिद्धांत',
        descriptionEn: 'Galilean invariance, transformation of coordinates, pseudo forces (Coriolis, centrifugal), Einstein principle of equivalence.',
        cuetWeightage: 'Medium',
        category: 'Mechanics & Relativity',
        classId: 'class-mech-06',
        expectedQuestions: 2
      },
      {
        id: 'mech-2',
        nameEn: 'Gravitation & Planetary Dynamics',
        nameHi: 'गुरुत्वाकर्षण एवं ग्रहीय गति',
        descriptionEn: "Kepler's laws, energy and orbital velocity of satellites, escape velocity, central force field conservation.",
        cuetWeightage: 'High',
        category: 'Mechanics & Relativity',
        classId: 'class-mech-06',
        expectedQuestions: 3
      },
      {
        id: 'mech-3',
        nameEn: 'Variable Mass & Rocket Propulsion',
        nameHi: 'परिवर्तनीय द्रव्यमान एवं रॉकेट नोदन',
        descriptionEn: "Conservation of linear momentum for systems of variable mass, Tsiolkovsky's rocket equation, thrust and exhaust velocity.",
        cuetWeightage: 'High',
        category: 'Mechanics & Relativity',
        classId: 'class-mech-06',
        expectedQuestions: 2
      },
      {
        id: 'mech-4',
        nameEn: 'Rotational Dynamics, Moment of Inertia & Gyration',
        nameHi: 'घूर्णन गतिकी, जड़त्व आघूर्ण एवं परिभ्रमण त्रिज्या',
        descriptionEn: 'Parallel and perpendicular axes theorems, moment of inertia of disk, cylinder, sphere, compound pendulum.',
        cuetWeightage: 'High',
        category: 'Mechanics & Relativity',
        classId: 'class-mech-11',
        expectedQuestions: 3
      },
      {
        id: 'mech-5',
        nameEn: 'Oscillations, Beats & Lissajous Figures',
        nameHi: 'दोलन, विस्पंद एवं लिसाजू आकृतियां',
        descriptionEn: 'Superposition of perpendicular SHMs of equal and unequal frequencies, phase difference effects, beat frequency.',
        cuetWeightage: 'High',
        category: 'Optics & Waves',
        classId: 'class-mech-11',
        expectedQuestions: 2
      },
      {
        id: 'mech-6',
        nameEn: 'LCR Circuits, Resonance & Fourier Series',
        nameHi: 'LCR परिपथ, अनुनाद एवं फूरियर श्रेणी',
        descriptionEn: 'Series and parallel resonance, quality factor Q, bandwidth, Dirichlet conditions, Fourier series expansion of periodic waves.',
        cuetWeightage: 'Medium',
        category: 'Optics & Waves',
        classId: 'class-mech-11',
        expectedQuestions: 2
      }
    ]
  },
  {
    id: 'unit-em',
    unitNumber: 2,
    section: 'Physics',
    titleEn: 'Electromagnetic Theory & Electronics',
    titleHi: 'विद्युतचुंबकीय सिद्धांत एवं इलेक्ट्रॉनिक्स',
    weightagePercentage: 18,
    totalTopics: 6,
    subtopics: [
      {
        id: 'em-1',
        nameEn: "Maxwell's Equations & Displacement Current",
        nameHi: 'मैक्सवेल के समीकरण एवं विस्थापन धारा',
        descriptionEn: "Differential and integral forms of Maxwell's laws, physical continuity equation origin of displacement current.",
        cuetWeightage: 'High',
        category: 'Electrodynamics & EM',
        classId: 'class-em-01',
        expectedQuestions: 4
      },
      {
        id: 'em-2',
        nameEn: 'Poynting Vector & EM Wave Propagation',
        nameHi: 'पोयंटिंग वेक्टर एवं विद्युतचुंबकीय तरंग संचरण',
        descriptionEn: 'Poynting theorem, energy flux density S = E × H, wave impedance, radiation pressure in vacuum and dielectric.',
        cuetWeightage: 'High',
        category: 'Electrodynamics & EM',
        classId: 'class-em-01',
        expectedQuestions: 3
      },
      {
        id: 'em-3',
        nameEn: 'Fields in Coaxial Cable & Skin Depth',
        nameHi: 'समाक्षीय केबल में क्षेत्र एवं त्वचा गहराई',
        descriptionEn: 'Boundary conditions on conductors and dielectrics, skin depth δ = √(2/ωμσ), high-frequency attenuation.',
        cuetWeightage: 'Medium',
        category: 'Electrodynamics & EM',
        classId: 'class-em-01',
        expectedQuestions: 2
      },
      {
        id: 'em-4',
        nameEn: 'Semiconductor Physics & P-N Junction',
        nameHi: 'अर्धचालक भौतिकी एवं P-N संधि',
        descriptionEn: 'Intrinsic and extrinsic semiconductors, Fermi level variation with temperature and doping, depletion barrier.',
        cuetWeightage: 'Medium',
        category: 'Electronics & Semiconductors',
        classId: 'class-electronics-07',
        expectedQuestions: 2
      },
      {
        id: 'em-5',
        nameEn: 'Zener Diode, Rectifiers & Power Filters',
        nameHi: 'जेनर डायोड, दिष्टकारी एवं फिल्टर',
        descriptionEn: 'Zener voltage breakdown regulator, half-wave (ripple 1.21) and full-wave (ripple 0.482) rectifiers, capacitive filtering.',
        cuetWeightage: 'High',
        category: 'Electronics & Semiconductors',
        classId: 'class-electronics-07',
        expectedQuestions: 3
      },
      {
        id: 'em-6',
        nameEn: 'Transistors & Common Emitter Amplifier',
        nameHi: 'ट्रांजिस्टर एवं उभयनिष्ठ उत्सर्जक प्रवर्धक',
        descriptionEn: 'CE configuration characteristics, current gains α and β, voltage amplification, load line analysis, Op-Amps.',
        cuetWeightage: 'High',
        category: 'Electronics & Semiconductors',
        classId: 'class-electronics-07',
        expectedQuestions: 3
      }
    ]
  },
  {
    id: 'unit-optics',
    unitNumber: 3,
    section: 'Physics',
    titleEn: 'Optics & Wave Phenomena',
    titleHi: 'प्रकाशिकी एवं तरंग परिघटनाएं',
    weightagePercentage: 14,
    totalTopics: 5,
    subtopics: [
      {
        id: 'opt-1',
        nameEn: "Newton's Rings & Thin Film Interference",
        nameHi: 'न्यूटन वलय एवं पतली फिल्मों में व्यतिकरण',
        descriptionEn: 'Interference by division of amplitude, wedge-shaped air film, circular fringe diameters, Stokes phase shift.',
        cuetWeightage: 'High',
        category: 'Optics & Waves',
        classId: 'class-optics-05',
        expectedQuestions: 3
      },
      {
        id: 'opt-2',
        nameEn: "Michelson's Interferometer & Coherence",
        nameHi: 'माइकलसन व्यतिकरणमापी एवं कला-संबद्धता',
        descriptionEn: 'Circular and localized fringes, wavelength determination, fringe shift upon path difference variation ΔN = 2d/λ.',
        cuetWeightage: 'Medium',
        category: 'Optics & Waves',
        classId: 'class-optics-05',
        expectedQuestions: 2
      },
      {
        id: 'opt-3',
        nameEn: 'Diffraction: Fresnel & Fraunhofer (Single Slit & Grating)',
        nameHi: 'विवर्तन: फ्रेनेल एवं फ्रौनहोफर (एकल स्लिट एवं ग्रेटिंग)',
        descriptionEn: 'Single slit diffraction intensity distribution, plane diffraction grating equation, resolving power, missing orders.',
        cuetWeightage: 'High',
        category: 'Optics & Waves',
        classId: 'class-optics-05',
        expectedQuestions: 3
      },
      {
        id: 'opt-4',
        nameEn: "Polarization, Brewster's Law & Malus's Law",
        nameHi: 'ध्रुवण, ब्रूस्टर का नियम एवं मैलस का नियम',
        descriptionEn: 'Polarization by reflection, Brewster angle tan θ_p = μ, Nicol prism, production and detection of polarized light.',
        cuetWeightage: 'High',
        category: 'Optics & Waves',
        classId: 'class-optics-05',
        expectedQuestions: 3
      },
      {
        id: 'opt-5',
        nameEn: "Double Refraction & Huygens' Theory",
        nameHi: 'द्वि-अपवर्तन एवं हाइगेन्स का सिद्धांत',
        descriptionEn: 'Ordinary and extraordinary rays, uniaxial crystals (positive vs negative), quarter-wave and half-wave plates.',
        cuetWeightage: 'Medium',
        category: 'Optics & Waves',
        classId: 'class-optics-05',
        expectedQuestions: 2
      }
    ]
  },
  {
    id: 'unit-thermo',
    unitNumber: 4,
    section: 'Physics',
    titleEn: 'Thermodynamics & Statistical Physics',
    titleHi: 'ऊष्मागतिकी एवं सांख्यिकीय भौतिकी',
    weightagePercentage: 16,
    totalTopics: 5,
    subtopics: [
      {
        id: 'th-1',
        nameEn: 'Carnot Cycle, Reversibility & Entropy',
        nameHi: 'कार्नो चक्र, उत्क्रमणीयता एवं एंट्रॉपी',
        descriptionEn: 'Carnot efficiency η = 1 - Tc/Th, Clausius theorem ∮ dQ/T ≤ 0, entropy changes in ideal gas processes, T-S diagrams.',
        cuetWeightage: 'High',
        category: 'Thermodynamics & Stat Mech',
        classId: 'class-thermo-04',
        expectedQuestions: 3
      },
      {
        id: 'th-2',
        nameEn: "Maxwell's Thermodynamic Relations & Potentials",
        nameHi: 'मैक्सवेल के ऊष्मागतिक संबंध एवं विभव',
        descriptionEn: 'Internal energy U, Enthalpy H, Helmholtz F, Gibbs G potentials, T-dS equations, specific heat relations Cp - Cv.',
        cuetWeightage: 'High',
        category: 'Thermodynamics & Stat Mech',
        classId: 'class-thermo-04',
        expectedQuestions: 3
      },
      {
        id: 'th-3',
        nameEn: 'Clausius-Clapeyron Equation & Phase Transitions',
        nameHi: 'क्लॉसियस-क्लेपरॉन समीकरण एवं प्रावस्था परिवर्तन',
        descriptionEn: 'Latent heat equation dP/dT = L / (T ΔV), boiling point and melting point dependence on pressure, 1st and 2nd order transitions.',
        cuetWeightage: 'High',
        category: 'Thermodynamics & Stat Mech',
        classId: 'class-thermo-04',
        expectedQuestions: 2
      },
      {
        id: 'th-4',
        nameEn: 'Blackbody Radiation & Radiation Laws',
        nameHi: 'कृष्णिका विकिरण एवं विकिरण नियम',
        descriptionEn: "Stefan-Boltzmann law E = σT⁴, Wien's displacement law λ_m T = b, Rayleigh-Jeans ultraviolet catastrophe, Planck's law.",
        cuetWeightage: 'High',
        category: 'Thermodynamics & Stat Mech',
        classId: 'class-thermo-04',
        expectedQuestions: 3
      },
      {
        id: 'th-5',
        nameEn: 'Photoelectric, Compton & Raman Effects',
        nameHi: 'प्रकाश विद्युत, कॉम्पटन एवं रामन प्रभाव',
        descriptionEn: "Einstein photoelectric equation, Compton shift Δλ = (h/m₀c)(1 - cos θ), Raman Stokes and Anti-Stokes frequency shifts.",
        cuetWeightage: 'High',
        category: 'Modern Physics & Quantum',
        classId: 'class-qm-03',
        expectedQuestions: 3
      }
    ]
  },

  // --- SECTION: MATHEMATICS ---
  {
    id: 'unit-math',
    unitNumber: 5,
    section: 'Mathematics',
    titleEn: 'Mathematical Methods for Geophysics',
    titleHi: 'भूभौतिकी हेतु गणितीय विधियां',
    weightagePercentage: 20,
    totalTopics: 6,
    subtopics: [
      {
        id: 'math-1',
        nameEn: 'Matrices, Determinants & Eigenvalues',
        nameHi: 'आव्यूह, सारणिक एवं आइगेनमान',
        descriptionEn: 'Properties of determinants, solving linear simultaneous equations (Cramer rule), eigenvalues, trace, determinant, Cayley-Hamilton theorem.',
        cuetWeightage: 'High',
        category: 'Mathematical Methods',
        classId: 'class-math-09',
        expectedQuestions: 4
      },
      {
        id: 'math-2',
        nameEn: 'Vector Calculus: Grad, Div, Curl & Theorems',
        nameHi: 'सदिश कलन: प्रवणता, अपसरण, कर्ल एवं प्रमेय',
        descriptionEn: "Directional derivatives, Gauss divergence theorem, Stokes curl theorem, Green's theorem, conservative vs solenoidal fields.",
        cuetWeightage: 'High',
        category: 'Mathematical Methods',
        classId: 'class-math-08',
        expectedQuestions: 4
      },
      {
        id: 'math-3',
        nameEn: 'Differential Equations & Orthogonal Trajectories',
        nameHi: 'अवकल समीकरण एवं लांबिक प्रक्षेप पथ',
        descriptionEn: 'Linear DE with constant coefficients, integrating factor, orthogonal trajectories, simple Laplace transform applications.',
        cuetWeightage: 'High',
        category: 'Mathematical Methods',
        classId: 'class-math-10',
        expectedQuestions: 3
      },
      {
        id: 'math-4',
        nameEn: 'Calculus: Leibniz Rule, Asymptotes & Curvature',
        nameHi: 'कलन: लाइबनिज़ नियम, अनंतस्पर्शी एवं वक्रता',
        descriptionEn: 'Successive differentiation, Leibniz theorem, asymptotes parallel to axes, curvature formula, L’Hopital rule.',
        cuetWeightage: 'Medium',
        category: 'Mathematical Methods',
        classId: 'class-math-10',
        expectedQuestions: 2
      },
      {
        id: 'math-5',
        nameEn: '3D Analytical Geometry (Planes, Lines & Sphere)',
        nameHi: 'त्रिविमीय विश्लेषणात्मक ज्यामिति (समतल, रेखाएं एवं गोला)',
        descriptionEn: 'Equation of plane, perpendicularity condition, distance between points, sphere with given diameter endpoints, central conicoids.',
        cuetWeightage: 'Medium',
        category: 'Mathematical Methods',
        classId: 'class-math-09',
        expectedQuestions: 2
      },
      {
        id: 'math-6',
        nameEn: 'Statics & Hydrostatics: Center of Pressure & Floatation',
        nameHi: 'स्थैतिकी एवं द्रवस्थैतिकी: दाब केंद्र एवं उत्प्लावन',
        descriptionEn: 'Virtual work, catenary equation y = c cosh(x/c), center of pressure on immersed plane lamina, Archimedes principle of floatation.',
        cuetWeightage: 'High',
        category: 'Mechanics & Relativity',
        classId: 'class-mech-11',
        expectedQuestions: 3
      }
    ]
  },

  // --- SECTION: SOLID EARTH GEOPHYSICS ---
  {
    id: 'unit-geophysics',
    unitNumber: 6,
    section: 'Solid Earth Geophysics',
    titleEn: 'Solid Earth Geophysics & Prospecting Methods',
    titleHi: 'ठोस पृथ्वी भूभौतिकी एवं पूर्वेक्षण विधियां',
    weightagePercentage: 17,
    totalTopics: 5,
    subtopics: [
      {
        id: 'geo-1',
        nameEn: 'Earthquake Seismology & Wave Propagation',
        nameHi: 'भूकंप विज्ञान एवं तरंग संचरण',
        descriptionEn: 'Compressional (P) and shear (S) body waves, Vp/Vs ratio for Poisson solids, travel-time curves, epicenter triangulation.',
        cuetWeightage: 'High',
        category: 'Solid Earth Geophysics',
        classId: 'class-geo-02',
        expectedQuestions: 4
      },
      {
        id: 'geo-2',
        nameEn: 'Internal Structure & Discontinuities of Earth',
        nameHi: 'पृथ्वी की आंतरिक संरचना एवं असंततताएं',
        descriptionEn: 'Crust, mantle, liquid outer core, solid inner core. Moho, Conrad, Gutenberg, Lehmann discontinuities and shadow zones.',
        cuetWeightage: 'High',
        category: 'Solid Earth Geophysics',
        classId: 'class-geo-02',
        expectedQuestions: 3
      },
      {
        id: 'geo-3',
        nameEn: 'Gravity Prospecting & Bouguer Anomaly',
        nameHi: 'गुरुत्व पूर्वेक्षण एवं बोगर विसंगति',
        descriptionEn: 'Free-air correction, Bouguer slab anomaly Δg_B = 2πGρh, terrain correction, Airy and Pratt models of isostasy.',
        cuetWeightage: 'High',
        category: 'Solid Earth Geophysics',
        classId: 'class-geo-13',
        expectedQuestions: 3
      },
      {
        id: 'geo-4',
        nameEn: 'Geomagnetic Field, Geodynamo & Paleomagnetism',
        nameHi: 'भू-चुंबकीय क्षेत्र, भू-डायनेमो एवं पुराचुंबकत्व',
        descriptionEn: 'Geodynamo generation in molten outer core, magnetic dipole field, inclination, declination, Curie temperature of rocks.',
        cuetWeightage: 'High',
        category: 'Solid Earth Geophysics',
        classId: 'class-geo-13',
        expectedQuestions: 3
      },
      {
        id: 'geo-5',
        nameEn: 'Electrical Prospecting & Well Logging (Archie’s Law)',
        nameHi: 'विद्युत पूर्वेक्षण एवं कूप संलेखन (आर्ची का नियम)',
        descriptionEn: 'Wenner and Schlumberger electrode arrays, apparent resistivity, Archie’s law for reservoir water saturation.',
        cuetWeightage: 'High',
        category: 'Solid Earth Geophysics',
        classId: 'class-geo-14',
        expectedQuestions: 3
      }
    ]
  }
];

export function getSyllabusTopicById(id: string): SyllabusSubtopic | undefined {
  for (const unit of OFFICIAL_CUET_PG_SYLLABUS) {
    const found = unit.subtopics.find(t => t.id === id);
    if (found) return found;
  }
  return undefined;
}

export function getAllSyllabusTopics(): SyllabusSubtopic[] {
  return OFFICIAL_CUET_PG_SYLLABUS.flatMap(u => u.subtopics);
}
