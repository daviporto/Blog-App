import AsyncStorage from '@react-native-async-storage/async-storage'
export function setToken(key:string, token:string):void{
    AsyncStorage.setItem(key, token)
}

export const getToken = async (token:string):Promise<string|null> => {
    const _token = await AsyncStorage.getItem(token)
    return _token
}