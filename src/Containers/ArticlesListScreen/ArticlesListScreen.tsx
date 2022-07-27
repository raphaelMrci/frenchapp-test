import React, { useEffect } from 'react'

import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Common } from '@/Theme'
import { useTranslation } from 'react-i18next'

import styles from './ArticlesListScreenStyles'
import { ArticleCard } from '@/Components'
import TopBar from '@/Components/TopBar/TobBar'
import { GetArticlesList } from '@/Services/Api/Articles'
import { useStore } from 'react-redux'

const ArticlesListScreen = props => {
    const { t } = useTranslation()
    const [articles, setArticles] = React.useState([])

    const store = useStore()

    const BackArrowPressed = () => {
        props.navigation.pop()
    }

    const renderItem = ({ item, index }) => {

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

    const getData = async (token) => {
        const response = await GetArticlesList(token)

        console.log('RESPONSE: ', response)

        setArticles(response)
    }

    useEffect(() => {
        // TODO: Get the articles from the API
        // console.log('PROPS: ', props)

        getData(props.route.params.data.token)
    })

    return (
        <View style={[Common.basicPage]}>
            <TopBar title={t('news.news')} onArrowPressed={BackArrowPressed} />
            <FlatList
                style={styles.container}
                data={articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ArticlesListScreen
