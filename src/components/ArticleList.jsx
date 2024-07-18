import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  const location = useLocation();
  const [topic, setTopic] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const topicParam = searchParams.get('topic') || '';
    setTopic(topicParam);
  }, [location.search]);

  return (
    <main className="article-list"> 
      <h1>{topic ? `${topic.charAt(0).toUpperCase()}${topic.slice(1)} Articles` : 'All Articles'}</h1>
      {articles.map((article) => (
        <div key={article.article_id} className='article-card'>
          <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
            <p className="body-text">Written by {article.author} on {new Date(article.created_at).toLocaleDateString()}. <br />
            Article Votes: {article.votes} <br />
            Article Comment Count: {article.comment_count}</p>
            <img src={article.article_img_url} alt={article.title} />
          </Link>
        </div>
      ))}
    </main>
  );
};

export default ArticleList;

