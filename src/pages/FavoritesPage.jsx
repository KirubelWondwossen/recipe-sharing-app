import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";

function FavoritesPage({ filter }) {
  const [meals, setMeals] = useState([]);

  function handleRemoveFromFavorite(mealId) {
    const storedMeals = meals.filter((meal) => meal.idMeal !== mealId);
    localStorage.setItem("meals", JSON.stringify(storedMeals));
    setMeals(storedMeals);
  }

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem("meals")) || [];
    setMeals(storedMeals);
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar filter={filter} />
      {meals.length > 0 ? (
        <Meals meals={meals} onRemove={handleRemoveFromFavorite} />
      ) : (
        <SectionHeader style={"mt-8"}>No Favorites</SectionHeader>
      )}
    </div>
  );
}

function Meals({ meals, onRemove }) {
  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 w-full">
      {meals.map((meal) => (
        <MealCard
          meal={meal}
          key={meal.idMeal}
          mealId={meal.idMeal}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
