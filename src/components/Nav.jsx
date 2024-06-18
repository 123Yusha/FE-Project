import React from "react";
import { Link } from "react-router-dom";


export function Nav({ setFilterTopic}) {
    const handleChange = (e) => {
        setFilterTopic(e.target.value)
    }

return (
    <nav>
        <select
        name="topics"
        id="topics"
        onChange={handleChange}>
          <option value={undefined} >All Items</option>
          <option value="coding">Coding Articles</option>
          <option value="cooking">Cooking Articles</option>
          <option value="football">Football Articles</option>
        </select>
    </nav>
)
}