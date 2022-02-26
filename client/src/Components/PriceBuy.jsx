import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
	Badge,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const PriceBuy = ({ value, arrowUp, arrowDown }) => {
	return (
		<FormControl isReadOnly>
			<InputGroup size="md">
				<InputLeftElement width="2.5rem">
					<Badge variant="solid" colorScheme={arrowUp ? "green" : "red"}>
						{arrowUp ? <ArrowUpIcon /> : <ArrowDownIcon />}
					</Badge>
				</InputLeftElement>
				<Input
					pr="1.5rem"
					type="text"
					value={value}
					fontSize={{ md: "18", base: "12" }}
					padding={{ md: "1rem", base: ".45rem" }}
				/>
			</InputGroup>
		</FormControl>
	);
};

export default PriceBuy;
