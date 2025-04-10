import React from 'react';
import './Gallery.css';

// ✅ Import all images (case-sensitive)
import img1 from '../assets/images/gallery/IMG_1728.jpg';
import img2 from '../assets/images/gallery/IMG_3103.jpg';
import img3 from '../assets/images/gallery/IMG_3150.jpg';
import img4 from '../assets/images/gallery/IMG_3992.jpg';
import img5 from '../assets/images/gallery/IMG_3997.jpg';
import img6 from '../assets/images/gallery/IMG_4001.jpg';
import img7 from '../assets/images/gallery/IMG_4005.jpg';
import img8 from '../assets/images/gallery/IMG_4007.JPG';
import img9 from '../assets/images/gallery/IMG_4009.JPG';
import img10 from '../assets/images/gallery/IMG_4010.JPG';
import img11 from '../assets/images/gallery/IMG_4014.JPG';
import img12 from '../assets/images/gallery/IMG_4030.PNG';
import img13 from '../assets/images/gallery/IMG_4601.jpg';
import img14 from '../assets/images/gallery/IMG_5594.jpg';
import img15 from '../assets/images/gallery/IMG_6108.jpg';

// ✅ Store images in array
const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
];

// ✅ Component
export default function Gallery() {
  return (
    <section>
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>📸 Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
