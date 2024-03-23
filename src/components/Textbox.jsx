import React from "react";

const Textbox = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-0 -space-y-2">
      <h2 className="font-bold text-lg">{title}</h2>
      <h3 className="text-gray-500 lg:text-base text-sm ">{desc}</h3>
    </div>
  );
};

export default Textbox;
