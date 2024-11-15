import React, { useRef,useEffect } from "react";
import { useGLTF, Stars, Environment, Trail } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Night = () => {

  const { scene } = useThree();

  useEffect(() => {
    // Disable fog by setting it to null
    scene.fog = null;
  }, [scene]);

  return (
    <>
      <pointLight position={[5, 5, 5]} intensity={20} color="white" />

      <Environment preset="night" />
      <color attach="background" args={["#1d2330"]} />
      <ambientLight intensity={0} />

      <Stars
        radius={200}
        speed={4}
        count={800}
        factor={10}
        saturation={0}
        fade
      />
    </>
  );
};

export default Night;
