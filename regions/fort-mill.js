window.REGION = {
  id: 'fort-mill',
  name: 'Fort Mill',
  sub: '· YORK COUNTY · SOUTH CAROLINA · 2026 EDITION ·',
  credit: '© LeisurelyMaps · 2026 · leisurelymaps.com',
  interactiveCredit: 'Click any marker · Pan &amp; zoom to explore · leisurelymaps.com',
  center: [35.007, -80.945],
  zoom: 13,
  printZoom: 14,
  printCenter: [35.0082, -80.952],

  streetLabels: [
    { lat: 35.0066, lon: -80.9415, name: 'Main St', rotate: -10 },
    { lat: 35.0055, lon: -80.9435, name: 'Tom Hall St', rotate: 0 },
    { lat: 35.0010, lon: -80.9350, name: 'Broadcloth St', rotate: -5 },
    { lat: 34.9974, lon: -80.9290, name: 'Kingsley Bend', rotate: 10 },
    { lat: 35.0148, lon: -80.9590, name: 'Market St', rotate: 0 },
    { lat: 35.0180, lon: -80.9720, name: 'Lake Haigler Dr', rotate: 20 },
    { lat: 34.9930, lon: -80.9640, name: 'Springfield Pkwy', rotate: 0 },
  ],

  boundaries: [
    { name: 'Kingsley', color: '#8B3A2A', coords: [[34.994,-80.932],[34.994,-80.920],[35.001,-80.920],[35.001,-80.932]] },
    { name: 'Downtown', color: '#5C3A1A', coords: [[35.003,-80.947],[35.003,-80.937],[35.010,-80.937],[35.010,-80.947]] },
    { name: 'Baxter Village', color: '#5A6A2A', coords: [[35.010,-80.967],[35.010,-80.954],[35.020,-80.954],[35.020,-80.967]] },
  ],

  landmarks: [
    { lat: 35.0032, lon: -80.9415, name: 'Fort Mill Town Hall', type: 'gov' },
    { lat: 35.0128, lon: -80.9598, name: 'Gold Hill Elementary', type: 'school' },
    { lat: 35.0089, lon: -80.9700, name: 'MUSC Health Fort Mill', type: 'hospital' },
    { lat: 34.9910, lon: -80.9630, name: 'Springfield Golf Club', type: 'golf' },
    { lat: 34.9950, lon: -80.9230, name: '', type: 'duck' },
    { lat: 35.0185, lon: -80.9600, name: '', type: 'duck' },
  ],

  areaLabels: [
    { lat: 34.9955, lon: -80.9210, name: 'Kingsley' },
    { lat: 35.0045, lon: -80.9460, name: 'Downtown Fort Mill' },
    { lat: 35.0180, lon: -80.9580, name: 'Baxter Village' },
    { lat: 35.0210, lon: -80.9840, name: 'Anne Springs Greenway' },
    { lat: 34.9910, lon: -80.9660, name: 'Springfield' },
  ],

  palette: {
    '--ink':          '#2A1408',
    '--frame':        '#8B3A2A',
    '--parch':        '#F7F0E6',
    '--parch-dark':   '#E0CEB0',
    '--accent':       '#C4923A',
    '--navy':         '#8B3A2A',
    '--green':        '#5A6A2A',
    '--inner-border': '#C8A882',
    '--tile-filter':  'saturate(1.1) brightness(1.04) contrast(0.92)',
    '--tile-blend':   'normal',
    '--tile-opa':     '1',
  },

  cats: {
    outdoor: '#5A6A2A',
    food:    '#8B3A2A',
    coffee:  '#5C3A1A',
    arts:    '#C4923A',
    family:  '#6A4A2A',
  },

  legend: [
    { color: '#5A6A2A', label: 'Outdoors' },
    { color: '#8B3A2A', label: 'Eat &amp; Drink' },
    { color: '#5C3A1A', label: 'Coffee &amp; Wine' },
    { color: '#C4923A', label: 'Arts &amp; Wellness' },
    { color: '#6A4A2A', label: 'Family Fun' },
  ],

  places: [
    /* ── KINGSLEY ── */
    { lat:34.9978, lon:-80.9268, n:1, cat:'food',
      name:'Epic Chophouse',
      short:'Upscale steakhouse · chops · seafood',
      desc:'Upscale steakhouse with warm woods and copper accents — prime steaks, chops, and fresh seafood with indoor, bar, and patio seating.',
      meta:'1680 Kingsley Bend, Ste 400 · Kingsley · Tue–Sun 5pm–10pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5b/2a/85/epic-chophouse.jpg?w=900&h=500&s=1' },

    { lat:34.9972, lon:-80.9265, n:2, cat:'food',
      name:'Napa at Kingsley',
      short:'Wine country cuisine · seasonal menu · patio',
      desc:'California wine country-inspired dining with locally sourced ingredients, wines on tap, seasonal cocktails, and stunning pond views from the patio.',
      meta:'1310 Broadcloth St · Kingsley · Mon–Thu 4–9pm, Fri–Sat 11am–10pm, Sun 11am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bd/f0/e9/napa-at-kingsley.jpg?w=900&h=500&s=1' },

    { lat:34.9975, lon:-80.9270, n:3, cat:'food',
      name:"Paco's Tacos &amp; Tequila",
      short:'Tex-Mex · 230+ tequilas · rooftop bar',
      desc:'Contemporary Tex-Mex with bold flavors, innovative dishes, and over 230 tequila varieties — plus a rooftop bar overlooking the Kingsley amphitheater.',
      meta:'1680 Kingsley Bend · Kingsley · Mon–Thu 11am–10pm, Fri–Sat 11am–11pm, Sun 11am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/6f/d4/9d/pork-belly-appetizer.jpg?w=900&h=500&s=1' },

    { lat:34.9980, lon:-80.9262, n:4, cat:'coffee',
      name:'Corkscrew Wine Bar',
      short:'Wine · beer · charcuterie · flatbreads',
      desc:'Upscale wine bar pairing curated wines, craft beer, and cocktails with charcuterie boards and flatbreads in a relaxed Kingsley setting.',
      meta:'1680 Kingsley Bend, Ste 100 · Kingsley · Tue–Sun 3pm–10pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/12/52/cd/great-wine-bar.jpg?w=900&h=500&s=1' },

    { lat:34.9968, lon:-80.9258, n:5, cat:'food',
      name:'Carolina Ale House',
      short:'Waterfront patio · craft beer · bar food',
      desc:'Lively waterfront gastropub with a sweeping patio overlooking the pond — classic bar fare, craft beers, and great sports viewing.',
      meta:'1665 Kingsley Bend · Kingsley · Daily 11am–midnight',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/0c/2e/16/carolina-ale-house.jpg?w=900&h=500&s=1' },

    { lat:35.0065, lon:-80.9428, n:6, cat:'food',
      name:'Replay Brewing',
      short:'Craft brewery · NEIPAs · video game vibes',
      desc:'Craft brewery and taproom with a fun video game theme — rotating NEIPAs, sours, lagers, and hard seltzers brewed on site in downtown Fort Mill.',
      meta:'1317 Broadcloth St · Fort Mill · Wed–Thu 3–9pm, Fri 2–10pm, Sat 12–10pm, Sun 12–7pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b2/79/87/caption.jpg?w=900&h=500&s=1' },

    /* ── BAXTER VILLAGE ── */
    { lat:35.0148, lon:-80.9612, n:7, cat:'food',
      name:'Ilios Crafted Greek',
      short:'Fresh Greek · made-to-order · patio',
      desc:'Fresh, made-to-order traditional Greek dishes in the heart of Baxter Village — vibrant flavors, beautiful garden patio, and warm hospitality.',
      meta:'951 Market St · Baxter Village · Mon–Sun 11am–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/79/e4/00001img-00001-burst2018060214.jpg?w=900&h=500&s=1' },

    { lat:35.0145, lon:-80.9608, n:8, cat:'food',
      name:'The Fish Market',
      short:'Fresh seafood · She Crab Soup · garden patio',
      desc:"Baxter Village's beloved seafood institution — dock-fresh fish, the legendary She Crab Soup, and a beautiful garden patio. A Fort Mill staple.",
      meta:'990 Market St · Baxter Village · Mon–Sat 11am–9pm, Sun 12–8pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0a/97/39/photo0jpg.jpg?w=900&h=500&s=1' },

    { lat:35.0142, lon:-80.9605, n:9, cat:'food',
      name:'Pet Piv Beer Garden',
      short:'Beer garden · draft wine · Roman pizza',
      desc:"Fort Mill's newest beer garden next to The Fish Market — craft beers, draft wine, and creative Roman-style pizza in a lively open-air setting.",
      meta:'990 Market St · Baxter Village · Wed–Sun 12–9pm',
      img:'https://media-cdn.tripadvisor.com/media/photo-f/1a/fe/c4/49/one-of-many-tap-walls.jpg' },

    /* ── DOWNTOWN FORT MILL ── */
    { lat:35.0072, lon:-80.9437, n:10, cat:'coffee',
      name:'Humble Cup Coffee Co.',
      short:'Specialty roasts · iced brew · local eats',
      desc:'Contemporary specialty coffee shop in the heart of downtown Fort Mill — excellent iced brew, locally sourced beans, and rotating food partners.',
      meta:'414 Tom Hall St · Downtown · Mon–Fri 7am–5pm, Sat 8am–4pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/b0/30/4c/the-best-cup-of-coffee.jpg?w=900&h=500&s=1' },

    { lat:35.0068, lon:-80.9432, n:11, cat:'coffee',
      name:"Olive's Mud Puddle",
      short:'Art-inspired café · music nights · pastries',
      desc:'Family-run coffee shop on Main Street with an art-inspired atmosphere, vibrant wall decor, live music nights, and fresh drinks and pastries.',
      meta:'229 Main St · Downtown · Mon–Sat 7am–5pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ef/55/28/photo1jpg.jpg?w=900&h=500&s=1' },

    { lat:35.0065, lon:-80.9428, n:12, cat:'food',
      name:"Hobo's",
      short:'Live music · cold beer · downtown staple',
      desc:'Heart-of-downtown Fort Mill landmark — great food, cold beer, live music, and a loyal local crowd that has made this a Fort Mill institution.',
      meta:'109 Main St · Downtown · Mon–Sat 11am–midnight',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/d8/1f/13/photo0jpg.jpg?w=900&h=500&s=1' },

    { lat:35.0070, lon:-80.9440, n:13, cat:'food',
      name:'Amor Artis Brewing',
      short:'Craft brewery · taproom · downtown',
      desc:'Local craft brewery in downtown Fort Mill with a welcoming taproom, rotating seasonal taps, and a laid-back community atmosphere.',
      meta:'121 Main St · Downtown · Wed–Sun 12–9pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/26/79/e4/00001img-00001-burst2018060214.jpg?w=900&h=500&s=1' },

    { lat:35.0062, lon:-80.9425, n:14, cat:'coffee',
      name:'Poppyseed Kitchen',
      short:'Breakfast · pastries · dog-friendly patio',
      desc:'Beloved breakfast and café spot with amazing pastries, fresh ingredients, and a dog-friendly outdoor patio — a perfect morning stop in Fort Mill.',
      meta:'485 Tom Hall St #103 · Downtown · Mon–Sat 7am–3pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6a/2e/84/hobo-s.jpg?w=900&h=500&s=1' },

    /* ── OUTDOORS ── */
    { lat:35.0228, lon:-80.9782, n:15, cat:'outdoor',
      name:'Anne Springs Close Greenway',
      short:'2,100 acres · hiking · mountain biking · horses',
      desc:'A breathtaking nature preserve larger than Central Park — over 2,100 acres of hardwood forests, lakes, hiking, biking, equestrian trails, and yoga by the lake.',
      meta:'2573 Lake Haigler Dr · Fort Mill · Daily dawn–dusk · $12/day',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/45/73/79/anne-springs-close-greenway.jpg?w=900&h=500&s=1' },

    { lat:35.0035, lon:-80.9388, n:16, cat:'outdoor',
      name:'Walter Y. Elisha Park',
      short:'Waterfront park · trails · pavilions',
      desc:'Beautiful waterfront park in the heart of Fort Mill with walking trails, picnic pavilions, playgrounds, and open green space along the creek.',
      meta:'1 Elisha St · Fort Mill · Daily dawn–dusk · Free',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/45/73/6a/anne-springs-close-greenway.jpg?w=900&h=500&s=1' },

    { lat:34.9935, lon:-80.9702, n:17, cat:'outdoor',
      name:'Springfield Golf Club',
      short:'Picturesque 18-hole · championship course',
      desc:'Picturesque and challenging championship golf course winding through the natural landscape of Fort Mill — a must-play for golfers of all levels.',
      meta:'500 Springfield Pkwy · Fort Mill · Daily · springfieldgolfclub.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/45/a9/d8/springfield-golf-club.jpg?w=700&h=400&s=1' },

    /* ── ARTS & WELLNESS ── */
    { lat:35.0082, lon:-80.9455, n:18, cat:'arts',
      name:'HOTWORX Fort Mill',
      short:'Infrared hot yoga · pilates · barre · 24hr',
      desc:'24-hour infrared fitness studio offering Hot Yoga, Pilates, Barre, Cycle, and HIIT workouts — all in a private heated pod environment.',
      meta:'604 Crossroads Plaza · Fort Mill · 24 hours · hotworx.net',
      img:'https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/07/01181645/IMG_5364-1024x768.jpg' },

    { lat:35.0058, lon:-80.9420, n:19, cat:'arts',
      name:'Fort Mill History Museum',
      short:'Local history · artifacts · guided tours',
      desc:'Engaging local history museum chronicling the rich heritage of Fort Mill and York County through artifacts, exhibits, and guided tours.',
      meta:'218 Main St · Downtown · Tue–Sat 10am–4pm · Free',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/48/f2/8f/fort-mill-history-museum.jpg?w=900&h=500&s=1' },

    /* ── FAMILY ── */
    { lat:35.0088, lon:-80.9462, n:20, cat:'family',
      name:'Creatif Fort Mill',
      short:'Art studio · painting · ceramics · all ages',
      desc:'Inspiring experiential art destination for kids and adults — paint canvases, ceramics, rocks, wood, and pottery in a fun, drop-in studio setting.',
      meta:'Crossroads Plaza · Fort Mill · Mon–Sat 10am–8pm, Sun 12–6pm · creatifstudio.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/51/96/58/fun-group.jpg?w=900&h=500&s=1' },

    { lat:35.0092, lon:-80.9470, n:21, cat:'family',
      name:'Knowledge Perk Coffee Co.',
      short:'Signature lattes · quirky decor · study spot',
      desc:'Community coffee shop with signature smooth lattes, quirky decor, and ample seating — the go-to study and hangout spot in Fort Mill.',
      meta:'900 Crossroads Plaza · Fort Mill · Mon–Fri 7am–8pm, Sat–Sun 8am–6pm',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b2/79/8b/caption.jpg?w=900&h=500&s=1' },
  ],

  printRails: {
    top: [
      { head: '⭐ Arts &amp; Wellness', cls: 'fam', nums: [18, 19, 20], lightText: true },
    ],
    left: [
      { head: '☕ Coffee &amp; Wine', cls: 'coffee', nums: [10, 11, 14, 4, 21] },
    ],
    right: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [1, 2, 7, 8, 12] },
    ],
    mapBelow: [
      { head: '🥾 Get Outside!', cls: 'do', nums: [15, 16, 17] },
    ],
    bottom: [
      { head: '🎳 Family &amp; Fun', cls: 'fam', nums: [3, 5, 6, 9, 13] },
    ],
  },
};
