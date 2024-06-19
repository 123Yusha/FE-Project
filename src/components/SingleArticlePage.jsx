import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, postComment } from "../api";
import { ArticleComments } from "./ArticleComments";
import { VotingButtons } from "./VotingButtons";
import { CommentForm } from "./CommentForm";

export function SingleArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticleById(id)
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
    getCommentsByArticleId(id)
      .then((data) => {
        console.log(data.comments, "<<<<<<<<<<<<<<here")
        setComments(data.comments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  const addComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  const handlePostComment = (newCommentData) => {
    postComment(article.article_id, newCommentData)
      .then((newComment) => {
        addComment(newComment);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  if (loading) {
    return <div>Page is loading...</div>;
  }

  return (
    <main>
      <div className="single-article">
        <h2>{article.title}</h2>
        <p>
          An article about {article.topic} written by {article.author} on{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <h3>Article votes:</h3>
        <VotingButtons articleId={article.article_id} initialVotes={article.votes} />
        <h3>Comments:</h3>
        <p>This article has been commented on {article.comment_count} times!</p>
        <CommentForm handlePostComment={handlePostComment} />
        <ArticleComments comments={comments} />
      </div>
    </main>
  );
}
