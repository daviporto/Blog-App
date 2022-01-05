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
    loading: false,
    errors: [],
    loged: false,
}

export const UserReducer = (state: UserState = userInitialState, action: Action) => {

    switch (action.type) {

        case ActionTypes.SET_EMAIL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    email: action.payload
                },
            }

        case ActionTypes.SET_NAME_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    name: action.payload
                },
            }

        case ActionTypes.SET_PHONE_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    phone: action.payload
                },
            }

        case ActionTypes.SET_PASSWORD_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    password: action.payload
                },
            }

            case ActionTypes.SET_OTHER_ERRORS:
                return {
                    ...state,
                    errors: {
                        ...state.errors,
                        other: action.payload
                    },
                }
    
        case ActionTypes.CLEAR_ERRORS:
            return {
                ...state,
                errors:[],
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