import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export function MyBooks() {

    return (
        <View style={styles.container}>
            <Text>This is the My Books screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    }
})