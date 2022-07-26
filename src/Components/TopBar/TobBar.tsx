import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './TopBarStyles'

const TopBar = ({ title, onArrowPressed }) => {
    return (
        <View style={styles.topBar}>
            <TouchableOpacity
                onPress={onArrowPressed}
                style={styles.arrowContainer}
            >
                <Image
                    source={require('@/Assets/Images/Icons/Basic/left-arrow.png')}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.right} />
        </View>
    )
}

export default TopBar
