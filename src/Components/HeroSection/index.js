import React from "react";
import Style from "./style";
import { Button } from "antd";
import { palette } from "../../Style/Theme";

export default function HeroSection() {
  const movieBackgroundUrl = "./assets/video/hero.mp4";
  return (
    <Style>
      <div className="hero-text absolute ">
        <h1 className="mb-2 title"> Welcome</h1>
        <h2 className="mb-3">Explore Movies and Series</h2>
        <p>Millions of movies, TV shows and people to discover</p>
        <Button
          className="mt-5"
          ghost
          shape="round"
          size="large"
          style={{ color: palette.fontColor, marginRight: "10px" }}
        >
          Movies
        </Button>
        
        <Button
          ghost
          shape="round"
          size="large"
          style={{ color: palette.fontColor }}
        >
          Series
        </Button>
        
      </div>
        <div className="hero-container flex space-between ">
        <div className="col-6"></div>
        <video autoPlay loop muted className="hero-video col-6 ">
          <source src={movieBackgroundUrl} type="video/mp4" />
        </video>
 

      </div>
    </Style>
  );
}
