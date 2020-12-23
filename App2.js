import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker'
import Save from './Save'
import * as FaceDetector from 'expo-face-detector';
import firebase from 'firebase'
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon,Input ,Spinner } from '@ui-kitten/components';
import axios from 'axios'
export default function App2({navigation}) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera,setCamera] = useState(null)
  const [image,setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      setHasCameraPermission(true)
      setHasGalleryPermission(true)
      
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status==='granted')
      // if(galleryStatus.status!=="granted"){
      //   alert("Sorry, we need camera roll permissions to make this work!")
      // }
      // const response2 = await firebase.firestore().collection("post")
      // .doc(firebase.auth().currentUser.uid)
      // .get()
      // .then((snapshot)=>{
      //     console.log(snapshot.docs)
      // })
  
      

    })();
  }, []);

  const takePicture = async ()=>{
    if(camera){
      const data = await camera.takePictureAsync(null);
      setHasCameraPermission(false)
      setHasGalleryPermission(false)
      console.log(data)
      console.log(data.path)
      setImage(data.uri)
      const uri = data.uri;
      const response = await fetch(uri)
      const blob = await response.blob()
      const storageRef = firebase.storage().ref()
      const fileRef = storageRef.child(`post/${uri.toString()}`)
      await fileRef.put(blob)
      const url = await fileRef.getDownloadURL()
      console.log(url)
      if(url){
        const serverresponse = await axios.post(`http://192.168.43.116:3000/url`,{
          url
      })
      let res = serverresponse.data;
          if(serverresponse){
              navigation.navigate("Result",{data:url,res})
          }
      }



    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

   console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View  style={{flex:1,alignItems:'center',justifyContent:'center'}}><Spinner status='danger'/></View>;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
      <Camera 
      ref = {ref=>setCamera(ref)}
      style={styles.fixedRatio} 
      type={type}
      ratio = {"1:1"}
        faceDetectorSettings={{
        mode: FaceDetector.Constants.Mode.accurate,
        detectLandmarks: FaceDetector.Constants.Landmarks.all,
        runClassifications: FaceDetector.Constants.Classifications.all,
        minDetectionInterval: 5000,
        tracking: true,
      }}
      onFacesDetected={
        ({ faces }) => {
          if(faces.length > 0){
            takePicture()
          }
      }
      }
      // onFacesDetected={(face)=>{
      //   if(face)
      //  }}
   
      />
      </View>
    
          <Button style={{borderRadius:0}}
     status = "danger" 
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>Front Camera</Button>
          <Button style={{borderRadius:0}}  status = "danger"  onPress={()=>takePicture()}>Take Picture </Button>
          <Button style={{borderRadius:0}} status = "danger"  onPress={()=>pickImage()}> Pick Image from Gallery</Button>
          <Button style={{borderRadius:0}} status = "danger"  onPress = {()=>navigation.navigate("Save",{image})}>Save</Button>
          {image&&<Image source={{uri:image}} style={{flex:1}}/>}
    </View>
  );
}


const styles=StyleSheet.create({
  cameraContainer:{
    flex:1,
    flexDirection:'row'

  },
  fixedRatio:{
    flex:1,
    aspectRatio:1
  }
})