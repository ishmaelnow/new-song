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
    <section className="container vibrant-theme">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="support-box">
          <h3>🛒 Support the Artist</h3>
          <p>Thanks for listening and sharing the love!</p>
        </div>

        <div className="new-release highlight">
          <h3>🎉 New Release: <em>Skyfall Anthem</em></h3>
          <img
            src="/images/skyfall-cover.jpg"
            alt="Skyfall Anthem by Artist Name"
            className="release-cover"
          />
          <p><strong>Release Date:</strong> {new Date("2025-04-20").toDateString()}</p>
          <p><strong>⏳ <Countdown targetDate="2025-04-20T00:00:00" /></strong></p>
          <p className="italic">🎧 Available soon on Spotify!</p>
        </div>

        <div className="artist-profile flashy">
          <img
            src={artistImage}
            alt="Artist"
            className="artist-photo artist-glow"
          />
          <h1 className="artist-name">Richard Ngenda</h1>
          <p className="tagline">Spreading hope through music</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-banner">
          <h2>🔥 Experience the Sound of a Generation</h2>
          <p className="tagline">Timeless vocals, deep emotion, and uplifting vibes</p>
        </div>

        <div className="section-box music-highlight">
          <h3>🎧 Stream My Latest Track</h3>
          <iframe
            className="spotify-player"
            src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify player"
          ></iframe>
        </div>

        <div className="section-box subscribe-box">
          <h3>📬 Stay Connected</h3>
          {submitted ? (
            <p className="success-msg">
              ✅ Thank you for subscribing! Check your email for confirmation.
            </p>
          ) : (
            <form
              action="https://formspree.io/f/mexample"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email">Join my mailing list:</label>
              <div className="email-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                />
                <button type="submit" className="cta-button">Sign Up</button>
              </div>
            </form>
          )}
        </div>

        <div className="section-box gallery-box">
          <h3>📸 Moments Captured</h3>
          <div className="mini-gallery">
            <img src={img1} alt="Live Performance 1" />
            <img src={img2} alt="Live Performance 2" />
            <img src={img3} alt="Live Performance 3" />
          </div>
          <div className="center">
            <a href="/gallery" className="cta-button">View Full Gallery</a>
          </div>
        </div>

        <MusicCatalog />

        <MusicPlayer
          title="Skyfall Anthem Preview"
          src="/assets/music/song1.mp3"
        />
      </main>
    </section>
  );
}
