import React from 'react';
import './homepage.css';

function Homepage() {
  return (

    
    <div className="landing-page">




    <div className="video-section">
        <div className="video-container">
            <video src="./pics/vid_for_land.mp4" type="video/mp4" className="product-video" muted autoPlay loop />
            <div className="text-overlay">
            <h1 className="brand-title">Blanco Suave Lotion: Every Drop, A Touch of Care</h1>
            <p className="hero-description">
                Discover our age-specific skincare solutions, crafted with 
                natural ingredients to protect and nourish your skin while providing reliable UV protection.
            </p>
            <button className="cta-button" onClick={() => window.location.href = '/products'}>
                Shop Now</button>
        </div>
        </div>
    </div>








      <div className="product-gallery">
        <div className="product-container" onClick={() => window.location.href = '/products/1'}>
          <img src="./pics/baby.jfif" alt="Blanco Suave UV Protection Lotion" className="product-image" />
          <div className="product-text">Explore Baby Line</div>
        </div>

        <div className="product-container" onClick={() => window.location.href = '/products/2'}>
          <img src="./pics/teen.jfif" alt="Blanco Suave UV Protection Lotion" className="product-image" />
          <div className="product-text">Explore Teen Line</div>
        </div>

        <div className="product-container" onClick={() => window.location.href = '/products/3'}>
          <img src="./pics/adult.jfif" alt="Blanco Suave UV Protection Lotion" className="product-image" />
          <div className="product-text">Explore Adult Line</div>
        </div>
      </div>



    </div>
  );
}

export default Homepage;
