import MealCard from "./MealCard";
import Navbar from "./Navbar";

function FavoritesPage() {
  const meals = JSON.parse(localStorage.getItem("meals")) || [];

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal} mealId={meal.idMeal} />
          ))
        ) : (
          <SectionHeader style={""}>No Result</SectionHeader>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
