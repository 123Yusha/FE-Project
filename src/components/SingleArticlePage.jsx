import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, postComment, deleteComment } from "../api";
import { ArticleComments } from "./ArticleComments";
import { VotingButtons } from "./VotingButtons";
import { CommentForm } from "./CommentForm";
import { DeleteComment } from "./DeleteComment";
import NotFound from "./NotFound";

export function SingleArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError()

    getArticleById(id)
      .then((data) => {
        if (!data.article) {
          setError("Article not found");
          setLoading(false);
          return;
        }
        setArticle(data.article);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
        setError("Error fetching article")
        setLoading(false);
      });
    getCommentsByArticleId(id)
      .then((data) => {
        setComments(data.comments);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);

  const handleCommentDelete = (deletedCommentId) => {
    setComments((prevComments) => prevComments.filter(comment => comment.comment_id !== deletedCommentId));
  };

  if (loading) {
    return <div>Page is loading...</div>;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <main className='article-list'>
      <div className="article-card">
        <h2>{article.title}</h2>
        <p className="body-text">
          An article about {article.topic} written by {article.author} on{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>
        <img src={article.article_img_url} alt={article.title} />
        <p className="body-text">{article.body}</p>
        <h3>Article votes:</h3>
        <VotingButtons articleId={article.article_id} initialVotes={article.votes} />
        <h3>Add A Comment:</h3>
        <p className="body-text">This article has been commented on {article.comment_count} times!</p>
        <CommentForm setComments={setComments} article_id={article.article_id} />
        <ArticleComments comments={comments} setComments={setComments} />
      </div>
    </main>
  );
}
