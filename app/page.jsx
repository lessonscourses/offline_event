import { SERIES_URL, CITY_URL } from '@/data/links';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import InviteForm from '@/components/InviteForm';
import Quotes from '@/components/Quotes';

export const metadata = { title: "Legends Investor Meeting \u2014 New York, 8 October", description: "A curated evening for investors in New York on Thursday, 8 October 2026." };

export default function Page() {
  return (
    <>

      <section className="c-hero" id="top">
       <div className="bg" data-speed=".22"><video autoPlay muted loop playsInline poster="https://belegends.club/assets/site-loop-poster.jpg"><source src="https://belegends.club/assets/site-loop.webm" type="video/webm" /></video></div>
       <div className="c-city" data-speed=".5" data-axis="x">NEW YORK · NEW YORK ·</div>
       <div className="wrap">
        <div className="crumbs rv" style={{color:"rgba(255,255,255,.6)"}}><a href={SERIES_URL}>Investor Meetings</a><span>/</span><span>New York</span></div>
        <span className="kicker rv" style={{display:"block",marginTop:"22px"}}>Legends Investor Meeting · Offline</span>
        <h1 className="rv d1">New York.<br />An evening with the people who deploy capital.</h1>
        <p className="lead rv d2">A small, curated investor evening. Matched before you arrive, seated by thesis, introduced only when both sides agree.</p>
        <div className="c-row">
         <div>
          <div className="c-facts rv d2">
           <span>Date<b>Thursday, 8 October 2026</b></span>
           <span>Time (draft)<b>18:30 – 22:30 local</b></span>
           <span>Where<b>Private venue in New York</b></span>
           <span>Local time now<b data-tz="America/New_York">--:--</b></span>
          </div>
          <div className="ctas rv d3"><a className="btn gold" href="#invite">Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn ghost" href="#schedule">See the schedule</a></div>
         </div>
         <div className="cd rv d3" data-count="2026-10-08T22:30:00Z">
          <div className="cd-c"><b>–</b><span>days</span></div><div className="cd-c"><b>–</b><span>hours</span></div><div className="cd-c"><b>–</b><span>min</span></div><div className="cd-c"><b>–</b><span>sec</span></div>
         </div>
        </div>
       </div>
      </section>

      <section className="sec" id="idea"><div className="wrap concept">
       <div className="pics rv"><div className="p1" data-speed="-.06" style={{backgroundImage:"url(https://belegends.club/assets/block-6-1.jpg)"}}></div><div className="p2" data-speed=".1" style={{backgroundImage:"url(https://belegends.club/assets/block-6-4.jpg)"}}></div></div>
       <div>
        <span className="kicker rv">The idea</span>
        <p className="big rv d1" style={{marginTop:"16px"}}>One evening in New York where every person at the table is there for a reason — and you know that reason before you sit down.</p>
        <p className="lead rv d2">It is the same principle as the Legends network: relevance over reach. We read what you invest in and what you are looking for, match you with the right people, and let the evening do the rest.</p>
        <div className="pill-row rv d3"><span>Angels</span><span>Family offices</span><span>LPs</span><span>Fund partners</span><span>Corporate venture</span><span>Invited founders</span></div>
       </div>
      </div></section>

      <section className="sec" id="schedule" style={{paddingTop:"0"}}><div className="wrap sched">
       <div className="sticky-head sec-head rv"><span className="kicker">Schedule of the evening</span><h2 className="h2">Four hours, planned so nothing is left to chance.</h2>
       <p className="lead">Draft schedule — the final agenda and the guest investor are shared with confirmed attendees.</p>
       <a className="btn gold" href="#invite" style={{alignSelf:"flex-start",marginTop:"10px"}}>Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="sched-list"><span className="prog"></span><ol><li className=""><time>18:30</time><div className="card"><span className="kicker">Arrival</span><h3>Welcome drinks and first introductions</h3><p>Name cards with your focus. The team introduces you to your first match within minutes.</p></div></li><li className=""><time>19:00</time><div className="card"><span className="kicker">Opening</span><h3>Why we are here</h3><p>A short welcome from the Legends team: who is in the venue tonight and how the evening works.</p></div></li><li className="key"><time>19:15</time><div className="card"><span className="kicker">Conversation</span><h3>Fireside with a guest investor</h3><p>One investor, one real decision — what they saw, what they did and what it cost. Guest announced to confirmed attendees.</p></div></li><li className=""><time>20:00</time><div className="card"><span className="kicker">Dinner</span><h3>Tables seated by thesis</h3><p>Dinner with investors who share your sector, stage or geography. A seat change between courses.</p></div></li><li className="key"><time>21:15</time><div className="card"><span className="kicker">Introductions</span><h3>Curated one-to-ones</h3><p>The team connects the pairs matched in advance — with a clear reason for each introduction.</p></div></li><li className=""><time>22:00</time><div className="card"><span className="kicker">Closed circle</span><h3>Late conversation</h3><p>A smaller circle for those who stay. Candid, off the record.</p></div></li><li className=""><time>22:30</time><div className="card"><span className="kicker">After</span><h3>Follow-ups continue online</h3><p>Next morning you get your introductions in writing, and matching continues in the network.</p></div></li></ol></div>
      </div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="prematch rv"><div className="rings"><i></i><i></i><i></i></div>
        <span className="kicker">Matched before you arrive</span>
        <h2 className="h2">You walk in knowing who to talk to.</h2>
        <div className="pm-grid">
         <div className="pm"><span className="n">01 · Before</span><h4>Share your context</h4><p>Thesis, ticket, sectors and who you want to meet — in your invite request.</p></div>
         <div className="pm"><span className="n">02 · The day before</span><h4>Get your matches</h4><p>The team sends the people we think you should meet, and why.</p></div>
         <div className="pm"><span className="n">03 · On the night</span><h4>Meet them in person</h4><p>We make the introductions. Contacts are shared only when both sides agree.</p></div>
        </div>
       </div>
      </div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="host rv"><img src="/brand/yanis.webp" alt="Yanis Chkhatval" />
        <div><span className="kicker">Your host</span><h3>Yanis Chkhatval</h3><p style={{fontWeight:"600",color:"var(--gold-d)",marginBottom:"10px"}}>Founder of Legends</p>
        <p>Legends started in Dubai with 80+ private gatherings and 1,300+ matchmakings. This October the format travels — with the same standard for who is in the venue.</p></div></div>
      </div></section>

      <Gallery />

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap"><Quotes /></div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">Also this October</span><h2 className="h2">Can’t make New York?</h2></div><a className="tlink rv" href={SERIES_URL + "#cities"}>All cities <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
       <div className="others"><a className="other rv" href={CITY_URL["san-francisco"]}><div><b>San Francisco</b><small>Investor meeting</small></div><span className="d">15 Oct<br />Thu</span></a><a className="other rv" href={CITY_URL["london"]}><div><b>London</b><small>Investor meeting</small></div><span className="d">22 Oct<br />Thu</span></a><a className="other rv" href={CITY_URL["amsterdam"]}><div><b>Amsterdam</b><small>Investor meeting</small></div><span className="d">29 Oct<br />Thu</span></a></div>
      </div></section>

      <InviteForm single city="new-york" />
      <Faq />

    </>
  );
}
