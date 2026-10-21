// ZeemoStore Product Catalog Data (Updated for Egyptian Pounds - EGP)
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Aura Pro Wireless Headphones",
    tagline: "Lossless Spatial Audio & Active ANC 2.0",
    category: "audio",
    price: 17499.00,
    originalPrice: 21499.00,
    rating: 4.9,
    reviewsCount: 184,
    badge: "BESTSELLER",
    image: "./assets/headphone.png",
    inStock: 8,
    colors: ["Space Black", "Cyber Violet", "Silver Chrome"],
    description: "Immerse yourself in precision spatial sound with custom 40mm beryllium drivers, 45-hour ultra battery life, adaptive active noise cancellation, and aircraft-grade aluminum construct.",
    specs: {
      "Battery Life": "45 Hours",
      "Noise Control": "Adaptive ANC (4 microphones)",
      "Bluetooth": "v5.3 Low Latency",
      "Weight": "250g"
    }
  },
  {
    id: "prod-2",
    name: "Chronos X Smartwatch",
    tagline: "Curved Sapphire Display & Bio-Sensors",
    category: "wearables",
    price: 14499.00,
    originalPrice: 17499.00,
    rating: 4.8,
    reviewsCount: 142,
    badge: "HOT ITEM",
    image: "./assets/smartwatch.png",
    inStock: 5,
    colors: ["Titanium Gray", "Stealth Black"],
    description: "Next-gen titanium wearable featuring real-time health diagnostics, ECG monitoring, dual-frequency GPS, and edge-to-edge curved sapphire AMOLED screen.",
    specs: {
      "Display": "1.9\" Curved Sapphire AMOLED",
      "Water Resistance": "50m (5 ATM)",
      "Sensors": "ECG, SpO2, Heart Rate, Temp",
      "Battery": "Up to 7 Days"
    }
  },
  {
    id: "prod-3",
    name: "NeonGlide Custom Keyboard",
    tagline: "Frosted Glass & Hot-Swappable Switches",
    category: "workspace",
    price: 9999.00,
    originalPrice: 11499.00,
    rating: 4.95,
    reviewsCount: 96,
    badge: "NEW",
    image: "./assets/keyboard.png",
    inStock: 12,
    colors: ["Cyber Frost", "Midnight Dark"],
    description: "Ultra-responsive mechanical keyboard with gasket mount design, sound-absorbing silicone, translucent keycaps, and customizable per-key RGB backlighting.",
    specs: {
      "Layout": "75% Compact (82 Keys)",
      "Switches": "Pre-lubed Linear Crystal Switches",
      "Connectivity": "Tri-Mode (2.4G, BT 5.1, Type-C)",
      "Mount": "Gasket Mount System"
    }
  },
  {
    id: "prod-4",
    name: "Orbital Sound Sphere",
    tagline: "360° Room-Filling High Resolution Speaker",
    category: "audio",
    price: 7999.00,
    originalPrice: 9499.00,
    rating: 4.7,
    reviewsCount: 88,
    badge: "SALE",
    image: "./assets/speaker.png",
    inStock: 4,
    colors: ["Midnight Fabric", "Lunar White"],
    description: "360-degree acoustic acoustic dome speaker with reactive RGB halo ring, built-in smart assistant, and deep bass passive radiators.",
    specs: {
      "Output": "60W RMS",
      "Audio": "Hi-Res Audio Certified",
      "Lighting": "Dynamic Reactive Ambient Ring",
      "Multi-room": "AirPlay 2 & Chromecast"
    }
  },
  {
    id: "prod-5",
    name: "Zeemo Arc Desk Light",
    tagline: "Ergonomic Halo & Touch Dimming",
    category: "workspace",
    price: 5999.00,
    originalPrice: 7499.00,
    rating: 4.85,
    reviewsCount: 64,
    badge: "LIMITED",
    image: "./assets/lamp.png",
    inStock: 3,
    colors: ["Anodized Black"],
    description: "Precision-engineered LED arc lamp designed to reduce eye strain with glare-free forward projection, auto-brightness sensor, and wireless charging base.",
    specs: {
      "CRI": "> 95 Ultra-Natural Light",
      "Brightness": "1200 Lux",
      "Wireless Charger": "15W Fast Charge Base",
      "Control": "Capacitive Touch Slider"
    }
  },
  {
    id: "prod-6",
    name: "Cyberpack Core V2",
    tagline: "Waterproof Geometric Everyday Carry",
    category: "apparel",
    price: 7499.00,
    originalPrice: 8999.00,
    rating: 4.9,
    reviewsCount: 110,
    badge: "POPULAR",
    image: "./assets/backpack.png",
    inStock: 9,
    colors: ["Stealth Black", "Cyber Grey"],
    description: "Hard-shell aerodynamic backpack featuring Fidlock magnetic buckles, anti-theft hidden pockets, dedicated 16-inch laptop chamber, and integrated USB-C pass-through.",
    specs: {
      "Capacity": "22 Liters",
      "Material": "1680D Ballistic Nylon + Polycarbonate",
      "Laptop Pocket": "Up to 16\" MacBook Pro",
      "Features": "TSA Approved Lock, Pass-through Port"
    }
  },
  {
    id: "prod-7",
    name: "Pulse Pods Spatial In-Ear",
    tagline: "True Wireless & Active Dynamic Sound",
    category: "audio",
    price: 8999.00,
    originalPrice: 10999.00,
    rating: 4.75,
    reviewsCount: 76,
    badge: "SALE",
    image: "./assets/headphone.png",
    inStock: 15,
    colors: ["Matte Black", "Crystal Clear"],
    description: "Ultra-compact spatial earbuds with dynamic head tracking, IPX7 sweat resistance, wireless charging case, and crystal-clear tri-mic call technology.",
    specs: {
      "Playtime": "8h (32h with case)",
      "Rating": "IPX7 Waterproof",
      "Codec": "LDAC / AAC / aptX Adaptive",
      "Charging": "Qi Wireless + Type-C"
    }
  },
  {
    id: "prod-8",
    name: "HyperMat RGB Desk Pad",
    tagline: "Ultra-Smooth Micro-Weave & Perimeter Glow",
    category: "workspace",
    price: 2499.00,
    originalPrice: 3250.00,
    rating: 4.8,
    reviewsCount: 205,
    badge: "BESTSELLER",
    image: "./assets/keyboard.png",
    inStock: 20,
    colors: ["Stealth Black"],
    description: "Extra large 900x400mm gaming desk pad with spill-resistant coating, non-slip rubber base, and customizable 12-mode RGB edge light strip.",
    specs: {
      "Dimensions": "900 x 400 x 4 mm",
      "Surface": "Nanometer Speed Cloth",
      "Lighting": "12 Ambient RGB Modes",
      "Durability": "Stitched Anti-Fray Edges"
    }
  }
];

const DEFAULT_PROMO_CODES = {
  "ZEEMO20": 0.20,
  "WELCOME10": 0.10,
  "FUTURE30": 0.30
};

// Initialize from LocalStorage or Defaults, checking db schema version
function getStoredProducts() {
  const version = localStorage.getItem('zeemo_db_version');
  if (version !== 'egp-1') {
    // Migration: Overwrite database to use EGP prices
    localStorage.setItem('zeemo_db_version', 'egp-1');
    localStorage.setItem('zeemo_products_db', JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem('zeemo_promos_db', JSON.stringify(DEFAULT_PROMO_CODES));
    return [...DEFAULT_PRODUCTS];
  }
  const data = localStorage.getItem('zeemo_products_db');
  return data ? JSON.parse(data) : [...DEFAULT_PRODUCTS];
}

function getStoredPromoCodes() {
  const data = localStorage.getItem('zeemo_promos_db');
  return data ? JSON.parse(data) : { ...DEFAULT_PROMO_CODES };
}

let PRODUCTS = getStoredProducts();
let PROMO_CODES = getStoredPromoCodes();
