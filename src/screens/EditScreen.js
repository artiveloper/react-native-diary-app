import React from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditHeader from 'components/EditHeader';

const EditScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <EditHeader />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default EditScreen;
