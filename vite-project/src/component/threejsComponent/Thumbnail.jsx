import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useUploadStore } from "../../model";
import { base64toFile } from "../../util/uploadUtil/decodeBase64";

export function Thumbnail() {
    const {setThumbnailImage, file} = useUploadStore();
    const {gl} = useThree();
    useEffect(() => {
        const image = gl.domElement.toDataURL("image/jpeg");
        const file = base64toFile(image, "image_file.jpeg");
        console.log(file);
        setThumbnailImage(file);
    }, [])
}