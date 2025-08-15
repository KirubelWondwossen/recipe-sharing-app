import Logo from "./Logo";
import Button from "./Button";

const items = [
  {
    title: "Menu",
    links: ["Home", "Recipe", "Features", "Community"],
  },
  {
    title: "Categories",
    links: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  },
  {
    title: "Social",
    links: ["Instagram", "Twitter", "Youtube", "Facebook"],
  },
];

function Footer() {
  return (
    <div className="container mx-auto p-4 my-12 flex flex-col items-center md:items-start">
      <Logo style={"w-fit"} />
      <div className="flex flex-col items-center md:flex-row gap-8 justify-between md:w-full">
        <div className="flex gap-10 w-full">
          {items.map((el, i) => (
            <ItemsCol items={el} key={i} />
          ))}
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          <h3 className="font-heading md:text-lg text-base font-semibold">
            Never miss a tasty recipe
          </h3>
          <div>
            <input
              type="text"
              className="font-body text-sm md:text-base border-b-2 mr-4"
              placeholder="Your Email Address"
            />
            <Button style={"sm:py-2 sm:px-4 text-xs sm:text-base py-1 px-3 "}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemsCol({ items }) {
  return (
    <div className="flex flex-col gap-3 mt-6 text-left">
      <h4 className="md:text-xl text-base font-heading font-semibold mb-1">
        {items.title}
      </h4>
      {items.links.map((el) => (
        <a className="text-xs md:text-sm font-body font-medium">{el}</a>
      ))}
    </div>
  );
}

export default Footer;
