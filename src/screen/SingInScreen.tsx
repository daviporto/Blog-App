import React, { useReducer, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { goto } from "../navigation";
import { Routes } from "../navigation/Routes";
import ButtonComponnent from "../components/ButtonComponent";
import InputEmailComponnent from "../components/InputEmailComponent";
import InputPasswordComponnent from "../components/InputPasswordComponnent";
import TextLinkClickableComponent from "../components/TextLinkClickableComponent";
import useUser from "../store/user";
import { userInitialState } from "../store/user/userReducer";




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


const SingInScreen: React.FC = () => {

    const [state, dispatch] = useReducer(reducer, userInitialState)
    const [error, setError] = useState<[]>([])
    const userRelated = useUser()
    return (<View>
        {error.length ? (<FlatList
            keyExtractor={(item) => item}
            data={error}
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

        <ButtonComponnent
            text="Sing In"
            onPress={() => userRelated.singIn(state.user, (error: []) => setError(error))}
        ></ButtonComponnent>
        <TextLinkClickableComponent
            text="don't have an account yet? Sign up"
            onPress={() => goto(Routes.SING_UP)}
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