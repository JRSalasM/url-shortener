import React from "react";
import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/core";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { FaRegClipboard, FaCheck } from "react-icons/fa";
const BASE_URL = process.env.REACT_APP_API;
const CreatedLink = ({ link }) => {
	const { colorMode } = useColorMode();
	const [ isCopied, setIsCopied ] = useCopyToClipboard();
	const handleCopy = () => {
		setIsCopied(`${BASE_URL}/${link.id}`);
	};
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
			<Box w={{ base: "full", md: "70%" }}>
				<Link mr={{ base: "0", md: "1rem" }} isExternal href={link.url}>
					{link.url}
				</Link>
			</Box>
			<Box w={{ base: "full", md: "30%" }}>
				<Link
					mr={{ base: "0", md: "1rem" }}
					my={{ base: "1rem", md: "0" }}
					color={colorMode === "light" ? "blue.700" : "blue.300"}
					isExternal
					href={`${BASE_URL}/${link.id}`}
				>{`${BASE_URL}/${link.id}`}</Link>
				<Button
					w={{ base: "full" }}
					leftIcon={isCopied ? FaCheck : FaRegClipboard}
					variantColor={isCopied ? "green" : "blue"}
					onClick={handleCopy}
				>
					{isCopied ? "Copied" : "Copy"}
				</Button>
			</Box>
		</Flex>
	);
};

export default CreatedLink;
