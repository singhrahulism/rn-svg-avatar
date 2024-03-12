import React from "react";

import Round from "./GlassesRound";
import Square from "./GlassesSquare";
import { GlassesStyle } from "../types";

interface GlassesIF {
	variant?: GlassesStyle
}

const Glasses: React.FC<GlassesIF> = ({ variant }) => {
  
	switch (variant) {
		case "round":
			return <Round />;
		case "square":
			return <Square />;
		case "none":
		default:
			return null;
	}
}

export default Glasses
