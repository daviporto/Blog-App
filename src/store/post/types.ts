export enum ActionTypes {
    SET_ERRORS = 'setErrors',
    NEW_POST = "newPost",
    DELETE_POST = 'deletePost',
    EDIT_POST = 'editPost',
    FETCH_POSTS = 'fetchPosts',
    SET_POSTS = 'setPosts',
    NEXT_PAGE = 'nextPage',
    RESET_PAGE = 'resetPage',
    CLEAR_POST = 'clearPosts',
    SET_LOADING = 'setLoading',
    ADD_BEGINNING = 'addBeginning',
    OVERWRITE_EDITED = 'overwriteEdited',
    REMOVE_DELETED = 'removeDeleted',

}

export type Payload =
    | []
    | boolean
    | string
    | Post
    | number


export type Action = {
    type: string,
    payload: Payload
}

export type PostState = {
    posts: Post[],
    errors: [],
    page: number,
    loading: boolean

}
