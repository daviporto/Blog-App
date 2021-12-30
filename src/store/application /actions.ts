import { Action, ActionTypes } from './types';


export const SetErrors = (loged:boolean): Action => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: loged
    }
}


export const setLoading = (loading:boolean): Action => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: loading
    }  
}

export const setLogged = (logged:boolean): Action =>{
    return{
        type:ActionTypes.SET_LOGGED,
        payload:logged
    }
}


