import React from "react";
import Logo from "../partials/Logo";
import SidebarItems from "../partials/SidebarItems";
import { MdSpaceDashboard } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { BsPersonFillDash } from "react-icons/bs";
const Sidebar = () => {
  const routes = [
    {
      icon: MdSpaceDashboard,
      href: "/",
      label: "Dashboard",
    },
    {
      icon:MdDashboardCustomize,
      href: "/logistics",
      label: "Logistics",
    },
    {
      icon: BsPersonFillDash,
      href: "/dataview",
      label: "Data View",
    },
  ];
  return (
    <div className="first-line:w-full h-full border-r-2 border-gray-300 bg-white ">
      <div className="w-full h-fit p-5 flex items-center justify-center">
        <Logo />
      </div>
      {
        routes.map((route)=>(
            <SidebarItems key={route.href} href={route.href} Icon={route.icon} label={route.label}/>
        ))
      }
    </div>
  );
};

export default Sidebar;
