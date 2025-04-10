// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>🎶 Richard Ngenda</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/store">Store</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/press">Press</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
