const STEPS = [
  'Within 24 hours, a manager contacts you to confirm your request.',
  'We confirm your seat and ask who you want to meet.',
  'Before the evening: the venue address, schedule details and final confirmation.',
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
