import "./App.css";
import TopBar from "./TopBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import TechnologyDetails from "../lib/technology";

export default function Technology() {
  return (
    <div className="technology-container overflow-hidden">
      <header className="w-full h-fit flex justify-between items-center sm:p-0 p-5">
        <TopBar />
      </header>
      <main className="flex-1">
        <h1 className="lg:pr-160 mt-15 text-center lg:mb-0 mb-10 tracking-widest sm:text-3xl text-2xl">
          <span className=" text-gray-600 font-bold"> 03 </span> SPACE LAUNCH
          101
        </h1>

        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          scrollbar={{ draggable: true }}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true, el: ".technology-pagination" }}
          autoplay
        >
          {TechnologyDetails.map((technology, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between ">
                <img
                  className="h-100 lg:w-[50%] lg:block hidden"
                  src={technology.imagePortrait}
                  alt={technology.label}
                />
                <img
                  className="lg:hidden"
                  src={technology.imageLandscape}
                  alt={technology.label}
                />

                <div className="w-full flex lg:flex-row flex-col lg:justify-center items-center lg:gap-7">
                  <div className="flex lg:grid justify-center gap-5 lg:my-0 my-12">
                    <div className="sm:size-23 size-18 sm:text-4xl text-2xl text-black bg-gray-300 p-4 rounded-full flex justify-center items-center">
                      1
                    </div>
                    <div className="sm:size-23 size-18 sm:text-4xl text-2xl bg-gray-900 p-4 rounded-full flex justify-center items-center">
                      2
                    </div>
                    <div className="sm:size-23 size-18 sm:text-4xl text-2xl bg-gray-900 p-4 rounded-full flex justify-center items-center">
                      3
                    </div>
                  </div>
                  <div className="write-up lg:text-left grid justify-center items-center text-center">
                    <h1 className="text-md font-light">THE TERMINOLOGY....</h1>
                    <span className="sm:text-5xl text-4xl  font-light tracking-wider">
                      {technology.label}
                    </span>
                    <p className="sm:w-120 w-90 sm:text-xl text-md my-3">
                      {technology.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
