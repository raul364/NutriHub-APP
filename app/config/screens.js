import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../login'
import Signup from '../register/signup'
import signupPersonalDetails from '../register/signupPersonalDetails'
import welcomeScreen from '../welcomeScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen name="WelcomeScreen" component={welcomeScreen}/>  
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupNext" component={signupPersonalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;