import React, { useEffect, useReducer } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { goto } from "../navigation";
import { Routes } from "../navigation/Routes";
import InputEmailComponnent from "../components/InputEmailComponent";
import InputPasswordComponnent from "../components/InputPasswordComponnent";
import TextLinkClickableComponent from "../components/TextLinkClickableComponent";
import useUser from "../store/user";
import { userInitialState } from "../store/user/userReducer";
import Toast from 'react-native-toast-message';
import ButtonComponent from "../components/ButtonComponent";

enum ActionTypes {
    updateEmail,
    updatePassword,
}

type Payload = string

type Action = {
    type: ActionTypes,
    payload: Payload
}



type State = {
    user: User,
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case ActionTypes.updateEmail:
            return { ...state, user: { ...state.user, email: action.payload } }

        case ActionTypes.updatePassword:
            return { ...state, user: { ...state.user, password: action.payload } }
    }
}

const showToast = (text: string) => {
    Toast.show({
        type: 'error',
        text1: 'erro',
        text2: text
    });
}



const SingInScreen: React.FC = () => {

    const [state, dispatch] = useReducer(reducer, userInitialState)
    const userRelated = useUser()
    const { errors, loading } = useUser()
    useEffect(() => {
        if (errors.other) showToast(errors.other)
    }, [errors.other])

    return (<View>
        {userRelated.errors.length ? (<FlatList
            keyExtractor={(item) => item}
            data={userRelated.errors}
            renderItem={({ item }) => {
                return <Text style={styles.error}> {item}</Text>
            }}
        ></FlatList>)
            : null
        }

        <InputEmailComponnent
            value={state.user.email}
            onChangeText={(newValue: string) =>
                dispatch({ type: ActionTypes.updateEmail, payload: newValue })}
        ></InputEmailComponnent>

        <InputPasswordComponnent
            value={state.user.password}
            onChangeText={(newValue: string) =>
                dispatch({ type: ActionTypes.updatePassword, payload: newValue })}
        ></InputPasswordComponnent>

        <ButtonComponent
        loading={loading}
            text="Login"
            onPress={() => userRelated.singIn(state.user)}
        ></ButtonComponent>
        <TextLinkClickableComponent
            color="red"
            text="Não possui uma conta ainda? Faça cadastro aqui"
            onPress={() => {
                userRelated.clearError()
                goto(Routes.SING_UP)
            }}
        ></TextLinkClickableComponent>
    </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 10
    },
    error: {
        color: 'red',
        alignSelf: "center",

    },
})

export default SingInScreen