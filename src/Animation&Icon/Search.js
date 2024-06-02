import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './search.json';

export default function IConSearch (){
    const defaultOptions = {
        loop: true,
     autoplay: false,
        delay:"1",
        speed:"100",
        frame_rate:"24",
        stroke_width:"22.5",
        trigger:"hover",
        style:"width:600px;background-color: ",
        animationData: animationData,
 rendererSettings: {
           preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={40}
          width={40}
        />
      </div>
    );
}