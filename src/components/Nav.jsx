import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
return (
    <nav>
        <select
        name="topics"
        id="topics"
        onChange={handleChange}>
          <option value="articles">All Items</option>
          <option value="coding">Clothing Articles</option>
          <option value="cooking">Electronics Articles</option>
          <option value="football">Household Articles</option>
        </select>
    </nav>
)
}