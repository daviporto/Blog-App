import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { EditPostParams } from '../navigation/Types'
import usePost from '../store/post'
import Toast from 'react-native-toast-message';


const EditPostScreen: React.FC = () => {
    const params = useRoute<EditPostParams>().params;
    const [text, setText] = useState(params.content)
    const { editPost } = usePost()
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
        <View>
            <Text style={[styles.addText, { fontSize: 20 }]}>touch the blue area to edit</Text>
            <View style={{ backgroundColor: 'lightblue' }} >

                <TextInput
                    style={styles.text}
                    multiline
                    value={text}
                    numberOfLines={8}
                    autoCapitalize={'none'}
                    textAlignVertical={'top'}
                    maxLength={280}
                    onChangeText={(newValue) => setText(newValue)}
                ></TextInput>


            </View>

            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => {
                        if (validade()) editPost(params.id, text)
                        else showToast()
                    }}
                >
                    <Text style={styles.addText}>Save</Text>
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
        margin: 12,


    },

    text: {
        marginHorizontal: 5,
        height: 200,
        fontSize: 17,

    },

    footText: {
        margin: 10,
        fontWeight: 'bold',


    }
})

export default EditPostScreen
