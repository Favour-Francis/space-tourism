import { NavLink } from "react-router-dom";
import Links from "../lib/navigation";
import SideBar from "./SideBar";
import logo from "../assets/shared/logo.svg";

export default function TopBar() {
  return (
    <>
      <img className="sm:size-15 size-20" src={logo} alt="logo" />
      <div className="hidden sm:flex items-center">
        <span className="lg:block hidden border border-gray-700 w-90 h-0.5 -mr-8"></span>
        <nav className="h-full w-full flex justify-center gap-8 border border-gray-700 lg:px-10 px-10">
          {Links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-md font-bold flex items-center gap-3 sm:py-10 md:py-7 cursor-pointer 
                ${isActive ? "border-b-2" : ""}`
              }
            >
              <span className="hidden lg:block text-lg">{link.number}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <span className="sm:hidden block">
        <SideBar />
      </span>
    </>
  );
}
