import CityNetwork from '@/components/CityNetwork';
import { CITIES } from '@/data/cities';
import { eventLink } from '@/data/links';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import InviteForm from '@/components/InviteForm';
import Quotes from '@/components/Quotes';

export const metadata = { title: "Legends Investor Meeting - Singapore", description: "Private networking dinner for investors in Singapore, 8 October 2026." };

const CITY = CITIES.find((c) => c.key === 'singapore');

export default function Page() {
  return (
    <>

      <section className="c-hero" id="top">
       <div className="bg" data-speed=".22" style={{backgroundImage:"url(https://i.ytimg.com/vi/Rp-yJu-coKY/maxresdefault.jpg)"}}><iframe className="yt-bg" src="https://www.youtube-nocookie.com/embed/Rp-yJu-coKY?autoplay=1&mute=1&loop=1&playlist=Rp-yJu-coKY&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0" title="Singapore at night" allow="autoplay; encrypted-media" tabIndex={-1} aria-hidden="true"></iframe></div>
       <div className="c-city" data-speed=".5" data-axis="x">SINGAPORE · SINGAPORE ·</div>
       <div className="wrap">
        <span className="kicker rv" style={{display:"block"}}>Singapore · 8 October 2026 · Investors only</span>
        <h1 className="rv d1">Private Networking Dinner<br />for Investors</h1>
        <p className="lead rv d2">Meet potential co-investors, discover deals shared by fellow investors and explore access to additional capital for your next deal.</p>
        <p className="lead rv d2" style={{marginTop:"12px"}}>Connect with like-minded peers, share perspectives and build friendships in a relaxed, private setting.</p>
        <div className="c-row">
         <div>
          <div className="c-facts rv d2">
           <span>Date<b>{CITY.date}</b></span>
           <span>Time<b>17:00 - 20:00 local</b></span>
           <span>Where<b>Premium venue in Singapore</b></span>
           <span>Guests<b>10 active investors only</b></span>
           <span>During<b>Milken Institute Asia Summit week</b></span>
          </div>
          <div className="ctas rv d3"><a className="btn gold" href="/#invite">Request an invitation <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn ghost" href="#schedule">See the schedule</a></div>
         </div>
         <div className="cd rv d3" data-count={CITY.utc}>
          <div className="cd-c"><b>-</b><span>days</span></div><div className="cd-c"><b>-</b><span>hours</span></div><div className="cd-c"><b>-</b><span>min</span></div><div className="cd-c"><b>-</b><span>sec</span></div>
         </div>
        </div>
       </div>
      </section>

      <section className="sec" id="idea"><div className="wrap concept">
       <div className="pics rv"><div className="p1" data-speed="-.06" style={{backgroundImage:"url(/gallery/evening-1.jpg)"}}></div><div className="p2" data-speed=".1" style={{backgroundImage:"url(/gallery/evening-2.jpg)"}}></div></div>
       <div>
        <span className="kicker rv">Why this dinner</span>
        <h2 className="big rv d1" style={{marginTop:"16px"}}>10 investors. One private evening</h2>
        <p className="lead rv d2">Every guest is selected because they actively invest or allocate capital. No mixed audience, no service providers and no people coming to pitch.</p>
        <p className="lead rv d2">During Milken Institute Asia Summit week, this is one focused evening to spend with peers, exchange perspectives, discuss deals and build relationships in a relaxed private setting.</p>
        <p className="accent-line rv d3">No stage. No pitches. No brokers. No random networking.</p>
        <div className="pill-row rv d3"><span>Private Investors</span><span>Family Offices</span><span>CIOs</span><span>LPs / Allocators</span><span>Fund Partners</span><span>Institutional Investors</span></div>
       </div>
      </div></section>

      {/* ===== One network, many cities ===== */}
      <section className="sec" id="network" style={{paddingTop:"0"}}><div className="wrap">
       <div className="corridor rv">
        <div className="cor-text">
         <span className="kicker">One network · many cities</span>
         <h2 className="h2">Fly in for the evening</h2>
         <p className="lead">Legends brings active investors together in small, private gatherings across key global investment hubs.</p>
         <p className="lead">Singapore is one of the cities where we host these dinners - alongside Dubai, Abu Dhabi, Riyadh, London, Zurich, New York and Palm Beach.</p>
         <p className="lead">The format stays intentionally simple: a carefully selected group of investors, one table, one evening, and no unnecessary programme.</p>
         <p className="lead">In Singapore, the dinner takes place during Milken Institute Asia Summit week. Legends is independent from the summit.</p>
         <p className="accent-line">10 investors. One table. One evening.</p>
        </div>
        <div className="cor-map"><CityNetwork current="singapore" /></div>
       </div>
      </div></section>

      {/* ===== Who will be there ===== */}
      <section className="sec" id="guests" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Who will be there</span><h2 className="h2">The people you can expect to meet</h2></div>
       <div className="rv" style={{maxWidth:"440px"}}><p className="lead" style={{fontSize:"16px"}}>Investor-only. Every guest is personally reviewed and confirmed.</p><p className="lead" style={{fontSize:"16px",marginTop:"10px"}}>The gathering is limited to 10 active investors - people who deploy or allocate capital through their own investments, family offices, funds or institutions.</p></div></div>
       <div className="tables4">
        <div className="tbl rv"><span className="tbl-n" style={{textTransform:"none"}}>FAMILY OFFICES</span><h3>Principals & investment teams</h3><p>Family office decision-makers investing family capital across direct deals, funds and private markets.</p></div>
        <div className="tbl rv d1"><span className="tbl-n" style={{textTransform:"none"}}>CIOs & INSTITUTIONS</span><h3>Capital allocators</h3><p>CIOs and senior investment professionals responsible for allocating institutional capital.</p></div>
        <div className="tbl rv d2"><span className="tbl-n" style={{textTransform:"none"}}>FUND PARTNERS & LPs</span><h3>GPs & allocators</h3><p>Fund partners actively deploying capital, alongside LPs allocating to managers and private-market opportunities.</p></div>
        <div className="tbl rv d3"><span className="tbl-n" style={{textTransform:"none"}}>PRIVATE INVESTORS</span><h3>Investing their own capital</h3><p>Active private investors and investor-operators making direct investment decisions with their own capital.</p></div>
       </div>
       <p className="guests-note rv">No founders. No brokers. No service providers. Investors only.</p>
      </div></section>

      <section className="sec" id="schedule" style={{paddingTop:"0"}}><div className="wrap sched">
       <div className="sticky-head sec-head rv"><span className="kicker">Schedule of the evening</span><h2 className="h2">Three hours. Simple by design</h2>
       <p className="lead">Enough structure to make the evening useful. Enough freedom for real conversations to happen naturally.</p>
       <a className="btn gold" href="/#invite" style={{alignSelf:"flex-start",marginTop:"10px"}}>Request an invitation <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="sched-list"><span className="prog"></span><ol><li className=""><time>17:00</time><div className="card"><span className="kicker">Arrival</span><h3>Arrival & check-in</h3><p>Guests arrive, check in and begin meeting the other investors around the table.</p></div></li><li className=""><time>17:30</time><div className="card"><span className="kicker">Introductions</span><h3>Meet everyone around the table</h3><p>A short introduction from each guest: who you are, what you invest in and what is currently on your radar.</p></div></li><li className="key"><time>18:00</time><div className="card"><span className="kicker">Asks & gives</span><h3>What are you looking for - and what can you offer?</h3><p>Each investor shares current asks, opportunities and areas where they can be useful to others - from deals and co-investment to capital, expertise and connections.</p><p>Often, the value starts immediately: one investor shares an ask, and someone else already knows the right person, opportunity or solution.</p></div></li><li className="key"><time>18:30</time><div className="card"><span className="kicker">Dinner & open networking</span><h3>The rest of the evening is yours</h3><p>Dinner and open conversation. Share market views, discuss deals and trends, continue the conversations that matter - or simply enjoy the evening with other investors.</p></div></li><li className=""><time>20:00</time><div className="card"><span className="kicker">Close</span><h3>Stay connected beyond Singapore</h3><p>The dinner ends. The relationships do not.</p></div></li></ol></div>
       <p className="guests-note sched-note rv">No presentations. No pitching. No forced networking exercises.</p>
      </div></section>

      <Gallery />

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap"><Quotes /></div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Next cities</span><h2 className="h2">Where Legends meets next</h2></div><a className="tlink rv" {...eventLink("calendar")}>View all cities <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="others"><a className="other rv" {...eventLink("dubai")}><div><b>Dubai</b><span className="o-date">14 October</span><small>During SuperReturn Middle East week</small></div><span className="o-arr">→</span></a><a className="other rv" {...eventLink("abu-dhabi")}><div><b>Abu Dhabi</b><span className="o-date">21 October</span><small>During Campden Congress week</small></div><span className="o-arr">→</span></a><a className="other rv" {...eventLink("riyadh")}><div><b>Riyadh</b><span className="o-date">28 October</span><small>During FII10 week</small></div><span className="o-arr">→</span></a></div>
      </div></section>

      <InviteForm />
      <Faq />

    </>
  );
}
