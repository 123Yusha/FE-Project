import { axios } from "axios";

const myApi = axios.create({
baseUrl: "https://be-project-nc.onrender.com/api"
})

export const getArticles = () => {
    return myApi.get("/articles").then((response) => {
        return response.data
    })
}