import React from "react";

import { Svg, Path, Circle } from 'react-native-svg'

const GlassesSquare = () => {
	const size = 168
	return (
		<Svg
			style={{
				width: "100%",
				height: "22%",
				position: "absolute",
				top: '30%',
				left: '2%'
			}}
			viewBox={`0 0 ${size} ${(74/160)*size}`}
			fill="none"
		>
			<Path d="M36.5 42.5L2 49.125" stroke="black" strokeWidth="4" strokeLinecap="round" />
			<Path d="M32.4878 25.9393C31.618 22.4804 33.9396 19.0308 37.4716 18.5345L76.1882 13.0932C79.4696 12.632 82.5036 14.9183 82.9648 18.1998L88.5317 57.8105C88.9929 61.0919 86.7066 64.126 83.4252 64.5871L48.9526 69.4319C45.9161 69.8587 43.0465 67.9273 42.2987 64.9536L32.4878 25.9393Z" stroke="black" strokeWidth="4" />
			<Path d="M154.751 8.96388C154.634 5.39915 151.451 2.7232 147.919 3.21958L109.203 8.66085C105.921 9.12202 103.635 12.156 104.096 15.4375L109.663 55.0482C110.124 58.3297 113.158 60.616 116.44 60.1548L150.912 55.31C153.949 54.8832 156.175 52.2357 156.074 49.1711L154.751 8.96388Z" stroke="black" strokeWidth="4" />
			<Path d="M85.5 37.125L107.5 33.625" stroke="black" strokeWidth="4" />
		</Svg>
	);
}

export default GlassesSquare