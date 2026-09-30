const STEPS = [
  'Within 24 hours, a Legends manager contacts you by phone or email to confirm your request.',
  'We confirm your seat and ask who you would like to meet — so your introductions are set up before you arrive.',
  'Before the evening you receive the venue address, the final schedule and the people we think you should meet.',
];

export default function NextSteps() {
  return (
    <ol className="ty-steps">
      {STEPS.map((t, i) => (
        <li key={i} style={{ animationDelay: `${0.1 + i * 0.1}s` }}><span>{i + 1}</span><p>{t}</p></li>
      ))}
    </ol>
  );
}
