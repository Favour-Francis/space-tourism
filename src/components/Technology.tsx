import "./App.css";

import launchImgP from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launchImgL from "../assets/technology/image-launch-vehicle-landscape.jpg";

export default function Technology() {
  return (
    <div className="technology-container ">
      <main className="flex-1">
        <h1 className="lg:pr-150 mt-15 text-center lg:mb-0 mb-10 tracking-widest text-3xl">
          <span className=" text-gray-600 font-bold"> 03 </span> SPACE LAUNCH
          101
        </h1>
        <div className="w-full flex flex-col lg:px-0 px:5 lg:flex-row-reverse">
          <img
            className="h-100 lg:w-[50%] lg:block hidden"
            src={launchImgP}
            alt="launch"
          />
          <img className="lg:hidden cover" src={launchImgL} alt="launch" />

          <div className="lg:w-full flex flex-col lg:justify-end justify-center items-center">
            <div className="w-full lg:flex justify-end gap-8 *:my-10">
              <div className="image lg:grid flex justify-center gap-5">
                <div className="bg-gray-950 size-16 rounded-full text-3xl flex justify-center items-center">
                  1
                </div>
                <div className="bg-gray-950 size-16 rounded-full text-3xl flex justify-center items-center">
                  2
                </div>
                <div className="bg-gray-950 size-16 rounded-full text-3xl flex justify-center items-center">
                  3
                </div>
              </div>
              <div className="write-up lg:w-[70%] lg:text-left text-center w-screen">
                <h1 className="text-md font-light">THE TERMINOLOGY....</h1>
                <span className="text-5xl  font-light tracking-wider">
                  LAUNCH VEHICLE
                </span>
                <p className="sm:w-120 w-115 text-xl mt-5">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the the launch pad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
