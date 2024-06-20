import React from "react";
import { Link } from "react-router-dom";


export function Nav({ setFilterTopic, filterTopic }) {
    const handleTopicChange = (topic) => {
      setFilterTopic(topic);
    };
  
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => handleTopicChange('')}>
              All Articles
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleTopicChange('coding')}>
              Coding Articles
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleTopicChange('cooking')}>
              Cooking Articles
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleTopicChange('football')}>
              Football Articles
            </Link>
          </li>
        </ul>
      </nav>
    );
  }