import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss";
import Footer from '../components/footer-new';

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
            <footer>
                © {new Date().getFullYear()}, Jamal Dahbur
            </footer>
        </div>

    )
}

export default FaceMarkModule;