import SectionHeader from "./SectionHeader";

import {
  BeakerIcon,
  Squares2X2Icon,
  ClockIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    Icon: BeakerIcon,
    title: "Easy-to-Follow Recipes",
    description:
      "Clear, step-by-step instructions so anyone can cook with confidence.",
  },
  {
    id: 2,
    Icon: Squares2X2Icon,
    title: "Curated Meal Categories",
    description:
      "Explore recipes by breakfast, lunch, dinner, or your cravings.",
  },
  {
    id: 3,
    Icon: ClockIcon,
    title: "Quick & Total Time Info",
    description: "Know how long each recipe takes before you start cooking.",
  },
  {
    id: 4,
    Icon: ListBulletIcon,
    title: "Ingredient Details",
    description: "Accurate quantities with every recipe—no guesswork.",
  },
  {
    id: 5,
    Icon: MagnifyingGlassIcon,
    title: "Smart Recipe Search",
    description: "Find the perfect dish by name, ingredient, or category.",
  },
  {
    id: 6,
    Icon: StarIcon,
    title: "Favorites List",
    description: "Save your go-to recipes and access them anytime.",
  },
];

function FeaturesSection() {
  return (
    <section id="features">
      <div className="container mx-auto p-4 my-12">
        <SectionHeader>Why You’ll Love This App</SectionHeader>
        <FeaturesCards />
      </div>
    </section>
  );
}

function FeaturesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      {features.map((feature) => (
        <FeaturesCard features={feature} key={feature.id} />
      ))}
    </div>
  );
}

function FeaturesCard({ features }) {
  return (
    <div className="rounded-lg border-2 sm:text-center min-w-[15rem] p-6 flex flex-col gap-5 items-start">
      <features.Icon className="w-6" />
      <h3 className="lg:text-xl md:text-lg font-heading font-semibold">
        {features.title}
      </h3>
      <p className="font-body text-base text-left">{features.description}</p>
    </div>
  );
}

export default FeaturesSection;
