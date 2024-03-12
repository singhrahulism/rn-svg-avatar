import React from "react";
import { Svg, Path } from "react-native-svg";

const NoseShort = () => {
	return (
		<Svg
			style={{
				width: "10%",
				height: "10%",
				position: "absolute",
				top: "45%",
				left: "50%"
			}}
			viewBox="0 0 32 40"
			fill="none"
		>
			<Path d="M16.5 7C16.1667 10.8333 16.5 19.2 20.5 22C25.5 25.5 20 34 10 32" stroke="#171921" strokeWidth="4" />
		</Svg>
	);
}

export default NoseShort
