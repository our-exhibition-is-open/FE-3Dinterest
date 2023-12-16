import React from "react";
import { Suspense,useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { CameraControls, SpotLight } from "@react-three/drei";
import { TestLoadGltf } from "./TestLoadGltf";
export function TestPage() {
  const cameraControlRef = useRef(CameraControls, null);
  return (
     <>
      <Suspense>
      <Canvas
        camera={{ position: [23, 10, 25] }}
        shadows
        style={{
          borderRadius: 25,
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#9f9f9f",
        }}
        gl={{ preserveDrawingBuffer: true}}
        id="uploadScene"
      >
        <color attach="background" args={["white"]} />
        <CameraControls ref={cameraControlRef} />
        <directionalLight intensity={0.2} position={[0, 20, 30]} />
        <directionalLight intensity={0.2} position={[0, 20, -30]} />
        <SpotLight
          intensity={1000}
          penumbra={1}
          distance={100}
          angle={Math.PI / 3}
          position={[20, 36, 0]}
          castShadow={true}
          />
        <SpotLight
          intensity={1000}
          penumbra={1}
          distance={100}
          angle={Math.PI / 2.5}
          position={[-20, 36, 0]}
          castShadow={true}
          />
        <gridHelper args={[100, 100]} />
        <TestLoadGltf/>
      {/* <Thumbnail/> */}
      </Canvas>
      </Suspense>
      <a href="https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/7aadb81e-7730-4ed7-ae88-868e62ba1b37.glb">click me</a>
    </>
  );
}
