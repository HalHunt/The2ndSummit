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
    waypoint: 'WP-00',
    pillar: 'Base Camp',
    contentType: 'Video',
    duration: '8:32',
    title: 'Welcome to Base Camp: What This Channel Is Testing',
    description: 'Who is climbing, why the second summit, and what a field report looks like.',
    url: 'https://www.youtube.com/@the2ndsummit',
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
  },
  {
    kind: 'planned',
    waypoint: 'WP-01',
    pillar: 'Move Daily',
    status: 'Planned',
    title: 'The Workout Changes I Made After 50',
    description: 'What I dropped, what I kept, and what surprised me.',
  },
];
