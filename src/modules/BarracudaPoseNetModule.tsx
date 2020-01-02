import React from "react";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import "../styles/index-new.scss";
import Footer from '../components/footer-new';

const BarracudaPoseNetModule:React.FC = () => {
    const [ref, inView, entry] = useInView();

    const unityContent = new UnityContent(
        "/BarracudaPoseNetTest2/Build/BarracudaPoseNetTest2.json",
        "/BarracudaPoseNetTest2/Build/UnityLoader.js"
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

export default BarracudaPoseNetModule;