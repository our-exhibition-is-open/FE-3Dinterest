import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useUploadImageStore } from "../../model/userStore";

export function Thumbnail() {
    const { setImage } = useUploadImageStore();
    const {gl} = useThree();
    useEffect(() => {
        const image = gl.domElement.toDataURL("image/jpeg");
        setImage(image);
        sessionStorage.setItem("uploadImage", image);
    }, [])
}