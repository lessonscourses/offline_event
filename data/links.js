// Links to the other Legends landings.
// Leave a value empty ('') while the page does not exist yet - the link then opens
// a "coming soon" modal (components/SoonModal.jsx). Put the real URL in when the page is live.
export const SERIES_URL = ''; // full Q4 calendar landing

export const CITY_URL = {
  'singapore': '/',
  'dubai': '',
  'abu-dhabi': '',
  'riyadh': '',
};

export const MAIN_URL = 'https://belegends.club';

// Public URL of THIS landing (for share links and calendar). TODO: set once the domain is connected.
export const SELF_URL = '';

// Props for a link to another event: real href when available, otherwise opens the "coming soon" modal.
export const eventLink = (key) => {
  const url = key === 'calendar' ? SERIES_URL : CITY_URL[key];
  return url ? { href: url } : { href: '#soon', 'data-soon': key };
};

// WhatsApp of the Investor Success / Sales team that handles Singapore requests.
// International format, digits only, e.g. '6591234567'. TODO: set the real number.
export const WHATSAPP_NUMBER = '';

// Analytics / CRM hook: pushes events to window.dataLayer (GTM) - wire these to the CRM.
// Events: 'application_submitted', 'whatsapp_inbound'.
export const track = (event, data = {}) => {
  try { (window.dataLayer = window.dataLayer || []).push({ event, ...data }); } catch {}
};
