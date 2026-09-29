
export default function Faq() {
  return (
    <>
      <section className="sec" id="faq" style={{paddingTop:"0"}}><div className="wrap" style={{maxWidth:"900px"}}>
      <div className="sec-head rv"><span className="kicker">Before you request</span><h2 className="h2">Questions</h2></div>
      <div className="faq rv">
      <details open><summary>Who attends?<i></i></summary><p>People on the investing side — angels, family offices, LPs, fund partners and corporate investors — plus a small number of founders invited by members. Every guest is reviewed by the team.</p></details>
      <details><summary>Is there a fee?<i></i></summary><p>Pricing for the October series will be confirmed with your invite. Legends takes no percentage of any deal made through the network.</p></details>
      <details><summary>Can I pitch at the meeting?<i></i></summary><p>No. There are no pitch slots. Introductions are made by the team, matched in advance, and only when both sides agree.</p></details>
      <details><summary>Where exactly is the venue?<i></i></summary><p>A private venue in each city. The address is shared with confirmed guests only.</p></details>
      <details><summary>I cannot make the date. What then?<i></i></summary><p>Request an invite for another city, or join Legends to get matched online between meetings.</p></details>
      </div></div></section>
    </>
  );
}
