import HeroSection from "../../Components/HeroSection";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import OnAirAiringToday from "../../Components/OnAir&AiringToday";
import Popular from "../../Components/Popular";
import TopRated from "../../Components/TopRated";
import Trend from "../../Components/Trend";
import UpComingNowPlay from "../../Components/UpComing&NowPlay";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    ScrollTop();
  }, []);
  return (
    <PrimaryLayout>
      <HeroSection />
        <Trend />
        <Popular />
        <TopRated />
        <UpComingNowPlay />
        <OnAirAiringToday />
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
