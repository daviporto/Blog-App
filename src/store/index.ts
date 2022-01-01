import { createStore, applyMiddleware, Action, combineReducers } from 'redux'
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import { UserState } from './user/types';
import { ApplicationState } from './application/types';
import { applicationInitialState, applicationReducer } from './application/applicationReducer';

import { PostState } from './post/types';
import { postInitialState, postReducer } from './post/postReducer';
import { UserReducer } from './user/userReducer';


// function user(state: UserState = userInitialState, action: any): UserState {
//     return state
// }

// function application(state: ApplicationState = applicationInitialState, action: any): ApplicationState {
//     return state
// }

// function post(state: PostState = postInitialState, action: any) {
//     return state
// }

// function combined(state = {}, action: any): any {
//     //if state is undefined, the upper function is going to provide a default value
//     return {
//         user: user(state.user, action),
//         application: application(state.application, action),
//         post: post(state.post, action)
//     }
// }

const reducer = combineReducers({
    user:UserReducer,
    post: postReducer,
    application:applicationReducer,
})

export type RootState = {
    user: UserState,
    application: ApplicationState,
    post: PostState
};

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



const store = createStore(reducer,
    applyMiddleware(thunk));


export { store };