import ApplyForm from './apply/ApplyForm';

// Invite section: what happens next + the apply form.
export default function InviteForm() {
  return (
    <>
      <section className="sec" id="invite" style={{paddingTop:"0"}}><div className="wrap inv">
      <div className="apply-card rv"><div className="rings"><i></i><i></i><i></i></div><span className="kicker">Request an invitation</span>
      <h2>10 seats. Investors only</h2><p>Every request is reviewed personally.</p>
      <ol className="flow"><li><b>01</b>Request an invitation</li><li><b>02</b>Personal review</li><li><b>03</b>Seat confirmation</li><li><b>04</b>Venue details</li></ol></div>
      <div className="form rv d1"><ApplyForm idPrefix="inv" /></div></div></section>
    </>
  );
}
