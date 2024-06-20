import React, { useState } from "react";
import { postComment } from "../api";

const validUsernames = [
  "tickle122",
  "grumpy19",
  "happyamy2016",
  "cooljmessy",
  "weegembump",
  "jessjelly"
];

export function CommentForm({ setComments, article_id }) {

  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!author || !body) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validUsernames.includes(author)) {
      alert("Please enter a valid username. For testing purposes, use tickle122");
      return;
    }

    const newCommentData = {
      body: body, 
      username: author,
    };

    postComment(article_id, newCommentData)
      .then((newComment) => {
        setComments(currentcomments => ([newComment.comment, ...currentcomments]));
        alert("Comment posted!");
      })
      .catch((error) => {
        alert("Failed to post comment", error);
      });

    setAuthor("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author-name">Username:</label>
        <input
          type="text"
          placeholder="Enter valid username"
          id="author-name"
          name="author-name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <label htmlFor="new-comment" style={{ marginRight: '10px' }}>
          New Comment:
        </label>
        <textarea
          id="new-comment"
          placeholder="Enter new comment"
          name="new-comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows="4"
          cols="50"
        />
      </div>
      <br />
      <label htmlFor="postcomment">Click to post comment:</label>
      <button id="postcomment" type="submit">Post Comment</button>
      <br />
    </form>
  );
}

export default CommentForm;
