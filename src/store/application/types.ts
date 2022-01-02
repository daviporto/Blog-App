export enum ActionTypes {
    SET_LOADING = 'setLoading',
}

export type Payload =
    | boolean


export type Action = {
    type: string,
    payload: Payload
}

export type ApplicationState = {
    loading: boolean,
}
