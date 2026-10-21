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
const FILE_DB_PATH = process.env.VERCEL
  ? path.join('/tmp', 'local_db.json')
  : path.join(__dirname, 'local_db.json');
const BUNDLE_DB_PATH = path.join(__dirname, 'local_db.json');
let useLocalFileDB = false;
let memoryDB = null;

// Connect to MongoDB if URI is provided, otherwise immediately use local_db.json
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Database.');
    seedDatabase();
  })
  .catch(err => {
    console.warn('MongoDB connection failed. Falling back to local file-based database (local_db.json).');
    useLocalFileDB = true;
    initializeFileDB();
  });
} else {
  console.log('No MONGODB_URI configured. Using local file-based database (local_db.json).');
  useLocalFileDB = true;
  initializeFileDB();
}

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
  categories: { type: [String], default: ["audio", "wearables", "workspace", "apparel"] }
});

const AdminUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
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
const AdminUser = mongoose.model('AdminUser', AdminUserSchema);
const User = mongoose.model('User', UserSchema);

// --- DYNAMIC SEED GENERATOR ---

function generateMockCatalog(categoriesList) {
  const products = [];
  
  const adjectives = ["Aura", "Pulse", "Nexus", "Chronos", "Vortex", "Apex", "Zenith", "Cipher", "Neutron", "Helios", "Quantum", "Nova", "Hyper", "Cyber", "Spectral", "Matrix", "Tesla", "Vinci", "Alpha", "Titan", "Specter", "Orbit", "Lumina"];
  
  const nouns = {
    audio: ["Headphones", "Earbuds", "Soundbar", "Speaker", "Monitors", "Pod Pro", "Audio Dome"],
    wearables: ["Smartwatch", "Tracker Band", "Health Ring", "Bio Chrono", "Wrist Monitor"],
    workspace: ["Keyboard", "Desk Light", "Mouse Pad", "Monitor Arm", "Vertical Mouse", "Macro Pad"],
    apparel: ["Backpack", "Sling Bag", "Duffel Pack", "Tech Vest", "Transit Jacket"]
  };

  const images = {
    audio: ["./assets/headphone.png", "./assets/speaker.png"],
    wearables: ["./assets/smartwatch.png"],
    workspace: ["./assets/keyboard.png", "./assets/lamp.png"],
    apparel: ["./assets/backpack.png"]
  };

  const taglines = [
    "Precision engineered for pure performance.",
    "Curved sapphire display and adaptive bio-sensors.",
    "Ultra-smooth construction with customized profiles.",
    "Seamless connectivity and minimalist modern design.",
    "Aircraft-grade aluminum materials built to last.",
    "Ergonomic design tailored for premium comfort.",
    "Gasket mount design with perimeter RGB lighting.",
    "Next-generation micro-weave fabric for daily use."
  ];

  const badges = ["BESTSELLER", "HOT ITEM", "NEW", "SALE", "LIMITED", "POPULAR", ""];

  categoriesList.forEach(cat => {
    const catLower = cat.toLowerCase();
    const catNouns = nouns[catLower] || ["Gear", "Device", "Accessory"];
    const catImages = images[catLower] || ["./assets/headphone.png"];

    for (let i = 1; i <= 50; i++) {
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = catNouns[Math.floor(Math.random() * catNouns.length)];
      const img = catImages[Math.floor(Math.random() * catImages.length)];
      const tagline = taglines[Math.floor(Math.random() * taglines.length)];
      const badge = badges[Math.floor(Math.random() * badges.length)];
      
      const price = Math.floor(1000 + Math.random() * 24000) + 99.00;
      const originalPrice = Math.random() > 0.4 ? price + Math.floor(500 + Math.random() * 5000) : null;
      const inStock = Math.floor(Math.random() * 30);
      const rating = (4.0 + Math.random() * 1.0).toFixed(2);
      const reviews = Math.floor(5 + Math.random() * 300);

      products.push({
        id: `prod-${catLower}-${i}`,
        name: `${adj} ${noun} ${i > 10 ? 'V' + Math.floor(i / 10) : 'Pro'}`,
        tagline: tagline,
        category: catLower,
        price: price,
        originalPrice: originalPrice,
        rating: parseFloat(rating),
        reviewsCount: reviews,
        badge: badge,
        image: img,
        inStock: inStock,
        colors: ["Space Black", "Lunar White", "Titanium Gray"],
        description: `This premium futuristic ${catLower} gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.`,
        specs: {
          "Condition": "Brand New",
          "Warranty": "2 Years ZeemoCare",
          "Material": "Eco-Polymer & Anodized Aluminum"
        }
      });
    }
  });

  return products;
}

const DEFAULT_PROMO_CODES = [
  { code: "ZEEMO20", discountRate: 0.20 },
  { code: "WELCOME10", discountRate: 0.10 },
  { code: "FUTURE30", discountRate: 0.30 }
];

// Seed MongoDB collections
async function seedDatabase() {
  try {
    const configCount = await AdminConfig.countDocuments();
    let categories = ["audio", "wearables", "workspace", "apparel"];
    if (configCount === 0) {
      const defaultConfig = new AdminConfig({
        categories: categories
      });
      await defaultConfig.save();
      console.log('Seeded database with default Admin configurations.');
    } else {
      const config = await AdminConfig.findOne({});
      categories = config.categories;
    }

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      let seededProducts = [];
      if (fs.existsSync(BUNDLE_DB_PATH)) {
        try {
          const fileData = JSON.parse(fs.readFileSync(BUNDLE_DB_PATH, 'utf-8'));
          if (fileData.products && fileData.products.length > 0) {
            seededProducts = fileData.products;
          }
        } catch (e) {
          console.warn('Could not read BUNDLE_DB_PATH for seeding:', e.message);
        }
      }
      if (seededProducts.length === 0) {
        seededProducts = generateMockCatalog(categories);
      }
      await Product.insertMany(seededProducts);
      console.log(`Seeded MongoDB database with products (${seededProducts.length} items).`);
    }

    const promoCount = await Promo.countDocuments();
    if (promoCount === 0) {
      await Promo.insertMany(DEFAULT_PROMO_CODES);
      console.log('Seeded MongoDB database with default promotional codes.');
    }

    const adminCount = await AdminUser.countDocuments();
    if (adminCount === 0) {
      const defaultAdmin = new AdminUser({
        username: "admin",
        password: "admin"
      });
      await defaultAdmin.save();
      console.log('Seeded MongoDB database with default Admin user.');
    }
  } catch (err) {
    console.error('Error seeding database:', err.message);
  }
}

// --- FILE SYSTEM DATABASE FALLBACK HELPERS ---

function initializeFileDB() {
  if (process.env.VERCEL && !fs.existsSync(FILE_DB_PATH)) {
    if (fs.existsSync(BUNDLE_DB_PATH)) {
      try {
        fs.copyFileSync(BUNDLE_DB_PATH, FILE_DB_PATH);
      } catch (e) {
        console.warn('Could not copy bundle DB to /tmp:', e.message);
      }
    }
  }

  if (!fs.existsSync(FILE_DB_PATH)) {
    const categories = ["sound", "wearables", "workspace", "apparel"];
    const seededProducts = generateMockCatalog(categories);
    const defaultData = {
      products: seededProducts,
      promos: DEFAULT_PROMO_CODES,
      adminConfig: {
        categories: categories
      },
      admins: [
        { username: "admin", password: "admin" }
      ],
      users: []
    };
    try {
      fs.writeFileSync(FILE_DB_PATH, JSON.stringify(defaultData, null, 2));
    } catch (e) {
      console.warn('Could not write FILE_DB_PATH:', e.message);
    }
    memoryDB = defaultData;
  } else {
    try {
      memoryDB = JSON.parse(fs.readFileSync(FILE_DB_PATH, 'utf-8'));
    } catch (e) {
      console.warn('Could not parse FILE_DB_PATH:', e.message);
    }
  }
}

function getLocalFileDB() {
  if (memoryDB) return memoryDB;
  try {
    const targetPath = fs.existsSync(FILE_DB_PATH) ? FILE_DB_PATH : BUNDLE_DB_PATH;
    const data = JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
    if (!data.adminConfig) {
      data.adminConfig = { categories: ["sound", "wearables", "workspace", "apparel"] };
    }
    if (!data.admins) {
      data.admins = [{ username: "admin", password: "admin" }];
    }
    if (!data.users) {
      data.users = [];
    }
    memoryDB = data;
    return data;
  } catch (e) {
    const categories = ["sound", "wearables", "workspace", "apparel"];
    const seededProducts = generateMockCatalog(categories);
    const fallback = { 
      products: seededProducts, 
      promos: DEFAULT_PROMO_CODES,
      adminConfig: { categories: categories },
      admins: [ { username: "admin", password: "admin" } ],
      users: []
    };
    memoryDB = fallback;
    return fallback;
  }
}

function saveLocalFileDB(data) {
  memoryDB = data;
  try {
    fs.writeFileSync(FILE_DB_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.warn('Failed to save to filesystem:', err.message);
  }
}

// --- API ENDPOINTS ---

// 1. Admin Authentication Endpoints (Multi-Admin)
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const userLower = username.toLowerCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const admin = db.admins.find(a => a.username.toLowerCase() === userLower && a.password === password);
    if (admin) {
      return res.json({ success: true, message: 'Authenticated successfully' });
    }
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  try {
    const admin = await AdminUser.findOne({ username: userLower });
    if (admin && admin.password === password) {
      res.json({ success: true, message: 'Authenticated successfully' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/users', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    return res.json(db.admins.map(a => ({ username: a.username })));
  }
  try {
    const admins = await AdminUser.find({}, 'username');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/users', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const userLower = username.toLowerCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const existing = db.admins.find(a => a.username.toLowerCase() === userLower);
    if (existing) {
      return res.status(400).json({ error: 'Administrator already exists' });
    }
    db.admins.push({ username: userLower, password });
    saveLocalFileDB(db);
    return res.status(201).json({ message: 'Administrator created successfully' });
  }
  try {
    const existing = await AdminUser.findOne({ username: userLower });
    if (existing) {
      return res.status(400).json({ error: 'Administrator already exists' });
    }
    const newAdmin = new AdminUser({ username: userLower, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Administrator created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/admin/users/:username', async (req, res) => {
  const userLower = req.params.username.toLowerCase();
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const index = db.admins.findIndex(a => a.username.toLowerCase() === userLower);
    if (index !== -1) {
      if (db.admins.length <= 1) {
        return res.status(400).json({ error: 'Cannot delete the last administrator' });
      }
      db.admins.splice(index, 1);
      saveLocalFileDB(db);
      return res.json({ message: 'Administrator deleted successfully' });
    }
    return res.status(404).json({ error: 'Administrator not found' });
  }
  try {
    const adminCount = await AdminUser.countDocuments();
    if (adminCount <= 1) {
      return res.status(400).json({ error: 'Cannot delete the last administrator' });
    }
    const result = await AdminUser.findOneAndDelete({ username: userLower });
    if (result) {
      res.json({ message: 'Administrator deleted successfully' });
    } else {
      res.status(404).json({ error: 'Administrator not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Global Configurations Endpoints
app.get('/api/admin/config', async (req, res) => {
  if (useLocalFileDB) {
    const db = getLocalFileDB();
    return res.json({ categories: db.adminConfig.categories });
  }
  try {
    const config = await AdminConfig.findOne({});
    if (config) {
      res.json({ categories: config.categories });
    } else {
      res.json({ categories: ["audio", "wearables", "workspace", "apparel"] });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/config', async (req, res) => {
  const { categories } = req.body;
  if (!categories) {
    return res.status(400).json({ error: 'categories array is required' });
  }

  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const oldCats = db.adminConfig.categories;
    const deletedCats = oldCats.filter(c => !categories.includes(c));
    db.adminConfig.categories = categories;

    // Dangling products re-assignment to 'uncategorized'
    if (deletedCats.length > 0) {
      if (!db.adminConfig.categories.includes("uncategorized")) {
        db.adminConfig.categories.push("uncategorized");
      }
      db.products.forEach(p => {
        if (deletedCats.includes(p.category)) {
          p.category = "uncategorized";
        }
      });
    }

    saveLocalFileDB(db);
    return res.json({ message: 'Admin configurations updated successfully in local DB' });
  }
  try {
    let config = await AdminConfig.findOne({});
    if (!config) {
      config = new AdminConfig({});
    }

    const oldCats = config.categories || [];
    const deletedCats = oldCats.filter(c => !categories.includes(c));
    config.categories = categories;

    if (deletedCats.length > 0) {
      if (!config.categories.includes("uncategorized")) {
        config.categories.push("uncategorized");
      }
      config.markModified('categories');
      await config.save();

      // Update products in bulk
      await Product.updateMany({ category: { $in: deletedCats } }, { $set: { category: "uncategorized" } });
    } else {
      await config.save();
    }

    res.json({ message: 'Admin configurations updated successfully', config });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Category Renaming
app.post('/api/admin/config/rename-category', async (req, res) => {
  const { oldName, newName } = req.body;
  if (!oldName || !newName) {
    return res.status(400).json({ error: 'oldName and newName are required' });
  }
  const oldLower = oldName.toLowerCase();
  const newLower = newName.toLowerCase().trim();

  if (useLocalFileDB) {
    const db = getLocalFileDB();
    const index = db.adminConfig.categories.findIndex(c => c.toLowerCase() === oldLower);
    if (index !== -1) {
      db.adminConfig.categories[index] = newLower;
      // Bulk update products
      db.products.forEach(p => {
        if (p.category.toLowerCase() === oldLower) {
          p.category = newLower;
        }
      });
      saveLocalFileDB(db);
      return res.json({ message: 'Category renamed successfully in local DB' });
    }
    return res.status(404).json({ error: 'Category not found' });
  }
  try {
    const config = await AdminConfig.findOne({});
    if (config) {
      const index = config.categories.findIndex(c => c.toLowerCase() === oldLower);
      if (index !== -1) {
        config.categories[index] = newLower;
        config.markModified('categories');
        await config.save();

        // Update matching products with regex for robust case-insensitivity
        await Product.updateMany({ category: { $regex: new RegExp('^' + oldLower + '$', 'i') } }, { $set: { category: newLower } });

        return res.json({ message: 'Category renamed successfully' });
      }
    }
    res.status(404).json({ error: 'Category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. User Accounts Endpoints (Storefront Signup / Login)
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

// 4. Products Routes
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

// 5. Promos Routes
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

// 6. Reset Route (Wipes collections and generates 50 products per category)
app.post('/api/reset', async (req, res) => {
  const categories = ["audio", "wearables", "workspace", "apparel"];
  const seededProducts = generateMockCatalog(categories);
  
  if (useLocalFileDB) {
    const defaultData = {
      products: seededProducts,
      promos: DEFAULT_PROMO_CODES,
      adminConfig: {
        categories: categories
      },
      admins: [
        { username: "admin", password: "admin" }
      ],
      users: []
    };
    saveLocalFileDB(defaultData);
    return res.json({ message: `Database reset to factory defaults successfully (generated ${seededProducts.length} mock products in local file DB).` });
  }
  try {
    await Product.deleteMany({});
    await Promo.deleteMany({});
    await AdminConfig.deleteMany({});
    await AdminUser.deleteMany({});
    await User.deleteMany({});
    
    await Product.insertMany(seededProducts);
    await Promo.insertMany(DEFAULT_PROMO_CODES);
    
    const defaultConfig = new AdminConfig({
      categories: categories
    });
    await defaultConfig.save();
    
    const defaultAdmin = new AdminUser({
      username: "admin",
      password: "admin"
    });
    await defaultAdmin.save();
    
    res.json({ message: `Database reset to factory defaults successfully (generated ${seededProducts.length} mock products).` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback: send index.html only for page navigation requests (never for static assets)
app.get('*', (req, res) => {
  if (req.path.endsWith('.css')) {
    return res.status(404).type('text/css').send('/* CSS Not Found */');
  }
  if (req.path.endsWith('.js')) {
    return res.status(404).type('application/javascript').send('// JS Not Found');
  }
  if (req.path.startsWith('/assets/')) {
    return res.status(404).send('Asset Not Found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Export app for serverless platforms (like Vercel)
module.exports = app;

// Start Server locally or on container platforms
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`ZeemoStore Server running at http://localhost:${PORT}`);
  });
}
