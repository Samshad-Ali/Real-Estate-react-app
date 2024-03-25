import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
import Phonenav from "./Phonenav";
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
          <Link to='/' className="hover:scale-105 transition-all cursor-pointer">
            Home
          </Link>
          <Link to='list' className="hover:scale-105 transition-all cursor-pointer">
            About
          </Link>
          <Link className="hover:scale-105 transition-all cursor-pointer">
            Contact
          </Link>
          <Link className="hover:scale-105 transition-all cursor-pointer">
            Agents
          </Link>
        </ul>
      </div>
      <span
      onClick={()=>{setIsPhoneNav(!isPhoneNave)} }
      className="sm:hidden z-20 block bg-black text-white p-1 rounded-md">
        <FaBarsStaggered />
      </span>
      <div className="hidden gap-8 text-sm sm:flex ">
        <button className=" hover:scale-105 transition-all">Sign in</button>
        <button className="bg-yellow-400 rounded-sm px-4 p-2 hover:scale-105 transition-all">
          Sign up
        </button>
      </div>
    </nav>
      <Phonenav setIsPhoneNav={setIsPhoneNav} isPhoneNave={isPhoneNave} />
    </>

  );
};

export default Navbar;

