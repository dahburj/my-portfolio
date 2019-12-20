import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";



const FaceDetector: React.FC = () => {

    const unityContent = new UnityContent(
        "/test/Build/test.json",
        "/test/Build/UnityLoader.js"
    )
    return(

        <div>
            <Unity unityContent={unityContent} />
        </div>

    );

};

export default FaceDetector;