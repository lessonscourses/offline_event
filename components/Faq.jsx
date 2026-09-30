const QA = [
  ['Is this part of Milken Institute Asia Summit?', ['No. Legends is independent from the summit. The dinner takes place in Singapore during Milken Institute Asia Summit week.']],
  ['Is there a fee?', ['There is no attendance fee for confirmed guests. Food and drinks are settled directly with the venue.']],
  ['Where is the venue?', ['At a premium venue in Singapore. The exact location is shared with confirmed guests.']],
  ['What happens after I apply?', ['We review your details and may contact you briefly. If approved, we confirm your seat and share the venue details.']],
  ['Can’t make 8 October?', ['Still apply. If demand exceeds capacity, we may host another investor dinner in Singapore on a nearby date.']],
];

export default function Faq() {
  return (
    <>
      <section className="sec" id="faq" style={{paddingTop:"0"}}><div className="wrap" style={{maxWidth:"900px"}}>
      <div className="sec-head rv"><span className="kicker">Good to know</span><h2 className="h2">Questions</h2></div>
      <div className="faq rv">
        {QA.map(([q, a], i) => (
          <details key={q} open={i === 0}><summary>{q}<i></i></summary>{a.map((p) => <p key={p}>{p}</p>)}</details>
        ))}
      </div></div></section>
    </>
  );
}
