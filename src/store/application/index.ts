import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { setLoading } from "./actions";



export default function useApplication() {
    const dispatch = useDispatch();
    const {
        loading,
    } = useSelector((state: RootState) => state.application);

    return {
        setLoading: (loading:boolean) => dispatch(setLoading(loading)),
        loading,

    }
}
