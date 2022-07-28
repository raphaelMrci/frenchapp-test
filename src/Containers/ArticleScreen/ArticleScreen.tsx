import React from 'react'
import { Common } from '@/Theme'
import styles from './ArticleScreenStyles'
import { ArticleHeader, ShareButton, TopBar } from '@/Components'
import { useTranslation } from 'react-i18next'
import { Image, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Tools from '@/Tools/Tools'

const ArticleScreen = props => {
    const { t } = useTranslation()
    const article = props.route.params.article

    const BackArrowPressed = () => {
        props.navigation.pop()
    }

    return (
        <View style={[Common.basicPage]}>
            <TopBar
                title={t('news.article')}
                onArrowPressed={BackArrowPressed}
            />
            <ScrollView>
                <ArticleHeader
                    title={article.title}
                    image={{ uri: article.image }}
                    style={styles.header}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.date}>
                        {Tools.getDate(article.date)}
                    </Text>
                    <ShareButton />
                </View>
                <Text style={styles.body}>{article.body}</Text>
                <ShareButton style={styles.footerShareButton} />
            </ScrollView>
        </View>
    )
}

export default ArticleScreen
