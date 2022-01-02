import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    text: string,
    onPress: () => void
}

const ButtonComponnent: React.FC<Props> = ({ text, onPress }) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.Title}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        marginVertical: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 30
    },
    button: {
        backgroundColor: 'lightblue',
        marginHorizontal: 20,
        marginTop: 50,
        width: 200,
        alignSelf: 'center',

    }
})

export default ButtonComponnent
