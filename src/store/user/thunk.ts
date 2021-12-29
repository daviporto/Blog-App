import { AppThunk } from "..";
import { setJWT, withAuthentication } from "../../api/HttpApi";
import { getSession, Register, SingIn, saveSession, logOut } from "../../api/UserApi";
import { clearStack, goto } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import { setToken, setLogged, setLoading, setError, setUser } from "./actions";

export const singUp = (data: User, setError: (e: []) => void): AppThunk => async (dispatch) => {
    try {
        await Register(data);
        console.log("cadastro concluido com sucesso")
        clearStack(Routes.SING_IN)
    } catch (e: any) {
        const messages: any = []
        const errors = Object.values(e.response.data.errors)
        errors.forEach((value: any) => { messages.push(value[0]) })
        setError(messages)
    }
};

export const singIn = (data: User, setError: (e: []) => void): AppThunk => async (dispatch) => {
    try {
        const answer = await SingIn(data);
        console.log("answer = ", answer);
        const token = JSON.stringify(answer.data.access_token)
        dispatch(setLogged(true))
        saveSession(token)
        setToken(token)
        clearStack(Routes.TIME_LINE)
    } catch (e: any) {
        const errors: any = []
        if (e.response.status == 500)
            errors.push("unable to connect with the server please try again later")

        if (e.response.status == 401) errors.push('email or password is incorrect')

        setError(errors)
        console.log(e.response);
    }
};

export const singOut = (): AppThunk => async dispatch => {
    const token = await getSession()
    if (token == null) return
    logOut(token)
    clearStack(Routes.HOME)
    dispatch(setLogged(false))
}


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
            dispatch(setError(errors))
            console.log(e.response);
            dispatch(setLogged(false))
            clearStack(Routes.SING_IN)
        }
    }

    dispatch(setLoading(false))

}
