import SideBar from "./SideBar";
import logo from "../assets/shared/logo.svg";
import "./App.css";
import Links from "./ui/Links";
export default function TopBar() {
  return (
    <>
      <img className="sm:size-18 size-20" src={logo} alt="logo" />
      <div className="hidden sm:flex items-center">
        <span className="lg:block hidden border border-gray-700 w-140 h-0.5 -mr-8"></span>
        <nav className="topbar-nav h-full w-full flex justify-center gap-8 lg:px-10 px-10">
          <Links />
        </nav>
      </div>
      <span className="sm:hidden block">
        <SideBar />
      </span>
    </>
  );
}
