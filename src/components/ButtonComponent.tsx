import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'
import useUser from '../store/user'
type Props = {
    text: string,
    onPress: () => void,
    backgroundColor:string,
    loading:boolean
}

const ButtonComponent: React.FC<Props> = ({ text, onPress, backgroundColor='rgba(111, 202, 186, 1)', loading }) =>{
    return (
        <View>
            <Button
                title={text}
                loading={loading}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: backgroundColor,
                    borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 10,
                    alignSelf: 'center'
                }}
                onPress={() => onPress()} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ButtonComponent
