import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { RxHamburgerMenu } from "react-icons/rx";

// import Footer from "../components/Footer";

const Main = () => {
  const hideSidebar = () => {
    const mobileSideBar = document.getElementById("mobileSideBar");
    mobileSideBar.style.right = "100vw";
    mobileSideBar.style.backgroundColor='transparent'

  };
  const showMobileSideBar = () => {
    const mobileSideBar = document.getElementById("mobileSideBar");
    mobileSideBar.style.right = "0vw";
    mobileSideBar.style.backgroundColor='gray';
    mobileSideBar.style.background='#4d4b4b83';
  };
  return (
    <div className="w-full h-full flex overflow-hidden ">
      <div
        id="sidebar_container"
        className="w-56 h-[100vh] hidden md:flex flex-col fixed "
      >
        <Sidebar />
      </div>

      <div
        id="mobileSideBar"
        className="w-full h-full flex md:hidden bg-gray-500 bg-opacity-60 absolute z-30 transition-all duration-500 right-[100vw]"
        onClick={hideSidebar}
      >
        <div
          className="w-56 h-[100vh] z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <MobileSidebar />
        </div>
      </div>

      <div className=" w-full h-full md:pl-56">
        <div className="h-full flex items-center justify-center bg-purple-600 m-2 rounded-md overflow-hidden shadow-md shadow-gray-400">
          <button
            type="button"
            className="p-5 md:hidden"
            onClick={showMobileSideBar}
          >
            <RxHamburgerMenu size={30} />
          </button>

          <Navbar />
        </div>
        <Outlet />
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Main;
