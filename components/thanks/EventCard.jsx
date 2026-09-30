import { EVENT, googleCalendarUrl } from '@/data/event';

const Cal = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2v4M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /></svg>;

export default function EventCard() {
  return (
    <section className="ty-card ty-event">
      <p className="ty-event-kicker"><b>Your meeting</b> · {EVENT.label} · Offline · Investors only</p>
      <p className="ty-event-title">{EVENT.title}</p>
      <div className="ty-event-date"><Cal /><span>{EVENT.date} · from 5:15 PM local</span></div>
      <div className="ty-meta"><span><small>Where</small>Private venue - address after confirmation</span><span><small>Guests</small>8-10 investors</span></div>
      <p className="ty-hint">Hold the date (time is approximate):</p>
      <div className="ty-actions">
        <a className="ty-btn gold" href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer"><Cal />Google Calendar</a>
        <a className="ty-btn outline" href={EVENT.ics} download="legends-singapore.ics">Apple or Outlook</a>
      </div>
    </section>
  );
}
