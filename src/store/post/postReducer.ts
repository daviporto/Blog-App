import { Action, ActionTypes, PostState } from './types'

const postInitialState: PostState = {
    posts: [],
    errors: [],
    page: 1
}

export const postReducer = (state = postInitialState, action: Action) => {

    switch (action.type) {

        case ActionTypes.SET_POSTS:
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }

        case ActionTypes.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }

        case ActionTypes.RESET_PAGE:
            return {
                ...state,
                page: 1
            }

        case ActionTypes.CLEAR_POST:
            return {
                ...state,
                posts: []
            }

        default:

            return state
    }

}
export { postInitialState }