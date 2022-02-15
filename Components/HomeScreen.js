import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import React, { useState } from 'react';
import { LoginScreen } from './LoginScreen';

export function HomeScreen({ navigation }) {

    const [showLogin, setShowLogin] = useState(false)

    const image = { uri: "https://wallpapercave.com/dwp2x/wp10055131.jpg" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Books App</Text>
                        <Text style={styles.titleText}>   Search for your favorite fiction and non fiction books</Text>
                        <Icon
                            name='auto-stories'
                            color='#00aced'
                            />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={() => setShowLogin(true)}></Button>
                        <Button title="Register as New User" onPress={() => navigation.navigate('Register')}></Button>
                        <Button title="Continue as guest user" onPress={() => navigation.navigate('User')}></Button>
                    </View>
                </View>
            </ImageBackground>
            <LoginScreen showLogin={showLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 20,
        padding: 20,
        display: 'flex',
        height: 700,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleContainer: {
        display: 'flex',
        height: 250,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        display: 'flex',
        height: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 350,
        marginLeft: 20
    },
    // emptyContainer: {
    //     height: 400
    // },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    // image: {
    //     flex: 1,
    //     justifyContent: "center"
    // },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        // resizeMode: 'cover',
        // justifyContent: 'center',
    }
})