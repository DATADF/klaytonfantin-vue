import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://klaytonfantin.dev/wp-json/api/v1/'
})