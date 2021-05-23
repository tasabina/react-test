import axios from 'axios'

export default axios.create({
    // baseURL: 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api'
    baseURL: 'http://127.0.0.1:8000'
})