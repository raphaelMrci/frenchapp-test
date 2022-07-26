import React from 'react'

import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { Common } from '@/Theme'
import { useTranslation } from 'react-i18next'

import styles from './ArticlesListScreenStyles'
import { ArticleCard } from '@/Components'
import TopBar from '@/Components/TopBar/TobBar'

const ArticlesListScreen = props => {
    const { t } = useTranslation()

    const BackArrowPressed = () => {
        props.navigation.pop()
    }

    const renderItem = ({ item }) => {
        return (
            <ArticleCard
                image={item.image}
                title={item.title}
                date={item.date}
            />
        )
    }

    return (
        <View style={[Common.basicPage]}>
            <TopBar title={t('news.news')} onArrowPressed={BackArrowPressed} />
            <FlatList />
        </View>
    )
}

export default ArticlesListScreen
