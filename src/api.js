import axios from "axios"

const myApi = axios.create({
baseURL: "https://be-project-nc.onrender.com/api"
})

export const getArticles = (filterTopic) => {

    return myApi.get("/articles", {params: {topic: filterTopic}}).then((response) => {
        return response.data
    })
    .catch(error => {
        console.log("Error fetching articles:", error)
    })
}

export const getArticleById = (id) => {

    return myApi.get(`/articles/${id}`).then((response) => {
        return response.data
    })
    .catch(error => {
        console.log("Error fetching articles:", error)
    })
}

export const getCommentsByArticleId = (id) => {

    return myApi.get(`/articles/${id}/comments`).then((response) => {
        return response.data
    })
    .catch(error => {
        console.log("Error fetching articles:", error)
    })
}

export const patchUpVoteArticle = (id) => {
    return myApi.patch(`/articles/${id}`, { inc_votes: 1 }).then((response) => {
      return response.data;
    });
  };
  
  export const patchDownVoteArticle = (id) => {
    return myApi.patch(`/articles/${id}`, { inc_votes: -1 }).then((response) => {
        return response.data;
      });
    };



