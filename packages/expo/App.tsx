import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/images/logo.png';
import ImagePicker from './components/image-picker/image-picker.component';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app 1234!</Text>
            <Text>My text!</Text>
            <StatusBar style="auto" />
            <Image source={logo} style={styles.logo} />
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.testImage} />
            <View style={styles.containerAlignLeft}>
                <View style={styles.block1}>
                    <Text>width 20</Text>
                </View>
                <View style={styles.block2}>
                    <Text>width 50%</Text>
                </View>
                <View style={styles.block3}>
                    <Text>width 350</Text>
                </View>
                <View style={styles.block4}>
                    <Text>width 100%</Text>
                </View>
            </View>
            <ImagePicker />
        </View>
    );
}

const styles = StyleSheet.create({
    block1: { width: 20, backgroundColor: 'green' },
    block2: { width: '50%', backgroundColor: 'green' },
    block3: { width: 350, backgroundColor: 'green' },
    block4: { flexGrow: 1, width: '100%', backgroundColor: 'green' },
    container: {
        margin: 20,
        marginTop: 50,
        overflow: 'scroll',
        backgroundColor: '#fff'
    },
    containerAlignLeft: {
        justifyContent: 'flex-start'
    },
    logo: { width: 305, height: 159 },
    testImage: { width: 305, height: 159 }
});
