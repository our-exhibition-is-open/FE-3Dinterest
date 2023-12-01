import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";


export function Loaded3Dm({file}) {
    const { scene } = useThree();
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
        console.log(1);
        const contents = event.target.result;
        const loader = new Rhino3dmLoader();
        loader.setLibraryPath( 'https://unpkg.com/rhino3dm@8.0.0-beta2/' );
        // loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/three@0.138.2/examples/jsm/libs/rhino3dm/' );
        loader.parse(contents, (object) => {
        
        //   object.position.set(0, -1, 0);
        object.castShadow = true;
        object.receiveShadow = true;
        object.rotateX(-1.5)
        object.scale.set(0.3, 0.3, 0.3);
          scene.add(object);
        });
  
      };
      fileReader.readAsArrayBuffer(file);
  
}