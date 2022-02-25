import React from "react";
import { Route } from "react-router-dom";
import { Admin, Crypto } from "./Pages";

const App = () => {
	return (
		<>
			<Route path="/" component={Crypto} exact />
			<Route path="/nmradmin" component={Admin} />
		</>
	);
};

export default App;
