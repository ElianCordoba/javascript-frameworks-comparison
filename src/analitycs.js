// Used to prevent sending data while developing the site
const idPresent = !!process.env.GA_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  console.log('idPresent', idPresent)
  if (!idPresent) return;

  window.gtag('config', process.env.GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (!idPresent) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}