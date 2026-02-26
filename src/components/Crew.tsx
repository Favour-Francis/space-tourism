import "./App.css";
import CrewDetails from "../lib/crew.ts";

export default function CrewPage() {
  const crewList = CrewDetails;

  return (
    <div className="crew-container min-h-screen w-full text-gray-300
        sm:pl-10 lg:pt-10
        bg-cover bg-center

        bg-[url('/src/assets/crew/background-crew-mobile.jpg')]
        sm:bg-[url('/src/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]">
      {crewList.map((crew, index) => (
        <main className="flex-1 flex-col justify-center items-center mt-15 lg:flex-row-reverse lg:justify-around lg:items-end">
          <div key={index}>
            <img
              className="size-88 lg:mb-8 mb-15"
              src={crew.image}
              alt="woman"
            />
            <div className=" flex justify-center gap-5 ">
              <div className="bg-gray-500 size-4 lg:size-6 rounded-full"></div>
              <div className="bg-gray-500 size-4 lg:size-6 rounded-full"></div>
              <div className="bg-gray-500 size-4 lg:size-6 rounded-full"></div>
              <div className="bg-gray-100 size-4 lg:size-6 rounded-full"></div>
            </div>
          </div>

          <div className="sm:w-150 w-110 grid justify-center items-center text-center lg:mt-10 mt-15">
            <h1 className="lg:text-[27px] text-xl text-gray-500 tracking-wider">
              {crew.occupation}
            </h1>
            <span className="text-5xl text-gray-300 font-medium text-center">
              {crew.name}
            </span>
            <p className="sm:text-[25px] text-xl  text-gray-400 font-medium text-center tracking-wider mt-5">
              {crew.bio}
            </p>
          </div>
        </main>
      ))}
    </div>
  );
}
