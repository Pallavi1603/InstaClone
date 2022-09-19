import React from "react";
import {View,Text,StyleSheet,Image,TextInput,Button,TouchableHighlight,initialRouteName,TouchablewithoutFeedback} from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScr from "./SignupScr";
import Reset1 from "./Reset1";



const Stack=createNativeStackNavigator();

function LoginScr ({navigation}){
  return(
      <View style={styles.login}>
         <Text style={{fontSize:60,marginTop:200,marginLeft:120,color:"white",marginBottom:30}}>Tutor</Text>
          <TextInput
          style={styles.text}
          placeholderTextColor="grey"
          placeholder="Email"
          />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Password"
            style={styles.text1}/> 
          <Text  style={{marginLeft:280,marginBottom:10}}  onPress={()=>{navigation.navigate("Reset Password")}} >Forget password?</Text>
        <TouchableHighlight>
          <Text style={styles.submitText}>LOGIN</Text>
        </TouchableHighlight>
        <TouchableHighlight>
           <Text style={{paddingLeft:168,paddingTop:10,color:"white"}}
            onPress={()=>{navigation.navigate("Signup")}}>REGISTER</Text>
        </TouchableHighlight>
      </View>
     )
}
const Reset=({navigation})=>{
  return(
  <View style={styles.login}>
      
      <TextInput
          placeholderTextColor="grey"
          placeholder="Email"
          style={styles.text}
      /> 
     
      <TouchableHighlight
      style={styles.submit}
      underlayColor='#fff'>
    <Text  onPress={()=>{navigation.navigate("Change Password")}} style={styles.submitText}>Next</Text>
  </TouchableHighlight>
      </View>
  )}


const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={LoginScr}
         />
        <Stack.Screen
        name="Signup"
        component={SignupScr}
       />
        <Stack.Screen
        name="Reset Password"
        component={Reset}
       />
        <Stack.Screen
        name="Change Password"
        component={Reset1}
       />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  image:{
    width:350,
    height:120,
   marginTop:200,
   marginBottom:20,
   marginLeft:20
  },
  text:{
    borderWidth:2,
    borderColor:"#D3D3D3",
    borderRadius:10,
    letterSpacing:2,
    height:60,
   marginBottom:30,
   paddingLeft:10
  
   
  },
  text1:{
    borderWidth:2,
    borderColor:"#D3D3D3",
    borderRadius:10,
    letterSpacing:2,
    height:60,
    marginBottom:10,
   paddingLeft:10
  },
  login:{
    marginLeft:30,
    marginRight:30,
    marginTop:40,  
  },
submitText:{
    paddingTop:14,
    paddingBottom:14,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#008AD8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    fontWeight:"500"
},

 

});

export default App;