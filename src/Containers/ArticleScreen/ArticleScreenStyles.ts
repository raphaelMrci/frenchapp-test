import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import Metrics from '@/Theme/Metrics'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    header: {
        marginTop: 26,
    },
    detailsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 22,
    },
    date: {
        color: Colors.text,
        fontFamily: Fonts.type.base,
        fontStyle: 'italic',
    },
    body: {
        marginTop: 52,
        fontFamily: Fonts.type.base,
        fontSize: 16,
        color: Colors.text,
    },
    footerShareButton: {
        marginTop: 33,
        marginBottom: 160,
        transform: [
            {
                scale: 1.1,
            },
            {
                translateX: 20,
            },
        ],
    },
})
