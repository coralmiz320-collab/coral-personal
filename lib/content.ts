export const NAV = [
  { label: 'About', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Reel', href: '/reel' },
  { label: 'Projects', href: '/projects' },
  { label: 'Press', href: '/press' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL = {
  imdb: 'https://www.imdb.com/name/nm13128171/',
  instagram: 'https://www.instagram.com/',
  email: 'Coral.miz320@gmail.com',
}

export const HEADSHOTS = [
  '/coral/hs-1.avif',
  '/coral/hs-2.avif',
  '/coral/hs-3.avif',
  '/coral/hs-4.avif',
  '/coral/hs-5.avif',
  '/coral/hs-6.avif',
  '/coral/hs-7.avif',
  '/coral/hs-8.avif',
  '/coral/hs-9.avif',
  '/coral/hs-10.avif',
  '/coral/hs-11.avif',
  '/coral/hs-12.avif',
]

export type Still = { src: string; w: number; h: number }

export const STILLS: Still[] = [
  { src: '/coral/prod-1.avif', w: 1600, h: 887 },
  { src: '/coral/prod-2.avif', w: 1600, h: 1000 },
  { src: '/coral/prod-3.avif', w: 1600, h: 886 },
  { src: '/coral/prod-4.avif', w: 1600, h: 900 },
  { src: '/coral/prod-5.avif', w: 1600, h: 888 },
  { src: '/coral/prod-6.avif', w: 1600, h: 888 },
  { src: '/coral/prod-7.avif', w: 1600, h: 888 },
  { src: '/coral/prod-8.avif', w: 1597, h: 1092 },
  { src: '/coral/prod-9.avif', w: 1600, h: 893 },
  { src: '/coral/prod-10.avif', w: 1591, h: 1100 },
  { src: '/coral/prod-11.avif', w: 1585, h: 1090 },
  { src: '/coral/prod-12.avif', w: 1600, h: 879 },
  { src: '/coral/prod-13.avif', w: 1600, h: 680 },
  { src: '/coral/prod-14.avif', w: 1518, h: 1093 },
  { src: '/coral/prod-15.avif', w: 1568, h: 1092 },
  { src: '/coral/prod-16.avif', w: 659, h: 480 },
  { src: '/coral/prod-17.avif', w: 1600, h: 900 },
  { src: '/coral/prod-18.avif', w: 1600, h: 670 },
  { src: '/coral/prod-19.avif', w: 1055, h: 789 },
  { src: '/coral/prod-20.avif', w: 1085, h: 781 },
  { src: '/coral/prod-21.avif', w: 582, h: 419 },
  { src: '/coral/prod-22.avif', w: 1600, h: 1600 },
  { src: '/coral/prod-23.avif', w: 1579, h: 1079 },
  { src: '/coral/prod-24.avif', w: 1440, h: 795 },
  { src: '/coral/prod-25.avif', w: 1600, h: 900 },
  { src: '/coral/prod-26.avif', w: 1600, h: 900 },
  { src: '/coral/prod-27.avif', w: 1600, h: 1027 },
  { src: '/coral/prod-28.avif', w: 1269, h: 711 },
  { src: '/coral/prod-29.avif', w: 545, h: 305 },
]

export const ABOUT = [
  'Coral is an actress from Tel Aviv, Israel, working in the US, Europe, and the Middle East. She began her acting career at the early age of 13 when she booked her first agent Shirley Puterman, and started auditioning for film, TV and theater, bouncing onto every stage she could find. Soon after she appeared in Comedy Central\u2019s sitcom Shutafim (Roommates), and was cast as Lucinda in the musical Into The Woods (Stephen Sondheim) at the Zamir Theatre.',
  'A graduate of the American Academy of Dramatic Arts in New York, Coral has worked around the globe in several TV and film productions. She is most known for her role as Hannah in Ski-ter Jones\u2019s Netflix pilot Block Boys: Behind the Lights, and her role as Jesse in Arian Behpour\u2019s feature film Foreign Form. Other key credits include Eitan Kunit\u2019s TV pilot Trippin Stacia, Kristie Grosvenor\u2019s short film Self Conclusion, Wesley Aldrich\u2019s official music video You Can\u2019t Kill Me Now, and Vlada Maricic\u2019s official music video Sonet (Label: PGP RTS).',
  'Recently, Coral had the privilege of playing Lati Meir in the new season of the renowned sci-fi show The Ark. Lati is a newcomer aboard the Ark 1 ship, carrying a secret mission she cannot reveal. The show, created by Dean Devlin, is now streaming on Syfy and Peacock.',
]

export const DETAILS = [
  { k: 'Based', v: 'NYC · Israel · Serbia' },
  { k: 'Height', v: '5\u20329"' },
  { k: 'Hair', v: 'Black' },
  { k: 'Eyes', v: 'Hazel (Green/Brown)' },
  { k: 'Voice', v: 'Mezzo-Soprano · E3\u2013F5' },
  { k: 'Languages', v: 'English & Hebrew' },
]

export type Credit = {
  title: string
  role: string
  company: string
  director: string
}

export const RESUME: { section: string; credits: Credit[] }[] = [
  {
    section: 'Television',
    credits: [
      { title: 'The Ark (Season 2)', role: 'Lati Meir', company: 'Syfy Channel', director: 'Dean Devlin' },
      { title: 'The Pendragon Cycle', role: 'Bebbin', company: 'DW Productions', director: 'Ryan Whitaker' },
      { title: 'Shutafim', role: 'Meryl', company: 'HOT / Comedy Central', director: 'Ori Katz' },
      { title: 'Trippin Stacia', role: 'Stacia', company: 'Pilot · EMK Productions', director: 'Eitan Kuniz' },
      { title: 'Block Boys', role: 'Marie', company: 'Pilot', director: 'Ski-ter Jones' },
    ],
  },
  {
    section: 'Film',
    credits: [
      { title: 'Foreign Form', role: 'Jesse', company: 'Feature · Headless Films', director: 'Arian Behpour' },
      { title: 'Promicity', role: 'Shir', company: 'Web Series', director: 'Yadin Goldman' },
      { title: 'Vick and Nimi', role: 'Vic', company: 'Beit Berl', director: 'Meshi Shay' },
      { title: 'Self Conclusion', role: 'Hannah', company: 'RIT', director: 'Kristie Grosvenor' },
      { title: 'Tequila', role: 'Ron', company: 'Short', director: 'Amit Kra' },
      { title: 'Sisterhood', role: 'Gabie', company: 'AADA', director: 'Jennifer Leigh Mann' },
    ],
  },
  {
    section: 'Theatre',
    credits: [
      { title: 'Into the Woods', role: 'Lucinda', company: 'Zamir Theater (TLV)', director: 'Roi Dolev' },
      { title: 'Yes No Black and White', role: 'Delilah', company: 'Hili Yalon Theatre (TLV)', director: 'Hili Yalon' },
      { title: 'Present Laughter', role: 'Joanna', company: 'Manny Greenfield Theatre', director: 'Susan Pilar' },
      { title: 'Radium Girls', role: 'Kathryn', company: 'Manny Greenfield Theatre', director: 'George Heslin' },
    ],
  },
  {
    section: 'Other',
    credits: [
      { title: "You Can't Kill Me Now", role: 'Lead', company: 'Music Video', director: 'Audrey Lane' },
      { title: 'Sonet', role: 'Lead', company: 'Music Video · RTS PGP', director: 'Boris Lukman' },
    ],
  },
]

export const TRAINING = [
  {
    school: 'The American Academy of Dramatic Arts (NYC)',
    note: 'Two-Year Conservatory · AOS Degree',
    lines: [
      'Acting — David Dean Bottrell, Janis Powell, Maggie Low, Burke Pearson',
      'Movement / Alexander — Angela Nahigian, Blake Habermann, Tracy Einstein, Kyra Miller, Erin O\u2019leary',
      'Voice and Speech — Thomas Rene, Max Roseneck, Rob Tendy',
      'Singing / Camera — Christopher Mcgovern, Jennifer Leigh Mann',
    ],
  },
  { school: 'Tal Eden Acting School', note: 'Two years', lines: [] },
  { school: 'Reacting School for Camera — Tal Yarimi', note: 'One year', lines: [] },
  { school: 'The International Acting Studio', note: 'One year', lines: [] },
]

export const SKILLS =
  'Languages: Hebrew (fluent), English (fluent). Dialects: Israeli, General American, Received Pronunciation. Proficient in IPA. Trained Singer — Mezzo Soprano (highest note F5, lowest E3), Hebrew Riffing. Piano (intermediate), Horseback Riding, comfortable with animals, VO home studio, Gymnastics (adequate), Swimming, Stage Combat (unarmed).'

export type Reel = {
  title: string
  length: string
  category: string
  featured?: boolean
  /** YouTube video id — when present, the clip plays inline. */
  youtubeId?: string
  /** External link used when there is no embeddable video yet. */
  link?: string
  /** Marks the slot as awaiting its source file (e.g. the Wix showreel). */
  pending?: boolean
}

export const REELS: Reel[] = [
  {
    title: 'Coral Mizrachi — Showreel 2026',
    length: '02:19',
    category: 'Showreel',
    featured: true,
    youtubeId: '0nfWCDPgYXw',
  },
  { title: 'The Ark — Season 2 Trailer', length: '02:12', category: 'Trailer', youtubeId: '6xY-ooYMscI' },
  { title: 'Foreign Form — Trailer', length: '02:01', category: 'Trailer', youtubeId: '4TEC2dOZgnI' },
  { title: 'The Ark — Live Chat with Coral (Lati Meir)', length: '1:03:01', category: 'Interview', youtubeId: 'VL5SSTyCmPg' },
  { title: 'Hebrew Showreel 2022', length: '02:28', category: 'Showreel', youtubeId: 'PN9wr6K5vHE' },
  { title: 'Or — Official Trailer / \u05D0\u05D5\u05E8 \u05D8\u05E8\u05D9\u05D9\u05DC\u05E8 \u05E8\u05E9\u05DE\u05D9', length: '00:58', category: 'Trailer', youtubeId: 'o2qunE8RXcY' },
]

export const REEL_LINK = 'https://www.coralmizrachi.com/reel'

export type Project = {
  title: string
  director: string
  meta: string
  role?: string
  body: string
  accolades?: string[]
  image?: { src: string; w: number; h: number }
  slides?: { src: string; w: number; h: number }[]
  videoUrl?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'The Ark',
    director: 'Created by Dean Devlin',
    meta: 'Syfy & Peacock · Sci-Fi Series',
    role: 'Lati Meir',
    body: 'The Ark takes place 100 years in the future when planetary colonization missions have begun as a necessity to secure the survival of the human race. After the crew of Ark One reaches their destination and finds it uninhabitable, they must survive long enough to locate a new home for themselves and the ships that follow. Coral plays Lati Meir, an agriculturist from Ark 15 who jumps ship to Ark 1 — now she must prove her loyalty to the crew, all while carrying a secret mission.',
    accolades: [
      '2024 & 2025 Saturn Awards Nominee — Best New Genre Television Series',
      '#1 show on Syfy Channel',
      'Streaming on Syfy and Peacock',
    ],
    image: { src: '/coral/ark-poster.avif', w: 900, h: 1195 },
  },
  {
    title: 'Self Conclusion',
    director: 'Directed by Kristie Grosvenor',
    meta: 'Short Film',
    role: 'Hannah',
    body: 'A short film about taking responsibility and the consequences of our actions. Coral plays Hanna, a bartender in her early 20s trying to deal with the death of her father and the suicide of her sister, as she follows a journey to help Dedrea, a teenage girl who ran away from home.',
    accolades: [
      'Lift-Off Session 2022 — Official Selection',
      'Quarter-Finalist — 2022 World Impact Film Festival',
    ],
    image: { src: '/coral/proj-self-conclusion.avif', w: 800, h: 1066 },
  },
  {
    title: 'Tequila',
    director: 'Directed by Amit Kra',
    meta: 'Short Drama',
    role: 'Ron',
    body: 'A short drama about life and death, and an unusual friendship. Coral plays Ron, who decides to have one last drink at the bar next to her apartment before she plans to take her own life that night. Gil, the bartender, is not going to let that happen on his conscience.',
    accolades: ['Official Selection — 2022 Tel Aviv International Short Film Festival'],
    slides: [
      { src: '/coral/tequila-1.avif', w: 1200, h: 659 },
      { src: '/coral/tequila-2.avif', w: 1200, h: 584 },
      { src: '/coral/tequila-3.avif', w: 1200, h: 503 },
      { src: '/coral/tequila-4.avif', w: 1200, h: 510 },
      { src: '/coral/tequila-5.avif', w: 1200, h: 521 },
    ],
  },
  {
    title: "Can't Kill Me Now",
    director: 'Directed by Audrey Lane',
    meta: 'Official Music Video · Wesley Aldrich',
    role: 'Lead',
    body: 'Coral was cast in the official music video for the single "Can\u2019t Kill Me Now" by Wesley Aldrich, part of his album Bullies and Saints. The music video documents Coral\u2019s real-life struggle with cancer.',
    accolades: ['Lift-Off Session 2022 — Official Selection'],
    videoUrl: 'https://www.youtube.com/watch?v=rw7YzjgV_cM',
  },
  {
    title: 'My Favorite Place',
    director: 'Directed by Boris Lukman',
    meta: 'One-Shot Short · Art Club Productions',
    body: 'A one-shot film shot in Serbia as part of the Create Your Film competition, sponsored by Nikon, SanDisk, Yellow Store and more. Petar, consumed by his video-game addiction, has one shot to save his relationship with his girlfriend.',
    accolades: [
      '2nd place — Create Your Film competition',
      '1st place, Script & Theme — Create Your Film competition',
    ],
    image: { src: '/coral/proj-my-favorite-place.avif', w: 1200, h: 610 },
  },
  {
    title: 'Foreign Form',
    director: 'Directed by Arian Behpour · Bonzo Grimley Production',
    meta: 'Feature Film · Horror Sci-Fi Drama',
    role: 'Jessie',
    body: 'A feature-length horror sci-fi drama about Jack and his blind sister Alice. After a car accident, Jack struggles with guilt and new ways to face the past. Coral plays Jessie, Jack\u2019s girlfriend, who soon gets caught up in the mess with both him and his sister.',
    accolades: ['CinoPrimo Film Festival 2018'],
    image: { src: '/coral/proj-foreign-form.avif', w: 848, h: 1200 },
    videoUrl: 'https://www.youtube.com/watch?v=4TEC2dOZgnI',
  },
  {
    title: 'Vic & Nimi',
    director: 'Directed by Meshi Shay',
    meta: 'Short Film',
    role: 'Vic',
    body: 'A look into a day in the life of siblings living together. Vic is a 25-year-old poet trying to find herself; Nimi, a few years older, is fighting off depression, playing a dangerous game with an unloaded gun. Things get complicated when Vic loads the gun without him knowing.',
    image: { src: '/coral/proj-vic-nimi.avif', w: 777, h: 1100 },
  },
  {
    title: 'Trippin Stacia',
    director: 'Directed by Eitan Kuniz',
    meta: 'TV Pilot',
    role: 'Stacia',
    body: 'Shot in Detroit, Trippin Stacia follows a young woman moving to Michigan to find herself and develop her career as a singer. Coral was cast as the leading character, Stacia, upon graduating and wrapping her performance in Radium Girls.',
    image: { src: '/coral/proj-trippin-stacia.avif', w: 900, h: 600 },
  },
  {
    title: 'Block Boys',
    director: 'Directed by Ski-ter Jones',
    meta: 'Pilot · Vegas Narco-Drama',
    role: 'Marie',
    body: 'Shot in Nevada and produced by Andrea Meshel, Block Boys: Beyond the Light shows a different side of Las Vegas. Coral plays Marie, the assistant of the drug lord in town.',
    image: { src: '/coral/proj-block-boys.avif', w: 1136, h: 610 },
  },
]

export type PressItem = {
  headline: string
  outlet: string
  quote: string
}

export const PRESS: PressItem[] = [
  { headline: 'New Music Video Captures the Heart of the Matter', outlet: 'Skope Magazine', quote: '\u201CWesley\u2019s lyrics fit perfectly with Coral\u2019s spirit throughout her hardship.\u201D' },
  { headline: 'Daily Inspiration: Meet Coral Mizrachi', outlet: 'VoyageSavannah', quote: '\u201CActing makes me happy and fulfilled — it\u2019s my calling.\u201D' },
  { headline: 'Meet Coral Mizrachi', outlet: 'Bold Journey', quote: '\u201CThe deeper you know who you are, the better actor you\u2019ll be.\u201D' },
  { headline: 'Diverse Actress Broadens Her Horizons', outlet: 'LifeStyle Republic', quote: '\u201CThe 25-year-old actress was able to conquer both theatre and film on two different continents.\u201D' },
  { headline: 'Interview With Coral Mizrachi', outlet: 'Theatre Art Life', quote: '\u201CI didn\u2019t expect how different the industries are between different countries.\u201D' },
  { headline: "The Heroine's Journey of Coral Mizrachi", outlet: "The Heroine's Journey", quote: '\u201CThe more I lean into my emotions and being true to myself, it makes me a better actress and a better person.\u201D' },
  { headline: 'Meet Coral Mizrachi', outlet: 'VoyagePhoenix', quote: '\u201CI\u2019ve been working hard to realize that this is part of the job, whatever it will be.\u201D' },
  { headline: "Can't Kill Me Now", outlet: 'Art Independent', quote: '\u201CA strong, brave, and resilient warrior who reclaims her life as she gets better and stronger.\u201D' },
  { headline: 'Meet Coral Mizrachi | Actress & Singer', outlet: 'Shoutout Atlanta', quote: '\u201CWhen I\u2019m on stage or on set I feel the most alive — it\u2019s the one thing I won\u2019t be able to live without.\u201D' },
  { headline: 'Rising Stars: Meet Coral Mizrachi', outlet: 'VoyageATL', quote: '\u201CWhen I focused on storytelling, I was a better actor, a better colleague, and I was happier.\u201D' },
  { headline: "'Can't Kill Me Now' by Audrey Lane", outlet: 'PromoNews', quote: '\u201CA beautiful, stirring and human real-life story that perfectly encapsulates the title of the track.\u201D' },
  { headline: 'Authenticity + Courage', outlet: 'Outer-Stage Magazine', quote: '\u201CThe little girl who wanted nothing more than to act has grown up and is living out that dream with success and grace.\u201D' },
]

export const AGENTS = [
  { region: 'London', name: 'Simon Hayes — Langford Associates', email: 'simon@langfordassociates.com' },
  { region: 'Balkans', name: 'Nevena Petrovic — Slavic Artists', email: 'nevena@slavicartists.com' },
  { region: 'Israel', name: 'Haim Shraga — CastArt', email: 'Castart@gmail.com' },
]
