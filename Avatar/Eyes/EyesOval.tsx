import React from "react";
import { Svg, Ellipse } from 'react-native-svg'

const EyesOval = () => {
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
			<Ellipse cx="16.5301" cy="29.4023" rx="9" ry="13.5" transform="rotate(-6.77646 16.5301 29.4023)" fill="black" />
			<Ellipse cx="80.5312" cy="19.4021" rx="9" ry="13.5" transform="rotate(-6.27568 80.5312 19.4021)" fill="black" />
		</Svg>
	);
}

export default EyesOval
