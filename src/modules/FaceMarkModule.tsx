import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss";

const FaceMarkModule:React.FC = () => {
    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/face-mark/Build/face-mark.json",
        "/face-mark/Build/UnityLoader.js"
    );

    return (
        <div ref={ref}>
            <Unity unityContent={unityContent} />
        </div>
    )
}

export default FaceMarkModule;