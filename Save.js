import React,{useState,useEffect} from 'react'
import { View,TextInput,Image } from 'react-native'
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon,Input,Spinner } from '@ui-kitten/components';
import firebase from 'firebase'
import axios from 'axios'
 require("firebase/firestore")
 require("firebase/firebase-storage")
export default function Save(props) {
    const [loading,setLoading] = useState(false)

    const getState = async ()=>{
        setLoading(false)
        
    }
    useEffect(() => {
        getState()
    
    }, [])

    
    const uploadImage = async ()=>{
        const uri = props.route.params.image;
        console.log(uri)
        setLoading(true)
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
        console.log(serverresponse)
        let res = serverresponse.data;
            if(serverresponse){
                props.navigation.navigate("Result",{data:url,res})
            }
        }

    }

    return (
        <View style={{flex:1}}>
            <Image source={{uri:props.route.params.image}}  style={{flex:1}} />
    <Button onPress = {()=>uploadImage()}  disabled={loading?true:false} style={{borderRadius:0}} status="danger" >{loading? <Spinner status='danger'/>:"Send"}</Button>
        </View>
    )
}

        // const serverresponse = await axios.post("http://192.168.0.107:3000/upload",{upload:})
       // const childPath=`post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
             //  console.log("8888888888888888888888888888888888888"+response)
      //response = file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmlfinal-1dd02798-2aa3-441f-95ea-d0aad1366fbd/Camera/1f29269c-64c9-4bb3-b3bf-25db0b88896a.jpg

            // console.log(typeof(blob))
        // const body = new FormData()
        // body.append('file', blob)
        // console.log(typeof(body))
        // const responseserver = await axios.post('http://192.168.0.107:3000/upload', {
        // blob
        // })



                  //  const task = firebase
        //  .storage()
        //  .ref()
        //  .child(`post/${uri}`)
        //  .put(blob)
        //  .getDownloadURL()
        //  const taskProgress= snapshot=>{
        //  console.log(`transferred:${snapshot.bytesTransferred}`)
        // }
        // const taskCompleted=()=>{
        //     task.ref.getDownloadURL().then((snapshot)=>{
        //         console.log(snapshot)
        //     })
        // }
        // const taskError = snapshot=>{
        //     console.log(snapshot)
        // }
        // task.on("state_changed",taskProgress,taskError,taskCompleted)