import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";


const faceDetector = () => {

    const unityContent = new UnityContent(
        "/test/Build/test.json",
        "/test/Build/UnityLoader.js"
    );
    
    return (
        <div>
            <Unity unityContent={unityContent} />
        </div>
    )

}
const LoadableFace = Loadable(() => import("./faceDetector"));
export default LoadableFace;