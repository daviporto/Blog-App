import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import usePost from '../store/post'
import useUser from '../store/user'


const NewPostScreen: React.FC = () => {
    const { newPost } = usePost()
    const user = useUser()
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Text style={[styles.addText, { fontSize: 20 }]}>type the new post text</Text>
            <View style={styles.postContent}>


                <TextInput
                    style={styles.text}
                    multiline
                    value={text}
                    onChangeText={(newValue) => setText(newValue)}
                ></TextInput>

            </View>

            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => newPost(user.jwt, text)}
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
