import React from "react";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import User from "./User";
import Imageslider from "./Imageslider";
const Singalcard = () => {
  const data = useSelector((state) => state?.estateReducer.singaldata);
  const user = useSelector((state) => state?.estateReducer.userdata);
  console.log(data);
  return (
    <div className="flex flex-col gap-8 w-full h-full">
        <Imageslider data={data} />
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between my-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold"> {data?.title} </h1>
            <div className="flex items-center text-gray-500">
              <IoLocationSharp size={18} />
              <span className="text-sm">{data?.address}</span>
            </div>
            <span className="bg-yellow-200 rounded-md w-fit px-2 p-1 text-sm font-semibold">
              ${data?.price}
            </span>
          </div>
          <div> 
            <User data={user} />
             </div>
        </div>
            <p className="text-xs">{data?.description}</p>
      </div>
    </div>
  );
};

export default Singalcard;
