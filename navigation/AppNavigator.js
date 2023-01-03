import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../screens/LoginScreen';
import ManageProfile from '../screens/ManageProfile';
import RegisterScreen from '../screens/RegisterScreen';
const Stack = createStackNavigator();
const AppNavigator=()=>{
    
    return(<Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Manage Profile" component={ManageProfile} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>)
}

export default AppNavigator