import React, { useEffect, useState } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import { Common, Metrics } from '@/Theme'
import styles from './LoginScreenStyles'
import { useTranslation } from 'react-i18next'
import LoginForm from './LoginForm'

const LoginScreen = props => {
    const [fadeAnim] = useState(new Animated.Value(Metrics.screenHeight))
    const { t } = useTranslation()

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }, [fadeAnim])

    return (
        <View style={[Common.basicPage]}>
            <Image
                source={require('@/Assets/Images/Illustrations/login-background.png')}
                style={styles.backgroundImage}
            />
            <Animated.View
                style={[
                    styles.contentContainer,
                    { transform: [{ translateY: fadeAnim }] },
                ]}
            >
                <Text style={styles.title}>
                    {t('authentification.connection')}
                </Text>
                <LoginForm navigation={props.navigation} />
            </Animated.View>
        </View>
    )
}

export default LoginScreen
