import AboutUsSection from "../components/AboutUsSection";
import CommunitySection from "../components/CommunitySection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LandingNavbar from "../components/LandingNavbar";
import RecipeSection from "../components/RecipeSection";

function LandingPage() {
  return (
    <>
      <header>
        <LandingNavbar />
      </header>
      <main>
        <HeroSection />
        <RecipeSection />
        <AboutUsSection />
        <FeaturesSection />
        <CommunitySection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LandingPage;
