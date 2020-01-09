import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../assets/scss/index-new.scss";
import Footer from '../components/footer';

const FaceMarkModule:React.FC = () => {

    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/FaceMark446-GZIP/Build/FaceMark446-GZIP.json",
        "/FaceMark446-GZIP/Build/UnityLoader.js"
    );

    return (
        <div>
            <div ref={ref} id="gameContainer">
                <Unity unityContent={unityContent} />
            </div>
        </div>

    )
}

export default FaceMarkModule;