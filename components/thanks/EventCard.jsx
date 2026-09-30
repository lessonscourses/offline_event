import { EVENT, googleCalendarUrl } from '@/data/event';

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2v4M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /></svg>;

export default function EventCard() {
  return (
    <section className="ty-card ty-event">
      <p className="ty-event-kicker"><b>Your meeting</b> · {EVENT.label} · Offline · Investors only</p>
      <p className="ty-event-title">{EVENT.title}</p>
      <div className="ty-event-date"><Cal /><span>{EVENT.date} · from about 6:30 PM local</span></div>
      <div className="ty-zones">{EVENT.zones.map(([t, c]) => <div key={c}><strong>{t}</strong><span>{c}</span></div>)}</div>
      <div className="ty-meta"><span><small>Where</small>Private venue in Singapore — address shared after confirmation</span><span><small>Guests</small>8–10 investors, reviewed personally</span></div>
      <p className="ty-hint">Hold the date in your calendar (the time is approximate and confirmed with the schedule):</p>
      <div className="ty-actions">
        <a className="ty-btn gold" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer"><Cal />Google Calendar</a>
        <a className="ty-btn outline" href={EVENT.ics} download="legends-singapore.ics">Apple or Outlook</a>
      </div>
    </section>
  );
}
