import React, { memo } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';

const ImagePicker = () => {
    let openImagePickerAsync = async () => {
        let permissionResult = await ExpoImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ExpoImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    };

    return (
        <View>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});

export default memo(ImagePicker);
