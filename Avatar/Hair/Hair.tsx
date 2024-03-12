import React from "react";

import Normal from "./HairNormal";
import Thick from "./HairThick";
import Mohawk from "./HairMohawk";
import WomanLong from "./HairWomanLong";
import WomanShort from "./HairWomanShort";
import { HairStyle } from "../types";

interface HairIF {
	variant?: HairStyle,
	color?: string,
	colorRandom?: boolean
}

const Hair: React.FC<HairIF> = ({ variant, color='', colorRandom=false }) => {
	
	switch (variant) {
		case "thick":
			return <Thick color={color} colorRandom={colorRandom} />;
		case "mohawk":
			return <Mohawk color={color} colorRandom={colorRandom} />;
		case "womanLong":
			return <WomanLong color={color} />;
		case "womanShort":
			return <WomanShort color={color} />;
		case "normal":
		default:
			return <Normal color={color} />;
	}
}

export default Hair
