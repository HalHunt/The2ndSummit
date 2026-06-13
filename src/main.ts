import './style.css';
import {
  plannedReports,
  publishedReports,
  type PlannedReport,
  type PublishedReport,
} from './data/reports';

// TODO: set to the newsletter provider's subscribe endpoint when one is chosen.
const NEWSLETTER_ENDPOINT = '';

function renderPlannedCard(report: PlannedReport): string {
  return `
    <article class="planned-card">
      <span class="tick" aria-hidden="true"></span>
      <p class="card-meta">${report.waypoint} ${report.pillar}</p>
      <h3 class="card-title">${report.title}</h3>
      <p class="card-desc">${report.description}</p>
      <p class="card-tags">
        <span class="card-tag card-tag-status">${report.status}</span>
        <span class="card-tag">Report pending</span>
      </p>
    </article>`;
}

function renderPublishedCard(report: PublishedReport): string {
  return `
    <a class="report-card" href="${report.url}" target="_blank" rel="noopener">
      <span class="tick" aria-hidden="true"></span>
      <p class="card-meta">${report.waypoint} ${report.pillar} / ${report.contentType} ${report.duration}</p>
      <h3 class="card-title">${report.title}</h3>
      <p class="card-desc">${report.description}</p>
      <p class="card-watch">Watch on YouTube</p>
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
