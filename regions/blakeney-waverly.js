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
      img:'https://images.squarespace-cdn.com/content/v1/64ff4db243f4891854dfb0a3/59e4f5f1-933d-4aaa-9b87-e77798afa187/2.png?format=1500w', logoOnly:true, logoScale:'45%' },

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

    { lat:35.0491, lon:-80.8396, n:21, cat:'arts',
      name:'Pure Barre Blakeney',
      short:'Barre · low-impact · high-intensity',
      desc:'Full-body barre workout inspired by ballet, yoga, and Pilates — low-impact, high-intensity classes for all fitness levels in Blakeney.',
      meta:'8430 Rea Rd, Ste 120 · Blakeney · Mon–Thu 6am–7pm, Fri 6am–1pm, Sat–Sun 7am–3pm · purebarre.com',
      img:'https://4194181.fs1.hubspotusercontent-na1.net/hubfs/4194181/Pure%20Barre%20Logo-1.png', logoOnly:true, logoScale:'70%' },

    { lat:35.0529, lon:-80.8152, n:17, cat:'coffee',
      name:'Bagel Boys',
      short:'NY-style bagels · sandwiches · spreads',
      desc:'New Jersey natives brought authentic New York-style bagels to Waverly — 18 flavors, 15 house-made spreads, and legendary sandwiches like The Bae Gal. A South Charlotte morning staple.',
      meta:'7107 Waverly Walk Ave, Ste A2 · Waverly · Tue–Fri 6am–2pm, Sat–Sun 7am–2pm · bagelboysclt.com',
      img:'https://images.axios.com/RawMsHd7eax-jyqGRI3xXMfbA5c=/1920x1080/smart/2024/01/06/1704506087758.webp' },

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

    /* ── BOUTIQUES & WELLNESS ── */
    { lat:35.0552, lon:-80.8202, n:22, cat:'arts',
      name:'Mainstream Boutique',
      short:'Women\'s clothing · locally owned · Waverly',
      desc:'A beloved local women\'s clothing boutique at Waverly — thoughtfully curated tops, dresses, denim, and accessories for everyday style. Friendly staff and fresh arrivals weekly.',
      meta:'7314 Waverly Walk Ave, Ste E-5 · Waverly · Mon–Sat 10am–7pm, Sun 12–5pm · mainstreamboutiquecharlotte.com',
      img:'https://mainstreamboutiquecharlotte.com/cdn/shop/files/Mainstream-Boutique-Spring-2025-NUE-NUE-Russell-Heeter-Photography-1236_1.jpg' },

    { lat:35.0553, lon:-80.8200, n:23, cat:'arts',
      name:'OVME',
      short:'Med spa · Botox · fillers · facials',
      desc:'A modern medical aesthetics boutique offering Botox, dermal fillers, facials, and skin treatments in a sleek, welcoming environment. Expert injectors and a results-driven approach.',
      meta:'7314 Waverly Walk Ave, Ste E-7 · Waverly · Mon–Fri 9am–6pm, Sat 9am–4pm · ovme.com',
      img:'https://ovme.com/cdn/shop/files/CLT_lobby_1.webp?v=1773334297' },

    { lat:35.0554, lon:-80.8195, n:24, cat:'arts',
      name:'Scout &amp; Molly\'s',
      short:'Women\'s boutique · curated · fun',
      desc:'A vibrant women\'s boutique known for its perfectly curated mix of clothing, jewelry, and accessories. Scout & Molly\'s makes getting dressed fun — great finds at every visit.',
      meta:'7315 Waverly Walk Ave, Ste F1-3 · Waverly · Mon–Sat 10am–7pm, Sun 12–5pm · scoutandmollys.com',
      img:'https://www.scoutandmollys.com/wp-content/uploads/2022/07/smlogo1-1024x312.png', logoOnly:true, logoScale:'75%' },

    { lat:35.0558, lon:-80.8188, n:25, cat:'family',
      name:'Teddy &amp; Lu',
      short:'Children\'s clothing · gifts · adorable',
      desc:'Waverly\'s sweetest boutique — a beautiful collection of children\'s clothing, gifts, and accessories. From heirloom smocking to modern prints, Teddy & Lu has something special for every little one.',
      meta:'7404 Waverly Walk Ave, Ste I-2A · Waverly · Mon–Sat 10am–6pm, Sun 12–5pm · teddyandlu.com',
      img:'https://teddyandlu.com/cdn/shop/collections/BloomingFloralFlutterBubble-1.jpg' },

    { lat:35.0430, lon:-80.8445, n:26, cat:'family',
      name:'Life Time Fitness',
      short:'Luxury athletic club · pools · spa · tennis',
      desc:'South Charlotte\'s premier luxury athletic club — resort-style indoor and outdoor pools, full gym floor, yoga and cycling studios, pickleball and tennis courts, eucalyptus steam rooms, and a full spa.',
      meta:'11220 Golf Links Dr · Blakeney · Mon–Fri 4am–midnight, Sat–Sun 5am–10pm · lifetime.life',
      img:'https://assets.lifetimefitness.com/content/dam/lifetime/images/clubs/club-overview/spaces-carousel/pool/indoor-pool/indoor-lap-pool.png.dmtransform/image.jpg' },

    { lat:35.0528, lon:-80.8135, n:27, cat:'family',
      name:'Small Hands Big Art',
      short:'Kids\' art studio · classes · drop-in · parties',
      desc:'A bright, creative studio where kids explore painting, sculpting, mixed media, and more. Drop-in sessions, weekly classes, and memorable birthday parties in the heart of Waverly.',
      meta:'7415 Waverly Walk Ave F2A · Waverly · Tue–Sat 10am–6pm · smallhandsbigart.com',
      img:'https://www.smallhandsbigart.com/south-charlotte/wp-content/uploads/sites/12/2022/07/cover-1024x824-1.jpg' },

  ],

  streetLabels: [
    { lat: 35.0490, lon: -80.8370, name: 'Rea Rd', rotate: 80 },
    { lat: 35.0497, lon: -80.8345, name: 'Sandy Rock Pl', rotate: 0 },
    { lat: 35.0535, lon: -80.8152, name: 'Waverly Walk Ave', rotate: 0 },
    { lat: 35.0510, lon: -80.8220, name: 'Providence Rd', rotate: 80 },
  ],

  boundaries: [
    { name: 'Blakeney', color: '#C04830', coords: [[35.045,-80.844],[35.045,-80.833],[35.053,-80.833],[35.053,-80.844]] },
    { name: 'Rea Farms', color: '#0A5848', coords: [[35.047,-80.840],[35.047,-80.830],[35.053,-80.830],[35.053,-80.840]] },
    { name: 'Waverly', color: '#1E3C64', coords: [[35.050,-80.820],[35.050,-80.808],[35.057,-80.808],[35.057,-80.820]] },
  ],

  landmarks: [
    { lat: 35.0421, lon: -80.8388, name: 'Ardrey Kell High School', type: 'school' },
    { lat: 35.0468, lon: -80.8412, name: 'Atrium Health Blakeney', type: 'hospital' },
    { lat: 35.0502, lon: -80.8178, name: 'Waverly Presbyterian', type: 'church' },
    { lat: 35.0435, lon: -80.8445, name: 'Golf Links', type: 'golf' },
    { lat: 35.0576, lon: -80.7942, name: '', type: 'duck' },
    { lat: 35.0480, lon: -80.8360, name: '', type: 'duck' },
  ],

  areaLabels: [
    { lat: 35.0475, lon: -80.8410, name: 'Blakeney' },
    { lat: 35.0515, lon: -80.8340, name: 'Rea Farms' },
    { lat: 35.0555, lon: -80.8120, name: 'Waverly' },
  ],

  printRails: {
    top: [
      { head: '⭐ Arts &amp; Wellness', cls: 'fam', nums: [6, 15, 16, 21], lightText: true },
    ],
    left: [
      { head: '☕ Coffee &amp; Wine', cls: 'coffee', nums: [13, 14, 5, 4, 10] },
    ],
    right: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [9, 12, 11, 3, 1] },
    ],
    mapBelow: [
      { head: '👗 Boutiques &amp; Wellness', cls: 'fam', nums: [22, 23, 24, 25] },
    ],
    bottom: [
      { head: '🎳 Family &amp; Fun', cls: 'fam', nums: [7, 8, 17, 20, 26, 27] },
    ],
  },
};
