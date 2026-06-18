window.REGION = {
  id: 'noda',
  name: 'NoDa',
  sub: '· NORTH DAVIDSON · CHARLOTTE · NORTH CAROLINA · 2026 EDITION ·',
  credit: '© NoDa Map · 2026 · leisurelymaps.com',
  interactiveCredit: 'Click any marker · Pan &amp; zoom to explore · leisurelymaps.com',
  center: [35.2270, -80.8130],
  zoom: 15,
  printZoom: 14.8,
  printCenter: [35.2270, -80.8130],

  palette: {
    '--ink':          '#1A2A2E',
    '--frame':        '#1E5C6A',
    '--parch':        '#FAF7F2',
    '--parch-dark':   '#EEE8DC',
    '--accent':       '#C4873A',
    '--navy':         '#1E5C6A',
    '--inner-border': '#A8C8D0',
    '--tile-filter':  'saturate(1.1) contrast(1.0) brightness(1.02)',
    '--tile-blend':   'normal',
    '--tile-opa':     '1',
    '--cartouche-bg': 'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 7px), #FAF7F2',
  },

  cats: {
    brewery: '#1E6A7A',
    food:    '#C4603A',
    coffee:  '#7A4A8A',
    arts:    '#2A8A5A',
    music:   '#C4873A',
  },

  legend: [
    { color: '#1E6A7A', label: 'Brew &amp; Bar' },
    { color: '#C4603A', label: 'Eat &amp; Drink' },
    { color: '#7A4A8A', label: 'Coffee &amp; Bakery' },
    { color: '#2A8A5A', label: 'Arts &amp; Culture' },
    { color: '#C4873A', label: 'Live Music' },
  ],

  places: [

    /* ── BREW & BAR ── */
    { lat:35.2295, lon:-80.8198, n:1, cat:'brewery',
      name:'NoDa Brewing Company',
      short:'NoDa\'s flagship craft brewery · taproom · patio',
      desc:'The brewery that put NoDa on the map — award-winning craft beers including the legendary Hop, Drop \'N Roll IPA, poured in a lively taproom with a massive outdoor patio and food trucks on weekends.',
      meta:'2921 N Tryon St · NoDa · nodabrewing.com',
      img:'https://static.wixstatic.com/media/304557_d153a4b14edc4a299bb1574c591f7a78~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85/IMG_8806.jpg',
      price:'$$', tags:['outdoor','dogs','local'] },

    { lat:35.2188, lon:-80.8108, n:2, cat:'brewery',
      name:'Free Range Brewing',
      short:'Creative craft ales · experimental · local',
      desc:'One of NoDa\'s most creative and adventurous craft breweries — constantly rotating small-batch experimental ales, sours, and lagers in a welcoming neighborhood taproom.',
      meta:'2320 N Davidson St · NoDa · freerangebrewing.com',
      img:'https://cdn.prod.website-files.com/67e6f311bb03f0a794f28da3/686af5e71036f1084e2d3c38_About%201.png',
      price:'$$', tags:['local','dogs'] },

    { lat:35.2155, lon:-80.8095, n:3, cat:'brewery',
      name:'Birdsong Brewing Co',
      short:'Dog-friendly brewery · taproom · live music',
      desc:'A beloved NoDa institution — approachable, well-crafted ales and lagers in a dog-friendly taproom that regularly hosts live music. Birdsong is the heartbeat of the neighborhood.',
      meta:'1016 N Davidson St · NoDa · birdsongbrewing.com',
      img:'https://cdn.spotapps.co/spothopper/image/fetch/f_auto,q_auto:best,c_fit,h_600/http://static.spotapps.co/spots/94/8c451b5aa44c948efa521c8eccb94e/:original',
      price:'$', tags:['outdoor','dogs','livemusic','local'] },

    { lat:35.2258, lon:-80.8093, n:4, cat:'brewery',
      name:'Idlewild',
      short:'No-menu craft cocktails · intimate · artful',
      desc:'Charlotte\'s most talked-about bar — a no-menu craft cocktail experience where bartenders craft a bespoke drink based on your mood, preferences, and personality. No two visits are the same.',
      meta:'424 E 36th St · NoDa · idlewildbar.com',
      img:'https://images.squarespace-cdn.com/content/v1/646276441234df04f4d52bbc/726c8ee0-430a-4e72-b925-8053e3e2d36d/backbar.jpg',
      price:'$$$', tags:['date','local'] },

    { lat:35.2292, lon:-80.8112, n:5, cat:'brewery',
      name:'Heist Brewery + Barrel Arts',
      short:'Craft beer · wood-fired pizza · barrel-aged spirits',
      desc:'An ambitious NoDa stalwart — craft beers, house-distilled spirits, and wood-fired pizzas in a stunning industrial space. The barrel-aged program is among Charlotte\'s finest.',
      meta:'2909 N Davidson St · NoDa · heistbrewery.com',
      img:'https://heistbrewery.com/wp-content/uploads/2025/06/beer-chronicle-houston-heist-brewery-and-barrel-arts-building-1024x550.jpg',
      price:'$$', tags:['date','local'] },

    { lat:35.2310, lon:-80.8113, n:6, cat:'brewery',
      name:'Salud Cerveceria',
      short:'Craft beer · wood-fired pizza · neighborhood gem',
      desc:'A laid-back NoDa brewpub pouring house-crafted beers alongside killer wood-fired pizzas and tacos. The back patio is one of Charlotte\'s best-kept secrets for a warm evening.',
      meta:'3306 N Davidson St · NoDa · saludcerveceria.com',
      img:'https://cdn.spotapps.co/spothopper/image/fetch/f_auto,q_auto:best,c_fit,h_600/http://static.spotapps.co/spots/83/ab911a8e70449881411a826a93d023/:original',
      price:'$$', tags:['outdoor','local'] },

    /* ── EAT & DRINK ── */
    { lat:35.2245, lon:-80.8115, n:7, cat:'food',
      name:'Brooks\' Sandwich House',
      short:'Iconic since 1973 · best burger in NC · cash only',
      desc:'A NoDa legend since 1973 — simple, perfect cheeseburgers and hot dogs from a tiny walk-up window. Named "Best Burger in NC" by Reader\'s Digest. Cash only, line out the door, worth every minute.',
      meta:'2710 N Anderson St · NoDa · Cash only',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/4c/0c/e3/brooks-sandwich-house.jpg?w=900&h=500&s=1',
      price:'$', tags:['local'] },

    { lat:35.2460, lon:-80.8071, n:18, cat:'food',
      name:'The Goodyear House',
      short:'Elevated comfort food · garden patio · 1900s mill home',
      desc:'One of NoDa\'s most beloved dinner spots — elevated comfort food with a Southern twist served in a charming 1900s mill home with a garden patio. The smoked cashew mac is legendary.',
      meta:'3032 N Davidson St · NoDa · thegoodyearhouse.com',
      img:'https://images.squarespace-cdn.com/content/v1/68377c16a5bc91693f69bf03/1750968229047-RP82GJ307Z9JRK2176XN/Street+shot.jpg',
      price:'$$', tags:['date','local'] },

    { lat:35.2340, lon:-80.8112, n:8, cat:'food',
      name:'Divine Barrel Brewing',
      short:'Craft beer · comfort food · neighborhood hangout',
      desc:'A newer NoDa favorite combining inventive craft beers with thoughtfully prepared comfort food. The cozy taproom and welcoming staff make Divine Barrel a go-to for locals.',
      meta:'3701 N Davidson St · NoDa · divinebarrel.com',
      img:'https://divinebarrel.com/wp-content/uploads/2021/06/DBB_Taproom_Home.jpg',
      price:'$$', tags:['local'] },

    /* ── COFFEE & BAKERY ── */
    { lat:35.2260, lon:-80.8094, n:9, cat:'coffee',
      name:'Smelly Cat Coffeehouse',
      short:'NoDa\'s indie café · house roasts · live music',
      desc:'The soul of NoDa in coffee form — a beloved indie coffeehouse roasting their own beans and serving expertly crafted espresso drinks in a cozy, art-filled space. Live acoustic music most evenings.',
      meta:'514 E 36th St · NoDa · smellycatcoffee.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/b3/3a/exterior.jpg?w=900&h=500&s=1',
      price:'$', tags:['livemusic','local','dogs'] },

    { lat:35.2212, lon:-80.8109, n:10, cat:'coffee',
      name:'Amélie\'s French Bakery',
      short:'French pastries · macarons · 24 hours',
      desc:'Charlotte\'s favorite French bakery — impossibly good croissants, fresh macarons, soups, and sandwiches in an eclectic, art-filled space that never closes. A true NoDa institution.',
      meta:'2424 N Davidson St · NoDa · ameliesfrenchbakery.com',
      img:'https://ameliesfrenchbakery.com/wp-content/uploads/2025/07/Banner-With-Shadow-Small-Image.jpg',
      price:'$', tags:['brunch','local'] },

    { lat:35.2148, lon:-80.8102, n:16, cat:'coffee',
      name:'The Hobbyist',
      short:'Coffee · craft beer · wine · bottle shop',
      desc:'A beautifully designed neighborhood coffee and bottle shop — handcrafted espresso drinks by day, curated craft beer and natural wines by night. One of NoDa\'s most beloved hangouts.',
      meta:'2100 N Davidson St · NoDa · thehobbyistclt.com',
      img:'https://images.squarespace-cdn.com/content/v1/5b5cd922f93fd4d27a301b26/1573918178871-WGC4Q00PZNX67QPTBXL8/IMG_1280.jpg',
      price:'$$', tags:['local','date'] },

    { lat:35.2428, lon:-80.8382, n:17, cat:'coffee',
      name:'HEX Coffee',
      short:'Specialty coffee · natural wines · Camp North End',
      desc:'A stunning specialty coffee bar and natural wine shop inside Camp North End — exceptional single-origin espresso and filter coffee, plus a thoughtful selection of natural and low-intervention wines.',
      meta:'201 Camp Rd · Camp North End · hexclt.com',
      img:'https://images.squarespace-cdn.com/content/v1/63a0b9ad75041d4263ce2f56/d87a13f4-1a9a-4204-b3e4-caa1dc850f34/DSC05517.jpg',
      price:'$$', tags:['local','date'] },

    /* ── ARTS & CULTURE ── */
    { lat:35.2240, lon:-80.8118, n:11, cat:'arts',
      name:'Charlotte Art League',
      short:'Gallery · studios · classes · art crawls',
      desc:'The creative hub of NoDa — a combined gallery and working studio complex hosting rotating exhibitions, artist residencies, and the famous NoDa Gallery Crawl held on the first and third Fridays of each month.',
      meta:'315 E Tremont Ave · NoDa · queencityart.org',
      img:'https://images.squarespace-cdn.com/content/v1/62d572107b816d40b51c7e11/67af4b28-5f3e-4af2-aa54-9bbc0c7d5fc7/IMG_6009+2.jpeg',
      tags:['local'] },

    { lat:35.2430, lon:-80.8380, n:12, cat:'arts',
      name:'Camp North End',
      short:'Arts · food · music · historic site',
      desc:'Charlotte\'s most exciting adaptive reuse project — a sprawling former Ford assembly plant and Army depot transformed into a vibrant campus of art studios, restaurants, food halls, music venues, and creative spaces.',
      meta:'1701 N Graham St · Camp North End · camp.nc',
      img:'https://camp.nc/wp-content/uploads/2026/01/KCN425-6274-scaled-e1768337461929-1200x656.jpg',
      tags:['family','outdoor','local'] },

    { lat:35.2480, lon:-80.8550, n:19, cat:'arts',
      name:'Independent Picture House',
      short:'Non-profit indie cinema · arthouse · community',
      desc:'Charlotte\'s beloved non-profit arthouse cinema — four intimate auditoriums screening independent, foreign, and documentary films in a beautifully designed space. A true cultural gem near NoDa.',
      meta:'4237 Raleigh St · NoDa · independentpicturehouse.org',
      img:'https://clture.org/wp-content/uploads/2022/08/Main-Exterior-1-scaled.jpg',
      tags:['local','date','family'] },

    { lat:35.2198, lon:-80.8105, n:13, cat:'arts',
      name:'Optimist Hall',
      short:'Food hall · bars · shopping · creative hub',
      desc:'A buzzing converted textile mill housing Charlotte\'s most eclectic mix of restaurants, bars, boutiques, and studios. Whether you\'re coming for tacos, cocktails, or just to wander, Optimist Hall delivers.',
      meta:'1115 N Brevard St · NoDa · optimisthall.com',
      img:'https://static.wixstatic.com/media/80d106_c7943455623a40a982b067a476bd2950~mv2.jpg',
      price:'$$', tags:['family','local'] },

    /* ── LIVE MUSIC ── */
    { lat:35.2256, lon:-80.8096, n:14, cat:'music',
      name:'Neighborhood Theatre',
      short:'Iconic live music venue · all genres · intimate',
      desc:'One of Charlotte\'s most beloved live music venues — an intimate 1,000-capacity former movie theater that has hosted everyone from indie darlings to platinum-selling artists. Every show feels special here.',
      meta:'511 E 36th St · NoDa · neighborhoodtheatre.com',
      img:'https://neighborhoodtheatre.com/wp-content/uploads/2026/06/fp_2048x1152.jpg',
      price:'$$', tags:['livemusic','local','date'] },

    { lat:35.2315, lon:-80.8109, n:15, cat:'music',
      name:'The Evening Muse',
      short:'Intimate live music · original artists · legendary',
      desc:'Charlotte\'s most intimate and beloved live music room — a tiny, legendary venue on N Davidson St that has launched countless careers and remains the beating heart of Charlotte\'s original music scene.',
      meta:'3227 N Davidson St · NoDa · eveningmuse.com',
      img:'https://static.spacecrafted.com/dcb786f3d04b4a8e807bd17c14946719/i/d95ac2758ad34c218617d7cdc0c17921/1/4SoifmQp45JMgBnHfDivx/evening-muse.jpg',
      price:'$', tags:['livemusic','local','date'] },

  ],

  streetLabels: [
    { lat: 35.2220, lon: -80.8118, name: 'N Davidson St', rotate: 75 },
    { lat: 35.2258, lon: -80.8070, name: 'E 36th St', rotate: 0 },
    { lat: 35.2300, lon: -80.8145, name: 'N Tryon St', rotate: 75 },
    { lat: 35.2240, lon: -80.8055, name: 'N Davidson St', rotate: 75 },
  ],

  landmarks: [
    { lat: 35.2272, lon: -80.8065, name: 'NoDa Station (LYNX)', type: 'gov' },
    { lat: 35.2230, lon: -80.8090, name: 'Parking', type: 'parking' },
    { lat: 35.2270, lon: -80.8110, name: 'Parking', type: 'parking' },
    { lat: 35.2300, lon: -80.8080, name: 'Parking', type: 'parking' },
  ],

  areaLabels: [
    { lat: 35.2270, lon: -80.8100, name: 'NoDa' },
    { lat: 35.2250, lon: -80.8080, name: 'N Davidson St Arts District' },
    { lat: 35.2430, lon: -80.8370, name: 'Camp North End' },
  ],

  printRails: {
    top: [
      { head: '🎶 Live Music', cls: 'fam', nums: [14, 15], lightText: true },
      { head: '☕ Coffee &amp; Bakery', cls: 'coffee', nums: [9, 10, 16, 17] },
    ],
    left: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [18, 7, 8] },
    ],
    right: [
      { head: '🎨 Arts &amp; Culture', cls: 'arts', nums: [11, 12, 13] },
    ],
    mapBelow: [],
    bottom: [
      { head: '🍺 Brew &amp; Bar', cls: 'coffee', nums: [1, 2, 3, 4, 5, 6] },
    ],
  },

  tileUrl: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=30c01ea6-0e8d-430d-a6ef-863306b083bf',
  tileAttrib: '© Stadia Maps · © Stamen Design · © OpenStreetMap contributors',
  labelsUrl: 'https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}.png?api_key=30c01ea6-0e8d-430d-a6ef-863306b083bf',
  labelsOpacity: 0.6,

  zoom: 15,
  printZoom: 14.8,
};
