import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticlesListPage";
import NoFoundPage from "./pages/NoFoundPage";
import NavBar from "./NavBar";
import "./App.css";

export default function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div id="page-body">
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} />
						<Route path="/articles-list" component={ArticleListPage} />
						<Route path="/article/:name" component={ArticlePage} />
						<Route component={NoFoundPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}
