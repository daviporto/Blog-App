import { AntDesign } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonComponnent from '../components/ButtonComponent'
import PostComponent from '../components/PostComponent'
import TextLinkClickableComponent from '../components/TextLinkClickableComponent'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import usePost from '../store/post'
import useUser from '../store/user'

let page = 1

const TimeLineScreen: React.FC = () => {
    const user = useUser()
    const post = usePost()

    useEffect(() => {post.fetchPosts(user.jwt)}, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(results) => results.id}
                data={post.posts}
                renderItem={({ item }) => {
                    return (
                        <PostComponent post={item}></PostComponent>
                    )
                }}
                ListFooterComponent={<TextLinkClickableComponent
                    text="older posts"
                    onPress={() => {post.fetchPosts(user.jwt)}}
                    color='green'
                ></TextLinkClickableComponent>}
            >
            </FlatList>

            <TouchableOpacity 
            style={styles.NewPostButton}
            onPress={() => goto(Routes.NEW_POST)}
            >
            <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    NewPostButton:{
        width: 60,  
        height: 60,   
        borderRadius: 30,                                            
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10, 
        backgroundColor:"green",
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default TimeLineScreen
