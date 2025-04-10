import React from 'react';

export default function Store() {
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>🛒 Official Artist Store</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Support the music you love – shop exclusive merch, digital tracks, and more!
      </p>

      {/* ------------------ PRODUCT 1: Signed CD (PayPal) ------------------ */}
      <div style={productBox}>
        <h3>📀 Signed CD – $15</h3>
        <p>Includes 10 tracks, a bonus thank-you message, and worldwide shipping.</p>
        <div dangerouslySetInnerHTML={{
          __html: `
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_xclick">
              <input type="hidden" name="business" value="your-paypal-email@example.com">
              <input type="hidden" name="item_name" value="Signed CD">
              <input type="hidden" name="amount" value="15.00">
              <input type="hidden" name="currency_code" value="USD">
              <input type="submit" value="Buy Now via PayPal" style="padding:10px 20px; background:#0070ba; color:#fff; border:none; border-radius:5px;">
            </form>
          `
        }} />
      </div>

      {/* ------------------ PRODUCT 2: Digital Album (Gumroad) ------------------ */}
      <div style={productBox}>
        <h3>🎧 Digital Album (MP3) – $5</h3>
        <p>Get an instant download of my full album in high-quality MP3 format.</p>
        <a
          href="https://gumroad.com/l/youralbum"
          target="_blank"
          rel="noreferrer"
          style={button}
        >
          Buy on Gumroad
        </a>
      </div>

      {/* ------------------ PRODUCT 3: Donate/Support (Ko-fi) ------------------ */}
      <div style={productBox}>
        <h3>☕ Support the Music</h3>
        <p>Like what you hear? Buy me a coffee and help fund future projects.</p>
        <a
          href="https://ko-fi.com/yourkofi"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://storage.ko-fi.com/cdn/kofi5.png"
            alt="Buy Me a Coffee"
            style={{ height: '45px' }}
          />
        </a>
      </div>

      {/* ------------------ STREAMING OPTIONS ------------------ */}
      <div style={productBox}>
        <h3>📱 Stream on Spotify</h3>
        <p>Follow me and stream your favorite tracks anytime, anywhere.</p>
        <iframe
          style={{ borderRadius: '12px', width: '100%', height: '152px' }}
          src="https://open.spotify.com/embed/artist/3n3Ppam7vgaVa1iaRUc9Lp?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Artist Embed"
        ></iframe>
      </div>
    </section>
  );
}

// 🔧 Reusable styles
const productBox = {
  backgroundColor: '#f9f9f9',
  padding: '1.5rem',
  borderRadius: '8px',
  marginBottom: '2rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
};

const button = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#ff4646',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  display: 'inline-block',
  marginTop: '1rem',
};
