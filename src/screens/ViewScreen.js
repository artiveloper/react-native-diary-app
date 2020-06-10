import React from 'react';
import {
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewHeader from 'components/ViewHeader';
import {useStores} from 'stores/RootStore';
import {observer} from 'mobx-react';

const ViewScreen = observer(({navigation, route}) => {

    const {articleStore} = useStores();
    const {id} = route.params;
    const article = articleStore.getArticle(id);

    const handleLongPress = () => {
        navigation.navigate('Edit', {id: id})
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
})

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
