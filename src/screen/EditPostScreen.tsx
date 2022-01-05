import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { EditPostParams } from '../navigation/Types'
import usePost from '../store/post'
import Toast from 'react-native-toast-message';
import { Input } from 'react-native-elements'
import ButtonComponent from '../components/ButtonComponent'


const EditPostScreen: React.FC = () => {
    const params = useRoute<EditPostParams>().params;
    const [text, setText] = useState(params.content)
    const { editPost, loading } = usePost()
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
                    label="toque no post para editalo"
                    style={styles.text}
                    multiline
                    value={text}
                    autoCapitalize={'none'}
                    textAlignVertical={'top'}
                    maxLength={280}
                    onChangeText={(newValue) => setText(newValue)}
                ></Input>


            </View>

            <View >

                <ButtonComponent
                    loading={loading}
                    text="salvar"
                    onPress={() => {
                        if (validade()) editPost(params, text)
                        else showToast()
                    }}
                ></ButtonComponent>
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

export default EditPostScreen
