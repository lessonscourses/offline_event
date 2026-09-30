'use client';
import { useEffect, useRef, useState } from 'react';

// Hero background: YouTube video played as a muted loop of selected segments.
// SEGMENTS = [start, end] in seconds; after the last one it jumps back to the first.
const VIDEO_ID = '_166VGD6kLs';
const SEGMENTS = [[0, 3], [20, 35]];

export default function HeroVideo() {
  const host = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    let player, timer, dead = false;
    const tick = () => {
      if (!player || typeof player.getCurrentTime !== 'function') return;
      const t = player.getCurrentTime();
      const i = SEGMENTS.findIndex(([a, b]) => t >= a - 0.5 && t < b);
      if (i === -1) { // outside any segment: go to the next one
        const next = SEGMENTS.find(([a]) => a > t) || SEGMENTS[0];
        player.seekTo(next[0], true);
      } else if (t >= SEGMENTS[i][1] - 0.15) {
        const next = SEGMENTS[i + 1] || SEGMENTS[0];
        player.seekTo(next[0], true);
      }
    };
    const create = () => {
      if (dead || !host.current) return;
      player = new window.YT.Player(host.current, {
        host: 'https://www.youtube-nocookie.com',
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, mute: 1, controls: 0, playsinline: 1, rel: 0, modestbranding: 1, iv_load_policy: 3, disablekb: 1, fs: 0, start: SEGMENTS[0][0] },
        events: {
          onReady: (e) => { e.target.mute(); e.target.playVideo(); timer = setInterval(tick, 150); },
          onStateChange: (e) => {
            if (e.data === 1) setOn(true);                       // playing
            if (e.data === 0) { e.target.seekTo(SEGMENTS[0][0], true); e.target.playVideo(); } // ended
          },
        },
      });
    };
    if (window.YT && window.YT.Player) create();
    else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev && prev(); create(); };
      if (!document.getElementById('yt-api')) {
        const s = document.createElement('script'); s.id = 'yt-api'; s.src = 'https://www.youtube.com/iframe_api'; document.head.appendChild(s);
      }
    }
    return () => { dead = true; clearInterval(timer); try { player && player.destroy(); } catch {} };
  }, []);

  return <div className={'yt-bg' + (on ? ' on' : '')} aria-hidden="true"><div ref={host} /></div>;
}
