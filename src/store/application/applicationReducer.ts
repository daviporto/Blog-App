import { setJWT } from '../../api/HttpApi'
import { getSession, logOut, saveSession } from '../../api/UserApi'
import { goto } from '../../navigation'
import { Routes } from '../../navigation/Routes'
import { ApplicationState, Action, ActionTypes } from './types'


const applicationInitialState: ApplicationState = {

    loading: true,
}

export const applicationReducer =  (state: ApplicationState = applicationInitialState,
     action: Action) =>  {

    switch (action.type) {

        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default: return state
    }

}
export { applicationInitialState }