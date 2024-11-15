import React, { useRef, useMemo, useState, createContext } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, Line, CameraShake } from "@react-three/drei";
import { random } from "maath";

const ThunderStorm = (props) => {
  const rainRef = useRef();
  const shake = useRef();
  const light = useRef();

  const texture = useLoader(THREE.TextureLoader, "/drop.png"); // Use a circular texture image

  const [strike, setStrike] = useState(false);

  const [flash] = useState(
    () =>
      new random.FlashGen({
        count: 10,
        minDuration: 200,
        maxDuration: 200,
        minInterval: 5000,
        maxInterval: 5000,
        nextBurstTime: 2,
        nextFlashEndTime: 2,
      })
  );

  const context = createContext();

  const rainPositions = useMemo(() => {
    const positions = [];
    const count = 10000; // Number of raindrops

    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 14, // X position
        Math.random() * 100, // Y position (above the scene initially)
        (Math.random() - 0.5) * 14 // Z position
      );
    }
    return new Float32Array(positions);
  }, []);

  const lastTriggerTime = useRef(0);
  const newAudio = new Audio(`/thunder.mp3`);

  useFrame((state, delta) => {
   
    const impulse = flash.update(state.clock.elapsedTime, delta);
    const now = state.clock.elapsedTime;

    //   light.current.intensity = impulse * 200;
    // // console.log("impulse", delta);
    // if (impulse > 0) {
    //   setStrike(true);
    //   console.log("impulse", impulse,"delta",delta,"now",now);
    // } else {
    //   setStrike(false);
    // }

    if (impulse > 0 && now - lastTriggerTime.current > 5) {
      if(props.sound){
      newAudio.play();
      }
      //   newAudio.loop = true;
      // Ensure at least 5 seconds have passed since the last trigger
      light.current.intensity = impulse * 200;
      lastTriggerTime.current = now; // Update the last trigger time
      setStrike(true);

      // Optionally reset `strike` after the flash ends
      setTimeout(() => {
        setStrike(false);
        light.current.intensity = 0;
      }, flash.maxDuration);
    }

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

  function Strike() {
    const points = useMemo(() => {
      const randX = Math.random() * 10 - 5;
      const randY = Math.random() * 10 - 5;
      const randX2 = Math.random() * 10 - 5;
      const randY2 = Math.random() * 10 - 5;
      const mainLineStart = new THREE.Vector3(randX, 5, randY); // Start point of the main line
      const mainLineEnd = new THREE.Vector3(randX2, -4, randY2); // End point of the main line

      const mainLine = new THREE.LineCurve3(mainLineStart, mainLineEnd);
      const segments = new THREE.CurvePath();
      const segmentCount = 10;
      for (let i = 1; i < segmentCount; i++) {
        const t = i / segmentCount;
        const point = mainLine.getPoint(t);

        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        );
        const nextPoint = point.clone().add(offset);

        segments.add(new THREE.LineCurve3(point, nextPoint));
      }

      return segments.getPoints(100);
    }, []);

    return <Line worldUnits lineWidth={0.03} points={points} color="#f7f7d7" />;
  }

  return (
    <>
      <Environment preset="night" />
      <fog attach="fog" color={"#98999c"} args={["#9fa2a6", -6, 25]} />
      <color attach="background" args={["#6e727a"]} />
      <ambientLight intensity={0} />

      {/* <directionalLight
        // ref={dirRef}
        castShadow
        position={[5, 5, 5]}
        intensity={4}
        // color={"#fae673"}
        color={"#9fa2a6"}
        shadow-normalBias={0.1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.001}
        shadow-camera-far={10000}
        // shadow-camera-top={1000}
        // shadow-camera-bottom={-1000}
        // shadow-camera-left={-1000}
        // shadow-camera-right={1000}
      /> */}

      <hemisphereLight
        // ref={hemRef}
        position={[0, 0, 0]}
        groundColor={new THREE.Color("#646466")}
        color={new THREE.Color().setHSL(0.6, 1, 0.6)}
        intensity={1.55}
      />

      {strike && (
        <>
          <Strike />
          <Strike />
        </>
      )}

      {/* <context.Provider value={shake}>
        <CameraShake
          ref={shake}
          decay
          decayRate={0.95}
          maxYaw={0.05}
          maxPitch={0.01}
          yawFrequency={4}
          pitchFrequency={2}
          rollFrequency={2}
          intensity={0}
        />

      </context.Provider> */}
      <pointLight
        position={[0, 5, 0]}
        intensity={0}
        ref={light}
        color="white"
      />

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
          size={0.2} // Size of each raindrop
          transparent
          opacity={0.7}
          alphaTest={0.5}
        />
      </points>
    </>
  );
};

export default ThunderStorm;
