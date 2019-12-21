import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss"

const FaceModule:React.FC = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/Face/Build/Face.json",
        "/Face/Build/UnityLoader.js"
    );
    
    return (
        <div ref={ref}>
            <Unity className="canvas" unityContent={unityContent} />
        </div>
    )

}

export default FaceModule