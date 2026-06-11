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
    '--ink':          '#0F0F1A',
    '--frame':        '#1A1A2E',
    '--parch':        '#F8F5F0',
    '--parch-dark':   '#EDE8DF',
    '--accent':       '#E63975',
    '--navy':         '#1A1A2E',
    '--inner-border': '#BBBBCC',
    '--tile-filter':  'saturate(1.4) contrast(1.08) brightness(1.0) hue-rotate(-10deg)',
    '--tile-blend':   'normal',
    '--tile-opa':     '1',
    '--cartouche-bg': 'repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 7px), #F8F5F0',
  },

  cats: {
    brewery: '#2D6EA8',
    food:    '#E8522A',
    coffee:  '#7B3FA0',
    arts:    '#1DAF6E',
    music:   '#E63975',
  },

  legend: [
    { color: '#2D6EA8', label: 'Brew &amp; Bar' },
    { color: '#E8522A', label: 'Eat &amp; Drink' },
    { color: '#7B3FA0', label: 'Coffee &amp; Bakery' },
    { color: '#1DAF6E', label: 'Arts &amp; Culture' },
    { color: '#E63975', label: 'Live Music' },
  ],

  places: [

    /* ── BREW & BAR ── */
    { lat:35.2295, lon:-80.8198, n:1, cat:'brewery',
      name:'NoDa Brewing Company',
      short:'NoDa\'s flagship craft brewery · taproom · patio',
      desc:'The brewery that put NoDa on the map — award-winning craft beers including the legendary Hop, Drop \'N Roll IPA, poured in a lively taproom with a massive outdoor patio and food trucks on weekends.',
      meta:'2921 N Tryon St · NoDa · nodabrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6c/8e/8d/noda-brewing-company.jpg?w=900&h=500&s=1',
      price:'$$', tags:['outdoor','dogs','local'] },

    { lat:35.2188, lon:-80.8108, n:2, cat:'brewery',
      name:'Free Range Brewing',
      short:'Creative craft ales · experimental · local',
      desc:'One of NoDa\'s most creative and adventurous craft breweries — constantly rotating small-batch experimental ales, sours, and lagers in a welcoming neighborhood taproom.',
      meta:'2320 N Davidson St · NoDa · freerangebrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d5/b6/e8/free-range-brewing.jpg?w=900&h=500&s=1',
      price:'$$', tags:['local','dogs'] },

    { lat:35.2155, lon:-80.8095, n:3, cat:'brewery',
      name:'Birdsong Brewing Co',
      short:'Dog-friendly brewery · taproom · live music',
      desc:'A beloved NoDa institution — approachable, well-crafted ales and lagers in a dog-friendly taproom that regularly hosts live music. Birdsong is the heartbeat of the neighborhood.',
      meta:'1016 N Davidson St · NoDa · birdsongbrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a3/0e/5b/birdsong-brewing-co.jpg?w=900&h=500&s=1',
      price:'$', tags:['outdoor','dogs','livemusic','local'] },

    { lat:35.2258, lon:-80.8093, n:4, cat:'brewery',
      name:'Idlewild',
      short:'No-menu craft cocktails · intimate · artful',
      desc:'Charlotte\'s most talked-about bar — a no-menu craft cocktail experience where bartenders craft a bespoke drink based on your mood, preferences, and personality. No two visits are the same.',
      meta:'424 E 36th St · NoDa · idlewildbar.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5b/9f/c4/caption.jpg?w=900&h=500&s=1',
      price:'$$$', tags:['date','local'] },

    { lat:35.2292, lon:-80.8112, n:5, cat:'brewery',
      name:'Heist Brewery + Barrel Arts',
      short:'Craft beer · wood-fired pizza · barrel-aged spirits',
      desc:'An ambitious NoDa stalwart — craft beers, house-distilled spirits, and wood-fired pizzas in a stunning industrial space. The barrel-aged program is among Charlotte\'s finest.',
      meta:'2909 N Davidson St · NoDa · heistbrewery.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e3/b3/0e/heist-brewery.jpg?w=900&h=500&s=1',
      price:'$$', tags:['date','local'] },

    { lat:35.2310, lon:-80.8113, n:6, cat:'brewery',
      name:'Salud Cerveceria',
      short:'Craft beer · wood-fired pizza · neighborhood gem',
      desc:'A laid-back NoDa brewpub pouring house-crafted beers alongside killer wood-fired pizzas and tacos. The back patio is one of Charlotte\'s best-kept secrets for a warm evening.',
      meta:'3306 N Davidson St · NoDa · saludcerveceria.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/cf/68/4e/salud-beer-shop.jpg?w=900&h=500&s=1',
      price:'$$', tags:['outdoor','local'] },

    /* ── EAT & DRINK ── */
    { lat:35.2245, lon:-80.8115, n:7, cat:'food',
      name:'Brooks\' Sandwich House',
      short:'Iconic since 1973 · best burger in NC · cash only',
      desc:'A NoDa legend since 1973 — simple, perfect cheeseburgers and hot dogs from a tiny walk-up window. Named "Best Burger in NC" by Reader\'s Digest. Cash only, line out the door, worth every minute.',
      meta:'2710 N Anderson St · NoDa · Cash only',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/87/ec/f7/brooks-sandwich-house.jpg?w=900&h=500&s=1',
      price:'$', tags:['local'] },

    { lat:35.2340, lon:-80.8112, n:8, cat:'food',
      name:'Divine Barrel Brewing',
      short:'Craft beer · comfort food · neighborhood hangout',
      desc:'A newer NoDa favorite combining inventive craft beers with thoughtfully prepared comfort food. The cozy taproom and welcoming staff make Divine Barrel a go-to for locals.',
      meta:'3701 N Davidson St · NoDa · divinebarrel.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4d/2e/32/divine-barrel-brewing.jpg?w=900&h=500&s=1',
      price:'$$', tags:['local'] },

    /* ── COFFEE & BAKERY ── */
    { lat:35.2260, lon:-80.8094, n:9, cat:'coffee',
      name:'Smelly Cat Coffeehouse',
      short:'NoDa\'s indie café · house roasts · live music',
      desc:'The soul of NoDa in coffee form — a beloved indie coffeehouse roasting their own beans and serving expertly crafted espresso drinks in a cozy, art-filled space. Live acoustic music most evenings.',
      meta:'514 E 36th St · NoDa · smellycatcoffee.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c1/44/1f/smelly-cat-coffeehouse.jpg?w=900&h=500&s=1',
      price:'$', tags:['livemusic','local','dogs'] },

    { lat:35.2212, lon:-80.8109, n:10, cat:'coffee',
      name:'Amélie\'s French Bakery',
      short:'French pastries · macarons · 24 hours',
      desc:'Charlotte\'s favorite French bakery — impossibly good croissants, fresh macarons, soups, and sandwiches in an eclectic, art-filled space that never closes. A true NoDa institution.',
      meta:'2424 N Davidson St · NoDa · ameliesfrenchbakery.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/6e/c6/43/amelie-s-french-bakery.jpg?w=900&h=500&s=1',
      price:'$', tags:['brunch','local'] },

    /* ── ARTS & CULTURE ── */
    { lat:35.2240, lon:-80.8118, n:11, cat:'arts',
      name:'Charlotte Art League',
      short:'Gallery · studios · classes · art crawls',
      desc:'The creative hub of NoDa — a combined gallery and working studio complex hosting rotating exhibitions, artist residencies, and the famous NoDa Gallery Crawl held on the first and third Fridays of each month.',
      meta:'315 E Tremont Ave · NoDa · charlotteartleague.org',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d4/52/be/charlotte-art-league.jpg?w=900&h=500&s=1',
      tags:['local'] },

    { lat:35.2430, lon:-80.8380, n:12, cat:'arts',
      name:'Camp North End',
      short:'Arts · food · music · historic site',
      desc:'Charlotte\'s most exciting adaptive reuse project — a sprawling former Ford assembly plant and Army depot transformed into a vibrant campus of art studios, restaurants, food halls, music venues, and creative spaces.',
      meta:'1701 N Graham St · Camp North End · explorecne.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/5d/6e/58/camp-north-end.jpg?w=900&h=500&s=1',
      tags:['family','outdoor','local'] },

    { lat:35.2198, lon:-80.8105, n:13, cat:'arts',
      name:'Optimist Hall',
      short:'Food hall · bars · shopping · creative hub',
      desc:'A buzzing converted textile mill housing Charlotte\'s most eclectic mix of restaurants, bars, boutiques, and studios. Whether you\'re coming for tacos, cocktails, or just to wander, Optimist Hall delivers.',
      meta:'1115 N Brevard St · NoDa · optimisthall.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9e/4e/d0/optimist-hall.jpg?w=900&h=500&s=1',
      price:'$$', tags:['family','local'] },

    /* ── LIVE MUSIC ── */
    { lat:35.2256, lon:-80.8096, n:14, cat:'music',
      name:'Neighborhood Theatre',
      short:'Iconic live music venue · all genres · intimate',
      desc:'One of Charlotte\'s most beloved live music venues — an intimate 1,000-capacity former movie theater that has hosted everyone from indie darlings to platinum-selling artists. Every show feels special here.',
      meta:'511 E 36th St · NoDa · neighborhoodtheatre.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5e/e8/e4/neighborhood-theatre.jpg?w=900&h=500&s=1',
      price:'$$', tags:['livemusic','local','date'] },

    { lat:35.2315, lon:-80.8109, n:15, cat:'music',
      name:'The Evening Muse',
      short:'Intimate live music · original artists · legendary',
      desc:'Charlotte\'s most intimate and beloved live music room — a tiny, legendary venue on N Davidson St that has launched countless careers and remains the beating heart of Charlotte\'s original music scene.',
      meta:'3227 N Davidson St · NoDa · eveningmuse.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/52/9a/b4/the-evening-muse.jpg?w=900&h=500&s=1',
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
    ],
    left: [
      { head: '🎨 Arts &amp; Culture', cls: 'arts', nums: [11, 12, 13] },
      { head: '☕ Coffee &amp; Bakery', cls: 'coffee', nums: [9, 10] },
    ],
    right: [
      { head: '🍺 Brew &amp; Bar', cls: 'coffee', nums: [1, 2, 3, 4, 5, 6] },
    ],
    mapBelow: [],
    bottom: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [7, 8] },
    ],
  },

  zoom: 15,
  printZoom: 14.8,
};
