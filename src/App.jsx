import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Listpage from "./pages/Listpage";
import Singalpage from "./pages/Singalpage";

const App = () => {
  return (
    <div className=" flex justify-center items-center overflow-hidden">
      <div className="w-full xl:w-[1044px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/list" element={<Listpage />} />
          <Route path="/singallist/:id" element={<Singalpage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
