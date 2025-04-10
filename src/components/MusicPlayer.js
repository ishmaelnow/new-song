import React from 'react';

export default function MusicPlayer({ title, src }) {
  return (
    <div className="section-box" style={{ marginTop: '2rem' }}>
      <h3>🎧 {title}</h3>
      <audio controls style={{ width: '100%', marginTop: '0.5rem' }}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
