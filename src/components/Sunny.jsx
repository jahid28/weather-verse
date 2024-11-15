import React, { useEffect, useRef, useState, forwardRef } from "react";
// import { PointLight } from '@react-three/drei';
import { SpotLight, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const Sunny = () => {
  
  const { scene } = useThree();

  useEffect(() => {
    // Disable fog by setting it to null
    scene.fog = null;
  }, [scene]);

  return (
    <>
      {/* <pointLight position={[5, 5, 5]} intensity={300} color="#fcb530" /> */}
      <color attach="background" args={["#f7f4d7"]} />
      <ambientLight intensity={.5} />
      <SpotLight
        position={[4, 4, 4]}
        color={"#ffc966"}
        castShadow
        penumbra={1}
        distance={15}
        angle={0.25}
        attenuation={10}
        anglePower={2}
        intensity={2}
      />

      <directionalLight
        // ref={dirRef}
        castShadow
        position={[5, 5, 5]}
        intensity={4}
        // color={"#fae673"}
        color={"#f5d071"}
        shadow-normalBias={0.1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.001}
        shadow-camera-far={10000}
        // shadow-camera-top={1000}
        // shadow-camera-bottom={-1000}
        // shadow-camera-left={-1000}
        // shadow-camera-right={1000}
      />

      <hemisphereLight
        // ref={hemRef}
        position={[0, 0, 0]}
        groundColor={new THREE.Color("#f7e2ab")}
        color={new THREE.Color().setHSL(0.6, 1, 0.6)}
        intensity={1.55}
      />
      {/* <Environment preset="sunset" /> */}

      <mesh position={[2, 2, 2]}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color="#c49a4d" transparent={true} opacity={0.4} />
      </mesh>
      <mesh position={[2.2, 2.2, 2.2]}>
        <sphereGeometry args={[0.18]} />
        <meshBasicMaterial color="#ffc966" transparent={true} opacity={0.3} />
      </mesh>
      <mesh position={[1.8, 1.8, 1.8]}>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color="#ffc966" transparent={true} opacity={0.3} />
      </mesh>
    </>
  );
};

export default Sunny;
