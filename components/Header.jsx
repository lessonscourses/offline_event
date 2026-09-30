import { eventLink } from '@/data/links';

export default function Header() {
  return (
    <>
      <header className="hdr"><div className="hdr-in">
      <a className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a>
      <nav className="nav"><a href="/#idea">The idea</a><a href="/#network">Network</a><a href="/#schedule">Schedule</a><a href="/#gallery">Gallery</a><a href="/#faq">FAQ</a><a {...eventLink("calendar")}>All cities</a></nav>
      <div className="hdr-act"><a className="btn" href="/#invite">Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <button className="burger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h16M4 16h16"/></svg></button></div>
      </div></header>
      <nav className="mnav"><a href="/#idea">The idea</a><a href="/#network">Network</a><a href="/#schedule">Schedule</a><a href="/#gallery">Gallery</a><a href="/#faq">FAQ</a><a {...eventLink("calendar")}>All cities</a><a className="btn gold" href="/#invite">Request an invite</a></nav>

    </>
  );
}
