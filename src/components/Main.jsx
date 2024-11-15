import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
// import Scene from './Scene'
import Loading from "./Loading";
import { MdSunny, MdFoggy } from "react-icons/md";
import { IoMoon, IoRainySharp, IoThunderstorm } from "react-icons/io5";
import { BsCloudSnowFill } from "react-icons/bs";
import { WiSmog } from "react-icons/wi";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
const Scene = React.lazy(() => import("./Scene"));

const Main = () => {
  const [num, setNum] = useState(1);
  const [sound, setSound] = useState(true);
  const currentAudio = useRef(null);

  useEffect(() => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
      // alert('stop')
    }
    console.log("currentAudio", currentAudio);
    // for(let i=0;i<100;i++){
    // }

    const newAudio = new Audio(`/audio${num}.mp3`);
    currentAudio.current = newAudio;
    if (sound) {
      newAudio.play();
      newAudio.loop = true;
    }
  }, [num]);

  useEffect(() => {
    if (sound) {
      currentAudio.current.play();
      currentAudio.current.loop = true;
    } else {
      currentAudio.current.pause();
    }
  }, [sound]);

  return (
    <div className="w-[100%] h-[100%] bg-zinc-800 grid place-items-center">
      <div className="flex items-start flex-wrap absolute bottom-4 left-4 z-[100]">
        <div
          onClick={() => setNum(1)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 1 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <MdSunny className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Sunny</p>
        </div>

        <div
          onClick={() => setNum(2)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 2 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <MdFoggy className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Fog</p>
        </div>

        <div
          onClick={() => setNum(3)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 3 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <IoRainySharp className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Rain</p>
        </div>

        <div
          onClick={() => setNum(4)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 4 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <IoThunderstorm className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Thunder</p>
          <p className="text-center text-white">storm</p>
        </div>

        <div
          onClick={() => setNum(5)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 5 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <BsCloudSnowFill className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Snow</p>
          <p className="text-center text-white">fall</p>
        </div>

        <div
          onClick={() => setNum(6)}
          className={`grid mr-4 place-items-center cursor-pointer text-zinc-500 ${
            num === 6 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <WiSmog className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Smog</p>
        </div>

        <div
          onClick={() => setNum(7)}
          className={`grid place-items-center cursor-pointer text-zinc-500 ${
            num === 7 ? "opacity-[1]" : "opacity-[.5]"
          }`}
        >
          <IoMoon className="text-5xl bg-white rounded-full p-2" />
          <p className="text-center text-white">Night</p>
        </div>
      </div>

      <div className="absolute top-4 left-4 z-[100] text-zinc-500">
        {sound ? (
          <FaVolumeHigh
            onClick={() => setSound(false)}
            className="text-5xl bg-white rounded-full p-2 cursor-pointer"
          />
        ) : (
          <FaVolumeXmark
            onClick={() => setSound(true)}
            className="text-5xl bg-white rounded-full p-2 cursor-pointer"
          />
        )}
      </div>

      <Suspense fallback={<Loading />}>
        <Canvas shadows={true}>
          <Scene num={num} sound={sound} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Main;
