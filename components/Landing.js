import React from 'react'
import { View,Text,Button,TouchableOpacity } from 'react-native'
function Landing({navigation}) {
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Welcome to Door Lock</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
             <Text style={{color:"blue"}}>Register</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Landing
