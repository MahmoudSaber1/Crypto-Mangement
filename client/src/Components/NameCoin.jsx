import {
	FormControl,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const NameCoin = ({ value, src }) => {
	return (
		<InputGroup>
			<FormControl isReadOnly>
				<InputGroup size="md">
					<InputLeftElement>
						<Image
							boxSize={{ md: "100%", base: "50%" }}
							objectFit="cover"
							src={src}
						/>
					</InputLeftElement>
					<Input
						type="tel"
						value={value}
						fontSize={{ md: "18", base: "10" }}
						padding={{ md: "1rem", base: ".45rem" }}
					/>
				</InputGroup>
			</FormControl>
		</InputGroup>
	);
};

export default NameCoin;
