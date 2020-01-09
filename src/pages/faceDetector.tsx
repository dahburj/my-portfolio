import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loadable from "@loadable/component";
import Unity, { UnityContent } from "react-unity-webgl";
import Layout from "../components/layout-2";
const LoadedFaceModule = Loadable(() => import("../modules/FaceModule"));

export default function FaceComponent() {
    return(
        <Layout>
            <div>
                <LoadedFaceModule />
            </div>
        </Layout>
    )
};