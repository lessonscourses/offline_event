import { eventLink } from '@/data/links';

// Links, legal entity and address as on belegends.club
const SITE = 'https://belegends.club';

export default function Footer() {
  return (
    <footer><div className="wrap"><div className="foot">
      <div>
        <a className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a>
        <p className="foot-about">A private network for decision-makers – curated introductions, private events, and a trusted circle.</p>
      </div>
      <div><h4>October</h4><ul>
        <li><a href="/">Singapore · 8 Oct</a></li>
        <li><a {...eventLink("dubai")}>Dubai · 14 Oct</a></li>
        <li><a {...eventLink("abu-dhabi")}>Abu Dhabi · 21 Oct</a></li>
        <li><a {...eventLink("riyadh")}>Riyadh · 28 Oct</a></li>
      </ul></div>
      <div><h4>Explore</h4><ul>
        <li><a href={SITE + '/'}>Home</a></li>
        <li><a href={SITE + '/events'}>Events</a></li>
        <li><a href={SITE + '/blog'}>Blog</a></li>
        <li><a href={SITE + '/apply'}>Apply</a></li>
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:concierge@belegends.club">concierge@belegends.club</a></li>
        <li className="foot-muted">Legends Elite Events L.L.C.</li>
        <li className="foot-muted">Dubai, United Arab Emirates</li>
      </ul></div>
      <div className="legal">
        <span>© 2026 Legends Elite Events L.L.C. All rights reserved.</span>
        <span className="legal-links"><a href={SITE + '/privacy'}>Privacy</a><a href={SITE + '/terms'}>Terms</a><a href={SITE + '/codex'}>Codex of Honour</a></span>
      </div>
    </div></div></footer>
  );
}
