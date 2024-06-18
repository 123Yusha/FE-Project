import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { getArticles } from './api';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { SingleArticlePage } from './components/SingleArticlePage';

const App = () => {
  const [filterTopic, setFilterTopic] = useState("");

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav setFilterTopic={setFilterTopic} />
        <Routes>
          <Route path="/" element={<Homepage filterTopic={filterTopic} />}/>
          
          <Route path="/articles/:id" element={<SingleArticlePage />} />
       </Routes>
       </div>
    </BrowserRouter>
  );
};

export default App;
