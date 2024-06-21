import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            All Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=coding">
            Coding Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=cooking">
            Cooking Articles
          </Link>
        </li>
        <li>
          <Link to="/?topic=football">
            Football Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
