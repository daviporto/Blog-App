import { CommonActions } from '@react-navigation/core'
import { RouteStackParamList } from './Types'
import { NavigationContainerRef } from '@react-navigation/core';
import { Routes } from './Routes';

let navigator: NavigationContainerRef<RouteStackParamList>;

export function setTopLevelNavigator(
    navigatorRef: NavigationContainerRef<RouteStackParamList>): void {
    navigator = navigatorRef;
}


//Redireciona para a tora passada como parâmetro 
export function goto(name: Routes, params: object = {}) {
    navigator.dispatch(
        CommonActions.navigate({
            name: name,
            params
        })
    );
}


//retorna a tela anterior 
export function back() {
    navigator.dispatch(
        CommonActions.goBack()
    )
}

//limpa o stack de navegação e redireciona para a rota especificada
export function clearStack(routeName: Routes) {
    navigator.reset({
        index: 0,
        routes: [{ name: routeName }],
    });
}