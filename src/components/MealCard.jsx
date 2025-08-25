import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MealCard({ meal }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("meals")) || [];
    setFavorites(stored);
  }, []);

  const exists = favorites.some((fav) => fav.idMeal === meal.idMeal);

  function handleAddtoFavorite() {
    let updated = [...favorites];

    if (!exists) {
      updated.push({
        idMeal: meal.idMeal,
        strMealThumb: meal.strMealThumb,
        strMeal: meal.strMeal,
      });

      localStorage.setItem("meals", JSON.stringify(updated));
      setFavorites(updated);
    }
  }

  return (
    <div className="flex flex-col rounded-xl shadow-lg gap-7 bg-white overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-t-xl transition-transform hover:scale-110 duration-300 w-full"
          src={meal.strMealThumb}
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
              onClick={handleAddtoFavorite}
              className="w-5 cursor-pointer"
            />
          ) : (
            <HeartIconSolid
              onClick={handleAddtoFavorite}
              className="w-5 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MealCard;
