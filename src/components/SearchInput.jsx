import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchInput = () => {
  const btnTypes = ["Buy", "Rent"];
  const [query, setQuery] = useState({
    location: "",
    minPrice: 0,
    maxPrice: 0,
    type: "Buy",
  });
  const swithType = (type) => {
    switch (type) {
      case "Buy":
        setQuery({ ...query, type: "Buy" });
        break;
      case "Rent":
        setQuery({ ...query, type: "Rent" });
        break;
    }
    // or
    // setQuery({...query,type})
  };
  return (
    <div className="mt-8 w-full">
      <div>
        {btnTypes.map((type) => (
          <button
            key={type}
            className={` ${
              query.type === type
                ? "bg-black text-white"
                : "bg-white text-black "
            } border border-b-0  p-2 px-4`}
            onClick={() => {
              swithType(type);
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row border">
        <form className=" flex sm:flex-row flex-col justify-center items-center p-2 bg-white">
          <input
            className=" w-full sm:w-2/3  outline-none p-1  border-b  sm:border-b-0   sm:border-r bg-transparent"
            type="text"
            name="cityName"
            placeholder="City Location"
          />
          <input
            className="w-full sm:w-1/3 outline-none p-1 border-b sm:border-b-0  sm:border-r bg-transparent"
            type="number"
            name="minPrice"
            placeholder="Min Price"
            min={0}
            max={100000000}
          />
          <input
            className="w-full sm:w-1/3 outline-none p-1  bg-transparent"
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            min={0}
            max={100000000}
          />
        </form>
        <button className="text-white cursor-pointer hover:bg-yellow-600  flex justify-center  items-center sm:block  p-2 sm:p-0 sm:px-6 bg-yellow-500 transition-all">
          <FiSearch size={25} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
