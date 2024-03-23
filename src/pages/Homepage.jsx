import React from "react";
import bgImage from "../../public/bg.png";
import Textbox from "../components/Textbox";
import SearchInput from "../components/SearchInput";
const Homepage = () => {
  return (
    <div className="flex w-full min-h-[calc(100vh-64px)] sm:h-[calc(100vh-64px)]  md:bg-none bg-bg-image  bg-no-repeat bg-cover">
      <div className="w-full  bg-white/85 bg-opacity-30 md:bg-none md:w-2/3 flex flex-col gap-4 p-4 justify-center items-center">
        <div className="flex flex-col gap-2  md:pr-24 ">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            Your Gateway to Discovering Dream Place
          </h1>
          <p className="text-sm">
            "Dream Estate, Your one-stop destination for finding your dream
            home. Explore, connect, and discover your perfect property
            effortlessly.
          </p>
        </div>
        <SearchInput />
        <div className="flex w-full justify-between">
          <Textbox title="16+" desc="Years of Experience" />
          <Textbox title="200" desc="Award Gained" />{" "}
          <Textbox title="1200+" desc="Property Ready" />
        </div>
      </div>
      <div className="bg-white w-1/3 md:flex   h-full hidden justify-center items-center relative">
        <div className="w-[115%] absolute right-0">
          <img className="w-full object-cover" src={bgImage} alt="bg-image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
