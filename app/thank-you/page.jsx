import './thank-you.css';
import ThanksHero from '@/components/thanks/ThanksHero';
import NextSteps from '@/components/thanks/NextSteps';
import WhatsAppCta from '@/components/thanks/WhatsAppCta';
import EventCard from '@/components/thanks/EventCard';
import HowItRuns from '@/components/thanks/HowItRuns';
import ShareInvite from '@/components/thanks/ShareInvite';
import DiscoverLegends from '@/components/thanks/DiscoverLegends';

export const metadata = { title: 'Request received · Legends Investor Dinner Singapore', robots: { index: false } };

// Flow: request received -> next steps -> WhatsApp -> hold the date -> how it runs -> referral -> discover.
export default function ThankYou() {
  return (
    <div className="ty">
      <div className="ty-glow" aria-hidden="true" />
      <div className="ty-wrap">
        <ThanksHero />
        <NextSteps />
        <WhatsAppCta />
        <EventCard />
        <HowItRuns />
        <ShareInvite />
        <DiscoverLegends />
      </div>
    </div>
  );
}
