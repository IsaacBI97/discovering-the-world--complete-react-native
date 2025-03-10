import { NavigationContainer } from '@react-navigation/native';

import { PaperProvider } from 'react-native-paper';

import { LoginScreen } from "./src/screens/LoginScreen";
import { SingUpScreen } from './src/screens';

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SingUpScreen />
      </PaperProvider>      
    </NavigationContainer>
  );
}

