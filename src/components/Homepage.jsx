import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleList from './ArticleList';
import { getArticles } from '../api';


export function Homepage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') || '';
  const sortByParam = searchParams.get('sortBy') || 'created_at';
  const sortOrderParam = searchParams.get('order') || 'desc';
  
  const [sortBy, setSortBy] = useState(sortByParam);
  const [sortOrder, setSortOrder] = useState(sortOrderParam);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    getArticles(topic)
      .then(data => {
        let sortedArticles = data.articles;
        if (sortBy) {
          sortedArticles = sortedArticles.sort((a, b) => {
            let valueA = a[sortBy];
            let valueB = b[sortBy];

            if (sortBy === 'comment_count') {
              valueA = Number(a[sortBy]);
              valueB = Number(b[sortBy]);
            }

            if (sortOrder === 'asc') {
              return valueA > valueB ? 1 : -1;
            } else {
              return valueA < valueB ? 1 : -1;
            }
          });
        }
        setArticles(sortedArticles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles. Please try again later.');
        setLoading(false);
      });
  }, [topic, sortBy, sortOrder]);

  const handleSortByChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setSearchParams({ topic, sortBy: newSortBy, order: sortOrder });
  };

  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    setSearchParams({ topic, sortBy, order: newSortOrder });
  };

  if (loading) {
    return <div>Page is loading...</div>;
  }

  return (
    <main>
      {error && <div className="error-message">{error}</div>}
      <div className="sort-section">
        <div className="sort-dropdown">
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        </div>
        <div className="sort-dropdown">
        <label>Order:</label>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        </div>
      </div>
      <ArticleList articles={articles} />
    </main>
  );
}

