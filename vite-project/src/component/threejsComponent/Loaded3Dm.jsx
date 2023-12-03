import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { useUploadStore } from "../../model";

export function Loaded3Dm() {
  const { file } = useUploadStore();
  const { scene } = useThree();
  const fileReader = new FileReader();

  fileReader.onload = (event) => {
    const contents = event.target.result;
    const loader = new Rhino3dmLoader();
    loader.setLibraryPath("https://unpkg.com/rhino3dm@8.0.0-beta2/");
    loader.parse(contents, (object) => {
      object.castShadow = true;
      object.receiveShadow = true;
      object.rotateX(-1.5);
      object.scale.set(0.3, 0.3, 0.3);
      scene.add(object);
    });
  };
  fileReader.readAsArrayBuffer(file);
}
