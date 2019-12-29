import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss";
import Footer from '../components/footer-new';

const FaceMarkModule:React.FC = () => {
    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/FaceMark/Build/FaceMark.json",
        "/FaceMark/Build/UnityLoader.js"
    );


    return (
        <div>
            <div ref={ref} id="gameContainer">
                <Unity unityContent={unityContent} />
            </div>
            <footer>
                © {new Date().getFullYear()}, Special thanks to
                {` `}
                <a href="https://enoxsoftware.com/opencvforunity/">Open Enox For Unity</a>
            </footer>
        </div>

    )
}

export default FaceMarkModule;