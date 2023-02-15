import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories } from './screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="categories" component={Categories}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}


export default Navigation