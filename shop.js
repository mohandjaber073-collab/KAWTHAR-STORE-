/* ============================================================
   SHOP — category filter + text search (work together)
   ============================================================ */

let currentCat = 'all';
let currentQuery = '';

window.filteredProducts = products;

function applyFilters(){
  const q = currentQuery.trim().toLowerCase();
  window.filteredProducts = products.filter(p=>{
    if(currentCat !== 'all' && p.cat !== currentCat) return false;
    if(!q) return true;
    return (
      p.brand.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      (p.nameEn || '').toLowerCase().includes(q)
    );
  });
  renderShopGrid();
}

function renderShopGrid(){
  const grid = document.getElementById('productGrid');
  const lang = getLang();
  const countEl = document.getElementById('productCount');
  if(countEl){
    const n = window.filteredProducts.length;
    if(lang === 'ar'){
      countEl.innerHTML = `<span data-ar="عرض" data-en="Showing">عرض</span> <b>${n}</b> <span data-ar="منتج" data-en="products">منتج</span>`;
    } else {
      countEl.innerHTML = `Showing <b>${n}</b> products`;
    }
  }
  grid.innerHTML = window.filteredProducts.length
    ? window.filteredProducts.map((p,i)=> productCardHTML(p, i)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light);font-size:15px">
         <span data-ar="لا توجد منتجات مطابقة" data-en="No matching products">${lang==='en'?'No matching products':'لا توجد منتجات مطابقة'}</span>
       </div>`;
}

function filterProducts(cat, btn){
  currentCat = cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  applyFilters();
}

function searchProducts(q){
  currentQuery = q || '';
  applyFilters();
}

// Allow shared.js to re-render when the language changes
window.renderActiveProducts = renderShopGrid;

document.addEventListener('DOMContentLoaded', ()=>{
  initKawthar({ active: 'shop', source: 'filteredProducts' });
  const search = document.getElementById('searchInput');
  if(search){
    search.addEventListener('input', e => searchProducts(e.target.value));
  }
  applyFilters();
});
