import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/Screens/LoginScreen/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen/RegisterScreen';
import MainScreen from './src/Screens/MainPage/MainScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoadingScreen from './src/Screens/LoadingScreen/LoadingScreen';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer', 'AsyncStorage has been']);
// warnings to ignore



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoadingScreen'>
          <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
          <Stack.Screen options={{ headerShown: false }} name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;

