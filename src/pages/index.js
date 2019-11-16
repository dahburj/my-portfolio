import React from "react";
import { Waypoint } from 'react-waypoint';
import { scroller } from 'react-scroll';
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Logo  from '../components/logo';
import VideoPlayer from '../components/videoPlayer';
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import ContactPage from '../components/contact';
import Footer from '../components/footer';
import { Controller, Scene } from 'react-scrollmagic/dist/index';
import VIDEOS from '../constants/videos'
import CarouselComponent from '../components/pureCarousel';
import GridComponent from '../components/grid';
import 'semantic-ui-css/components/reset.css';
import 'semantic-ui-css/components/label.css';
import 'semantic-ui-css/components/divider.css';
import "./index.css";
import '../styles/animations.scss';
import '../styles/navbar.scss';
import { graphql } from "gatsby"
class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        videosLoaded: 0,
        videosEmbedded: VIDEOS.length,
        bigLogo: true,
    };
    this.videoIsReady = this.videoIsReady.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.setElClass = this.setElClass.bind(this);
  }
  componentDidMount () {
  	console.log(this.props.data.allContentfulContentfulProject.edges);
  }
	setElClass (el, classList) {
    document.querySelector(el).classList = classList
  }
  videoIsReady () {
    console.log('Child said video is ready.')
	  if (this.state.videosLoaded === this.state.videosEmbedded) {
	  	return;
	  }
    this.setState({
      videosLoaded: this.state.videosLoaded + 1
    })
  }
	scrollTo (element) {
  	console.log(element);
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	};
  render () {
  	const { bigLogo } = this.state;
    // const videosLoaded = this.state.videosLoaded >= this.state.videosEmbedded && this.state.videosEmbedded !== 0
    // Load videos into array
    // Loaded globally from external js file under var VIDEOS

    // Preload container to show typist animation while loading videos
    const IntroContainer = styled.div`
      width: 100vw;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
      position: relative;
      // background: black;
      /* START  BLUE GRADIENT ANIMATION
      background: linear-gradient(116deg, #000000, #0777b8, #173a58);
			background-size: 600% 600%;
			
			-webkit-animation: TFEEnergy 34s ease infinite;
			-moz-animation: TFEEnergy 34s ease infinite;
			-o-animation: TFEEnergy 34s ease infinite;
			animation: TFEEnergy 34s ease infinite;
			
			@-webkit-keyframes TFEEnergy {
			    0%{background-position:0% 20%}
			    50%{background-position:100% 81%}
			    100%{background-position:0% 20%}
			}
			@-moz-keyframes TFEEnergy {
			    0%{background-position:0% 20%}
			    50%{background-position:100% 81%}
			    100%{background-position:0% 20%}
			}
			@-o-keyframes TFEEnergy {
			    0%{background-position:0% 20%}
			    50%{background-position:100% 81%}
			    100%{background-position:0% 20%}
			}
			@keyframes TFEEnergy {
			    0%{background-position:0% 20%}
			    50%{background-position:100% 81%}
			    100%{background-position:0% 20%}
			}
			END BLUE GRADIENT ANIMATION */
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        color: white;
      }
    `
	  const StyledDiv = styled.div`
	    .sticky {
	    	background: white;
	    	position: absolute;
	    	z-index: 999;
	    }
		`
    const BreakSection = styled.div`
			padding: 1rem;
      max-width: 1024px;
      padding-left: 2rem;
      padding-right: 2rem;
      @media screen and (max-width: 599px) {
      	padding-left: 1rem;
      	padding-right: 1rem;
      }
      margin: 0 auto;
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      // background: black;
      color: white;
    	text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
      text-align: left;
      h1 {
      	text-align: left;
      	width: 100%;
      	@media screen and (max-width: 599px) {
      		margin-top: 2.5rem;
      	}
      }
      p {
        text-align: left;
        font-size: 150%;
        @media screen and (max-width: 599px) {
        	font-size: 110%;
        }
        line-height: 1.2;
      }
      .auto-height {
        margin: 1rem auto;
        min-height: unset;
      }
      &.fifth-height {
      	min-height: 20vh;
      }
      &.quarter-height {
        min-height: 25vh;
      }
      &.half-height {
        min-height: 50vh;
      }
      &.full-height {
        min-height: 100vh;
      }
      &.carousel {
        // max-width: 90%;
        // margin: auto;
        min-height: unset;
        height: auto;
        margin-bottom: 10vh;
        display: block;
      	flex-direction: unset;
      	align-items: unset;
	      @media screen and (max-width: 599px) {
		        // padding-bottom: 5vh;
						min-height: calc(50vh + 10vh);
						margin: 0;
						padding: 10px;
					
					}
      	}
      &.contact {
      	max-width: 100%;
      	h1 {
      		text-align: center;
      	}
      }
    `
	  const TextPartSettings = {
    	heightClass: 'fifth-height',
		  duration: '65%',
		  triggerHook: 0.15
	  }

	  const projectAndReportData = this.props.data.allContentfulContentfulProject.edges
	  
    return (
      <Layout>
        <SEO title="Home" keywords={[`Jamal`, `Dahbur`, `CEO`]} />
        <Navbar />
        <MobileNavbar />
        <Controller>
		<Scene
	          pin={false}
	          id={'home'}
	          duration={'50%'}
	          triggerHook={0}
          >
            <div className="section"
                 id={'home'}
            ></div>
			</Scene>
	        <Scene pin={true} triggerHook={0}>
		        <div className="section">
			        <VideoPlayer
				        id={'video1'}
				        loadingHandler={this.videoIsReady}
				        video={VIDEOS[0]}
			        />
		        </div>
	        </Scene>
          <Scene
	          pin={false}
	          id={'home'}
	          duration={'50%'}
	          triggerHook={0}
          >
            <div className="section"
                 id={'home'}
            >
	            <div>
		            <Waypoint
			            topOffset={'50%'}
			            onEnter={() => this.setElClass('img#jad-logo','big')}
			            onLeave={() => this.setElClass('img#jad-logo','nav')}
		            />
		            <Logo
			            isBig={this.state.bigLogo}
		            />
	            </div>
            </div>
          </Scene>

		  <Scene pin={true} duration={TextPartSettings.duration} triggerHook={TextPartSettings.triggerHook}>
		        <div className='projects'>
			        <BreakSection className={TextPartSettings.heightClass}>
				        <Waypoint onEnter={() => console.log('entered section 1 of video 3')} />
							<h2>Former Projects Developed</h2>
			        </BreakSection>
					<BreakSection
				        className={'half-height carousel'}
			        >
				        <Waypoint onEnter={() => console.log('entered project carousel')} />
				        <CarouselComponent
					        linkToAll={'/our-work/'}
					        linkToSingle={'/project/'}
					        title={'Project gallery'}
					        data={projectAndReportData}
				        />
			        </BreakSection>
		        </div>
			</Scene>
{/*
			<Scene
	          pin={true}
	          duration={TextPartSettings.duration}
	          triggerHook={0.25}
          >
            <div className="reports">
              <BreakSection className={'full-height'}>
                <Waypoint onEnter={() => console.log('entered section 1')} />
                <h1>My Faults</h1>
                <p>We believe in the future, because we believe that the required change is within our grasp, if we can refocus minds, innovate and invest accordingly.</p>
              </BreakSection>
            </div>
      </Scene>
*/}
			{/*
          <Scene pin={true} triggerHook={0}>
            <div className="section">
              <VideoPlayer
                loadingHandler={() => this.videoIsReady()}
                video={VIDEOS[1]}
              />
            </div>
          </Scene>
			*/}
	        {/*
	        <Scene pin={true} duration={TextPartSettings.duration} triggerHook={TextPartSettings.triggerHook}>
		        <div>
			        <BreakSection className={TextPartSettings.heightClass}>
				        <Waypoint onEnter={() => console.log('entered section 3 of video 2')} />
				        <p>Capturing the opportunity to limit climate change requires fast, smart and decisive action. Most importantly, it requires a deep conviction that it can be done.</p>
			        </BreakSection>
		        </div>
	        </Scene>
	        */}
		{
		/*
			<Scene triggerHook={0} pin={false}>
		        <div>
			        <BreakSection className={'full-height carousel'}>
				        <Waypoint onEnter={() => console.log('entered reports carousel')} />
			        </BreakSection>
		        </div>
	        </Scene>
		*/}
		{/*
          <Scene pin={true} triggerHook={0}>
            <div className="section">
              <VideoPlayer
                loadingHandler={() => this.videoIsReady()}
                video={VIDEOS[2]}
              />
            </div>
          </Scene>
	        <Scene pin={true} duration={TextPartSettings.duration} triggerHook={TextPartSettings.triggerHook}>
		        <div>
			        <BreakSection className={TextPartSettings.heightClass}>
				        <Waypoint onEnter={() => console.log('entered section 1 of video 3')} />
				        {<h1>This is where TFE Energy works</h1>}

			        </BreakSection>
		        </div>
			</Scene>
		*/}

	        {/*<Scene pin={true} duration={TextPartSettings.duration} triggerHook={TextPartSettings.triggerHook}>
		        <div>
			        <BreakSection className={TextPartSettings.heightClass}>
				        <Waypoint onEnter={() => console.log('entered section 3 of video 3')} />

			        </BreakSection>
		        </div>
	</Scene>*/}
        </Controller>
      </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query {
    allCloudinaryMedia {
      edges {
        node {
          id
          type
          url
        }
      }
    }
  allContentfulContentfulProject {
    edges {
      node {
        id
        type
        slug
        title
        updatedAt
        image {
          file {
            url
            fileName
            contentType
            details {
              image {
                width
                height
              }
            }
          }
          description
        }
        contentful_id
        body {
          body
        }
        bodyRichText{
          json
        }
        tags
        description
      }
    }
  }
  }
`;
