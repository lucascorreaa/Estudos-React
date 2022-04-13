import axios from 'axios'

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=c70e1f52dc4107436b76

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
})

export default api

