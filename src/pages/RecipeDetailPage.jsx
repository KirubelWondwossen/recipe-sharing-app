import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import {
  GlobeAltIcon,
  HeartIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import CardTitle from "../components/CardTitle";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const data = [
  {
    type: "Cusine",
    desc: "Russian",
    Icon: GlobeAltIcon,
  },
  {
    type: "Category",
    desc: "Lunch",
    Icon: Squares2X2Icon,
  },
];

function RecipeDetailPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [instructions, setInstructions] = useState([]);
  useEffect(() => {
    async function fetchMeal() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      const mealData = data.meals[0];

      setMeal(mealData);

      const ingList = [];
      for (let i = 1; i <= 20; i++) {
        const ing =
          mealData[`strIngredient${i}`] &&
          mealData[`strMeasure${i}`] + " " + mealData[`strIngredient${i}`];
        if (ing) ingList.push(ing);
      }
      setIngredient(ingList);
      setInstructions(mealData.strInstructions.split("\r\n"));
    }

    fetchMeal();
  }, [id]);

  return (
    <div className="container mx-auto">
      <Navbar hidden={"md:hidden"} />
      <Trending
        visible={"hidden"}
        height={"h-[8rem] sm:h-[10rem] md:h-[15rem]"}
        meal={meal}
      />
      <div className="flex gap-5 sm:gap-11">
        {data.map((el, i) => (
          <Tags data={el} key={i} />
        ))}
        <HeartIcon className="w-5 sm:w-7 md:w-8" />
      </div>
      <Ingredients ingredients={ingredient} />
      <Instructions instructions={instructions} />
      <Footer />
    </div>
  );
}

function Tags({ data }) {
  return (
    <div className="flex gap-4 items-center my-5 sm:my-8">
      <data.Icon className="w-5 sm:w-7 md:w-8" />
      <span className="flex flex-col items-start">
        <p className="text-xs md:text-base text-[#ADADAD] font-body">
          {data.type}
        </p>
        <h4 className="sm:text-xl md:text-2xl font-heading font-semibold">
          {data.desc}
        </h4>
      </span>
    </div>
  );
}

function Ingredients({ ingredients }) {
  return (
    <div className="rounded-xl shadow-lg flex flex-col items-start sm:my-8 p-4">
      <CardTitle>Ingredients</CardTitle>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 my-2">
        {ingredients.map((el, i) => (
          <li
            className="text-xs sm:text-base md:text-lg font-body font-medium text-left"
            key={i}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Instructions({ instructions }) {
  return (
    <div className="flex flex-col items-start my-8 p-4">
      <CardTitle>
        Cooking <span className="text-accent">Instructions</span>
      </CardTitle>
      <div className="flex flex-col gap-2 w-full my-4">
        {instructions.map((el, i) => (
          <Steps step={el} i={i} key={i} />
        ))}
        <Button style={"bg-[#FF4D4D] w-fit font-semibold"}>
          Watch Youtube Video
        </Button>
      </div>
    </div>
  );
}

function Steps({ step, i }) {
  return (
    <div className="flex items-center gap-2 p-4 rounded-xl bg-[#EEEEEE] w-full">
      <span className="sm:text-lg md:text-2xl text-accent font-body font-semibold">
        {i + 1 > 9 ? i + 1 : "0" + (i + 1)}
      </span>
      <p className="text-xs sm:text-sm md:text-lg font-body font-medium text-left">
        {step}
      </p>
    </div>
  );
}
export default RecipeDetailPage;
