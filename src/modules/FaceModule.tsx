import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";


const FaceModule = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/test/Build/test.json",
        "/test/Build/UnityLoader.js"
    );
    
    return (
        <div ref={ref}>
            <Unity unityContent={unityContent} />
        </div>
    )

}

export default FaceModule