import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { useLoadedModel, useUploadStore } from "../../model";
import { useNavigate } from "react-router-dom";

export function LoadedGltf() {
  const navigator = useNavigate();
  const {file} = useLoadedModel();
  const { scene } = useThree();
  const fileReader = new FileReader();
  console.log(file);

  fileReader.onload = (event) => {
    const contents = event.target.result;
    const loader = new GLTFLoader();
    try {
      loader.parse(contents, "", (gltf) => {
        const object = gltf.scene;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
      });
    } catch (e) {
      console.error("gltf load error : ", e);
      alert("error on loading model. try again")
      navigator('/');
    }
  };
  fileReader.readAsArrayBuffer(file);
}
