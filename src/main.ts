import './style.css';
import {
  plannedReports,
  publishedReports,
  type PlannedReport,
  type PublishedReport,
} from './data/reports';

// TODO: set to the newsletter provider's subscribe endpoint when one is chosen.
const NEWSLETTER_ENDPOINT = '';

// Descriptions in reports.ts are plain text: blank lines start a new
// paragraph, and a block where every line starts "1. ", "2. ", etc. renders
// as a numbered list. This turns that plain text into the card's markup.
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderDescription(description: string): string {
  const blocks = description.trim().split(/\n\s*\n/);

  return blocks
    .map((block) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      const isNumberedList = lines.length > 0 && lines.every((line) => /^\d+\.\s+/.test(line));

      if (isNumberedList) {
        const items = lines
          .map((line) => `<li>${escapeHtml(line.replace(/^\d+\.\s+/, ''))}</li>`)
          .join('');
        return `<ol>${items}</ol>`;
      }

      return `<p>${escapeHtml(lines.join(' '))}</p>`;
    })
    .join('');
}

function renderPlannedCard(report: PlannedReport): string {
  return `
    <article class="planned-card">
      <span class="tick" aria-hidden="true"></span>
      <p class="card-meta">${report.waypoint} ${report.pillar}</p>
      <h3 class="card-title">${report.title}</h3>
      <div class="card-desc">${renderDescription(report.description)}</div>
      <div class="card-footer">
        <p class="card-tags">
          <span class="card-tag card-tag-status">${report.status}</span>
          <span class="card-tag">Report pending</span>
        </p>
      </div>
    </article>`;
}

function renderPublishedCard(report: PublishedReport): string {
  return `
    <a class="report-card" href="${report.url}" target="_blank" rel="noopener">
      <span class="tick" aria-hidden="true"></span>
      <p class="card-meta">${report.waypoint} ${report.pillar} / ${report.contentType} ${report.duration}</p>
      <h3 class="card-title">${report.title}</h3>
      <div class="card-desc">${renderDescription(report.description)}</div>
      <div class="card-footer">
        <p class="card-tags">
          <span class="card-tag card-tag-status">Surveyed</span>
          <span class="card-tag">Report complete</span>
        </p>
        <p class="card-watch">Watch on YouTube<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 9h5M9 6.5l2.5 2.5-2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></p>
      </div>
    </a>`;
}

const grid = document.querySelector<HTMLDivElement>('#reports-grid');

if (!grid) {
  throw new Error('Element #reports-grid not found.');
}

grid.innerHTML = plannedReports.map(renderPlannedCard).join('');

const publishedSection = document.querySelector<HTMLElement>('#field-reports');
const publishedGrid = document.querySelector<HTMLDivElement>('#published-grid');

if (!publishedSection || !publishedGrid) {
  throw new Error('Element #field-reports or #published-grid not found.');
}

if (publishedReports.length === 0) {
  publishedSection.hidden = true;
} else {
  publishedGrid.innerHTML = publishedReports.map(renderPublishedCard).join('');
}

// Day / night theme toggle. The initial theme is set by an inline script in
// <head> (to avoid a flash); this only wires the button and persists changes.
const THEME_COLORS: Record<string, string> = {
  dark: '#101c19',
  light: '#eef1ed',
};

const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const themeLabel = themeToggle?.querySelector<HTMLSpanElement>('.theme-toggle-label');
const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

function syncThemeButton(theme: string): void {
  const isLight = theme === 'light';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark theme' : 'Switch to light theme'
    );
  }
  if (themeLabel) {
    themeLabel.textContent = isLight ? 'Day' : 'Night';
  }
  if (themeMeta) {
    themeMeta.content = THEME_COLORS[theme] ?? THEME_COLORS.dark;
  }
}

syncThemeButton(document.documentElement.dataset.theme ?? 'dark');

themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';

  // Suppress hover transitions for one frame so the page does not animate
  // every surface at once during the switch.
  document.documentElement.classList.add('theme-switching');
  document.documentElement.dataset.theme = next;
  requestAnimationFrame(() => {
    document.documentElement.classList.remove('theme-switching');
  });

  try {
    localStorage.setItem('theme', next);
  } catch {
    // Storage unavailable (private mode, etc.); the choice just will not persist.
  }

  syncThemeButton(next);
});

// Elevation profile: draw the route line and reveal markers on scroll into view.
const routeLineEl = document.querySelector<SVGPathElement>('.route-line');
const profileEl = document.querySelector<HTMLElement>('.profile');

if (routeLineEl && profileEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const len = routeLineEl.getTotalLength();
  routeLineEl.style.strokeDasharray = String(len);
  routeLineEl.style.strokeDashoffset = String(len);
  profileEl.classList.add('profile-will-animate');

  new IntersectionObserver(
    (entries, observer) => {
      if (entries[0].isIntersecting) {
        profileEl.classList.remove('profile-will-animate');
        profileEl.classList.add('profile-animated');
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  ).observe(profileEl);
}

const form = document.querySelector<HTMLFormElement>('#signup-form');
const status = document.querySelector<HTMLParagraphElement>('#signup-status');

form?.addEventListener('submit', (event) => {
  if (!NEWSLETTER_ENDPOINT) {
    event.preventDefault();
    if (status) {
      status.textContent = 'Signups are opening soon. Subscribe on YouTube in the meantime.';
    }
    return;
  }
  form.action = NEWSLETTER_ENDPOINT;
});
