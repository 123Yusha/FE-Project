import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Import the CSS file for Nav styling

export function Nav() {
  const location = useLocation();

  // Function to determine if a link should be active based on query parameter
  const isActive = (topic) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('topic') === topic;
  };

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/" className={`nav-link ${isActive('') ? 'active-link' : ''}`}>
            All Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=coding" className={`nav-link ${isActive('coding') ? 'active-link' : ''}`}>
            Coding Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=cooking" className={`nav-link ${isActive('cooking') ? 'active-link' : ''}`}>
            Cooking Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=football" className={`nav-link ${isActive('football') ? 'active-link' : ''}`}>
            Football Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
