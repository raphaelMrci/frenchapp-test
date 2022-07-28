import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import styles from './ShareButtonStyles'

const ShareButton = ({ style }) => {
    const { t } = useTranslation()

    return (
        <TouchableOpacity style={[styles.container, style]}>
            <Image source={require('@/Assets/Images/Icons/Basic/share.png')} />
            <Text style={styles.text}>{t('news.share')}</Text>
        </TouchableOpacity>
    )
}

export default ShareButton
