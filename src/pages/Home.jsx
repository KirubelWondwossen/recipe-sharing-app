import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { search } from "../services/mealdbService";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

// const meals = [
//   "Creamy Salad",
//   "Tofu Tomatoes Soup",
//   "Crunchy Potatoes",
//   "Mushroom Soup",
//   "Raspberry Pancake",
//   "Beef Teriyaki",
//   "Raspberry Pancake",
//   "Beef Teriyaki",
// ];

function Home() {
  const [meals, setMeals] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const visibleMeals = meals.slice(0, displayCount);

  function handleLoadMore() {
    setDisplayCount((prev) => prev + 8);
  }

  async function handleSearch(meal) {
    if (!meal) return [];
    const result = await search(meal);
    setMeals(result);
    console.log(meals);
  }
  return (
    <div className="container mx-auto relative">
      <Navbar handleSearch={handleSearch} />
      <Trending height={"h-[15rem]"} meal={meals} />
      <MealCards visibleMeals={visibleMeals} />
      <div className="flex flex-col items-center">
        {displayCount < meals.length && (
          <Button onClick={handleLoadMore} style={"mt-8"}>
            Load More
          </Button>
        )}
      </div>
      <Footer />
    </div>
  );
}

function MealCards({ visibleMeals }) {
  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
      {visibleMeals.length > 0 ? (
        visibleMeals.map((meal) => <MealCard meal={meal} key={meal.idMeal} />)
      ) : (
        <SectionHeader style={""}>No Result</SectionHeader>
      )}
    </div>
  );
}

export default Home;
