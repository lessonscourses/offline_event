'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './apply.css';
import { track } from '@/data/links';

// Apply form in the #invite section.
// Prototype: no backend yet - any valid submit goes to /thank-you.
// TODO: send `data` to the CRM / API before redirecting.
const PROFILES = ['Private Investor', 'Family Office', 'Fund / GP', 'LP / Allocator', 'Institutional Investor', 'Other'];
const SIZES = ['Under $100K', '$100K-500K', '$500K-1M', '$1M-5M', '$5M-10M', '$10M+', 'Varies by opportunity'];

export default function ApplyForm({ idPrefix = 'af', autoFocus = false }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try { sessionStorage.setItem('legends-apply', JSON.stringify({ name: (data.name || '').trim() })); } catch {}
    track('application_submitted', { event_city: 'singapore', investor_profile: data.profile || '' });
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
          <label htmlFor={id('email')}>Work email <b>*</b></label>
          <input id={id('email')} name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </div>
        <div className="af-field">
          <label htmlFor={id('phone')}>WhatsApp / mobile <b>*</b></label>
          <input id={id('phone')} name="phone" type="tel" required placeholder="+65 ..." autoComplete="tel" />
        </div>
      </div>
      <div className="af-row">
        <div className="af-field">
          <label htmlFor={id('linkedin')}>LinkedIn profile <b>*</b></label>
          <input id={id('linkedin')} name="linkedin" type="text" required placeholder="linkedin.com/in/..." pattern=".*linkedin\.com/.+" title="Please enter your LinkedIn profile link" />
        </div>
        <div className="af-field">
          <label htmlFor={id('profile')}>Investor profile <b>*</b></label>
          <select id={id('profile')} name="profile" required defaultValue="">
            <option value="" disabled>Select</option>
            {PROFILES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="af-field">
        <label htmlFor={id('focus')}>Investment focus <b>*</b></label>
        <span className="af-hint">Briefly describe the sectors, stages, geographies or asset classes you actively invest in.</span>
        <textarea id={id('focus')} name="focus" required rows={2} placeholder="e.g. B2B software, growth stage, Europe & Asia" />
      </div>
      <div className="af-field">
        <label htmlFor={id('size')}>Typical investment / allocation size</label>
        <select id={id('size')} name="size" defaultValue="">
          <option value="">Select range</option>
          {SIZES.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="af-field">
        <label htmlFor={id('value')}>What would make this evening valuable for you? <b>*</b></label>
        <span className="af-hint">A conversation, perspective, opportunity or type of investor you would value meeting.</span>
        <textarea id={id('value')} name="value" required rows={2} placeholder="A few words are enough" />
      </div>
      <button className="af-submit" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Request an invitation →'}
      </button>
      <p className="af-note">Requests are reviewed individually. Submission does not guarantee a seat.</p>
      <p className="af-legal">By submitting, you agree to our <a href="https://belegends.club/terms">Terms</a> &amp; <a href="https://belegends.club/privacy">Privacy</a>.</p>
    </form>
  );
}
