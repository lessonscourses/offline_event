# Legends Investor Meeting - Singapore

Single landing page for one city of the October 2026 series. Next.js (App Router) + React, no CSS framework; all styles in `app/globals.css`.

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

- `app/page.jsx` - the landing (hero, idea, schedule, matching, host, gallery, other cities, invite form, FAQ).
- `data/cities.js` - dates, time zones, countdown start times for all four cities.
- `data/links.js` - **set the real domains** of the series landing and the other city landings here.
- `components/Interactions.jsx` - parallax, reveal, lightbox, clocks, countdown, schedule progress, mobile menu, form.

To make another city from this project: copy the matching city page from the combined source or ask for the generated project.

TODO: real schedule (current one is a draft), guest investor, venue, pricing, form backend, copy photos from belegends.club into `public/`.

## Singapore-specific

- "One network · many cities" block: animated flight arcs from all Legends cities into Singapore (`components/CityNetwork.jsx`, reusable with `current="<city>"`).
- "Who will be there": guest profiles (edit in `app/page.jsx`).
- Plan: Legends Offline - Q4 2026 (internal plan name: "Legends 10") (working plan 28.09.2026). Singapore = gathering 01, Thu 8 Oct 2026, anchor: Milken Institute Asia Summit (7-9 Oct).
- Next in October: Dubai 14 (SuperReturn Middle East), Abu Dhabi 21 (Campden Global Owners & FO Congress), Riyadh 28 (FII10).
- Room: 8-10 strong investors, hard cap 12.

## Apply flow (prototype)

- Every "Request an invite" button (header, hero, schedule, sticky mobile bar) is an anchor to the form section `/#invite`.
- The form: `components/apply/ApplyForm.jsx` (inside `components/InviteForm.jsx`).
  Fields: full name*, work email*, WhatsApp/mobile*, LinkedIn*, investor profile* (select), typical size (optional select), investment focus*, what would make the evening valuable*, then the "no guarantee" note and Terms & Privacy line.
- On submit the form goes to **`/thank-you`** (no backend yet). TODO: send the data to the CRM/API in `onSubmit` before `router.push`.
- Styles: `components/apply/apply.css` (form), `app/thank-you/thank-you.css` (thank-you page).

## Thank-you page - `/thank-you`

`app/thank-you/page.jsx`, blocks in `components/thanks/`:
ThanksHero (greets by first name) · NextSteps · EventCard (Google Calendar + `.ics`) · HowItRuns · InviteColleague (WhatsApp + copy link) · LookInside.

- Event data for calendar links and share text: `data/event.js`.
- Calendar file for Apple / Outlook: `public/legends-singapore.ics` (update the `URL:` line once the domain is live).
- Official logo for light backgrounds (from the thank-you kit): `public/brand/legends-logo-dark.png`.

## Links to other gatherings (temporary "coming soon")

`data/links.js` → `CITY_URL` / `SERIES_URL`. While a value is empty, links to that event (cards "After Singapore",
footer, "All cities", breadcrumb) open `components/SoonModal.jsx`: the event is being prepared, mention it to the
manager when they call. As soon as a page is live, put its URL in `data/links.js` - links switch automatically.
`SELF_URL` = public address of this landing (share link / calendar); empty → current site address.

## Hero video

YouTube embed (Rp-yJu-coKY, Marina Bay Sands at night), muted, looped, no controls, served from youtube-nocookie.com. See `public/video/README.txt`.
