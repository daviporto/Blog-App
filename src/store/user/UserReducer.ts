import { setJWT } from '../../api/HttpApi'
import { getSession, logOut, saveSession } from '../../api/UserApi'
import { goto } from '../../navigation'
import { Routes } from '../../navigation/Routes'
import { UserState, Action, ActionTypes } from './types'


const initialState: UserState = {
    user: {
        id: -1,
        name: "",
        email: '',
        phone: "",
        password: "",
        token: ""
    },
    loading: true,
    error: [],
    loged: false,
}

export default function (state: UserState = initialState, action: Action) {

    switch (action.type) {

        case ActionTypes.SET_ERRORS:
            return {
                ...state,
                error: action.payload,
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
export { initialState }