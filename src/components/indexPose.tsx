import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppPose from '../components/AppPose';
import '../styles/indexPose.css';
import registerServiceWorker from '../components/registerServiceWorkerPose';

class IndexPose extends React.Component{

  constructor (props){
    super (props)
  }

  componentDidMount () {
    registerServiceWorker()
  }

  
  
  render() {
    
    return(
      <AppPose />, document.getElementById('root') as HTMLElement
    )
  }

}

export default IndexPose;