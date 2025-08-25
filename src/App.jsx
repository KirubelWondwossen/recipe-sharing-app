import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipedetailpage/:id" element={<RecipeDetailPage />} />
        <Route path="/favoritespage" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
