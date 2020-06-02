import React from 'react'
import {
    FlatList,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'components/Header';
import ArticleItem from 'components/ArticleItem';
import {useStores} from 'stores/RootStore';

const BookmarkScreen = () => {
    const {articleStore} = useStores();
    const {articles} = articleStore

    const renderItem = ({item}) => (
        <ArticleItem
            article={item}
        />
    )

    const keyExtractor = (item) => {
        return `${item.id}`
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="즐겨찾기"/>
            <FlatList
                data={articles.filter((article) => {
                    return article.bookmarked
                })}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
})

export default BookmarkScreen;
