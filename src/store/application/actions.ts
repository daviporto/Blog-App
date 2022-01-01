import { Action, ActionTypes } from './types';

export const setLoading = (loading:boolean): Action => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: loading
    }  
}



