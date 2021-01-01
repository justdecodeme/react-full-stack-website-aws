import React from "react";

import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NoFoundPage from "./NoFoundPage";

export default function ArticlePage({ match }) {
	const name = match.params.name;
	const article = articleContent.find((article) => article.name === name);

	if (!article) return <NoFoundPage />;
	// if (!article) return <h1>Article doesn't exist!</h1>;

	const otehrArticles = articleContent.filter(
		(article) => article.name !== name
	);

	return (
		<>
			<h1>{article.title}</h1>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<h1>Other Articles:</h1>
			<ArticlesList articles={otehrArticles} />
		</>
	);
}
