import React, { useEffect, useState } from "react";
import {
	Badge,
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	Radio,
	RadioGroup,
	Select,
	Stat,
	StatLabel,
	VStack,
} from "@chakra-ui/react";
import { newTitle } from "../GeneralFunc";
import usdt from "../assist/usdt.png";
import pr from "../assist/pr.png";
import py from "../assist/py.png";
import axios from "axios";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

const PriceSell = ({ value }) => {
	return (
		<FormControl isReadOnly>
			<Input type="text" value={value} />
		</FormControl>
	);
};

const PriceBuy = ({ value, arrowUp, arrowDown }) => {
	return (
		<FormControl isReadOnly>
			<InputGroup size="md">
				<InputLeftElement width="2.5rem">
					<Badge variant="solid" colorScheme={arrowUp ? "green" : "red"}>
						{arrowUp ? <ArrowUpIcon /> : <ArrowDownIcon />}
					</Badge>
				</InputLeftElement>
				<Input pr="1.5rem" type="text" value={value} />
			</InputGroup>
		</FormControl>
	);
};

const NameCoin = ({ value, src }) => {
	return (
		<InputGroup>
			<FormControl isReadOnly>
				<Input type="tel" value={value} />
			</FormControl>
			<InputLeftAddon
				children={<Image boxSize="100%" objectFit="cover" src={src} />}
			/>
		</InputGroup>
	);
};

const Crypto = () => {
	newTitle("اسعار الوساطة الفورية في الكريبتو");

	// PriceSell Value
	const [PriceSell1, setPriceSell1] = useState(0);
	const [PriceSell2, setPriceSell2] = useState(0);
	const [PriceSell3, setPriceSell3] = useState(0);
	const [PriceSell4, setPriceSell4] = useState(0);

	// PriceBuy Value
	const [PriceBuy1, setPriceBuy1] = useState(0);
	const [PriceBuy2, setPriceBuy2] = useState(0);
	const [PriceBuy3, setPriceBuy3] = useState(0);
	const [PriceBuy4, setPriceBuy4] = useState(0);

	const [arrowUp, setArrowUp] = useState("");
	const [arrowUp2, setArrowUp2] = useState("");
	const [arrowUp3, setArrowUp3] = useState("");
	const [arrowUp4, setArrowUp4] = useState("");
	const [arrowDown, setArrowDown] = useState("");
	const [arrowDown2, setArrowDown2] = useState("");
	const [arrowDown3, setArrowDown3] = useState("");
	const [arrowDown4, setArrowDown4] = useState("");

	const [quantity, setQuantity] = useState(0);
	const [coninName, setConinName] = useState("");
	const [type, setType] = useState("");
	const [valueSe, setValueSe] = useState(0);

	const valueF = () => {
		setValueSe(0);
		if (type === "buy" && coninName === "USDT") {
			setValueSe(quantity * PriceBuy1);
		} else if (type === "buy" && coninName === "USDTEg") {
			setValueSe(quantity * PriceBuy2);
		} else if (type === "buy" && coninName === "Payear") {
			setValueSe(quantity * PriceBuy3);
		} else if (type === "buy" && coninName === "Paypal") {
			setValueSe(quantity * PriceBuy4);
		} else if (type === "sell" && coninName === "USDT") {
			setValueSe(quantity * PriceSell1);
		} else if (type === "sell" && coninName === "USDTEg") {
			setValueSe(quantity * PriceSell2);
		} else if (type === "sell" && coninName === "Payear") {
			setValueSe(quantity * PriceSell3);
		} else if (type === "sell" && coninName === "Paypal") {
			setValueSe(quantity * PriceSell4);
		}
	};

	useEffect(() => {
		axios
			.get("https://crypto-mangement-105.herokuapp.com/prices")
			.then((response) => {
				setPriceSell1(response.data[0].priceSell.pricesell1);
				setPriceSell2(response.data[0].priceSell.pricesell2);
				setPriceSell3(response.data[0].priceSell.pricesell3);
				setPriceSell4(response.data[0].priceSell.pricesell4);

				setPriceBuy1(response.data[0].priceBuy.pricebuy1);
				setPriceBuy2(response.data[0].priceBuy.pricebuy2);
				setPriceBuy3(response.data[0].priceBuy.pricebuy3);
				setPriceBuy4(response.data[0].priceBuy.pricebuy4);

				setArrowUp(response.data[0].arrowup1);
				setArrowUp2(response.data[0].arrowup2);
				setArrowUp3(response.data[0].arrowup3);
				setArrowUp4(response.data[0].arrowup4);

				setArrowDown(response.data[0].arrowdown1);
				setArrowDown2(response.data[0].arrowdown2);
				setArrowDown3(response.data[0].arrowdown3);
				setArrowDown4(response.data[0].arrowdown4);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<Container maxW="full">
				<VStack style={{ padding: "50px 0" }} gap="10">
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
								سعر البيع
							</Heading>
							<PriceSell value={PriceSell1} />
							<PriceSell value={PriceSell2} />
							<PriceSell value={PriceSell3} />
							<PriceSell value={PriceSell4} />
						</Box>
						<Box w="full" display="flex" flexDirection="column" gap="6">
							<Heading fontSize={{ sm: "xl", base: "sm" }} color="#F2A900">
								سعر الشراء
							</Heading>
							<PriceBuy
								value={PriceBuy1}
								arrowUp={arrowUp}
								arrowDown={arrowDown}
							/>
							<PriceBuy
								value={PriceBuy2}
								arrowUp={arrowUp2}
								arrowDown={arrowDown2}
							/>
							<PriceBuy
								value={PriceBuy3}
								arrowUp={arrowUp3}
								arrowDown={arrowDown3}
							/>
							<PriceBuy
								value={PriceBuy4}
								arrowUp={arrowUp4}
								arrowDown={arrowDown4}
							/>
						</Box>
						<Box w="full" display="flex" flexDirection="column" gap="6">
							<Heading fontSize={{ sm: "xl", base: "sm" }} color="#F2A900">
								اسم العملة
							</Heading>
							<NameCoin value="USDT(سوريا)" src={usdt} />
							<NameCoin value="USDT(مصر)" src={usdt} />
							<NameCoin value="Payeer" src={pr} />
							<NameCoin value="Paypal" src={py} />
						</Box>
					</Box>
					<Box
						boxShadow="dark-lg"
						display="flex"
						alignItems="center"
						flexDirection="column"
						w="50%"
						p="5"
						gap="8"
					>
						<Heading
							fontSize={{ md: "2xl", base: "sm" }}
							color="#F2A900"
							style={{ padding: "20px 0" }}
						>
							الحاسبة
						</Heading>
						<FormControl>
							<RadioGroup
								defaultValue="1"
								display="flex"
								alignItems="center"
								justifyContent="space-around"
							>
								<Radio
									colorScheme="green"
									value="sell"
									onChange={(e) => setType(e.target.value)}
								>
									بيع
								</Radio>
								<Radio
									colorScheme="red"
									value="buy"
									onChange={(e) => setType(e.target.value)}
								>
									شراء
								</Radio>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<Select
								placeholder="اسم العملة"
								textAlign="center"
								color="#F2A900"
								onChange={(e) => setConinName(e.target.value)}
								fontWeight="bold"
							>
								<option value="USDT">USDT(سوريا)</option>
								<option value="USDTEg">USDT(مصر)</option>
								<option value="Payear">Payear</option>
								<option value="Paypal">Paypal</option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="quantity" color="#F2A900" fontWeight="bold">
								الكمية
							</FormLabel>
							<Input
								id="quantity"
								color="#F2A900"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								type="text"
							/>
						</FormControl>
						<Button color="#F2A900" onClick={valueF}>
							الناتج
						</Button>
						<Stat>
							<StatLabel color="#F2A900" fontWeight="bold">
								{valueSe}
							</StatLabel>
						</Stat>
					</Box>
				</VStack>
			</Container>
		</>
	);
};

export default Crypto;
