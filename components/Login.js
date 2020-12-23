import React,{useState} from 'react'
import { View,StyleSheet } from 'react-native'
import { Layout, Text, ViewPager,Button, ButtonGroup,Icon,Input  } from '@ui-kitten/components';
import firebase from 'firebase'
import axios from 'axios'
// class Login extends React.Component {
//    constructor(props){
//        super(props);
//        this.state={
//            email:'',
//            password:'',
//            loading:false,
//            user:[]
   
//        }
//    this.onSignIn = this.onSignIn.bind(this)
//     }
//   async onSignIn(){  
//     const {email,password} = this.state;
//     const response = await firebase.auth().signInWithEmailAndPassword(email,password)
//     console.log("--------------new response ---------------")
//     console.log(response)
//     if(response){
//         this.setState({loading:false})
//     }

//    }
//     render() {
//         return (
        //     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        //     <Text>Login</Text>
        //      <TextInput 
        //     placeholder="Enter Your Email"
        //     onChangeText={(email)=>this.setState({email})}
        //     />
        //      <TextInput 
        //     placeholder="Enter Your Password"
        //     secureTextEntry={true}
        //     onChangeText={(password)=>this.setState({password})}
        //     />
        // <Button
        //  style={styles.button} disabled={this.state.loading?true:false} //this.state.loading?true:false
        // onPress={()=>{
        //    this.setState({loading:true})
        //     this.onSignIn()
        
        // }}
        // >SignIn</Button>

        // </View>
//         );
//     }
// }




const Login = ({navigation}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name, setName] = useState("")
    const [loading,setLoading] = useState(false)


    const onSubmit = async ()=>{
            
      await setLoading(true)
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(response)
        //  console.log("--------------klsdjflkdsflkdsfj__"+response)
        // const response1 = await axios.post("http://192.168.0.107:3000/login",{email:email,password:password}) 
    //  axios.get("http://192.168.0.107:3000/") 
    //  .then(data=>console.log(data))
        // console.log("--------------new response ---------------")
        // console.log(response1)
        if(response){
            navigation.navigate("Intro")
        }
      }
      catch(err){
          console.log(err)
      }

   
    }


    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text category="h1" style={{fontWeight:'bold',marginBottom:13}}>LogIn</Text>
         <Input 
                        style={{marginLeft:30,marginRight:30}}
        placeholder="Enter Your Email"
        onChangeText={(email)=>setEmail(email)}
        />
         <Input 
                        style={{marginLeft:30,marginRight:30}}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        onChangeText={(password)=>setPassword(password)}
        />
        
    <Button
         status="danger"
         style={{marginTop:13,marginBottom:13}}
     disabled={false} //loading?true:false
    onPress={()=>{
        onSubmit()
    
    }}
    >SignIn</Button>

    </View>
    );
}








const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      margin: 2,
    },
  });
export default Login;
