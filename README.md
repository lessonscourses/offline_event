# Legends Investor Meeting — New York

Single landing page for one city of the October 2026 series. Next.js (App Router) + React, no CSS framework; all styles in `app/globals.css`.

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

- `app/page.jsx` — the landing (hero, idea, schedule, matching, host, gallery, other cities, invite form, FAQ).
- `data/cities.js` — dates, time zones, countdown start times for all four cities.
- `data/links.js` — **set the real domains** of the series landing and the other city landings here.
- `components/Interactions.jsx` — parallax, reveal, lightbox, clocks, countdown, schedule progress, mobile menu, form.

To make another city from this project: copy the matching city page from the combined source or ask for the generated project.

TODO: real schedule (current one is a draft), guest investor, venue, pricing, form backend, copy photos from belegends.club into `public/`.
