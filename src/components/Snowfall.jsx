import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
const Snowfall = () => {
  const rainRef = useRef();

  // const texture = useLoader(THREE.TextureLoader, "/snowflake.png"); // Use a circular texture image
  const texture = useLoader(THREE.TextureLoader, "/white-cir.webp"); // Use a circular texture image

  const rainPositions = useMemo(() => {
    const positions = [];
    const count = 2000; // Number of raindrops

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
        // Lower each raindrop's Y position to simulate falling
        positions[i] -= 0.015;
        if (i % 4 == 0) {
          positions[i - 1] -= 0.01;
          //   positions[i - 1] -= 0.01;
        }

        if (positions[i] < -2) {
          if (i % 4 == 0) {
            positions[i] = 10;
            positions[i - 1] = Math.random() * 14 + 7;
            positions[i + 1] = (Math.random() - 0.5) * 14;
          } else {
            positions[i] = 10;
            positions[i - 1] = (Math.random() - 0.5) * 14;
            positions[i + 1] = (Math.random() - 0.5) * 14;
          }
        }
      }

      rainRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <>
      <Environment preset="forest" />
      <fog attach="fog" color={"#FFFFFF"} args={["#f0f0f0", -10, 28]} />
      <color attach="background" args={["#e8e8e8"]} />
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
          color="white" // Light blue color for raindrops
          size={0.2} // Size of each raindrop
          transparent
          opacity={0.9}
          alphaTest={0.5}
        />
      </points>
    </>
  );
};

export default Snowfall;
