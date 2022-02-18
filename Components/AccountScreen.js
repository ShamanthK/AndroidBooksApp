import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Icon, Input, Overlay } from 'react-native-elements';

export function AccountScreen({ showLogin, showRegister }) {

    const [loginModal, setLoginModal] = useState(showLogin)
    const [registerModal, setRegisterModal] = useState(showRegister)

    useEffect(() => {
        console.log(showLogin)
        setLoginModal(showLogin)
    }, [showLogin])

    useEffect(() => {
        console.log(showLogin)
        setRegisterModal(showRegister)
    }, [showRegister])

    return (
        <>
            <Overlay isVisible={loginModal}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            //     setModalVisible(!modalVisible);
            // }}
            >
                <View style={styles.loginContainer}>
                    <View>
                        <Text style={styles.inputText}>Username:</Text>
                        <Input
                            // onChangeText={onChangeText}
                            // value={text}
                            placeholder='Enter Username'
                        />
                        <Text style={styles.inputText}>Password:</Text>
                        <Input
                            // onChangeText={onChangeNumber}
                            // value={number}
                            secureTextEntry={true}
                            placeholder='Enter Password'
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <Button title="Login" color="#f194ff" onPress={() => navigation.navigate('User')}></Button>
                        <Button title="Cancel" color="#f194ff" onPress={() => setLoginModal(false)}></Button>
                    </View>
                </View>
            </Overlay>
            <Overlay isVisible={registerModal}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed.");
            //     setModalVisible(!modalVisible);
            // }}
            >
                <View style={styles.registerContainer}>
                    <View>
                        <Text style={styles.inputText}>First Name:</Text>
                        <Input
                            // onChangeText={onChangeText}
                            // value={text}
                            placeholder='Enter First Name'
                        />
                        <Text style={styles.inputText}>Last Name:</Text>
                        <Input
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder='Enter Last Name'
                        />
                        <Text style={styles.inputText}>Email Address (Use email as username while login):</Text>
                        <Input
                            // onChangeText={onChangeText}
                            // value={text}
                            placeholder='Enter Email Address'
                        />
                        <Text style={styles.inputText}>Password:</Text>
                        <Input
                            // onChangeText={onChangeNumber}
                            // value={number}
                            secureTextEntry={true}
                            placeholder='Enter Password'
                        />
                        <Text style={styles.inputText}>Confirm Password:</Text>
                        <Input
                            // onChangeText={onChangeNumber}
                            // value={number}
                            secureTextEntry={true}
                            placeholder='Confirm Password'
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <Button title="Register" color="#f194ff" onPress={() => setRegisterModal(false)}></Button>
                        <Button title="Cancel" color="#f194ff" onPress={() => setRegisterModal(false)}></Button>
                    </View>
                </View>
            </Overlay>
        </>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        // top: 50,
        height: 300,
        width: 300,
        padding: 10,
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    registerContainer: {
        // top: 50,
        height: 600,
        width: 350,
        padding: 10,
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputText: {
        paddingBottom: 10,
        fontSize: 15
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
        // width: 250,
    }
})