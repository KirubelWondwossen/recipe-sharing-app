import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MealCard({ meal, mealId }) {
  function handleAddtoFavorite() {
    let storedItems = JSON.parse(localStorage.getItem("meals"));
    if (!Array.isArray(storedItems)) {
      storedItems = [];
    }
    const newMeal = {
      idMeal: meal.idMeal,
      strMealThumb: meal.strMealThumb,
      strMeal: meal.strMeal,
    };
    if (!storedItems.some((item) => item.id === newMeal.id)) {
      storedItems.push(newMeal);
      localStorage.setItem("meals", JSON.stringify(storedItems));
    }
  }

  const meals = JSON.parse(localStorage.getItem("meals")) || [];
  const exists = meals.some((meal) => meal.idMeal === mealId);

  return (
    <div className="flex flex-col rounded-xl shadow-lg gap-7 bg-white overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-t-xl transition-transform hover:scale-110 duration-300 w-full"
          src={`${meal.strMealThumb}`}
          alt={meal.strMeal}
        />
      </div>
      <div className="px-4 pb-5 text-left">
        <h3 className="sm:text-xl md:text-2xl font-heading font-semibold">
          {meal.strMeal}
        </h3>
        <div className="flex justify-between w-full items-center">
          <Link
            to={`/recipedetailpage/${meal.idMeal}`}
            className="text-body text-base text-accent underline"
          >
            View recipe
          </Link>
          {!exists ? (
            <HeartIcon
              onClick={() => handleAddtoFavorite(mealId)}
              className="w-5 cursor-pointer"
            />
          ) : (
            <HeartIconSolid
              onClick={() => handleAddtoFavorite(mealId)}
              className="w-5 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default MealCard;
