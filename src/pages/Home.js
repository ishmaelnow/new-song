import React, { useState } from 'react';
import './Home.css';
import artistImage from '../assets/images/artist-photo.jpg';
import Countdown from '../components/Countdown';
import MusicCatalog from '../components/MusicCatalog';
import MusicPlayer from '../components/MusicPlayer';
import img1 from '../assets/images/gallery/performance1.jpg';
import img2 from '../assets/images/gallery/performance2.jpg';
import img3 from '../assets/images/gallery/performance3.jpg';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <section className="container">
      {/* 🔹 Sidebar with Support + Artist Image */}
      <aside className="sidebar">
        <h3>🛒 Support the Artist</h3>
        <p>Thanks for listening and sharing the love!</p>

        {/* ✅ Artist Image moved here */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <img
            src={artistImage}
            alt="Artist"
            style={{
              width: '200px',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
          <h2 style={{ marginTop: '0.8rem', fontSize: '1.2rem' }}>Richard Ngenda</h2>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Spreading hope through music</p>
        </div>
      </aside>

      <main className="main-content">
        {/* 🔹 New Release Now Has Priority Space */}
        <div className="new-release">
          <h3>🎉 New Release: <em>Skyfall Anthem</em></h3>
          <img
            src="/images/skyfall-cover.jpg"
            alt="Skyfall Anthem by Artist Name"
          />
          <p><strong>Release Date:</strong> {new Date("2025-04-20").toDateString()}</p>
          <p><strong>⏳ <Countdown targetDate="2025-04-20T00:00:00" /></strong></p>
          <p className="italic">🎧 Available soon on Spotify!</p>
        </div>

        {/* 🔹 Spotify Section */}
        <div className="section-box">
          <h3>🎧 Stream My Latest Track</h3>
          <iframe
            style={{ borderRadius: '12px', marginTop: '1rem' }}
            src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify player"
          ></iframe>
        </div>

        {/* 🔹 Newsletter Signup */}
        <div className="section-box" style={{ backgroundColor: '#f9f9f9' }}>
          <h3>📬 Stay Connected</h3>
          {submitted ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              ✅ Thank you for subscribing! Check your email for confirmation.
            </p>
          ) : (
            <form
              action="https://formspree.io/f/mexample"
              method="POST"
              onSubmit={handleSubmit}
              style={{ marginTop: '1rem' }}
            >
              <label htmlFor="email">Join my mailing list for new music, events, and more:</label>
              <div style={{ marginTop: '0.5rem' }}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  style={{ padding: '0.5rem', width: '60%', marginRight: '0.5rem' }}
                />
                <button type="submit" className="cta-button">Sign Up</button>
              </div>
            </form>
          )}
        </div>

        {/* 🔹 Mini Gallery */}
        <div className="section-box">
          <h3>📸 Moments Captured</h3>
          <div className="mini-gallery">
            <img src={img1} alt="Live Performance 1" />
            <img src={img2} alt="Live Performance 2" />
            <img src={img3} alt="Live Performance 3" />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href="/gallery" className="cta-button">View Full Gallery</a>
          </div>
        </div>

        {/* 🔹 Full Music Catalog */}
        <MusicCatalog />

        {/* 🔹 Music Preview Player */}
        <MusicPlayer
          title="Skyfall Anthem Preview"
          src="/music/song1.mp3"
        />
      </main>
    </section>
  );
}
