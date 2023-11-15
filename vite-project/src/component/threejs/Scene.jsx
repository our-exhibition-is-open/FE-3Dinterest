import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CameraControls, SpotLight } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Scene(props) {
  const gltf = useLoader(GLTFLoader, "src/resource/gltf/scene.gltf");
  const cameraControlRef = useRef(CameraControls, null);

  return (
    <Canvas camera={{position: [15,10,15]}}shadows style={{ borderRadius: 25 }}>
        <color attach="background" args={["black"]}/>
        <CameraControls ref={cameraControlRef}/>
        <directionalLight intensity={0.8} position={[3,3,1]}/>
        <SpotLight intensity={1000} penumbra={0.8} distance={100} angle={Math.PI/3} position={[0,40,0]} castShadow={true}/>
          <primitive object={gltf.scene} position={[0,-1,0]} scale={[1,1,1]} castShadow={true}/>
    </Canvas>
  )
}