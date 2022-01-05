import { AntDesign } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FAB } from 'react-native-elements'
import PostComponent from '../components/PostComponent'
import TextLinkClickableComponent from '../components/TextLinkClickableComponent'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import usePost from '../store/post'
import useUser from '../store/user'


const TimeLineScreen: React.FC = () => {
    const post = usePost()

    useEffect(() => { post.fetchPosts() }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={item => item.id}
                data={post.posts}
                renderItem={({ item }) => {
                    return (
                        <PostComponent post={item}></PostComponent>
                    )
                }}
                onEndReachedThreshold={.9}
                onEndReached={() => post.fetchPosts()}
            >
            </FlatList>

            <FAB
                icon={{ name: 'edit', color: 'yellow' }}
                size="large"
                onPress={() => goto(Routes.NEW_POST)}
                placement="right"
            />

        </View>

    )
}

const styles = StyleSheet.create({
    NewPostButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default TimeLineScreen
