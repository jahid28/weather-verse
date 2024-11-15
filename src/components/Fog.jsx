import React from 'react'
import { Environment } from '@react-three/drei'
const Fog = () => {
  return (
   <>
    <fog attach="fog" color={'#e6e3e3'} args={['#f0f0f0', -12, 23]} />
      <Environment preset="lobby" />
      <color attach="background" args={["#e8e8e8"]} />
      <ambientLight intensity={0} />
   </>
  )
}

export default Fog
