import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements';
import useUser from '../store/user';
type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}


const InputPasswordComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    const {errors} = useUser()
    return (
        <View style={styles.container}>
            <Input
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                placeholder="123456"
                autoCorrect={false}
                autoCapitalize='none'
                label= 'Senha'
                secureTextEntry={true}
                leftIcon={{type:'FontAwesome', name: 'lock'}}
                errorMessage={errors.password}
            ></Input>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
})

export default InputPasswordComponnent
