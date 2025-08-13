import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const heroCards = [
  {
    img: "hero-p1.png",
    name: "Sarah M.",
    desc: `"The recipes here are not only delicious but also easy to follow”.`,
    rating: 5,
  },
  {
    img: "hero-p2.png",
    name: "Farellin J.",
    desc: `“I've discovered a treasure trove of meatless recipes that have made my meals”.`,
    rating: 5,
  },
];

function HeroSection() {
  return (
    <section>
      <div className="container mx-auto p-4 flex flex-col justify-between md:flex-row">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center md:items-start">
      <h1 className="font-bold font-heading text-3xl sm:text-4xl lg:text-5xl mb-4 text-center md:text-left sm:mt-20 leading-tight">
        Cooking Made Fun and Easy: Unleash Your Inner Chef
      </h1>

      <p className="md:text-base text-sm mb-7 sm:mb-12 md:text-left w-10/12 text-gray-400">
        Discover more than
        <span className="text-accent font-body"> 10,000 recipes</span> in your
        hand with the best recipe. Help you to find the easiest way to cook.
      </p>

      <button className="text-sm sm:text:base px-7 py-3.5 rounded-2xl bg-accent text-white font-body">
        Explore recipes
      </button>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="container mx-auto p-4 relative">
      <img className="mb-7" src="images\hero\hero-img.png" />
      <img
        className="absolute right-0 top-[65%] w-11 sm:w-20 sm:h-20"
        src="images\hero\Broccoli.png"
      />
      <img
        className="absolute top-[10%] w-8 sm:w-12.5 sm:h-12.5"
        src="images\hero\Tomato.png"
      />
      <img
        className="absolute top-[60%] -left-[5%] w-14 sm:w-25 sm:h-25"
        src="images\hero\Garlic.png"
      />
      {heroCards.map((element, i) => (
        <HeroCards data={element} i={i} />
      ))}
    </div>
  );
}

function HeroCards({ data, i }) {
  return (
    <div
      className={`invisible sm:visible flex flex-col w-52 rounded-xl shadow-lg p-3 gap-4 absolute bg-white ${
        i === 1
          ? "bottom-[20%] md:left-[55%] sm:left-[50%] "
          : "md:bottom-[10%] sm:bottom-[15%] sm:left-[10%]"
      }`}
    >
      <div className="bg-[#F1F3F7] p-3 rounded-xl">
        <div className="flex gap-1 p-1">
          {Array(data.rating)
            .fill()
            .map(() => (
              <StarIcon className="w-4 h-4 text-accent" />
            ))}
        </div>
        <p className="font-body text-left text-xs lg:text-sm min-h-[4rem] lg:min-h-[5.5rem]">
          {data.desc}
        </p>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-2 items-center">
          <img
            src={`images/hero/${data.img}`}
            alt="person"
            className="w-7 h-7 rounded-full"
          />
          <p className="font-body text-sm lg:text-base font-semibold ">
            {data.name}
          </p>
        </span>
        <HeartIcon className="md:w-6 w-4" />
      </div>
    </div>
  );
}

export default HeroSection;
