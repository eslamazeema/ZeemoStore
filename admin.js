/* ==========================================================================
   LUMINA E-COMMERCE ADMIN LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE & UTILITIES ---
  let activeTheme = localStorage.getItem('lumina_theme') || 'dark';
  let PRODUCTS = [];
  let PROMO_CODES = {};
  let CATEGORIES = [];
  let ADMIN_USERS = [];

  // --- API DATA FETCHERS ---
  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error('API fetch failed');
      PRODUCTS = await res.json();
    } catch (err) {
      console.error('Error fetching products:', err);
      showToast('Could not load products database.', 'danger');
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

  async function fetchConfig() {
    try {
      const res = await fetch('/api/admin/config');
      if (!res.ok) throw new Error('Config fetch failed');
      const data = await res.json();
      CATEGORIES = data.categories || [];
    } catch (err) {
      console.error('Error fetching config:', err);
    }
  }

  async function fetchAdmins() {
    try {
      const res = await fetch('/api/admin/users');
      if (!res.ok) throw new Error('Admins fetch failed');
      ADMIN_USERS = await res.json();
    } catch (err) {
      console.error('Error fetching admins:', err);
    }
  }

  // --- THEME SYSTEM ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

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

  // Initialize Theme on Load
  initTheme();

  // --- CURRENCY FORMATTER ---
  function formatCurrency(amount) {
    return `EGP ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // --- AUTHENTICATION STATE & DOM ---
  let isAuthenticated = sessionStorage.getItem('zeemo_admin_authenticated') === 'true';
  const adminLoginGate = document.getElementById('adminLoginGate');
  const adminDashboardContent = document.getElementById('adminDashboardContent');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');

  async function updateAuthView() {
    if (isAuthenticated) {
      if (adminLoginGate) adminLoginGate.style.display = 'none';
      if (adminDashboardContent) adminDashboardContent.style.display = 'block';
      if (adminLogoutBtn) adminLogoutBtn.style.display = 'flex';
      
      // Load data from MongoDB APIs
      await fetchProducts();
      await fetchPromos();
      await fetchConfig();
      await fetchAdmins();

      // Render/update metrics upon login
      renderAdminInventoryTable();
      renderAdminPromosTable();
      renderCategoriesList();
      renderCategoryDropdown();
      renderAdminsTable();
      updateAdminStats();
      updateImagePreview();
    } else {
      if (adminLoginGate) adminLoginGate.style.display = 'flex';
      if (adminDashboardContent) adminDashboardContent.style.display = 'none';
      if (adminLogoutBtn) adminLogoutBtn.style.display = 'none';
    }
  }

  // --- DOM REFERENCES ---
  const adminInventoryTableBody = document.getElementById('adminInventoryTableBody');
  const adminPromosTableBody = document.getElementById('adminPromosTableBody');
  const addProductForm = document.getElementById('addProductForm');
  const addPromoForm = document.getElementById('addPromoForm');
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');

  // Stats elements
  const statTotalItems = document.getElementById('statTotalItems');
  const statTotalPromos = document.getElementById('statTotalPromos');

  // Image Selection DOM
  const imageTypeSelect = document.getElementById('newProdImageType');
  const uploadGroup = document.getElementById('imageUploadGroup');
  const presetGroup = document.getElementById('imagePresetGroup');
  const urlGroup = document.getElementById('imageUrlGroup');

  const fileInput = document.getElementById('newProdImageFile');
  const presetSelect = document.getElementById('newProdImagePreset');
  const urlInput = document.getElementById('newProdImageUrl');

  const previewImg = document.getElementById('imagePreview');
  const previewPlaceholder = document.getElementById('previewPlaceholder');

  let currentImageBase64 = null; // Base64 data if custom file uploaded

  // --- ADMIN TABS CONTROLLER ---
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.dataset.tab;
      document.getElementById('adminTabProducts').style.display = targetTab === 'products' ? 'block' : 'none';
      document.getElementById('adminTabOffers').style.display = targetTab === 'offers' ? 'block' : 'none';
      document.getElementById('adminTabStats').style.display = targetTab === 'stats' ? 'block' : 'none';
      document.getElementById('adminTabSettings').style.display = targetTab === 'settings' ? 'block' : 'none';
    });
  });

  // --- CATEGORIES LIST & DROPDOWN RENDER ---
  function renderCategoriesList() {
    const tableBody = document.getElementById('adminCategoriesTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = CATEGORIES.map(cat => `
      <tr>
        <td><strong style="color: var(--accent-cyan); font-family: var(--font-heading); font-size: 0.95rem;">${cat}</strong></td>
        <td>
          <div style="display: flex; gap: 0.5rem;">
            <button class="action-btn" onclick="openRenameCategoryModal('${cat}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-color: var(--accent-cyan); color: var(--accent-cyan);">
              <i class="fa-solid fa-pen-to-square"></i> Rename
            </button>
            <button class="action-btn-danger" onclick="deleteCategoryFromAdmin('${cat}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
              <i class="fa-solid fa-trash"></i> Remove
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  function renderCategoryDropdown() {
    const dropdown = document.getElementById('newProdCat');
    if (dropdown) {
      dropdown.innerHTML = CATEGORIES.map(cat => `
        <option value="${cat.toLowerCase()}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
      `).join('');
    }

    const filterDrop = document.getElementById('filterCategory');
    if (filterDrop) {
      const currentSelected = filterDrop.value;
      filterDrop.innerHTML = `<option value="all">All Categories</option>` + CATEGORIES.map(cat => `
        <option value="${cat.toLowerCase()}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
      `).join('');
      filterDrop.value = currentSelected;
    }
  }

  window.deleteCategoryFromAdmin = function(catName) {
    if (!confirm(`Are you sure you want to remove the category "${catName}"?`)) return;
    const updatedCategories = CATEGORIES.filter(c => c !== catName);
    updateCategoriesOnBackend(updatedCategories);
  };

  function updateCategoriesOnBackend(newCategories) {
    fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categories: newCategories })
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to update categories');
      return res.json();
    })
    .then(async () => {
      showToast('Categories updated successfully!', 'success');
      await fetchConfig();
      renderCategoriesList();
      renderCategoryDropdown();
      renderAdminInventoryTable(); // Refresh table catalog category updates
    })
    .catch(err => {
      console.error(err);
      showToast('Error updating categories.', 'danger');
    });
  }

  const addCategoryForm = document.getElementById('addCategoryForm');
  if (addCategoryForm) {
    addCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newCatName = document.getElementById('newCategoryName').value.trim().toLowerCase();
      if (!newCatName) return;
      if (CATEGORIES.includes(newCatName)) {
        showToast('Category already exists!', 'danger');
        return;
      }
      const updatedCategories = [...CATEGORIES, newCatName];
      updateCategoriesOnBackend(updatedCategories);
      addCategoryForm.reset();
    });
  }

  // --- RENAME CATEGORY MODAL LOGIC ---
  const renameCategoryModal = document.getElementById('renameCategoryModal');
  const renameCategoryCloseBtn = document.getElementById('renameCategoryCloseBtn');
  const renameCategoryForm = document.getElementById('renameCategoryForm');
  const renameOldCategoryNameInput = document.getElementById('renameOldCategoryName');
  const renameNewCategoryNameInput = document.getElementById('renameNewCategoryName');

  window.openRenameCategoryModal = function(catName) {
    if (renameCategoryModal && renameOldCategoryNameInput && renameNewCategoryNameInput) {
      renameOldCategoryNameInput.value = catName;
      renameNewCategoryNameInput.value = catName;
      renameCategoryModal.classList.add('open');
    }
  };

  if (renameCategoryCloseBtn) {
    renameCategoryCloseBtn.addEventListener('click', () => {
      if (renameCategoryModal) renameCategoryModal.classList.remove('open');
    });
  }

  if (renameCategoryForm) {
    renameCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const oldName = renameOldCategoryNameInput.value;
      const newName = renameNewCategoryNameInput.value.trim().toLowerCase();
      if (!newName || oldName.toLowerCase() === newName) {
        if (renameCategoryModal) renameCategoryModal.classList.remove('open');
        return;
      }

      fetch('/api/admin/config/rename-category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldName, newName })
      })
      .then(res => {
        if (!res.ok) throw new Error('Failed to rename category');
        return res.json();
      })
      .then(async () => {
        showToast(`Category "${oldName}" renamed to "${newName}"!`, 'success');
        if (renameCategoryModal) renameCategoryModal.classList.remove('open');
        
        await fetchConfig();
        await fetchProducts();
        
        renderCategoriesList();
        renderCategoryDropdown();
        renderAdminInventoryTable();
      })
      .catch(err => {
        console.error(err);
        showToast('Error renaming category.', 'danger');
      });
    });
  }

  // --- ADMINISTRATORS ACCOUNT MANAGEMENT ---
  function renderAdminsTable() {
    const tableBody = document.getElementById('adminUsersTableBody');
    if (!tableBody) return;
    
    const activeAdminUsername = sessionStorage.getItem('zeemo_active_admin') || '';

    tableBody.innerHTML = ADMIN_USERS.map(user => {
      const isSelf = user.username.toLowerCase() === activeAdminUsername.toLowerCase();
      return `
        <tr>
          <td><strong style="color: var(--text-main); font-family: monospace; font-size: 1rem;">${user.username}</strong></td>
          <td>
            ${isSelf ? 
              `<span style="color: var(--accent-success); font-size: 0.8rem; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> Logged In</span>` : 
              `<button class="action-btn-danger" onclick="deleteAdminUser('${user.username}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                <i class="fa-solid fa-trash"></i> Remove
              </button>`
            }
          </td>
        </tr>
      `;
    }).join('');
  }

  window.deleteAdminUser = function(username) {
    if (!confirm(`Are you sure you want to remove the administrator "${username}"?`)) return;
    fetch(`/api/admin/users/${username}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) return res.json().then(err => { throw new Error(err.error) });
      return res.json();
    })
    .then(async () => {
      showToast(`Removed administrator "${username}"`, 'info');
      await fetchAdmins();
      renderAdminsTable();
    })
    .catch(err => {
      console.error(err);
      showToast(err.message || 'Error deleting administrator.', 'danger');
    });
  };

  const addAdminForm = document.getElementById('addAdminForm');
  if (addAdminForm) {
    addAdminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('newAdminUsername').value.trim();
      const passwordInput = document.getElementById('newAdminPassword').value;

      fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      })
      .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error) });
        return res.json();
      })
      .then(async () => {
        showToast(`Administrator "${usernameInput}" created successfully!`, 'success');
        addAdminForm.reset();
        await fetchAdmins();
        renderAdminsTable();
      })
      .catch(err => {
        console.error(err);
        showToast(err.message || 'Error creating administrator.', 'danger');
      });
    });
  }

  // --- IMAGE PREVIEW LOGIC ---
  function updateImagePreview() {
    const type = imageTypeSelect.value;
    if (type === 'preset') {
      previewImg.src = presetSelect.value;
      previewImg.style.display = 'block';
      previewPlaceholder.style.display = 'none';
    } else if (type === 'url') {
      const url = urlInput.value.trim();
      if (url) {
        previewImg.src = url;
        previewImg.style.display = 'block';
        previewPlaceholder.style.display = 'none';
      } else {
        previewImg.style.display = 'none';
        previewPlaceholder.style.display = 'block';
      }
    } else if (type === 'upload') {
      if (currentImageBase64) {
        previewImg.src = currentImageBase64;
        previewImg.style.display = 'block';
        previewPlaceholder.style.display = 'none';
      } else {
        previewImg.style.display = 'none';
        previewPlaceholder.style.display = 'block';
      }
    }
  }

  imageTypeSelect.addEventListener('change', () => {
    const type = imageTypeSelect.value;
    uploadGroup.style.display = type === 'upload' ? 'block' : 'none';
    presetGroup.style.display = type === 'preset' ? 'block' : 'none';
    urlGroup.style.display = type === 'url' ? 'block' : 'none';
    updateImagePreview();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        currentImageBase64 = evt.target.result;
        updateImagePreview();
      };
      reader.readAsDataURL(file);
    }
  });

  presetSelect.addEventListener('change', updateImagePreview);
  urlInput.addEventListener('input', updateImagePreview);

  // --- CRUD OPERATIONS ---

  // DOM references for filters
  const filterSearch = document.getElementById('filterSearch');
  const filterCategory = document.getElementById('filterCategory');
  const filterStock = document.getElementById('filterStock');
  const filterSort = document.getElementById('filterSort');

  // Render Inventory Table (with Interactive Filters)
  function renderAdminInventoryTable() {
    if (!adminInventoryTableBody) return;
    
    let filtered = [...PRODUCTS];

    // Search query match
    if (filterSearch && filterSearch.value.trim()) {
      const query = filterSearch.value.trim().toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.tagline.toLowerCase().includes(query)
      );
    }

    // Category match
    if (filterCategory && filterCategory.value !== 'all') {
      const cat = filterCategory.value.toLowerCase();
      filtered = filtered.filter(p => p.category.toLowerCase() === cat);
    }

    // Stock availability status
    if (filterStock && filterStock.value !== 'all') {
      const val = filterStock.value;
      if (val === 'instock') {
        filtered = filtered.filter(p => p.inStock > 0);
      } else if (val === 'outofstock') {
        filtered = filtered.filter(p => p.inStock === 0);
      }
    }

    // Sort order
    if (filterSort) {
      const sortVal = filterSort.value;
      if (sortVal === 'name_asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortVal === 'name_desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortVal === 'price_asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortVal === 'price_desc') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortVal === 'stock_asc') {
        filtered.sort((a, b) => a.inStock - b.inStock);
      } else if (sortVal === 'stock_desc') {
        filtered.sort((a, b) => b.inStock - a.inStock);
      }
    }

    adminInventoryTableBody.innerHTML = filtered.map(p => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <img src="${p.image}" alt="${p.name}" class="table-img">
            <div>
              <div style="font-weight: 700;">${p.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${p.tagline}</div>
            </div>
          </div>
        </td>
        <td><span class="product-cat">${p.category}</span></td>
        <td><strong>${formatCurrency(p.price)}</strong></td>
        <td>${p.inStock} units</td>
        <td>${p.badge ? `<span class="card-badge" style="position: static;">${p.badge}</span>` : '<span style="color: var(--text-subtle);">-</span>'}</td>
        <td>
          <button class="action-btn-danger" onclick="deleteProductFromAdmin('${p.id}')">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Bind filter events
  if (filterSearch) filterSearch.addEventListener('input', renderAdminInventoryTable);
  if (filterCategory) filterCategory.addEventListener('change', renderAdminInventoryTable);
  if (filterStock) filterStock.addEventListener('change', renderAdminInventoryTable);
  if (filterSort) filterSort.addEventListener('change', renderAdminInventoryTable);

  // Render Promos Table
  function renderAdminPromosTable() {
    if (!adminPromosTableBody) return;
    const promoEntries = Object.entries(PROMO_CODES);
    adminPromosTableBody.innerHTML = promoEntries.map(([code, rate]) => `
      <tr>
        <td><strong style="color: var(--accent-cyan); font-family: monospace; font-size: 1rem;">${code}</strong></td>
        <td><strong>${(rate * 100).toFixed(0)}% OFF</strong></td>
        <td><span style="color: var(--accent-success); font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Active</span></td>
        <td>
          <button class="action-btn-danger" onclick="deletePromoFromAdmin('${code}')">
            <i class="fa-solid fa-trash"></i> Remove
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Update Stats Counters
  function updateAdminStats() {
    if (statTotalItems) statTotalItems.textContent = PRODUCTS.length;
    if (statTotalPromos) statTotalPromos.textContent = Object.keys(PROMO_CODES).length;
  }

  // Add Product Submit
  addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newProdName').value.trim();
    const tagline = document.getElementById('newProdTagline').value.trim();
    const category = document.getElementById('newProdCat').value;
    const price = parseFloat(document.getElementById('newProdPrice').value);
    const origPriceVal = document.getElementById('newProdOriginalPrice').value;
    const originalPrice = origPriceVal ? parseFloat(origPriceVal) : null;
    const stock = parseInt(document.getElementById('newProdStock').value) || 10;
    const badge = document.getElementById('newProdBadge').value;
    const desc = document.getElementById('newProdDesc').value.trim() || 'High-performance luxury gear.';

    let image = './assets/headphone.png'; // default fallback
    const imgType = imageTypeSelect.value;
    if (imgType === 'preset') {
      image = presetSelect.value;
    } else if (imgType === 'url') {
      image = urlInput.value.trim() || image;
    } else if (imgType === 'upload') {
      image = currentImageBase64 || image;
    }

    const newProduct = {
      name: name,
      tagline: tagline,
      category: category,
      price: price,
      originalPrice: originalPrice,
      badge: badge,
      image: image,
      inStock: stock,
      description: desc
    };

    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to create product');
      return res.json();
    })
    .then(async (data) => {
      showToast(`Published product "${name}" to store!`, 'success');
      addProductForm.reset();
      currentImageBase64 = null;
      
      // Refresh copy & render
      await fetchProducts();
      renderAdminInventoryTable();
      updateAdminStats();
      updateImagePreview();
    })
    .catch(err => {
      console.error(err);
      showToast('Error publishing product.', 'danger');
    });
  });

  // Delete Product
  window.deleteProductFromAdmin = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (!confirm(`Are you sure you want to delete "${product.name}"?`)) return;

    fetch(`/api/products/${productId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete product');
      return res.json();
    })
    .then(async () => {
      showToast(`Removed "${product.name}" from catalog`, 'info');
      await fetchProducts();
      renderAdminInventoryTable();
      updateAdminStats();
    })
    .catch(err => {
      console.error(err);
      showToast('Error deleting product.', 'danger');
    });
  };

  // Add Promo Code Submit
  addPromoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('newPromoCode').value.trim().toUpperCase();
    const pct = parseInt(document.getElementById('newPromoPct').value);

    if (!code || isNaN(pct)) return;

    fetch('/api/promos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, discountRate: pct / 100 })
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to save promo');
      return res.json();
    })
    .then(async () => {
      showToast(`Created promo code "${code}" (${pct}% OFF)`, 'success');
      addPromoForm.reset();
      await fetchPromos();
      renderAdminPromosTable();
      updateAdminStats();
    })
    .catch(err => {
      console.error(err);
      showToast('Error adding promo code.', 'danger');
    });
  });

  // Delete Promo Code
  window.deletePromoFromAdmin = function(code) {
    if (!confirm(`Remove promo code "${code}"?`)) return;

    fetch(`/api/promos/${code}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to remove promo');
      return res.json();
    })
    .then(async () => {
      showToast(`Removed promo code "${code}"`, 'info');
      await fetchPromos();
      renderAdminPromosTable();
      updateAdminStats();
    })
    .catch(err => {
      console.error(err);
      showToast('Error removing promo code.', 'danger');
    });
  };

  // Factory Reset defaults
  resetDefaultsBtn.addEventListener('click', () => {
    if (confirm("Restore factory default catalog & offers? Custom additions will be cleared.")) {
      fetch('/api/reset', {
        method: 'POST'
      })
      .then(res => {
        if (!res.ok) throw new Error('Reset failed');
        return res.json();
      })
      .then(async () => {
        showToast('Restored factory defaults!', 'info');
        await fetchProducts();
        await fetchPromos();
        renderAdminInventoryTable();
        renderAdminPromosTable();
        updateAdminStats();
      })
      .catch(err => {
        console.error(err);
        showToast('Error resetting defaults.', 'danger');
      });
    }
  });

  // --- TOAST SYSTEM ---
  const toastContainer = document.getElementById('toastContainer');

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

  // --- LOGIN & LOGOUT EVENT LISTENERS ---
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('loginUsername').value.trim();
      const passwordInput = document.getElementById('loginPassword').value;

      fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Invalid username or password!');
        }
        return res.json();
      })
      .then(data => {
        isAuthenticated = true;
        sessionStorage.setItem('zeemo_admin_authenticated', 'true');
        sessionStorage.setItem('zeemo_active_admin', usernameInput); // Save logged in username
        updateAuthView();
        showToast('Successfully authenticated!', 'success');
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
      })
      .catch(err => {
        console.error(err);
        showToast(err.message, 'danger');
      });
    });
  }

  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
      isAuthenticated = false;
      sessionStorage.removeItem('zeemo_admin_authenticated');
      updateAuthView();
      showToast('Logged out successfully', 'info');
    });
  }

  // --- INITIAL ON-LOAD ACTIONS ---
  updateAuthView();
});
