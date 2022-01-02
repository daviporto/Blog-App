import { AppThunk } from "..";
import { deletePostApi, editPostApi, getPostsApi } from "../../api/PostApi";
import { clearStack } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import { clearPosts, nextPage, resetPage, setErrors, setPosts } from "./actions";
import { newPostApi } from "../../api/PostApi";
import { getSession } from "../../api/UserApi";


//try to get posts from the server
export const fetchPosts = (page: number): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//if not logged redirect to login screen 
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await getPostsApi(token, page)
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

export const resetTimeLine = (): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//if not logged redirect to login screen 
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await getPostsApi(token, 1)//page stands for laravel paginator 
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

export const newPost = (content: string): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//if not logged redirect to login screen
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await newPostApi(token, content)
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


export const editPost = (id: number, newContent: string): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//if not logged redirect to login screen
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await editPostApi(token, newContent, id)
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

export const deletePost = (id: number): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//if not logged redirect to login screen
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await deletePostApi(token, id)
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



