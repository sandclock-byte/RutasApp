import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  );

};

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppState>
  )
}

export default App;