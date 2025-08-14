import { HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/outline";
import SectionHeader from "./SectionHeader";
import { StarIcon } from "@heroicons/react/16/solid";

const comments = [
  {
    tittle: "Spaghetti Bolognesse",
    name: "Lady Rudy",
    img: "1",
    description:
      "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
    like: 2,
  },
  {
    tittle: "Roasted Chicken",
    name: "Emily Rose",
    img: "2",
    description:
      "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow",
    like: 5,
  },
  {
    tittle: "Vegetable Pot Pie",
    name: "Susan H",
    img: "3",
    description:
      "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
    like: 3,
  },
  {
    tittle: "Fresh Garden Salad",
    name: "Lilac Laura",
    img: "4",
    description:
      "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.",
    like: 1,
  },
];

function CommunitySection() {
  return (
    <section>
      <div className="container mx-auto p-4 my-12">
        <SectionHeader>From Our Community</SectionHeader>
        <CommunityCards />
      </div>
    </section>
  );
}

function CommunityCards() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      {comments.map((el, i) => (
        <CommunityCard data={el} key={i} />
      ))}
    </div>
  );
}

function CommunityCard({ data }) {
  return (
    <div className="flex flex-col rounded-xl gap-4 shadow-lg p-6">
      <div className="flex gap-6">
        <img
          src={`images/community/person-${data.img}.png`}
          className="rounded-full"
          alt="person"
        />
        <span className="flex flex-col">
          <h3 className="text-xl font-heading font-semibold">{data.tittle}</h3>
          <p className="text-left text-sm font-body text-[#7F7D7D]">
            {data.name}
          </p>
        </span>
      </div>
      <div className="flex gap-1 p-1">
        {Array(5)
          .fill()
          .map((_, i) => (
            <StarIcon className="w-6 text-[#FFC567]" key={i} />
          ))}
      </div>
      <p className="text-left text-sm font-body">{data.description}</p>
      <div className="overflow-hidden rounded-3xl">
        <img
          src={`images/community/img-${data.img}.png`}
          className=" transition-transform hover:scale-110 duration-300 w-full"
          alt="person"
        />
      </div>
      <div className="flex gap-5">
        <span className="flex gap-2">
          <HandThumbUpIcon className="w-6" />
          <span className="text-base font-semibold font-body">{data.like}</span>
        </span>
        <span className="flex gap-2">
          <ShareIcon className="w-6" />
          <span className="text-base font-semibold font-body">Share</span>
        </span>
      </div>
    </div>
  );
}

export default CommunitySection;
