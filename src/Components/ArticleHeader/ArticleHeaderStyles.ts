import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    card: {
        width: '100%',
        height: Metrics.screenHeight * 0.25, // 25% of screen height
        borderRadius: Metrics.borderRadius,
        resizeMode: 'cover',
        backgroundColor: Colors.articleCard,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: Metrics.borderRadius,
        opacity: 0.4,
    },
    title: {
        position: 'absolute',
        top: '60%',
        paddingLeft: 17,
        color: Colors.white,
        fontFamily: Fonts.type.bold,
        fontSize: 20,
        width: '90%',
    },
})
