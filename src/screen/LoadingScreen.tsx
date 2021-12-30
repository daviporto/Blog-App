import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useApplication from '../store/application'

const LoadingScreen: React.FC = () => {
    const {VerifyIfLogged} = useApplication()
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
