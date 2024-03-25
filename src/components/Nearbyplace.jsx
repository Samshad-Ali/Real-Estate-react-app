import React from "react";
import { FaSchool } from "react-icons/fa";
import { TbBusStop } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";
const Nearbyplace = ({ data }) => {
  return (
    <div className="flex flex-col gap-2  ">
      <p className="text-sm font-semibold">Nearby Place</p>
      <div className="flex flex-wrap justify-between  bg-yellow-100 rounded-md p-2 items-center gap-4">
        <div className="flex gap-1 items-center">
          <FaSchool size={17} />
          <div className=" flex flex-col">
            <p className=" text-[10px]">School</p>
            <span className="text-[9px] font-semibold">{data?.school} </span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <TbBusStop size={17} />
          <div className=" flex-col flex">
            <p className=" text-[10px]">Bus Stop</p>
            <span className="text-[9px] font-semibold">{data?.bus} </span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <IoRestaurant size={17} />
          <div className=" flex-col flex">
            <p className=" text-[10px]">Restaurant</p>
            <span className="text-[9px] font-semibold">
              {data?.restaurant}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearbyplace;
