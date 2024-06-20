import React from "react";
import { CommentCard } from "./CommentCard";

export function ArticleComments({ comments, setComments }) {
    
   

    if (!comments || comments.length === 0) {
        return <p>No comments yet!</p>; }
return (
    <section className="comments">
        {comments.length === 0 ? (<p>No comments yet!</p>) : (
        
        comments.map(comment => (
            < CommentCard key={comment.comment_id} comment={comment} setComments={setComments}/>
        )))}
    </section>
)
}