import { useState } from "react";
import { BiSolidBell, BiMenu } from "react-icons/bi";
import { AiOutlineMessage, AiOutlineSearch } from "react-icons/ai";
import { useUserAuth } from "./context/UserAuthContext";
import { FaUserCircle } from "react-icons/fa";
import { LuBell, LuSettings } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
const SearchBar = ({ sidebarOpen, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useUserAuth();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleSidebar = (e) => {
    e.stopPropagation();
    toggleSidebar();
  };

  return (
    <div className="sm:flex  sm:justify-between sm:items-center p-2 px-4 sm:px-10 font-poppins">
      <div className="relative  border-solid border-zinc-500  flex items-center py-1 focus-within:text-gray-600 border rounded-md sm:w-[60%]">
        <span className="absolute -top-3.5 left-4 bg-white text-blue-400">
          Search
        </span>

        <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none text-blue-500" />
        <input
          type="text"
          className="pr-3 pl-10 py-2 w-full focus:outline-none placeholder-[#4E4E4E] placeholder-font-inter placeholder-font-semibold text-[6px] sm:text-[11px] md:text-[15]"
          placeholder="Search by profile, settings, artifact, etc..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className=" mx-4">
          <MdOutlineCancel className="w-6 h-6 text-[#6599B8]" />
        </button>
      </div>

      <div className="flex items-center justify-end space-x-3 text-blue-500 mt-3 sm:mt-0">
        <div className="bg-white shadow-lg rounded-xl p-2">
          <LuBell size="20px" />
        </div>
        <div className="bg-white shadow-lg rounded-xl p-2">
          <AiOutlineMessage size="20px" />
        </div>
        <div className="bg-white shadow-lg rounded-xl p-2">
          <LuSettings size="20px" />
        </div>
        <div className="flex justify-center items-center self-stretch my-auto w-10 h-10 bg-white rounded-full shadow-lg">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Image"
              className="rounded-full object-center"
            />
          ) : (
            <FaUserCircle size="25px" className="rounded-full object-center" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
