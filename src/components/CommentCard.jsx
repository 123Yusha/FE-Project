import { DeleteComment } from "./DeleteComment"
import { useState } from "react"


export function CommentCard({comment, setComments}) {
    const [clickDelete, setClickDelete] = useState(false)

    const handleClick = () => {
        setClickDelete(true)
    }

    return(
        <div key={comment.comment_id} className="comment">
                <h3>Read Comments:</h3>
                <p><strong>Written by {comment.author} on {new Date(comment.created_at).toLocaleDateString()}:</strong><br />"{comment.body}"</p>
                <button onClick={handleClick}>Delete Comment</button>
                {clickDelete ? <DeleteComment comment={comment} setComments={setComments} setClickDelete={setClickDelete} /> : null }
            </div>
    )
}