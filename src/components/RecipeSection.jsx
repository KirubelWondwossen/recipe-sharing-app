import Button from "./Button";
import SectionHeader from "./SectionHeader";
function RecipeSection() {
  return (
    <section>
      <div className="container mx-auto p-4 my-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <SectionHeader style={"md:text-left text-center"}>
              Discover, Learn, Enjoy
            </SectionHeader>
            <p className="font-body md:text-2xl text-center md:text-left text-[#7F7D7D]">
              Check our most popular recipes of this week
            </p>
          </div>

          <Button style={"invisible absolute md:visible md:static"}>
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;
