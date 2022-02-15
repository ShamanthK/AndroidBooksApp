import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserScreen } from './UserScreen';
import { MyBooks } from './MyBooks';
import { Discover } from './Discover';
import { Icon } from 'react-native-elements';
import { Settings } from './Settings';

export function BottomTabs() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={UserScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name='home' />
                ),
            }} />
            <Tab.Screen name="My Books" component={MyBooks} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name='bookmark' />
                ),
            }} />
            <Tab.Screen name="Discover" component={Discover} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name='search' />
                ),
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon
                        name='settings' />
                ),
            }} />
        </Tab.Navigator>
    )
}