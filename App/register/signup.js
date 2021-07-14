import React from 'react';
import { TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
  } from 'react-native';

import {Icon,
  Input,
  Text,
  Button,
  useTheme,
  Box,
  Stack,
  FormControl
  } from 'native-base';

//Icons
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';

export const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

import backgroundStyle from '../config/backgroundStyle';

export default function Signup({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


  const validate = (values) => {
    const errors = {};
    // empty field check
    if (!values.userName) {
      errors.userName = 'Username required';
    }
    else if (values.userName.length < 3 || values.userName.length > 25){
      errors.userName = 'Username must be between 3 - 25'
    }
    if (!values.pass) {
      errors.pass = 'Password required';
    }
    else if (values.pass.length < 8){
      errors.pass = 'Password must be contain at least 8 characters'
    }
    else if(values.pass.length > 8 && !strongRegex.test(values.pass) ){
      error.pass = 'Password must contain Capital letters, numbers, and special characters'
    }
    else if (values.pass != values.confirmPass) {
      errors.confirmPass = 'Password does not match';
    }
    if (!values.email) {
      errors.email = 'Email required';
    }
    else if(!emailRegex.test(values.email) ){
      errors.email = 'Email is not correct'
    }
    return errors;
  };
 

  const onSubmit = (data) => {
    console.log('submiting with ', data);
    navigation.navigate('SignupNext')
  };
 

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
      </View>
    )
  }
  const theme = useTheme();

  return (
    
    <Formik initialValues={{ userName: '', pass: '', confirmPass:'', email:'' }} onSubmit={onSubmit} validate={validate}>
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <Box style={[{ justifyContent:'center',flex:1, }]} bg={'background.800'} safeArea>
          

          <Stack space={2} w="100%"  style={[ backgroundStyle.MainContainer, { justifyContent:'center', flex:9}]}>

            
              <FormControl isInvalid={'userName' in errors}>
          
                <Text style={[backgroundStyle.text, styles.textFormat]} color="primary.400">Username</Text>
            
                <Input
                  ml={38} 
                  w="80%"
                  placeholder='Username'
                  placeholderTextColor="#939393"
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                  InputLeftElement={
                    <Icon 
                    as={ <FontAwesome5 name="user" />}
                    m={2}
                    size="sm"
                    color="#85c256"
                    />        
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.userName}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={'pass' in errors}>
                <Text style={[backgroundStyle.text, styles.textFormat]} color="primary.400">Password</Text>
                <Input 
                  type={"password"}
                  InputLeftElement={
                    <Icon 
                    as={ <FontAwesome name={"unlock-alt"} /> }
                    m={2}
                    size="sm"
                    color="#85c256"
                    />
                  }
                  ml={38} 
                  w="80%"
                  placeholder='Password'
                  caption={renderCaption}
                  status={'primary'}
                  placeholderTextColor="#939393"
                  onChangeText={handleChange('pass')}
                  value={values.pass}
                />
                <FormControl.ErrorMessage>
                  {errors.pass}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={'confirmPass' in errors}>
            
                <Text style={[backgroundStyle.text, styles.textFormat]} color={'primary.400'}>Confrim Password</Text>
                <Input 
                type={"password"}
                InputLeftElement={
                  <Icon 
                  as={ <FontAwesome name={"unlock-alt"} /> }
                  m={2}
                  size="sm"
                  color="#85c256"
                  />
                }
                ml={38} 
                w="80%"
                placeholder='Confirm Password'
                caption={renderCaption}
                placeholderTextColor="#939393"
                onChangeText={handleChange('confirmPass')}
                value={values.confirmPassword}
                />
                <FormControl.ErrorMessage>
                  {errors.confirmPass}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={'email' in errors}>
                <Text style={[backgroundStyle.text, styles.textFormat]} color={'primary.400'}>Email</Text>
                <Input 
                  ml={38} 
                  w="80%"
                  placeholder='Email'
                  placeholderTextColor="#939393"
                  keyboardType='email-address'
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <FormControl.ErrorMessage>
                  {errors.email}
                </FormControl.ErrorMessage>
              </FormControl>


            

            <Button style={styles.button} variant={'unstyled'} onPress={() => navigation.navigate('Login')} >
              <Text style={{color:'#7DBE4B'}}>
                Already have an account?
              </Text>
            </Button>
          
          </Stack>
          <View style={{flex:1, justifyContent:'flex-end'}}>
            <Button bg={'button.700'} style={styles.button}  onPress={handleSubmit} >
            <Text style= {backgroundStyle.text} color={'primary.400'}>Next</Text>
            </Button>
          </View>


        
        
        
      </Box>  
    </TouchableWithoutFeedback>
    )}
  </Formik>
  
);
}

const styles = StyleSheet.create({
  
  captionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  captionIcon: {
      width: 10,
      height: 10,
      marginRight: 5
  },
  captionText: {
      fontSize: 12,
      fontWeight: "400",
      //fontFamily: "opensans-regular",
      color: "#2c8800",
  },
  button: {
      width: '100%',
  },
  textFormat: {
      alignSelf:'flex-start',
      marginLeft: 42,
      fontSize:18
  },
 
});
