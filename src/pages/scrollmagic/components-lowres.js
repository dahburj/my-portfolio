import React from "react";
import styled from "styled-components";
import { Controller, Scene } from 'react-scrollmagic/dist/index';
import 'semantic-ui-css/components/reset.css';

const ComponentsStyled = styled.div`
  .section {
  	overflow: hidden;
  	background: black;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
   	.absolute {
   		position: absolute;
   	}
   	.white {
   		color: white;
   	}
   	.video-container {
   	  position: absolute;
		  width: 100vw;
		  height: 100vh;
		  top: 0;
		  left: 0;
		  bottom: 0;
		  right: 0;
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  video {
        object-fit: cover;
    		object-position: center;
		    width: 100%;
		    height: 100vw;
		  }
   	}
  }
  #stateful {
  	background: black;
  	height: 20vh;
  	color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/*const StyledDiv = styled.div`
  background-color: black;
  color: white;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center
`;

 */

// const Stateless = ({children}) => <div id="stateless">{children}</div>;

// const StatelessFragment = () => <React.Fragment><div id="statelessFragment">StatelessFragment Component<br />Text 4</div></React.Fragment>;

const StatelessRef = React.forwardRef((props, ref) => (
	<div ref={ref}>
		<video
			className={'full-screen video intro'}
			autoPlay
			loop
			muted
		>
			<source src={props.videoURL} type={"video/mp4"} />
		</video>
	</div>
));

class Stateful extends React.Component {
	render() {
		return (
			<div id="stateful">Stateful Component (20% duration)<br />More text</div>
		);
	}
}

const Components = () => (
	<ComponentsStyled>
		<div className="section">
			<video
				className={'full-screen video intro'}
				autoPlay
				loop
				muted
			>
				<source src={"https://www.marcfehr.ch/tfe/videos/test3low.mp4"} type={"video/mp4"} />
			</video>
			<h1 className={'absolute text fat white'}>TFE Energy</h1>
		</div>
		<Controller>
			<Scene triggerHook={0} duration={'50%'}>
				<div
					style={{
						background: 'black',
						height: '50vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'white'
					}}
				>
					<h1 style={{margin: 0, padding: 0, position: 'absolute'}}>
						Text<br />
						HTML tag component (200% duration)
					</h1>
				</div>
			</Scene>
			<Scene duration={'300%'} pin={true} triggerHook={0}>
				<StatelessRef videoURL={'https://www.marcfehr.ch/tfe/videos/test1low.mp4'} />
			</Scene>
			<Scene triggerHook={0} duration={'50%'}>
				<div
					style={{
						background: 'black',
						height: '50vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'white'
					}}
				>
					<h1 style={{margin: 0, padding: 0, position: 'absolute'}}>
						Text<br />
						HTML tag component (200% duration)
					</h1>
				</div>
			</Scene>
			<Scene duration={'200%'} pin={true} triggerHook={0}>
				<StatelessRef videoURL={'https://www.marcfehr.ch/tfe/videos/test2low.mp4'} />
			</Scene>
			<Scene duration={'20%'} triggerHook={0}>
				<Stateful />
			</Scene>
		</Controller>
		<div className="section">
			<h1>Contact</h1>
		</div>
	</ComponentsStyled>
);

export default Components;
