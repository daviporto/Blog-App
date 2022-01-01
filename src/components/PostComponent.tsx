import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import posts from '../../data'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import useUser from '../store/user'
import ButtonComponnent from './ButtonComponent'
import TextLinkClickableComponent from './TextLinkClickableComponent'

type Props = {
    post: Post
}


const PostComponent: React.FC<Props> = ({ post }) => {
    const { user } = useUser()
    console.log(post.edited)
    return (
        <View style={styles.container}>
            <View style={styles.postContent}>
                <Text style={styles.text}>{post.content}</Text>
                <Text style={styles.footText}>by {post.name} at {post.created_at}</Text>
                {post.edited
                    ? <Text style={styles.footText}>Edited</Text>
                    : null
                }
            </View>

            {user.id == post.user_id
                ? <View style={styles.edit}>
                    <TouchableOpacity
                        onPress={() => { goto(Routes.EDIT_POST, post) }}
                    >
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                : <Text>user_id= {user.id}, postUserId={post.user_id}</Text>
            }



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
