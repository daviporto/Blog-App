import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import useUser from '../store/user';



const LogOutButtonComponent: React.FC = () => {
  const {singOut} = useUser()
    return (
        <TouchableOpacity
            onPress={() => {
                Alert.alert(
                    "Log out ",
                    "Do you really want to log out?",
                    [
                      {
                        text: "No",
                        onPress: () => {},
                        style: "cancel"
                      },
                      { text: "Yes",
                       onPress:() => singOut()
                      }
                    ]
                  );
            }}
        >
            <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
    )
}


export default LogOutButtonComponent
