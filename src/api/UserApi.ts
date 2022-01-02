import { AxiosResponse } from "axios";
import { getToken, setToken } from "../storage";
import HttpApi, { withAuthentication } from "./HttpApi";

export const testWorkingWithLaravel = async () => {
    try {
        const response = await HttpApi.get('/', {})
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const saveSession = (session: string) => {
    setToken("session", session);
};

export const getSession = async (): Promise<string | null> => {
    return getToken("session");
};

export const discardSession = (): void => {
    setToken("session", '');
}

export const Register = async (user: User): Promise<AxiosResponse> => {
    const response = await HttpApi.post('/register', user)
    return response
}

export const SingInAfterSingUp = async (user: User): Promise<AxiosResponse> => {
    const response = await HttpApi.post('/login', user)
    return response
}

export const SingIn = async (user: User): Promise<AxiosResponse> => {
    const response = await HttpApi.post('/login', {
        "email": user.email,
        "password": user.password
    })

    return response
}

export const logOut = (token: string): void => {
    discardSession()
    withAuthentication(token).post('/logout', {})
}


