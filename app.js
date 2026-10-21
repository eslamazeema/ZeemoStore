/* ==========================================================================
   LUMINA E-COMMERCE APP LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- CURRENCY FORMATTER ---
  function formatCurrency(amount) {
    return `EGP ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // --- STATE ---
  let PRODUCTS = typeof DEFAULT_PRODUCTS !== 'undefined' ? [...DEFAULT_PRODUCTS] : [];
  let PROMO_CODES = {};
  let cart = JSON.parse(localStorage.getItem('lumina_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('lumina_wishlist')) || [];
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'featured';
  let appliedPromoDiscount = 0;
  let activeTheme = localStorage.getItem('lumina_theme') || 'dark';

  // --- DOM ELEMENTS ---
  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryTabs = document.getElementById('categoryTabs');
  const sortSelect = document.getElementById('sortSelect');
  
  // Drawers
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartOpenBtn = document.getElementById('cartOpenBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemList = document.getElementById('cartItemList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartTaxEl = document.getElementById('cartTax');
  const cartTotalEl = document.getElementById('cartTotal');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const shippingText = document.getElementById('shippingText');
  
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistBackdrop = document.getElementById('wishlistBackdrop');
  const wishlistOpenBtn = document.getElementById('wishlistOpenBtn');
  const wishlistCloseBtn = document.getElementById('wishlistCloseBtn');
  const wishlistBadge = document.getElementById('wishlistBadge');
  const wishlistItemList = document.getElementById('wishlistItemList');

  // Modals
  const productModalOverlay = document.getElementById('productModalOverlay');
  const productModalContent = document.getElementById('productModalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const toStep2Btn = document.getElementById('toStep2Btn');
  const backToStep1Btn = document.getElementById('backToStep1Btn');
  const completeOrderBtn = document.getElementById('completeOrderBtn');
  const finishCheckoutBtn = document.getElementById('finishCheckoutBtn');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const promoCodeInput = document.getElementById('promoCodeInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const toastContainer = document.getElementById('toastContainer');

  // Hero buttons
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  const heroBestsellerBtn = document.getElementById('heroBestsellerBtn');

  // --- API DATA FETCHERS ---
  let CATEGORIES = ["all", "sound", "wearables", "workspace", "apparel"];

  async function fetchConfig() {
    try {
      const res = await fetch('/api/admin/config');
      if (!res.ok) throw new Error('Config fetch failed');
      const data = await res.json();
      if (data.categories && data.categories.length > 0) {
        CATEGORIES = ["all", ...data.categories];
      }
    } catch (err) {
      console.error('Error fetching config:', err);
    }
  }

  function renderCategoryTabs() {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;
    
    const iconMap = {
      all: 'fa-solid fa-sparkles',
      sound: 'fa-solid fa-headphones',
      audio: 'fa-solid fa-headphones',
      wearables: 'fa-solid fa-stopwatch',
      workspace: 'fa-solid fa-keyboard',
      apparel: 'fa-solid fa-bag-shopping'
    };

    tabsContainer.innerHTML = CATEGORIES.map(cat => {
      const iconClass = iconMap[cat.toLowerCase()] || 'fa-solid fa-tag';
      const label = cat.charAt(0).toUpperCase() + cat.slice(1);
      const isActive = cat.toLowerCase() === currentCategory.toLowerCase() ? 'active' : '';
      return `<button class="cat-tab ${isActive}" data-category="${cat.toLowerCase()}"><i class="${iconClass}"></i> ${label}</button>`;
    }).join('');
  }

  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('API fetch failed');
      PRODUCTS = await res.json();
    } catch (err) {
      console.error('Error fetching products:', err);
      if (!PRODUCTS || PRODUCTS.length === 0) {
        showToast('Could not load products from database.', 'danger');
      }
    }
  }

  async function fetchPromos() {
    try {
      const res = await fetch('/api/promos');
      if (!res.ok) throw new Error('API fetch failed');
      PROMO_CODES = await res.json();
    } catch (err) {
      console.error('Error fetching promos:', err);
    }
  }

  // --- INITIALIZATION ---
  async function initializeApp() {
    initTheme();
    renderCategoryTabs();
    if (PRODUCTS.length > 0) {
      renderProducts();
    }
    await fetchConfig();
    await fetchProducts();
    await fetchPromos();
    renderCategoryTabs();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    updateUserAuthUI();
  }

  initializeApp();

  // --- THEME SYSTEM ---
  function initTheme() {
    if (activeTheme === 'light') {
      document.body.classList.add('light-theme');
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      document.body.classList.remove('light-theme');
      themeIcon.className = 'fa-solid fa-moon';
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('lumina_theme', activeTheme);
    initTheme();
    showToast(`Switched to ${activeTheme} theme`, 'info');
  });

  // --- PRODUCT RENDERING & FILTERING ---
  function renderProducts() {
    let filtered = PRODUCTS.filter(product => {
      const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-ghost" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
          <h3>No matching gear found</h3>
          <p>Try searching for headphones, smartwatches, or workspace tools.</p>
        </div>
      `;
      return;
    }

    productGrid.innerHTML = filtered.map(product => {
      const isWishlisted = wishlist.includes(product.id);
      const starsHTML = getStarRatingHTML(product.rating);

      return `
        <div class="product-card" data-id="${product.id}">
          ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
          
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(event, '${product.id}')" aria-label="Add to Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>

          <div class="product-img-container" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" class="product-img">
          </div>

          <div class="product-info">
            <div class="product-meta">
              <span class="product-cat">${product.category}</span>
              <div class="product-rating">
                ${starsHTML}
                <span>(${product.rating})</span>
              </div>
            </div>

            <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>
            <p class="product-tagline">${product.tagline}</p>

            <div class="product-footer">
              <div class="price-box">
                <span class="current-price">${formatCurrency(product.price)}</span>
                ${product.originalPrice ? `<span class="original-price">${formatCurrency(product.originalPrice)}</span>` : ''}
              </div>

              <button class="add-cart-btn" onclick="addToCart('${product.id}')">
                <i class="fa-solid fa-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function getStarRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fa-solid fa-star"></i>';
    if (halfStar) stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    return stars;
  }

  // Category filter handlers
  categoryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.dataset.category;
    renderProducts();
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderProducts();
  });

  // Sort handler
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Hero section CTAs
  heroExploreBtn.addEventListener('click', () => {
    document.querySelector('.controls-section').scrollIntoView({ behavior: 'smooth' });
  });

  heroBestsellerBtn.addEventListener('click', () => {
    sortSelect.value = 'rating';
    currentSort = 'rating';
    renderProducts();
    document.querySelector('.controls-section').scrollIntoView({ behavior: 'smooth' });
  });

  // --- WISHLIST MANAGEMENT ---
  window.toggleWishlist = function(event, productId) {
    event.stopPropagation();
    const index = wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);

    if (index > -1) {
      wishlist.splice(index, 1);
      showToast(`Removed "${product.name}" from Wishlist`, 'info');
    } else {
      wishlist.push(productId);
      showToast(`Added "${product.name}" to Wishlist!`, 'success');
    }

    localStorage.setItem('lumina_wishlist', JSON.stringify(wishlist));
    renderProducts();
    updateWishlistUI();
  };

  function updateWishlistUI() {
    wishlistBadge.textContent = wishlist.length;
    
    if (wishlist.length === 0) {
      wishlistItemList.innerHTML = `
        <div class="empty-state">
          <i class="fa-regular fa-heart empty-icon"></i>
          <h3>Your wishlist is empty</h3>
          <p>Tap the heart icon on any gear to save it for later.</p>
        </div>
      `;
      return;
    }

    const items = PRODUCTS.filter(p => wishlist.includes(p.id));
    wishlistItemList.innerHTML = items.map(product => `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${product.name}</div>
          <div class="cart-item-price">${formatCurrency(product.price)}</div>
          <button class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="addToCart('${product.id}')">
            Move to Cart
          </button>
        </div>
        <button class="remove-item-btn" onclick="toggleWishlist(event, '${product.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    `).join('');
  }

  // --- CART MANAGEMENT ---
  window.addToCart = function(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty: qty });
    }

    saveCart();
    updateCartUI();
    showToast(`Added "${product.name}" to Cart`, 'success');
    openCartDrawer();
  };

  window.updateCartQty = function(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
    updateCartUI();
  };

  window.removeFromCart = function(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast(`Item removed from cart`, 'info');
  };

  function saveCart() {
    localStorage.setItem('lumina_cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalCount;

    if (cart.length === 0) {
      cartItemList.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-bag-shopping empty-icon"></i>
          <h3>Your cart is empty</h3>
          <p>Explore our luxury collection and add your favorite items.</p>
        </div>
      `;
      cartSubtotalEl.textContent = formatCurrency(0);
      cartDiscountEl.textContent = `-${formatCurrency(0)}`;
      cartTaxEl.textContent = formatCurrency(0);
      cartTotalEl.textContent = formatCurrency(0);
      shippingProgressFill.style.width = '0%';
      shippingText.textContent = `Add ${formatCurrency(7500)} more for FREE express shipping!`;
      return;
    }

    let subtotal = 0;
    cartItemList.innerHTML = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      const itemSubtotal = product.price * item.qty;
      subtotal += itemSubtotal;

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-title">${product.name}</div>
            <div class="cart-item-price">${formatCurrency(product.price)}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateCartQty('${product.id}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button>
            </div>
          </div>
          <button class="remove-item-btn" onclick="removeFromCart('${product.id}')" aria-label="Remove item"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
    }).join('');

    const discountAmount = subtotal * appliedPromoDiscount;
    const discountedSubtotal = subtotal - discountAmount;
    const tax = discountedSubtotal * 0.08;
    const finalTotal = discountedSubtotal + tax;

    cartSubtotalEl.textContent = formatCurrency(subtotal);
    cartDiscountEl.textContent = `-${formatCurrency(discountAmount)}`;
    cartTaxEl.textContent = formatCurrency(tax);
    cartTotalEl.textContent = formatCurrency(finalTotal);

    // Free Shipping calculation (EGP 7,500 target)
    const freeShippingTarget = 7500;
    const progressPct = Math.min(100, (subtotal / freeShippingTarget) * 100);
    shippingProgressFill.style.width = `${progressPct}%`;

    if (subtotal >= freeShippingTarget) {
      shippingText.innerHTML = `<i class="fa-solid fa-truck-fast" style="color: var(--accent-success);"></i> You unlocked <strong>FREE Express Shipping!</strong>`;
    } else {
      const needed = freeShippingTarget - subtotal;
      shippingText.textContent = `Add ${formatCurrency(needed)} more for FREE express shipping!`;
    }
  }

  // Apply Promo Code
  applyPromoBtn.addEventListener('click', () => {
    const code = promoCodeInput.value.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      appliedPromoDiscount = PROMO_CODES[code];
      const pct = appliedPromoDiscount * 100;
      showToast(`Promo code applied! Saved ${pct}%`, 'success');
      updateCartUI();
    } else {
      showToast(`Invalid promo code. Try "ZEEMO20"`, 'danger');
    }
  });

  // Drawer Toggle Handlers
  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
  }

  cartOpenBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  wishlistOpenBtn.addEventListener('click', () => {
    wishlistDrawer.classList.add('open');
    wishlistBackdrop.classList.add('open');
  });

  wishlistCloseBtn.addEventListener('click', () => {
    wishlistDrawer.classList.remove('open');
    wishlistBackdrop.classList.remove('open');
  });
  wishlistBackdrop.addEventListener('click', () => {
    wishlistDrawer.classList.remove('open');
    wishlistBackdrop.classList.remove('open');
  });

  // --- PRODUCT DETAIL MODAL ---
  window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const specsHTML = Object.entries(product.specs).map(([k, v]) => `
      <div class="spec-item">
        <span class="spec-key">${k}</span>
        <span class="spec-val">${v}</span>
      </div>
    `).join('');

    productModalContent.innerHTML = `
      <div class="modal-gallery">
        <img src="${product.image}" alt="${product.name}" class="modal-gallery-img">
      </div>
      <div class="modal-details">
        <span class="product-cat" style="margin-bottom: 0.4rem;">${product.category}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price-row">
          <span class="modal-price">${formatCurrency(product.price)}</span>
          ${product.originalPrice ? `<span class="original-price" style="font-size: 1.1rem;">${formatCurrency(product.originalPrice)}</span>` : ''}
        </div>
        <div class="stock-indicator">
          <i class="fa-solid fa-circle-check"></i> In Stock (${product.inStock} units remaining)
        </div>
        <p class="modal-desc">${product.description}</p>
        
        <div class="specs-list">
          <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; color: var(--accent-cyan);">Technical Specs</div>
          ${specsHTML}
        </div>

        <button class="btn-primary" onclick="addToCart('${product.id}'); closeProductModal();" style="width: 100%; justify-content: center; padding: 1rem;">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart • ${formatCurrency(product.price)}
        </button>
      </div>
    `;

    productModalOverlay.classList.add('open');
  };

  window.closeProductModal = function() {
    productModalOverlay.classList.remove('open');
  };

  modalCloseBtn.addEventListener('click', closeProductModal);
  productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) closeProductModal();
  });

  // --- CHECKOUT MODAL FLOW ---
  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty!', 'danger');
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });

  function openCheckoutModal() {
    showStep(1);
    checkoutModalOverlay.classList.add('open');
  }

  function closeCheckoutModal() {
    checkoutModalOverlay.classList.remove('open');
  }

  checkoutCloseBtn.addEventListener('click', closeCheckoutModal);

  function showStep(stepNum) {
    document.getElementById('checkoutStep1').style.display = stepNum === 1 ? 'block' : 'none';
    document.getElementById('checkoutStep2').style.display = stepNum === 2 ? 'block' : 'none';
    document.getElementById('checkoutStep3').style.display = stepNum === 3 ? 'block' : 'none';

    // Update Stepper icons
    const step1 = document.getElementById('step1Indicator');
    const step2 = document.getElementById('step2Indicator');
    const step3 = document.getElementById('step3Indicator');

    step1.className = stepNum >= 1 ? (stepNum > 1 ? 'step completed' : 'step active') : 'step';
    step2.className = stepNum >= 2 ? (stepNum > 2 ? 'step completed' : 'step active') : 'step';
    step3.className = stepNum === 3 ? 'step active' : 'step';

    if (stepNum === 2) {
      const totalText = cartTotalEl.textContent;
      document.getElementById('finalCheckoutTotal').textContent = totalText;
    }
  }

  document.getElementById('shippingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showStep(2);
  });

  backToStep1Btn.addEventListener('click', () => showStep(1));

  document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Generate order ID
    const orderId = '#LUM-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('orderRefId').textContent = orderId;
    
    // Clear Cart
    cart = [];
    saveCart();
    updateCartUI();

    showStep(3);
    showToast('Order placed successfully!', 'success');
  });

  finishCheckoutBtn.addEventListener('click', () => {
    closeCheckoutModal();
  });

  // --- USER ACCOUNT MANAGEMENT ---
  const userAccountBtn = document.getElementById('userAccountBtn');
  const userDropdown = document.getElementById('userDropdown');
  const userModalOverlay = document.getElementById('userModalOverlay');
  const userModalCloseBtn = document.getElementById('userModalCloseBtn');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const authSignInView = document.getElementById('authSignInView');
  const authRegisterView = document.getElementById('authRegisterView');

  const userLoginForm = document.getElementById('userLoginForm');
  const userRegisterForm = document.getElementById('userRegisterForm');
  const userLogoutBtn = document.getElementById('userLogoutBtn');
  const userNameDisplay = document.getElementById('userNameDisplay');
  const userEmailDisplay = document.getElementById('userEmailDisplay');

  let currentUser = JSON.parse(sessionStorage.getItem('zeemo_user')) || null;

  function updateUserAuthUI() {
    if (!userAccountBtn || !userNameDisplay || !userEmailDisplay) return;
    if (currentUser) {
      userNameDisplay.textContent = `Hi, ${currentUser.name}`;
      userEmailDisplay.textContent = currentUser.email;
      userAccountBtn.innerHTML = `<i class="fa-solid fa-user" style="color: var(--accent-cyan);"></i>`;
      userAccountBtn.title = `Profile (${currentUser.name})`;
    } else {
      userNameDisplay.textContent = `Welcome, Guest`;
      userEmailDisplay.textContent = `Sign in to sync your cart`;
      userAccountBtn.innerHTML = `<i class="fa-regular fa-user"></i>`;
      userAccountBtn.title = `Sign In / Register`;
    }
  }

  if (userAccountBtn) {
    userAccountBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentUser) {
        userDropdown.classList.toggle('open');
      } else {
        openUserModal();
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (userDropdown && !e.target.closest('#userMenuWrapper')) {
      userDropdown.classList.remove('open');
    }
  });

  function openUserModal() {
    if (userModalOverlay) {
      showAuthTab('signin');
      userModalOverlay.classList.add('open');
    }
  }

  function closeUserModal() {
    if (userModalOverlay) {
      userModalOverlay.classList.remove('open');
    }
  }

  if (userModalCloseBtn) {
    userModalCloseBtn.addEventListener('click', closeUserModal);
  }

  function showAuthTab(tab) {
    if (!tabSignInBtn || !tabRegisterBtn || !authSignInView || !authRegisterView) return;
    if (tab === 'signin') {
      tabSignInBtn.classList.add('active');
      tabRegisterBtn.classList.remove('active');
      tabSignInBtn.style.color = 'var(--accent-cyan)';
      tabRegisterBtn.style.color = 'var(--text-muted)';
      authSignInView.style.display = 'block';
      authRegisterView.style.display = 'none';
    } else {
      tabSignInBtn.classList.remove('active');
      tabRegisterBtn.classList.add('active');
      tabSignInBtn.style.color = 'var(--text-muted)';
      tabRegisterBtn.style.color = 'var(--accent-cyan)';
      authSignInView.style.display = 'none';
      authRegisterView.style.display = 'block';
    }
  }

  if (tabSignInBtn) tabSignInBtn.addEventListener('click', () => showAuthTab('signin'));
  if (tabRegisterBtn) tabRegisterBtn.addEventListener('click', () => showAuthTab('register'));

  if (userLoginForm) {
    userLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginUserEmail').value.trim();
      const password = document.getElementById('loginUserPassword').value;

      fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw new Error(err.error || 'Login failed') });
        }
        return res.json();
      })
      .then(data => {
        currentUser = data.user;
        sessionStorage.setItem('zeemo_user', JSON.stringify(currentUser));
        updateUserAuthUI();
        closeUserModal();
        showToast(`Welcome back, ${currentUser.name}!`, 'success');
        userLoginForm.reset();
      })
      .catch(err => {
        console.error(err);
        showToast(err.message, 'danger');
      });
    });
  }

  if (userRegisterForm) {
    userRegisterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('registerUserName').value.trim();
      const email = document.getElementById('registerUserEmail').value.trim();
      const phone = document.getElementById('registerUserPhone').value.trim();
      const password = document.getElementById('registerUserPassword').value;

      fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password })
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw new Error(err.error || 'Registration failed') });
        }
        return res.json();
      })
      .then(data => {
        showToast('Registration successful! Please sign in.', 'success');
        showAuthTab('signin');
        document.getElementById('loginUserEmail').value = email;
        userRegisterForm.reset();
      })
      .catch(err => {
        console.error(err);
        showToast(err.message, 'danger');
      });
    });
  }

  if (userLogoutBtn) {
    userLogoutBtn.addEventListener('click', () => {
      currentUser = null;
      sessionStorage.removeItem('zeemo_user');
      updateUserAuthUI();
      userDropdown.classList.remove('open');
      showToast('Signed out successfully', 'info');
    });
  }

  // --- ADMIN PORTAL CONTROLLER MOVED TO ADMIN.JS ---

  // --- TOAST SYSTEM ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'danger') iconClass = 'fa-solid fa-circle-exclamation';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
});
