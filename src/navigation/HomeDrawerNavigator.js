import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_COLOR, SECONDARY_COLOR } from '../styles/colors';

import HomeScreen from '../screens/HomeScreen';
import StructureScreen from '../screens/StructureScreen';
import AddItemScreen from '../screens/AddItemScreen';
import PickItemScreen from '../screens/PickItemScreen';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Structure = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Structure"
                component={StructureScreen}
                initialParams={{ items: null }}
            />
        </Stack.Navigator>
    )
}

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: SECONDARY_COLOR
                },
                headerTintColor: 'white'
            }}
            drawerType='slide'
            drawerStyle={{
                backgroundColor: MAIN_COLOR
            }}
            drawerContentOptions={{
                labelStyle: {
                    color: 'white'
                },
                activeTintColor: SECONDARY_COLOR
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Structure"
                component={Structure}
                options={{
                    title: 'Warehouse structure'
                }}
            />
            <Drawer.Screen
                name="AddItem"
                component={AddItemScreen}
                options={{
                    title: 'Add item'
                }}
            />
            <Drawer.Screen
                name="PickItem"
                component={PickItemScreen}
                options={{
                    title: 'Pick item'
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawerNavigator;
