import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";


export function SingleArticlePage() {
const { id } = useParams()
const [article, setArticle] = useState({})

useEffect(() => {
    getArticleById(id)
      .then(data => {
        setArticle(data.article);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  return (
    <main>
        <div className="single-article">
            <h2>{article.title}</h2>
            <p>An article about {article.topic} written by {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
            <h3>Likes:</h3>
            <p>{article.votes} People say they liked this article!</p>
            <h3>Comments:</h3>
            <p>This article has been commented on {article.comment_count} times!</p>
         </div>
    </main>
  )

}