import "./App.css";
import TopBar from "./TopBar";

export default function Home() {
  return (
    <div className="home-container overflow-hidden">
      <header className="w-full h-fit flex justify-between items-center sm:p-0 p-5">
        <TopBar />
      </header>
      <main className="lg:flex lg:flex-row lg:justify-center lg:gap-40 flex flex-col justify-center items-center mt-25 ">
        <div className="sm:w-120 w-110 flex flex-col justify-end items-center">
          <h1 className="sm:text-3xl text-2xl -mb-7 font-light text-center">
            SO, YOU WANT TO TRAVEL TO{" "}
          </h1>
          <span className="sm:text-[140px] text-[100px] font-light tracking-wider text-center">
            SPACE
          </span>
          <p className="sm:text-lg text-md w-89 text-center">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="sm:size-70 size-50 bg-white rounded-full flex justify-center items-center mt-28">
          <h1 className="text-blue-950 sm:text-3xl text-2xl">EXPLORE</h1>
        </div>
      </main>
    </div>
  );
}
