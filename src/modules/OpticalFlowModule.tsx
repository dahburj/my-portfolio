import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss"

const OpticalFlow:React.FC = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/optical-flow/Build/optical-flow.json",
        "/optical-flow/Build/UnityLoader.js"
    );
    
    return (
        <div ref={ref}>
            <Unity unityContent={unityContent} />
        </div>
    )

}

export default OpticalFlow