import { Action, ActionTypes } from './types';

export const setError = (errors: []): Action => {
    return {
        type: ActionTypes.SET_ERRORS,
        payload: errors
    }
}

export const setLogged = (loged:boolean): Action => {
    return {
        type: ActionTypes.SET_ERRORS,
        payload: loged
    }
}

export const saveSession = (session:string): Action => {
    return {
        type: ActionTypes.SAVE_SESSION,
        payload: session
    }
}


export const setToken = (token:string): Action => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: token
    }  
}

export const setLoading = (loading:boolean): Action => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: loading
    }  
}

export const setUser = (user:User): Action =>{
    return {
        type: ActionTypes.SET_USER,
        payload:user
    }
}

