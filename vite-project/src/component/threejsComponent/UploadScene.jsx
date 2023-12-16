import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { CameraControls, SpotLight } from "@react-three/drei";
import { LoadedGltf } from "./LoadedGltf";
import { Loaded3Dm } from "./Loaded3Dm";
import { fileNameParser } from "../../util/uploadUtil/fileNameParser";
import { Thumbnail } from "./thumbnail";
import { useLoadedModel, useUploadStore } from "../../model";

export function UploadScene(props) {
  const {type} = useLoadedModel();
  const cameraControlRef = useRef(CameraControls, null);

  
  return (
    <>
      <Canvas
        camera={{ position: [23, 10, 25], far: 10000}}
        shadows
        style={{
          borderRadius: "26px",
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
        {type == "glb" || type =="gltf" ? (
          <LoadedGltf />
          ) : (
            <Loaded3Dm />
            )}
      <Thumbnail/>     </Canvas>
    </>
  );
}
