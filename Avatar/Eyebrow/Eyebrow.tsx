import React from "react";

import EyebrowUp from "./EyebrowUp";
import EyebrowUpWoman from "./EyebrowUpWoman";

import { EyeBrowStyle } from "../types";

interface EyebrowIF {
	variant?: EyeBrowStyle
}

const Eyebrow: React.FC<EyebrowIF> = ({ variant }) => {

	switch (variant)
	{
		case 'upWoman':
			return <EyebrowUpWoman />;
		case 'up':
		default:
			return <EyebrowUp />;
	}
}

export default Eyebrow
