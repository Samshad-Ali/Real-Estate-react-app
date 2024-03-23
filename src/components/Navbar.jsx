import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../public/logo.png";
const Navbar = () => {
    const [isPhoneNave,setIsPhoneNav] = useState(false);
  return (
    <>
    <nav className="w-full h-16 bg-white  p-4 flex justify-between items-center">
      <div className="flex gap-8 h-full items-center">
        <a className="flex h-full items-center gap-1" href="/">
          <img className="w-[28px]" src={logo} alt="logo" />
          <span className="block sm:hidden md:block font-bold">
            DreamEstate
          </span>
        </a>
        <ul className=" items-center gap-6 text-sm sm:flex hidden">
          <li className="hover:scale-105 transition-all cursor-pointer">
            Home
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer">
            About
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer">
            Contact
          </li>
          <li className="hover:scale-105 transition-all cursor-pointer">
            Agents
          </li>
        </ul>
      </div>
      <span
      onClick={()=>{setIsPhoneNav(!isPhoneNave)} }
      className="sm:hidden z-50 block bg-black text-white p-1 rounded-md">
        <FaBarsStaggered />
      </span>
      <div className="hidden gap-8 text-sm sm:flex ">
        <button className=" hover:scale-105 transition-all">Sign in</button>
        <button className="bg-yellow-400 rounded-sm px-4 p-2 hover:scale-105 transition-all">
          Sign up
        </button>
      </div>
    </nav>
      <PhoneNav isPhoneNave={isPhoneNave} />
    </>

  );
};

export default Navbar;

const PhoneNav = ({isPhoneNave}) => {
  return (
    <div className={`absolute ${isPhoneNave?'translate-x-0 ':'-translate-x-[100%]'}  top-0 sm:hidden transition-all h-screen bg-black text-white flex flex-col p-2 gap-4 justify-center items-center w-[250px]`}>
      <li className="hover:scale-105 transition-all cursor-pointer">Home</li>
      <li className="hover:scale-105 transition-all cursor-pointer">About</li>
      <li className="hover:scale-105 transition-all cursor-pointer">Contact</li>
      <li className="hover:scale-105 transition-all cursor-pointer">Agents</li>
      <div className="flex gap-4 text-sm border-t border-gray-400 py-4 flex-col items-center mt-20 w-full">
        <button className="w-fit  hover:scale-105 transition-all">Sign in</button>
        <button className="w-fit bg-yellow-400 rounded-sm px-4 p-2 text-black  hover:scale-105 transition-all">
          Sign up
        </button>
      </div>
    </div>
  );
};
