import { StarIcon } from "@heroicons/react/16/solid";
import Navbar from "./Navbar";
import { HeartIcon } from "@heroicons/react/24/outline";

function HeroSection() {
  return (
    <section>
      <div className="container mx-auto p-4 flex justify-between h-screen">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-start">
      <h1 className="font-bold font-heading text-5xl mb-4 text-left mt-20 leading-tight">
        Cooking Made Fun and Easy: Unleash Your Inner Chef
      </h1>

      <p className="text-base mb-12 md:text-left md:w-10/12 text-gray-400">
        Discover more than
        <span className="text-accent font-body"> 10,000 recipes</span> in your
        hand with the best recipe. Help you to find the easiest way to cook.
      </p>

      <button className="px-7 py-3.5 rounded-2xl bg-accent text-white font-body">
        Explore recipes
      </button>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="container mx-auto p-4 relative">
      <img className="" src="images\hero\hero-img.png" />
      <img
        className="absolute right-0 top-[65%] w-20 h-20"
        src="images\hero\Broccoli.png"
      />
      <img
        className="absolute top-[5%] w-12.5 h-12.5"
        src="images\hero\Tomato.png"
      />
      <img
        className="absolute top-[60%] -left-[15%] w-25 h-25"
        src="images\hero\Garlic.png"
      />

      <HeroCards />
    </div>
  );
}

export default HeroSection;
