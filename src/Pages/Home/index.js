import Header from "../../Components/Header";
import HeroSection from "../../Components/HeroSection";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";
import MovieListByGenre from "../../Components/MovieListByGenre";
import OnAirAiringToday from "../../Components/OnAir&AiringToday";
import Popular from "../../Components/Popular";
import TopRated from "../../Components/TopRated";
import Trend from "../../Components/Trend";
import UpComingNowPlay from "../../Components/UpComing&NowPlay";
import { FloatButton } from "antd";

export default function Home() {
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
