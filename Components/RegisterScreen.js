import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import React, { useState } from 'react';

export function RegisterScreen() {

    return (
        <View style={styles.container}>
            <Text>This is the registration screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20
    }
})