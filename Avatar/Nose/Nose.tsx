import React from "react";

import Long from "./NoseLong";
import Short from "./NoseShort";
import Round from "./NoseRound";
import { NoseStyle } from "../types";

interface NoseIF {
	variant?: NoseStyle,
}

const Nose: React.FC<NoseIF> = ({ variant }) => {
	
	switch (variant) {
		case "long": return <Long />;
		case "round": return <Round />;
		case "short":
		default:
			return <Short />;
	}
}

export default Nose
