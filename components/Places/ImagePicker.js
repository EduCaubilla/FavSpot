import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Button, View, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState("");

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
           const permissionResponse = await requestPermission();
           return permissionResponse.granted;
        } 
        else if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient permissions", "You need to grant camera permissionsto use the app.");
            return false;
        }
        return true;
    }

    async function takeImageHandler(){
       const hasPermission = await verifyPermissions();

       if(!hasPermission) {
        return;
       }

       const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.5
       });
       console.log(image)
       console.log(image.assets[0].uri)
       setPickedImage(image.assets[0].uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedImage) {
        imagePreview = <Image source={{uri: pickedImage}}/>
    }

    return (
      <View>
        <View style= {styles.imagePreview}>
            {imagePreview}
        </View>
        <Button style= {styles.image} title="Take image" onPress={takeImageHandler} />
      </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 5
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

