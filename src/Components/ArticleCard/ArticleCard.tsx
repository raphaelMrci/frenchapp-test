import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './ArticleCardStyles'

const ArticleCard = ({ image, title, date, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>Mar 2 mars 2021</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ArticleCard
