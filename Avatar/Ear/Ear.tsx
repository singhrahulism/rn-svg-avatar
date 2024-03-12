import React from "react";

import EarSmall from "./EarSmall";
import EarBig from "./EarBig";

import type { EarSize } from "../types";

interface EarIF {
	color?: string,
	variant?: EarSize
}

const Ear: React.FC<EarIF> = ({ color='#F9C9B6', variant }) => {

	switch (variant) {
		case 'big':
			return <EarBig color={color} />
		case 'small':
		default:
			return <EarSmall color={color} />
	}
}

export default Ear
