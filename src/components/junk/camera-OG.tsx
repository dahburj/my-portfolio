import React from 'react';
import props from "prop-types";
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
 
import { Button } from "@material-ui/core";
import Layout from "../components/layout";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

class CameraComponentOG extends React.Component {
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
    return (
      <Layout>
          <div>
            <Button variant="contained" onClick={ () => {
            let facingMode = FACING_MODES.ENVIRONMENT;
            let idealResolution = { width: 640, height: 480 };
            this.startCamera(facingMode, idealResolution);
            }}>
                Start environment facingMode resolution ideal 640 by 480
            </Button>
            <Button variant="contained" onClick={ () => {
            let facingMode = FACING_MODES.USER;
            this.startCamera(facingMode, {});
            }}> Start user facingMode resolution default </Button>

            <Button variant="contained" onClick={ () => {
            let facingMode = FACING_MODES.USER;
            this.startCameraMaxResolution(facingMode);
            }}> Start user facingMode resolution maximum </Button>

            <Button variant="contained" onClick={ () => {
            this.takePhoto();
            }}> Take photo </Button>

            <Button variant="contained" onClick={ () => {
            this.stopCamera();
            }}> Stop </Button>

            <video
            ref={this.videoRef}
            autoPlay="true"
            />
            <img
            alt="imgCamera"
            src={this.state.dataUri}
            />
          </div>
       
      </Layout>
    );
  }
}
 
export default CameraComponentOG;