import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'


const NewPostScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={[styles.addText, { fontSize: 20 }]}>type the new post text</Text>
            <View style={styles.postContent}>

                <TextInput
                    style={styles.text}
                    multiline
                > { }</TextInput>
                {/* <Text style={styles.footText}>Author: {post.author}  at:27/08/200 2:40</Text> */}
            </View>

            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => { goto(Routes.TIME_LINE) }}
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
