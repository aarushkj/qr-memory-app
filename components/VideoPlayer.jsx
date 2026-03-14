'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Auto-play as soon as page loads (QR scan lands here)
    const vid = videoRef.current;
    if (!vid) return;
    vid.play().then(() => setPlaying(true)).catch(() => {
      // Some browsers block autoplay — show tap-to-play
      setPlaying(false);
    });
  }, []);

  const handleTap = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="page">
      <div className="speech-bubble">
        <p>📸 Your memory is loading...</p>
      </div>

      <div className="title-panel">
        <h1>MEMORY UNLOCKED!</h1>
      </div>

      <div className="video-panel" onClick={handleTap}>
        {/*
          ╔══════════════════════════════════╗
          ║  DROP YOUR VIDEO FILE HERE       ║
          ║  → public/videos/memory.mp4      ║
          ╚══════════════════════════════════╝
        */}
        <video
          ref={videoRef}
          src="/videos/memory.mp4"
          playsInline
          controls
          loop
          style={{ width: '100%', display: 'block' }}
        />
        <span className="panel-label">▶ PLAY</span>

        {!playing && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)', cursor: 'pointer'
          }}>
            <span style={{
              fontFamily: 'Bangers, cursive',
              fontSize: '1.4rem',
              color: '#FFE600',
              letterSpacing: '0.1em',
              textShadow: '2px 2px 0 #000',
              padding: '0.6rem 1.2rem',
              border: '3px solid #FFE600',
            }}>
              TAP TO PLAY
            </span>
          </div>
        )}
      </div>

      {playing && <div className="sfx">POW!</div>}
    </div>
  );
}
