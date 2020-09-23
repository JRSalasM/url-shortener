import { Button } from "@chakra-ui/core";
import React from "react";

const Btn = ({ children, ...props }) => {
	return (
		<Button variantColor="blue" {...props}>
			{children}
		</Button>
	);
};

export default Btn;
