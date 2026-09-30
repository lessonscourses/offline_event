import './thank-you.css';
import ThanksHero from '@/components/thanks/ThanksHero';
import NextSteps from '@/components/thanks/NextSteps';
import EventCard from '@/components/thanks/EventCard';
import HowItRuns from '@/components/thanks/HowItRuns';
import InviteColleague from '@/components/thanks/InviteColleague';
import LookInside from '@/components/thanks/LookInside';

export const metadata = { title: 'Request received · Legends Investor Meeting Singapore', robots: { index: false } };

export default function ThankYou() {
  return (
    <div className="ty">
      <div className="ty-glow" aria-hidden="true" />
      <div className="ty-wrap">
        <ThanksHero />
        <NextSteps />
        <EventCard />
        <HowItRuns />
        <InviteColleague />
        <LookInside />
        <p className="ty-fine">A request does not guarantee a seat. Capped at 12 guests; the list locks 24 hours before. The venue is shared with confirmed guests only.</p>
        <a className="ty-back" href="/">← Back to the Singapore page</a>
      </div>
    </div>
  );
}
