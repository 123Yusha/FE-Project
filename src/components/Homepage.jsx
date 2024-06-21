import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleList from "./ArticleList";
import { getArticles } from "../api";

export function Homepage( {filterTopic}) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const topic = searchParams.get('topic') || filterTopic

    useEffect(() => {
        setLoading(true);
        getArticles(topic)
          .then(data => {
            setArticles(data.articles);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching articles:', error);
          });
      }, [topic]);
    
      if (loading) {
        return <div>Page is loading...</div>;
      }

return (
    <main>
     <ArticleList articles={articles} />
    </main>
)
}