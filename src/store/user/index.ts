import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";

import { VerifyIfLogged, singIn, singUp, singOut } from "./thunk"
import { setLoading, setToken, setLogged, setUser } from "./actions";


export default function useUser() {
    const dispatch = useDispatch();
    const {
        user: string,
        loading: boolean
    } = useSelector((state: RootState) => state.user);

    return {
        singUp: (user: User, setError: (errors: []) => void) =>
            dispatch(singUp(user, (errors) => setError(errors))),
        singIn: (user: User, setError: (errors: []) => void) =>
            dispatch(singIn(user, (errors) => setError(errors))),
        singOut: () => dispatch(singOut()),
        VerifyIfLogged: () => dispatch(VerifyIfLogged()),
        setToken: () => dispatch((token: string) => setToken(token)),
        setLoading: () => dispatch((loading: boolean) => setLoading(loading)),
        setLogged: () => dispatch((loged: boolean) => setLogged(loged)),
        setUser: () => dispatch((user: User) => setUser(user)),
        jwt: string,
        loading: boolean
    }
}
