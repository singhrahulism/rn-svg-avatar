import React from "react";

import Smile from "./MouthSmile";
import Peace from "./MouthPeace";
import { MouthStyle } from "../types";

interface MouthIF {
	variant?: MouthStyle,
}

const Mouth: React.FC<MouthIF> = ({ variant }) => {
	
	switch (variant) {
		case "smile": return <Peace />;
		case "peace":
		default:
			return <Smile />;
	}
}

export default Mouth
