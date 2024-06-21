import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <main>
      <h2>Articles</h2>
      {articles.map((article) => (
        <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} />
          </Link>
        </div>
      ))}
    </main>
  );
};

export default ArticleList;
