import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from './ArticleCardStyles'

const ArticleCard = props => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={props.image} style={styles.cardImage} />
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{props.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ArticleCard
