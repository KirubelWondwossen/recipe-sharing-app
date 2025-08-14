import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RecipeSection from "../components/RecipeSection";

function LandingPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <RecipeSection />
      </main>
    </>
  );
}

export default LandingPage;
