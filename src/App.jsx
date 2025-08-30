import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState();
  function handleSearchFilter(filter) {
    setFilter(filter);
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Home filter={filter} handleSearchFilter={handleSearchFilter} />
          }
        />
        <Route
          path="/recipedetailpage/:id"
          element={<RecipeDetailPage filter={filter} />}
        />
        <Route
          path="/favoritespage"
          element={<FavoritesPage filter={filter} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
