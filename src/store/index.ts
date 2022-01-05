import { createStore, applyMiddleware, Action, combineReducers } from 'redux'
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import { UserState } from './user/types';
import { ApplicationState } from './application/types';
import { applicationReducer } from './application/applicationReducer';

import { PostState } from './post/types';
import { postReducer } from './post/postReducer';
import { UserReducer } from './user/userReducer';



const reducer = combineReducers({
    user: UserReducer,
    post: postReducer,
    application: applicationReducer,
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