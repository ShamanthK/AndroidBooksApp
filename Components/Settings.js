import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Rating, Chip, Button, BottomSheet, ListItem, Icon, Avatar } from 'react-native-elements';
import { HomeScreen } from './HomeScreen';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../Redux/reduxSlice'

export function Settings() {

    let settings = ['Theme', 'Profile']

    const isLogin = useSelector((state) => state.books.loggedIn)
    const dispatch = useDispatch()

    return (
        <View>
            {isLogin && <View style={styles.container}>
                <View style={styles.avatar}>
                    <Avatar
                        size={64}
                        rounded
                        icon={{ name: 'person' }}
                        containerStyle={{ backgroundColor: '#00a7f7' }}
                    />
                </View>

                {settings.map((l, i) => (
                    <ListItem
                        key={i}
                    // containerStyle={l.containerStyle}
                    // onPress={() => saveBookmark(i)}
                    >
                        <ListItem.Content>
                            <ListItem.Title>
                                <View style={styles.settingsList}>
                                    <Text>{l}</Text>
                                </View>
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
                <View style={styles.signout}>
                    <Button
                        title={'Sign Out'}
                        onPress={() => dispatch(setLogin(false))} />
                </View>
                <View style={styles.logo}>
                    <Image
                        style={styles.appLogo}
                        source={require('../assets/appLogo.png')}
                    />
                    <Text>Books App</Text>
                </View>

            </View>}
            {!isLogin && <HomeScreen />}
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        padding: 15
    },
    settingsList: {
        padding: 10
    },
    signout: {
        padding: 100,
    },
    appLogo: {
        width: 150,
        height: 150
    },
    logo: {
        alignItems: 'center'
    }
})