export interface Product {
  id: string;
  name: string;
  category: 'furniture' | 'imaging' | 'sterilization' | 'handpieces' | 'essentials';
  categoryLabel: string;
  description: string;
  specs: string[];
  inStock: boolean;
  modelCode: string;
  image?: string;
}

export const PRODUCTS_DATA: Product[] = [
  // Furniture & Units
  {
    id: 'dental-chair',
    name: 'Premium Dental Chair',
    category: 'furniture',
    categoryLabel: 'Furniture & Units',
    description: 'Premium dental chair engineered for maximum operator comfort and superior patient support with memory positioning.',
    specs: ['Ergonomic high-density foam upholstery', 'Quiet electro-pneumatic motor control', 'Double-articulating headrest', 'Programmable positions (4 preset + auto-return)'],
    inStock: true,
    modelCode: 'BBD-CH800',
    image: '/images/dental_chair.webp'
  },
  {
    id: 'portable-unit',
    name: 'Portable Dental Unit',
    category: 'furniture',
    categoryLabel: 'Furniture & Units',
    description: 'Fully mobile dental cabinet system designed for field work, mobile clinics, and emergency hospital services.',
    specs: ['Self-contained system with silent air compressor', 'Clean water bottle supply system', 'High and low speed handpiece connections', 'Saliva ejector and 3-way syringe'],
    inStock: true,
    modelCode: 'BBD-PU40',
    image: '/images/portable_unit.webp'
  },
  // Imaging & Diagnostics
  {
    id: 'wallmount-xray',
    name: 'Wallmount DC X-Ray',
    category: 'imaging',
    categoryLabel: 'Imaging & Diagnostics',
    description: 'Robust clinical intraoral x-ray machine delivering crisp, high-definition digital radiography diagnostics with minimal dose.',
    specs: ['High-frequency DC generator (70kV)', 'Microprocessor-controlled exposure panel', 'Scissors-type arm with smooth fluid movement', 'Zero-radiation leakage design'],
    inStock: true,
    modelCode: 'BBD-WX70',
    image: '/images/wallmount_xray.webp'
  },
  {
    id: 'portable-xray',
    name: 'Portable Handheld X-Ray',
    category: 'imaging',
    categoryLabel: 'Imaging & Diagnostics',
    description: 'Ultra-portable dental X-Ray device for chairside radiographic exposures without moving the patient.',
    specs: ['Lightweight hand-held design (2.1 kg)', 'Double lead-shielded radiation protection', 'Long-lasting rechargeable Li-ion battery', 'High contrast LCD screen interface'],
    inStock: true,
    modelCode: 'BBD-PX22',
    image: '/images/portable_xray.webp'
  },
  // Sterilization & Hygiene
  {
    id: 'bclass-autoclave',
    name: 'B-Class Autoclave',
    category: 'sterilization',
    categoryLabel: 'Sterilization & Hygiene',
    description: 'Medical-grade steam sterilizer offering absolute decontamination protocols for wrapped and unwrapped tools.',
    specs: ['Fractionated vacuum sterilization (Class B)', 'Built-in microprinter and USB data logging', 'Triple safety lock chamber door', 'Advanced bacteriological filter'],
    inStock: true,
    modelCode: 'BBD-AC23',
    image: '/images/bclass_autoclave.webp'
  },
  {
    id: 'uv-chamber',
    name: 'UV Instrument Chamber',
    category: 'sterilization',
    categoryLabel: 'Sterilization & Hygiene',
    description: 'Reliable dry storage chamber designed to preserve sterile instruments after autoclaving.',
    specs: ['High-output germicidal UV-C tube (15W)', 'Stainless steel non-magnetic rustless trays', 'Safety door auto-cutoff switch', 'Microprocessor timer controller'],
    inStock: true,
    modelCode: 'BBD-UV18',
    image: '/images/uv_chamber.webp'
  },
  // Handpieces & Motors
  {
    id: 'straight-contra-angle',
    name: 'Straight & Contra-Angle Handpiece Set',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Precision dental handpieces offering ultra-low vibration and high reliability for standard clinical routines.',
    specs: ['Internal water spray systems', '1:1 direct transmission speed ratio', 'Stainless steel lightweight sleeve design', 'Autoclavable up to 135°C'],
    inStock: true,
    modelCode: 'BBD-HP200',
    image: '/images/straight_contra_angle.webp'
  },
  {
    id: 'airotor-handpiece',
    name: 'Super-Torque Airotor Handpiece',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Advanced turbine speed handpiece providing exceptional torque and cooling safety for tooth preparation.',
    specs: ['High-speed ceramic ball bearings (350k RPM)', 'Super-torque triple-port water spray', 'Push-button bur chuck system', 'Fiber optic light integration option'],
    inStock: true,
    modelCode: 'BBD-AH90',
    image: '/images/airotor_handpiece.webp'
  },
  {
    id: 'cordless-endo-motor',
    name: 'Cordless Endo Motor',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Smart cordless endodontic motor with precise speed control and built-in apex locator compatibility.',
    specs: ['Continuous rotation & reciprocating modes', 'Pre-set file systems library (10 programs)', 'Auto-torque reverse and stop trigger', 'Miniature 16:1 contra-angle head'],
    inStock: true,
    modelCode: 'BBD-EM15',
    image: '/images/cordless_endo_motor.webp'
  },
  {
    id: 'lab-micro-motor',
    name: 'Lab Micro Motor & Control Box',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Heavy-duty laboratory motor and benchtop console for precise model finishing, grinding, and polishing.',
    specs: ['High torque speed up to 50,000 RPM', 'Foot speed control pedal included', 'Forward/Reverse rotation directions', 'Overload protection mechanism'],
    inStock: true,
    modelCode: 'BBD-LM50',
    image: '/images/lab_micro_motor.webp'
  },
  {
    id: 'micro-motor-handpiece',
    name: 'Clinical Micro Motor',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Standard clinic dental micro motor delivering reliable power for low-speed dental operations.',
    specs: ['E-type ISO connection fitting', 'Speed range 2,000 - 35,000 RPM', 'Low noise, carbon-brush motor system', 'Compatible with straight/contra-angle heads'],
    inStock: true,
    modelCode: 'BBD-MM35',
    image: '/images/micro_motor_handpiece.webp'
  },
  {
    id: 'airotor-cartridges',
    name: 'Airotor Turbine Cartridges',
    category: 'handpieces',
    categoryLabel: 'Handpieces & Motors',
    description: 'Direct replacement high-speed cartridge units for servicing standard dental turbine handpieces.',
    specs: ['High grade balanced turbine impellers', 'Heat-treated stainless steel spindle', 'Premium ceramic bearings', 'Anti-retraction system compatible'],
    inStock: true,
    modelCode: 'BBD-ATC08',
    image: '/images/airotor_cartridges.webp'
  },
  // Essentials & Utilities
  {
    id: 'scaler-unit',
    name: 'Ultrasonic Piezo Scaler',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'Advanced scaling unit for plaque and calculus removal with comfortable clinical performance.',
    specs: ['Piezoelectric ultrasonic vibration system', 'Autoclavable handpiece sleeve', 'Feedback control tracking frequency', 'Includes 5 scaler tips + wrench'],
    inStock: true,
    modelCode: 'BBD-SC12',
    image: '/images/scaler_unit.webp'
  },
  {
    id: 'curing-light',
    name: 'Broad-Spectrum LED Curing Light',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'High-power ergonomic curing light for fast polymerization of composites, sealants, and adhesives.',
    specs: ['Broad-spectrum blue LED (1200mW/cm²)', 'Multiple modes (Fast, Ramp, Pulse)', 'Cordless design with charging base', 'Long-lasting battery (up to 200 cycles)'],
    inStock: true,
    modelCode: 'BBD-CL10',
    image: '/images/curing_light.webp'
  },
  {
    id: 'noiseless-compressor',
    name: 'Noiseless Air Compressor',
    category: 'essentials',
    categoryLabel: 'Essentials & Utilities',
    description: 'Medical air compressor supplying clean, dry, oil-free compressed air for up to two dental chairs.',
    specs: ['Oil-free clean air delivery', 'Low noise profile (55 dB)', 'Epoxy-coated internal tank (35L)', 'Dual auto-pressure shutoff switch'],
    inStock: true,
    modelCode: 'BBD-AC35',
    image: '/images/noiseless_compressor.webp'
  }
];

export const CATEGORIES = [
  { code: 'all', label: 'All Equipment' },
  { code: 'furniture', label: 'Furniture & Units' },
  { code: 'imaging', label: 'Imaging & Diagnostics' },
  { code: 'sterilization', label: 'Sterilization & Hygiene' },
  { code: 'handpieces', label: 'Handpieces & Motors' },
  { code: 'essentials', label: 'Essentials & Utilities' }
];
