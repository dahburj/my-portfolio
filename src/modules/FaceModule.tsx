import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss"

const FaceModule:React.FC = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/face-rect/Build/face-rect.json",
        "/face-rect/Build/UnityLoader.js"
    );
    
    return (
        <div ref={ref}>
            <Unity unityContent={unityContent} />
        </div>
    )

}

export default FaceModule