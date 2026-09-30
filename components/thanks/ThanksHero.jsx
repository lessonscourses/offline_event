'use client';
import { useEffect, useState } from 'react';
import { EVENT } from '@/data/event';

// Greets by first name if the form stored it (sessionStorage).
export default function ThanksHero() {
  const [name, setName] = useState('');
  useEffect(() => {
    try { const d = JSON.parse(sessionStorage.getItem('legends-apply') || '{}'); setName((d.name || '').trim().split(' ')[0]); } catch {}
  }, []);
  return (
    <section className="ty-hero">
      <span className="ty-badge"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></i>Request received</span>
      <h1>Thank you{name ? `, ${name}` : ''}.<span>See you in {EVENT.city}</span></h1>
      <p>Your request is in. Our manager will contact you shortly to confirm it.</p>
    </section>
  );
}
