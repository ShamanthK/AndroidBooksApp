import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Rating, Chip, Button, BottomSheet, ListItem, Icon } from 'react-native-elements';

export function Settings() {

    let settings = ['Sign In', 'Theme', 'Profile']

    return (
        <View style={styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    settingsList: {
        padding: 10
    }
})