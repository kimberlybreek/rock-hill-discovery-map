window.REGION = {
  id: 'south-end',
  name: 'South End',
  sub: '· CHARLOTTE · NORTH CAROLINA · 2026 EDITION ·',
  credit: '© South End Map · 2026 · leisurelymaps.com',
  interactiveCredit: 'Click any marker · Pan &amp; zoom to explore · leisurelymaps.com',
  center: [35.212, -80.860],
  zoom: 15,
  printZoom: 14.8,
  printCenter: [35.208, -80.860],

  palette: {
    '--ink':          '#1E0E06',
    '--frame':        '#A04A28',
    '--parch':        '#FAF5EE',
    '--parch-dark':   '#EDE0D0',
    '--accent':       '#C87840',
    '--navy':         '#A04A28',
    '--green':        '#5A6A30',
    '--inner-border': '#D4B898',
    '--tile-filter':  'saturate(1.05) brightness(1.04) contrast(0.91)',
    '--tile-blend':   'normal',
    '--tile-opa':     '1',
  },

  cats: {
    outdoor: '#3A7A40',
    food:    '#B83020',
    coffee:  '#7A4A18',
    arts:    '#5A3A8A',
    family:  '#1A4A8B',
  },

  legend: [
    { color: '#3A7A40', label: 'Outdoors' },
    { color: '#B83020', label: 'Eat &amp; Drink' },
    { color: '#7A4A18', label: 'Brew &amp; Coffee' },
    { color: '#5A3A8A', label: 'Arts &amp; Wellness' },
    { color: '#1A4A8B', label: 'Local Favorites' },
  ],

  places: [

    /* ── BREWERIES & BARS ── */
    { lat:35.2067, lon:-80.8584, n:1, cat:'coffee',
      name:'Triple C Brewing',
      short:'Flagship craft brewery · taproom · patio',
      desc:'One of Charlotte\'s most beloved craft breweries — award-winning ales and lagers poured in a lively taproom with a sprawling patio. The Falcon is a must-try.',
      meta:'2900 Griffith St · South End · Mon–Thu 4–10pm, Fri 2–11pm, Sat 12–11pm, Sun 12–9pm · triplebrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/0b/82/df/triple-c-brewing-co-charlotte.jpg?w=900&h=500&s=1' },

    { lat:35.2148, lon:-80.8602, n:2, cat:'coffee',
      name:'Sycamore Brewing',
      short:'Warehouse brewery · rotating taps · food trucks',
      desc:'A South End staple set in a converted warehouse — rotating craft taps, local food trucks, and a massive dog-friendly outdoor space that hums on weekends.',
      meta:'2161 Hawkins St · South End · Mon–Thu 4–10pm, Fri 2–11pm, Sat–Sun 12–11pm · sycamorebrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/09/9e/4d/sycamore-brewing.jpg?w=700&h=400&s=1' },

    { lat:35.2183, lon:-80.8617, n:3, cat:'coffee',
      name:'Wooden Robot Brewery',
      short:'Neighborhood brewery · creative small-batch ales',
      desc:'Creative small-batch brewery known for inventive, approachable ales and a cozy taproom vibe right off the Rail Trail. Perfect pre- or post-walk pint stop.',
      meta:'1440 S Tryon St, Ste 110 · South End · Mon–Thu 4–10pm, Fri 2–11pm, Sat 12–11pm, Sun 12–8pm · woodenrobotbrewery.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c6/43/89/img-20170630-183142-585.jpg?w=700&h=400&s=1' },

    { lat:35.2082, lon:-80.8591, n:4, cat:'coffee',
      name:'Protagonist Brewing',
      short:'Cozy taproom · IPAs · lagers',
      desc:'A neighborhood gem focused on approachable, well-crafted lagers and IPAs in a warm, intimate taproom. Great for a quiet pint without the crowds.',
      meta:'1715 South Blvd, Ste 120 · South End · Wed–Thu 4–10pm, Fri 2–11pm, Sat 12–11pm, Sun 12–8pm · protagonistbrewing.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/46/15/14/16-pepperoni-small.jpg?w=900&h=500&s=1' },

    { lat:35.2187, lon:-80.8608, n:5, cat:'coffee',
      name:'Suffolk Punch',
      short:'Coffee by day · craft cocktails by night',
      desc:'South End\'s most versatile spot — exceptional specialty coffee and pastries in the morning, then seamlessly transitions to craft cocktails and small plates by evening.',
      meta:'1508 S Tryon St · South End · Daily 7am–midnight · suffolkpunchclt.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/a6/06/6d/outdoor-seating.jpg?w=900&h=500&s=1' },

    /* ── EAT & DRINK ── */
    { lat:35.1993, lon:-80.8620, n:6, cat:'food',
      name:"Mac's Speed Shop",
      short:'Low & slow BBQ · cold beer · live music',
      desc:'An iconic Charlotte institution — slow-smoked BBQ ribs and brisket, cold beer, and a motorcycle-themed patio that hosts live music on weekends. Classic Charlotte.',
      meta:'2511 South Blvd · South End · Mon–Thu 11am–10pm, Fri–Sat 11am–11pm, Sun 11am–9pm · macsspeedshop.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/04/5f/ca/beer-bikes-bbq.jpg?w=900&h=500&s=1' },

    { lat:35.2155, lon:-80.8593, n:7, cat:'food',
      name:'Seoul Food Meat Co',
      short:'Korean BBQ · table grills · soju',
      desc:'Charlotte\'s go-to Korean BBQ — cook premium marinated meats on tabletop grills, pair with banchan, and share a bottle of soju with friends.',
      meta:'2101 South Blvd, Ste 110 · South End · Mon–Thu 5–10pm, Fri–Sat 5–11pm, Sun 5–9pm · seoulfoodmeatco.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/e6/dc/47/seoul-food.jpg?w=900&h=500&s=1' },

    { lat:35.2132, lon:-80.8600, n:8, cat:'food',
      name:'The Goodyear House',
      short:'American brasserie · brunch · cocktails',
      desc:'Set in a beautifully converted warehouse, The Goodyear House serves elevated American brasserie fare — killer brunch, seasonal cocktails, and a stunning interior.',
      meta:'2015 Hawkins St · South End · Tue–Thu 5–10pm, Fri 5–11pm, Sat 10am–11pm, Sun 10am–9pm · thegoodyearhouse.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/10/29/67/the-goodyear-house.jpg?w=900&h=500&s=1' },

    { lat:35.2203, lon:-80.8607, n:9, cat:'food',
      name:'Fern, Flavors from the Garden',
      short:'Plant-based · creative · upscale',
      desc:'One of Charlotte\'s most celebrated plant-based restaurants — imaginative, seasonally driven dishes that impress even dedicated carnivores. A South End standout.',
      meta:'1415 S Tryon St · South End · Tue–Thu 5–9pm, Fri–Sat 5–10pm · eatfern.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/93/19/33/from-left-to-right-bao.jpg?w=900&h=500&s=1' },

    { lat:35.2048, lon:-80.8608, n:10, cat:'food',
      name:"Lulu's Maryland Style Chicken",
      short:'Maryland fried chicken · Old Bay · casual',
      desc:'A South End cult favorite — crispy Maryland-style fried chicken dusted in Old Bay, served with house sauces in a cheerful, no-fuss spot. Always a line for good reason.',
      meta:'1717 South Blvd · South End · Mon–Thu 11am–9pm, Fri–Sat 11am–10pm, Sun 11am–8pm · luluschicken.com',
      img:'https://lh3.googleusercontent.com/p/AF1QipMtoaYcYo0MSUJiLHK0QQR-kCghp0w0IlsuT2Y8=w900-h500-p-no-v0' },

    { lat:35.2162, lon:-80.8588, n:11, cat:'food',
      name:'Hawkers Asian Street Fare',
      short:'Pan-Asian street food · vibrant · shareable',
      desc:'Bold, vibrant pan-Asian street food inspired by the night markets of Southeast Asia — roti canai, pad thai, bao buns, and house cocktails in a lively setting.',
      meta:'2000 South Blvd, Ste 400 · South End · Mon–Thu 11am–10pm, Fri–Sat 11am–11pm, Sun 11am–9pm · eathawkers.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3a/45/62/hawkers-interiors.jpg?w=900&h=500&s=1' },

    /* ── COFFEE ── */
    { lat:35.2209, lon:-80.8603, n:12, cat:'coffee',
      name:'Not Just Coffee',
      short:'Charlotte-grown specialty coffee · cozy',
      desc:'Charlotte\'s homegrown specialty coffee brand — beautifully crafted lattes, exceptional pour-overs, and a warm, welcoming café atmosphere perfect for working or catching up.',
      meta:'1427 S Tryon St · South End · Mon–Fri 7am–5pm, Sat–Sun 8am–4pm · notjustcoffee.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ee/07/ed/not-just-coffee.jpg?w=900&h=500&s=1' },

    { lat:35.2195, lon:-80.8614, n:13, cat:'coffee',
      name:'Undercurrent Coffee',
      short:'Specialty roasts · minimalist · focused',
      desc:'A beautifully minimalist specialty coffee bar committed to sourcing and brewing exceptional single-origin coffees. One of Charlotte\'s most thoughtful coffee experiences.',
      meta:'1523 Elizabeth Ave · South End · Mon–Fri 7am–5pm, Sat–Sun 8am–4pm · undercurrentcoffee.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fb/88/b8/photo0jpg.jpg?w=900&h=500&s=1' },

    /* ── OUTDOORS ── */
    { lat:35.2128, lon:-80.8572, n:14, cat:'outdoor',
      name:'Charlotte Rail Trail',
      short:'4-mile greenway · art · light rail views',
      desc:'A 4-mile urban greenway running alongside the LYNX Blue Line — walk, run, or bike past public art installations, breweries, and restaurants. South End\'s green spine.',
      meta:'South Blvd corridor · South End to Uptown · Open daily, dawn to dusk · charlottenc.gov',
      img:'https://cloudfront.traillink.com/photos/charlotte-rail-trail_228391_sc.jpg' },

    { lat:35.2068, lon:-80.8622, n:15, cat:'outdoor',
      name:'Little Sugar Creek Greenway',
      short:'Urban trail · creekside · serene',
      desc:'A peaceful creekside urban trail weaving through South End — ideal for a morning run or bike ride away from the bustle. Connects to a broader greenway network across Charlotte.',
      meta:'S Tryon St trailhead · South End · Open daily, dawn to dusk · charlottenc.gov',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c1/53/88/little-sugar-creek-greenway.jpg?w=900&h=500&s=1' },

    /* ── ARTS & WELLNESS ── */
    { lat:35.2135, lon:-80.8598, n:16, cat:'arts',
      name:'Goodyear Arts',
      short:'Artist collective · gallery · events',
      desc:'A thriving creative collective housed in a former warehouse — rotating gallery exhibitions, live performances, and studio residencies showcasing Charlotte\'s most exciting emerging artists.',
      meta:'2115 Hawkins St · South End · Wed–Sun 12–6pm · goodyeararts.org',
      img:'https://goodyeararts.com/wp-content/uploads/2025/06/JULY_AUGUST_INSTALL-26-1-1024x683.jpg' },

    { lat:35.2175, lon:-80.8597, n:17, cat:'arts',
      name:'CorePower Yoga South End',
      short:'Hot yoga · sculpt · all levels',
      desc:'Nationally loved hot yoga and sculpt classes in a sleek South End studio. Whether you\'re a first-timer or daily practitioner, CorePower brings great energy and consistency.',
      meta:'1500 S Tryon St, Ste 140 · South End · Daily 6am–8pm · corepoweryoga.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/bc/91/00/photo0jpg.jpg?w=900&h=500&s=1' },

    { lat:35.2220, lon:-80.8570, n:18, cat:'coffee',
      name:'Hi-Wire Brewing South End',
      short:'Craft lagers & ales · taproom · patio',
      desc:'Asheville-born Hi-Wire brings its celebrated lineup of lagers, IPAs, and seasonal ales to a lively South End taproom — bright space, friendly crowd, and consistently great beer.',
      meta:'1737 Camden Rd · South End · Mon–Thu 3–10pm, Fri 2–11pm, Sat 12–11pm, Sun 12–8pm · hiwirebrewing.com',
      img:'https://hiwirebrewing.com/wp-content/uploads/2025/07/CharlotteTaproom_Javi_20231013_7106-1030x1030.jpg' },

    { lat:35.2170, lon:-80.8610, n:19, cat:'arts',
      name:'CycleBar South End',
      short:'Indoor cycling · high-energy · music',
      desc:'Premium indoor cycling studio with performance tracking, energetic instructors, and a party-like atmosphere. One of South End\'s most popular fitness studios.',
      meta:'1432 S Tryon St, Ste 105 · South End · Daily 6am–8pm · cyclebar.com',
      img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/10/9c/0f/patio.jpg?w=900&h=500&s=1' },

    { lat:35.2145, lon:-80.8615, n:20, cat:'family',
      name:'South End Farmers Market',
      short:'Saturday market · local produce · artisans',
      desc:'A beloved Saturday tradition — local farmers, bakers, artisan makers, and food vendors gathering at Atherton Mill along the Rail Trail. Fresh produce, live music, and great local energy every weekend.',
      meta:'2000 South Blvd, Atherton Mill · South End · Saturdays 8am–1pm, year-round · southendmkt.com',
      img:'https://southendmkt.com/wp-content/uploads/southend-1200x730-1.png' },

  ],

  streetLabels: [
    { lat: 35.2100, lon: -80.8610, name: 'South Blvd', rotate: 80 },
    { lat: 35.2180, lon: -80.8615, name: 'S Tryon St', rotate: 80 },
    { lat: 35.2140, lon: -80.8595, name: 'Hawkins St', rotate: 0 },
    { lat: 35.2070, lon: -80.8585, name: 'Griffith St', rotate: 0 },
    { lat: 35.2060, lon: -80.8620, name: 'Clanton Rd', rotate: 0 },
  ],

  landmarks: [
    { lat: 35.2250, lon: -80.8545, name: 'Carson Station (LYNX)', type: 'gov' },
    { lat: 35.2100, lon: -80.8558, name: 'East/West Station (LYNX)', type: 'gov' },
    { lat: 35.1960, lon: -80.8592, name: 'New Bern Station (LYNX)', type: 'gov' },
    { lat: 35.2180, lon: -80.8580, name: 'Charlotte Rail Trail', type: 'outdoor' },
  ],

  areaLabels: [
    { lat: 35.2200, lon: -80.8580, name: 'South End' },
    { lat: 35.2070, lon: -80.8600, name: 'LoSo' },
    { lat: 35.2140, lon: -80.8620, name: 'Hawkins St District' },
    { lat: 35.2010, lon: -80.8615, name: 'South Boulevard' },
  ],

  printRails: {
    top: [
      { head: '🍺 Brew &amp; Bar', cls: 'coffee', nums: [1, 2, 3, 4, 5], lightText: true },
    ],
    left: [
      { head: '🍽 Eat &amp; Drink', cls: 'eat', nums: [6, 7, 8, 9, 10] },
    ],
    right: [
      { head: '☕ Coffee &amp; Wellness', cls: 'coffee', nums: [11, 12, 13, 17, 19] },
    ],
    mapBelow: [
      { head: '🌿 Outdoors', cls: 'do', nums: [14, 15] },
    ],
    bottom: [
      { head: '🎨 Arts &amp; Community', cls: 'fam', nums: [16, 18, 20] },
    ],
  },
};
