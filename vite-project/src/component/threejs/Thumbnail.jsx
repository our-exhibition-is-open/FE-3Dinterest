import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useUploadImageStore } from "../../model/useUploadImageStore";
import { useUploadStore } from "../../model";

export function Thumbnail() {
    const {setThumbnailImage} = useUploadStore();
    const {gl} = useThree();
    useEffect(() => {
        const image = gl.domElement.toDataURL("image/jpeg");
        setThumbnailImage(image);
    }, [])
}