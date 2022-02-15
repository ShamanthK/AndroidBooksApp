import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export function LoginScreen({ navigation, showLogin }) {

    const [loginModal, setLoginModal] = useState(showLogin)

    useEffect(() => {
        console.log(showLogin)
        setLoginModal(showLogin)
    }, [showLogin])

    return (
        <Modal
            animationType="slide"
            // transparent={true}
            visible={loginModal}
        // onRequestClose={() => {
        //     Alert.alert("Modal has been closed.");
        //     setModalVisible(!modalVisible);
        // }}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.inputText}>Enter username and password</Text>
                <View>
                    <Text style={styles.inputText}>Username:</Text>
                    <TextInput
                        style={styles.inputText}                        
                        // onChangeText={onChangeText}
                        // value={text}
                        placeholder='Enter Username'
                    />
                    <Text style={styles.inputText}>Password:</Text>
                    <TextInput
                        style={styles.inputText}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder='Enter Password'
                    />
                </View>
                <View style={styles.actionContainer}>
                    <Button title="Login" color="#f194ff" onPress={() => navigation.navigate('User')}></Button>
                    <Button title="Cancel" color="#f194ff" onPress={() => setLoginModal(false)}></Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        top: 50,
        height: 250,
        width: 300,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputText: {
        paddingBottom: 10,
        fontSize: 20
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
    }
})