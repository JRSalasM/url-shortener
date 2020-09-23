import React from "react";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode
} from "@chakra-ui/core";
import Container from "./Container";
import Btn from "./Btn";
const MenuLink = ({ children, ...props }) => (
	<Link {...props} ml={10}>
		{children}
	</Link>
);
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex w="100%" h="65px" bg="transparent">
			<Container justify="space-between" align="center">
				<Flex>
					<Text fontWeight="bold" fontSize="1.5rem">
						Shortly
					</Text>
				</Flex>
				<Box display={{ base: "none", md: "block" }}>
					<MenuLink href="#">Home</MenuLink>
					<MenuLink href="#features">Features</MenuLink>
					<MenuLink href="#about">About</MenuLink>
					<MenuLink href="#shorter">
						<Btn>Get Started</Btn>
					</MenuLink>
					<IconButton
						icon={colorMode === "light" ? "moon" : "sun"}
						onClick={toggleColorMode}
						ml=".5rem"
					/>
				</Box>
				<Box display={{ sm: "block", md: "none" }}>
					<Menu>
						<MenuButton as={Button} rightIcon="chevron-down" variantColor="blue">
							Menu
						</MenuButton>
						<MenuList>
							<MenuItem as="a" href="#">
								Home
							</MenuItem>
							<MenuItem as="a" href="#features">
								Features
							</MenuItem>
							<MenuItem as="a" href="#about">
								About
							</MenuItem>
							<MenuItem
								as={Button}
								variantColor="blue"
								width="90%"
								mx="auto"
								href="#shortener"
							>
								Get Started
							</MenuItem>
						</MenuList>
					</Menu>
					<IconButton
						icon={colorMode === "light" ? "moon" : "sun"}
						onClick={toggleColorMode}
						ml=".5rem"
					/>
				</Box>
			</Container>
		</Flex>
	);
};
export default Navbar;
