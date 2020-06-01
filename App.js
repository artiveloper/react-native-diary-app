import React from 'react';
import {StatusBar} from 'react-native';
import TabNavigator from 'Navigator';

export default function App() {
    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content"/>
            <TabNavigator/>
        </React.Fragment>
    );
}
