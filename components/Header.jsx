import HeaderCta from './HeaderCta';
import { eventLink } from '@/data/links';

export default function Header() {
  return (
    <>
      <header className="hdr"><div className="hdr-in">
      <a className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a>
      <nav className="nav"><a href="/#idea">Why this dinner</a><a href="/#network">Network</a><a href="/#schedule">Schedule</a><a href="/#gallery">Gallery</a><a href="/#faq">FAQ</a><a {...eventLink("calendar")}>All cities</a></nav>
      <div className="hdr-act"><HeaderCta />
      <button className="burger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h16M4 16h16"/></svg></button></div>
      </div></header>
      <nav className="mnav"><a href="/#idea">Why this dinner</a><a href="/#network">Network</a><a href="/#schedule">Schedule</a><a href="/#gallery">Gallery</a><a href="/#faq">FAQ</a><a {...eventLink("calendar")}>All cities</a><HeaderCta className="btn gold" /></nav>

    </>
  );
}
