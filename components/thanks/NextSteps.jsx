const STEPS = [
  ['Within 24 hours, a Legends manager will contact you.', 'We’ll briefly confirm your investment profile and availability.'],
  ['If approved, we’ll confirm your seat.', 'You’ll receive your personal confirmation directly from our team.'],
  ['Before the evening, we’ll send the venue details.', 'Exact location, final timing and everything you need to know.'],
];

export default function NextSteps() {
  return (
    <section className="ty-next">
      <p className="ty-kicker">What happens next</p>
      <ol className="ty-steps">
        {STEPS.map(([h, p], i) => (
          <li key={i} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <div><h3>{h}</h3><p>{p}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
