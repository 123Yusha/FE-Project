import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Nav({ setFilterTopic }) {

    const navigate= useNavigate();

    const handleTopicChange = (topic) => {
      setFilterTopic(topic);
      navigate(`/?topic=${topic}`);
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
            <Link to="/?topic=coding" onClick={() => handleTopicChange('coding')}>
              Coding Articles
            </Link>
          </li>
          <li>
            <Link to="/?topic=cooking" onClick={() => handleTopicChange('cooking')}>
              Cooking Articles
            </Link>
          </li>
          <li>
            <Link to="/?topic=football" onClick={() => handleTopicChange('football')}>
              Football Articles
            </Link>
          </li>
        </ul>
      </nav>
    );
  }