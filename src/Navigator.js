import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ListScreen from 'screens/ListScreen';
import BookmarkScreen from 'screens/BookmarkScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color }) => {
                            let iconName;

                            if (route.name === 'List') {
                                iconName = focused
                                    ? 'md-list-box'
                                    : 'md-list-box';
                            } else if (route.name === 'Bookmark') {
                                iconName = focused
                                    ? 'md-heart'
                                    : 'md-heart';
                            }

                            return <Ionicons name={iconName} size={25} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#424242',
                        inactiveTintColor: '#9E9E9E',
                        showLabel: false,
                        borderTopColor: '#BDBDBD',
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <Tab.Screen name="List" component={ListScreen} />
                    <Tab.Screen name="Bookmark" component={BookmarkScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default TabNavigator;
