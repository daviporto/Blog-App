import { RouteProp } from "@react-navigation/core";
import { Routes } from "./Routes";

export type RouteStackParamList = {
    [Routes.HOME]:undefined,
    [Routes.SING_UP]:undefined,
    [Routes.SING_IN]:undefined,
    [Routes.TIME_LINE]:undefined,
    [Routes.EDIT_POST]:Post,
    [Routes.NEW_POST]:undefined,
    [Routes.LOADING]:undefined,
}

export type EditPostParams = RouteProp<
    RouteStackParamList,
    Routes.EDIT_POST
>;
