import React from 'react'
import {StyleSheet, TextInput, View,} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import EditHeader from 'components/EditHeader';
import {useStores} from 'stores/RootStore';
import {useNavigation} from '@react-navigation/core';

const EditScreen = () => {

    const navigation = useNavigation();

    const {articleStore} = useStores();

    const {add} = articleStore;

    let title = '';
    let content = '';

    return (
        <SafeAreaView style={styles.container}>
            <EditHeader
                done={() => {
                    if (!title || !content) {
                        alert('데이터를 입력해주세요')
                        return;
                    }
                    add(title, content);
                    navigation.goBack();
                }}
            />
            <View style={styles.body}>
                <TextInput
                    style={styles.title}
                    placeholder="제목"
                    onChangeText={(text) => {
                        title = text;
                    }}
                />
                <View style={styles.divider}/>
                <TextInput
                    style={styles.content}
                    multiline={true}
                    placeholder="이곳을 눌러 작성을 시작하세요 :)"
                    onChangeText={(text) => {
                        content = text;
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    body: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212121',
    },
    content: {
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
        color: '#424242',
    },
    divider: {
        marginTop: 12,
        marginBottom: 12,
        height: 1,
        width: '100%',
        backgroundColor: '#F1F1F1',
    }
})

export default EditScreen;
