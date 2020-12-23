import * as React from 'react';
import { View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Save from './Save'
import App2 from './App2'
import Pager from './Pager'
import Result from './Result'
import Intro from './components/Intro'
import * as firebase from 'firebase'
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmc-LwC6UzDcPOQbBO3f8Yy1MFT75f2ds",
  authDomain: "mlfinal-90543.firebaseapp.com",
  databaseURL: "https://mlfinal-90543.firebaseio.com",
  projectId: "mlfinal-90543",
  storageBucket: "mlfinal-90543.appspot.com",
  messagingSenderId: "914099792843",
  appId: "1:914099792843:web:a23d95b890107bcceea44e",
  measurementId: "G-33XYHRRPXN"
};
if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig)
}



function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button title="go to camera" onPress={()=>navigation.navigate("Camera")} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createStackNavigator();

export default function App() {
  return (
    <>
        <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Pager">
      <Tab.Screen name="Pager" component={Pager} options={{header:()=>null}} />
        <Tab.Screen name = "Landing" component = {Landing} options={{header:()=>null}}/>
        <Tab.Screen name = "Register" component={Register} options={{header:()=>null}} />
        <Tab.Screen name = "Login" component={Login} options={{header:()=>null}} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name = "Intro" component={Intro} options={{header:()=>null}}/>
        <Tab.Screen name="Camera" component={App2} options={{header:()=>null}} />
      <Tab.Screen name = "Save" component={Save} />
      <Tab.Screen name = "Result" component={Result} options={{header:()=>null}} />
      </Tab.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}