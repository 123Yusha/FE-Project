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



