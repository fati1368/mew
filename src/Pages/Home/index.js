import Header from "../../Components/Header";
import HeroSection from "../../Components/HeroSection";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";
import MovieListByGenre from "../../Components/MovieListByGenre"
import Trend from "../../Components/Trend";

export default function Home() {
  return (
    <PrimaryLayout>
      <HeroSection />
      <Trend time="day"/>
      <MovieList />
      <MovieListByGenre />
    </PrimaryLayout>
  );
}
