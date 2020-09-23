import React from "react";
import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/core";

const BASE_URL = "http://192.168.0.4:4000";
const CreatedLink = ({ link }) => {
	const { colorMode } = useColorMode();
	return (
		<Flex
			width="full"
			direction={{ base: "column", md: "row" }}
			justify="space-between"
			align="center"
			backgroundColor={colorMode === "light" ? "gray.200" : "gray.700"}
			padding=".5rem"
			my=".5rem"
			rounded="lg"
		>
			<Box w={{ base: "full", md: "auto" }}>
				<Link mr={{ base: "0", md: "1rem" }} isExternal href={link.url}>
					{link.url}
				</Link>
			</Box>
			<Box w={{ base: "full", md: "auto" }}>
				<Link
					mr={{ base: "0", md: "1rem" }}
					my={{ base: "1rem", md: "0" }}
					color={colorMode === "light" ? "blue.700" : "blue.300"}
					isExternal
					href={`${BASE_URL}/${link.id}`}
				>{`${BASE_URL}/${link.id}`}</Link>
				<Button w={{ base: "full", md: "auto" }} variantColor="blue">
					Copy
				</Button>
			</Box>
		</Flex>
	);
};

export default CreatedLink;
