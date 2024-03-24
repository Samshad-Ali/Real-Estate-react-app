import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import {useDispatch} from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import Listpage from "./pages/Listpage";
import Singalpage from "./pages/Singalpage";
import { listData } from "./lib/data";
import {getData} from './redux/slices/slice'
const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getData(listData))
  }, []);
  return (
    <div className=" flex justify-center items-center overflow-hidden">
      <div className="w-full xl:w-[1044px]">
        <Navbar/>
        <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/list" element={<Listpage/>} />
    <Route path="/singallist/:id" element={<Singalpage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
