import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

const styles = StyleSheet.create({
    arrowContainer: {
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 26,
        width: '100%',
        textAlign: 'center',
        color: Colors.text,
        fontFamily: Fonts.type.bold,

    },
})

export default styles
