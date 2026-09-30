// The Singapore gathering - used by the apply form, the thank-you page and calendar links.
import { CITIES } from './cities';
import { SELF_URL } from './links';

const c = CITIES.find((x) => x.key === 'singapore');

export const EVENT = {
  ...c,
  label: 'Legends Offline · Gathering 01 of 12',
  title: 'Legends Investor Meeting - Singapore',
  timeLocal: '5:15 PM - 9:15 PM',
  // start/end in UTC (17:15-21:15 SGT)
  startUtc: '20261008T091500Z',
  endUtc: '20261008T131500Z',
  zones: [['5:15 PM', 'Singapore'], ['1:15 PM', 'Dubai'], ['10:15 AM', 'London']],
  shareUrl: SELF_URL, // empty → the thank-you page uses the current site address
  ics: '/legends-singapore.ics',
};

export const googleCalendarUrl = () => {
  const q = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${EVENT.startUtc}/${EVENT.endUtc}`,
    details: 'A curated, investor-only evening. The venue address and final schedule are sent to confirmed guests by email.' + (EVENT.shareUrl ? ' ' + EVENT.shareUrl : ''),
    location: 'Singapore (private venue - shared with confirmed guests)',
  });
  return 'https://calendar.google.com/calendar/render?' + q.toString();
};
