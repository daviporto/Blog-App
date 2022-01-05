import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Input } from 'react-native-elements';
import useUser from '../store/user';
type Props = {
    value: string,
    onChangeText: (newValue: string) => void
}

const InputNameComponnent: React.FC<Props> = ({ onChangeText, value }) => {
    const {errors} = useUser()
    return (
        <View style={styles.container}>
            <Input
                onChangeText={(newValue) => onChangeText(newValue)}
                value={value}
                placeholder="claudia"
                autoCorrect={false}
                autoCapitalize='none'
                label= 'Nome'
                errorMessage={errors.name}
                leftIcon={{type:'font-awesome-5', name: 'user',  color:"black"}}
            ></Input>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
})

export default InputNameComponnent
