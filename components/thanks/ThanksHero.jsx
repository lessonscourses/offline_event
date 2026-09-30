'use client';
import useApplicant from './useApplicant';

export default function ThanksHero() {
  const { first } = useApplicant();
  return (
    <section className="ty-hero">
      <span className="ty-badge"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-10" /></svg></i>Request received</span>
      <h1>Thank you{first ? `, ${first}` : ''}.<span>Your request is under review.</span></h1>
      <p>Our team will contact you shortly to learn a little more about your investment profile and confirm availability.</p>
    </section>
  );
}
