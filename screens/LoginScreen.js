import { useState } from "react";
import { useDispatch } from 'react-redux' 
import { View, TextInput, StyleSheet, Button } from "react-native";
import { LoginAction } from "../store/actions/LoginAction"; 
const LoginScreen = ({ navigation, route, options, back })=>{

    const [username,setUserName] = useState()
    const [password,setPassword] = useState()

    const loginDispatch = useDispatch()
    const submitHandler = () =>{
        loginDispatch(LoginAction(username,password))
      }
    
      const userInputHandler = (enteredtext) =>{
          setUserName(enteredtext)
      }

      const psswordHandler = (enteredtext) =>{
        setPassword(enteredtext)
    }

    const navigateToRegister=()=>{
            navigation.navigate('Register', {name: 'Jane'})
       //    navigation.navigate('Manage Profile', {name: 'Jane'})
    }
    return(
        <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='username' onChangeText={userInputHandler} />
          <TextInput style={styles.passwordInput} placeholder='password' onChangeText={psswordHandler} />
          <View style={styles.buttonContainer}>
          <Button title='Login' onPress={submitHandler} />
          <Button title='Register' onPress={navigateToRegister} />
          </View>
      </View>
    </View>  
    )
}

const styles = StyleSheet.create({
    appContainer: {
      flex:1,
      padding:50,
      paddingHorizontal:16,
      justifyContent:'center',
    },
    inputContainer:{
      justifyContent: 'space-between',
      paddingBottom: 24
    },
  
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textInput:{
      borderColor:'#cccccc',
      borderBottomWidth:1,
      margin:6,
      padding:8
    },
    passwordInput:{
        borderColor:'#cccccc',
        borderBottomWidth:1,
        margin:15,
        padding:8
      },
  });

  
export default LoginScreen;