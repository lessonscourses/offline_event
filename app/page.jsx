import CityNetwork from '@/components/CityNetwork';
import { CITIES } from '@/data/cities';
import { eventLink } from '@/data/links';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import InviteForm from '@/components/InviteForm';

export const metadata = { title: "Legends Investor Meeting - Singapore", description: "Private networking dinner for investors in Singapore, 8 October 2026." };

const CITY = CITIES.find((c) => c.key === 'singapore');

export default function Page() {
  return (
    <>

      <section className="c-hero" id="top">
       <div className="bg" data-speed=".22" style={{backgroundImage:"url(/video/singapore-hero.jpg)"}}><video autoPlay muted loop playsInline preload="auto" poster="/video/singapore-hero.jpg"><source src="/video/singapore-hero.mp4" type="video/mp4" /></video></div>
       <div className="c-city" data-speed=".5" data-axis="x">SINGAPORE · SINGAPORE ·</div>
       <div className="wrap">
        <span className="kicker rv" style={{display:"block"}}>Singapore · 8 October 2026</span>
        <h1 className="rv d1">Private Networking Dinner <br className="br-d" />for Investors</h1>
        <p className="lead rv d2">Meet potential co-investors, discover deals and explore additional capital for your next opportunity.</p>
        <p className="lead rv d2" style={{marginTop:"12px"}}>Build new partnerships with like-minded investors in a relaxed, private setting.</p>
        <div className="c-row">
         <div>
          <div className="c-facts rv d2">
           <span>Date<b>8 October 2026</b></span>
           <span>Time<b>17:00-20:00</b></span>
           <span>Where<b>Premium venue, Singapore</b></span>
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
        <h2 className="big rv d1" style={{marginTop:"16px"}}>10 investors. Nothing extra</h2>
        <p className="lead rv d2">A private dinner for active investors only - a focused way to meet peers and have useful conversations.</p>
        <p className="accent-line rv d3">No stage. No pitches. No brokers. No random networking.</p>
       </div>
      </div></section>

      {/* ===== One network, many cities ===== */}
      <section className="sec" id="network" style={{paddingTop:"0"}}><div className="wrap">
       <div className="corridor rv">
        <div className="cor-text">
         <span className="kicker">One network · many cities</span>
         <h2 className="h2">Fly in for the evening</h2>
         <p className="lead">Legends hosts investor dinners across key global investment hubs - from Singapore and Dubai to London, New York and Palm Beach.</p>
         <p className="accent-line">10 investors. One table. One evening.</p>
        </div>
        <div className="cor-map"><CityNetwork current="singapore" /></div>
       </div>
      </div></section>

      {/* ===== Who will be there ===== */}
      <section className="sec" id="guests" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv head-wide"><span className="kicker">Who will be there</span><h2 className="h2 h2-one">The people around the table</h2></div>
       <p className="lead rv" style={{maxWidth:"440px",fontSize:"16px"}}>Private investors, Family Offices, CIOs, LPs, fund partners and institutional allocators.</p></div>
       <div className="tables4">
        <div className="tbl rv"><img className="tbl-ic" src="/icons/family-office.png" alt="" /><span className="tbl-n" style={{textTransform:"none"}}>FAMILY OFFICES</span><h3>Principals & investment teams</h3><p>Investing family capital across direct deals, funds and private markets.</p></div>
        <div className="tbl rv d1"><img className="tbl-ic" src="/icons/institutions.png" alt="" /><span className="tbl-n" style={{textTransform:"none"}}>CIOs & INSTITUTIONS</span><h3>Capital allocators</h3><p>Senior investment professionals responsible for institutional capital.</p></div>
        <div className="tbl rv d2"><img className="tbl-ic" src="/icons/fund-lp.png" alt="" /><span className="tbl-n" style={{textTransform:"none"}}>FUND PARTNERS & LPs</span><h3>GPs & allocators</h3><p>Fund partners deploying capital and LPs allocating to managers and private markets.</p></div>
        <div className="tbl rv d3"><img className="tbl-ic" src="/icons/private.png" alt="" /><span className="tbl-n" style={{textTransform:"none"}}>PRIVATE INVESTORS</span><h3>Investing their own capital</h3><p>Active private investors and investor-operators making direct investment decisions.</p></div>
       </div>
       <p className="guests-note rv">No founders. No brokers. No service providers. Investors only.</p>
      </div></section>

      <section className="sec" id="schedule" style={{paddingTop:"0"}}><div className="wrap sched">
       <div className="sticky-head sec-head rv"><span className="kicker">Schedule of the evening</span><h2 className="h2">Three hours. Simple by design</h2>
       <p className="lead">Enough structure to make it useful. Enough freedom for real conversation.</p>
       <a className="btn gold" href="/#invite" style={{alignSelf:"flex-start",marginTop:"10px"}}>Request an invitation <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="sched-list"><span className="prog"></span><ol><li className=""><time>17:00</time><div className="card"><span className="kicker">Arrival</span><h3>Arrival & check-in</h3><p>Arrive, settle in and meet the other investors.</p></div></li><li className=""><time>17:30</time><div className="card"><span className="kicker">Introductions</span><h3>Meet everyone around the table</h3><p>Who you are, what you invest in and what’s currently on your radar.</p></div></li><li className="key"><time>18:00</time><div className="card"><span className="kicker">Asks & gives</span><h3>What are you looking for - and what can you offer?</h3><p>Share your current asks, opportunities and where you can help others.</p></div></li><li className="key"><time>18:30</time><div className="card"><span className="kicker">Dinner & open networking</span><h3>The rest of the evening is yours</h3><p>Dinner, market views, deals and open conversation.</p></div></li><li className=""><time>20:00</time><div className="card"><span className="kicker">Close</span><h3>The dinner ends. The network continues</h3><p>Stay connected with the investors you meet. Legends members continue the conversation through the platform and investor dinners in other cities.</p><p className="sched-kick">One evening can open a much larger network.</p></div></li></ol></div>
      </div></section>

      <Gallery />

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Next cities</span><h2 className="h2">Upcoming investor dinners</h2></div><a className="tlink rv" {...eventLink("calendar")}>View all cities <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="others"><a className="other rv" {...eventLink("dubai")}><div><b>Dubai</b><span className="o-date">14 October</span><small>During SuperReturn Middle East week</small></div><span className="o-arr">→</span></a><a className="other rv" {...eventLink("abu-dhabi")}><div><b>Abu Dhabi</b><span className="o-date">21 October</span><small>During Campden Congress week</small></div><span className="o-arr">→</span></a><a className="other rv" {...eventLink("riyadh")}><div><b>Riyadh</b><span className="o-date">28 October</span><small>During FII10 week</small></div><span className="o-arr">→</span></a></div>
      </div></section>

      <InviteForm />
      <Faq />

    </>
  );
}
