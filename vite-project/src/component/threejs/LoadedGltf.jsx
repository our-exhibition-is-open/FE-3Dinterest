import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { useUploadStore } from "../../model";

export function LoadedGltf() {
  const {file} = useUploadStore();
  const { scene } = useThree();
  const fileReader = new FileReader();

  fileReader.onload = (event) => {
    console.log(1);
    const contents = event.target.result;
    const loader = new GLTFLoader();
    loader.parse(contents, "", (gltf) => {
      console.log(2);
      const object = gltf.scene;
      object.castShadow = true;
      object.receiveShadow = true;
      console.log(object);
      scene.add(object);
    });
  };
  fileReader.readAsArrayBuffer(file);
}
