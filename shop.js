/* ============================================================
   SHOP — search · category · price · sort (all combined)
   ============================================================ */

let currentCat   = 'all';
let currentQuery = '';
let currentSort  = 'default';
let currentPrice = 'all';

window.filteredProducts = products;

/* ── helpers ── */
function filterByPrice(arr, range){
  if(range === 'all') return arr;
  if(range === '100+') return arr.filter(p => p.price > 100);
  const [min, max] = range.split('-').map(Number);
  return arr.filter(p => p.price >= min && p.price <= max);
}

function sortArr(arr, sort){
  const copy = [...arr];
  if(sort === 'price-asc')  return copy.sort((a,b) => a.price - b.price);
  if(sort === 'price-desc') return copy.sort((a,b) => b.price - a.price);
  if(sort === 'top-rated')  return copy.sort((a,b) => getProductRating(b,0) - getProductRating(a,0));
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
  result = filterByPrice(result, currentPrice);
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

/* ── exposed callbacks ── */
function filterProducts(cat, btn){
  currentCat = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  applyFilters();
}
function searchProducts(q){ currentQuery = q || ''; applyFilters(); }
function sortProducts(val){ currentSort = val || 'default'; applyFilters(); }
function priceFilter(val){ currentPrice = val || 'all'; applyFilters(); }

window.renderActiveProducts = renderShopGrid;

/* ── option label swap for selects on lang change ── */
function syncSelectLabels(){
  const lang = getLang();
  document.querySelectorAll('select option[data-ar][data-en]').forEach(opt => {
    opt.textContent = opt.getAttribute('data-' + lang) || opt.textContent;
  });
}
const _origApplyLang = typeof applyLang !== 'undefined' ? applyLang : null;
window.renderActiveProducts = () => { renderShopGrid(); syncSelectLabels(); };

document.addEventListener('DOMContentLoaded', () => {
  initKawthar({ active: 'shop', source: 'filteredProducts' });

  document.getElementById('searchInput')
    ?.addEventListener('input', e => searchProducts(e.target.value));
  document.getElementById('sortSelect')
    ?.addEventListener('change', e => sortProducts(e.target.value));
  document.getElementById('priceSelect')
    ?.addEventListener('change', e => priceFilter(e.target.value));

  applyFilters();
  syncSelectLabels();
});
