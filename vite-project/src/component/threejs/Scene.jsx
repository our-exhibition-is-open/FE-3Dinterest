import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { CameraControls, SpotLight } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { LoadedGltf } from "./LoadedGltf";
import { Loaded3Dm } from "./Loaded3Dm";
import { fileNameParser } from "../../util/upload/fileNameParser";
import { Thumbnail } from "./thumbnail";
import { useUploadStore } from "../../model";

export function Scene(props) {
  const {file} = useUploadStore();
  const fileType = fileNameParser(file.name);
  const cameraControlRef = useRef(CameraControls, null);

  
  return (
    <>
      <Canvas
        camera={{ position: [23, 10, 25] }}
        shadows
        style={{
          borderRadius: 25,
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#9f9f9f",
        }}
        gl={{ preserveDrawingBuffer: true }}
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
        {fileType == "glb" ? (
          <LoadedGltf />
          ) : (
            <Loaded3Dm />
            )}
      <Thumbnail/>
      </Canvas>
    </>
  );
}
