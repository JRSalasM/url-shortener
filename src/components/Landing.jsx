import React, { Fragment } from "react";
import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/core";
import Container from "./Container";
import Navbar from "./Navbar";
import LandingImg from "../assets/undraw01.svg";

const Landing = () => {
	const { colorMode } = useColorMode();
	return (
		<Fragment>
			<Navbar />
			<Box backgroundColor={colorMode === "light" ? "gray.300" : "gray.700"}>
				<Container>
					<Flex
						textAlign={{ base: "center", md: "left" }}
						direction={{ base: "column-reverse", md: "row" }}
						justify="space-between"
						width="100%"
						pt="2rem"
					>
						<Box my="2rem" width={{ base: "full", md: "45%" }}>
							<Heading size="2xl" pb="1rem">
								Make short and easy to remember links
							</Heading>
							<Heading size="lg" fontWeight="normal">
								A URL shortener built with powerful tools to help you grow and
								protect your brand.
							</Heading>
						</Box>
						<Image src={LandingImg} width={{ base: "full", md: "45%" }} />
					</Flex>
				</Container>
			</Box>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill={colorMode === "light" ? "#CBD5E0" : "#2D3748"}
					fill-opacity="1"
					d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
				/>
			</svg>
		</Fragment>
	);
};

export default Landing;
