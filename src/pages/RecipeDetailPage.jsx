import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import {
  GlobeAltIcon,
  HeartIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import CardTitle from "../components/CardTitle";

const ingredients = [
  "2 cups (diced) Potatoes",
  "1 cup (diced) Carrots",
  "1 cup Peas",
  "1/2 cup Mayonnaise",
  "1/2 cup (diced) Pickles",
  "2 Boiled eggs (chopped)",
  "Salt to taste",
  "Black pepper to taste",
];

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
  return (
    <div className="container mx-auto">
      <Navbar />
      <Trending visible={"hidden"} />
      <div className="flex gap-11">
        {data.map((el, i) => (
          <Tags data={el} key={i} />
        ))}
        <HeartIcon className="w-8" />
      </div>
      <Ingredients ingredients={ingredients} />
      <Footer />
    </div>
  );
}

function Tags({ data }) {
  return (
    <div className="flex gap-4 items-center my-8">
      <data.Icon className="w-8" />
      <span className="flex flex-col items-start">
        <p className="text-base text-[#ADADAD] font-body">{data.type}</p>
        <h4 className="text-2xl font-heading font-semibold">{data.desc}</h4>
      </span>
    </div>
  );
}

function Ingredients({ ingredients }) {
  return (
    <div className="rounded-xl shadow-lg flex flex-col items-start m-8 p-4">
      <CardTitle>Ingredients</CardTitle>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-2 my-2">
        {ingredients.map((el, i) => (
          <li className="text-lg font-body font-medium text-left" key={i}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetailPage;
