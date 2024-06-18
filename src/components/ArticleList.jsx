import React from "react";
import { getArticles } from "../api";
import { useState, useEffect } from "react";

export default function ArticleList({filterTopic}) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        getArticles(filterTopic)
            .then(data => {
                setArticles(data.articles); 
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, [filterTopic]);
    return (
        <main>
            <h2> Articles </h2>
            { articles.map((article, index) => 
            (
                <div key={index}>
                    <h3>{article.title}</h3>
                    <img src={article.article_img_url} alt={article.title} />
                </div>
            ))}
        </main>
    )
}