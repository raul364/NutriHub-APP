import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
      // Add new color
      background:{
        50: '#f2f2f8',
        100: '#d8d9da',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#252627', //main background colour
        900: '#040f0f',
      },
      primary:{
        50: '#edfae4',
        100: '#d4ecc3',
        200: '#badd9f',
        300: '#9fd07b',
        400: '#85c256', // main text colour
        500: '#6ca93d',
        600: '#53832e',
        700: '#3b5e20',
        800: '#223910',
        900: '#061500',
      },
      secondary:{
        50: '#fceff2',
        100: '#ddd7d9',
        200: '#c1bfbf',
        300: '#a6a6a6', //main second text colour
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#413f40',
      },
      button:{
        50: '#ebf3fb',
        100: '#d5d7de',
        200: '#bbbdc4',
        300: '#9fa2ab',
        400: '#858792',
        500: '#6c6e79',
        600: '#53555f',
        700: '#3b3d44', //main button colour
        800: '#23252b',
        900: '#0b0b15',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });



  
