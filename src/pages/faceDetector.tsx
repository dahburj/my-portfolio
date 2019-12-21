import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loadable from "@loadable/component";
import { useInView } from "react-intersection-observer";
import Unity, { UnityContent } from "react-unity-webgl";
import Layout from "../components/layout";
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