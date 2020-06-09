import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';

import ListScreen from 'screens/ListScreen';
import BookmarkScreen from 'screens/BookmarkScreen';
import EditScreen from 'screens/EditScreen';
import BlankScreen from 'screens/BlankScreen';
import ViewScreen from 'screens/ViewScreen';

import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const TabNavigator = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#424242',
                    inactiveTintColor: '#9E9E9E',
                    showLabel: false,
                    borderTopColor: '#BDBDBD',
                    backgroundColor: '#FFFFFF',
                }}
            >
                <Tab.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Ionicons name="md-list-box" size={25} color={color} />
                        }
                    }}
                />
                <Tab.Screen
                    name="AddButton"
                    component={BlankScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="ios-add-circle" size={36} color="#DA5746" />
                        },
                        tabBarButton: () => (
                            <TouchableOpacity
                                opacity={0.8}
                                onPress={() => navigation.navigate('Edit')}
                                style={{
                                    justifyContent: 'center'
                                }}
                            >
                                <Ionicons name="ios-add-circle" size={36} color="#DA5746" />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Tab.Screen
                    name="Bookmark"
                    component={BookmarkScreen}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Ionicons name="md-heart" size={25} color={color} />
                        }
                    }}
                />
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="Tab"
                mode="modal"
                headerMode="none"
            >
                <AppStack.Screen name="Tab" component={TabNavigator} />
                <AppStack.Screen name="Edit" component={EditScreen} />
                <AppStack.Screen name="View" component={ViewScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
