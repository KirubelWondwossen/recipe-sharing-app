import Navbar from "./Navbar";

function HeroSection() {
  return (
    <section>
      <div className="container mx-auto p-4 flex justify-between">
        <HeroLeft />
      </div>
    </section>
  );
}

function HeroLeft() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-start">
      <h1 className="font-bold font-heading text-4xl mb-7">
        Cooking Made Fun and Easy: Unleash Your Inner Chef
      </h1>

      <p className="text-base mb-12">
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

export default HeroSection;
