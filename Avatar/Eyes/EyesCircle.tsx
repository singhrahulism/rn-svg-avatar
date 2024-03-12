import React from "react";
import { Svg, Ellipse } from 'react-native-svg'

const EyesCircle = () => {
	return (
		<Svg
			style={{
			position: 'absolute',
			width: "100%",
			height: "12%",
			top: "35%",
			left: '4%'
			}}
			viewBox="0 0 96 48"
			fill="none"
		>
			<Ellipse cx="16.1171" cy="28.9268" rx="9" ry="10" transform="rotate(-6.77646 16.1171 28.9268)" fill="black" />
			<Ellipse cx="80.1486" cy="18.9231" rx="9" ry="10" transform="rotate(-6.27568 80.1486 18.9231)" fill="black" />
		</Svg>
	);
}

export default EyesCircle
