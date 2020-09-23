import { Box, Flex } from "@chakra-ui/core";
import React, { useState } from "react";
import Container from "./Container";
import CreatedLink from "./CreatedLink";
import LinkForm from "./LinkForm";
const UserLinks = () => {
	const [ links, setLinks ] = useState([]);
	return (
		<Box mb="2rem" mt="-3rem">
			<Container>
				<Flex direction="column" width="full">
					<LinkForm setLinks={setLinks} links={links} />
					<Flex direction="column" width="full" mt="1rem">
						{links.length > 0 && links.map((link) => <CreatedLink link={link} />)}
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default UserLinks;
