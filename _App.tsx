import React from 'react';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteStackParamList } from './src/navigation/Types';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/navigation/Routes';
import HomeScreen from './src/screen/HomeScreen';
import SingUpScreen from './src/screen/SingUpScreen';
import SingInScreen from './src/screen/SingInScreen';
import { setTopLevelNavigator } from './src/navigation';
import TimeLineScreen from './src/screen/TimeLineScreen';
import EditPostScreen from './src/screen/EditPostScreen';
import NewPostScreen from './src/screen/NewPostScreen';
import { Button } from 'react-native';
import LogOutButtonComponent from './src/components/LogOutButtonComponent';
import { getSession, testWorkingWithLaravel } from './src/api/UserApi';
import {store} from './src/store';
import useUser from './src/store/user';

const Stack = createNativeStackNavigator<RouteStackParamList>()



export default () => {
  testWorkingWithLaravel()

  return (
    <Provider store={store}>
    <NavigationContainer
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={(navigatorRef: NavigationContainerRef<RouteStackParamList>) => setTopLevelNavigator(navigatorRef)}>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.SING_UP} component={SingUpScreen} />
        <Stack.Screen name={Routes.SING_IN} component={SingInScreen} />
        <Stack.Screen
          name={Routes.TIME_LINE}
          component={TimeLineScreen}
          options={{
            headerRight: () => (
              <LogOutButtonComponent></LogOutButtonComponent>
            ),
          }}
        />
        <Stack.Screen name={Routes.EDIT_POST} component={EditPostScreen} />
        <Stack.Screen name={Routes.NEW_POST} component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

