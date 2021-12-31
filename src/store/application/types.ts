export enum ActionTypes {
    SET_ERROR = 'SetErrors',
    SET_LOGGED = "setLogged",
    SAVE_JWT_TOKEN = "saveJWTToken",
    FETCH_TOKEN = 'fetchJWTToken',
    SET_LOADING = 'setLoading',
}

export type Payload =
    | []
    | boolean


export type Action = {
    type: string,
    payload: Payload
}

export type ApplicationState = {
    loading: boolean,
}
