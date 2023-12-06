import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import axios from 'axios';
import { getModelFileApi } from "./getModelFileApi";

export function TestLoadGltf() {
  const { scene } = useThree();

  getModelFile("https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/7aadb81e-7730-4ed7-ae88-868e62ba1b37.glb").then((reponse) => {
    const modelBlob = reponse.data;
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(modelBlob);

    fileReader.onloadend = (event) => {
      const loadedContents = event.target.result;
      const loader = new GLTFLoader();
      loader.parse(loadedContents, "", (gltf) => {
        const object = gltf.scene;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
      })
    }
  })
}
