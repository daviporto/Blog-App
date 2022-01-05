import { AxiosError } from "axios";
import { AppThunk } from "..";
import { withAuthentication } from "../../api/HttpApi";
import { getSession, Register, SingIn, saveSession, logOut } from "../../api/UserApi";
import { clearStack } from "../../navigation";
import { Routes } from "../../navigation/Routes";
import { setErrors } from "../post/actions";
import {
    setToken,
    setLogged,
    setLoading,
    setUser,
    setEmailError,
    setNameError,
    setPhoneError,
    setPasswordError,
    setOtherErrors
} from "./actions";

function handleError(error: any, dispatch: any): void {
    if (error.response.status == 422) {
        const errors = Object.values(error.response.data.errors)
        errors.forEach((value: any) => {// cada erro tem a sua váriavel, são exibidos embaixo de cada input
            if (value[0].indexOf('email') != -1) dispatch(setEmailError(value))
            else if (value[0].indexOf('nome') != -1) dispatch(setNameError(value))
            else if (value[0].indexOf('telefone') != -1) dispatch(setPhoneError(value))
            else if (value[0].indexOf('senha') != -1) dispatch(setPasswordError(value))
        })
    } else {//outros error são exibidos em um toast
        dispatch(setOtherErrors("problemas de conexão, por favor tente mais tarde"))
    }

}


export const singUp = (data: User): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        await Register(data);
        clearStack(Routes.SING_IN)//limpa o stack e redireciona para fazer login 
    } catch (e: any) {
        handleError(e, dispatch)
    } finally {
        dispatch(setLoading(false))
    }
};

export const singIn = (data: User): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const answer = await SingIn(data);
        const token = JSON.stringify(answer.data.access_token)

        //recupera as informações do usuário do servidor 
        const response = await withAuthentication(answer.data.access_token).get('/me')
        const user: User = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            token: token,
            password: response.data.password,
        }

        dispatch(setUser(user))
        dispatch(setLogged(true))
        saveSession(token)
        setToken(token)
        clearStack(Routes.TIME_LINE)//limpa o stack e redireciona para a timeline 
    } catch (e: any) {
        handleError(e, dispatch)
    } finally {
        dispatch(setLoading(false))
    }
};

export const singOut = (): AppThunk => async dispatch => {
    let token = await getSession()
    if (token == null) return// caso já não estiver logado 
    token = token.replace(/['"]+/g, '')// removing trailing (')
    logOut(token)
    clearStack(Routes.SING_IN)//redireciona para login 
    dispatch(setLogged(false))
}


export const VerifyIfLogged = (): AppThunk => async dispatch => {
    let token: string | null = await getSession()
    if (token == null) {
        dispatch(setLogged(false))
        clearStack(Routes.SING_IN)// se não possuir o token redireciona para login 
    }
    else {
        try {
            token = token.replace(/['"]+/g, '')// removing trailing (')
            const response = await withAuthentication(token).get('/me')
            const user: User = {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                token: token,
                password: response.data.password,
            }
            dispatch(setUser(user))
            dispatch(setLogged(true))
            clearStack(Routes.TIME_LINE)
        } catch (e: any) {
            dispatch(setLogged(false))
            clearStack(Routes.SING_IN)//redireciona para login
        } finally {
            dispatch(setLoading(false))
        }
    }


}
