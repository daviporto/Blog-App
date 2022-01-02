import { Action, ActionTypes } from './types';

export const setPosts = (posts: []): Action => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts
    }
}

export const setErrors = (errors: []): Action => {
    return {
        type: ActionTypes.SET_ERRORS,
        payload: errors
    }
}

export const nextPage = (): Action => {
    return {
        type: ActionTypes.NEXT_PAGE,
        payload: ''
    }
}

export const resetPage = (): Action => {
    return {
        type: ActionTypes.RESET_PAGE,
        payload: ''
    }
}

export const clearPosts = (): Action => {
    return {
        type: ActionTypes.CLEAR_POST,
        payload: ''
    }
}





