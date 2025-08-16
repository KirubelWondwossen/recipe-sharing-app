import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import Button from "../components/Button";

const meals = [
  "Creamy Salad",
  "Tofu Tomatoes Soup",
  "Crunchy Potatoes",
  "Mushroom Soup",
  "Raspberry Pancake",
  "Beef Teriyaki",
  "Raspberry Pancake",
  "Beef Teriyaki",
];

function Home() {
  return (
    <div className="container mx-auto relative">
      <Navbar />
      <Trending />
      <MealCards />
      <div className="flex flex-col items-center">
        <Button style={"mt-8"}>Load More</Button>
      </div>
      <Footer />
    </div>
  );
}

function MealCards() {
  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
      {meals.map((meal, i) => (
        <MealCard meal={meal} i={i} key={i} />
      ))}
    </div>
  );
}

export default Home;
