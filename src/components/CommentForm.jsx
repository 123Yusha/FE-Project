import React, { useState } from "react";

export function CommentForm({ handlePostComment }) {
  const [commentBody, setCommentBody] = useState("");
  const [author, setAuthor] = useState("");

  let currentDate = new Date();
  let formattedDate = currentDate.toISOString();

const handleSubmit = (e) => {
    e.preventDefault();

    const newCommentData = {
    article_id: articleId,
    author: author,
    body: commentBody,
    comment_id: 12,
    created_at: formattedDate,
    votes: 0
};

    handlePostComment(newCommentData);
    setCommentBody("");
    setAuthor("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Post Comment</button>
    </form>
  );
}
