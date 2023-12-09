import React, { useRef, useState, useEffect, Suspense } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { useLoadedModel, useUploadStore } from "../../model";
import { useNavigate } from "react-router-dom";

export function Loaded3Dm() {
  const navigator = useNavigate();
  const { file } = useLoadedModel();
  const { scene } = useThree();
  const fileReader = new FileReader();
  useEffect(() => {
    fileReader.onload = (event) => {
      const contents = event.target.result;
      const loader = new Rhino3dmLoader();
      loader.setLibraryPath("https://unpkg.com/rhino3dm@8.0.0-beta2/");
      try {
        loader.parse(contents, (object) => {
          console.log("parsing 3dm file..");
          object.castShadow = true;
          object.receiveShadow = true;
          object.rotateX(-1.5);
          object.scale.set(0.3, 0.3, 0.3);
          scene.add(object);
        });
      } catch (e) {
        console.error("3dm load error : ", e);
        alert("error on loading model. try again");
        navigator("/");
      }
    };
    fileReader.readAsArrayBuffer(file);
  }, [file]);
}
