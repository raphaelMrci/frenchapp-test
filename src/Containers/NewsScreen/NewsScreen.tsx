import React, { useEffect } from 'react'

import { View, FlatList } from 'react-native'
import { Common } from '@/Theme'
import { useTranslation } from 'react-i18next'

import styles from './NewsScreenStyles'
import { ArticleCard } from '@/Components'
import { TopBar } from '@/Components'
import { GetArticlesList } from '@/Services/Api/Articles'

const NewsScreen = props => {
    const { t } = useTranslation()
    const [articles, setArticles] = React.useState([])

    const BackArrowPressed = () => {
        props.navigation.pop()
    }

    const renderArticle = ({ item, index }) => {
        const onPress = () => {
            props.navigation.push('ArticleScreen', {
                article: item,
            })
        }

        return (
            <ArticleCard
                image={{ uri: item.image }}
                title={item.title}
                date={item.date}
                onPress={onPress}
            />
        )
    }

    const getArticles = async (token: string) => {
        const response = await GetArticlesList(token)

        setArticles(response)
    }

    useEffect(() => {
        getArticles(props.route.params.data.token)
    })

    return (
        <View style={[Common.basicPage]}>
            <TopBar title={t('news.news')} onArrowPressed={BackArrowPressed} />
            <FlatList
                style={styles.container}
                data={articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderArticle}
            />
        </View>
    )
}

export default NewsScreen
