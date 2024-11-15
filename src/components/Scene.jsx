import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  lazy,
  useMemo,
} from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  SoftShadows,
  OrbitControls,
  ContactShadows,
  PerspectiveCamera,
  Environment,
  Instance,
  Instances,
} from "@react-three/drei";
// import {
//   EffectComposer,
//   HueSaturation,
//   BrightnessContrast,
//   Bloom,
// } from "@react-three/postprocessing";
import Rain from "./Rain";
import { easing } from "maath";
import Sunny from "./Sunny";
import Night from "./Night";
import Snowfall from "./Snowfall";
// import * as THREE from "three";
import Fog from "./Fog";
import Smog from "./Smog";
// import Loading from "./Loading";
import { Farmhouse3 } from "./Farmhouse3";
import ThunderStorm from "./ThunderStorm";
const Scene = (props) => {
  const cameraRef = useRef();

  // const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  //   <Instances position={[0, 0, 0]}>
  //     <planeGeometry args={[lineWidth, height]} />
  //     <meshBasicMaterial color="#999" />
  //     {Array.from({ length: number }, (_, y) =>
  //       Array.from({ length: number }, (_, x) => (
  //         <group
  //           key={x + ":" + y}
  //           position={[
  //             x * 2 - Math.floor(number / 2) * 2,
  //             -0.01,
  //             y * 2 - Math.floor(number / 2) * 2,
  //           ]}
  //         >
  //           <Instance rotation={[-Math.PI / 2, 0, 0]} />
  //           <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
  //         </group>
  //       ))
  //     )}
  //     <gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} />
  //   </Instances>
  // );

  function Rig() {
    useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [3 + state.pointer.x * 0.5, 2 + state.pointer.y * 0.5, 6],
        0.4,
        delta
      );
      // easing.damp3(state.camera.position, [5 + state.pointer.x, 5 +Math.atan2(state.pointer.x, state.pointer.y) * 2, 15], 0.4, delta)
      state.camera.lookAt(0, 0, 0);
    });
  }
  // const texture = useLoader(THREE.TextureLoader, "/white-cir.webp"); // Use a circular texture image

  return (
    <>
    {/* <axesHelper args={[50]} /> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000000}
        position={[3, 2, 6]}
        makeDefault
      />

      <Rig />

      {/* <OrbitControls
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={0}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI / 2}
        makeDefault
        maxDistance={30}
        minDistance={0.1}
        enableDamping
        enableZoom
        //   minAzimuthAngle={0}
        //   maxAzimuthAngle={Math.PI / 2+.3}
      /> */}

      {/* <Farmhouse /> */}
      {/* <Farmhouse2 /> */}
      <Farmhouse3/>

      {props.num === 1 && <Sunny />}
      {props.num === 2 && <Fog />}
      {props.num === 3 && <Rain />}
      {props.num === 4 && <ThunderStorm sound={props.sound}/>}
      {props.num === 5 && <Snowfall />}
      {props.num === 6 && <Smog />}
      {props.num === 7 && <Night />}
    </>
  );
};

export default Scene;
