import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteStackParamList } from './navigation/Types';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './navigation/Routes';
import HomeScreen from './src/screen/HomeScreen';
import SingUpScreen from './src/screen/SingUpScreen';
const Stack = createNativeStackNavigator<RouteStackParamList>()


export default  () =>  {
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName={Routes.SING_UP}>
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.SING_UP} component={SingUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

