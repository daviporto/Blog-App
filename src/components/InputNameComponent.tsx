import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}

const InputNameComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    return (
        <View style={styles.background}>
            <Text style={styles.Title}>Name: </Text>
            <TextInput
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                style={styles.input}
                placeholder="Ex: Claudia"
                autoCorrect={false}
                autoCapitalize='none'
            ></TextInput>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 15

    },
    Title: {
        marginTop: 12,
        marginLeft: 10
    },
    background: {
        backgroundColor: '#e0dddd',
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'

    },
})

export default InputNameComponnent
