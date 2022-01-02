import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import useUser from '../store/user'

const LoadingScreen: React.FC = () => {
    const { VerifyIfLogged } = useUser()
    useEffect(() => { VerifyIfLogged() }, [])
    const splash = require("../../assets/img/splash-screens/android/drawable-xxxhdpi/splash.jpg")
    return (
        <ImageBackground
            style={styles.image}
            resizeMode="stretch" source={splash}></ImageBackground>

    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
})

export default LoadingScreen
