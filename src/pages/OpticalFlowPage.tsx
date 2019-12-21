import React, { useState, useEffect } from "react";
import Loadable from "@loadable/component";
import Layout from "../components/layout";
const LoadedOpticalFaceComponent = Loadable(() => import("../modules/OpticalFlowModule"));

export default function OpticalComponent() {
    return(
        <Layout>
            <div>
                <LoadedOpticalFaceComponent />
            </div>
        </Layout>
    )
};