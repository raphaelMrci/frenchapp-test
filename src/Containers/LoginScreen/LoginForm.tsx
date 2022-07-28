import React, { useState } from 'react'
import { View, Text, ToastAndroid, Platform } from 'react-native'
import { Common } from '@/Theme'
import styles from './LoginScreenStyles'
import { TextInput } from 'react-native-gesture-handler'
import { BasicButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { LoginService } from '@/Services/Api/Authentification'

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isConnecting, setIsConnecting] = useState(false)
    const { t } = useTranslation()
    let passwordInputRef: React.ComponentType<any> | null = null

    const LoginSuccess = data => {
        if (Platform.OS === 'android') {
            ToastAndroid.show('Connected', ToastAndroid.SHORT)
            setIsConnecting(false)
        }
        navigation.push('NewsScreen', {
            data,
        })
    }

    const LoginFailed = err => {
        setIsConnecting(false)
        if (Platform.OS === 'android') {
            ToastAndroid.show(err.message, ToastAndroid.SHORT)
        }
    }

    const LoginButtonHandler = () => {
        setIsConnecting(true)
        LoginService({ email, password }).then(LoginSuccess).catch(LoginFailed)
    }

    const ChangeEmailListener = (text: string) => {
        setEmail(text)
    }

    const ChangePasswordListener = (text: string) => {
        setPassword(text)
    }

    return (
        <View style={styles.content}>
            <View style={styles.mailContainer}>
                <Text style={styles.sectionTitle}>
                    {t('authentification.mail')}
                </Text>
                <TextInput
                    style={[styles.input, Common.basicShadow]}
                    onChangeText={ChangeEmailListener}
                    autoFocus={true}
                    onSubmitEditing={() => {
                        if (passwordInputRef) {
                            passwordInputRef.focus()
                        }
                    }}
                />
            </View>
            <View style={styles.passwordContainer}>
                <Text style={styles.sectionTitle}>
                    {t('authentification.password')}
                </Text>
                <TextInput
                    style={[styles.input, Common.basicShadow]}
                    secureTextEntry={true}
                    onChangeText={ChangePasswordListener}
                    ref={input => {
                        passwordInputRef = input
                    }}
                    onSubmitEditing={LoginButtonHandler}
                />
            </View>
            <BasicButton
                disabled={isConnecting}
                text={t('authentification.connect')}
                onPress={LoginButtonHandler}
                style={styles.loginButton}
            />
        </View>
    )
}

export default LoginForm
