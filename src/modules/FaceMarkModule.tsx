import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss";

const FaceMarkModule:React.FC = () => {
    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/FaceMark/Build/FaceMark.json",
        "/FaceMark/Build/UnityLoader.js"
    );


    return (
        <div ref={ref} id="gameContainer">
            <Unity unityContent={unityContent} />
        </div>
    )
}

export default FaceMarkModule;