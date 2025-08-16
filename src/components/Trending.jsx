import SectionHeader from "./SectionHeader";

function Trending({ visible }) {
  return (
    <div className="flex flex-col p-4 mt-5 items-start justify-end rounded-3xl h-[15rem] relative bg-[url('/images/home/img.png')] bg-cover bg-no-repeat bg-center">
      <h3
        className={`${visible} text-2xl font-heading font-medium text-[#DC582A]`}
      >
        Trending Now
      </h3>
      <SectionHeader style={"text-white"}>Salad with Cheese</SectionHeader>
    </div>
  );
}

export default Trending;
