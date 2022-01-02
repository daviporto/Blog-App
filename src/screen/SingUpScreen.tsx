import React, { useReducer, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { goto } from "../navigation";
import { Routes } from "../navigation/Routes";
import ButtonComponnent from "../components/ButtonComponent";
import InputEmailComponnent from "../components/InputEmailComponent";
import InputNameComponnent from "../components/InputNameComponent";
import InputPasswordComponnent from "../components/InputPasswordComponnent";
import InputPhoneComponnent from "../components/InputPhoneComponnent";
import TextLinkClickableComponent from "../components/TextLinkClickableComponent";
import useUser from "../store/user"


enum ActionTypes {
    updateName,
    updateEmail,
    updatePhone,
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

const initialState: State = {
    user: {
        id: 0,
        name: "",
        email: '',
        phone: "",
        password: "",
        token: ""
    },
}

function reducer(state: State = initialState, action: Action): State {

    switch (action.type) {
        case ActionTypes.updateName:
            return { ...state, user: { ...state.user, name: action.payload } }

        case ActionTypes.updateEmail:
            return { ...state, user: { ...state.user, email: action.payload } }

        case ActionTypes.updatePhone:
            return { ...state, user: { ...state.user, phone: action.payload } }

        case ActionTypes.updatePassword:
            return { ...state, user: { ...state.user, password: action.payload } }
    }

}


const SingUpScreen: React.FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const userRelated = useUser()

    return (
        <View>
            {userRelated.errors.length ? (<FlatList
                keyExtractor={(item) => item}
                data={userRelated.errors}
                renderItem={({ item }) => {
                    return <Text style={styles.error}> {item}</Text>
                }}
            ></FlatList>)
                : null
            }

            <InputNameComponnent
                value={state.user.name}
                onChangeText={(newValue: string) =>
                    dispatch({ type: ActionTypes.updateName, payload: newValue })}
            ></InputNameComponnent>

            <InputEmailComponnent
                value={state.user.email}
                onChangeText={(newValue: string) =>
                    dispatch({ type: ActionTypes.updateEmail, payload: newValue })}
            ></InputEmailComponnent>


            <InputPhoneComponnent
                value={state.user.phone}
                onChangeText={(newValue: string) =>
                    dispatch({ type: ActionTypes.updatePhone, payload: newValue })}
            ></InputPhoneComponnent>

            <InputPasswordComponnent
                value={state.user.password}
                onChangeText={(newValue: string) =>
                    dispatch({ type: ActionTypes.updatePassword, payload: newValue })}
            ></InputPasswordComponnent>

            <ButtonComponnent
                text="Sing Up"
                onPress={() => {
                    userRelated.clearError()
                    userRelated.singUp(state.user)
                }}
            ></ButtonComponnent>
            <TextLinkClickableComponent
                color="red"
                text="already have an account? Log in here"
                onPress={() => goto(Routes.SING_IN)}
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

export default SingUpScreen