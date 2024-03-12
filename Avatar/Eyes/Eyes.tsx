import React from "react";

import EyesCircle from "./EyesCircle";
import EyesOval from "./EyesOval";
import EyesSmile from "./EyesSmile";

import { EyeStyle } from "../types";

interface EyesIF {
	variant?: EyeStyle
}

const Eyes: React.FC<EyesIF> = ({ variant }) => {
	
	switch (variant) {
		case "circle":
			return <EyesCircle />;
		case "smile":
			return <EyesSmile />;
		case "oval":
		default:
			return <EyesOval />;
	}
}

export default Eyes
