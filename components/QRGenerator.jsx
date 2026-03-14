'use client';

import { useRef, useState } from 'react';

export default function QRGenerator() {
  const [url, setUrl] = useState('');
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef(null);

  const generateQR = async () => {
    if (!url) return;
    const QRCode = (await import('qrcode')).default;
    await QRCode.toCanvas(canvasRef.current, url, {
      width: 280,
      margin: 2,
      color: { dark: '#0d0d0d', light: '#FFFDE7' },
      errorCorrectionLevel: 'H',
    });
    setGenerated(true);
  };

  const downloadQR = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'memory-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="admin-page">
      <div className="title-panel" style={{ marginBottom: '0.5rem' }}>
        <h1>QR MAKER</h1>
      </div>

      <div className="admin-panel">
        <h2>Generate Your QR</h2>

        <div>
          <label>Your Vercel URL</label>
          <input
            type="url"
            placeholder="https://your-app.vercel.app"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && generateQR()}
          />
        </div>

        <button className="btn" onClick={generateQR}>
          GENERATE QR!
        </button>

        <div className="qr-output">
          <canvas ref={canvasRef} style={{ display: generated ? 'block' : 'none' }} />
          {generated && (
            <>
              <p className="qr-hint">
                Print this QR code and stick it on your photo.<br />
                Anyone who scans it will see your video! 🎬
              </p>
              <button className="btn" onClick={downloadQR} style={{ background: '#1a1aff' }}>
                DOWNLOAD QR!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
