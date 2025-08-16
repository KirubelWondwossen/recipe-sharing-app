import Button from "./Button";
import CardTitle from "./CardTitle";
import SectionHeader from "./SectionHeader";
const meals = [
  "Creamy Salad",
  "Tofu Tomatoes Soup",
  "Crunchy Potatoes",
  "Mushroom Soup",
  "Raspberry Pancake",
  "Beef Teriyaki",
];

function RecipeSection() {
  return (
    <section>
      <div className="container mx-auto p-4 my-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-col gap-2">
            <SectionHeader style={"md:text-left text-center"}>
              Discover, Learn, Enjoy
            </SectionHeader>
            <p className="font-body text-xs md:text-2xl text-center md:text-left text-[#7F7D7D]">
              Check our most popular recipes of this week
            </p>
          </div>
          <Button style={"invisible absolute md:visible md:static"}>
            See More
          </Button>
        </div>
        <MealCards />
      </div>
    </section>
  );
}

function MealCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {meals.map((meal, i) => (
        <MealCard meal={meal} i={i} key={i} />
      ))}
    </div>
  );
}

function MealCard({ meal, i }) {
  return (
    <div className="flex flex-col rounded-xl shadow-lg gap-7 bg-white overflow-hidden">
      <div className="overflow-hidden">
        <img
          className="rounded-t-xl transition-transform hover:scale-110 duration-300 w-full"
          src={`images/recipe/img-${i + 1}.png`}
          alt={meal}
        />
      </div>
      <div className="px-4 pb-5 text-left">
        <CardTitle>{meal}</CardTitle>
        <a href="#" className="text-body text-base text-accent underline">
          View recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeSection;
