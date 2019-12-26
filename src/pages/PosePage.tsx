
import React, { useRef, useState, useEffect } from "react";
import to from "await-to-js";
import Loading from "../components/Loading";
import useLoadPoseNet from "../hooks/useLoadPoseNet";
import PoseNet from "../components/PoseNet/PoseNet";
import Layout from "../components/layout-2";
import Grid from "@material-ui/core/Grid"
import { Button } from "@material-ui/core";
import { PowerButtonComponent } from "../components/PoseNet/PowerButton";
import { motion } from 'framer-motion';
import "../styles/index-new.scss";

{/* import CameraComponent from "../components/camera-compnent"; */ }

const PlayButtonVariants = {
  hide: {
    opacity: 1,
    scaleX: 0.5,
    scaleY: 0.5
  },
  show: {
    opacity: 1,
    scaleX: 0.3,
    scaleY: 0.3
  }
};

const PoseNetVariants = {
  hide: {
    opacity: 0.5,
    scaleX: 1,
    scaleY: 1
  },
  show: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1
  }
};



export default function PosePage() {

  const [videoPlaying, setVideoPlaying] = useState(false);

  return(
      <Layout>
          <div className="PoseNet">
            <Grid container direction="column" justify="flex-start" alignItems="center">
              <Grid item xs={12}>
                <motion.div variants={PoseNetVariants} animate={videoPlaying ? "show" : "hide"} initial={false}>
                  <PoseNet enabled={videoPlaying}/>
                </motion.div>
                
              </Grid>
              <Grid item xs={12}>
                <motion.div variants={PlayButtonVariants} animate={videoPlaying ? "show" : "hide"} >
                  <Button variant="outlined" color="secondary" onClick={ () => {

                    setVideoPlaying(!videoPlaying);
                    console.log("video playing: " + videoPlaying);

                  }}><PowerButtonComponent />
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </div>
      </Layout>
  )
}
