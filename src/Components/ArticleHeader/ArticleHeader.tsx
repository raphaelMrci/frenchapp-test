import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './ArticleHeaderStyles'

const ArticleHeader = ({ title, image, style }) => {
    return (
        <View style={[styles.card, style]}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default ArticleHeader
