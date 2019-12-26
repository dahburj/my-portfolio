import React from 'react';
import props from "prop-types";
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import * as posenet from '@tensorflow-models/posenet';
import Layout from "../components/layout-2";
import "../styles/posenet.scss";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { PowerButtonComponent } from "../components/PoseNet/PowerButton";
import { motion } from 'framer-motion';

async function estimatePoseOnImage(imageElement) {
  // load the posenet model from a checkpoint
  const net = await posenet.load();

  const pose = await net.estimateSinglePose(imageElement, {
    flipHorizontal: false
  });
  return pose;
}


const PlayButtonVariants = {
  show: {
    opacity: 1,
    scaleX: 0.5,
    scaleY: 0.5
  },
  hide: {
    opacity: 1,
    scaleX: 0.3,
    scaleY: 0.3
  }
};

class CameraComponent extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.cameraPhoto = null;
    this.videoRef = React.createRef();
    this.state = {
      dataUri: ''
    }
  }
 
  componentDidMount () {
    // We need to instantiate CameraPhoto inside componentDidMount because we
    // need the refs.video to get the videoElement so the component has to be
    // mounted.
    this.cameraPhoto = new CameraPhoto(this.videoRef.current);

  }
 
  startCamera (idealFacingMode, idealResolution) {
    this.cameraPhoto.startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }
 
  startCameraMaxResolution (idealFacingMode) {
    this.cameraPhoto.startCameraMaxResolution(idealFacingMode)
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }
 
  takePhoto () {
    const config = {
      sizeFactor: 1
    };
 
    let dataUri = this.cameraPhoto.getDataUri(config);
    this.setState({ dataUri });
  }
 
  stopCamera () {
    this.cameraPhoto.stopCamera()
      .then(() => {
        console.log('Camera stoped!');
      })
      .catch((error) => {
        console.log('No camera to stop!:', error);
      });
  }
 
  render () {
    var videoPlaying;
    return (
      <Layout>
        <div className="PoseNet">
          <Grid container direction="column" justify="flex-start" alignItems="center">
            <Grid item xs={12}>
                <video
                    ref={this.videoRef}
                    autoPlay={true}
                    />
                    {console.log(this.state.dataUri )}
                  </Grid>
                <Grid item xs={12}>
                  <motion.div variants={PlayButtonVariants} animate={videoPlaying ? "show" : "hide"} >
                    <Button variant="outlined" color="secondary" onClick={ () => {
                      if(!videoPlaying) {
                        let facingMode = FACING_MODES.ENVIRONMENT;
                        let idealResolution = { width: 640, height: 480 };
                        this.startCamera(facingMode, idealResolution);
                      }else {
                        this.stopCamera();
                        videoPlaying = false;
                      }
                    }}><PowerButtonComponent />
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
        </div>
           {/* <Button variant="contained" onClick={ () => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 640, height: 480 };
            this.startCamera(facingMode, idealResolution);
            }}>
                Start environment facingMode resolution ideal 640 by 480
            </Button>
            <Button variant="contained" onClick={ () => {
            let facingMode = FACING_MODES.USER;
            this.startCamera(facingMode, {});
            }}> Start user facingMode resolution default </Button> */}
            
      </Layout>
    );
  }
}
 
export default CameraComponent;