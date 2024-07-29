import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

const SidebarItems = ({ Icon, label, href }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const buttonClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={buttonClick}
      type="button"
      className={classNames(
        "w-full group flex items-center gap-x-2 text-slate-500 text-xl font-[500] pl-5 py-3 transition-all duration-400 ",
        
          isActive && "text-white bg-purple-600 hover:text-white hover:bg-purple-600",
          !isActive && "hover:text-slate-400 hover:bg-purple-600/20"
        
      )}
    >
      <Icon size={30} className={classNames("text-slate-500 group-hover:text-slate-400", isActive && "text-white group-hover:text-white")}/>
      {label}
    </button>
  );
};

export default SidebarItems;
