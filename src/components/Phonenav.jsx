import { Link,useNavigate } from "react-router-dom";
const Phonenav = ({ isPhoneNave,setIsPhoneNav }) => {
  const navigate=useNavigate();
  const handleNavBtn=()=>{
    navigate('/')
    setIsPhoneNav(false)
  }
  return (
    <div
      className={`absolute ${
        isPhoneNave ? "translate-x-0 " : "-translate-x-[100%]"
      }  top-0 sm:hidden transition-all h-screen bg-black text-white flex flex-col p-2 gap-4 justify-center items-center w-[250px]`}
    >
      <li onClick={handleNavBtn} className="hover:scale-105 transition-all cursor-pointer">
        {" "}
        Home
      </li>
      <li onClick={handleNavBtn} className="hover:scale-105 transition-all cursor-pointer">About</li>
      <li onClick={handleNavBtn} className="hover:scale-105 transition-all cursor-pointer">Contact</li>
      <li onClick={handleNavBtn} className="hover:scale-105 transition-all cursor-pointer">Agents</li>
      <div className="flex gap-4 text-sm border-t border-gray-400 py-4 flex-col items-center mt-20 w-full">
        <button className="w-fit  hover:scale-105 transition-all">
          Sign in
        </button>
        <button className="w-fit bg-yellow-400 rounded-sm px-4 p-2 text-black  hover:scale-105 transition-all">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Phonenav;
