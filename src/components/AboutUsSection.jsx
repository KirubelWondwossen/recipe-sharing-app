import Button from "./Button";
import SectionHeader from "./SectionHeader";

function AboutUsSection() {
  return (
    <section
      id="about"
      className="md:h-[30rem] md:bg-[url('/images/about/bg.png')] bg-contain bg-no-repeat bg-center"
    >
      <div className="container mx-auto p-4 my-12 flex flex-col lg:flex-row gap-5 items-center h-full">
        <div className="md:block w-fit p-4 bg-white rounded-lg md:mx-14 lg:mt-56">
          <p className="text-body text-base lg:text-xl text-center sm:text-left text-logo">
            50+ Quick Food Recipes That Easy To Do!
          </p>
        </div>
        <div className="md:mx-14 md:px-8 p-4 bg-white w-fit md:rounded-lg md:shadow-lg flex flex-col items-start gap-5 relative">
          <img
            className="absolute right-[15%] top-[-5%] w-20 md:w-auto"
            src="/images/about/Bread.png"
            alt="Bread"
          />
          <SectionHeader style={"md:mt-5"}>About Us</SectionHeader>
          <p className="text-body text-base md:text-xl text-left w-auto  md:w-[30rem]">
            Our app is built to help you discover new recipes, learn cooking
            skills, and enjoy the journey of creating delicious meals with ease
            and confidence.
          </p>
          <Button style={"md:mb-5"}>Learn More</Button>

          <img
            className="absolute bottom-[-15%] right-0 w-14"
            src="/images/about/Avocado.png"
            alt="Avocado"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
