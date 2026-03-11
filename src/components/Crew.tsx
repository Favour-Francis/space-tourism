import "./App.css";
import TopBar from "./TopBar.tsx";
import CrewDetails from "../lib/crew.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
const crewList = CrewDetails;
import "swiper/css";
import "swiper/css/pagination";

export default function CrewPage() {
  return (
    <div className="crew-container overflow-hidden">
      <header className="w-full h-fit flex justify-between items-center sm:p-0 p-5">
        <TopBar />
      </header>
      <main className="flex-1">
        <h1 className="lg:pr-160 mt-15 text-center lg:mb-0 mb-10 tracking-widest sm:text-3xl text-2xl">
          <span className=" text-gray-600 font-bold"> 02 </span> MEET YOUR CREW
        </h1>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true, el: ".crew-pagination" }}
          autoplay
        >
          {" "}
          {crewList.map((crew) => (
            <SwiperSlide key={crew.name}>
              <div className="flex flex-col justify-center items-center lg:justify-around  lg:flex-row-reverse ">
                <div>
                  <img
                    className="sm:size-88 size-70 mb-5"
                    src={crew.image}
                    alt={crew.name}
                  />
                  <div className="crew-pagination flex justify-center gap-5">
                    <div className="crew-pagination size-8  rounded-full"></div>
                    <div className="crew-pagination size-8  rounded-full"></div>
                    <div className="crew-pagination size-8  rounded-full"></div>
                    <div className="crew-pagination size-8  rounded-full"></div>
                  </div>
                </div>

                <div className="sm:w-150 w-110 grid justify-center items-center text-center lg:mt-10 md:mt-15 sm:mt-9 mt-10">
                  <h1 className="lg:text-4xl sm:text-3xl text-xl text-gray-500 tracking-wider">
                    {crew.occupation}
                  </h1>
                  <span className="lg:text-5xl sm:text-4xl text-2xl text-gray-300 font-medium text-center">
                    {crew.name}
                  </span>
                  <p className="sm:text-[25px] text-sm w-90  text-gray-400 font-medium text-center tracking-wider mt-3">
                    {crew.bio}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}
