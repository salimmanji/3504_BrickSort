import React, { useEffect, useState } from 'react';
import { View, Platform, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

  export default function Imageupload() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestCameraPermissionsAsync();
              
              if (status !== 'granted') {
                alert('Sorry, Camera permissions are required!');
              }
            }
          })();
        }, []);

        useEffect(() => {
            (async () => {
                if (Platform.OS !== 'web') {
                  const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                  
                  if (status !== 'granted') {
                    alert('Sorry, Camera Roll permissions are required!');
                  }
                }
              })();
            }, []);

        const takePhoto = async () => {
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              setImage(result.uri);
            }
          };

          const chooseImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              setImage(result.uri);
            }
          };

          const sendImage = () => {
              console.log("you're trying to upload to Google autoML");
          }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                mode="contained"
                title="Take Photo"
                onPress={takePhoto}>
                    Take Photo
                </Button>
            <Button
                mode="contained"
                title="Choose from Gallery"
                onPress={chooseImage}
                >
                    Choose From Gallery
                </Button>
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
            <Button 
                mode="contained"
                title="Submit"
                onPress={sendImage}
            >
                Submit
                </Button>
        </View>
    );
}