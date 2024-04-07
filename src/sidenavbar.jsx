// SideNavbar.jsx

import { useState } from "react";
import { FiHome, FiLogOut, FiSettings } from "react-icons/fi";
import logo from "../src/assets/Box.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import {
  HiOutlineRocketLaunch,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { RiBarChartBoxLine } from "react-icons/ri";
import { BiStopwatch } from "react-icons/bi";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const SideNavbar = ({ sidebarOpen, setSidebarOpen, toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState("Analytics");
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleToggleSidebar = (e) => {
    e.stopPropagation();
    toggleSidebar();
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleItemClick = (item, route) => {
    setSelectedItem(item);
    navigate(route);
  };

  return (
    <div
      className={` font-poppins m-5 bg-[#2F667F] rounded-3xl text-white p-2 shadow-lg shadow-gray-800 ${
        sidebarOpen ? "w-75" : "w-20"
      } transition-all duration-300 ease-in-out`}
      style={{ zIndex: 1000 }}
    >
      <div className="relative">
        <button onClick={handleToggleSidebar}>
          {sidebarOpen ? (
            <LuChevronLeftCircle className="absolute text-4xl right-1" />
          ) : (
            <LuChevronRightCircle className="absolute text-4xl right-1" />
          )}
        </button>

        <h2
          className={`text-[42px] font-semibold font-poppins mb-2 mt-11 flex  items-center ${
            sidebarOpen && "mr-10"
          } `}
        >
          <img
            src={logo}
            alt="Track.io Logo"
            className="w-12 h-12 mr-2 inline-block"
          />
          {sidebarOpen && "Catalix"}
        </h2>
        <ul className="space-y-2 mt-5 font-normal">
          <li
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "Dashboard" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
            onClick={() => handleItemClick("Dashboard", "/")}
          >
            <span className="text-xl mr-2">
              <FiHome />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Home</span>
          </li>

          <li
            className={`py-4 px-4 flex  items-center cursor-pointer ${
              selectedItem === "Activities" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
            onClick={() => handleItemClick("Activities", "/activities")}
          >
            {" "}
            <span className="text-xl mr-2">
              <BiStopwatch />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Activities</span>
          </li>
          <li
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "Analytics" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
            onClick={() => handleItemClick("Analytics", "/analytics")}
          >
            <span className="text-xl mr-2">
              <RiBarChartBoxLine />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Analytics</span>
          </li>
          <li
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "Transformation"
                ? "bg-[#539BBB] rounded-2xl"
                : ""
            }`}
            onClick={() => handleItemClick("Transformation", "/transformation")}
          >
            <span className="text-xl mr-2">
              <HiOutlineRocketLaunch />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>
              Transformation
            </span>
          </li>
          <li
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "Library" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
            onClick={() => handleItemClick("Library", "/library")}
          >
            <span className="text-xl mr-2">
              <HiOutlineSquare3Stack3D />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Library</span>
          </li>
        </ul>
      </div>
      <div>
        <hr className="my-4" />
        <ul className="space-y-2 mt-4 font-normal">
          <li
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "Setting" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
            onClick={() => handleItemClick("Setting", "/setting")}
          >
            <span className="text-xl mr-2">
              <FiSettings />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Settings</span>
          </li>
          <li
            onClick={handleLogout}
            className={`py-4 px-4 flex items-center cursor-pointer ${
              selectedItem === "LogOut" ? "bg-[#539BBB] rounded-2xl" : ""
            }`}
          >
            <span className="text-xl mr-2">
              <FiLogOut />
            </span>
            <span className={sidebarOpen ? "ml-2" : "hidden"}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
