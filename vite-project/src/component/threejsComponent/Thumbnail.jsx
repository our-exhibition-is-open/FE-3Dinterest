import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useUploadStore } from "../../model";
import { base64toFile } from "../../util/uploadUtil/decodeBase64";
import { getCurrentTime } from '../../util/uploadUtil/getCurrentTime';

export function Thumbnail() {
    const {setThumbnailImage} = useUploadStore();
    const {gl} = useThree();
    useEffect(() => {
        setTimeout(() => {
            const image = gl.domElement.toDataURL("image/jpeg");
            const file = base64toFile(image, getCurrentTime() +".jpeg");
            setThumbnailImage(file);
        }, 1500);
    }, [])
    
        
}