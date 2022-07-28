import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 8,
        fontFamily: Fonts.type.medium,
        color: Colors.text,
        fontSize: 16,
        paddingLeft: 14,
    },
})
