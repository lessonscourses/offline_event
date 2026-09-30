import { MAIN_URL } from '@/data/links';

export default function DiscoverLegends() {
  return (
    <section className="ty-card">
      <h2 className="flush">Discover Legends</h2>
      <p>The dinner is one part of a broader private investors network.</p>
      <div className="ty-disc">
        <a className="ty-disc-i" href={MAIN_URL + '/'}>
          <small>What is Legends?</small>
          <span>A private network built for people who deploy or allocate capital.</span>
          <b>Discover Legends →</b>
        </a>
        <a className="ty-disc-i" href={MAIN_URL + '/blog'}>
          <small>Investor Intelligence</small>
          <span>Perspectives, investment thinking and ideas from across the network.</span>
          <b>Read Investor Intelligence →</b>
        </a>
      </div>
      <a className="ty-more" href={MAIN_URL + '/events'}>Explore upcoming events →</a>
    </section>
  );
}
