import { AppThunk } from "..";
import { editPostApi, getPostsApi } from "../../api/PostApi";
import { clearStack } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import { clearPosts, nextPage, resetPage, setErrors, setPosts } from "./actions";
import { newPostApi } from "../../api/PostApi";
import { getSession } from "../../api/UserApi";
import posts from "../../../data";



export const fetchPosts = (JWTToken: string, page: number): AppThunk => async (dispatch) => {
    try {
        const response = await getPostsApi(JWTToken, page)
        console.log(response.data.data)
        dispatch(setPosts(response.data.data))
        dispatch(nextPage())

    } catch (e: any) {
        console.log(e)
        const errors: any = []
        if (e.response.status == 500)
            errors.push("unable to connect with the server please try again later")

        if (e.response.status == 401) errors.push('email or password is incorrect')

        setErrors(errors)
        console.log(e.response);
    }
}

export const resetTimeLine = (): AppThunk => async (dispatch) => {

    let token: string | null = await getSession()
    if (token == null) clearStack(Routes.SING_IN)
    else {
        try {
            const response = await getPostsApi(token, 1)
            console.log(response.data.data)
            dispatch(setPosts(response.data.data))
            dispatch(nextPage())

        } catch (e: any) {
            console.log(e)
            const errors: any = []
            if (e.response.status == 500)
                errors.push("unable to connect with the server please try again later")
            if (e.response.status == 401) errors.push('email or password is incorrect')
            setErrors(errors)
            console.log(e.response);
        }
    }
}

export const newPost = (JWTToken: string, content: string): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()
    if (token == null) clearStack(Routes.SING_IN)
    else {
        token = token.replace(/['"]+/g, '')
        try {
            const response = await newPostApi(token, content)
            console.log(response)
             //clearing timeline
            dispatch(clearPosts())
            dispatch(resetPage())
            clearStack(Routes.TIME_LINE)

        } catch (e: any) {
            console.log('e=', e)
            const errors: any = []
            if (e.response.status == 500)
                errors.push("unable to connect with the server please try again later")
        }
    }
}


export const editPost = (id:number, newContent:string):AppThunk => async (dispatch) =>{
    let token: string | null = await getSession()
    if (token == null) clearStack(Routes.SING_IN)
    else {
        token = token.replace(/['"]+/g, '')
        try {
            const response = await editPostApi(token, newContent, id)
            console.log(response)
            dispatch(clearPosts())
            dispatch(resetPage())
            clearStack(Routes.TIME_LINE)

        } catch (e: any) {
            console.log('e=', e)
            const errors: any = []
            if (e.response.status == 500)
                errors.push("unable to connect with the server please try again later")
        }
    }
}


