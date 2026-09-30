'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './apply.css';

// Apply form in the #invite section.
// Prototype: no backend yet - any valid submit goes to /thank-you.
// TODO: send `data` to the CRM / API before redirecting.
export default function ApplyForm({ idPrefix = 'af', autoFocus = false }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try { sessionStorage.setItem('legends-apply', JSON.stringify({ name: data.name || '' })); } catch {}
    setSending(true);
    setTimeout(() => router.push('/thank-you'), 400);
  };

  const id = (k) => `${idPrefix}-${k}`;
  return (
    <form className="af" onSubmit={onSubmit}>
      <div className="af-field">
        <label htmlFor={id('name')}>Full name <b>*</b></label>
        <input id={id('name')} name="name" required placeholder="Your full name" autoComplete="name" autoFocus={autoFocus} />
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('email')}>Email <b>*</b></label>
          <input id={id('email')} name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="af-field">
          <label htmlFor={id('phone')}>Phone (with country code) <b>*</b></label>
          <input id={id('phone')} name="phone" type="tel" required placeholder="+65 8000 0000" autoComplete="tel" />
        </div>
      </div>
      <div className="af-field">
        <label htmlFor={id('linkedin')}>LinkedIn URL <b>*</b></label>
        <input id={id('linkedin')} name="linkedin" type="url" required placeholder="https://linkedin.com/in/…" />
      </div>
      <label className="af-check">
        <input type="checkbox" name="consent" />
        <span>Legends may contact me by phone, SMS, and messaging apps about my application, events, and related offers, and such calls may be recorded. I can withdraw at any time. <em>(Optional)</em></span>
      </label>
      <button className="af-submit" type="submit" disabled={sending}>
        {sending ? 'Sending…' : <>Submit · We’ll review &amp; be in touch →</>}
      </button>
      <p className="af-legal">By submitting, you agree to our <a href="https://belegends.club/terms">Terms</a> &amp; <a href="https://belegends.club/privacy">Privacy</a>.</p>
    </form>
  );
}
