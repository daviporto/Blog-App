import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import usePost from '../store/post'
import Toast from 'react-native-toast-message';
import { Input } from 'react-native-elements';
import ButtonComponnent from '../components/ButtonComponent';

const NewPostScreen: React.FC = () => {
    const { newPost, loading } = usePost()
    const [text, setText] = useState('')

    const validade = (): boolean => {
        return text.length != 0
    }
    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'erro',
            text2: "o post não pode ser vazio"
        });
    }


    return (
        <View style={styles.container}>
            <View style={styles.postContent}>
                <Input
                    style={styles.text}
                    multiline
                    value={text}
                    onChangeText={(newValue) => setText(newValue)}
                    autoCapitalize='none'
                    maxLength={280}
                    label="Novo post"
                    textAlignVertical={'top'}
                    placeholder="No que está pensando"
                ></Input>
            </View>

            <View>
                <ButtonComponnent
                loading={loading}
                text="adicionar"
                onPress={() => {
                    if (validade()) newPost(text)
                    else showToast()
                }}
                ></ButtonComponnent>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        backgroundColor: "white",
    },

    postContent: {
        justifyContent: 'space-between',
        flex: 1,
    },

    edit: {
        backgroundColor: "lightgreen"
    },

    addText: {
        alignSelf: 'center',
        margin: 12
    },

    text: {
        marginHorizontal: 5,
        flex: 1,
    },

    footText: {
        margin: 10,
        fontWeight: 'bold',


    }
})
export default NewPostScreen
