import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/products/Products';
const Tab=createBottomTabNavigator();
const TabNavigator=()=>{
    return(
        
            <Tab.Navigator>
            <Tab.Screen name="products" component={Products} />
            </Tab.Navigator>
        
    )
}

export default TabNavigator;