import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/Header';
import ArticleItem from 'components/ArticleItem';
import {observer} from 'mobx-react';
import {useStores} from '../stores/RootStore';

const ListScreen = observer(() => {

    const {articleStore} = useStores();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의글"/>
            {
                articleStore.articles.map(article => {
                    return (
                        <ArticleItem
                            key={article.id}
                            article={article}
                        />
                    )
                })
            }
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
})

export default ListScreen;
