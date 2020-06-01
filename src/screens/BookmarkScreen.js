import React from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'components/Header';

const BookmarkScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="즐겨찾기" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BookmarkScreen;
