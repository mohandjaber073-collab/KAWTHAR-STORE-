/* ============================================================
   SHOP — search · category · price range · sort (all combined)
   ============================================================ */

let currentCat      = 'all';
let currentQuery    = '';
let currentSort     = 'default';
let currentPriceMin = 0;
let currentPriceMax = Infinity;

window.filteredProducts = products;

/* ── helpers ── */
function filterByPrice(arr, min, max){
  return arr.filter(p => p.price >= min && p.price <= max);
}

function sortArr(arr, sort){
  const copy = [...arr];
  if(sort === 'price-asc')    return copy.sort((a,b) => a.price - b.price);
  if(sort === 'price-desc')   return copy.sort((a,b) => b.price - a.price);
  if(sort === 'top-rated')    return copy.sort((a,b) => getProductRating(b,0) - getProductRating(a,0));
  if(sort === 'best-selling') return copy.sort((a,b) => (b.isFeatured?1:0) - (a.isFeatured?1:0));
  return copy;
}

/* ── main filter + render ── */
function applyFilters(){
  const q = currentQuery.trim().toLowerCase();
  let result = products.filter(p => {
    if(currentCat !== 'all' && p.cat !== currentCat) return false;
    if(!q) return true;
    return (
      p.brand.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q)  ||
      (p.nameEn || '').toLowerCase().includes(q)
    );
  });
  result = filterByPrice(result, currentPriceMin, currentPriceMax);
  result = sortArr(result, currentSort);
  window.filteredProducts = result;
  renderShopGrid();
}

function renderShopGrid(){
  const lang = getLang();
  const countEl = document.getElementById('productCount');
  if(countEl){
    const n = window.filteredProducts.length;
    countEl.innerHTML = lang === 'ar'
      ? `عرض <b>${n}</b> منتج`
      : `Showing <b>${n}</b> products`;
  }
  const grid = document.getElementById('productGrid');
  grid.innerHTML = window.filteredProducts.length
    ? window.filteredProducts.map((p,i) => productCardHTML(p, i)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light);font-size:15px">
         ${lang === 'en' ? 'No matching products' : 'لا توجد منتجات مطابقة'}
       </div>`;
}

/* ── price range slider ── */
function initPriceRange(){
  const prices  = products.map(p => p.price);
  const absMin  = Math.min(...prices);
  const absMax  = Math.max(...prices);

  const minInput = document.getElementById('priceMinInput');
  const maxInput = document.getElementById('priceMaxInput');
  const label    = document.getElementById('priceRangeVals');
  const fill     = document.getElementById('priceRangeFill');

  if(!minInput || !maxInput) return;

  minInput.min = maxInput.min = absMin;
  minInput.max = maxInput.max = absMax;
  minInput.value = absMin;
  maxInput.value = absMax;
  currentPriceMin = absMin;
  currentPriceMax = absMax;

  function updateUI(){
    const minV  = parseInt(minInput.value);
    const maxV  = parseInt(maxInput.value);
    const range = absMax - absMin || 1;
    if(fill){
      fill.style.left  = ((minV - absMin) / range * 100) + '%';
      fill.style.right = ((absMax - maxV) / range * 100) + '%';
    }
    if(label) label.textContent = `₪${minV} — ₪${maxV}`;
  }

  minInput.addEventListener('input', function(){
    if(parseInt(minInput.value) >= parseInt(maxInput.value) - 5)
      minInput.value = parseInt(maxInput.value) - 5;
    currentPriceMin = parseInt(minInput.value);
    updateUI();
    applyFilters();
  });

  maxInput.addEventListener('input', function(){
    if(parseInt(maxInput.value) <= parseInt(minInput.value) + 5)
      maxInput.value = parseInt(minInput.value) + 5;
    currentPriceMax = parseInt(maxInput.value);
    updateUI();
    applyFilters();
  });

  updateUI();
}

/* ── exposed callbacks ── */
function filterProducts(cat, btn){
  currentCat = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  applyFilters();
}
function searchProducts(q){ currentQuery = q || ''; applyFilters(); }
function sortProducts(val){ currentSort = val || 'default'; applyFilters(); }

window.renderActiveProducts = renderShopGrid;

/* ── option label swap for sort select on lang change ── */
function syncSelectLabels(){
  const lang = getLang();
  document.querySelectorAll('select option[data-ar][data-en]').forEach(opt => {
    opt.textContent = opt.getAttribute('data-' + lang) || opt.textContent;
  });
}
window.renderActiveProducts = () => { renderShopGrid(); syncSelectLabels(); };

document.addEventListener('DOMContentLoaded', () => {
  initKawthar({ active: 'shop', source: 'filteredProducts' });

  document.getElementById('searchInput')
    ?.addEventListener('input', e => searchProducts(e.target.value));
  document.getElementById('sortSelect')
    ?.addEventListener('change', e => sortProducts(e.target.value));

  initPriceRange();
  applyFilters();
  syncSelectLabels();
});
