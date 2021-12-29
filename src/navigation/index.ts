import { CommonActions } from '@react-navigation/core'
import { RouteStackParamList } from './Types'
import { NavigationContainerRef } from '@react-navigation/core';

let navigator: NavigationContainerRef<RouteStackParamList>;


export function setTopLevelNavigator(
    navigatorRef: NavigationContainerRef<RouteStackParamList>): void {
    navigator = navigatorRef;
}

export function goto(name: string, params: object = {}) {
    navigator.dispatch(
        CommonActions.navigate({
            name: name,
            params
        })
    );
}

export function clearStack(routeName:string) {
    navigator.reset({
        index: 0,
        routes: [{name: routeName}],
      });
}