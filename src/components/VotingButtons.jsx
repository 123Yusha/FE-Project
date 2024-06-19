import React from "react";
import { useState } from "react";
import { patchDownVoteArticle, patchUpVoteArticle } from "../api";

export function VotingButtons({ articleId, initialVotes}) {
const [votes, setVotes] = useState(initialVotes)
const [error, setError] = useState(null)


const handleUpVote = () => {
    setVotes(votes + 1)
    patchUpVoteArticle(articleId)
    .catch(error => {
        setError("Failed to register vote")
        console.log("Error with vote increment:", error)
        setVotes(votes -1)
    })
}

const handleDownVote = () => {
    setVotes(votes -1)
    patchDownVoteArticle(articleId)
    .catch(error => {
        setError("Failed to register vote")
        console.log("Error with vote decrement:", error)
        setVotes(votes +1)
    })
}
return (
    <div className="voting-buttons">
      <button onClick={handleUpVote}>I like this article &#128522; </button>
      <button onClick={handleDownVote}>I dislike this article &#128545; </button>
      <p>For every like, the vote increases. For every dislike, the vote decreases. This article is currently sat on {votes} votes.</p>
      {error && <p className="error">{error}</p>}
    </div>
)


}