import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import {
  GlobeAltIcon,
  HeartIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

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

export default RecipeDetailPage;
