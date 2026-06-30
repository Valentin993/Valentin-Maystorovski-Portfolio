import { ProjectTeaser, CaseStudy, ServiceItem } from './types';
import rareVoidCloseup from './assets/images/rare_void_closeup_1782087888815.jpg';
import rareVoidBlackTshirt from './assets/images/rare_void_black_tshirt_1782088238559.jpg';
import rareVoidHeroLaptop from './assets/images/rare_void_hero_laptop_1782685743916.jpg';
import rareVoidWebpageShowcase from './assets/images/rare_void_webpage_showcase_1782686177665.jpg';
import spectrumIconography from './assets/images/spectrum_iconography_text_1782088593539.jpg';
import spectrumSpatialUrban from './assets/images/spectrum_spatial_urban_1782089242796.jpg';
import spectrumGoldFoilIdentity from './assets/images/spectrum_gold_foil_identity_1782686527591.jpg';
import spectrumDesignPhilosophy from './assets/images/spectrum_philosophy_refined_1782687361492.jpg';
import spectrumMaterialsBar from './assets/images/spectrum_materials_bar_1782687249229.jpg';
import ironEmberTactile from './assets/images/iron_ember_tactile_1782088830715.jpg';
import ironEmberBurgerInterface from './assets/images/iron_ember_burger_interface_1782089084022.jpg';

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    icon: 'Layers',
    title: 'UX/UI Design',
    description: 'User-centric interfaces that prioritize clarity and flow above all else.'
  },
  {
    icon: 'Sparkles',
    title: 'Brand Identity',
    description: 'Strategic visual storytelling that defines the essence of your business.'
  },
  {
    icon: 'Laptop',
    title: 'Web Dev',
    description: 'Clean, performance-optimized code translating designs into reality.'
  },
  {
    icon: 'Grid',
    title: 'Design Systems',
    description: 'Scalable, documented visual languages for long-term consistency.'
  }
];

export const DESIGN_SKILLS = [
  'Visual Identity',
  'UX Research & Strategy',
  'Design Systems',
  'Motion Design'
];

export const TECH_STACK = [
  'Figma / Adobe CC',
  'HTML / Tailwind / JS',
  'React / Next.js',
  'GSAP / Motion'
];

export const PROJECT_TEASERS: ProjectTeaser[] = [
  {
    id: 'rare-void',
    title: 'Rare Void',
    category: 'E-commerce & Brand Design',
    description: 'Designing a high-fidelity dashboard for digital asset management, focusing on complex data visualization and dark-mode optimization.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnGad2PSN0cy8gLCQyo0QE0G8wvrXWiH56TlqjBu9221hHmVECTAqIpt9NUMMiZMzJoNB4gx0q8ttqhRN0VVqvzhgCZUAxjmf0EkYyrgTrXC9HzEa_gfzVLerPEesyMQ2wYNnNPZt_1eapJsbcRu1eq__TApYt5UEt1wHTWvFSY15Ft6cNhCEuUp9UDz7WcT8yYp-VkA8Lt2JoyiGQ4UipFAQBzGg8zouVPY2ik0orqEGEv68oM1LfYhi8zj0U9pejwGDPuMQroajE'
  },
  {
    id: 'spectrum',
    title: 'SPECTRUM',
    category: 'Hospitality Design',
    description: 'A premium, high-end visual identity for a contemporary cocktail bar, featuring a complete branding system with minimal, Art Deco-inspired luxury aesthetics.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA82yw0TAcn9rkuoqsjkN_DsOWBvskLgYtOn1f0U5h4GuJA9JPOhNCM8w6ZE3ouJODHU2HhRzBVa-esIM-Yh63pxBXHxndE3eLObsmYynr4fzPj5-nMfRuxBYmpfbuQs6FluCwtgZC6VfpYoHITlN-EmU8o8lFJCpQczWAa0bHDlZEBlsS8-q1SIGwqTEy6nAsBCDICnuZxhCRxX7oXsqm389WkoWfOdwHgUEvVJzHgrMVNZxYgzHUCdz1uWN9GV40YMYKahYRUSC7y'
  },
  {
    id: 'iron-and-ember',
    title: 'IRON & EMBER',
    category: 'Hospitality Design',
    description: 'A premium industrial-chic burger identity, blending raw architectural elements with sophisticated brand materials for a high-end culinary experience.',
    imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Qb5y01lkc5vNIBWoD8XwEi1k0imhZSvzY38_OLtdfyJnecS0eG5vQ4uxV17ix4Qc9ZIe5ebvw-NvGO5tHAgt19b1LuNEJ2ho3Snfeft7GMfk5TKVg3xjzNcI_LzG3Bim84l8AqndvvpblpnSLLFEWYRq8UQmNw_eCWuMq56IAAcP5kZ2GcKj-ABC5SvqBrkZ13lcP162omZU54csoN3jwWxzrEFtPWJe4MGkSIK0xon8CLzIUbhrj4Qkwrx2O7o_LYMY0ivRBDFQ'
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'iron-and-ember': {
    id: 'iron-and-ember',
    title: 'IRON & EMBER',
    heroCategory: 'PROJECT CASE',
    tagline: 'A premium industrial-chic burger identity, blending raw architectural elements with sophisticated brand materials for a high-end culinary experience.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApwM2G7p6ICzJgiN0OeSM3zDBIRft4NI6l5nC-cmP6XsAWTlgnwrZR86x8kSToQCB7A5oc7ppimEx4rWL7QMwcSpbThZjT9-1pmbqjrytqkaJgk5slYW83OoabKxwxLtjhyObZSFttxJWvBEq_mPNIc3KSmQ6TtQSKQPJ2ctX9jMXCpVFWNv8RoOZ30bX79Ih36cQTqkSuICZhbzC9xDrMrq1iZKuU6S9DOjQJ5S4H41MZtBw7gPX6298WAo9aMj-wBkivSYM-KA8k',
    deliverables: [
      'Brand Identity',
      'Industrial Space Design',
      'Custom Material Systems',
      'Premium Web Experience'
    ],
    headline: 'The Art of the Flame',
    narrative: "The intersection of fire-based cooking and architectural precision defines the Iron & Ember ethos. Every interaction, from the tactile weight of the menu to the scent of aged oak in the air, was meticulously calibrated to reflect the 'Crafted by Fire' narrative.",
    tags: ['Gourmet', 'Industrial', 'Architectural'],
    showcaseImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCpwb94ADWRKb3pf6Thp9iLqFDeLbSSF_JCDkGasbNm0kXwLV0rJ8C1vdOtBDQzPezrGwBTzV6rkaTTzBjhWMv7LI67MbP6rI8n1D94k3AmJ0TfAZYhqIuFvXSnoDUofIrVYHPNDPy1f7WO6r5m9DhYcRhA7ezyNzmTJsMsNOEmiiWcd4MUKXRxl7JRXZ7QZP5K4BevMB46BeYPyZAfSg5iTobu9nchR9g4WwUwIT4o67oY3f9tBRimSOoq_T3CjGw3MfppRVgoeWr',
    showcaseLabelUrl: '#',
    showcaseSubtitle: 'Matte Iron & Ember packaging with hand-pressed gold foil details',
    philosophyTitle: 'Structural Flavor.',
    philosophyText: "Every element of the Iron & Ember identity is built on a foundation of structural integrity—from the custom typography to the raw materials used in the physical space. Concrete, steel, and fire aren't just materials; they are our ingredients.",
    philosophyImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBydcwcF1rM3JJ2Z_SaKUeK4NpKsC2wCPO5jYZ5lai-OLR5PdZB7hOIaTpXpgcxK2fqnB-rX-mG-KL1Pj2rYk_y2d__ryblCRBCZFVl7Lt9liJ1gezxsllypwBOJ4qcJFMjG8J-QTli5stkT-ciwDAObMzHVGgXUK1-_585kah4xaP_84j-zggmtkJKjqez4JTfm0QryGvSat_vuPAtHlgWlzNySJBHI08_3_g1RFBDVxM3Efom_xgIAJ9Tz7QGezWFqHy2Kmfi0ZdR',
    quote: "We don't just build burgers; we build environments where fire becomes the main architect.",
    gallery: [
      {
        title: 'The Industrial Core',
        subtitle: 'Interior Architecture & Spatial Design',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhHQjVAmlFS2i4BwVE8Sv0-0F7Kq9m5AtZUJn3vfCrk3Pef9ldnV6vonAiNkbYv5Rtubao2hsBr4sfFSG5N4yfD6Ow1UCoX-RMKlMXGd0iDHMRHXn1chhTJq8aD85czCTd2Zdl1J_bZ1d2hokrNfQDH_GRKyidf75_yMNFimor3L7SflP7FPJ1zxamkJblPI2I_8kahBJm4ttMOghK1wLwu2MsAuze1k6D4lDoli4igNPPi1SbahfDCeOdlZ9GStZYKPc9SH07zBPL'
      },
      {
        title: 'Tactile Refinement',
        subtitle: 'Packaging & Brand Collateral',
        imageSrc: ironEmberTactile
      },
      {
        title: 'Interface Precision',
        subtitle: 'Digital Design & User Experience',
        imageSrc: ironEmberBurgerInterface
      }
    ]
  },
  'rare-void': {
    id: 'rare-void',
    title: 'RARE_VOID',
    heroCategory: 'PROJECT CASE',
    tagline: 'Minimal hoodies inspired by underground culture, brutalism, and modern street fashion. Every piece stands as a tool of utility for the urban navigator.',
    heroImage: rareVoidHeroLaptop,
    deliverables: [
      'Digital Interface Design',
      'Brutal Streetwear Identity',
      'Production Specification',
      'E-commerce Strategy'
    ],
    headline: 'Brutal Streetwear',
    narrative: "Rare Void is an industrial streetwear label born from the intersection of architectural brutalism and utility-driven fashion. We designed an experience that mirrors the raw structural integrity of the garments. The visual language is aggressively minimal, stripping away superfluous detail to focus on form, high-density materials, and exact technical specifications.",
    tags: ['Industrial', 'Brutalism', 'Limited Release'],
    showcaseImage: rareVoidWebpageShowcase,
    showcaseLabelUrl: 'https://rarevoid.vercel.app/',
    showcaseSubtitle: 'High-contrast lookbook with interactive grid navigation',
    philosophyTitle: 'Structural Integrity.',
    philosophyText: "Our philosophy is rooted in the intersection of architectural brutalism and utility-driven fashion. By stripping away superfluous detail, we focus on raw structural integrity and the permanence of form—treating every design as an engineered solution for the urban navigator.",
    philosophyImage: rareVoidCloseup,
    quote: "We design for the concrete landscape. Rejecting superfluous detail in favor of raw structural integrity.",
    gallery: [
      {
        title: 'ICONOGRAPHY',
        subtitle: 'Sleek graphic symbols representing utility-first code signatures.',
        imageSrc: rareVoidBlackTshirt
      },
      {
        title: 'MATERIALS',
        subtitle: 'Brutalist density materials and technical fabric textures.',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNC__Y2R_Ll-JYSL-sCa4bitSo37UCsfJTC6CCDmsqqkiuaFoec5TQrgrKPLzcYo4hIkpyNA1mt3tmhx2K_E7eiqU-M40lXGnZSJt_10mjTu3AxAFvcFRYD5GA5OXptzKuAmXqGmCwvpMQxgJjpHW8zBHTlRL9O2NjuIUG090HNWMOX67_sRfaagJ-txGdie3xXmd7bpfSNQcqn45SxrhAMUqyqaWZ7TMHYcw-dAyBazY5ADc86BVYMjLBa2ZXW7-cmk0bsQ1TEhgD'
      },
      {
        title: 'SPATIAL',
        subtitle: 'Digital architecture and highly sensory immersive grid states.',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVS4VDDC_xQnbbAGWGK1GZH4cgj5iLvRXz39QXcg9s1LYda4BA3OsTX-1o7gVR0d8KOYN7cvw441uRAgxMj5I2-PIJPII-MTT-MEkmbBVx7pSPz1QdG4jzH4YuY_NxyHwGkX6jK3ipi99Nesh56gcEhSSCYdM99-p_n-xATW0tFOM9B8Q7-2mpfJbK98h6bJst_6fs2g-GbbCul9FidLpV88SB2LnLwk8G-6QRI22vszGMM5PzWk8-rT_UUBoLcqQWnl8DEVQ5dmI'
      }
    ]
  },
  'spectrum': {
    id: 'spectrum',
    title: 'SPECTRUM',
    heroCategory: 'PROJECT CASE',
    tagline: 'Art Deco-inspired branding for a contemporary luxury lounge. A fusion of geometric precision and cinematic atmosphere.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8dUQJNlGFMpwNmgid7LMR3E_o0j3b8M2pBRtOW7VbaBYp1lvcI2c55UqA8VuClg6BYY94ghtJPmAd49mxEQK0UYK12AxIbdgAX0b5_Dc90miDHxsf6YZEBI_0RaWwJvVkGIeuU7r39QjpsTB9fBYqvWQ7zl1rWCH3hcd0uTViF2mDgDZ12BbDF8h01ey7f7XjtKXEgShL4oCL_J7Kw4HSYBV9RcqHqdofzhYEioFB-Rq2XCzMzGJI0ZPbLQh4lYyRwnlMAjvaVtsQ',
    deliverables: [
      'Brand Identity',
      '3D Visualization',
      'Creative Direction',
      'Packaging Design'
    ],
    headline: 'The Essence of Nightlife',
    narrative: "Modern minimalist cocktail bar identity named SPECTRUM. The aesthetic is minimal, elegant, and timeless with refined typography and subtle Art Deco influences. We aimed to create a visual language that speaks to the elite, focusing on the interplay between light and shadow—much like the spectrum of colors found in a perfectly poured drink.",
    tags: ['Luxury', 'Berlin', 'Art Deco'],
    showcaseImage: spectrumGoldFoilIdentity,
    showcaseLabelUrl: '#',
    showcaseSubtitle: 'High-texture paper with gold-foil finish',
    philosophyTitle: 'Structural Minimalism.',
    philosophyText: "Every curve in the Spectrum logo is calculated to match the golden ratio, ensuring a balanced presence across both digital displays and embossed leather menus. We prioritized the 'S' glyph as a structural anchor that feels both architectural and organic.",
    philosophyImage: spectrumDesignPhilosophy,
    quote: "Creating a space where light becomes the main ingredient.",
    gallery: [
      {
        title: 'ICONOGRAPHY',
        subtitle: 'Sophisticated geometry paired with a premium golden ratio visual signature.',
        imageSrc: spectrumIconography
      },
      {
        title: 'MATERIALS',
        subtitle: 'High tactile contrast representing raw metals and luxury leather binding.',
        imageSrc: spectrumMaterialsBar
      },
      {
        title: 'SPATIAL',
        subtitle: 'Cinematic visual rendering celebrating ambient light and dynamic shadow.',
        imageSrc: spectrumSpatialUrban
      }
    ]
  }
};
