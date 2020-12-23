import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon,Input  } from '@ui-kitten/components';

const Fail = () => {
    return (
        <View  style={{backgroundColor:"#ff5722",borderWidth:1,borderColor:"red",paddingTop:10,paddingBottom:10,paddingLeft:60,paddingRight:60,marginTop:15,marginBottom:10}}>
        <Text  category="h4" style={{fontWeight:'bold'}}>Access Denied</Text>
        </View>
        
    );
}
//
export default Fail;