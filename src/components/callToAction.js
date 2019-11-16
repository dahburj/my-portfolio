import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import '../styles/animations.scss';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/button.css';

const ActionContainer = styled.div`
		position: absolute;
		top: 92vh;
		width: 100%;
		text-align: center;
	`

const CallToAction = ({ icon, text, positionX, positionY }) => (
	<ActionContainer>
		<p
			className={'bounce-top ui basic inverted button compact'}
		>
			{text} <i className={`ui icon ${icon}`} />
		</p>
	</ActionContainer>
)

CallToAction.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
}

CallToAction.defaultProps = {
	text: `Scroll down`,
	icon: `chevron down`,
	positionX: `center`,
	positionY: `bottom`
}

export default CallToAction
