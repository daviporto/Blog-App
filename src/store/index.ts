import { createStore, applyMiddleware, Action, combineReducers } from 'redux'
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import { UserState } from './user/types';
import { ApplicationState } from './application/types';
import { applicationInitialState} from './application/applicationReducer';
import { userInitialState } from './user/userReducer';


function user(state: UserState = userInitialState, action: any):UserState {
    return state
}

function application(state:ApplicationState = applicationInitialState, action: any):ApplicationState{
    return state
}

function combined(state = {}, action: any): any {
    //if state is undefined, the upper function is going to provide a default value
    return {
        user: user(state.user, action),
        application:  application(state.application, action),
    }
}

export type RootState = {
    user: UserState,
    application: ApplicationState,
};

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



const store = createStore(combined, applyMiddleware(thunk));


export { store };