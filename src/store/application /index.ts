import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";

import { VerifyIfLogged,   } from "./thunk"
import { setLoading,  setLogged,  } from "./actions";


export default function useApplication() {
    const dispatch = useDispatch();
    const {
        loading,
        JWTToken
    } = useSelector((state: RootState) => state.application);

    return {
        VerifyIfLogged: () => dispatch(VerifyIfLogged()),
        // setToken: () => dispatch((token: string) => setToken(token)),
        // setLoading: () => dispatch((loading: boolean) => setLoading(loading)),
        // setLogged: () => dispatch((loged: boolean) => setLogged(loged)),
        // setUser: () => dispatch((user: User) => setUser(user)),
        // jwt: string,
        loading,
        JWTToken
    }
}
