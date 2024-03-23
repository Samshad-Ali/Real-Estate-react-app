import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className=" flex justify-center items-center overflow-hidden">
      <div className="w-full xl:w-[1044px]">
        <Navbar/>
        <Homepage/>
      </div>
    </div>
  );
};

export default App;
