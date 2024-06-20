import React, { useState, useEffect } from 'react';
import ArticleList from "./ArticleList";
import { getArticles } from "../api";

export function Homepage( {filterTopic}) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getArticles(filterTopic)
          .then(data => {
            setArticles(data.articles);
            setLoading(false);
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
     <ArticleList articles={articles} />
    </main>
)
}