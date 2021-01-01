import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default function App() {
	return (
		<Router>
			<h1>App</h1>
			<Route path="/" component={HomePage} exact />
		</Router>
	);
}
