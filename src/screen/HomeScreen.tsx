import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { goto } from '../navigation'
import { Routes } from '../navigation/Routes'
import ButtonComponnent from '../components/ButtonComponent'

//this exists only for debbuging 

const HomeScreen: React.FC = () => {

    return (
        <View>
            <ButtonComponnent
                text='singUp'
                onPress={() => goto(Routes.SING_UP)}></ButtonComponnent>

            <ButtonComponnent
                text='singIn'
                onPress={() => goto(Routes.SING_IN)}></ButtonComponnent>

            <ButtonComponnent
                text='TimeLine '
                onPress={() => goto(Routes.TIME_LINE)}></ButtonComponnent>


            <ButtonComponnent
                text='NewPost'
                onPress={() => goto(Routes.NEW_POST)}></ButtonComponnent>
        </View>



    )
}

const styles = StyleSheet.create({

})

export default HomeScreen
