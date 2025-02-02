import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  lazy,
  useMemo,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
// import Scene from "./components/Scene";
import Loading from "./components/Loading";
import { MdSunny, MdFoggy } from "react-icons/md";
import { IoMoon, IoRainySharp } from "react-icons/io5";
import { BsCloudSnowFill } from "react-icons/bs";
import { FaSmog } from "react-icons/fa";
import Main from "./components/Main";
const Scene = React.lazy(() => import("./components/Scene"));

function App() {
  const [start, setStart] = useState(false);

  // function updateAnimationDuration() {
  //   const element = document.querySelectorAll(".anime");

  //   // Set the animation duration based on window width
  //   element.forEach((el) => {
  //     const newDuration = window.innerWidth < 600 ? 3 : window.innerWidth < 900 ? 5 : 7;
  //     el.style.animationDuration = `${newDuration}s`;
  //   });
  // }

  // // Initial call to set animation duration on page load
  // updateAnimationDuration();

  // // Update animation duration whenever the window is resized
  // window.addEventListener("resize", updateAnimationDuration);

  return (
    <main
      className="cont bg-zinc-800"
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* <audio autoPlay>
        <source src="/night-ambience-17064.mp3" type="audio/mp3" />
        </audio> */}

      {/* <button 
      onClick={()=>{
        // const audio = new Audio('/night-ambience-17064.mp3');
        const audio = new Audio('/light-rain-ambience-217409.mp3.crdownload');
        // const audio = new Audio('/cold-snowfall-ambience-5-minutes-sound-effect-164512.mp3');
        audio.play();
        }}
        style={{position:'absolute',top:'0',cursor:"pointer",zIndex:"10000000"}}>
        Play
        </button> */}

      {!start && (
        <div className="w-[100%] h-[100%] bg-zinc-800 overflow-hidden text-white grid place-items-center relative">
          <div className="grid place-items-center mx-4 z-[10] w-fit border-0 border-red-600">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Welcome to WeatherVerse
            </h1>
            <p className="text-lg w-full md:w-[45rem] text-center mb-10">
              Here you will find seven different types of environmental settings
              to showcase various atmospheres. Explore each setting to
              experience unique visual effects.
            </p>
            <button
              onClick={() => setStart(true)}
              className="text-2xl text-center text-white border-2 border-white hover:bg-white hover:text-zinc-800 transition-all duration-200 px-20 py-4 rounded-lg mb-8"
            >
              Enter
            </button>

            {/* <p className="text-xl mt-4 text-center">
                My Social Links :{" "}
                <a
                  className="underline"
                  href="https://linktr.ee/jahidkhan2003"
                  target="_blank"
                >
                  https://linktr.ee/jahidkhan2003
                </a>
              </p> */}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 w-[100%] top-0 bg-zinc-800 opacity-[.05] z-[9] rotate-[-10deg]">
            <IoRainySharp className="relative anime translate-x-[-120%] text-[15rem]" />
            <MdFoggy className="relative anime2 translate-x-[-120%] text-[15rem]" />
            <MdSunny className="relative anime translate-x-[-120%] text-[15rem]" />
            <IoMoon className="relative anime2 translate-x-[-120%] text-[15rem]" />
            <FaSmog className="relative anime translate-x-[-120%] text-[15rem]" />
            <BsCloudSnowFill className="relative anime2 translate-x-[-120%] text-[15rem]" />
          </div>

          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jahidkhan2003/",
                "_blank"
              );
            }}
            className="cursor-pointer z-[40] absolute bottom-2 flex items-center"
          >
            <p>Made by:</p>
            <svg
              className="w-8 h-fit ml-2"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                fill="white"
              />
              <path
                d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                fill="white"
              />
              <path
                d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      )}

      {start && <Main />}
    </main>
  );
}

export default App;
