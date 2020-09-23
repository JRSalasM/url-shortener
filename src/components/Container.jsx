import React from "react";
import { Flex } from "@chakra-ui/core";

const Container = ({ children, ...props }) => {
	return (
		<Flex width="90%" maxWidth="960px" margin="0 auto" {...props}>
			{children}
		</Flex>
	);
};

export default Container;
