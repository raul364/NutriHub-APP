import 'react-native-gesture-handler';
import React from 'react';



import MyScreens from './app/config/screens'
import { NavigationContainer } from '@react-navigation/native';

//for fonts

import * as Font from 'expo-font';

//UI kitten framework
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './app/config/custom-theme.json'; 
import { MaterialCommunityIconsPack } from './mci-icons';


export default () =>{
  return(<>
    <IconRegistry icons={[EvaIconsPack, MaterialCommunityIconsPack]} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}} >
      <MyScreens/>
    </ApplicationProvider>
  </>
  )
  
  };
  


