import React from "react";

import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";

export default function ArticleListPage() {
	return (
		<>
			<h1>Articles</h1>
			<ArticlesList articles={articleContent} />
		</>
	);
}
