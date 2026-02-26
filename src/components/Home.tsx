import "./App.css";

export default function Home() {
  return (
    <div className="home-container min-h-screen w-full text-gray-300 sm:pl-10 lg:pt-10
  bg-cover bg-center
  bg-[url('/src/assets/home/background-home-mobile.jpg')]
  sm:bg-[url('/src/assets/home/background-home-tablet.jpg')]
  lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]">
      <main className="flex-1 flex-col justify-center lg:flex-row lg:justify-around items-center">
        <div className="sm:w-120 w-110 flex flex-col justify-end items-center">
          <h1 className="text-3xl -mb-7 font-light text-center">
            SO, YOU WANT TO TRAVEL TO{" "}
          </h1>
          <span className="text-[140px] font-light tracking-wider text-center">
            SPACE
          </span>
          <p className="sm:text-lg text-xl text-center">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="size-70 bg-white rounded-full flex justify-center items-center mt-28">
          <h1 className="text-blue-950 text-3xl">EXPLORE</h1>
        </div>
      </main>
    </div>
  );
}
