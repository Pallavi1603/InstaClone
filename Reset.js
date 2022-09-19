import React from "react";
import {View,TextInput,StyleSheet,TouchableHighlight,Text} from "react-native";

const Reset=()=>{
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

    const styles = StyleSheet.create({
        text:{
            borderWidth:2,
            borderColor:"#D3D3D3",
            borderRadius:8,
            letterSpacing:2,
            height:60,
           marginBottom:20,
        },
        login:{
            marginLeft:30,
            marginRight:30,
            marginTop:300,  
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
    
        })
        

    export default Reset;

