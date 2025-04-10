// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <p>Follow on: 
        <a href="#"> Instagram</a> | 
        <a href="#"> YouTube</a> | 
        <a href="#"> Spotify</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Artist Name</p>
    </footer>
  );
}
