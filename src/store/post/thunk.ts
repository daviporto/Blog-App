import { AppThunk } from "..";
import { deletePostApi, editPostApi, getPostsApi } from "../../api/PostApi";
import { back, clearStack } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import { addBeginning, clearPosts, nextPage, overwriteEdited, removeDeleted, resetPage, setErrors, setPosts } from "./actions";
import { newPostApi } from "../../api/PostApi";
import { getSession } from "../../api/UserApi";
import { setLoading } from "../user/actions";

function handleError(e:any, dispatch:any){
    console.log(e)
    const errors: any = []
    if (e.response.status == 500)
        errors.push("unable to connect with the server please try again later")

    if (e.response.status == 401) errors.push('email or password is incorrect')

    dispatch(setErrors(errors))

}


//try to get posts from the server
export const fetchPosts = (page: number): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//Se não possuir token redireciona para a tela de login
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await getPostsApi(token, page)
            dispatch(setPosts(response.data.data))
            dispatch(nextPage())// paginator do laravel

        } catch (e: any) {
            handleError(e, dispatch)
        }
    }
}

export const resetTimeLine = (): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//Se não possuir token redireciona para a tela de login
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await getPostsApi(token, 1)//page == laravel paginator 
            dispatch(setPosts(response.data.data))
            dispatch(nextPage())// paginator do laravel

        } catch (e: any) {
            handleError(e, dispatch)
        }
    }
}

export const newPost = (content: string): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//Se não possuir token redireciona para a tela de login
    else {
        dispatch(setLoading(true))
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await newPostApi(token, content)
            dispatch(addBeginning(response.data))//adiciona no comço do array de posts 
            back()//retorna para a timeline 
        } catch (e: any) {
            handleError(e, dispatch)
        }finally{
            dispatch(setLoading(false))
        }
    }
}


export const editPost = (post:Post, newContent: string): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//Se não possuir token redireciona para a tela de login
    else {
        dispatch(setLoading(true))
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await editPostApi(token, newContent, post.id)
            dispatch(overwriteEdited(response.data))
            back()//volta para a tela anterior(timeline)

        } catch (e: any) {
            handleError(e, dispatch)
        }finally{
            dispatch(setLoading(false))
        }
    }
}

export const deletePost = (id: number): AppThunk => async (dispatch) => {
    let token: string | null = await getSession()//jwtToken
    if (token == null) clearStack(Routes.SING_IN)//Se não possuir token redireciona para a tela de login
    else {
        token = token.replace(/['"]+/g, '')// removing trailing (')
        try {
            const response = await deletePostApi(token, id)
            dispatch(removeDeleted(response.data))//remove o post do state 

        } catch (e: any) {
            handleError(e, dispatch)
        }
    }
}



