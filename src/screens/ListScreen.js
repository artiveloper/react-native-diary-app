import React, {useEffect} from 'react';
import {
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/Header';
import ArticleItem from 'components/ArticleItem';
import {observer} from 'mobx-react';
import {useStores} from '../stores/RootStore';

const ListScreen = observer(() => {

    const {articleStore} = useStores();
    const {isLoading, articles, load} = articleStore;

    const fetchData = async () => {
        await load();
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({item}) => (
        <ArticleItem
            article={item}
        />
    )

    const keyExtractor = (item) => {
        return `${item.id}`
    }

    if (isLoading) {
        return (
            <Text>로딩중</Text>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의글"/>
            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
})

export default ListScreen;
