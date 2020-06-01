import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from 'components/Header';
import ArticleItem from 'components/ArticleItem';

const ListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의글"/>
            <ArticleItem
                article={{
                    id: 1,
                    title: '청춘의 문장들',
                    content: '사이에 있는 것들, 쉽게 바뀌는 것들, 덧없이 사라지는 것들이 여전히 내 마음을 잡아끈다.',
                    date: '2019년 4월 7일',
                }}
            />
            <ArticleItem
                article={{
                    id: 2,
                    title: '문장들',
                    content: '내게도 꿈이라는 것이 몇 개 있다.',
                    date: '2019년 4월 7일',
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
})

export default ListScreen;
