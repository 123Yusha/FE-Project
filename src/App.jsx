import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getArticles } from './api';
import Nav from './Nav';
import Header from './Header';
import HomePage from './HomePage';
import SingleArticlePage from './SingleArticlePage';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filterTopic, setFilterTopic] = useState(null);

  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles(data.articles);
        setFilteredArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  useEffect(() => {
    if (!filterTopic) {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.map(article => article.topic === filterTopic));
    }
  }, [filterTopic, articles]);

  return (
    <Router>
      <div className="app">
        <Nav setFilterTopic={setFilterTopic} />
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage articles={filteredArticles} />
          </Route>
          <Route path="/single-article/:id">
            <SingleArticlePage articles={articles} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
