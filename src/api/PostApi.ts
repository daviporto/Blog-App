import { AxiosResponse } from "axios"
import { withAuthentication } from "./HttpApi"

export const getPostsApi = async (JWToken:string, page:number): Promise<AxiosResponse> => {
    const response =  await withAuthentication(JWToken).get('/post',
    {params: { page: page}})
    return response
}

export const newPostApi = async (JWToken:string, content:string): Promise<AxiosResponse> => {
    const response = await withAuthentication(JWToken).post('/post', {
        content:content
    })
    return response
}

export const editPostApi = async (JWToken:string, content:string, id:number):Promise<AxiosResponse> =>{
    const response = await  withAuthentication(JWToken).post(`/post/${id}`,{
        content:content
    })
    return response
}
