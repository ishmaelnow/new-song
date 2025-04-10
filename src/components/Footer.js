// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <p>
        Follow on:{' '}
        <a
          href="https://example.com/instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{' '}
        |{' '}
        <a
          href="https://example.com/youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>{' '}
        |{' '}
        <a
          href="https://example.com/spotify"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Artist Name</p>
    </footer>
  );
}
