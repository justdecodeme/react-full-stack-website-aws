import React, { useState, useEffect } from "react";

import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddCommentForm";
import NoFoundPage from "./NoFoundPage";

export default function ArticlePage({ match }) {
	const name = match.params.name;
	const article = articleContent.find((article) => article.name === name);

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

	useEffect(() => {
		// setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
		const fetchData = async () => {
			const result = await fetch(`/api/articles/${name}`);
			const body = await result.json();
			console.log(result);
			console.log(body);
			setArticleInfo(body);
		};
		fetchData();
	}, [name]);

	if (!article) return <NoFoundPage />;
	// if (!article) return <h1>Article doesn't exist!</h1>;

	const otehrArticles = articleContent.filter((article) => article.name !== name);

	return (
		<>
			<h1>{article.title}</h1>
			<UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
			<h1>Other Articles:</h1>
			<ArticlesList articles={otehrArticles} />
		</>
	);
}
