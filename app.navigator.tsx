import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';
import Social from './screens/Social';
import Home from './screens/Home';
import Link from './screens/Links';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home}></Screen>
            <Screen name="Social" component={Social}></Screen>
            <Screen name="Link" component={Link}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;