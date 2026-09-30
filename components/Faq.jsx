const QA = [
  ['Who attends?', [
    'The dinner is limited to 10 active investors.',
    'Guests may include private investors, Family Office principals, CIOs, LPs / allocators and fund partners. Every attendee is reviewed individually before their seat is confirmed.',
  ]],
  ['Is this part of Milken Institute Asia Summit?', [
    'No. Legends is an independent private investors network.',
    'We are hosting the dinner in Singapore during Milken Institute Asia Summit week because many investors are already in the city.',
  ]],
  ['Is there a fee?', [
    'There is no attendance fee for confirmed guests.',
    'Food and beverages are ordered individually and settled directly with the venue by each guest.',
  ]],
  ['Can I pitch a company, fund or service?', [
    'No.',
    'There are no presentations, founder pitches, broker pitches or service-provider sales during the evening. The purpose is investor-to-investor conversation.',
  ]],
  ['Where exactly is the venue?', [
    'At a premium venue in Singapore.',
    'The exact location is shared privately with confirmed guests before the dinner.',
  ]],
  ['What happens after I request an invitation?', [
    'Our team reviews every request personally.',
    'We may contact you briefly to understand your investment profile and confirm the details. If approved, you will receive your seat confirmation and venue information directly.',
  ]],
  ['I cannot make 8 October. Should I still apply?', [
    'Yes.',
    'When demand exceeds capacity, we may host an additional investor dinner in Singapore in the following days.',
    'Submit your request and let us know your availability. If another dinner is added, our team will contact you directly.',
  ]],
];

export default function Faq() {
  return (
    <>
      <section className="sec" id="faq" style={{paddingTop:"0"}}><div className="wrap" style={{maxWidth:"900px"}}>
      <div className="sec-head rv"><span className="kicker">Before you request</span><h2 className="h2">Questions</h2></div>
      <div className="faq rv">
        {QA.map(([q, a], i) => (
          <details key={q} open={i === 0}><summary>{q}<i></i></summary>{a.map((p) => <p key={p}>{p}</p>)}</details>
        ))}
      </div></div></section>
    </>
  );
}
