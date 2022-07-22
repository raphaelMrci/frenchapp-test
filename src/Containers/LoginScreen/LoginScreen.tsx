import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { Common } from '@/Theme'

import styles from './LoginScreenStyles'
import { TextInput } from 'react-native-gesture-handler'

const LoginPasswordContainer = () => {
    return (
        <View style={[styles.content, styles.passwordContainer]}>
            <Text style={styles.sectionTitle}>Mot de passe</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
        </View>
    )
}

const LoginMailContainer = () => {
    return (
        <View style={[styles.content, styles.mailContainer]}>
            <Text style={styles.sectionTitle}>Adresse mail</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const LoginContentContainer = () => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Connexion</Text>
            <LoginMailContainer />
            <LoginPasswordContainer />
        </View>
    )
}

const LoginScreen = () => {
    useEffect(() => {}, [])

    // TODO: LoginScreen
    return (
        <View style={[Common.basicPage]}>
            <Image
                source={require('@/Assets/Images/Illustrations/login-background.png')}
                style={styles.backgroundImage}
            />
            <LoginContentContainer />
        </View>
    )
}

export default LoginScreen
