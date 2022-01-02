import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import usePost from '../store/post'
import useUser from '../store/user'
import Toast from 'react-native-toast-message';

const NewPostScreen: React.FC = () => {
    const { newPost } = usePost()
    const user = useUser()
    const [text, setText] = useState('')

    const validade = (): boolean => {
        return text.length != 0
    }
    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: 'erro',
            text2: "the post text can't be empty"
        });
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.addText, { fontSize: 20 }]}>type the new post text</Text>
            <View style={styles.postContent}>


                <TextInput
                    style={styles.text}
                    multiline
                    value={text}
                    onChangeText={(newValue) => setText(newValue)}
                    autoCapitalize='none'
                    maxLength={280}
                    textAlignVertical={'top'}
                    placeholder="click me to write"
                ></TextInput>

            </View>

            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => {
                        if (validade()) newPost(text)
                        else showToast()
                    }}
                >
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        backgroundColor: "lightblue",
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
        height: 200,
        fontSize: 15,
        flex: 1,
    },

    footText: {
        margin: 10,
        fontWeight: 'bold',


    }
})
export default NewPostScreen
