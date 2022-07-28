import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import Tools from '@/Tools/Tools'

import styles from './ArticleCardStyles'

const ArticleCard = ({ image, title, date, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.title}>{title}</Text>
            {date && (
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{Tools.getDate(date)}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default ArticleCard
