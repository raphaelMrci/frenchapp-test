import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { Common } from '@/Theme'

import styles from './LoginScreenStyles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { BasicButton } from '@/Components'

const LoginPasswordContainer = () => {
    return (
        <View style={styles.passwordContainer}>
            <Text style={styles.sectionTitle}>Mot de passe</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
        </View>
    )
}

const LoginMailContainer = () => {
    return (
        <View style={styles.mailContainer}>
            <Text style={styles.sectionTitle}>Adresse mail</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const LoginContentContainer = () => {
    return (
        <View style={styles.content}>
            <LoginMailContainer />
            <LoginPasswordContainer />
            <BasicButton
                text="Se connecter"
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

const LoginScreen = () => {
    useEffect(() => {}, [])
    return (
        <View style={[Common.basicPage]}>
            <Image
                source={require('@/Assets/Images/Illustrations/login-background.png')}
                style={styles.backgroundImage}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Connexion</Text>
                <LoginContentContainer />
            </View>
        </View>
    )
}

export default LoginScreen
