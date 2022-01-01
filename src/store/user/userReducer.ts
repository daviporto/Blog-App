import { UserState, Action, ActionTypes } from './types'


const userInitialState: UserState = {
    user: {
        id: -1,
        name: "",
        email: '',
        phone: "",
        password: "",
        token: ""
    },
    loading: true,
    errors: [],
    loged: false,
}

export const UserReducer = (state: UserState = userInitialState, action: Action) => {

    switch (action.type) {

        case ActionTypes.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            }

        case ActionTypes.CLEAR_ERRORS:
            return {
                ...state,
                errors: action.payload,
            }

        case ActionTypes.SET_LOGED:
            return {
                ...state,
                loged: action.payload,
            }

        case ActionTypes.SET_LOGED:
            return {
                ...state,
                loged: action.payload,
            }

        case ActionTypes.SET_TOKEN:
            return {
                ...state,
                jwt: action.payload,
            }

        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }


        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }




        default: return state
    }

}
export { userInitialState }