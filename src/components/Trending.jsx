import SectionHeader from "./SectionHeader";

function Trending({ visible, height, meal }) {
  return (
    <div
      style={{ backgroundImage: `url(${meal && meal.strMealThumb})` }}
      className={`flex flex-col p-4 mt-5 items-start justify-end rounded-3xl ${height}  relative bg-cover bg-no-repeat bg-center`}
    >
      <h3
        className={`${visible} text-2xl font-heading font-medium text-[#DC582A]`}
      >
        Trending Now
      </h3>
      <SectionHeader style={"text-white"}>{meal && meal.strMeal}</SectionHeader>
    </div>
  );
}

export default Trending;
