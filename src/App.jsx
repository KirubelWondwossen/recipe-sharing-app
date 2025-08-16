import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipedetailpage" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
