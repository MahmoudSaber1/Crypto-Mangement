import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	VStack,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import usdt from "../assist/usdt.png";
import pr from "../assist/pr.png";
import py from "../assist/py.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { NameCoin } from "../Components";

// Price Sell COmponent
const PriceSell = ({ handelPrice1 }) => {
	return (
		<FormControl>
			<Input type="text" onChange={handelPrice1} />
		</FormControl>
	);
};

// Price Buy Component
const PriceBuy = ({ handelPriceBuy, handleClickUp, handleClickDown }) => {
	return (
		<InputGroup size="md">
			<InputLeftElement width="4.5rem">
				<Button h="1.75rem" size="sm" ml="2" value="Up" onClick={handleClickUp}>
					<ArrowUpIcon color="lime" value="Up" />
				</Button>
				<Button
					h="1.75rem"
					size="sm"
					ml="2"
					value="Down"
					onClick={handleClickDown}
				>
					<ArrowDownIcon color="red.400" value="Down" />
				</Button>
			</InputLeftElement>
			<Input pr="1.5rem" type="text" onChange={handelPriceBuy} />
		</InputGroup>
	);
};

// Main Component
const Admin = () => {
	// UseHistory For Redirect to Clint After Update All Data
	const history = useHistory();

	// Key Value For Login And Login Stat
	const [keyValue, setKeyValue] = useState("");
	const [loginStat, setLoginStat] = useState("");

	// Send Data Login To Backend
	const sendKey = () => {
		axios
			// http://localhost:5000 is my Connect Api
			// You Will Change it to Your Link : like as (https://example.com/)
			// IMportant ******* Dont Change /prices Cuz that is Params For Call Apu ********
			.post("http://localhost:5000/login", {
				keyValue: keyValue,
			})
			.then((response) => {
				setLoginStat(response.data.status);
			})
			.catch((err) => console.log(err));
	};

	// PriceSell Value
	const [PriceSell1, setPriceSell1] = useState(0);
	const [PriceSell2, setPriceSell2] = useState(0);
	const [PriceSell3, setPriceSell3] = useState(0);
	const [PriceSell4, setPriceSell4] = useState(0);

	const handelPrice1 = (e) => {
		setPriceSell1(e.target.value);
	};
	const handelPrice2 = (e) => {
		setPriceSell2(e.target.value);
	};
	const handelPrice3 = (e) => {
		setPriceSell3(e.target.value);
	};
	const handelPrice4 = (e) => {
		setPriceSell4(e.target.value);
	};

	// PriceBuy Value
	const [PriceBuy1, setPriceBuy1] = useState(0);
	const [PriceBuy2, setPriceBuy2] = useState(0);
	const [PriceBuy3, setPriceBuy3] = useState(0);
	const [PriceBuy4, setPriceBuy4] = useState(0);

	const handelPriceBuy1 = (e) => {
		setPriceBuy1(e.target.value);
	};
	const handelPriceBuy2 = (e) => {
		setPriceBuy2(e.target.value);
	};
	const handelPriceBuy3 = (e) => {
		setPriceBuy3(e.target.value);
	};
	const handelPriceBuy4 = (e) => {
		setPriceBuy4(e.target.value);
	};

	// Get Arrow VAlue
	const [arrowUp1, setArrowUp1] = useState("");
	const [arrowUp2, setArrowUp2] = useState("");
	const [arrowUp3, setArrowUp3] = useState("");
	const [arrowUp4, setArrowUp4] = useState("");
	const [arrowDown1, setArrowDown1] = useState("");
	const [arrowDown2, setArrowDown2] = useState("");
	const [arrowDown3, setArrowDown3] = useState("");
	const [arrowDown4, setArrowDown4] = useState("");

	const handleClickUp = (e) => {
		setArrowUp1(e.target.value);
	};
	const handleClickUp2 = (e) => {
		setArrowUp2(e.target.value);
	};
	const handleClickUp3 = (e) => {
		setArrowUp3(e.target.value);
	};
	const handleClickUp4 = (e) => {
		setArrowUp4(e.target.value);
	};

	const handleClickDown = (e) => {
		setArrowDown1(e.target.value);
	};
	const handleClickDown2 = (e) => {
		setArrowDown2(e.target.value);
	};
	const handleClickDown3 = (e) => {
		setArrowDown3(e.target.value);
	};
	const handleClickDown4 = (e) => {
		setArrowDown4(e.target.value);
	};

	// Send Data to Backend
	const sendData = () => {
		axios
			// http://localhost:5000 is my Connect Api
			// You Will Change it to Your Link : like as (https://example.com/)
			// IMportant ******* Dont Change /prices Cuz that is Params For Call Apu ********
			.post("http://localhost:5000/prices", {
				PriceSell1: PriceSell1,
				PriceSell2: PriceSell2,
				PriceSell3: PriceSell3,
				PriceSell4: PriceSell4,

				PriceBuy1: PriceBuy1,
				PriceBuy2: PriceBuy2,
				PriceBuy3: PriceBuy3,
				PriceBuy4: PriceBuy4,

				arrowUp1: arrowUp1,
				arrowUp2: arrowUp2,
				arrowUp3: arrowUp3,
				arrowUp4: arrowUp4,
				arrowDown1: arrowDown1,
				arrowDown2: arrowDown2,
				arrowDown3: arrowDown3,
				arrowDown4: arrowDown4,
			})
			.then(() => {
				history.push("/");
			})
			.catch((err) => {
				console.log(err);
				history.push("/nmradmin");
			});
	};

	return (
		<>
			<Container maxW="full">
				<VStack style={{ padding: "50px 0" }} gap="10">
					<Box
						boxShadow="dark-lg"
						p="10"
						w="full"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
					>
						<FormControl colorScheme="yellow">
							<FormLabel htmlFor="key" color="#F2A900" fontWeight="bold" mb="5">
								???????? ?????????? ????????????
							</FormLabel>
							<Input
								id="key"
								color="#F2A900"
								value={keyValue}
								type="text"
								onChange={(e) => setKeyValue(e.target.value)}
							/>
						</FormControl>
						<Button color="#F2A900" mt="3" w="fit-content" onClick={sendKey}>
							?????????? ????????????
						</Button>
					</Box>
					{loginStat === "OK" ? (
						<>
							<Box
								display="flex"
								justifyContent="space-between"
								flexDirection={{ md: "row", base: "column" }}
								gap="8"
								boxShadow="dark-lg"
								w="full"
								p="3"
								textAlign="center"
							>
								<Box w="full" display="flex" flexDirection="column" gap="6">
									<Heading fontSize={{ sm: "xl", base: "sm" }} color="#F2A900">
										?????? ??????????
									</Heading>
									<PriceSell handelPrice1={handelPrice1} />
									<PriceSell handelPrice1={handelPrice2} />
									<PriceSell handelPrice1={handelPrice3} />
									<PriceSell handelPrice1={handelPrice4} />
								</Box>
								<Box w="full" display="flex" flexDirection="column" gap="6">
									<Heading fontSize={{ sm: "xl", base: "sm" }} color="#F2A900">
										?????? ????????????
									</Heading>
									<PriceBuy
										handelPriceBuy={handelPriceBuy1}
										handleClickUp={handleClickUp}
										handleClickDown={handleClickDown}
									/>
									<PriceBuy
										handelPriceBuy={handelPriceBuy2}
										handleClickUp={handleClickUp2}
										handleClickDown={handleClickDown2}
									/>
									<PriceBuy
										handelPriceBuy={handelPriceBuy3}
										handleClickUp={handleClickUp3}
										handleClickDown={handleClickDown3}
									/>
									<PriceBuy
										handelPriceBuy={handelPriceBuy4}
										handleClickUp={handleClickUp4}
										handleClickDown={handleClickDown4}
									/>
								</Box>
								<Box w="full" display="flex" flexDirection="column" gap="6">
									<Heading fontSize={{ sm: "xl", base: "sm" }} color="#F2A900">
										?????? ????????????
									</Heading>
									<NameCoin value="USDT(??????????)" src={usdt} />
									<NameCoin value="USDT(??????)" src={usdt} />
									<NameCoin value="Payeer" src={pr} />
									<NameCoin value="Paypal" src={py} />
								</Box>
							</Box>
							<Button color="#F2A900" onClick={sendData}>
								?????????? ??????????????????
							</Button>
						</>
					) : (
						<Heading>{loginStat === "" ? "" : "Invalide User"}</Heading>
					)}
				</VStack>
			</Container>
		</>
	);
};

export default Admin;
