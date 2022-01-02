import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { clearPosts, nextPage, resetPage, setPosts } from "./actions";
import { deletePost, editPost, fetchPosts, newPost } from "./thunk";

export default function usePost() {
    const dispatch = useDispatch();
    const {
        posts,
        page
    } = useSelector((state: RootState) => state.post);

    return {
        fetchPosts: () => dispatch(fetchPosts(page)),
        newPost: (content:string) => 
        dispatch(newPost(content)),
        setPost: (posts:[]) => dispatch(setPosts(posts)),
        nextPage: () => dispatch(nextPage()),
        resetPage: () => dispatch(resetPage()),
        clearPosts: () => dispatch(clearPosts()),
        editPost: (id:number, newContent:string) => dispatch(editPost(id, newContent)),
        deletePost: (id:number) => dispatch(deletePost(id)),
        posts,
    }
}
