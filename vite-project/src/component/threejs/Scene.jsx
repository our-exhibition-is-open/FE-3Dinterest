import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

export function Scene(props) {
  // const cameraControlRef = useRef<CameraControls | null>(null);
  const cameraControlRef = useRef(CameraControls, null);

  return (
    <Canvas color='black'>
        <CameraControls ref={cameraControlRef}/>
        <directionalLight intensity={0.4} position={[0.5,1,0]}/>
        <mesh visible posision={[0,0,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshPhongMaterial color="white" />
        </mesh>
    </Canvas>
  )
}