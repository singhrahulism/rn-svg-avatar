import React from "react";
import { View } from "react-native";
import { Svg, Path } from 'react-native-svg'

const EyebrowUp = () => {
	return (
		<Svg
			style={{
			position: "absolute",
			top: '30%',
			left: '34%'
		}}
			viewBox="0 0 380 380"
			fill="none"
		>
			<Path d="M99 10.2143C104.667 7.5476 118 5.11427 126 16.7143" stroke="black" strokeWidth="4" strokeLinecap="round" />
			<Path d="M23.5791 35.521C25.6497 29.6104 33.2612 18.3959 47.1418 20.8224" stroke="black" strokeWidth="4" strokeLinecap="round" />
		</Svg>
	);
}

export default EyebrowUp
