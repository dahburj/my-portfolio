import React from "react";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';
// import { Waypoint } from 'react-waypoint';

const VideoPlayer = ({video, id}) => {

	const [ref, inView, entry] = useInView();
	
	return (
		<div ref={ref} className="sectionTwo__video">
			<video
				id={`video-${video.id}`}
				poster={`${video.src.poster.jpg}`}
				loop
				autoPlay
				muted
				playsInline
			>
				<source src={video.src.hdready.mp4.cdn} type={'video/mp4'} />
				<source src={video.src.hdready.webm.cdn} type={'video/webm'} />
				<source src={video.src.hdready.webm.ogv} type={'video/ogv'} />
			</video>
		</div>
	
	);
}
export default VideoPlayer;
