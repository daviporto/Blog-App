import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import posts from "../../data"
import PostComponent from '../components/PostComponent'

const TimeLineScreen: React.FC = () => {

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <PostComponent post={item}></PostComponent>
                    )
                }}
            >
            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default TimeLineScreen
