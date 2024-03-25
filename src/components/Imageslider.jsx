import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const Imageslider = ({ data }) => {
  const [imageIdx, setImageIdx] = useState(null);
  const handlePrevBtn=()=>{
    if(imageIdx===0){
      setImageIdx(data?.images.length-1)
    }else{
      setImageIdx(imageIdx-1)
    }
  }
    const handleNextBtn=()=>{
      if(imageIdx===data?.images.length-1){
        setImageIdx(0)
      }else{
        setImageIdx(imageIdx+1)
      }
  }
  return (
    <React.Fragment>
      {imageIdx !== null && (
        <div className="w-full h-screen bg-black absolute top-0 right-0 z-40">
          <div className="relative h-full w-full flex justify-center items-center">
            <span
              onClick={() => {
                setImageIdx(null);
              }}
              className="text-white top-5 right-1 sm:right-10 absolute hover:scale-105"
            >
              <IoCloseSharp size={30} />
            </span>
            <img
              className="w-[80%] object-cover"
              src={data.images[imageIdx]}
              alt=""
            />
            <span onClick={handlePrevBtn} className="text-white left-0 sm:left-5 absolute hover:scale-105">
              <FaAngleLeft size={40} />
            </span>
            <span onClick={handleNextBtn} className="text-white right-0 sm:right-5 absolute hover:scale-105">
              <FaAngleRight size={40} />
            </span>
          </div>
        </div>
      )}
      <div className="flex gap-2 h-[275px]">
        <img
          onClick={() => {
            setImageIdx(0);
          }}
          className="w-[70%] rounded-md object-cover h-full"
          src={data?.images[0]}
        />
        <div className="flex gap-2 h-full justify-between flex-col w-[30%]">
          {data?.images.slice(1).map((item, idx) => (
            <img
              onClick={() => {
                setImageIdx(idx + 1);
              }}
              className="w-full h-[30%] object-cover rounded-md"
              src={item}
              key={idx}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Imageslider;
