const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8085;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Support large base64 uploads
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// File-based Database Fallback Configurations (in case local MongoDB is absent)
const FILE_DB_PATH = path.join(__dirname, 'local_db.json');
let useLocalFileDB = false;

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/zeemostore';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Fast fail in 5s if local MongoDB is not running
})
.then(() => {
  console.log('Successfully connected to MongoDB Database.');
  seedDatabase();
})
.catch(err => {
  console.warn('MongoDB connection failed. Falling back to local file-based database (local_db.json).');
  console.warn('Error details:', err.message);
  useLocalFileDB = true;
  initializeFileDB();
});

// --- SCHEMAS & MODELS ---

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default: null },
  rating: { type: Number, default: 5.0 },
  reviewsCount: { type: Number, default: 1 },
  badge: { type: String, default: "" },
  image: { type: String, required: true },
  inStock: { type: Number, required: true, default: 10 },
  colors: { type: [String], default: ["Default"] },
  description: { type: String, default: "" },
  specs: { type: Map, of: String, default: {} }
});

const PromoSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountRate: { type: Number, required: true }
});

const AdminConfigSchema = new mongoose.Schema({
  username: { type: String, default: "admin" },
  password: { type: String, default: "admin" },
  categories: { type: [String], default: ["audio", "wearables", "workspace", "apparel"] }
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }
});

const Product = mongoose.model('Product', ProductSchema);
const Promo = mongoose.model('Promo', PromoSchema);
const AdminConfig = mongoose.model('AdminConfig', AdminConfigSchema);
const User = mongoose.model('User', UserSchema);

// --- DEFAULT SEED DATA ---

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

const DEFAULT_PROMO_CODES = [
  { code: "ZEEMO20", discountRate: 0.20 },
  { code: "WELCOME10", discountRate: 0.10 },
  { code: "FUTURE30", discountRate: 0.30 }
];

// Seed MongoDB collections
async function seedDatabase() {
  try {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(DEFAULT_PRODUCTS);
      console.log('Seeded MongoDB database with default products catalog.');
    }
    const promoCount = await Promo.countDocuments();
    if (promoCount === 0) {
      await Promo.insertMany(DEFAULT_PROMO_CODES);
      console.log('Seeded MongoDB database with default promotional codes.');
    }
    const configCount = await AdminConfig.countDocuments();
    if (configCount === 0) {
      const defaultConfig = new AdminConfig({
        username: "admin",
        password: "admin",
        categories: ["audio", "wearables", "workspace", "apparel"]
      });
      await defaultConfig.save();
      console.log('Seeded database with default Admin configurations.');
    }
  } catch (err) {
    console.error('Error seeding database:', err.message);
  }
}

// --- FILE SYSTEM DATABASE FALLBACK HELPERS ---

function initializeFileDB() {
  if (!fs.existsSync(FILE_DB_PATH)) {
    const defaultData = {
      products: DEFAULT_PRODUCTS,
      promos: DEFAULT_PROMO_CODES,
      adminConfig: {
        username: "admin",
        password: "admin",
        categories: ["audio", "wearables", "workspace", "apparel"]
      },
      users: []
    };
    fs.writeFileSync(FILE_DB_PATH, JSON.stringify(defaultData, null, 2));
    console.log('Created local file database local_db.json with default values.');
  }
}

function getLocalFileDB() {
  try {
    const data = JSON.parse(fs.readFileSync(FILE_DB_PATH));
    let dirty = false;
    if (!data.adminConfig) {
      data.adminConfig = {
        username: "admin",
        password: "admin",
        categories: ["audio", "wearables", "workspace", "apparel"]
      };
      dirty = true;
    }
    if (!data.users) {
      data.users = [];
      dirty = true;
    }
    if (dirty) {
      saveLocalFileDB(data);
    }
    return data;
  } catch (e) {
    const fallback = { 
      products: DEFAULT_PRODUCTS, 
      promos: DEFAULT_PROMO_CODES,
      adminConfig: { username: "admin", password: "admin", categories: ["audio", "wearables", "workspace", "apparel"] },
      users: []
    };
    saveLocalFileDB(fallback);
    return fallback;
  }
}

function saveLocalFileDB(data) {
  fs.writeFileSync(FILE_DB_PATH, JSON.stringify(data, null, 2));
}

// --- API ENDPOINTS ---

// 1. Admin Configurations Endpoints
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const config = db.adminConfig;
    if (config.username === username && config.password === password) {
      return res.json({ success: true, message: 'Authenticated successfully' });
    }
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  try {
    const config = await AdminConfig.findOne({});
    if (config && config.username === username && config.password === password) {
      res.json({ success: true, message: 'Authenticated successfully' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/config', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    return res.json({ categories: db.adminConfig.categories, username: db.adminConfig.username });
  }
  try {
    const config = await AdminConfig.findOne({});
    if (config) {
      res.json({ categories: config.categories, username: config.username });
    } else {
      res.json({ categories: ["audio", "wearables", "workspace", "apparel"], username: "admin" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/config', async (req, res) => {
  const { username, password, categories } = req.body;
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    if (username) db.adminConfig.username = username;
    if (password) db.adminConfig.password = password;
    if (categories) db.adminConfig.categories = categories;
    saveLocalFileDB(db);
    return res.json({ message: 'Admin configurations updated successfully in local DB' });
  }
  try {
    let config = await AdminConfig.findOne({});
    if (!config) {
      config = new AdminConfig({});
    }
    if (username) config.username = username;
    if (password) config.password = password;
    if (categories) config.categories = categories;
    await config.save();
    res.json({ message: 'Admin configurations updated successfully', config });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. User Accounts Endpoints (Signup / Login)
app.post('/api/users/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const emailLower = email.toLowerCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const existing = db.users.find(u => u.email.toLowerCase() === emailLower);
    if (existing) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    const newUser = { name, email: emailLower, phone, password };
    db.users.push(newUser);
    saveLocalFileDB(db);
    return res.status(201).json({ success: true, user: { name, email: emailLower, phone } });
  }
  try {
    const existing = await User.findOne({ email: emailLower });
    if (existing) {
      return res.status(400).json({ error: 'Email is already registered' });
    }
    const newUser = new User({
      name,
      email: emailLower,
      phone,
      password
    });
    await newUser.save();
    res.status(201).json({ success: true, user: { name, email: newUser.email, phone } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const emailLower = email.toLowerCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const user = db.users.find(u => u.email.toLowerCase() === emailLower && u.password === password);
    if (user) {
      return res.json({ success: true, user: { name: user.name, email: user.email, phone: user.phone } });
    }
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  try {
    const user = await User.findOne({ email: emailLower });
    if (user && user.password === password) {
      res.json({ success: true, user: { name: user.name, email: user.email, phone: user.phone } });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Products Routes
app.get('/api/products', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    return res.json(db.products);
  }
  try {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  const data = req.body;
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    let product;
    if (data.id) {
      product = db.products.find(p => p.id === data.id);
    }
    if (product) {
      Object.assign(product, data);
    } else {
      const newId = data.id || 'prod-' + Date.now();
      const newProduct = {
        ...data,
        id: newId,
        rating: 5.0,
        reviewsCount: 1,
        colors: ["Default"],
        specs: {
          "Category": data.category ? data.category.toUpperCase() : "GEAR",
          "Condition": "Brand New",
          "Warranty": "2 Years ZeemoCare"
        }
      };
      db.products.unshift(newProduct);
    }
    saveLocalFileDB(db);
    return res.json({ message: 'Product saved successfully in local file DB' });
  }
  try {
    let product;
    if (data.id) {
      product = await Product.findOne({ id: data.id });
    }
    if (product) {
      Object.assign(product, data);
      await product.save();
      res.json({ message: 'Product updated successfully', product });
    } else {
      const newId = data.id || 'prod-' + Date.now();
      const newProduct = new Product({
        ...data,
        id: newId,
        rating: 5.0,
        reviewsCount: 1,
        colors: ["Default"],
        specs: {
          "Category": data.category ? data.category.toUpperCase() : "GEAR",
          "Condition": "Brand New",
          "Warranty": "2 Years ZeemoCare"
        }
      });
      await newProduct.save();
      res.status(201).json({ message: 'Product created successfully', product: newProduct });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const index = db.products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      db.products.splice(index, 1);
      saveLocalFileDB(db);
      return res.json({ message: 'Product deleted successfully from local file DB' });
    }
    return res.status(404).json({ error: 'Product not found' });
  }
  try {
    const result = await Product.findOneAndDelete({ id: req.params.id });
    if (result) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Promos Routes
app.get('/api/promos', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const promoMap = {};
    db.promos.forEach(p => {
      promoMap[p.code] = p.discountRate;
    });
    return res.json(promoMap);
  }
  try {
    const promos = await Promo.find({});
    const promoMap = {};
    promos.forEach(p => {
      promoMap[p.code] = p.discountRate;
    });
    res.json(promoMap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/promos', async (req, res) => {
  const { code, discountRate } = req.body;
  if (!code || discountRate === undefined) {
    return res.status(400).json({ error: 'Code and discountRate are required' });
  }
  const formattedCode = code.toUpperCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    let promo = db.promos.find(p => p.code === formattedCode);
    if (promo) {
      promo.discountRate = discountRate;
    } else {
      db.promos.push({ code: formattedCode, discountRate });
    }
    saveLocalFileDB(db);
    return res.json({ message: 'Promo saved successfully in local file DB' });
  }
  try {
    let promo = await Promo.findOne({ code: formattedCode });
    if (promo) {
      promo.discountRate = discountRate;
      await promo.save();
    } else {
      promo = new Promo({ code: formattedCode, discountRate });
      await promo.save();
    }
    res.json({ message: 'Promo code saved successfully', promo });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/promos/:code', async (req, res) => {
  const code = req.params.code.toUpperCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const index = db.promos.findIndex(p => p.code === code);
    if (index !== -1) {
      db.promos.splice(index, 1);
      saveLocalFileDB(db);
      return res.json({ message: 'Promo deleted successfully from local file DB' });
    }
    return res.status(404).json({ error: 'Promo code not found' });
  }
  try {
    const result = await Promo.findOneAndDelete({ code: code });
    if (result) {
      res.json({ message: 'Promo code removed successfully' });
    } else {
      res.status(404).json({ error: 'Promo code not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Reset Route
app.post('/api/reset', async (req, res) => {
  if (useLocalFileDB) {
    const defaultData = {
      products: DEFAULT_PRODUCTS,
      promos: DEFAULT_PROMO_CODES,
      adminConfig: {
        username: "admin",
        password: "admin",
        categories: ["audio", "wearables", "workspace", "apparel"]
      },
      users: []
    };
    saveLocalFileDB(defaultData);
    return res.json({ message: 'Database reset to factory defaults successfully in local file DB.' });
  }
  try {
    await Product.deleteMany({});
    await Promo.deleteMany({});
    await AdminConfig.deleteMany({});
    await User.deleteMany({});
    
    await Product.insertMany(DEFAULT_PRODUCTS);
    await Promo.insertMany(DEFAULT_PROMO_CODES);
    
    const defaultConfig = new AdminConfig({
      username: "admin",
      password: "admin",
      categories: ["audio", "wearables", "workspace", "apparel"]
    });
    await defaultConfig.save();
    
    res.json({ message: 'Database reset to factory defaults successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback: send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`ZeemoStore Server running at http://localhost:${PORT}`);
});
