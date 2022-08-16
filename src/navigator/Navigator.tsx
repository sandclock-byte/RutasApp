import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Stack.Screen name='MapScreen' component={MapScreen} />
            <Stack.Screen name='PermissionsScreen' component={PermissionsScreen} />
        </Stack.Navigator>
    )
}
