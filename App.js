import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, } from 'native-base';
import { theme } from './App/config/Theme'
import MyScreens from './App/config/screens'






export default function App() {
  // 2. Use at the root of your app 
  return (
    <NativeBaseProvider theme={theme}>
      <MyScreens/>
    </NativeBaseProvider>
  );
}