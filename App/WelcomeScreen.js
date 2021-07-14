import 'react-native-gesture-handler';
import React from 'react'

import {StyleSheet,
        View,
        Image,
        } from 'react-native';

import {Text,
        useTheme,
        Button,
        Box
        } from 'native-base';


import { LinearGradient } from 'expo-linear-gradient';

//icons
import { FontAwesome } from '@expo/vector-icons';





export default function welcomeScreen({navigation}) {
    const {colors} = useTheme();
    
    return (
        
            <Box bg="background.800" style={[{justifyContent:'flex-end', flex: 1, }]} safeArea >
                {/* app background colour with gradient */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(90,90,90,1)', 'transparent']}
                    style={styles.background}
                />
                
                {/* add logo here with glow effects */}
                <Image source={require('../assets/logo.png')} style={styles.logo} />

                
            
                <Button bg="button.700" onPress={() => navigation.navigate('Login')} style={styles.button}
                    endIcon={<FontAwesome name="lock" size={24} color="black" />}>

                    <Text color="primary.400">Login</Text>
                </Button>

                <View style={styles.space}></View>

                <Button bg="button.700" onPress={() => navigation.navigate('Signup')} style={styles.button} 
                    endIcon={<FontAwesome name="user" size={24} color="black" />}>

                    <Text color="primary.400">Register</Text>
                </Button>
                
            </Box>
        
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
  
