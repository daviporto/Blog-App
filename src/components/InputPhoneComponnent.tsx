import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements';
import useUser from '../store/user';
type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}

const InputPhoneComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    const { errors } = useUser()
    return (
        <View style={styles.container}>

            <Input
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                placeholder="31 991976115"
                keyboardType='numeric'
                label='telefone'
                leftIcon={{ type: 'FontAwesome', name: 'lock' }}
                errorMessage={errors.phone}
            ></Input>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
})

export default InputPhoneComponnent
