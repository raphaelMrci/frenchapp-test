import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    arrowContainer: {
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        flex: 1,
        fontSize: 26,
        color: Colors.text,
        fontFamily: Fonts.type.bold,
        textAlign: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    right: {
        flex: 1,
    },
})
