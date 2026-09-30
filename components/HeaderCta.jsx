'use client';
import { usePathname } from 'next/navigation';

const Arr = () => <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

// Header / mobile-menu CTA: "Request an invitation" on the landing, "Back to event" on the thank-you page.
export default function HeaderCta({ className = 'btn' }) {
  const thanks = (usePathname() || '').startsWith('/thank-you');
  return thanks
    ? <a className={className} href="/">Back to event <Arr /></a>
    : <a className={className} href="/#invite">Request an invitation <Arr /></a>;
}
