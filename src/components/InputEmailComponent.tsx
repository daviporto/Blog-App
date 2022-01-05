import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements';
import useUser from '../store/user';

type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}


const InputEmailComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    const {errors} = useUser()
    return (
        <View style={styles.container}>
            <Input
                label="Email"
                placeholder='something@domain.com'
                leftIcon={{ type: 'MaterialIcons', name: 'email' }}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                errorMessage={errors.email}
                
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
})

export default InputEmailComponnent
