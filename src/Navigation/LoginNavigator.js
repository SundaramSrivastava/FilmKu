import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login.screen';
import { LOGIN_SCREEN } from '../Screens/screenName';

const Stack = createNativeStackNavigator();

const screenDefaultOptions = {
    headerShown: false,
}

export default function LoginNavigator() {
    return (
        <Stack.Navigator screenOptions={screenDefaultOptions}>
            <Stack.Screen name={LOGIN_SCREEN} component={Login} />
        </Stack.Navigator>
    );
}