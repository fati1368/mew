import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./loading.json";

export default function LoadingCat() {
  const defaultOptions = {
    loop: true,
    delay: "1",
    speed: "100",
    frame_rate: "24",
     stroke_width:"10",
    trigger: "hover",
    // style:"width:600px;background-color: ",
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={150} width={450} />
    </div>
  );
}
