import { EVENT, googleCalendarUrl } from '@/data/event';

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2v4M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /></svg>;
const Pin = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
const People = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6 6 0 0 1 3.5 5.5" /></svg>;

export default function EventCard() {
  return (
    <section className="ty-card ty-event">
      <p className="ty-kicker">Your request</p>
      <h2 className="ty-event-title">Legends Investor Dinner - Singapore</h2>
      <ul className="ty-details">
        <li><Cal /><span><b>{EVENT.date}</b>17:00 - 20:00 local time</span></li>
        <li><Pin /><span><b>Premium venue in Singapore</b><em>Address shared with confirmed guests</em></span></li>
        <li><People /><span><b>10 active investors only</b></span></li>
      </ul>
      <p className="ty-hint">You can hold the time in your calendar while your request is being reviewed.</p>
      <div className="ty-actions">
        <a className="ty-btn gold" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer"><Cal />Hold in Google Calendar</a>
        <a className="ty-btn outline" href={EVENT.ics} download="legends-singapore.ics"><Cal />Hold in Apple / Outlook</a>
      </div>
    </section>
  );
}
