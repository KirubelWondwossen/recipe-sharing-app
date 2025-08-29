import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { random, search } from "../services/mealdbService";
import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import Filter from "../components/Filter";

function Home() {
  const [isOpenFilter, setIsOpenFilter] = useState(true);
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const visibleMeals =
    filteredMeals.length > 0
      ? filteredMeals.slice(0, displayCount)
      : meals.slice(0, displayCount);
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

  function handleFilter(category, isChecked) {
    if (!isChecked) setFilteredMeals([]);
    const newMeals = meals.filter((el) => el.strCategory === category);
    setFilteredMeals(newMeals);
  }

  function handleOpen() {
    setIsOpenFilter((isOpen) => !isOpen);
  }

  return (
    <div className="container mx-auto relative">
      <Navbar
        handleSearch={handleSearch}
        handleOpen={handleOpen}
        isOpenFilter={isOpenFilter}
      />

      {trendingImg.length === 0 ? (
        <h3 className="sm:text-xl md:text-2xl font-heading font-semibold my-6">
          No Internet
        </h3>
      ) : (
        <Trending height={"h-[15rem]"} meal={trendingImg} />
      )}
      <div className={`${isOpenFilter && "grid md:grid-cols-[1fr_4fr] gap-4"}`}>
        {isOpenFilter && <Filter handleFilter={handleFilter} />}
        <div>
          <MealCards visibleMeals={visibleMeals} />
          <div className="flex flex-col items-center">
            {displayCount < meals.length && (
              <Button onClick={handleLoadMore} style={"mt-8"}>
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function MealCards({ visibleMeals }) {
  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
      {visibleMeals.length > 0 ? (
        visibleMeals.map((meal) => (
          <MealCard meal={meal} key={meal.idMeal} mealId={meal.idMeal} />
        ))
      ) : (
        <SectionHeader style={""}>No Result</SectionHeader>
      )}
    </div>
  );
}

export default Home;
