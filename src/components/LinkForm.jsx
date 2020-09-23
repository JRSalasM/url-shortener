import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	useColorMode
} from "@chakra-ui/core";
import Axios from "axios";

const SignupSchema = Yup.object().shape({
	url: Yup.string()
		.min(10, "Too Short!")
		.max(50, "Too Long!")
		.required("Required")
		.url("Is not a URL!")
});

const BASE_URL = "http://192.168.0.4:4000";

const LinkForm = ({ links, setLinks }) => {
	const { colorMode } = useColorMode();
	const handleSubmit = async (values) => {
		try {
			const res = await Axios.post(BASE_URL, {
				url: values.url
			});
			console.log(res.data);
			const { status, payload } = res.data;
			if (status === 200) {
				const newLink = { id: payload.id, url: payload.url };
				console.log(newLink);
				setLinks([ newLink, ...links ]);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Box mt="-3rem">
			<Formik
				initialValues={{
					url: ""
				}}
				validationSchema={SignupSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<Flex
							direction={{ base: "column", md: "row" }}
							p=".5rem"
							backgroundColor="blue.700"
							rounded="lg"
						>
							<Box width={[ "100%", "100%", "80%" ]}>
								<Field name="url">
									{({ field, form }) => (
										<FormControl
											isInvalid={form.errors.url && form.touched.url}
										>
											<Input
												{...field}
												id="url"
												placeholder="Shorten your link"
												size="lg"
												backgroundColor={
													colorMode === "light" ? "gray.100" : "blue.600"
												}
											/>
											<FormErrorMessage>{form.errors.url}</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Box>
							<Flex width={[ "100%", "100%", "20%" ]} justify="flex-end">
								<Button
									type="submit"
									size="lg"
									variantColor="blue"
									width={[ "100%", "100%", "90%" ]}
									mt={[ ".5rem", ".5rem", "0" ]}
								>
									Shorten
								</Button>
							</Flex>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default LinkForm;
