import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <div className="flex flex-col rounded-xl shadow-lg gap-7 bg-white overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-t-xl transition-transform hover:scale-110 duration-300 w-full"
          src={`${meal.strMealThumb}`}
          alt={meal}
        />
      </div>
      <div className="px-4 pb-5 text-left">
        <h3 className="sm:text-xl md:text-2xl font-heading font-semibold">
          {meal.strMeal}
        </h3>
        <div className="flex justify-between w-full items-center">
          <Link
            to="/recipedetailpage"
            className="text-body text-base text-accent underline"
          >
            View recipe
          </Link>

          <HeartIcon className="w-5" />
        </div>
      </div>
    </div>
  );
}
export default MealCard;
