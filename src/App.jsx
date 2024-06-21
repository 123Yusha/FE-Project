import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { SingleArticlePage } from './components/SingleArticlePage';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
