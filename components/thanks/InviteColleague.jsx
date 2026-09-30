'use client';
import { useEffect, useState } from 'react';
import { EVENT } from '@/data/event';

export default function InviteColleague() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(EVENT.shareUrl);
  useEffect(() => { if (!EVENT.shareUrl) setUrl(window.location.origin); }, []);
  const text = `Legends Investor Meeting in Singapore - ${EVENT.date}. A curated, investor-only evening. Request an invitation: ${url}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); } catch {
      const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch {} ta.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="ty-card">
      <span className="ty-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
      <h2>Invite a colleague</h2>
      <p>The evening is small. Share it with an investor who should be there.</p>
      <div className="ty-chips">
        <a className="ty-chip" href={'https://wa.me/?text=' + encodeURIComponent(text)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button type="button" className={'ty-chip' + (copied ? ' on' : '')} onClick={copy} aria-live="polite">{copied ? 'Link copied' : 'Copy link'}</button>
      </div>
    </section>
  );
}
