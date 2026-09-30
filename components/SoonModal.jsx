'use client';
import { useEffect, useState } from 'react';
import { CITIES } from '@/data/cities';
import './soon.css';

// Temporary: other Legends gatherings do not have their own pages yet.
// Links built with eventLink() carry data-soon="<city key>" (or "calendar") and open this modal instead.
export default function SoonModal() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const t = e.target.closest('[data-soon]');
      if (!t) return;
      e.preventDefault();
      setKey(t.getAttribute('data-soon'));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!key) return;
    const onKey = (e) => e.key === 'Escape' && setKey(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [key]);

  if (!key) return null;
  const city = CITIES.find((c) => c.key === key);
  const others = CITIES.filter((c) => c.key !== 'singapore');
  const close = () => setKey(null);
  // close and scroll to the invite form (or go to it from another page)
  const apply = () => { setKey(null); const el = document.getElementById('invite'); if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.location.href = '/#invite'; };

  return (
    <div className="sm" role="dialog" aria-modal="true" aria-labelledby="sm-title" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="sm-card">
        <button className="sm-close" type="button" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <span className="sm-kicker">Coming soon</span>
        {city ? (
          <>
            <h2 id="sm-title">{city.city} · {Number(city.day)} October</h2>
            <p className="sm-date">{city.date}</p>
            <p>This gathering is being prepared right now — its page will open shortly.</p>
            <p>Would you like to be there too? Request an invite for Singapore, and when our manager contacts you, mention that you would also like to attend <b>{city.city}</b>. We will keep a place for you on the list.</p>
          </>
        ) : (
          <>
            <h2 id="sm-title">The full calendar is on its way</h2>
            <p>More Legends gatherings are planned in the coming weeks. Their pages will open shortly.</p>
            <ul className="sm-list">{others.map((c) => <li key={c.key}><b>{c.city}</b><span>{c.dow}, {Number(c.day)} Oct</span></li>)}</ul>
            <p>Interested in one of them? Tell our manager when they contact you about Singapore — we will add you to the list.</p>
          </>
        )}
        <div className="sm-actions">
          <button type="button" className="sm-btn gold" onClick={apply}>Request an invite for Singapore</button>
          <button type="button" className="sm-btn" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
}
