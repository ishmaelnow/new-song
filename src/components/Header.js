// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="site-header">
      <div className="logo">🎤 Richard Ngenda</div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/tour" onClick={() => setMenuOpen(false)}>Tour</Link>
        <Link to="/store" onClick={() => setMenuOpen(false)}>Store</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/press" onClick={() => setMenuOpen(false)}>Press</Link>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}
