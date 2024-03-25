import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Gernalguide = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold text-sm">General</p>
      <div className="bg-yellow-100 flex flex-col gap-4 rounded-md p-2">
        <div className="flex gap-2 items-center">
          <span>
            <FaTools size={20} />
          </span>
          <div className="text-xs">
            <p className="font-semibold">Utilities</p>
            <span className="text-[10px] text-gray-800">Renter is responsible</span>
          </div>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <span>
            <MdOutlinePets size={20} />
          </span>
          <div className="text-xs">
            <p>Pet Policy</p>
            <span className="text-[10px] text-gray-800">Pets Allowed</span>
          </div>
        </div>{" "}
        <div className="flex gap-2 items-center">
          <span>
            <GiReceiveMoney size={20} />
          </span>
          <div className="text-xs">
            <p className="font-semibold">Property Fees</p>
            <span className="text-[10px] text-gray-800">Must have 3x the rent in total household income</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gernalguide;
