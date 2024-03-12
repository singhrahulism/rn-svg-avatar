import React from "react";

import Turban from "./HatTurban";
import Beanie from "./HatBeanie";
import { HatStyle } from "../types";

interface HatIF {
	variant?: HatStyle,
	color?: string,
}

const Hat: React.FC<HatIF> = ({ variant, color='' }) => {
	
	switch (variant) {
		case "beanie":
			return <Beanie color={color} />;
		case "turban":
			return <Turban color={color} />;
		case "none":
		default:
			return null;
	}
}

export default Hat
