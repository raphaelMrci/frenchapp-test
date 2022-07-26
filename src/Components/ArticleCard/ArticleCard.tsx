import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './ArticleCardStyles'

const ArticleCard = ({ image, title, date }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ArticleCard
