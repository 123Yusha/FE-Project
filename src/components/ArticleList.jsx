import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <main>
      <h2>News Articles:</h2>
      {articles.map((article) => (
        <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h2>{article.title}</h2>
            <p>Written by {article.author} on {new Date(article.created_at).toLocaleDateString()}. <br />
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
