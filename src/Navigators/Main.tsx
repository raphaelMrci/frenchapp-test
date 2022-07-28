import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, NewsScreen, ArticleScreen } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="NewsScreen" component={NewsScreen} />
            <LoginStack.Screen name="ArticleScreen" component={ArticleScreen} />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
