import Logo from "./Logo";

const items = [
  {
    title: "Menu",
    links: ["Home", "Recipe", "Features", "Community"],
  },
  {
    title: "Categories",
    links: ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink"],
  },
  {
    title: "Social",
    links: ["Instagram", "Twitter", "Youtube", "Facebook"],
  },
];

function Footer() {
  return (
    <div className="container mx-auto p-4 my-12">
      <Logo style={"w-fit"} />
      <div className="flex gap-10">
        {items.map((el, i) => (
          <ItemsCol items={el} key={i} />
        ))}
      </div>
    </div>
  );
}

function ItemsCol({ items }) {
  return (
    <div className="flex flex-col gap-3 mt-6 text-left">
      <h4 className="text-xl font-heading font-semibold mb-1">{items.title}</h4>
      {items.links.map((el) => (
        <a className="text-sm font-body font-medium">{el}</a>
      ))}
    </div>
  );
}

export default Footer;
