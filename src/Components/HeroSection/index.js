import React from "react";
import "./style.css";

export default function HeroSection() {
  const movieBackgroundUrl = "./assets/video/hero.mp4";
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src={movieBackgroundUrl} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Explore Movies and Series</h1>
        <p>Discover the latest releases, classics, and hidden gems.</p>
      </div>
    </div>
  );
}
