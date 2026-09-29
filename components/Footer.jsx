import { SERIES_URL, CITY_URL, MAIN_URL } from '@/data/links';

export default function Footer() {
  return (
    <>
      <footer><div className="wrap"><div className="foot">
      <div><a className="brand" href={SERIES_URL}><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a><p style={{marginTop:"18px",fontSize:"14px",color:"var(--ink-3)",maxWidth:"300px"}}>The right person. At the right moment.</p></div>
      <div><h4>October</h4><ul><li><a href={SERIES_URL}>New York · 8 Oct</a></li><li><a href={CITY_URL["san-francisco"]}>San Francisco · 15 Oct</a></li><li><a href={CITY_URL["london"]}>London · 22 Oct</a></li><li><a href={CITY_URL["amsterdam"]}>Amsterdam · 29 Oct</a></li></ul></div>
      <div><h4>Legends</h4><ul><li><a href={MAIN_URL + "/how"}>How it works</a></li><li><a href={MAIN_URL + "/membership"}>Membership</a></li><li><a href={MAIN_URL + "/events"}>Events</a></li></ul></div>
      <div><h4>Members</h4><ul><li><a href={MAIN_URL + "/login"}>Log in</a></li><li><a href={MAIN_URL + "/apply"}>Apply</a></li></ul></div>
      <div className="legal"><span>© 2026 Legends</span><span>Terms · Privacy</span></div></div></div></footer>
    </>
  );
}
