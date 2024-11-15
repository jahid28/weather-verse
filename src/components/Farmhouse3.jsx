import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Farmhouse3(props) {
  const { nodes, materials } = useGLTF('/farm3.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[820.055, 123.525, -969.549]}
            rotation={[1.571, -1.237, Math.PI]}
            scale={[0.064, 0.064, 0.073]}>
            <group position={[-3907.946, 0.002, -796.099]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Axe001_Tool_0.geometry}
                material={materials.Tool}
                position={[0.001, 0, 0.001]}
              />
            </group>
          </group>
          <group
            position={[-580.007, -6.024, -47.357]}
            rotation={[-Math.PI / 2, 0, -2.094]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Barrel007_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0.001, 0]}
            />
          </group>
          <group
            position={[797.766, 16.452, 899.637]}
            rotation={[-Math.PI / 2, 0, -2.793]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Barrel010_Tool_0.geometry}
              material={materials.Tool}
              position={[-2106.751, -15648.319, -240.873]}
            />
          </group>
          <group
            position={[-655.006, 73.502, -62.73]}
            rotation={[-Math.PI / 2, 0, Math.PI / 4]}
            scale={0.1}>
            <group position={[0, 0, -775.88]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BarrelLid_Tool_0.geometry}
                material={materials.Tool}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-580.007, 70.589, -47.357]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BarrelLid006_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0, -775.88]}
            />
          </group>
          <group
            position={[662.357, 21.522, 706.262]}
            rotation={[-Math.PI / 2, 0, 2.966]}
            scale={0.074}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brick20_Wall_0.geometry}
              material={materials.Wall}
              position={[822.616, -4648.642, -114.989]}
            />
          </group>
          <group
            position={[277.368, 61.688, 507.834]}
            rotation={[-Math.PI / 2, 0, 1.484]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bucket001_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, -0.001, 0]}
            />
          </group>
          <group position={[-500.269, 0, -1053.662]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
            <group position={[-632.419, 1139.977, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Farm_Wall_0.geometry}
                material={materials.Wall}
                position={[0.001, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-639.53, 390.626, -33.973]}
            rotation={[0, 0.698, -0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.501]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag01_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-543.55, 375.966, -111.6]}
            rotation={[0, 0.698, 0.087]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag02_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[977.652, 423.428, 222.844]}
            rotation={[Math.PI, 0.96, -3.054]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag022_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[230.97, 214.686, 454.854]}
            rotation={[0, 1.484, 0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag023_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[919.311, 415.823, 140.108]}
            rotation={[Math.PI, 0.96, -3.054]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag023_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0.001]}
              />
            </group>
          </group>
          <group
            position={[236.235, 231.56, 370.674]}
            rotation={[0, 1.484, 0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag024_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[870.34, 418.409, 71.014]}
            rotation={[Math.PI, 0.96, -2.967]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag024_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[240.981, 249.062, 286.107]}
            rotation={[0, 1.484, 0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag025_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[822.403, 430.918, 3.644]}
            rotation={[Math.PI, 0.96, -2.967]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag025_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0.001, -0.001]}
              />
            </group>
          </group>
          <group
            position={[245.068, 267.376, 203.132]}
            rotation={[0, 1.484, 0.349]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag026_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[775.855, 450.758, -61.577]}
            rotation={[Math.PI, 0.96, -2.967]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.717, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag026_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[248.489, 287.179, 121.931]}
            rotation={[0, 1.484, 0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag027_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[731.537, 475.841, -123.555]}
            rotation={[Math.PI, 0.96, -2.88]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag027_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[251.245, 309.286, 42.776]}
            rotation={[0, 1.484, 0.349]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag028_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[688.793, 505.245, -183.29]}
            rotation={[Math.PI, 0.96, -2.88]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag028_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[253.327, 334.132, -32.598]}
            rotation={[0, 1.484, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag029_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[648.416, 537.125, -239.735]}
            rotation={[Math.PI, 0.96, -2.793]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag029_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[-0.001, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-440.801, 382.317, -195.892]}
            rotation={[0, 0.698, 0.175]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag03_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[254.827, 362.752, -104.599]}
            rotation={[0, 1.484, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag030_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[609.019, 571.437, -294.878]}
            rotation={[Math.PI, 0.96, -2.705]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag030_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0.001]}
              />
            </group>
          </group>
          <group
            position={[255.828, 395.001, -172.192]}
            rotation={[0, 1.484, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag031_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[570.95, 606.975, -348.273]}
            rotation={[Math.PI, 0.96, -2.793]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.716, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag031_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[256.464, 429.852, -235.807]}
            rotation={[0, 1.484, 0.611]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag032_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[533.974, 643.158, -400.271]}
            rotation={[Math.PI, 0.96, -2.705]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag032_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[256.863, 467.089, -295.843]}
            rotation={[0, 1.484, 0.611]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag033_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[-0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[497.809, 679.621, -451.285]}
            rotation={[Math.PI, 0.96, -2.705]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag033_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.489, -175.717, -0.501]}
            />
          </group>
          <group
            position={[257.147, 505.135, -350.834]}
            rotation={[0, 1.484, 0.611]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag034_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[-0.001, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[462.606, 715.697, -501.108]}
            rotation={[Math.PI, 0.96, -2.705]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag034_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[-0.001, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[257.448, 545.202, -403.483]}
            rotation={[0, 1.484, 0.698]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.717, -0.501]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag035_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[427.107, 752.277, -551.53]}
            rotation={[Math.PI, 0.96, -2.705]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.718, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag035_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[-0.001, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[257.862, 586.144, -453.026]}
            rotation={[0, 1.484, 0.611]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag036_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[391.709, 788.624, -601.997]}
            rotation={[Math.PI, 0.96, -2.618]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag036_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0.001, -0.001]}
              />
            </group>
          </group>
          <group
            position={[258.484, 628.129, -500.432]}
            rotation={[0, 1.484, 0.698]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag037_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.488, -175.717, -0.5]}
            />
          </group>
          <group
            position={[356.277, 824.605, -652.703]}
            rotation={[Math.PI, 0.96, -2.618]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.719, -0.501]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag037_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[259.371, 670.146, -545.249]}
            rotation={[0, 1.484, Math.PI / 4]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag038_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.487, -175.717, -0.5]}
            />
          </group>
          <group
            position={[320.758, 860.043, -703.728]}
            rotation={[Math.PI, 0.96, -2.618]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.718, -0.501]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag038_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[260.585, 712.488, -588.437]}
            rotation={[0, 1.484, Math.PI / 4]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag039_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.487, -175.718, -0.5]}
            />
          </group>
          <group
            position={[-333.672, 408.052, -284.602]}
            rotation={[0, 0.698, 0.175]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag04_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[262.191, 755.564, -630.881]}
            rotation={[0, 1.484, Math.PI / 4]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.486, -175.716, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag040_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[264.278, 800.016, -673.585]}
            rotation={[0, 1.484, Math.PI / 4]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag041_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[266.875, 845.155, -716.227]}
            rotation={[0, 1.484, Math.PI / 4]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag042_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-237.347, 452.49, -364.625]}
            rotation={[0, 0.698, Math.PI / 9]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag05_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[-155.204, 499.55, -432.727]}
            rotation={[0, 0.698, Math.PI / 9]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag06_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[3.095, 622.548, -562.618]}
            rotation={[0, 0.698, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.717, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag07_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-79.37, 553.804, -495.246]}
            rotation={[0, 0.698, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag08_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.488, -175.718, -0.499]}
            />
          </group>
          <group
            position={[87.855, 701.523, -630.968]}
            rotation={[0, 0.698, Math.PI / 6]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.486, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag09_Material_#56_0'].geometry}
                material={materials.Material_56}
                position={[0.001, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[177.152, 791.294, -701.76]}
            rotation={[0, 0.698, Math.PI / 6]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag10_Material_#56_0'].geometry}
              material={materials.Material_56}
              position={[-17.486, -175.717, -0.5]}
            />
          </group>
          <group
            position={[-696.634, 405.938, 10.395]}
            rotation={[0, 0.698, -0.175]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag11_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[-593.187, 380.419, -71.298]}
            rotation={[0, 0.698, -0.087]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag12_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.488, -175.718, -0.501]}
            />
          </group>
          <group
            position={[-496.85, 376.109, -149.784]}
            rotation={[0, 0.698, 0.087]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.719, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag13_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, -0.001]}
              />
            </group>
          </group>
          <group
            position={[-388.743, 390.164, -238.927]}
            rotation={[0, 0.698, 0.175]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag14_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.487, -175.717, -0.5]}
            />
          </group>
          <group
            position={[-285.883, 431.225, -324.301]}
            rotation={[0, 0.698, 0.262]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.489, -175.717, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag15_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-194.435, 475.432, -400.236]}
            rotation={[0, 0.698, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag16_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.488, -175.718, -0.5]}
            />
          </group>
          <group
            position={[-115.293, 526.922, -465.686]}
            rotation={[0, 0.698, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['flag17_Material_#57_0'].geometry}
              material={materials.Material_57}
              position={[-17.488, -175.717, -0.5]}
            />
          </group>
          <group
            position={[-38.76, 586.513, -528.518]}
            rotation={[0, 0.698, 0.436]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.488, -175.718, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag18_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[39.008, 655.116, -591.702]}
            rotation={[0, 0.698, Math.PI / 6]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag19_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.003, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[128.18, 741.383, -663.104]}
            rotation={[0, 0.698, Math.PI / 6]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.487, -175.718, -0.499]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag20_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.001, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[215.502, 831.277, -731.728]}
            rotation={[0, 0.698, Math.PI / 6]}
            scale={[0.103, 0.1, 0.103]}>
            <group position={[-17.486, -175.718, -0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['flag21_Material_#57_0'].geometry}
                material={materials.Material_57}
                position={[0.002, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[62.563, 0, -51.56]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.1, 0.1, 0.121]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_Floor_0.geometry}
              material={materials.Floor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Floor_Material_#102_0'].geometry}
              material={materials.Material_102}
            />
          </group>
          <group
            position={[375.618, 24.026, 508.284]}
            rotation={[-1.862, -0.263, 0.745]}
            scale={0.051}>
            <group position={[-853.987, -0.165, 102.331]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hammer_Tool_0.geometry}
                material={materials.Tool}
                position={[0.001, -0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-114.6, 116.921, -1050.177]}
            rotation={[-1.548, -0.024, 2.825]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Bale004_Hay_0.geometry}
              material={materials.material}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-112.201, 162.08, -1050.177]}
            rotation={[-1.588, -0.022, -2.849]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Bale005_Hay_0.geometry}
              material={materials.material}
              position={[0, -0.002, 0]}
            />
          </group>
          <group
            position={[-513.75, -2.477, 549.471]}
            rotation={[-1.55, -0.026, 2.738]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Bale008_Hay_0.geometry}
              material={materials.material}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[-547.654, 39.76, 554.907]}
            rotation={[-1.545, 0.021, -1.975]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Bale009_Hay_0.geometry}
              material={materials.material}
              position={[-0.002, 0.001, 0]}
            />
          </group>
          <group
            position={[-637.611, 59.53, -329.965]}
            rotation={[-1.481, 0.127, -0.334]}
            scale={[0.09, 0.09, 0.168]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Pile_Hay_0.geometry}
              material={materials.material}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[797.766, 79.618, 899.637]}
            rotation={[-1.544, -0.01, -0.259]}
            scale={[0.032, 0.032, 0.042]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hay_Pile001_Hay_0.geometry}
              material={materials.material}
              position={[-22529.004, 43844.75, -1458.104]}
            />
          </group>
          <group position={[-689.992, 111.352, -790.172]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hook01_Wall_0.geometry}
              material={materials.Wall}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[-833.546, 100.533, 306.842]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.1, 0.061, 0.105]}>
            <group position={[-13.634, -52.739, -955.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House_House_0.geometry}
                material={materials.House}
                position={[0.662, 0, 0]}
              />
            </group>
          </group>
          <group position={[633.271, -2.606, -1232.08]} rotation={[0, 0.285, 2.007]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log00_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0.001, -0.002]}
            />
          </group>
          <group position={[663.825, -2.606, -1239.697]} rotation={[0, 0.285, 0.873]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log018_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0.001, 0]}
            />
          </group>
          <group
            position={[694.986, -2.606, -1247.466]}
            rotation={[0, 0.285, -Math.PI / 4]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log019_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0, -0.002]}
            />
          </group>
          <group position={[724.274, -2.606, -1254.768]} rotation={[0, 0.285, 2.356]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log020_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, 0.002, -0.001]}
            />
          </group>
          <group position={[753.784, -2.606, -1262.125]} rotation={[0, 0.285, -2.705]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log021_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, 0, 0]}
            />
          </group>
          <group position={[784.653, -2.606, -1269.821]} rotation={[0, 0.285, 0.262]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log022_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0, -0.001]}
            />
          </group>
          <group position={[648.406, 25.297, -1235.853]} rotation={[0, 0.285, -0.698]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log023_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, 0, 0.001]}
            />
          </group>
          <group position={[679.567, 25.297, -1243.622]} rotation={[0, 0.285, -2.356]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log024_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[708.855, 25.297, -1250.924]}
            rotation={[0, 0.285, Math.PI / 4]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log025_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, -0.001, 0.002]}
            />
          </group>
          <group position={[738.365, 25.297, -1258.281]} rotation={[0, 0.285, 2.007]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log026_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0, 0.001]}
            />
          </group>
          <group position={[769.234, 25.297, -1265.977]} rotation={[0, 0.285, -1.309]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log027_Tool_0.geometry}
              material={materials.Tool}
              position={[0, -0.002, 0.001]}
            />
          </group>
          <group position={[663.918, 52.823, -1239.72]} rotation={[0, 0.285, 2.356]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log028_Tool_0.geometry}
              material={materials.Tool}
              position={[0, -0.001, 0]}
            />
          </group>
          <group
            position={[693.206, 52.823, -1247.022]}
            rotation={[0, 0.285, -Math.PI / 4]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log029_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, 0, -0.001]}
            />
          </group>
          <group position={[722.716, 52.823, -1254.379]} rotation={[0, 0.285, 0.436]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log030_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0, -0.001]}
            />
          </group>
          <group position={[753.585, 52.823, -1262.075]} rotation={[0, 0.285, -2.88]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log031_Tool_0.geometry}
              material={materials.Tool}
              position={[-0.001, 0, -0.001]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log031_Tool_0001.geometry}
              material={materials.Tool}
              position={[-133.255, 535.592, 6782.897]}
              rotation={[0.641, 1.15, -0.424]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log031_Tool_0002.geometry}
              material={materials.Tool}
              position={[-367.251, 571.321, 7083.933]}
              rotation={[0.641, 1.15, -0.424]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log031_Tool_0003.geometry}
              material={materials.Tool}
              position={[-414.2, 565.644, 7490.094]}
              rotation={[0.641, 1.15, -0.424]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log031_Tool_0004.geometry}
              material={materials.Tool}
              position={[100.796, 472.878, 6432.172]}
              rotation={[0.641, 1.15, -0.424]}
            />
          </group>
          <group position={[677.44, 79.709, -1243.091]} rotation={[0, 0.285, -2.356]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log032_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0, 0.001]}
            />
          </group>
          <group position={[706.95, 79.709, -1250.449]} rotation={[0, 0.285, -1.134]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log033_Tool_0.geometry}
              material={materials.Tool}
              position={[0.001, 0.001, -0.001]}
            />
          </group>
          <group position={[737.819, 79.709, -1258.145]} rotation={[0, 0.285, 1.833]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Log034_Tool_0.geometry}
              material={materials.Tool}
              position={[0, 0, 0.001]}
            />
          </group>
          <group position={[635.234, 67.318, 741.492]} rotation={[0, 0.983, 1.396]} scale={0.036}>
            <group position={[0, 0, -610.346]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logsmall00_Tool_0.geometry}
                material={materials.Tool}
                position={[1147.223, -8246.282, -5546.068]}
              />
            </group>
          </group>
          <group
            position={[629.288, 62.474, 750.413]}
            rotation={[0, 0.983, Math.PI / 9]}
            scale={0.036}>
            <group position={[0.002, 0, -610.344]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logsmall008_Tool_0.geometry}
                material={materials.Tool}
                position={[7715.097, -3129.616, -5546.074]}
              />
            </group>
          </group>
          <group position={[623.22, 57.903, 759.515]} rotation={[0, 0.983, 1.833]} scale={0.036}>
            <group position={[0, 0, -610.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logsmall009_Tool_0.geometry}
                material={materials.Tool}
                position={[-2445.289, -7958.507, -5546.069]}
              />
            </group>
          </group>
          <group
            position={[372.666, 9.198, 261.996]}
            rotation={[-3.139, 0.416, -1.542]}
            scale={0.036}>
            <group position={[0, 0.001, -610.346]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.logsmall010_Tool_0.geometry}
                material={materials.Tool}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group position={[423.428, 9.726, 254.861]} rotation={[0, 0.983, 1.396]} scale={0.036}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.logsmall012_Tool_0.geometry}
              material={materials.Tool}
              position={[0, -0.001, -610.347]}
            />
          </group>
          <group position={[-623.92, 109.82, 260.792]} rotation={[0, Math.PI / 2, 0]} scale={0.053}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Pentacle_Material_#11_0'].geometry}
              material={materials.Material_11}
              position={[0, 0, -0.001]}
            />
          </group>
          <group
            position={[-543.369, 268.163, -305.933]}
            rotation={[1.716, -0.542, 2.068]}
            scale={0.071}>
            <group position={[0, 0.002, 42.145]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pitchfork_Tool_0.geometry}
                material={materials.Tool}
                position={[-0.001, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-833.802, 342.198, 306.749]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.1, 0.061, 0.105]}>
            <group position={[-11.082, -54.27, -3354.926]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Roof_Thatched_0.geometry}
                material={materials.Thatched}
                position={[0, 0.001, 0]}
              />
            </group>
          </group>
          <group
            position={[-682.886, 119.637, -919.087]}
            rotation={[-Math.PI / 2, 0, Math.PI / 9]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Scarecrow001_scarecrow_0.geometry}
              material={materials.scarecrow}
              position={[0, 0, 0]}
            />
          </group>
          <group
            position={[11.333, 16.814, -784.679]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.067}>
            <group position={[0, -0.002, 42.123]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shovel005_Tool_0.geometry}
                material={materials.Tool}
                position={[0, -0.002, 0]}
              />
            </group>
          </group>
          <group
            position={[379.389, 27.48, 498.987]}
            rotation={[-1.78, 0.105, -3.037]}
            scale={0.068}>
            <group position={[-251.146, 0.002, 42.145]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sickle_Tool_0.geometry}
                material={materials.Tool}
                position={[0, 0, 0]}
              />
            </group>
          </group>
          <group
            position={[-532.32, 58.341, -299.623]}
            rotation={[0.055, -0.27, -0.204]}
            scale={[0.092, 0.092, 0.087]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wagon_Tool_0.geometry}
              material={materials.Tool}
              position={[-1127.675, -306.789, 990.14]}
            />
          </group>
          <group
            position={[272.097, 8.918, 510.284]}
            rotation={[-Math.PI / 2, 0, 1.484]}
            scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['wellwater_Material_#12_0'].geometry}
              material={materials.Material_12}
              position={[-0.001, -0.001, 0]}
            />
          </group>
          <group position={[607.634, 31.116, 785.047]} rotation={[0, 1.005, 0.217]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.WheelBarrow_Tool_0.geometry}
              material={materials.Tool}
              position={[2912.161, -752.328, -1907.672]}
            />
          </group>
          <group
            position={[270.522, 903.736, -807.214]}
            rotation={[-0.089, -0.005, -2.317]}
            scale={0.1}>
            <group position={[-0.343, 0.976, -202.452]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.WindmillPropellor_House_0.geometry}
                material={materials.House}
                position={[0.001, 0.001, -0.002]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_Tool_0.geometry}
            material={materials.Tool}
            position={[-655.043, -3.112, -62.891]}
            rotation={[-Math.PI / 2, 0, -2.88]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel008_Tool_0.geometry}
            material={materials.Tool}
            position={[-501.787, 18.182, -35.005]}
            rotation={[Math.PI, 1.222, -1.92]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brick10_Wall_0.geometry}
            material={materials.Wall}
            position={[-543.416, -4.818, -0.11]}
            rotation={[-1.571, 0.043, 0.016]}
            scale={[0.074, 0.074, 0.038]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brick11_Wall_0.geometry}
            material={materials.Wall}
            position={[-604.114, -2.654, -0.11]}
            rotation={[-1.571, 0.043, 0.016]}
            scale={[0.074, 0.074, 0.038]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bucket007_Tool_0.geometry}
            material={materials.Tool}
            position={[378.662, 10.423, 507.834]}
            rotation={[-Math.PI / 2, 0, Math.PI / 6]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bucket008_Tool_0.geometry}
            material={materials.Tool}
            position={[-305.77, 8.833, 779.131]}
            rotation={[Math.PI / 2, 0, -0.436]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bucket009_Tool_0.geometry}
            material={materials.Tool}
            position={[-249.91, -3.356, 709.333]}
            rotation={[-Math.PI / 2, 0, Math.PI / 6]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hay_Bale006_Hay_0.geometry}
            material={materials.material}
            position={[-156.318, 116.921, -1195.954]}
            rotation={[-1.504, -0.006, 1.529]}
            scale={[0.286, 0.218, 0.287]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hay_Bale007_Hay_0.geometry}
            material={materials.material}
            position={[-579.399, -2.477, 549.471]}
            rotation={[-1.54, -0.012, -3.022]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hay_Bale03_Hay_0.geometry}
            material={materials.material}
            position={[-164.602, 149.575, -1050.177]}
            rotation={[-1.484, -0.691, 1.745]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hook00_Wall_0.geometry}
            material={materials.Wall}
            position={[-602.392, 117.399, -790.172]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hook018_Wall_0.geometry}
            material={materials.Wall}
            position={[16.786, 111.352, -790.172]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hook019_Wall_0.geometry}
            material={materials.Wall}
            position={[5.598, 111.352, -790.172]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hook02_Wall_0.geometry}
            material={materials.Wall}
            position={[-613.58, 117.399, -790.172]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hook03_Wall_0.geometry}
            material={materials.Wall}
            position={[-701.18, 111.352, -790.172]}
            scale={0.1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane001_Material_#12_0'].geometry}
            material={materials.Material_12}
            position={[-359.677, -10.541, 898.122]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.1, 0.1, 0.061]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Plane011_Material_#108_0'].geometry}
            material={materials.Material_108}
            position={[-428.701, 217.567, -1222.733]}
            rotation={[-Math.PI, 1.309, -Math.PI]}
            scale={1.813}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wall_Wall_0.geometry}
            material={materials.Wall}
            position={[300.358, 0, -190.362]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.096, 0.1, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WallRoof_Thatched_0.geometry}
            material={materials.Thatched}
            position={[300.358, 0, -190.362]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.096, 0.1, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Well_House_0.geometry}
            material={materials.House}
            position={[276.711, 63.593, 510.284]}
            rotation={[-Math.PI / 2, 0, 1.484]}
            scale={0.093}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Windmill_House_0.geometry}
            material={materials.House}
            position={[270.503, 0, -1076.189]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.1}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[-3.253, 0.605, 2.315]}
        rotation={[0, 0, -1.562]}
        scale={0.247}
      />
    </group>
  )
}

useGLTF.preload('/farm3.glb')