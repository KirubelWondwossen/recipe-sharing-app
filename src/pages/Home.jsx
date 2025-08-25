import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { random, search } from "../services/mealdbService";
import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";

function Home() {
  const [meals, setMeals] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const visibleMeals = meals.slice(0, displayCount);
  const [trendingImg, setTrendingImg] = useState([]);

  useEffect(() => {
    async function fetchRandomMeal() {
      const data = await random();
      if (data.length > 0) setTrendingImg(data[0]);
    }
    fetchRandomMeal();
  }, []);

  async function handleSearch(meal) {
    if (!meal) return [];
    const result = await search(meal);
    setMeals(result);
  }

  function handleLoadMore() {
    setDisplayCount((prev) => prev + 8);
  }

  return (
    <div className="container mx-auto relative">
      <Navbar handleSearch={handleSearch} />

      {trendingImg && <Trending height={"h-[15rem]"} meal={trendingImg} />}

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
