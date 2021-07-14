import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../login'
import Signup from '../register/signup'
import SignupPersonalDetails from '../register/signupPersonalDetails'
import WelcomeScreen from '../WelcomeScreen';
import HomePage from '../HomePage'
import { justifyContent } from 'styled-system';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'
         screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#404040',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ title: 'NutriHub'}} />  
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupNext" component={SignupPersonalDetails} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;