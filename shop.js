/* ============================================================
   SHOP — loads products from Supabase, filters, displays
   ============================================================ */

let allProducts = [];       // loaded from Supabase
let currentCat   = 'all';
let currentQuery = '';
let currentSort  = 'default';

// ── LOAD products from Supabase on page load ──────────────
document.addEventListener('DOMContentLoaded', async () => {
  initKawthar({ active: 'shop', source: 'filteredProducts' });

  showLoadingState();

  try {
    allProducts = await fetchProductsFromDB();
  } catch (e) {
    console.error('Could not load products:', e);
    allProducts = products; // fallback to shared.js array
  }

  window.filteredProducts = allProducts;
  initPriceRange();
  applyFilters();

  // Bind search and sort inputs
  document.getElementById('searchInput')
    ?.addEventListener('input', e => {
      currentQuery = e.target.value;
      applyFilters();
    });

  document.getElementById('sortSelect')
    ?.addEventListener('change', e => {
      currentSort = e.target.value;
      applyFilters();
    });
});

// ── SHOW loading spinner while fetching ───────────────────
function showLoadingState() {
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px">
        <div style="width:36px;height:36px;border:3px solid #E8D5B0;
          border-top-color:#C9A96E;border-radius:50%;
          animation:spin .7s linear infinite;margin:0 auto 16px">
        </div>
        <p style="color:#A89080;font-size:14px">Loading products...</p>
      </div>
    `;
  }
}

// ── APPLY filters and re-render ───────────────────────────
function applyFilters() {
  const q = currentQuery.trim().toLowerCase();

  let result = allProducts.filter(p => {
    if (currentCat !== 'all' && p.category !== currentCat && p.cat !== currentCat) return false;
    if (!q) return true;
    return (
      (p.brand||'').toLowerCase().includes(q) ||
      (p.name||'').toLowerCase().includes(q) ||
      (p.name_en||p.nameEn||'').toLowerCase().includes(q)
    );
  });

  // Sort
  if (currentSort === 'price-asc')  result.sort((a,b) => a.price - b.price);
  if (currentSort === 'price-desc') result.sort((a,b) => b.price - a.price);

  window.filteredProducts = result;
  renderShopGrid();
  updateProductCount(result.length);
}

// ── RENDER product cards ───────────────────────────────────
function renderShopGrid() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (window.filteredProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#A89080">
        No products found
      </div>`;
    return;
  }

  grid.innerHTML = window.filteredProducts.map((p, i) =>
    productCardHTML(p, i)
  ).join('');
}

// ── SINGLE product card HTML ───────────────────────────────
function productCardHTML(p, index) {
  const lang   = getLang();
  const name   = (lang === 'en' && (p.name_en || p.nameEn))
                   ? (p.name_en || p.nameEn)
                   : p.name;
  const cat    = p.category || p.cat || 'serum';
  const imgSrc = p.image_url;          // from Supabase column

  return `
    <article class="product-card" data-idx="${index}">
      ${p.is_new || p.isNew
        ? `<span class="new-badge">${lang==='en'?'New':'جديد'}</span>`
        : ''}

      <div class="product-img-wrap" onclick="openProductModal(${index})">
        ${imgSrc
          ? `<img
               src="${imgSrc}"
               alt="${name}"
               loading="lazy"
               onerror="this.style.display='none';
                        this.nextElementSibling.style.display='flex'"
             />
             <div style="display:none;align-items:center;
                         justify-content:center;width:100%;height:100%">
               ${catIcon[cat] || ICONS.sparkle}
             </div>`
          : catIcon[cat] || ICONS.sparkle
        }
      </div>

      <span class="brand-badge">${p.brand}</span>

      <div class="product-info">
        <div class="product-brand-label">${p.brand}</div>
        <h3 onclick="openProductModal(${index})">${name}</h3>
        <div class="product-footer">
          <span class="product-price">₪${p.price}</span>
          <button class="add-btn" data-add="${index}">
            ${ICONS.plus}<span class="btn-label">${t('addToCart')}</span>
          </button>
        </div>
      </div>
    </article>`;
}

// ── UPDATE count label ─────────────────────────────────────
function updateProductCount(n) {
  const el = document.getElementById('productCount');
  if (el) el.innerHTML = `Showing <b>${n}</b> products`;
}

// ── FILTER by category ─────────────────────────────────────
function filterProducts(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  applyFilters();
}

// ── PRICE RANGE ────────────────────────────────────────────
function initPriceRange() {
  if (!allProducts.length) return;
  const prices  = allProducts.map(p => p.price);
  const absMin  = Math.min(...prices);
  const absMax  = Math.max(...prices);
  const minInput = document.getElementById('priceMinInput');
  const maxInput = document.getElementById('priceMaxInput');
  if (!minInput || !maxInput) return;
  minInput.min = maxInput.min = absMin;
  minInput.max = maxInput.max = absMax;
  minInput.value = absMin;
  maxInput.value = absMax;

  function update() {
    const minV = parseInt(minInput.value);
    const maxV = parseInt(maxInput.value);
    const label = document.getElementById('priceRangeVals');
    if (label) label.textContent = `₪${minV} — ₪${maxV}`;
    window.filteredProducts = allProducts.filter(
      p => p.price >= minV && p.price <= maxV
    );
    applyFilters();
  }
  minInput.addEventListener('input', update);
  maxInput.addEventListener('input', update);
}

// ── SPIN animation (needed for loading state) ──────────────
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(spinStyle);

window.renderActiveProducts = renderShopGrid;
