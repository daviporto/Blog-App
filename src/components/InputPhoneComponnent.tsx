import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}

const InputPhoneComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    return (
        <View style={styles.background}>
            <Text style={styles.Title}>Phone: </Text>
            <TextInput
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                style={styles.input}
                placeholder="Ex: 31 991976115"
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
        marginTop: 10,
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

export default InputPhoneComponnent