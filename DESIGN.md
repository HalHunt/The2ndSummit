# The 2nd Summit - Design System: "Contour"

The visual system for the2ndsummit.com, implemented in `index.html`,
`src/style.css`, and `src/main.ts`. When the implementation and this document
disagree, this document wins.

## Concept

A topographic map at night. The brand metaphor (the climb, the route, the second
summit) is the information architecture, not decoration. Content pillars are
numbered waypoints. Posts are field reports. The site is an expedition map that
points to the real content on YouTube.

The site is a pointer site: it presents titles and brief descriptions, and the
content itself lives on YouTube. See "Pointer Site Rules" below; they are design
constraints, not suggestions.

## Palette

| Token   | Hex     | Use                                                                         |
| ------- | ------- | --------------------------------------------------------------------------- |
| night   | #101c19 | Page background                                                             |
| night-2 | #16241f | Raised surfaces: cards, active nav, panels                                  |
| line    | #2c3f37 | All borders and hairlines                                                   |
| snow    | #e9ede9 | Primary text, primary chart strokes                                         |
| mist    | #9fb0a7 | Secondary text only                                                         |
| signal  | #ff6a3d | Primary accent: CTAs, active states, the "2nd" in the wordmark, key markers |
| gold    | #e8c45a | Data accent: waypoint codes, mono metadata, survey markers                  |

Usage rules:

- Signal is scarce. One signal element per screen region. If everything is signal, nothing is.
- Gold appears only at small sizes in mono labels and chart markers, never on large type or buttons.
- Never put signal and gold on the same element.
- Contour line art uses #3a5247 strokes at low opacity. It is decorative background only.
- No colors outside this palette. No gradients anywhere.

## Typography

Three families, loaded from Google Fonts with only the weights listed:

| Role                 | Family           | Weights       | Treatment                                                   |
| -------------------- | ---------------- | ------------- | ----------------------------------------------------------- |
| Display and headings | Barlow Condensed | 600, 700      | Uppercase, letter-spacing 0.02-0.08em, line-height 0.95-1.1 |
| Body                 | Barlow           | 400, 500, 600 | Sentence case, 18px base, line-height 1.65                  |
| Data and labels      | IBM Plex Mono    | 400, 500      | Uppercase, letter-spacing 0.12-0.24em, small sizes          |

Type scale (px): 12, 13, 15, 18, 20, 27, 44, 76.

- Hero display: 76px, clamp down to 44px on mobile.
- Card titles: 27px condensed.
- Body: 18px. The audience is 40-65; never set running text below 15px.
- Mono metadata: 12-13px minimum. Nothing informational below 12px.
- Section labels: mono, gold, prefixed with "// " in mist.

## Layout

- Content max-width: 1020px, 24px side gutters.
- Section vertical rhythm: 56px padding.
- Borders are 1px solid line. Card grids use the 1px-gap technique: container
  background is line color, cells are night-2, gap 1px.
- No border-radius. No box shadows. Depth comes from night-2 surfaces and hairlines.
- The contour SVG background is fixed-position, opacity about 0.55, pointer-events
  none, behind all content. It never carries information.

## Components

### Header

Wordmark "THE 2ND SUMMIT" in Barlow Condensed 700 caps with "2ND" in signal.
Right side: a mono micro-line (coordinates, est. year, "HAL HUNT"). Hairline bottom border.

### Waypoint nav

The five pillars plus home, as equal-width cells with hairline separators:

- WP-00 BASE CAMP (home), WP-01 MOVE DAILY, WP-02 EAT SMART, WP-03 AGE WELL,
  WP-04 STAY ENGAGED, WP-05 ENGINEER YOUR LIFE.
- Each cell: gold mono waypoint code above a condensed caps name.
- Active state: night-2 background plus a 3px inset signal underline.
- Hover: night-2 background, snow text.

### Hero

Mono section label, then a condensed caps headline with exactly one phrase in
signal. Lede paragraph in mist, max-width about 640px. Below it, the elevation
profile.

### Elevation profile

The signature graphic. An SVG line chart of two summits: gold marker and label
"FIRST SUMMIT: THE CAREER", signal marker "THE 2ND SUMMIT", and a pulsing signal
ring labeled "YOU ARE HERE" on the ascent between them. Snow stroke, faint
horizontal grid lines in line color, mono caption row beneath.

### Video cards (field reports)

Cards are links out to YouTube, never on-site articles. Every card must read as
"watch", not "read":

- 28px x 3px signal tick at top-left.
- Mono meta line in gold: waypoint code, pillar, and content type plus duration,
  for example "WP-01 MOVE DAILY / VIDEO 12:40". Shorts use "SHORT 0:58".
- Title in Barlow Condensed 600 caps, hover signal.
- One-sentence description in mist. Never more than one sentence; the content
  lives in the video.
- A mono "WATCH ON YOUTUBE" affordance at the card bottom.
- The whole card is one anchor with target="\_blank" and rel="noopener".

### Planned report cards (coming soon)

Before the channel has videos, and later for announced topics, the site shows
planned reports. The map metaphor: a solid line is a surveyed route, a dashed
line is a planned one.

- Same layout as a video card, but it is not a link. No anchor, no hover state,
  no "WATCH ON YOUTUBE".
- Border: 1px dashed line color. The signal tick becomes a hollow tick
  (1px signal outline, transparent fill).
- Meta line: waypoint code plus pillar name only (no duration, no status).
- Card bottom affordance: a row of pill tags (1px outline, fully rounded, mono
  caps). First the status, "PLANNED" or "IN PRODUCTION", in gold outline and
  gold text; then "REPORT PENDING" in line-color outline and mist text.
- Never fake reality on a planned card: no invented durations, view counts,
  thumbnails, or dates you cannot keep.
- Section heading for a group of these: "PLANNED ROUTES".
- Planned cards should cover all five pillars so the site communicates the full
  scope of the channel before any video exists.

### Buttons

- Primary: signal background, night text, Barlow Condensed 600 caps, square corners.
- Ghost: transparent, 1px snow border, snow text; hover swaps border and text to signal.
- Primary is reserved for the email signup. YouTube links use ghost.

### Footer

Hairline top border, two mono micro-lines: "THE 2ND SUMMIT" left, attribution right.
Attribution is always "Hal Hunt".

## Motion

- Allowed: the "YOU ARE HERE" pulse, background-color transitions on hover (about 0.15s).
- Required: in-page anchor navigation smooth scrolls (CSS scroll-behavior: smooth
  on the html element). This applies to all current and future anchor links.
- Nothing else animates. No scroll-triggered effects, no parallax, no entrance animations.
- Wrap all animation, including smooth scrolling, in a prefers-reduced-motion
  media query that disables it.

## Pointer Site Rules

1. The site hosts no article content. Titles, one-sentence summaries, and links out.
2. The video list is generated from the YouTube channel RSS feed
   (https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID) at build time.
   Video lists are never hand-edited into HTML.
   Pre-launch exception: until the channel has published videos, the site shows
   planned report cards driven by a single hand-maintained data file (for
   example src/data/reports.ts), still never inline in HTML. When videos
   publish, the RSS-fed reports appear first and the matching planned cards are
   removed. Planned and published reports may coexist, planned always below
   published.
3. At most one embedded player on the whole site (a featured video), implemented
   with a lightweight facade such as lite-youtube-embed. Everything else links out.
4. CTA hierarchy: email signup first (primary button), YouTube channel second
   (ghost button). The email list is the only audience asset the site owns.

## Accessibility

- Text contrast: snow on night and night-2 must stay AAA. Mist is for secondary
  text only and must stay AA (4.5:1) on both surfaces.
- Visible focus states: 2px signal outline on all interactive elements.
- The contour background and elevation profile decorations are aria-hidden;
  the profile carries an aria-label describing the metaphor.
- Honor prefers-reduced-motion (see Motion).

## Voice in UI text

Field-report language, consistent with BRAND.md: reports not posts, waypoints not
categories, "surveyed by" not "designed by". Labels like REPORT, TRIAL, STATUS,
VERDICT. Per CLAUDE.md: no em or en dashes, no emoji, brand name always
"The 2nd Summit".

## Do / Don't

Do:

- Keep signal scarce and intentional.
- Use mono labels to carry structure (codes, durations, statuses).
- Let hairlines and dark surfaces do the layout work.

Don't:

- No rounded corners, shadows, gradients, or glassmorphism.
- No stock photography. Imagery is line art, SVG charts, and video thumbnails only.
- No new fonts, no new colors, no emoji.
- No card that pretends to be an article.
