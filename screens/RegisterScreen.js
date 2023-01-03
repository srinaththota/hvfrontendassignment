import { View, TextInput, StyleSheet, Button } from "react-native";

const RegisterScreen = ({ navigation, route, options, back })=>{
    const submitHandler = () =>{
        console.log("check")
      }
    
      const userInputHandler = (enteredtext) =>{
          console.log(enteredtext)
      }

      const userPasswordHandler = (enteredtext) =>{
        console.log(enteredtext)
    }

    return(
        <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='username' onChangeText={userInputHandler} />
          <TextInput style={styles.textInput} placeholder='password' onChangeText={userPasswordHandler} />
          <View>
          <Button title='Register' onPress={submitHandler} />
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
  
    textInput:{
      borderColor:'#cccccc',
      borderBottomWidth:1,
      marginBottom:6,
      width:'70%',
      marginRight:8,
      padding:8
    },
  });

export default RegisterScreen;