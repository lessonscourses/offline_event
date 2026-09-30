import { EVENT, googleCalendarUrl } from '@/data/event';

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2v4M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /></svg>;
const Pin = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>;

export default function EventCard() {
  return (
    <section className="ty-card ty-event">
      <p className="ty-kicker">Event details</p>
      <h2 className="ty-event-title">Legends Investor Dinner - Singapore</h2>
      <ul className="ty-details">
        <li><Cal /><span><b>{EVENT.date}</b>5:00-8:00 PM</span></li>
        <li><Pin /><span><b>Premium venue in Singapore</b><em>Address shared with confirmed guests</em></span></li>
      </ul>
      <p className="ty-hint">Hold the date while we review your details.</p>
      <div className="ty-actions">
        <a className="ty-btn gold" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer"><Cal />Google Calendar</a>
        <a className="ty-btn outline" href={EVENT.ics} download="legends-singapore.ics"><Cal />Apple / Outlook</a>
      </div>
    </section>
  );
}
