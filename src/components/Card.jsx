import React from "react";
import { IoLocationSharp, IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbBadge } from "react-icons/tb";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { address, bathroom, bedroom, img, price, title, id } = data;
  return (
    <div className="w-full bg-white rounded-md h-auto lg:h-40 flex-col lg:flex-row flex gap-2">
      <Link className="w-full lg:w-1/3" to={`/singallist/${id}`}>
        <img
          className=" w-full  object-cover h-60 lg:h-40 rounded-md"
          src={img}
          alt="place-photo"
        />
      </Link>
      <div className="w-full lg:w-2/3 p-2 flex h-full flex-col justify-between gap-2">
        <h1 className="font-bold">
          {" "}
          <Link to={`/singallist/${id}`}>{title}</Link>{" "}
        </h1>
        <div className="flex items-center text-gray-500">
          <IoLocationSharp size={18} />
          <span className="text-sm">{address}</span>
        </div>
        <span className="bg-yellow-200 rounded-md w-fit px-2 p-1 text-sm font-semibold">
          ${price}
        </span>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 bg-gray-100 rounded-md  px-2 p-1 items-center">
              <IoBedOutline size={18} />
              <span className="text-xs lowercase">{bedroom} Bedroom</span>
            </div>
            <div className="flex gap-1 bg-gray-100 rounded-md  px-2 p-1 items-center">
              <LiaBathSolid size={18} />
              <span className="text-xs lowercase">{bathroom} Bathroom</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="p-1 cursor-pointer rounded-md border rotate-180 bg-white">
              <TbBadge />
            </p>
            <p className="p-1 cursor-pointer rounded-md border bg-white">
              <HiOutlineChatBubbleBottomCenterText />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
