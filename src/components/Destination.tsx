import "./App.css";
import { useState } from "react";
import Tabs from "../lib/tabs";
import TopBar from "./TopBar";
export default function Destination() {
  const [selectedTab, setSelectedTab] = useState(Tabs[1]);

  return (
    <div className="destination-container overflow-hidden">
      <header className="w-full h-fit flex justify-between items-center sm:p-0 p-5">
        <TopBar />
      </header>
      <main className="flex-1">
        <h1 className="lg:pr-150 mt-15 text-center mb-8 lg:tracking-wide sm:text-3xl text-2xl ">
          <span className=" text-gray-600 font-bold"> 01 </span> PICK YOUR
          DESTINATION
        </h1>
        <div className="lg:flex lg:flex-row lg:justify-center lg:gap-30 flex flex-col justify-center items-center">
          <img
            className="lg:size-90 sm:size-80 size-70"
            src={selectedTab.image}
            alt="moon"
          />
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <nav className="flex lg:justify-start justify-center lg:gap-5 gap-10 text-lg *:cursor-pointer lg:m-0 m-5">
              <a
                onClick={() => setSelectedTab(Tabs[0])}
                className={`
                  ${selectedTab === Tabs[0] ? "border-b-2" : ""}`}
              >
                MOON
              </a>
              <a
                onClick={() => setSelectedTab(Tabs[1])}
                className={`
                  ${selectedTab === Tabs[1] ? "border-b-2" : ""}`}
              >
                MARS
              </a>
              <a
                onClick={() => setSelectedTab(Tabs[2])}
                className={`
                  ${selectedTab === Tabs[2] ? "border-b-2" : ""}`}
              >
                EUROPA
              </a>
              <a
                onClick={() => setSelectedTab(Tabs[3])}
                className={`
                  ${selectedTab === Tabs[3] ? "border-b-2" : ""}`}
              >
                TITAN
              </a>
            </nav>

            <h1 className="sm:text-8xl text-7xl my-5">{selectedTab.title}</h1>
            <p className="sm:text-[16px] text-[14px] text-gray-400 sm:w-109.5 w-90 font-medium border-b border-gray-700 pb-8 lg:text-left text-center">
              {selectedTab.description}
            </p>

            <div className="sm:w-full w-85 flex justify-between [&_p]:text-2xl font-semibold my-2">
              <div>
                <h1 className="text-xs font-light">AVG. DISTANCE</h1>
                <p>{selectedTab.distance}</p>
              </div>

              <div>
                <h1 className="text-xs font-light">EST. TRAVEL TIME</h1>
                <p>{selectedTab.time}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
