import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import usePost from '../store/post'
import useUser from '../store/user'


type Props = {
    post: Post
}


const PostComponent: React.FC<Props> = ({ post }) => {
    const { user } = useUser()
    const { deletePost } = usePost()
    return (
        <View style={styles.container}>
            <View style={styles.postContent}>
                <Text style={styles.text}>{post.content}</Text>
                <Text style={styles.footText}>Autor: {post.name} </Text>
                {post.edited
                    ? <Text style={styles.footText}>Edited</Text>
                    : null
                }
            </View>

            {user.id == post.user_id
                ? <View style={styles.footButtonsView}>
                    <TouchableOpacity
                        style={styles.edit}
                        onPress={() => { goto(Routes.EDIT_POST, post) }}
                    >
                        <Text style={styles.footButton}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.delete}
                        onPress={() => { deletePost(post.id)}}
                    >
                        <Text style={styles.footButton}>Delete</Text>
                    </TouchableOpacity>
                </View>
                // : <Text>user_id= {user.id}, postUserId={post.user_id}</Text> For Debug
                : null
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
        backgroundColor: "lightgreen",
        flex:1
    },

    delete: {
        backgroundColor: 'red',
        flex:1,
    },

    footButton: {
        alignSelf: 'center',
        margin: 7
    },
    footButtonsView: {
        flexDirection: 'row'
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
