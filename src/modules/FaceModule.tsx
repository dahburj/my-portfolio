import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss"

const FaceModule = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/Face-Resp/Build/Face-Resp.json",
        "/Face-Resp/Build/UnityLoader.js"
    );
    
    return (
        <div>
            <Unity className="canvas" unityContent={unityContent} />
        </div>
    )

}

export default FaceModule