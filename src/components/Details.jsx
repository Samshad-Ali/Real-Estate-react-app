import React from "react";
import { useSelector } from "react-redux";
import Gernalguide from "./Gernalguide";
import { TbArrowsMove } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbBadge } from "react-icons/tb";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import Nearbyplace from "./Nearbyplace";
import SmallMap from "./SmallMap";
const Details = () => {
  const data = useSelector((state) => state?.estateReducer.singaldata);
  return (
    <div className="flex flex-col gap-4">
      <Gernalguide />
      <div className=" flex flex-col gap-1">
        <p className="text-sm font-semibold">Room Sizes</p>
        <div className="flex flex-wrap gap-4 items-center text-[10px]">
          <p className="flex items-center gap-1 rounded-md bg-yellow-100 p-1">
            <TbArrowsMove size={17} />
            {data?.size}sqft{" "}
          </p>
          <p className="flex items-center gap-1 rounded-md bg-yellow-100 p-1">
            <IoBedOutline size={17} /> {`${data?.bedRooms} Bed`}{" "}
          </p>
          <p className="flex items-center gap-1 rounded-md bg-yellow-100 p-1">
            <LiaBathSolid size={17} /> {`${data?.bathroom} Bathroom`}{" "}
          </p>
        </div>
      </div>
      <Nearbyplace data={data} />
     <SmallMap/>
     <div className="flex flex-wrap gap-4 w-full items-center justify-between">
        <button className="font-semibold text-xs gap-2 hover:bg-yellow-100 transition-all p-2 px-4 rounded-md border border-yellow-500 flex justify-between items-center" > <HiOutlineChatBubbleBottomCenterText size={20}/> Send Message </button>
        <button className="font-semibold text-xs gap-2 hover:bg-yellow-100 transition-all p-2 px-4 rounded-md border border-yellow-500 flex justify-between items-center" ><TbBadge size={20}/> Save Place</button>
     </div>
    </div>
  );
};

export default Details;
