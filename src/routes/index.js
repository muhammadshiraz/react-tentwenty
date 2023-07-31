import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const Routing = () => (
	<Routes>
		<Route exact path="/" element={<Home />} />
	</Routes>
);

export default Routing;
