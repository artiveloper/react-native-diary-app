import React from 'react';
import {
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewHeader from 'components/ViewHeader';
import {useNavigation} from '@react-navigation/core';

const ViewScreen = () => {

    const navigation = useNavigation();

    const handleLongPress = () => {
        navigation.navigate('Edit')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader />
            <ScrollView>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onLongPress={handleLongPress}
                >
                    <Text style={styles.content}>
                        블라블라.....
                    </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    2019년 9월 14일
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
