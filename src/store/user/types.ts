export enum ActionTypes {
    REGISTER = 'register',
    SET_ERRORS = 'SetErrors',
    LOGIN='login',
    LOGOUT='logout',
    SET_LOGED="setLoged",
    SAVE_SESSION="saveSession",
    FETCH_TOKEN = 'fetchToken',
    SET_TOKEN = 'setToken',
    SET_LOADING= 'setLoading',
    SET_USER="setUser",
}

export type Payload = User 
|[]
|boolean
|string
|number

export type Action = {
    type: string,
    payload: Payload
}

export type UserState = {
    user: User,
    error: any,
    loged:boolean,
    loading: boolean
}