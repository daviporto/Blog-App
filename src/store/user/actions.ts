import { Action, ActionTypes } from './types';

export const setEmailError = (errors: string): Action => {
    console.log("in aciton")
    return {
        type: ActionTypes.SET_EMAIL_ERROR,
        payload: errors
    }
}

export const setNameError = (errors: string): Action => {
    return {
        type: ActionTypes.SET_NAME_ERROR,
        payload: errors
    }
}

export const setPhoneError = (errors: string): Action => {
    return {
        type: ActionTypes.SET_PHONE_ERROR,
        payload: errors
    }
}

export const setPasswordError = (errors: string): Action => {
    return {
        type: ActionTypes.SET_PASSWORD_ERROR,
        payload: errors
    }
}

export const setOtherErrors = (errors: string): Action => {
    return {
        type: ActionTypes.SET_OTHER_ERRORS,
        payload: errors
    }
}

export const clearErrors = (): Action => {
    return {
        type: ActionTypes.CLEAR_ERRORS,
        payload: []
    }
}

export const setLogged = (loged: boolean): Action => {
    return {
        type: ActionTypes.SET_LOGED,
        payload: loged
    }
}

export const saveSession = (session: string): Action => {
    return {
        type: ActionTypes.SAVE_SESSION,
        payload: session
    }
}


export const setToken = (token: string): Action => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: token
    }
}

export const setLoading = (loading: boolean): Action => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: loading
    }
}

export const setUser = (user: User): Action => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}

