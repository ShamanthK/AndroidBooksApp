import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Rating, Chip, Button, BottomSheet, ListItem, Icon } from 'react-native-elements';
import { HomeScreen } from './HomeScreen';

export function Settings() {

    let settings = ['Sign In', 'Theme', 'Profile']

    const [isLogin, setIsLogin] = useState(false)

    return (
        <View>
        {isLogin && <View style={styles.container}>
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
        </View>}
        {!isLogin && <HomeScreen />}
        </View>
    )
}

const styles = StyleSheet.create({
    settingsList: {
        padding: 10
    }
})