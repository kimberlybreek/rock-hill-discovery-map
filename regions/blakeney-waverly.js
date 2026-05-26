window.REGION = {
  id: 'blakeney-waverly',
  name: 'Blakeney &amp; Waverly',
  sub: '· MECKLENBURG COUNTY · NORTH CAROLINA · 2026 EDITION ·',
  credit: '© Ballantyne Map · 2026 · ballantyneMap.com',
  interactiveCredit: 'Click any marker · Pan &amp; zoom to explore · ballantyneMap.com',
  center: [35.051, -80.827],
  zoom: 13,
  printZoom: 14.2,

  palette: {
    '--ink':          '#1A2838',
    '--frame':        '#1E3C64',
    '--parch':        '#EEF4F8',
    '--parch-dark':   '#C8DCF0',
    '--accent':       '#C04830',
    '--navy':         '#1E3C64',
    '--green':        '#2A6848',
    '--inner-border': '#9AB8D8',
    '--tile-filter':  'saturate(1.2) brightness(1.05) contrast(0.92)',
    '--tile-blend':   'normal',
    '--tile-opa':     '1',
  },

  cats: {
    outdoor: '#2A6848',
    food:    '#C04830',
    coffee:  '#4A2A60',
    arts:    '#1E3C64',
    family:  '#0A5848',
  },

  legend: [
    { color: '#2A6848', label: 'Outdoors' },
    { color: '#C04830', label: 'Eat &amp; Drink' },
    { color: '#4A2A60', label: 'Coffee &amp; Wine' },
    { color: '#1E3C64', label: 'Arts &amp; Wellness' },
    { color: '#0A5848', label: 'Family Fun' },
  ],

  places: [
    /* ── BLAKENEY ── */
    { lat:35.0488, lon:-80.8388, n:1,  cat:'food',
      name:'131 Main',
      short:'Hickory wood-fired steaks · fresh seafood',
      desc:'Upscale-casual New American chophouse with hickory wood-fire grilled steaks, chops, and dock-fresh seafood — all made from scratch daily.',
      meta:'9886 Rea Rd · Blakeney · Sun–Thu 11am–9pm, Fri–Sat 11am–9:30pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/89/cf/35/131-main.jpg' },

    { lat:35.0493, lon:-80.8405, n:2,  cat:'food',
      name:"Burtons Grill &amp; Bar",
      short:'Scratch kitchen · allergy-friendly · brunch',
      desc:'Scratch-made New American menu with allergy-friendly options, seasonal outdoor dining, Wine Wednesday, and a popular weekend brunch.',
      meta:'9816 Rea Rd · Blakeney · Mon–Thu 11:30am–10pm, Fri 11:30am–11pm, Sat–Sun 10:30am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/d8/c4/maxx-burger.jpg?w=900&h=500&s=1' },

    { lat:35.0492, lon:-80.8404, n:3,  cat:'food',
      name:'Pio Pio',
      short:'Peruvian rotisserie chicken · Colombian flair',
      desc:'Family-owned Colombian-Peruvian gem famous for its Peruvian-marinated rotisserie chicken, vibrant murals, and a Latin soundtrack.',
      meta:'9816-A Rea Rd · Blakeney · Mon–Sat 11am–9pm, Sun 12–9pm',
      img:'assets/pio-pio.jpg' },

    { lat:35.0489, lon:-80.8390, n:4,  cat:'food',
      name:'Open Rice Kitchen',
      short:'Modern Asian · cast-iron fried rice',
      desc:'Modern Asian kitchen reimagining classics — signature cast-iron chicken fried rice, Hong Kong-style soft shell crab, and bubble waffles in an upbeat space.',
      meta:'9882 Rea Rd, Ste F · Blakeney · Tue–Sun 11:30am–9pm, Mon closed',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a7/fe/d2/caption.jpg?w=900&h=500&s=1' },

    { lat:35.0483, lon:-80.8380, n:5,  cat:'food',
      name:'Rai Lay',
      short:'Elevated Thai-Asian fusion · sushi bar',
      desc:'Elevated Thai-Asian fusion and sushi bar bringing Bangkok-inspired flavors and a polished dining room to Blakeney Town Center.',
      meta:'9935 Rea Rd · Blakeney · Mon–Thu 11am–9pm, Fri 11am–9:30pm, Sat–Sun 12–9pm',
      img:'https://railayblakeney.com/wp-content/uploads/sites/77/2023/01/w3_gallery01.jpg' },

    { lat:35.0491, lon:-80.8393, n:6,  cat:'arts',
      name:'Atha Yoga',
      short:'Infrared hot yoga · sculpt · barre',
      desc:"Charlotte's only infrared hot yoga studio — Bikram, Power Flow, Yin, and Sculpt classes in a state-of-the-art heated studio.",
      meta:'9852 Rea Rd, Ste D2 · Blakeney · Mon–Fri from 5:30am, Sat–Sun from 7am · athayogaclt.com',
      img:'https://images.squarespace-cdn.com/content/v1/64ff4db243f4891854dfb0a3/444675f9-6fd2-475b-9c70-c136895ba09c/sweatnet-00229.jpg', bgSize:'cover', bgPosition:'center center' },

    /* ── REA FARMS ── */
    { lat:35.0498, lon:-80.8365, n:7,  cat:'family',
      name:'The Improper Pig',
      short:'Southern BBQ · Diners Drive-Ins &amp; Dives',
      desc:"Southern BBQ and comfort food made famous by Diners, Drive-Ins and Dives — weekend brunch, craft cocktails, and pulled pork that locals swear by.",
      meta:'9855 Sandy Rock Pl · Rea Farms · Mon–Thu 11am–9pm, Fri 11am–10pm, Sat–Sun 9am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/3a/ff/a1/hickory-wood-fire-grill.jpg?w=900&h=500&s=1' },

    { lat:35.0496, lon:-80.8362, n:8,  cat:'family',
      name:"Duckworth's Taphouse",
      short:'40+ craft taps · burgers · sports bar',
      desc:'Craft-beer-forward gastropub with 40+ taps, towering burgers, and a lively patio — the go-to game-day hangout for south Charlotte.',
      meta:'9805 Sandy Rock Pl · Rea Farms · Mon–Wed 11am–11pm, Thu–Sat 11am–midnight, Sun 11am–11pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/5e/13/fa/lots-of-tables-tvs.jpg?w=900&h=500&s=1' },

    /* ── WAVERLY ── */
    { lat:35.0535, lon:-80.8145, n:9,  cat:'food',
      name:"The Porter's House",
      short:'Modern chophouse · exceptional wine list',
      desc:'Sophisticated modern chophouse and Waverly anchor — exquisite steaks, fresh seafood, and an exceptional wine list in an elegant New South atmosphere.',
      meta:'7417 Waverly Walk Ave · Waverly · Mon–Thu &amp; Sun 5–9pm, Fri–Sat 5–10pm',
      img:'assets/porters-house.jpg' },

    { lat:35.0533, lon:-80.8143, n:10, cat:'food',
      name:'Via Roma',
      short:'Handmade pasta · Italian wine cellar',
      desc:'Neighborhood Italian favorite — handmade pasta, lasagna, braised veal, and an extensive Italian wine cellar in a warm, casually upscale Waverly setting.',
      meta:'7416 Waverly Walk Ave, H-2 · Waverly · Mon–Thu 5–10pm, Fri–Sat 5–11pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e8/7f/c8/housemade-gnocchi.jpg?w=900&h=500&s=1' },

    { lat:35.0525, lon:-80.8125, n:11, cat:'food',
      name:'Yama — Waverly',
      short:'Premier sushi · nigiri · Japanese plates',
      desc:'A premier sushi destination with immaculate nigiri, sashimi, and Japanese small plates — the go-to for fresh, high-quality fish in south Charlotte.',
      meta:'11641 Waverly Center Dr · Waverly · Tue–Sun 11:30am–9pm, Mon closed',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/98/90/bc/a5-wagyu-nigiri.jpg?w=1100&h=1100&s=1' },

    { lat:35.0542, lon:-80.8150, n:12, cat:'food',
      name:'DeSano Pizzeria',
      short:'Certified Neapolitan · wood-fired oven',
      desc:'Authentic Neapolitan pizza from a certified wood-fired oven — chewy, charred crusts with simple, high-quality Italian toppings.',
      meta:'7615 Waverly Walk Ave · Waverly · Daily 11:30am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/d4/80/desano-napoletana.jpg' },

    { lat:35.0534, lon:-80.8144, n:13, cat:'coffee',
      name:'Breezeway Coffee',
      short:'Local roasts · slow pour-overs · cozy vibes',
      desc:'Locally roasted specialty coffee house with a cozy vintage-Americana vibe — every cup hand-brewed as a slow pour-over, with outstanding single-origin options.',
      meta:'7416 Waverly Walk Ave, H-3 · Waverly · Mon–Fri 7am–8pm, Sat 8am–8pm',
      img:'https://cdn.shopify.com/s/files/1/0571/3169/6195/files/650AD152-52FB-42B9-9E02-8B1A0D690CB2_1_105_c.jpg?v=1734383628' },

    { lat:35.0532, lon:-80.8144, n:14, cat:'coffee',
      name:'Foxcroft Food &amp; Wine',
      short:'Wine bar · seasonal menu · date nights',
      desc:'Beloved Charlotte wine bar and restaurant pairing rotating seasonal menus with globally curated bottles — ideal for leisurely afternoons and date nights.',
      meta:'7416 Waverly Walk Ave, H-1A · Waverly · Mon–Thu 12–9pm, Fri–Sat 12–10pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/44/70/e2/wine-food-friends-we.jpg?w=900&h=500&s=1' },

    { lat:35.0530, lon:-80.8148, n:15, cat:'arts',
      name:'The Invigory',
      short:'Cryotherapy · infrared sauna · salt room',
      desc:"Charlotte's premier health optimization studio — whole-body cryotherapy, infrared sauna, salt rooms, compression therapy, and ice facials under one roof.",
      meta:'7314 Waverly Walk Ave · Waverly · Mon–Fri 10am–8pm, Sat–Sun 9am–6pm · theinvigory.com',
      img:'assets/invigory.jpg' },

    { lat:35.0531, lon:-80.8149, n:16, cat:'arts',
      name:'CycleBar Waverly',
      short:'Premium indoor cycling · performance tracking',
      desc:'Premium indoor cycling studio with performance-tracking tech, immersive darkened ride rooms, and high-energy instructors.',
      meta:'7315 Waverly Walk Ave · Waverly · Class-based schedule · cyclebar.com',
      img:'https://sweatnet.com/wp-content/uploads/elementor/thumbs/9994_CB-17-onlmqdi6gwwtnqbsx99gj6m26wj2idsr0yp8rxcw2g.jpg' },

    { lat:35.0529, lon:-80.8152, n:17, cat:'family',
      name:'Waverly Commons',
      short:'Open-air plaza · dining · events',
      desc:"Waverly's vibrant open-air district with walkable dining, boutique shops, a central green, and frequent community events and pop-ups.",
      meta:'Waverly Walk Ave · Charlotte · Daily · waverlyclt.com',
      img:'https://www.childressklein.com/sites/default/files/styles/hero_xs/public/2024-07/Waverly_Summer2024_3.jpg?itok=Y9FqFkg9' },

    /* ── OUTDOORS ── */
    { lat:35.0505, lon:-80.8185, n:18, cat:'outdoor',
      name:'Little Sugar Creek Greenway',
      short:'Paved trail · creek views · public art',
      desc:'Paved, stroller-friendly greenway running through south Charlotte — lined with wildflowers, creek views, wetland overlooks, and public art installations.',
      meta:'I-485 &amp; Providence Rd corridor · Daily dawn–dusk · Free',
      img:'https://files.aptuitivcdn.com/JVXM9wad0E-1708/images/trails/trail-system/IMG_2596_horiz-57.1773311125.jpg' },

    { lat:35.0558, lon:-80.8480, n:19, cat:'outdoor',
      name:'Ballantyne District Park',
      short:'Mountain bike trails · sports fields · picnic',
      desc:'91-acre county park with 3 miles of mountain bike trails, lighted baseball and softball fields, a soccer pitch, and picnic shelters.',
      meta:'9405 Bryant Farms Rd · Daily dawn–dusk · Free',
      img:'https://northwoodoffice-assets.imgix.net/goBallantyne/images/common/ballantynes-backyard-community-park-4.jpg' },

    { lat:35.0540, lon:-80.8138, n:20, cat:'family',
      name:'Hilton Garden Inn Waverly',
      short:'Full-service hotel · bar · Waverly Walk',
      desc:'Full-service hotel right on Waverly Walk with a lobby bar, outdoor pool, and easy walkable access to all the best dining and shops.',
      meta:'7415 Waverly Walk Ave · Waverly · hilton.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a1/55/f6/hilton-garden-inn-charlotte.jpg?w=900&h=500&s=1' },
  ],

  streetLabels: [
    { lat: 35.0490, lon: -80.8370, name: 'Rea Rd', rotate: 80 },
    { lat: 35.0497, lon: -80.8345, name: 'Sandy Rock Pl', rotate: 0 },
    { lat: 35.0535, lon: -80.8152, name: 'Waverly Walk Ave', rotate: 0 },
    { lat: 35.0510, lon: -80.8220, name: 'Providence Rd', rotate: 80 },
  ],

  areaLabels: [
    { lat: 35.0475, lon: -80.8410, name: 'Blakeney' },
    { lat: 35.0515, lon: -80.8340, name: 'Rea Farms' },
    { lat: 35.0555, lon: -80.8120, name: 'Waverly' },
  ],

  printRails: {
    top: [
      { head: '⭐ Arts &amp; Wellness', cls: 'fam', nums: [6, 15, 16], lightText: true },
    ],
    left: [
      { head: '☕ Coffee &amp; Wine', cls: 'coffee', nums: [13, 14, 5, 4, 10] },
    ],
    right: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [9, 12, 11, 3, 1] },
    ],
    mapBelow: [
      { head: '🥾 Get Outside!', cls: 'do', nums: [18, 19] },
    ],
    bottom: [
      { head: '🎳 Family &amp; Fun', cls: 'fam', nums: [7, 8, 17, 20] },
    ],
  },
};
