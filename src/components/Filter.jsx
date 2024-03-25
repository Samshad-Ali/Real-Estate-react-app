import React from "react";
import { FiSearch } from "react-icons/fi";

const Filter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg">
        Search results for <b>London</b>{" "}
      </h1>
      <div>
        <div className="w-full flex flex-col">
          <label className="text-[10px]" htmlFor="city">Location</label>
          <input
          className="outline-none p-2 text-sm border bg-white rounded-md"
            type="text"
            name="city"
            id="city"
            placeholder="City location"
          />
        </div>
      </div>
      <div className="flex items-center flex-wrap  my-2 gap-2">
        <div className="flex flex-col">
          <label className="text-[10px] " htmlFor="type">Type</label>
        <select className="outline-none text-xs border bg-white p-2 rounded-md" name="type" id="type">
          <option className="bg-yellow-500" value="">any</option>
          <option className="bg-yellow-500" value="buy">Buy</option>
          <option className="bg-yellow-500" value="rent">Rent</option>
        </select>
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-[10px] " htmlFor="property">Properties</label>
        <select className="outline-none text-xs border bg-white p-2 rounded-md" name="property" id="property">
          <option className="bg-yellow-500" value="">any</option>
          <option className="bg-yellow-500 " value="apartment">Apartment</option>
          <option className="bg-yellow-500 " value="house">House</option>
          <option className="bg-yellow-500 " value="condo">Condo</option>
          <option className="bg-yellow-500 " value="land">Land</option>
        </select>
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-[10px] " htmlFor="minPrice">Min Price</label>
          <input
          className="p-2 text-xs border bg-white rounded-md w-32 outline-none"
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-[10px]" htmlFor="maxPrice">Max Price</label>
          <input
          className="p-2 text-xs border bg-white rounded-md w-32 outline-none"
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
          />
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-[10px] " htmlFor="bedroom">Bedroom</label>
          <input
          className="p-2 text-xs border bg-white rounded-md w-32 outline-none"
            type="number"
            name="bedroom"
            id="bedroom"
            placeholder="any"
          />
        </div>{" "}
        <button className="text-white translate-y-2 self-center align-middle  flex justify-center transition-all hover:bg-yellow-600 rounded-md  items-center  p-2 px-6 bg-yellow-500">
          <FiSearch size={21} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Filter;
