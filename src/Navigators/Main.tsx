import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, ArticlesListScreen } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen
                name="ArticlesListScreen"
                component={ArticlesListScreen}
            />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
