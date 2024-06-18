import React from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";
import { useState, useEffect } from "react";

export default function ArticleList({filterTopic}) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getArticles(filterTopic)
            .then(data => {
                setArticles(data.articles); 
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, [filterTopic]);

    if (loading) {
        return <div>Page is loading...</div>;
      }
      
    return (
        <main>
            <h2> Articles </h2>
            { articles.map((article, index) => 
            (
                <div key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}>
                        <h3>{article.title}</h3>
                        <img src={article.article_img_url} alt={article.title} />
                    </Link>
                </div>
            ))}
        </main>
    )
}