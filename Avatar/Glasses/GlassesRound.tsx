import React from "react";

import { Svg, Path, Circle } from 'react-native-svg'

const GlassesRound = () => {
	const size = 158
	return (
		<Svg
			style={{
				width: "100%",
				height: "20%",
				position: "absolute",
				top: '31%',
				left: '2%'
			}}
			viewBox={`0 0 ${size} ${(65/152)*size}`}
			fill="none"
		>
			<Circle cx="123.5" cy="28" r="26" stroke="black" strokeWidth="4" />
			<Circle cx="56.5" cy="37" r="26" stroke="black" strokeWidth="4" />
			<Path d="M98.5 35C98.5 32.8783 97.6571 30.8434 96.1569 29.3431C94.6566 27.8429 92.6217 27 90.5 27C88.3783 27 86.3434 27.8429 84.8431 29.3431C83.3429 30.8434 82.5 32.8783 82.5 35" stroke="black" strokeWidth="4" />
			<Path d="M31 39L1 44.5" stroke="black" strokeWidth="4" />
		</Svg>
	);
}

export default GlassesRound