import {useRoute } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EditPostParams } from '../navigation/Types'

const EditPostScreen: React.FC = () => {
    const params = useRoute<EditPostParams>().params;
    return (
        <View>
            <Text>{params.text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default EditPostScreen
