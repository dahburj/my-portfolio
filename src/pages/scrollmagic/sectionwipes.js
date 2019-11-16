import React from "react";
import styled from "styled-components";
import { Controller, Scene } from 'react-scrollmagic/dist/index';
import { Tween, Timeline } from 'react-gsap/dist/index';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;

class Videos extends React.Component {
	render () {
		return (
			<SectionWipes2Styled>
				<Controller>
					<Scene
						triggerHook="onLeave"
						duration="300%"
						pin
					>
						<Timeline
							wrapper={<div id="pinContainer" />}
						>
							<section className="panel blue"><span>Intro</span></section>
							<Tween
								from={{ y: '100%' }}
								to={{ y: '0%' }}
							>
								<section className="panel turqoise"><span>Projects</span></section>
							</Tween>
							<Tween
								from={{ y: '100%' }}
								to={{ y: '0%' }}
							>
								<section className="panel green"><span>Reports</span></section>
							</Tween>
							<Tween
								from={{ y: '100%' }}
								to={{ y: '0%' }}
							>
								<section className="panel bordeaux"><span>Contact</span></section>
							</Tween>
						</Timeline>
					</Scene>
				</Controller>
			</SectionWipes2Styled>
		);
	};
}
export default Videos;
