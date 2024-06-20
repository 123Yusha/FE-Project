import React, { useState } from "react";
import { getCommentsByArticleId, deleteComment } from "../api";

 export function DeleteComment({comment, setComments, setClickDelete}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    if(username !== comment.author) {
        setMessage("Username invalid. Check spelling and ensure you are only trying to delete your own comment!");
        return;
    }
    if(password !== "password") {
        setMessage("Incorrect password.");
        return;
    }
        deleteComment(comment.comment_id)
          .then(() => {
            setComments((currentcomments) => {
             return currentcomments.filter((item) => item.comment_id !== comment.comment_id )})
            setMessage("Comment deleted successfully.");
            setClickDelete(false)
          })
          .catch((error) => {
            console.log(error)
            setMessage("Error deleting comment:"+ error);
          });

  };

  return (
    <div>
      <h3>Delete Comment</h3>
      <form onSubmit={handleDelete}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            placeholder="password is password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete Comment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


