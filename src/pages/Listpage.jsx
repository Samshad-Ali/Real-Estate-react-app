import React from "react";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import Card from "../components/Card";
const Listpage = () => {
  const data = useSelector((state) => state.estateReducer.placeData);
  console.log(data);
  return (
    <div className="flex h-[calc(100vh-64px)] justify-center items-center">
      <div className="  lg:pr-14 h-full  list flex-1 flex flex-col gap-4  p-4">
        sfs
        <Filter />
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className="bg-purple-500 h-full p-4 ">map</div>
    </div>
  );
};

export default Listpage;
