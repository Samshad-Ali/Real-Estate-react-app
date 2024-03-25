import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { singaldata, userdata } from "../redux/slices/slice";
import { singlePostData, userData } from "../lib/data";
import Singalcard from "../components/Singalcard";
import Details from "../components/Details";
const Singalpage = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(singaldata(singlePostData));
    dispath(userdata(userData));
  }, []);
  return (
    <div className="flex h-[calc(100vh-64px)] list overflow-y-auto  flex-col sm:flex-row">
      <div className="w-full sm:w-[65%] p-4 ">
        <Singalcard />
      </div>
      <div className="bg-white p-4  w-full sm:w-[35%]">
        <Details/>
      </div>
    </div>
  );
};

export default Singalpage;
