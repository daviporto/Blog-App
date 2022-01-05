import { Action, ActionTypes, PostState } from './types'

const postInitialState: PostState = {
    posts: [],
    errors: [],
    page: 1,//paginator laravel
    loading: false,
}

export const postReducer = (state = postInitialState, action: Action) => {
    let _posts = []
    switch (action.type) {

        case ActionTypes.SET_POSTS:
            if (state.posts.length > 0) {//Se já tiverem alguns carregados
                return {
                    ...state,
                    posts: state.posts.concat(action.payload)//apenas adiciona os novos ao fim do array
                }
            }
            return {
                ...state,// senao seta eles como posts 
                posts: action.payload 
            }


        case ActionTypes.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1// laravel paginator 
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

        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case ActionTypes.ADD_BEGINNING://adiciona post no inicio do array 
            _posts = state.posts
            _posts.unshift(action.payload)
            return {
                ...state,
                posts: _posts
            }

        case ActionTypes.OVERWRITE_EDITED://atualiza o post modificado de acordo com a resposta do servidor
            _posts = state.posts
            for (let i = 0; i < _posts.length; i++) {
                if (_posts[i].id == action.payload.id) {
                    _posts[i] = action.payload
                    break
                }
            }
            return {
                ...state,
                posts: _posts
            }

        case ActionTypes.REMOVE_DELETED:// remove post deletado de acordo com a resposta do servidor
            _posts = state.posts
            for (let i = 0; i < _posts.length; i++) {
                if (_posts[i].id == action.payload.id) {
                    _posts.splice(i, 1)
                    break
                }
            }
            return {
                ...state,
                posts: _posts
            }


        default:
            return state
    }

}
export { postInitialState }