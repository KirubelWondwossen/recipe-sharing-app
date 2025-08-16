import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
function RecipeDetailPage() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Trending visible={"hidden"} />
      <Footer />
    </div>
  );
}

export default RecipeDetailPage;
