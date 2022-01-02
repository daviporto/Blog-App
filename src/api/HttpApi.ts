import axios, { AxiosInstance } from 'axios'

const baseUrl = 'https://1336-2804-2488-308f-b300-9f33-b20c-cfc9-286a.ngrok.io/api'

export default axios.create({
    baseURL: baseUrl,
})

export  const withAuthentication = (token:string):AxiosInstance =>  {
    console.log(`Bearer ${token}`);
    
    return axios.create({
        baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    }
    })
}