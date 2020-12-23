import React,{useState,useEffect} from 'react'
import { View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon,Input  } from '@ui-kitten/components';
import openLock from './images/open-lock.png'
import Fail from './Fail'
import axios from 'axios'
const Result = (props) => {
    console.log(props.route.params.res)
    const [state,setState]=useState(props.route.params.res) //props.route.params.res //suspicious
    const [user,setUser] = useState(false)
    const addUser = async ()=>{
       const response = await axios.post("http://192.168.43.116:3000/adduser",{url:props.route.params.data})
       if(response){
           setUser(true)
           
       }
    }
   
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    
  {state==='relative' || user===true?<Image source={require("./images/open-lock.png")} style={{height:200,width:200}} />:
  <Image style={{height:200,width:200}}  source={require("./images/lock.png")} />
  }

            {state==='relative' || user===true?(
             

            <View style={{backgroundColor:"#ccf6c8",borderWidth:1,borderColor:"green",paddingTop:10,paddingBottom:10,paddingLeft:60,paddingRight:60,marginTop:15,marginBottom:10}}>
                <Text category="h4" style={{fontWeight:'bold'}}>Access Granted</Text>
            </View>
         
            ):
           <Fail />
            }
            <Text category="h6" style={{marginBottom:13,textAlign:"center"}}>Sorry for the delay from our side</Text>
       <TouchableOpacity onPress={()=>props.navigation.navigate("Intro")}><Text style={{color:"blue"}}>Click to Go to Camera Dashboard</Text></TouchableOpacity>
       {(state!=="relative" && user!==true) && 
        <TouchableOpacity onPress={()=>addUser()}><Text style={{textAlign:'center',marginLeft:25,marginRight:25,marginTop:10,color:"blue"}}>If you know that person click here to add him/her in your trustable list</Text></TouchableOpacity>
       
       }
     { user && <Text category="h6" style={{marginTop:10,textAlign:"center",color:'green'}}>User successfully added</Text>}
        </View>
    );
}
const styles = StyleSheet.create({

    icon: {
        width: 142,
        height: 142,
      },
});

export default Result;