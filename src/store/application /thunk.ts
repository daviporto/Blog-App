import { AppThunk } from "..";
import { setJWT, withAuthentication } from "../../api/HttpApi";
import { getSession, Register, SingIn, saveSession, logOut } from "../../api/UserApi";
import { clearStack, goto } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import {setLogged, setLoading, SetErrors } from "./actions";
import {setUser} from '../user/actions'



export const VerifyIfLogged = (): AppThunk => async dispatch => {
    let token: string | null = await getSession()
    if (token == null) {
        dispatch(setLogged(false))
        clearStack(Routes.SING_IN)
    }
    else {
        try {
            token = token.replace(/['"]+/g, '')
            const response = await withAuthentication(token).get('/me')
            setJWT(token)
            const user: User = {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                token: token,
                password: '',
            }
            dispatch(setUser(user))
            dispatch(setLogged(true))
            clearStack(Routes.TIME_LINE)
        } catch (e: any) {
            console.log(e)
            const errors: any = []
            if (e.response.status == 500)
                errors.push("unable to connect with the server please try again later")

            if (e.response.status == 401) clearStack(Routes.SING_IN)
            dispatch(SetErrors(errors))
            console.log(e.response);
            dispatch(setLogged(false))
            clearStack(Routes.SING_IN)
        }
    }
    dispatch(setLoading(false))
}