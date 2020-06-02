import React from 'react';
import {
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewHeader from 'components/ViewHeader';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useStores} from '../stores/RootStore';

const ViewScreen = () => {

    const {articleStore} = useStores();
    const navigation = useNavigation();
    const route = useRoute();

    const {id} = route.params;
    const article = articleStore.getArticle(id);

    const handleLongPress = () => {
        navigation.navigate('Edit')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader
                title={article.title}
            />
            <ScrollView>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onLongPress={handleLongPress}
                >
                    <Text style={styles.content}>
                        {article.content}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    {article.date}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        padding: 20,
        fontSize: 16,
        lineHeight: 20,
        color: '#424242',
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 12,
        color: '#BDBDBD',
    }
})

export default ViewScreen;
