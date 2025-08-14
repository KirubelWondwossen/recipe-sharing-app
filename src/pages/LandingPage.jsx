import AboutUsSection from "../components/AboutUsSection";
import FeaturesSection from "../components/FeaturesSection";
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
        <AboutUsSection />
        <FeaturesSection />
      </main>
    </>
  );
}

export default LandingPage;
