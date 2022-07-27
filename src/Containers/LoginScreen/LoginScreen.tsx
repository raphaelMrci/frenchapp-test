import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    ToastAndroid,
    Platform,
    Animated,
} from 'react-native'
import { Common, Metrics } from '@/Theme'
import styles from './LoginScreenStyles'
import { TextInput } from 'react-native-gesture-handler'
import { BasicButton } from '@/Components'
import DeviceInfo from 'react-native-device-info'
import { login } from '@/ActionCreators/AuthActionCreator'
import { useDispatch, useStore } from 'react-redux'
import { LoginService } from '@/Services/Api/Authentification'
import { useTranslation } from 'react-i18next'

const LoginContentContainer = ({ dispatch, navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isConnecting, setIsConnecting] = useState(false)
    const { t } = useTranslation()

    const LoginSuccess = data => {
        if (Platform.OS === 'android') {
            ToastAndroid.show('Connected', ToastAndroid.SHORT)
            setIsConnecting(false)
        }
        navigation.push('ArticlesListScreen', {
            data,
        })
        // TODO: Navigate to the home page
    }

    const LoginFailed = err => {
        console.log(err)

        setIsConnecting(false)
        if (Platform.OS === 'android') {
            ToastAndroid.show(err.message, ToastAndroid.SHORT)
        }
    }

    const LoginButtonHandler = () => {
        setIsConnecting(true)
        LoginService({ email, password }).then(LoginSuccess).catch(LoginFailed)
    }

    const ChangeEmailListener = text => {
        setEmail(text)
    }

    const ChangePasswordListener = text => {
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

const LoginScreen = props => {
    const dispatch = useDispatch()
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
                <LoginContentContainer
                    dispatch={dispatch}
                    navigation={props.navigation}
                />
            </Animated.View>
        </View>
    )
}

export default LoginScreen
