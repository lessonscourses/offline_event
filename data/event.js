// The Singapore gathering - used by the apply form, the thank-you page and calendar links.
import { CITIES } from './cities';
import { SELF_URL } from './links';

const c = CITIES.find((x) => x.key === 'singapore');

export const EVENT = {
  ...c,
  label: 'Legends Offline · Private investor dinner',
  title: 'Legends Investor Dinner - Singapore',
  timeLocal: '5:00 PM - 8:00 PM',
  // start/end in UTC (17:00-20:00 SGT)
  startUtc: '20261008T090000Z',
  endUtc: '20261008T120000Z',
  zones: [['5:00 PM', 'Singapore'], ['1:00 PM', 'Dubai'], ['10:00 AM', 'London']],
  shareUrl: SELF_URL, // empty → the thank-you page uses the current site address
  ics: '/legends-singapore.ics',
};

export const CAL_DESC = 'Private networking dinner for active investors.\nYour attendance is subject to confirmation by Legends.\nVenue details will be shared with confirmed guests.';

export const googleCalendarUrl = () => {
  const q = new URLSearchParams({
    action: 'TEMPLATE',
    text: EVENT.title,
    dates: `${EVENT.startUtc}/${EVENT.endUtc}`,
    details: CAL_DESC,
    location: 'Premium venue in Singapore (address shared with confirmed guests)',
  });
  return 'https://calendar.google.com/calendar/render?' + q.toString();
};
