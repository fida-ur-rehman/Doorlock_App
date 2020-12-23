import React,{useEffect,useState} from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import firebase from 'firebase'



const Intro = ({navigation}) => {

    const [state,setState] =useState("")

    const getUser = (username)=>{
        setState(username)
}
    useEffect(() => {
        var user = firebase.auth().currentUser;
    
    if (user) {
        const name = user.email
        const username = name.split("@")[0]
      console.log(username)// User is signed in.
      getUser(username)
    } else {
      console.log("no user")// No user is signed in.
    }
    }, [])
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Image source={require("../images/bot.png")} style={{width:200,height:200}} />

    <Text style={styles.hey}>Hey, <Text style={styles.name}>{state}</Text> </Text>
    <Text style = {styles.inst}>Instruction:</Text>
    <Text style={styles.para}>
        When your camera is pointing towards any face, make sure it's properly aligned and then the app will automatically
        detect the face.  
    </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Camera")} ><Text style={{color:'blue'}}>Click to go to camera</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    name:{
        color:"red",  
        textShadowColor: 'rgba(0, 0, 0, .30)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 50,
        fontSize:25
    },
    hey:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:30,
        marginBottom:30
    },
    para:{
        textAlign:'center',
        width:200,
        marginBottom:10
    },
    inst:{
        backgroundColor:'pink',
        fontWeight:'bold',
        color:"red",
        marginBottom:5
    }
})

export default Intro;