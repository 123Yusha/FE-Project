import React from "react";


export function ArticleComments({ comments }) {
    if (!comments || comments.length === 0) {
        return <p>No comments yet!</p>; }
return (
    <section className="comments">
        {comments.length === 0 ? (<p>No comments yet!</p>) : (
        
        comments.map(comment => (
            <div key={comment.comment_id} className="comment">
                <p><strong>Written by {comment.author} on {new Date(comment.created_at).toLocaleDateString()}:</strong><br />"{comment.body}"</p>
            </div>
        )))}
    </section>
)
}