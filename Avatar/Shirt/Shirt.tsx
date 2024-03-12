import React from "react";
import chroma from "chroma-js";

import Hoody from "./ShirtHoody";
import Short from "./ShirtShort";
import Polo from "./ShirtPolo";
import { ShirtStyle } from "../types";

interface ShirtIF {
	variant?: ShirtStyle,
	color?: string,
}

const Shirt: React.FC<ShirtIF> = ({ color='rgb(252, 144, 159)', variant }) => {

	const secondColor = chroma(color).brighten(1).hex();
	
	switch (variant) {
		case "hoody":
			return <Hoody color={color} lightColor={secondColor} />;
		case "polo":
			return <Polo color={color} lightColor={secondColor} />;
		case "short":
		default:
			return <Short color={color} />;
	}
}

export default Shirt
