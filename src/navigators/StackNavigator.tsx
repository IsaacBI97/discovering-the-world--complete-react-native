import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen, SingUpScreen } from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
      <Stack.Screen name="SignUpScreen" component={ SingUpScreen } />
    </Stack.Navigator>
  );
}