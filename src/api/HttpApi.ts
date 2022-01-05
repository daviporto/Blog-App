import axios, { AxiosInstance } from 'axios'

const baseUrl = 'https://d50c-2804-2488-308b-9ca0-f68d-23f6-4b94-bd95.ngrok.io/api'

export default axios.create({
    baseURL: baseUrl,
})

export  const withAuthentication = (token:string):AxiosInstance =>  {
    
    return axios.create({
        baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    }
    })
}