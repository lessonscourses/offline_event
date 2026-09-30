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
       <div className="bg" data-speed=".22"><video autoPlay muted loop playsInline preload="auto" poster="https://cdn.pixabay.com/video/2023/05/12/162741-826328393_tiny.jpg"><source src="https://cdn.pixabay.com/video/2023/05/12/162741-826328393_tiny.mp4" type="video/mp4" /></video></div>
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
         <p className="lead">Twelve gatherings this quarter - Singapore, Dubai, Abu Dhabi, Riyadh, New York, Zurich, London and Palm Beach. In Singapore for the Milken Asia Summit, or able to fly in? This evening is for investors only: no pitches, no vendors. Legends hosts it independently of the summit.</p>
        </div>
        <div className="cor-map"><CityNetwork current="singapore" /></div>
       </div>
      </div></section>

      {/* ===== Who will be there ===== */}
      <section className="sec" id="guests" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Who will be there</span><h2 className="h2">The people you can expect to meet</h2></div>
       <p className="lead rv" style={{maxWidth:"400px",fontSize:"16px"}}>Investors only, reviewed personally - 10 active investors, never more than 12.</p></div>
       <div className="tables4">
        <div className="tbl rv"><span className="tbl-n">Family offices</span><h3>Looking for direct deals and co-investors</h3><p>Investing their own capital and looking for trusted partners.</p></div>
        <div className="tbl rv d1"><span className="tbl-n">CIOs & institutions</span><h3>Looking for managers and co-investment</h3><p>Allocators building exposure across Asia and beyond.</p></div>
        <div className="tbl rv d2"><span className="tbl-n">Fund partners & LPs</span><h3>Looking for capital partners and deal flow</h3><p>GPs who raise and lead - and the LPs behind them.</p></div>
        <div className="tbl rv d3"><span className="tbl-n">Private investors</span><h3>Looking for the right people around a deal</h3><p>Deploying their own capital, relevance over reach.</p></div>
       </div>
      </div></section>

      <section className="sec" id="schedule" style={{paddingTop:"0"}}><div className="wrap sched">
       <div className="sticky-head sec-head rv"><span className="kicker">Schedule of the evening</span><h2 className="h2">Three hours, planned so nothing is left to chance</h2>
       <p className="lead">Draft - the final agenda and guest investor go to confirmed guests.</p>
       <a className="btn gold" href="/#invite" style={{alignSelf:"flex-start",marginTop:"10px"}}>Request an invitation <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="sched-list"><span className="prog"></span><ol><li className=""><time>17:00</time><div className="card"><span className="kicker">Arrival</span><h3>Welcome drinks and first introductions</h3><p>Name cards with your focus, and your first match within minutes.</p></div></li><li className=""><time>17:30</time><div className="card"><span className="kicker">Opening</span><h3>Why we are here</h3><p>Who is here tonight and how the evening works.</p></div></li><li className="key"><time>17:45</time><div className="card"><span className="kicker">Conversation</span><h3>Fireside with a guest investor</h3><p>One investor, one real decision - what they saw, did and what it cost.</p></div></li><li className=""><time>18:15</time><div className="card"><span className="kicker">Dinner</span><h3>Tables seated by thesis</h3><p>Tables set by sector, stage or geography. A seat change between courses.</p></div></li><li className="key"><time>19:15</time><div className="card"><span className="kicker">Introductions</span><h3>Curated one-to-ones</h3><p>Pairs matched in advance, each with a clear reason.</p></div></li><li className=""><time>19:45</time><div className="card"><span className="kicker">Closed circle</span><h3>Late conversation</h3><p>A smaller circle for those who stay. Off the record.</p></div></li><li className=""><time>20:00</time><div className="card"><span className="kicker">After</span><h3>Follow-ups continue online</h3><p>Your introductions in writing the next morning.</p></div></li></ol></div>
      </div></section>

      <Gallery />

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap"><Quotes /></div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Next in October</span><h2 className="h2">After Singapore</h2></div><a className="tlink rv" {...eventLink("calendar")}>All cities <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="others"><a className="other rv" {...eventLink("dubai")}><div><b>Dubai</b><small>GCC private capital · SuperReturn Middle East week</small></div><span className="d">14 Oct<br />Wed</span></a><a className="other rv" {...eventLink("abu-dhabi")}><div><b>Abu Dhabi</b><small>Family capital · Campden Congress week</small></div><span className="d">21 Oct<br />Wed</span></a><a className="other rv" {...eventLink("riyadh")}><div><b>Riyadh</b><small>Saudi + global capital · FII10 week</small></div><span className="d">28 Oct<br />Wed</span></a></div>
      </div></section>

      <InviteForm />
      <Faq />

    </>
  );
}
