import React, { useState } from "react";

export function CommentForm({ onSubmit }) {

  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !body) {
      alert("Please fill out all fields.");
      return;
    }
    onSubmit({ author, body });
    setAuthor("");
    setBody("");
  };

  return (
    <form>
      <label>
        Author Name:{" "}
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Comment:{" "}
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>Post Comment</button>
    </form>
  );
}
