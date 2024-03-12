import React from "react";
import { Svg, Path } from "react-native-svg";

const HatTurban = (props: { color: string }) => {
	const { color } = props;
	const size = 234
	return (
		<Svg
			style={{
				position: "absolute",
				bottom: "31%",
				left: "14%",
				width: "68%",
				height: "84%",
			}}
			viewBox={`0 0 ${size} ${(212/240)*size}`}
			fill="none"
		>
			<Path d="M222.726 112.791C222.726 46.702 186.268 2.00007 141.859 2C84.9656 2 27 23.3414 27 124.255C27 149.223 37.6589 167.827 52.5644 181.54C51.0704 179.671 49.8666 177.996 49.0668 176.619C46.176 149.638 78.2326 128.929 109.601 108.665C126.254 97.907 142.712 87.2746 153.646 75.8956C163.24 81.3324 191.44 104.109 196.813 113.32C199.695 118.26 204.322 135.189 207.484 154.95C217.822 142.532 222.726 130.107 222.726 112.791Z" fill={color} stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
			<Path d="M154.264 75.2457C167.438 63.3013 187.146 36.0399 185.881 18.334" stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
		</Svg>
	);
}

export default HatTurban
