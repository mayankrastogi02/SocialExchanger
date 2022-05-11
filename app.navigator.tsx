import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Social from './screens/Social'
import Home from './screens/Home'
import Link from './screens/Links'
import Code from './screens/Code'

const { Navigator, Screen } = createStackNavigator()

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: true,
            })}
        >
            <Screen name="Home" component={Home}></Screen>
            <Screen name="Social" component={Social}></Screen>
            <Screen name="Link" component={Link}></Screen>
            <Screen name="Code" component={Code}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator
