import React from 'react';

const tracks = [
  { title: 'Cyubahiro', url: '/music/cyubahiro.mp3', type: 'audio' },
  { title: 'Gusimba', url: '/music/gusimba.mp3', type: 'audio' },
  { title: 'Ibuka', url: '/music/ibuka.mp3', type: 'audio' },
  { title: 'Juwi', url: '/music/juwi.mp3', type: 'audio' },
  { title: 'Mbwira', url: '/music/mbwira.mp3', type: 'audio' },
  { title: 'Niwe', url: '/music/niwe.mp3', type: 'audio' },
  { title: 'Ntwaribatinya', url: '/music/ntwaribatinya.mp3', type: 'audio' },
  { title: 'Sinzakwitesha', url: '/music/sinzakwitesha.mp3', type: 'audio' },
  { title: 'Sumuhemu (Instrumental)', url: '/music/sumuhemu-instrumental.mp3', type: 'audio' },
  { title: 'Unyitayeho', url: '/music/unyitayeho.mp3', type: 'audio' },
  { title: 'Urera', url: '/music/urera.mp3', type: 'audio' },
  { title: 'Wemere Ngushimire', url: '/music/wemere-ngushimire.mp3', type: 'audio' },
  { title: 'Yambaye Icyubahiro', url: '/music/yambaye-icyubahiro.mp3', type: 'audio' },
  { title: 'Richard – Official Video', url: '/music/richard-video.mp4', type: 'video' },
];

export default function MusicCatalog() {
  return (
    <section className="section-box">
      <h2>🎵 Music Catalog</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tracks.map((track, index) => (
          <li key={index} style={{ marginBottom: '2rem' }}>
            <strong>{track.title}</strong>
            <div style={{ marginTop: '0.5rem' }}>
              {track.type === 'audio' ? (
                <audio controls style={{ width: '100%' }}>
                  <source src={track.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <video controls style={{ width: '100%', maxHeight: '300px' }}>
                  <source src={track.url} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
