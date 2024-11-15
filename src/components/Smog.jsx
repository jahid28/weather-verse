import React from "react";

const Smog = () => {
  return (
    <>
      <fog attach="fog" color={"#b5b3b3"} args={["#f0f0f0", -8, 23]} />
      <ambientLight intensity={0.2} />
      <color attach="background" args={["#9e9b9b"]} />
    </>
  );
};

export default Smog;
