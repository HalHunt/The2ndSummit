// Planned reports shown pre-launch. Per DESIGN.md, video lists are never
// hand-edited into HTML: this file is the single source until the YouTube
// channel publishes, after which RSS-fed reports appear first and matching
// planned entries are removed.

export interface PublishedReport {
  kind: 'published';
  waypoint: string;
  pillar: string;
  contentType: 'Video' | 'Short';
  duration: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export const publishedReports: PublishedReport[] = [
  {
    kind: 'published',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    contentType: 'Video',
    duration: '4:30',
    title: 'Pickleball Sidelined Me at 55. I\'m Going Back Anyway.',
    description: `Everybody says pickleball is the safe, low impact sport. Eight weeks in, at 55, it put me on the couch for a week.

    I didn't start playing to chase a trend. I started because I missed competing, and pickleball brought that back. Then two injuries in eight weeks made me actually look up what the data says about how safe this sport is for people my age. It surprised me.

    This isn't a warning and it isn't a hype video. It's one guy reporting what happened, what the numbers actually say, and why a sore back is nowhere near enough to keep me off the court. You decide what any of it means for you.

    More experiments at the2ndsummit.com. Subscribe if you're building a strong second half of life and want to see what works and what doesn't. One experiment at a time. That's how I'm figuring out the back half of life.`,
    url: 'https://youtu.be/uCzqr91_boU',
    thumbnail: '/thumbnail-pickleball.webp',
  },  
  {
    kind: 'published',
    waypoint: 'WP-03',
    pillar: 'Age Well',
    contentType: 'Video',
    duration: '4:04',
    title: '4 Sleep Changes at 55 (Only 2 Mattered)',
    description: `I changed 4 things to sleep better at 55. Only 2 actually mattered, and I am not going to pretend otherwise.
    
    Here is what I tested, what stuck, and the one thing I keep doing even though I cannot prove it helps.
    
    I am not a doctor and this is not medical advice. I am a semi-retired engineer documenting what I test on myself to stay strong, sharp, and healthy in the second half of life. You decide what is worth trying for you.

    The 4 changes in this video:
     
    1. The bed rule. My bed is for sleeping, nothing else. 
    2. A fixed weekday wake-up time. 
    3. A morning routine of protein and early sunlight. 
    4. Box breathing to quiet my brain at night.
    
    Two of these did almost all the work.  I am honest in the video about which two, which one barely moved the needle, and which one is still a coin flip I keep anyway. There is also a strange one I am testing next that most people would call the opposite of a sleep tip.
    
    More experiments at the2ndsummit.com. Subscribe if you're building a strong second half of life and want to see what works and what doesn't. One experiment at a time. That's how I'm figuring out the back half of life.`,
    url: 'https://youtu.be/nDrCkvxgtzI',
    thumbnail: '/thumbnail-sleep.webp',
  },
  {
    kind: 'published',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    contentType: 'Video',
    duration: '5:08',
    title: 'I Reengineered My Workouts at 55',
    description: `At 55, I rarely run the same workout twice. Not because I found a secret, but because nothing in my routine is new. The system is.

    A year ago I tore down my whole training routine and rebuilt it like an engineer. Same gym, same body, completely different approach. In this video I walk through the system I use to hold onto muscle and visible abs at 55: four exercises per body part, five pyramid sets each, and a rolling cycle that ignores the calendar entirely.

    None of the individual pieces are mine. Pyramid sets, muscle confusion, training near failure, you have heard all of it before. The point is the way they fit together. I also get into the parts most routines skip: why extended recovery turned out to be a feature instead of a flaw, and why the real cost of never repeating a workout gets paid up front, not every week.

    This isn't coaching and I'm not a trainer. It is just what I do, why I do it, and whether I would recommend it. Take the parts that are useful to you and leave the rest.

    The one rule underneath all of it: sweat every day.
    
    More experiments at the2ndsummit.com. Subscribe if you're building a strong second half of life and want to see what works and what doesn't. One experiment at a time. That's how I'm figuring out the back half of life.`,
    url: 'https://youtu.be/qCj2VvQp33M',
    thumbnail: '/thumbnail-strength.webp',
  },
  {
    kind: 'published',
    waypoint: 'WP-03',
    pillar: 'Age Well',
    contentType: 'Video',
    duration: '3:54',
    title: 'I Scanned the Trusted Brands in My Bathroom. Most Scored a Zero.',
    description: `I scanned the everyday products I'd used for twenty years without ever reading a label, and some of the most trusted brand names in my bathroom scored a zero out of a hundred. In this video I walk through the four that floored me most, my deodorant, sunscreen, lotion, and lip balm, and what I switched to instead.

    I also get into the swaps that barely helped, why one "clean" eco brand scored worse than a plain drugstore one, and why I now scan instead of assuming. I used a free app called Yuka. I'm not affiliated with it or any of the brands mentioned. This is just what I found and what I chose to do about it. You can decide for yourself.

    I'm Hal Hunt. The 2nd Summit is where I document what I'm testing, using, and discovering to stay healthy, sharp, and engaged in the second half of life. If that's your kind of thing, subscribe and come along.
    
    Yuka.io is free and not affiliated with this channel. A low score means an ingredient is flagged as a potential hazard, not that a product is proven harmful. This is what I found and what I chose. Decide for yourself.
    
    More experiments at the2ndsummit.com. Subscribe if you're building a strong second half of life and want to see what works and what doesn't. One experiment at a time. That's how I'm figuring out the back half of life.`,
    url: 'https://youtu.be/Ck9Rcbev4-8',
    thumbnail: '/thumbnail-yuka.webp',
  },
];

export interface PlannedReport {
  kind: 'planned';
  waypoint: string;
  pillar: string;
  status: 'Planned' | 'In production';
  title: string;
  description: string;
}

export const plannedReports: PlannedReport[] = [
  {
    kind: 'planned',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    status: 'Planned',
    title: 'What Changed After Walking Every Day for 6 Months',
    description: 'An almost daily strand walk, logged like an experiment.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    status: 'Planned',
    title: 'Why I Still Ride a Fixed Gear on the Strand',
    description: 'Eight miles a day, one gear, no motor to bail me out.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-02',
    pillar: 'Eat Smart',
    status: 'Planned',
    title: 'I Tried Hungryroot for 90 Days',
    description: 'A meal service run like a controlled trial, costs included.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-02',
    pillar: 'Eat Smart',
    status: 'Planned',
    title: 'The Only 4 Supplements I Actually Take',
    description: 'Creatine, protein, water, and the caffeine I gave up to get there.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-03',
    pillar: 'Age Well',
    status: 'Planned',
    title: 'What My Dentist Taught Me About Teeth Whitening',
    description: 'Practical takeaways from the chair, no products to sell.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-03',
    pillar: 'Age Well',
    status: 'Planned',
    title: 'I Took a Cold Shower Every Night for 6 months',
    description: 'What discipline looks like once it stops being a decision.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-05',
    pillar: 'Engineer Your Life',
    status: 'Planned',
    title: 'How I Organize My Life Like a Software System',
    description: 'Inputs, feedback loops, and failure modes for a week instead of a codebase.',
  }
];
