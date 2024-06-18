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
        <label>Select news category: </label>
        <select 
        name="topics"
        id="topics"
        onChange={handleChange}>
          <option value="" >All Articles</option>
          <option value="coding">Coding Articles</option>
          <option value="cooking">Cooking Articles</option>
          <option value="football">Football Articles</option>
        </select>
    </nav>
)
}