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
      <img className="mb-7" src="images\hero\hero-img.png" />
      <img
        className="absolute right-0 top-[65%] w-20 h-20"
        src="images\hero\Broccoli.png"
      />
      <img
        className="absolute top-[10%] w-12.5 h-12.5"
        src="images\hero\Tomato.png"
      />
      <img
        className="absolute top-[60%] -left-[15%] w-25 h-25"
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
      className={`flex flex-col w-52 rounded-xl shadow-lg p-3 gap-4 absolute bg-white ${
        i === 1 ? "bottom-[20%] left-[45%] " : "bottom-[10%]"
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
        <p className="font-body text-left text-sm min-h-[5.5rem]">
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
          <p className="font-body text-base font-semibold ">{data.name}</p>
        </span>
        <HeartIcon className="w-6" />
      </div>
    </div>
  );
}

export default HeroSection;
