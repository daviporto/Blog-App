import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import posts from '../../data'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import ButtonComponnent from './ButtonComponent'
import TextLinkClickableComponent from './TextLinkClickableComponent'

type Props = {
    post: Post
}


const PostComponent: React.FC<Props> = ({ post }) => {
    return (
        <View style={styles.container}>
            <View style={styles.postContent}>
                <Text style={styles.text}>{post.content}</Text>
                <Text style={styles.footText}>by {post.name} at {post.created_at}</Text>
                {post.edited
                    ? <Text>Edited</Text>
                    : null
                }
            </View>

            <View style={styles.edit}>
                <TouchableOpacity
                    onPress={() => { goto(Routes.EDIT_POST, post) }}
                >
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        margin: 15,
        height: 200,
    },

    postContent: {
        justifyContent: 'space-between',
        flex: 1,
    },

    edit: {
        backgroundColor: "lightgreen"
    },

    editText: {
        alignSelf: 'center',
        margin: 7
    },

    text: {
        margin: 10,
        fontSize: 15

    },

    footText: {
        margin: 10,
        fontWeight: 'bold',


    }
})

export default PostComponent
