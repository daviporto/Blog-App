import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";

import { VerifyIfLogged, singIn, singUp, singOut } from "./thunk"
import { setLoading, setToken, setLogged, setUser, clearErrors, setEmailError } from "./actions";


export default function useUser() {
    const dispatch = useDispatch();
    const {
        user: User,
        loading: boolean,
        errors,
    } = useSelector((state: RootState) => state.user);

    return {
        singUp: (user: User) => dispatch(singUp(user)),
        singIn: (user: User) => dispatch(singIn(user)),
        singOut: () => dispatch(singOut()),
        VerifyIfLogged: () => dispatch(VerifyIfLogged()),
        setToken: () => dispatch((token: string) => setToken(token)),
        setLoading: (loading: boolean) => dispatch(setLoading(loading)),
        setLogged: () => dispatch((loged: boolean) => setLogged(loged)),
        setUser: () => dispatch((user: User) => setUser(user)),
        clearError: () => dispatch(clearErrors()),
        user: User,
        loading: boolean,
        errors,
    }
}
