/* ============================================================
   KAWTHAR — Shared JS
   Products · Cart · Language · Theme · Nav · SVG icons
   ============================================================ */

/* ─── SVG ICON LIBRARY (inline, classy line-art, no emojis) ─── */
const ICONS = {
  bag: `<svg viewBox="0 0 24 24"><path d="M6 7V5a4 4 0 0 1 8 0v2"/><path d="M4 7h16l-1.2 13.3A2 2 0 0 1 16.8 22H7.2a2 2 0 0 1-2-1.7L4 7z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7"/><path d="M20 20l-4.3-4.3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5 13.1 19.8 19.8 0 0 1 1.9 4.4 2 2 0 0 1 3.9 2.2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L7.7 10a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z"/></svg>`,
  wa: `<svg viewBox="0 0 32 32" fill="currentColor" stroke="none"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.5 1.7 6.4L3 29l7.4-2c1.8.9 3.8 1.5 5.7 1.5 6.9 0 12.6-5.6 12.6-12.5C28.6 8.6 22.9 3 16 3zm0 22.8c-1.8 0-3.6-.5-5.1-1.3l-.4-.2-4.4 1.2 1.2-4.3-.2-.4a10.3 10.3 0 0 1-1.6-5.3C5.5 9.8 10.2 5.1 16 5.1s10.5 4.7 10.5 10.4c0 5.8-4.7 10.4-10.5 10.4zm5.7-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.1 5.1 4.4 2 .8 2.5.7 3 .7.5-.1 1.7-.7 2-1.3.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>`,
  insta: `<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>`,
  map: `<svg viewBox="0 0 24 24"><path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  truck: `<svg viewBox="0 0 24 24"><path d="M1 7h13v10H1zM14 10h4l3 4v3h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>`,
  heart: `<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5"/></svg>`,
  // Product category icons
  drop: `<svg viewBox="0 0 24 24"><path d="M12 3s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13z"/></svg>`,
  jar: `<svg viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="13" rx="2"/><path d="M6 12h12M8 5h8M8 5v3M16 5v3"/></svg>`,
  bottle: `<svg viewBox="0 0 24 24"><path d="M10 3h4v3l1.5 3v11a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V9L10 6z"/><path d="M10 12h4"/></svg>`,
  sun: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  eye: `<svg viewBox="0 0 24 24"><path d="M1.5 12S6 4 12 4s10.5 8 10.5 8-4.5 8-10.5 8S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 4 13c0-5 5-10 16-10 0 11-5 16-9 16z"/><path d="M2 22s3.5-4 9-10"/></svg>`,
  strand: `<svg viewBox="0 0 24 24"><path d="M8 3c0 6 8 6 8 12s-4 6-4 6M16 3c0 6-8 6-8 12s4 6 4 6"/></svg>`,
  edit: `<svg viewBox="0 0 24 24"><path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>`,
};

const catIcon = {
  serum: ICONS.drop,
  moisturizer: ICONS.jar,
  cleanser: ICONS.bottle,
  sunscreen: ICONS.sun,
  toner: ICONS.sparkle,
  eye: ICONS.eye,
  mask: ICONS.leaf,
  hair: ICONS.strand,
};

/* ─── PRODUCTS (full catalog) ─── */
const products = [
  // K-SECRET / SEOUL 1988
  {brand:'K-SECRET',name:'لصقات عيون ريتانول',nameEn:'Retinol Eye Patches',cat:'eye',price:78,isFeatured:true},
  {brand:'K-SECRET',name:'لصقات عيون فيتامين C',nameEn:'Vitamin C Eye Patches',cat:'eye',price:78},
  {brand:'K-SECRET',name:'كريم نياسينيمايد 5%',nameEn:'Niacinamide 5% Cream',cat:'moisturizer',price:75},
  {brand:'K-SECRET',name:'ماسك كولاجين ضد الشيخوخة 60مل',nameEn:'Anti-Aging Collagen Mask 60ml',cat:'mask',price:72},
  {brand:'SEOUL 1988',name:'K-SECRET سيروم عيون 30مل',nameEn:'K-Secret Eye Serum 30ml',cat:'eye',price:67},
  {brand:'SEOUL 1988',name:'K-SECRET سيروم 30مل',nameEn:'K-Secret Serum 30ml',cat:'serum',price:72},
  {brand:'SEOUL 1988',name:'K-SECRET مرطب 200مل',nameEn:'K-Secret Moisturizer 200ml',cat:'moisturizer',price:67},
  {brand:'SEOUL 1988',name:'K-SECRET اسنس 100مل',nameEn:'K-Secret Essence 100ml',cat:'toner',price:67},
  {brand:'SEOUL 1988',name:'K-SECRET غسول رغوي 150مل',nameEn:'K-Secret Foam Cleanser 150ml',cat:'cleanser',price:67},
  {brand:'SEOUL 1988',name:'K-SECRET واقي شمس 50مل',nameEn:'K-Secret Sunscreen 50ml',cat:'sunscreen',price:67},
  {brand:'CELIMAX',name:'غسول زيتي للرؤوس السوداء 150مل',nameEn:'Blackhead Oil Cleanser 150ml',cat:'cleanser',price:78},
  {brand:'CELIMAX',name:'سيروم مهدئ Non 30مل',nameEn:'Non-Stop Calming Serum 30ml',cat:'serum',price:69},
  {brand:'CELIMAX',name:'VITA Retinol سيروم شد 15مل',nameEn:'Vita Retinol Firming Serum 15ml',cat:'serum',price:73},
  {brand:'CELIMAX',name:'VITA SHOOT Retinol Shot 30مل',nameEn:'Vita Shoot Retinol Shot 30ml',cat:'serum',price:78},
  {brand:'TOCOBO',name:'كريم ترطيب 50مل للبشرة الجافة',nameEn:'Hydrating Cream 50ml (Dry)',cat:'moisturizer',price:85,isFeatured:true},
  {brand:'TOCOBO',name:'واقي شمس 50مل لجميع البشرة',nameEn:'Universal Sunscreen 50ml',cat:'sunscreen',price:65,isFeatured:true},
  {brand:'TOCOBO',name:'واقي شمس للبشرة الدهنية 50مل',nameEn:'Oily Skin Sunscreen 50ml',cat:'sunscreen',price:65},
  {brand:'TOCOBO',name:'سيروم تهدئة الجلد 50مل',nameEn:'Calming Serum 50ml',cat:'serum',price:70},
  {brand:'TOCOBO',name:'ماسك مقشر الشفاه بالليمون 20مل',nameEn:'Lemon Lip Scrub Mask 20ml',cat:'mask',price:65},
  {brand:'TOCOBO',name:'ماسك مقشر الشفاه بزيت الزيتون 20مل',nameEn:'Olive Lip Scrub Mask 20ml',cat:'mask',price:65},
  {brand:'TOCOBO',name:'تونر الليمون 150مل',nameEn:'Lemon Toner 150ml',cat:'toner',price:79},
  {brand:'TOCOBO',name:'بالط ومقشر 150مل',nameEn:'Exfoliating Pad 150ml',cat:'cleanser',price:68},
  {brand:'TOCOBO',name:'غسول زيتي للبشرة الدهنية 200مل',nameEn:'Oil Cleanser (Oily) 200ml',cat:'cleanser',price:79},
  {brand:'TOCOBO',name:'كريم ترطيب للعيون 30مل',nameEn:'Hydrating Eye Cream 30ml',cat:'eye',price:78},
  {brand:'TOCOBO',name:'سنستيك واقي شمس 50مل',nameEn:'Sun Stick 50ml',cat:'sunscreen',price:65},
  {brand:'ROUND LAB',name:'مرطب وجه BIRCH JUICE 200مل',nameEn:'Birch Juice Moisturizer 200ml',cat:'moisturizer',price:85,isFeatured:true},
  {brand:'ROUND LAB',name:'تونر تقشير الخلايا BIRCH JUICE 200مل',nameEn:'Birch Juice Exfoliating Toner 200ml',cat:'toner',price:75},
  {brand:'ROUND LAB',name:'واقي شمس BIRCH JUICE 50مل',nameEn:'Birch Juice Sunscreen 50ml',cat:'sunscreen',price:65},
  {brand:'ROUND LAB',name:'غسول زيتي 200مل',nameEn:'Oil Cleanser 200ml',cat:'cleanser',price:79},
  {brand:'ROUND LAB',name:'غسول وجه BIRCH JUICE 150مل',nameEn:'Birch Juice Face Wash 150ml',cat:'cleanser',price:82},
  {brand:'ROUND LAB',name:'كريم ترطيب BIRCH JUICE 80مل',nameEn:'Birch Juice Hydrating Cream 80ml',cat:'moisturizer',price:85},
  {brand:'ROUND LAB',name:'واقي شمس ملون 50مل',nameEn:'Tinted Sunscreen 50ml',cat:'sunscreen',price:65},
  {brand:'ROUND LAB',name:'واقي شمس وسادة',nameEn:'Sun Cushion',cat:'sunscreen',price:69},
  {brand:'ROUND LAB',name:'كريم عيون BIRCH JUICE 30مل',nameEn:'Birch Juice Eye Cream 30ml',cat:'eye',price:75},
  {brand:'ROUND LAB',name:'سيروم مغذي BIRCH JUICE 45غم',nameEn:'Birch Juice Nourishing Serum 45g',cat:'serum',price:75},
  {brand:'ROUND LAB',name:'تونر مرطب BIRCH JUICE 300مل',nameEn:'Birch Juice Hydrating Toner 300ml',cat:'toner',price:82},
  {brand:'ROUND LAB',name:'مرطب جل للوجه 150مل',nameEn:'Gel Face Moisturizer 150ml',cat:'moisturizer',price:75},
  {brand:'NUMBUZN',name:'تونر 3 لتفتيح البشرة 200مل',nameEn:'Toner No.3 Brightening 200ml',cat:'toner',price:80},
  {brand:'NUMBUZN',name:'تونر 4 للبشرة GLOW 200مل',nameEn:'Toner No.4 Glow 200ml',cat:'toner',price:80},
  {brand:'NUMBUZN',name:'تونر 5 لجميع البشرة 200مل',nameEn:'Toner No.5 All Skin 200ml',cat:'toner',price:80},
  {brand:'NUMBUZN',name:'تونر 1 للبشرة الحساسة 200مل',nameEn:'Toner No.1 Sensitive 200ml',cat:'toner',price:80},
  {brand:'NUMBUZN',name:'سيروم نياسينماميد 5 50مل',nameEn:'Niacinamide No.5 Serum 50ml',cat:'serum',price:80},
  {brand:'NUMBUZN',name:'سيروم ليلي + ماسك 6 50مل',nameEn:'Night Serum+Mask No.6 50ml',cat:'serum',price:80},
  {brand:'NUMBUZN',name:'سيروم ضد البشرة 9 50مل',nameEn:'Anti-Aging Serum No.9 50ml',cat:'serum',price:80},
  {brand:'NUMBUZN',name:'كريم 1-4 واقي شمس 50مل',nameEn:'Cream 1-4 Sunscreen 50ml',cat:'sunscreen',price:80},
  {brand:'NUMBUZN',name:'تونر 3 مغذي 100مل',nameEn:'Toner No.3 Nourishing 100ml',cat:'toner',price:55},
  {brand:'NUMBUZN',name:'تونر الاعشاب 1 100مل',nameEn:'Herbal Toner No.1 100ml',cat:'toner',price:55},
  {brand:'NUMBUZN',name:'تونر شرائح مغذية 190مل',nameEn:'Nourishing Toner Pads 190ml',cat:'toner',price:85},
  {brand:'NUMBUZN',name:'سيروم مهدئ 7 50مل',nameEn:'Calming Serum No.7 50ml',cat:'serum',price:80},
  {brand:'NUMBUZN',name:'سيروم 5 لعلاج التصبغات 30مل',nameEn:'Pigmentation Serum No.5 30ml',cat:'serum',price:77},
  {brand:'NUMBUZN',name:'كريم شد البشرة 9BIO LIFTING',nameEn:'Bio Lifting Cream No.9',cat:'moisturizer',price:88},
  {brand:'NUMBUZN',name:'لصقات عيون 5*2',nameEn:'Eye Patches 5*2',cat:'eye',price:78},
  {brand:'VITA-C',name:'سيروم 40مل',nameEn:'Vita-C Serum 40ml',cat:'serum',price:78},
  {brand:'VITA-C',name:'مرطب للوجه + واقي شمس 150مل',nameEn:'Moisturizer + Sunscreen 150ml',cat:'moisturizer',price:78},
  {brand:'VITA-C',name:'سيروم مرطب 150مل',nameEn:'Hydrating Serum 150ml',cat:'serum',price:88},
  {brand:'VITA-C',name:'DARK SPOT CLEAR 28مل',nameEn:'Dark Spot Clear 28ml',cat:'serum',price:83},
  {brand:'VITA-C',name:'غسول 150مل',nameEn:'Cleanser 150ml',cat:'cleanser',price:78},
  {brand:'VITA-C',name:'كريم عيون',nameEn:'Eye Cream',cat:'eye',price:85},
  {brand:'VITA-C',name:'لصقات عيون 72غم',nameEn:'Eye Patches 72g',cat:'eye',price:90},
  {brand:'AXIS-Y',name:'غسول رغوي 120مل',nameEn:'Foam Cleanser 120ml',cat:'cleanser',price:62},
  {brand:'AXIS-Y',name:'سيروم 30مل',nameEn:'Dark Spot Serum 30ml',cat:'serum',price:60},
  {brand:'AXIS-Y',name:'تونر 200مل',nameEn:'Daily Toner 200ml',cat:'toner',price:68},
  {brand:'AXIS-Y',name:'مقشر للوجه 50مل',nameEn:'Face Scrub 50ml',cat:'mask',price:60},
  {brand:'AXIS-Y',name:'سيروم عيون 10مل',nameEn:'Eye Serum 10ml',cat:'eye',price:62},
  {brand:'AXIS-Y',name:'سيروم لإزالة الشوائب 15مل',nameEn:'Blemish Serum 15ml',cat:'serum',price:55},
  {brand:'AXIS-Y',name:'تونر تصحيح البقع 125مل',nameEn:'Spot-Correcting Toner 125ml',cat:'toner',price:68},
  {brand:'AXIS-Y',name:'كريم تصحيح البقع 50مل',nameEn:'Spot-Correcting Cream 50ml',cat:'moisturizer',price:72},
  {brand:'AXIS-Y',name:'DARK SPOT CORRECTING كريم 50مل',nameEn:'Dark Spot Correcting Cream 50ml',cat:'moisturizer',price:58},
  {brand:'PURITO',name:'Mighty Cream مرطب 100مل',nameEn:'Mighty Cream 100ml',cat:'moisturizer',price:79},
  {brand:'PURITO',name:'Wonder Eye Cream سيروم 30مل',nameEn:'Wonder Eye Cream 30ml',cat:'eye',price:68},
  {brand:'SOME BY ME',name:'كريم AHA-BHA-PHA ميراكل 60مل',nameEn:'AHA-BHA-PHA Miracle Cream 60ml',cat:'moisturizer',price:73},
  {brand:'SOME BY ME',name:'كريم Snail Truecica 60جم',nameEn:'Snail Truecica Cream 60g',cat:'moisturizer',price:70},
  {brand:'SOME BY ME',name:'صابونة التنظيف المعجزة 106غم',nameEn:'Miracle Cleansing Bar 106g',cat:'cleanser',price:45},
  {brand:'SOME BY ME',name:'كريم تنظيف البشرة والحبوب 100مل',nameEn:'Acne Cleansing Cream 100ml',cat:'cleanser',price:63},
  {brand:'SOME BY ME',name:'غسول BLACKHEAD 120غم',nameEn:'Blackhead Cleanser 120g',cat:'cleanser',price:75},
  {brand:'SOME BY ME',name:'سيروم 30مل لجميع البشرة',nameEn:'All-Skin Serum 30ml',cat:'serum',price:73},
  {brand:'SOME BY ME',name:'مرطب 50مل للبشرة الحساسة',nameEn:'Sensitive Moisturizer 50ml',cat:'moisturizer',price:73},
  {brand:'SOME BY ME',name:'سيروم RETINOL INTENSE 30مل',nameEn:'Retinol Intense Serum 30ml',cat:'serum',price:79},
  {brand:'SOME BY ME',name:'تونر أزرق 150مل',nameEn:'Blue Toner 150ml',cat:'toner',price:70},
  {brand:'SOME BY ME',name:'تونر 200مل',nameEn:'Miracle Toner 200ml',cat:'toner',price:70},
  {brand:'SOME BY ME',name:'واقي شمس Truecica 50مل',nameEn:'Truecica Sunscreen 50ml',cat:'sunscreen',price:65},
  {brand:'SKIN1004',name:'سيروم CENTELLA كثيف 100مل',nameEn:'Centella Ampoule 100ml',cat:'serum',price:68},
  {brand:'SKIN1004',name:'واقي شمس CENTELLA PROBIO-CICA 50مل',nameEn:'Centella Probio-Cica Sunscreen 50ml',cat:'sunscreen',price:68},
  {brand:'SKIN1004',name:'تونر CENTELLA 210مل',nameEn:'Centella Toner 210ml',cat:'toner',price:68},
  {brand:'SKIN1004',name:'كريم عيون CENTELLA PROBIO CICA 20مل',nameEn:'Centella Probio-Cica Eye Cream 20ml',cat:'eye',price:68},
  {brand:'SKIN1004',name:'سيروم CENTELLA BRIGHTENING 100مل',nameEn:'Centella Brightening Serum 100ml',cat:'serum',price:62},
  {brand:'SKIN1004',name:'سيروم CENTELLA AMPOUL 100مل',nameEn:'Centella Ampoule 100ml',cat:'serum',price:68},
  {brand:'SKIN1004',name:'كريم Soothing Cream 75مل',nameEn:'Soothing Cream 75ml',cat:'moisturizer',price:73},
  {brand:'SKIN1004',name:'سيروم MATRIXYL 30مل',nameEn:'Matrixyl Serum 30ml',cat:'serum',price:75},
  {brand:'SKIN1004',name:'سيروم نياسينيمايد 10 30مل',nameEn:'Niacinamide 10 Serum 30ml',cat:'serum',price:75},
  {brand:'SKIN1004',name:'ماسك Poremizing Quick Clay',nameEn:'Poremizing Quick Clay Mask',cat:'mask',price:65},
  {brand:'COSRX',name:'سيروم فيتامين C 23 20مل',nameEn:'Vitamin C 23 Serum 20ml',cat:'serum',price:73,isFeatured:true},
  {brand:'COSRX',name:'سيروم فيتامين C 13 20مل',nameEn:'Vitamin C 13 Serum 20ml',cat:'serum',price:73},
  {brand:'COSRX',name:'كريم الريتانول 0.1% 20مل',nameEn:'Retinol 0.1% Cream 20ml',cat:'moisturizer',price:62},
  {brand:'COSRX',name:'لصقات حب الشباب 40 لصقة',nameEn:'Acne Pimple Patches (40)',cat:'mask',price:30},
  {brand:'COSRX',name:'واقي شمس Ultra Light 50مل',nameEn:'Ultra Light Sunscreen 50ml',cat:'sunscreen',price:65},
  {brand:'COSRX',name:'غسول الوجه رغوي 150مل',nameEn:'Foam Face Wash 150ml',cat:'cleanser',price:53},
  {brand:'COSRX',name:'كريم مرطب CENTELLA 30غم',nameEn:'Centella Moisturizer 30g',cat:'moisturizer',price:60},
  {brand:'COSRX',name:'سيروم هايلورونيك 20مل',nameEn:'Hyaluronic Acid Serum 20ml',cat:'serum',price:73},
  {brand:'COSRX',name:'سيروم نياسينماميد 20مل',nameEn:'Niacinamide Serum 20ml',cat:'serum',price:73},
  {brand:'COSRX',name:'لصقات عيون الحلزون 60لصقة',nameEn:'Snail Eye Patches (60)',cat:'eye',price:79},
  {brand:'COSRX',name:'مجموعة ترطيب الحلزون 4 قطع',nameEn:'Snail Hydration Set (4)',cat:'moisturizer',price:75},
  {brand:'COSRX',name:'غسول إزالة الرؤوس السوداء 100مل',nameEn:'Blackhead Remover 100ml',cat:'cleanser',price:65},
  {brand:'COSRX',name:'تونر بخار 150مل',nameEn:'Mist Toner 150ml',cat:'toner',price:53},
  {brand:'COSRX',name:'كريم عيون الحلزون 25مل',nameEn:'Snail Eye Cream 25ml',cat:'eye',price:79},
  {brand:'COSRX',name:'سيروم ريتانول الوجه 20مل',nameEn:'Retinol Face Serum 20ml',cat:'serum',price:73},
  {brand:'BEAUTY OF JOSEON',name:'ماء السيروم بالجينسنغ 150مل',nameEn:'Ginseng Essence Water 150ml',cat:'serum',price:65,isFeatured:true},
  {brand:'BEAUTY OF JOSEON',name:'زيت التنظيف بالجينسنغ 210مل',nameEn:'Ginseng Cleansing Oil 210ml',cat:'cleanser',price:73},
  {brand:'BEAUTY OF JOSEON',name:'واقي شمس ستيك 18غم',nameEn:'Sunscreen Stick 18g',cat:'sunscreen',price:62,isFeatured:true},
  {brand:'BEAUTY OF JOSEON',name:'سيروم الأرز بنخالة 30مل',nameEn:'Rice Bran Serum 30ml',cat:'serum',price:55},
  {brand:'BEAUTY OF JOSEON',name:'سيروم نياسينماميد 30مل',nameEn:'Niacinamide Serum 30ml',cat:'serum',price:55},
  {brand:'BEAUTY OF JOSEON',name:'سيروم الحلزون 30مل',nameEn:'Snail Serum 30ml',cat:'serum',price:55},
  {brand:'BEAUTY OF JOSEON',name:'سيروم الشاي الأخضر 30مل',nameEn:'Green Tea Serum 30ml',cat:'serum',price:55},
  {brand:'BEAUTY OF JOSEON',name:'سيروم العيون REVIVE 50مل',nameEn:'Revive Eye Serum 50ml',cat:'eye',price:63},
  {brand:'BEAUTY OF JOSEON',name:'واقي شمس الأرز 37مل',nameEn:'Rice Sunscreen 37ml',cat:'sunscreen',price:57},
  {brand:'BEAUTY OF JOSEON',name:'تونر 150مل',nameEn:'Toner 150ml',cat:'toner',price:74},
  {brand:'BEAUTY OF JOSEON',name:'تونر الحليب 250مل',nameEn:'Rice Milk Toner 250ml',cat:'toner',price:75},
  {brand:'BEAUTY OF JOSEON',name:'تونر الخوخ الأخضر 150مل',nameEn:'Green Peach Toner 150ml',cat:'toner',price:65},
  {brand:'BEAUTY OF JOSEON',name:'مرطب وجه 63مل',nameEn:'Face Moisturizer 63ml',cat:'moisturizer',price:83},
  {brand:'BEAUTY OF JOSEON',name:'ماسك وجه 150مل',nameEn:'Face Mask 150ml',cat:'mask',price:74},
  {brand:'BEAUTY OF JOSEON',name:'مرطب AQUA FRESH 50مل',nameEn:'Aqua Fresh Moisturizer 50ml',cat:'moisturizer',price:59},
  {brand:'BEAUTY OF JOSEON',name:'مرطب 100مل',nameEn:'Moisturizer 100ml',cat:'moisturizer',price:88},
  {brand:'ANUA',name:'كريم Peach 77 بحجم 50مل',nameEn:'Peach 77 Cream 50ml',cat:'moisturizer',price:85,isNew:true,isFeatured:true},
  {brand:'ANUA',name:'تونر هارتليف 77% 250مل',nameEn:'Heartleaf 77 Toner 250ml',cat:'toner',price:68,isFeatured:true},
  {brand:'ANUA',name:'تونر باد 160مل',nameEn:'Toner Pad 160ml',cat:'toner',price:78},
  {brand:'ANUA',name:'غسول رغوي 150مل',nameEn:'Foam Cleanser 150ml',cat:'cleanser',price:62},
  {brand:'ANUA',name:'كريم واقي شمس SUN 50مل',nameEn:'Sun Cream 50ml',cat:'sunscreen',price:73},
  {brand:'ANUA',name:'مرطب Conditioning 150مل',nameEn:'Conditioning Moisturizer 150ml',cat:'moisturizer',price:79},
  {brand:'ANUA',name:'سيروم نياسينماميد 30مل',nameEn:'Niacinamide Serum 30ml',cat:'serum',price:76},
  {brand:'ANUA',name:'سيروم هايلورونيك +100 30مل',nameEn:'Hyaluronic +100 Serum 30ml',cat:'serum',price:76},
  {brand:'ANUA',name:'سيروم Azelaic Acid 10 30مل',nameEn:'Azelaic Acid 10 Serum 30ml',cat:'serum',price:76},
  {brand:'ANUA',name:'لصقات وجه PDRN+هايلورونيك 60لصقة',nameEn:'PDRN+HA Face Patches (60)',cat:'mask',price:78},
  {brand:'ANUA',name:'واقي شمس 50SPF 50مل',nameEn:'Sunscreen SPF50 50ml',cat:'sunscreen',price:73},
  {brand:'ANUA',name:'غسول زيتي 200مل',nameEn:'Oil Cleanser 200ml',cat:'cleanser',price:69},
  {brand:'ANUA',name:'تونر ترطيب الخوخ 250مل',nameEn:'Peach Hydrating Toner 250ml',cat:'toner',price:79},
  {brand:'ANUA',name:'سيروم تفتيح Peach 30مل',nameEn:'Peach Brightening Serum 30ml',cat:'serum',price:77},
  {brand:'ANUA',name:'سيروم ترطيب Rice+Ceramide 7+ 50مل',nameEn:'Rice+Ceramide Serum 50ml',cat:'serum',price:77},
  {brand:'MEDICUBE',name:'كريم فيتامين C DEEP 55غم',nameEn:'Vitamin C Deep Cream 55g',cat:'moisturizer',price:82},
  {brand:'MEDICUBE',name:'ماسك Pore Blackhead Mud 100غم',nameEn:'Pore Blackhead Mud Mask 100g',cat:'mask',price:69},
  {brand:'MEDICUBE',name:'مرطب PDRN Pink Collagen 55غم',nameEn:'PDRN Pink Collagen 55g',cat:'moisturizer',price:79,isFeatured:true},
  {brand:'MEDICUBE',name:'ماسك كولاجين Kojic Acid 75مل',nameEn:'Kojic Acid Collagen Mask 75ml',cat:'mask',price:78},
  {brand:'MEDICUBE',name:'سيروم PDRN SET 10*1.5مل',nameEn:'PDRN Serum Set 10*1.5ml',cat:'serum',price:73},
  {brand:'MEDICUBE',name:'كريم تحت العين PDRN PEPTIDE 30مل',nameEn:'PDRN Peptide Eye Cream 30ml',cat:'eye',price:68},
  {brand:'MEDICUBE',name:'سيروم بنك كولاجين PDRN 30مل',nameEn:'PDRN Collagen Bank Serum 30ml',cat:'serum',price:80},
  {brand:'MEDICUBE',name:'كريم TXA نياسينماميد 55مل',nameEn:'TXA Niacinamide Cream 55ml',cat:'moisturizer',price:79},
  {brand:'MEDICUBE',name:'مرطب نهاري 50مل',nameEn:'Day Moisturizer 50ml',cat:'moisturizer',price:85},
  {brand:'MEDICUBE',name:'سيروم ONE DAY 30مل',nameEn:'One Day Serum 30ml',cat:'serum',price:78},
  {brand:'MEDICUBE',name:'غسول رغوي 120مل',nameEn:'Foam Cleanser 120ml',cat:'cleanser',price:72},
  {brand:'MEDICUBE',name:'سيروم الامبول 30مل',nameEn:'Ampoule Serum 30ml',cat:'serum',price:82},
  {brand:'MEDICUBE',name:'كريم جل الكولاجين 110مل',nameEn:'Collagen Gel Cream 110ml',cat:'moisturizer',price:83},
  {brand:'MEDICUBE',name:'سيروم NIACINAMIDE 30مل',nameEn:'Niacinamide Serum 30ml',cat:'serum',price:73},
  {brand:'MEDICUBE',name:'سيروم HYALURONIC 30مل',nameEn:'Hyaluronic Serum 30ml',cat:'serum',price:73},
  {brand:'DR. ALTHEA',name:'بلسم التفتيح CLEANSING BALB 50مل',nameEn:'Cleansing Balm 50ml',cat:'cleanser',price:68},
  {brand:'DR. ALTHEA',name:'سيروم نياسينماميد 15% 30مل',nameEn:'Niacinamide 15% Serum 30ml',cat:'serum',price:73},
  {brand:'DR. ALTHEA',name:'سيروم ريتانول 0.1% 30مل',nameEn:'Retinol 0.1% Serum 30ml',cat:'serum',price:73},
  {brand:'DR. ALTHEA',name:'كريم مرطب 345 50مل',nameEn:'Moisturizer 345 50ml',cat:'moisturizer',price:69},
  {brand:'DR. ALTHEA',name:'كريم مرطب 147 50مل',nameEn:'Moisturizer 147 50ml',cat:'moisturizer',price:69},
  {brand:'DR. ALTHEA',name:'سيروم عيون 25مل',nameEn:'Eye Serum 25ml',cat:'eye',price:53},
  {brand:'DR. ALTHEA',name:'سيروم VITAMIN C BOOSTING 30مل',nameEn:'Vitamin C Boosting Serum 30ml',cat:'serum',price:73},
  {brand:'DR. ALTHEA',name:'سيروم تفتيح VITAMIN C 30مل',nameEn:'Vitamin C Brightening Serum 30ml',cat:'serum',price:73},
  {brand:'DR. ALTHEA',name:'غسول بلسم 50مل',nameEn:'Balm Cleanser 50ml',cat:'cleanser',price:68},
  {brand:'EQQUALBERRY',name:'كريم 50مل',nameEn:'Cream 50ml',cat:'moisturizer',price:88},
  {brand:'EQQUALBERRY',name:'سيروم Bakuchiol Plumping 30مل',nameEn:'Bakuchiol Plumping Serum 30ml',cat:'serum',price:80},
  {brand:'EQQUALBERRY',name:'سيروم Vitamin Illuminating',nameEn:'Vitamin Illuminating Serum',cat:'serum',price:80},
  {brand:'EQQUALBERRY',name:'تونر مرطب بالهايلارونيك 300مل',nameEn:'Hyaluronic Hydrating Toner 300ml',cat:'toner',price:79},
  {brand:'EQQUALBERRY',name:'سيروم NAD+ PEPTIDE BOOSTING 30مل',nameEn:'NAD+ Peptide Serum 30ml',cat:'serum',price:92},
  {brand:'EQQUALBERRY',name:'سيروم HYAL TION FLOODING 30مل',nameEn:'Hyal-Tion Flooding Serum 30ml',cat:'serum',price:92},
  {brand:'EQQUALBERRY',name:'سيروم PDRN 30مل',nameEn:'PDRN Serum 30ml',cat:'serum',price:92},
  {brand:'ABIB',name:'سيروم الترطيح JERICHO ROSE 50مل',nameEn:'Jericho Rose Serum 50ml',cat:'serum',price:73},
  {brand:'ABIB',name:'سيروم HEARTLEAF TECA 50مل',nameEn:'Heartleaf Teca Serum 50ml',cat:'serum',price:73},
  {brand:'ABIB',name:'بكج العناية 30مل',nameEn:'Care Package 30ml',cat:'serum',price:85},
  {brand:'ABIB',name:'واقي شمس ستيك SPF 50+',nameEn:'Sunscreen Stick SPF 50+',cat:'sunscreen',price:72},
  {brand:'SHISEIDO',name:'كريم لحماية البشرة 7مل',nameEn:'Skin Protect Cream 7ml',cat:'moisturizer',price:290,isNew:true},
  {brand:'SHISEIDO',name:'كريم لحماية البشرة 15مل',nameEn:'Skin Protect Cream 15ml',cat:'moisturizer',price:170},
  {brand:'SHISEIDO',name:'كريم لعلاج علامات تقدم البشرة 50مل',nameEn:'Anti-Aging Cream 50ml',cat:'moisturizer',price:260},
  {brand:'FINO',name:'بلسم شعر 550مل',nameEn:'Hair Conditioner 550ml',cat:'hair',price:55},
  {brand:'FINO',name:'شامبو 550مل',nameEn:'Shampoo 550ml',cat:'hair',price:55},
  {brand:'FINO',name:'زيت شعر 70مل',nameEn:'Hair Oil 70ml',cat:'hair',price:55},
  {brand:'FINO',name:'ماسك شعر للشعر التالف 230غم',nameEn:'Damaged Hair Mask 230g',cat:'hair',price:50},
  {brand:'&HONEY',name:'بلسم شعر تالف 450مل',nameEn:'Damaged Hair Conditioner 450ml',cat:'hair',price:83},
  {brand:'&HONEY',name:'شامبو الشعر التالف 450مل',nameEn:'Damaged Hair Shampoo 450ml',cat:'hair',price:83},
  {brand:'&HONEY',name:'شامبو ترطيب للشعر الجاف 440مل',nameEn:'Dry Hair Shampoo 440ml',cat:'hair',price:83},
  {brand:'&HONEY',name:'شامبو العسل والحليب 500مل',nameEn:'Honey & Milk Shampoo 500ml',cat:'hair',price:83},
  {brand:'&HONEY',name:'بلسم العسل والحليب العلاجي 500مل',nameEn:'Honey & Milk Conditioner 500ml',cat:'hair',price:83},
  {brand:'BY ME',name:'غسول زيتي 200مل',nameEn:'Oil Cleanser 200ml',cat:'cleanser',price:73},
  {brand:'BY ME',name:'سيروم ترطيب أنا من الأرز 30مل',nameEn:'Rice Hydrating Serum 30ml',cat:'serum',price:78},
  {brand:'BY ME',name:'واقي شمس الأرز 150مل',nameEn:'Rice Sunscreen 150ml',cat:'sunscreen',price:75},
  {brand:'BY ME',name:'تونر الأرز 150مل',nameEn:'Rice Toner 150ml',cat:'toner',price:73},
  {brand:'BY ME',name:'كريم تفتيح الأرز 50مل',nameEn:'Rice Brightening Cream 50ml',cat:'moisturizer',price:83},
  {brand:'BIODANCE',name:'ماسك ترطيب Bio Collagen',nameEn:'Bio Collagen Hydrating Mask',cat:'mask',price:73,isFeatured:true},
  {brand:'BIODANCE',name:'ماسك SEA KELP',nameEn:'Sea Kelp Mask',cat:'mask',price:73},
  {brand:'BIODANCE',name:'ماسك بالنياسينماميد',nameEn:'Niacinamide Mask',cat:'mask',price:73},
  {brand:'BIODANCE',name:'ماسك HYDRO CERA NOL 34غم',nameEn:'Hydro Cera-Nol Mask 34g',cat:'mask',price:73},
  {brand:'PIXI',name:'لصقات عيون',nameEn:'Eye Patches',cat:'eye',price:100},
  {brand:'HARUHARU',name:'غسول زيتي ومرطب 100مل',nameEn:'Oil Cleanser & Moisturizer 100ml',cat:'cleanser',price:75},
  {brand:'TSUBAKI',name:'شامبو 500مل',nameEn:'Shampoo 500ml',cat:'hair',price:75},
  {brand:'TSUBAKI',name:'بلسم شعر 500مل',nameEn:'Conditioner 500ml',cat:'hair',price:75},
  {brand:'TSUBAKI',name:'كريم إصلاح الشعر 180غم',nameEn:'Hair Repair Cream 180g',cat:'hair',price:55},
  {brand:'SECRET KEY',name:'كريم SNOW WHITE تفتيح 200مل',nameEn:'Snow White Brightening Cream 200ml',cat:'moisturizer',price:65},
  {brand:'SECRET KEY',name:'كريم SNOW WHITE 50غم',nameEn:'Snow White Cream 50g',cat:'moisturizer',price:60},
  {brand:'SECRET KEY',name:'جل تفتيح الوجه SNOW WHITE 65مل',nameEn:'Snow White Face Gel 65ml',cat:'moisturizer',price:60},
  {brand:'MOMS BATH',name:'لوشن للوجه والجسم 150مل',nameEn:'Face & Body Lotion 150ml',cat:'moisturizer',price:155},
  {brand:'MOMS BATH',name:'ليفة التقشير PEELING PAD GREEN',nameEn:'Peeling Pad Green',cat:'mask',price:95},
  {brand:'MOMS BATH',name:'ليفة التقشير TROUBLE CARE PINK',nameEn:'Trouble Care Pink Pad',cat:'mask',price:95},
];

/* ─── LANGUAGE ─────────────────────────────────────── */
const T = {
  ar: {
    home:'الرئيسية', shop:'المتجر', about:'من نحن', contact:'تواصل معنا', reviews:'آراء العملاء',
    cart:'سلة التسوق', cartEmpty:'سلتك فارغة', total:'الإجمالي',
    sendWa:'إرسال عبر واتساب', goOrder:'إكمال الطلب',
    addToCart:'أضيفي للسلة', added:'تمت الإضافة',
    all:'الكل', serum:'سيروم', moisturizer:'مرطب', cleanser:'غسول',
    sunscreen:'واقي شمس', toner:'تونر', eye:'عيون', mask:'ماسك', hair:'شعر',
    searchPlaceholder:'ابحثي عن منتج أو ماركة...',
    showingProducts:'منتج',
    addedToast:'تمت الإضافة للسلة',
  },
  en: {
    home:'Home', shop:'Shop', about:'About', contact:'Contact', reviews:'Reviews',
    cart:'Your Bag', cartEmpty:'Your bag is empty', total:'Total',
    sendWa:'Send via WhatsApp', goOrder:'Complete Order',
    addToCart:'Add to Bag', added:'Added',
    all:'All', serum:'Serum', moisturizer:'Moisturizer', cleanser:'Cleanser',
    sunscreen:'Sunscreen', toner:'Toner', eye:'Eyes', mask:'Masks', hair:'Hair',
    searchPlaceholder:'Search a product or brand...',
    showingProducts:'products',
    addedToast:'Added to your bag',
  }
};

function getLang(){ return localStorage.getItem('kawthar_lang') || 'ar'; }
function t(key){ return T[getLang()][key] || key; }

function applyLang(lang){
  localStorage.setItem('kawthar_lang', lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = html.dir;
  // Nav always stays LTR regardless of language
  const navEl = document.querySelector('nav');
  if(navEl) navEl.dir = 'ltr';

  // Swap every [data-ar][data-en] element's text
  document.querySelectorAll('[data-ar][data-en]').forEach(el=>{
    const val = el.getAttribute('data-' + lang);
    if(val !== null) el.textContent = val;
  });
  // Swap placeholders
  document.querySelectorAll('[data-ar-placeholder][data-en-placeholder]').forEach(el=>{
    el.placeholder = el.getAttribute('data-' + lang + '-placeholder') || '';
  });
  // Title
  const titleEl = document.querySelector('title[data-ar][data-en]');
  if(titleEl){
    document.title = titleEl.getAttribute('data-' + lang) || document.title;
  }
  // Update toggle indicator
  document.querySelectorAll('.lang-toggle').forEach(btn=>{
    btn.querySelectorAll('.lang-active').forEach(e=>e.classList.remove('lang-active'));
    btn.querySelector(`.lang-${lang}`)?.classList.add('lang-active');
  });
  // Re-render products if shop
  if(typeof window.renderActiveProducts === 'function') window.renderActiveProducts();
  // Re-render cart
  updateCartUI();
}

function toggleLang(){
  applyLang(getLang() === 'ar' ? 'en' : 'ar');
}

/* ─── THEME ─────────────────────────────────────── */
function getTheme(){ return localStorage.getItem('kawthar_theme') || 'light'; }
function applyTheme(theme){
  localStorage.setItem('kawthar_theme', theme);
  document.body.classList.toggle('dark', theme === 'dark');
  document.querySelectorAll('.theme-switch input').forEach(i => i.checked = (theme === 'dark'));
}
function toggleTheme(){
  applyTheme(getTheme() === 'light' ? 'dark' : 'light');
}

/* ─── MOBILE NAV ─────────────────────────────────────── */
function toggleMobileNav(){
  document.querySelector('.nav-links')?.classList.toggle('open');
}

/* ─── CART ─────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('kawthar_cart') || '[]');

function saveCart(){ localStorage.setItem('kawthar_cart', JSON.stringify(cart)); }

function addToCart(product, btn){
  cart.push(product);
  saveCart();
  updateCartUI();
  showToast(t('addedToast'));
  if(btn){
    btn.classList.add('added');
    const label = btn.querySelector('.btn-label');
    const orig = label ? label.textContent : '';
    if(label) label.textContent = t('added');
    setTimeout(()=>{
      btn.classList.remove('added');
      if(label) label.textContent = orig;
    }, 1800);
  }
}

function removeFromCart(i){
  cart.splice(i,1);
  saveCart();
  updateCartUI();
}

function updateCartUI(){
  const lang = getLang();
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = cart.length);

  const itemsEl = document.getElementById('cartItems');
  if(!itemsEl) return;
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if(cart.length === 0){
    itemsEl.innerHTML = `
      <div class="cart-empty">
        ${ICONS.bag}
        <span>${t('cartEmpty')}</span>
      </div>`;
    if(footerEl) footerEl.style.display = 'none';
    syncHiddenCart();
    return;
  }

  const total = cart.reduce((s,p)=>s+p.price, 0);
  if(footerEl) footerEl.style.display = 'block';
  if(totalEl) totalEl.textContent = total;

  itemsEl.innerHTML = cart.map((p,i)=>{
    const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
    return `
    <div class="cart-item">
      <div class="cart-item-img">${catIcon[p.cat] || ICONS.sparkle}</div>
      <div class="cart-item-info">
        <div class="brand">${p.brand}</div>
        <h4>${name}</h4>
        <span class="price">₪${p.price}</span>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${i})" aria-label="remove">${ICONS.close}</button>
    </div>`;
  }).join('');

  syncHiddenCart();
}

function syncHiddenCart(){
  const hc = document.getElementById('hiddenCart');
  const ht = document.getElementById('hiddenTotal');
  const box = document.getElementById('cartSummaryBox');
  const total = cart.reduce((s,p)=>s+p.price, 0);
  const lang = getLang();
  if(cart.length === 0){
    if(hc) hc.value = '';
    if(ht) ht.value = '';
    if(box){ box.style.display = 'none'; box.innerHTML = ''; }
    return;
  }
  const lines = cart.map(p=>{
    const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
    return `• ${p.brand} — ${name} (₪${p.price})`;
  });
  const text = lines.join('\n') + `\n\n${t('total')}: ₪${total}`;
  if(hc) hc.value = text;
  if(ht) ht.value = `₪${total}`;
  if(box){
    box.style.display = 'block';
    box.innerHTML = `<strong>${t('cart')}</strong><br>${lines.join('<br>')}<br><br><strong>${t('total')}: ₪${total}</strong>`;
  }
}

function toggleCart(){
  const m = document.getElementById('cartModal');
  if(!m) return;
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}
function closeCartOutside(e){
  if(e.target.id === 'cartModal') toggleCart();
}

function sendWhatsApp(){
  if(cart.length === 0){
    showToast(t('cartEmpty'));
    return;
  }
  const lang = getLang();
  const total = cart.reduce((s,p)=>s+p.price, 0);
  const greeting = lang === 'en' ? 'Hi Kawthar,' : 'مرحبا كوثر,';
  const wantLine = lang === 'en' ? 'I would like to order:' : 'أريد طلب:';
  const totalLabel = t('total');
  const items = cart.map(p=>{
    const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
    return `• ${p.brand} - ${name} (₪${p.price})`;
  }).join('%0A');
  const msg = `${encodeURIComponent(greeting)}%0A${encodeURIComponent(wantLine)}%0A${items}%0A%0A${encodeURIComponent(totalLabel)}: ₪${total}`;
  window.open(`https://wa.me/972599269950?text=${msg}`, '_blank');
}

/* ─── TOAST ─────────────────────────────────────── */
function showToast(msg){
  let el = document.querySelector('.toast');
  if(!el){
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.innerHTML = ICONS.check + `<span>${msg}</span>`;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=>el.classList.remove('show'), 2200);
}

/* ─── PRODUCT CARD HTML ─────────────────────────────── */
function productCardHTML(p, index){
  const lang = getLang();
  const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
  return `
    <article class="product-card" data-idx="${index}">
      ${p.isNew ? `<span class="new-badge" data-ar="جديد" data-en="New">${lang==='en'?'New':'جديد'}</span>` : ''}
      <div class="product-img-wrap">
        ${catIcon[p.cat] || ICONS.sparkle}
      </div>
      <span class="brand-badge">${p.brand}</span>
      <div class="product-info">
        <div class="product-brand-label">${p.brand}</div>
        <h3>${name}</h3>
        <div class="product-footer">
          <span class="product-price">₪${p.price}</span>
          <button class="add-btn" data-add="${index}" aria-label="add to cart">
            ${ICONS.plus}<span class="btn-label">${t('addToCart')}</span>
          </button>
        </div>
      </div>
    </article>`;
}

/* Event delegation for add-to-cart — binds once */
function bindAddToCart(sourceArrayName){
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.add-btn');
    if(!btn || !btn.dataset.add) return;
    const arr = window[sourceArrayName || 'filteredProducts'] || products;
    const p = arr[parseInt(btn.dataset.add, 10)];
    if(p) addToCart({...p}, btn);
  });
}

/* ─── ORDER FORM ─────────────────────────────────── */
async function submitOrder(e){
  e.preventDefault();
  const form = e.target;
  const btn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMsg');
  const lang = getLang();

  // Snapshot cart before reset
  const cartSnap = cart.slice();
  const total = cartSnap.reduce((s,p)=>s+p.price, 0);
  const cartText = cartSnap.length > 0
    ? cartSnap.map(p=>{
        const name = lang === 'en' && p.nameEn ? p.nameEn : p.name;
        return `• ${p.brand} — ${name} (₪${p.price})`;
      }).join('\n') + `\n\n${t('total')}: ₪${total}`
    : (lang==='en' ? 'No items in cart' : 'لا توجد منتجات في السلة');

  document.getElementById('hiddenCart').value  = cartText;
  document.getElementById('hiddenTotal').value = cartSnap.length > 0 ? `₪${total}` : '—';

  const origText = btn.querySelector('.btn-label')?.textContent || btn.textContent;
  const sending = lang === 'en' ? 'Sending...' : 'جاري الإرسال...';
  if(btn.querySelector('.btn-label')) btn.querySelector('.btn-label').textContent = sending;
  else btn.textContent = sending;
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/mlganzkw', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if(!res.ok) throw new Error('Formspree error');

    // Save order to dashboard log
    const orders = JSON.parse(localStorage.getItem('kawthar_orders') || '[]');
    orders.unshift({
      date: new Date().toISOString(),
      name: form.name?.value || '',
      phone: form.phone?.value || '',
      city: form.city?.value || '',
      items: cartSnap,
      total,
    });
    localStorage.setItem('kawthar_orders', JSON.stringify(orders.slice(0, 50)));

    form.reset();
    cart = [];
    saveCart();
    updateCartUI();
    successMsg.style.display = 'block';
    btn.style.display = 'none';

    // Forward to WhatsApp
    const name  = form.querySelector('[name=name]')?.value  || '';
    const phone = form.querySelector('[name=phone]')?.value || '';
    const city  = form.querySelector('[name=city]')?.value  || '';
    const waItems = cartSnap.length > 0
      ? cartSnap.map(p=>{
          const nm = lang === 'en' && p.nameEn ? p.nameEn : p.name;
          return `• ${p.brand} - ${nm} (₪${p.price})`;
        }).join('%0A')
      : encodeURIComponent(cartText);
    const hdr = lang === 'en' ? 'New order from website:' : 'طلب جديد من الموقع:';
    const nmL = lang === 'en' ? 'Name' : 'الاسم';
    const phL = lang === 'en' ? 'WhatsApp' : 'واتساب';
    const ctL = lang === 'en' ? 'City' : 'المدينة';
    const itL = lang === 'en' ? 'Items' : 'المنتجات';
    const waMsg = `${encodeURIComponent('مرحبا كوثر,')}%0A${encodeURIComponent(hdr)}%0A${encodeURIComponent(nmL)}: ${encodeURIComponent(name)}%0A${encodeURIComponent(phL)}: ${encodeURIComponent(phone)}%0A${encodeURIComponent(ctL)}: ${encodeURIComponent(city)}%0A%0A${encodeURIComponent(itL)}:%0A${waItems}`;
    setTimeout(()=>{ window.open(`https://wa.me/972599269950?text=${waMsg}`, '_blank'); }, 600);
  } catch(err){
    const errText = lang === 'en' ? 'Something went wrong — try again' : 'حصل خطأ — حاولي مجدداً';
    if(btn.querySelector('.btn-label')) btn.querySelector('.btn-label').textContent = errText;
    else btn.textContent = errText;
    btn.disabled = false;
    setTimeout(()=>{
      if(btn.querySelector('.btn-label')) btn.querySelector('.btn-label').textContent = origText;
      else btn.textContent = origText;
      btn.disabled = false;
    }, 3000);
  }
}

/* ─── NAV & CART MODAL INJECTION (builds shared UI from data attrs) ─── */
function mountNav(options = {}){
  const navEl = document.querySelector('nav');
  if(!navEl) return;
  navEl.dir = 'ltr';
  const active = options.active || '';
  navEl.innerHTML = `
    <a href="index.html" class="nav-logo">K<span>aw</span>thar</a>
    <button class="mobile-menu-btn" onclick="toggleMobileNav()" aria-label="menu">${ICONS.menu}</button>
    <ul class="nav-links">
      <li><a href="index.html" ${active==='home'?'class="active"':''} data-ar="الرئيسية" data-en="Home">الرئيسية</a></li>
      <li><a href="shop.html" ${active==='shop'?'class="active"':''} data-ar="المتجر" data-en="Shop">المتجر</a></li>
      <li><a href="about.html" ${active==='about'?'class="active"':''} data-ar="من نحن" data-en="About">من نحن</a></li>
      <li><a href="about.html#contact" ${active==='contact'?'class="active"':''} data-ar="تواصل" data-en="Contact">تواصل</a></li>
    </ul>
    <div class="nav-tools">
      <button class="lang-toggle" onclick="toggleLang()" aria-label="language">
        <span class="lang-ar">ع</span><span class="lang-sep">/</span><span class="lang-en">EN</span>
      </button>
      <label class="theme-switch" aria-label="theme">
        <input type="checkbox" onchange="toggleTheme()">
        <span class="theme-slider"></span>
      </label>
      <button class="cart-btn" onclick="toggleCart()" aria-label="cart">
        ${ICONS.bag}
        <span class="cart-count" id="cartCount">0</span>
      </button>
    </div>
  `;
}

function mountCartModal(){
  if(document.getElementById('cartModal')) return;
  const lang = getLang();
  const d = document.createElement('div');
  d.innerHTML = `
    <div class="cart-modal" id="cartModal" onclick="closeCartOutside(event)">
      <div class="cart-panel">
        <div class="cart-header">
          <h2 data-ar="سلة التسوق" data-en="Your Bag">${lang==='en'?'Your Bag':'سلة التسوق'}</h2>
          <button class="close-cart" onclick="toggleCart()" aria-label="close">${ICONS.close}</button>
        </div>
        <div class="cart-items" id="cartItems"></div>
        <div class="cart-footer" id="cartFooter" style="display:none">
          <div class="cart-total">
            <span data-ar="الإجمالي" data-en="Total">${lang==='en'?'Total':'الإجمالي'}</span>
            <span>₪<span id="cartTotal">0</span></span>
          </div>
          <button class="btn btn-gold" style="width:100%;margin-bottom:10px" onclick="sendWhatsApp()">
            ${ICONS.wa}<span data-ar="إرسال عبر واتساب" data-en="Send via WhatsApp">${lang==='en'?'Send via WhatsApp':'إرسال عبر واتساب'}</span>
          </button>
          <a href="about.html#contact" class="btn btn-soft" style="width:100%" data-ar="إكمال الطلب" data-en="Complete Order">${lang==='en'?'Complete Order':'إكمال الطلب'}</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(d.firstElementChild);
}

function mountWhatsApp(){
  if(document.querySelector('.wa-float')) return;
  const a = document.createElement('a');
  a.href = 'https://wa.me/972599269950';
  a.target = '_blank';
  a.className = 'wa-float';
  a.setAttribute('aria-label', 'WhatsApp');
  a.innerHTML = ICONS.wa;
  document.body.appendChild(a);
}

function mountFooter(){
  const footer = document.querySelector('footer');
  if(!footer) return;
  footer.innerHTML = `
    <div class="footer-brand">K<span>aw</span>thar</div>
    <div class="footer-links">
      <a href="index.html" data-ar="الرئيسية" data-en="Home">الرئيسية</a>
      <a href="shop.html" data-ar="المتجر" data-en="Shop">المتجر</a>
      <a href="about.html" data-ar="من نحن" data-en="About">من نحن</a>
      <a href="about.html#contact" data-ar="تواصل" data-en="Contact">تواصل</a>
    </div>
    <div class="copyright">
      &copy; 2026 <span>Kawthar Skincare</span>
    </div>
  `;
}

function mountBrandsBar(){
  const bar = document.querySelector('.brands-bar');
  if(!bar) return;
  const names = ['COSRX','BEAUTY OF JOSEON','ANUA','TOCOBO','ROUND LAB','NUMBUZN','MEDICUBE','SOME BY ME','SKIN1004','AXIS-Y','PURITO','DR. ALTHEA','HARUHARU','ABIB','BIODANCE','SHISEIDO'];
  const one = names.map(n => `<span>${n}</span><span class="dot">·</span>`).join('');
  bar.innerHTML = `<div class="brands-track">${one}${one}</div>`;
}

/* ─── INIT (every page) ─── */
function initKawthar(options = {}){
  mountNav(options);
  mountCartModal();
  mountWhatsApp();
  mountFooter();
  mountBrandsBar();
  applyTheme(getTheme());
  applyLang(getLang());
  updateCartUI();
  bindAddToCart(options.source);
}
