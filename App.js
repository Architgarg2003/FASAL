import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSelection from './components/LoginSelection';
import FarmerForm from './components/FarmerForm'
import BusinessForm from './components/BusinessForm';
import SplashScreen from './components/SplashPage';
import NumberLogin from './components/NumberLogin';
import HomeScreen from './components/HomeScreen';
import MarketPlace from './components/MarketPlace';
// import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="NumberLogin" component={NumberLogin} options={{headerShown:false}} />
        <Stack.Screen name="LoginSelection" component={LoginSelection} options={{ headerShown: false }} />
        <Stack.Screen name="FarmerForm" component={FarmerForm} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessForm" component={BusinessForm} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MarketPlace" component={MarketPlace} options={{ headerShown: false }} />
        {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
