import { createStore, applyMiddleware, Action, combineReducers } from 'redux'
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import { UserState } from './user/types';
import { initialState } from './user/UserReducer';


function user(state: UserState = initialState, action: any) {
    return state
}

function combined(state = {}, action: any): any {
    //if state is undefined, the upper function is going to provide a default value
    return {
        user: user(state.user, action)
    }
}

export type RootState = {
    user: UserState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



const store = createStore(combined, applyMiddleware(thunk));


export { store };