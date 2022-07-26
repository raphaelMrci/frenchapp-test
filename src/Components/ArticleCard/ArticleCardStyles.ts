import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    card: {
        marginBottom: 20,
        width: '100%',
        height: Metrics.screenHeight * 0.25,
        borderRadius: 10,
        resizeMode: 'cover',
        backgroundColor: Colors.text,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
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
    dateContainer: {
        backgroundColor: Colors.dateContainer,
        position: 'absolute',
        opacity: 0.68,
        padding: 5,
        paddingLeft: 23,
        paddingRight: 23,
        borderRadius: 17,
        top: '5%',
        right: '3%',
    },
    date: {
        color: Colors.white,
        fontFamily: Fonts.type.bold,
        fontSize: 12,
    },
})
