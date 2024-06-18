import axios from "axios"

const myApi = axios.create({
baseURL: "https://be-project-nc.onrender.com/api"
})

export const getArticles = (filterTopic) => {
    console.log(filterTopic)
    return myApi.get("/articles", {params: {topic: filterTopic}}).then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch(error => {
        console.log("Error fetching articles:", error)
    })
}



