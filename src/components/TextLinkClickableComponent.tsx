import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
type Props = {
    text: string,
    onPress: () => void,
    color: string
}

const TextLinkClickableComponent: React.FC<Props> = ({ text, onPress, color = 'red' }) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.Title, { color: color }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        marginVertical: 10,
        marginLeft: 10,
        textAlign: 'center',
    },
    button: {
        margin: 10,
        alignSelf: 'center',

    }
})

export default TextLinkClickableComponent
