import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './Accountant.json';

export default function NotFoundInformation (){
    const defaultOptions = {
        loop: true,
        delay:"1",
        speed:"100",
        frame_rate:"24",
        // stroke_width:"22.5",
        trigger:"hover",
        // style:"width:600px;background-color: ",
        animationData: animationData,
 rendererSettings: {
           preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={500}
          width={500}
        />
      </div>
    );
}