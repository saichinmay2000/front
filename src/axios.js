import axios from 'axios'

const instance = axios.create({
    baseURL: "https://movie-db-admin.herokuapp.com/"
})

export default instance;