import React, { useEffect } from "react";
import Filter from "../components/Filter";
import { useSelector,useDispatch } from "react-redux";
import Card from "../components/Card";
import Map from "../components/Map";
import { getData } from "../redux/slices/slice";
import {listData} from '../lib/data'
const Listpage = () => {
  const dispath=useDispatch();
  const data = useSelector((state) => state?.estateReducer.listdatas);
  useEffect(() => {
    dispath(getData(listData))
  }, []);
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col sm:flex-row items-center">
      <div className= "w-full sm:w-[70%] h-full list  overflow-y-scroll flex flex-col gap-4  p-4">
        <Filter />
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className="w-full bg-white p-2   sm:w-[30%] hidden sm:block h-full ">
        <Map data={data} />
      </div>
    </div>
  );
};

export default Listpage;
