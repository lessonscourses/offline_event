import ApplyForm from './apply/ApplyForm';

// Invite section: what happens next + the apply form.
export default function InviteForm() {
  return (
    <>
      <section className="sec" id="invite" style={{paddingTop:"0"}}><div className="wrap inv">
      <div className="apply-card rv"><div className="rings"><i></i><i></i><i></i></div><span className="kicker">Request an invite</span>
      <h2>Seats are limited and every guest is reviewed.</h2><p>Tell us what you invest in — we seat people by thesis.</p>
      <ol className="flow"><li><b>1</b>Request an invite</li><li><b>2</b>Personal review by the team</li><li><b>3</b>Confirmation and your matches</li><li><b>4</b>Venue details for confirmed guests</li></ol></div>
      <div className="form rv d1"><ApplyForm idPrefix="inv" /></div></div></section>
    </>
  );
}
