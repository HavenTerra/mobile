// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Login from './screens/LoginScreen';
import Home from './screens/Home';
import Deposit from './screens/Deposit';
import Withdraw from './screens/Withdraw';
import Store from './context/Store';

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Store>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Data" component={Home} />
          <Stack.Screen name="Deposit" component={Deposit}/>
          <Stack.Screen name="Withdraw" component={Withdraw}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
}

export default App;