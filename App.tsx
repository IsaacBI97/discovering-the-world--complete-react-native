
import { NavigationContainer } from '@react-navigation/native';

import { PaperProvider } from 'react-native-paper';

import { LoginScreen } from "./src/screens/LoginScreen";

export const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <LoginScreen />
      </PaperProvider>      
    </NavigationContainer>
  );
}

