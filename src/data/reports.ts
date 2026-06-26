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
}

// TODO: FAKE preview data. Replace with the RSS-fed build step once the
// channel publishes. The URL points at the channel, not a real video.
export const publishedReports: PublishedReport[] = [
  {
    kind: 'published',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    contentType: 'Video',
    duration: '5:08',
    title: 'I Reengineered My Workouts at 55 (Nothing Here Is New)',
    description: 'At 55, I rarely run the same workout twice. Not because I found a secret, but because nothing in my routine is new. The system is. A year ago I tore down my whole training routine and rebuilt it like an engineer. Same gym, same body, completely different approach. In this video I walk through the system I use to hold onto muscle and visible abs at 55: four exercises per body part, five pyramid sets each, and a rolling cycle that ignores the calendar entirely. None of the individual pieces are mine. Pyramid sets, muscle confusion, training near failure, you have heard all of it before. The point is the way they fit together.',
    url: 'https://youtu.be/qCj2VvQp33M',
  },
  {
    kind: 'published',
    waypoint: 'WP-03',
    pillar: 'Age Well',
    contentType: 'Video',
    duration: '3:54',
    title: 'I Scanned the Trusted Brands in My Bathroom. Most Scored a Zero.',
    description: 'After turning 50, I started taking a closer look at the everyday products I use.  Using ingredient-rating apps and product research tools, I reviewed many of the personal care products that had been part of my daily routine for years. Some scored surprisingly well, while others scored much lower than I expected.  This video walks through the products I replaced, what I switched to, and the ratings that influenced those decisions.',
    url: 'https://youtu.be/Ck9Rcbev4-8',
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
    waypoint: 'WP-02',
    pillar: 'Eat Smart',
    status: 'Planned',
    title: 'I Tried Hungryroot for 90 Days',
    description: 'A meal service run like a controlled trial, costs included.',
  },
  {
    kind: 'planned',
    waypoint: 'WP-04',
    pillar: 'Stay Engaged',
    status: 'Planned',
    title: 'What Pickleball Gave Me That the Gym Never Could',
    description: 'The workout was never the point.',
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
    waypoint: 'WP-05',
    pillar: 'Engineer Your Life',
    status: 'Planned',
    title: 'How I Organize My Life Like a Software System',
    description: 'Inputs, feedback loops, and failure modes for a week instead of a codebase.',
  }
];
