import React from "react";
import Loadable from "@loadable/component";
import Layout from "../components/layout";

const LoadedFaceMarkModule = Loadable(() => import("../modules/FaceMarkModule"));

export default function FaceMarkComponent() {
    return(
        <Layout>
            <div>
                <LoadedFaceMarkModule />
            </div>
        </Layout>
    )
}