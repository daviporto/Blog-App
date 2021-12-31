import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useApplication from '../store/application'
import useUser from '../store/user'

const LoadingScreen: React.FC = () => {
    const {VerifyIfLogged} = useUser()
    VerifyIfLogged()
    return (
        <View>
            <Text>Loading</Text>
        </View>

    )
}

const styles = StyleSheet.create({

})

export default LoadingScreen
