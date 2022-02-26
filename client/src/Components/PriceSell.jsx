import { FormControl, Input } from "@chakra-ui/react";
import React from "react";

const PriceSell = ({ value }) => {
	return (
		<FormControl isReadOnly>
			<Input
				type="text"
				value={value}
				fontSize={{ md: "18", base: "12" }}
				padding={{ md: "1rem", base: ".45rem" }}
			/>
		</FormControl>
	);
};

export default PriceSell;
