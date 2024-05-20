import Header from "../../Components/Header";
import HeroSection from "../../Components/HeroSection";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";

export default function Home() {
  return (
    <PrimaryLayout>
      <HeroSection />
      <MovieList />
    </PrimaryLayout>
  );
}
