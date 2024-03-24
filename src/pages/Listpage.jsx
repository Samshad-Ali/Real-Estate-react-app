import React from "react";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Map from "../components/Map";
const Listpage = () => {
  const data = useSelector((state) => state.estateReducer.placeData);
  console.log(data);
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col sm:flex-row items-center">
      <div className= "w-full sm:w-[70%] h-full list  overflow-y-scroll flex flex-col gap-4  p-4">
        <Filter />
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className="w-full sm:w-[30%] hidden sm:block h-full ">
        <Map data={data} />
      </div>
    </div>
  );
};

export default Listpage;
