import { MAIN_URL } from '@/data/links';

const Play = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l12-7.5-12-7.5Z" /></svg>;

export default function LookInside() {
  return (
    <section className="ty-card">
      <h2 className="flush">Before you join, look inside</h2>
      <p>What Legends is, and what members see after the invitation.</p>
      <a className="ty-films" href="https://belegends.club/preview/">
        <span className="ty-film"><span className="ty-play"><Play /></span><span><small>Film one</small><b>What Legends is</b><em>Our founder on why the club exists.</em></span></span>
        <span className="ty-film"><span className="ty-play"><Play /></span><span><small>Film two</small><b>Inside the platform</b><em>Events, opportunities and the matching behind them.</em></span></span>
      </a>
      <div className="ty-links"><a href={MAIN_URL + '/events'}>Upcoming events</a><a href={MAIN_URL + '/blog'}>Read the blog</a></div>
    </section>
  );
}
