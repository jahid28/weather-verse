import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
const Rain = () => {
  const rainRef = useRef();

  const texture = useLoader(THREE.TextureLoader, "/drop.png"); // Use a circular texture image

  const rainPositions = useMemo(() => {
    const positions = [];
    const count = 5000; // Number of raindrops

    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 14, // X position
        Math.random() * 100, // Y position (above the scene initially)
        (Math.random() - 0.5) * 14 // Z position
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (rainRef.current) {
      const positions = rainRef.current.geometry.attributes.position.array;
      // const positions2 = rainRef2.current.geometry.attributes.position.array;

      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.2;

        if (positions[i] < 0) {
          positions[i] = 50;
        }
      }
      rainRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <>
      <Environment preset="city" />
      <fog attach="fog" color={'#e6e3e3'} args={['#f0f0f0', -2, 25]} />
      <color attach="background" args={["#e8faff"]} />
      <ambientLight intensity={0} />
      <points ref={rainRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={rainPositions}
            count={rainPositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={texture} // Use the circular texture image
          color="#c9dbf0" // Light blue color for raindrops
          size={0.15} // Size of each raindrop
          transparent
          opacity={0.7}
          alphaTest={0.5}
        />
      </points>
    </>
  );
};

export default Rain;
