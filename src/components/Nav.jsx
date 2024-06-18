import React from "react";
import { useNavigate } from "react-router-dom";


export function Nav({ setFilterTopic}) {
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFilterTopic(e.target.value)
        navigate("/")
    }

return (
    <nav>
        <select
        name="topics"
        id="topics"
        onChange={handleChange}>
          <option value="" >All Items</option>
          <option value="coding">Coding Articles</option>
          <option value="cooking">Cooking Articles</option>
          <option value="football">Football Articles</option>
        </select>
    </nav>
)
}