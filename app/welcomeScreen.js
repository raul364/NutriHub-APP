import 'react-native-gesture-handler';
import React from 'react'


import {StyleSheet,
        View,
        SafeAreaView,
        Image,
         } from 'react-native';
import { Layout, Text, useTheme, Button } from '@ui-kitten/components';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

import BackgroundStyle from './backgroundStyle';
import Colours from './config/colours';




export default function welcomeScreen({navigation, eva}) {
    const theme = useTheme();
    
    return (
        <SafeAreaView style={[{ backgroundColor: theme['background-basic-color-1'], justifyContent:'flex-end', flex: 1, }]} >
            {/* app background colour with gradient */}
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(90,90,90,1)', 'transparent']}
                style={styles.background}
            />
            
            {/* add logo here with glow effects */}
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            
            
            <Button onPress={() => navigation.navigate('Login')} style={styles.button}>
                <Text style= {BackgroundStyle.text}>Login</Text>
            </Button>
           <View style={styles.space}></View>
            <Button onPress={() => navigation.navigate('Signup')} style={styles.button} >
                <Text style= {BackgroundStyle.text}>Register</Text>
            </Button>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // text colour : hsla(100,69%,70%,.9)
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 550,

      },
      logo: {
        flex: 0.15,
        alignSelf: 'center',
        marginTop: 100,
        padding:50,
        top: 30,
        position: 'absolute'
      },
    Button: {
        width: '100%',
        
    },
    space: {
        margin: 2,
    },

  });
  
