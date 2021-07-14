import React from 'react';
import { TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
  } from 'react-native';

import { Icon,
  Input,
  Text,
  Button,
  useTheme,
  Box,
  Stack,
  FormControl,
 } from 'native-base';

import { Formik } from 'formik';
import backgroundStyle from './config/backgroundStyle';
//icons
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { background } from 'styled-system';

const AlertIcon = (props) => (
  <MaterialCommunityIcons {...props} name='alert-circle-outline'/>
);



export default function Login({navigation}) {
 
  const [show, setShow] = React.useState(false)
  
  const validate = (values) => {
    const errors = {};
    // empty field check
    if (!values.userName) {
      errors.userName = 'Username required';
    }
    
    if (!values.pass) {
      errors.pass = 'Password required';
    }
   
    return errors;
  };
 

  const onSubmit = (data) => {
    console.log('submiting with ', data);
    navigation.navigate('HomePage')
  };

  const handleClick = () => setShow(!show)



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
    <Formik initialValues={{ userName: '', pass: '' }} onSubmit={onSubmit} validate={validate}>
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      
      <Box w="100%" bg="background.800" style={[{justifyContent:'flex-end', flex: 1, }]} safeArea >
        
        <Stack space={4}  w="100%"  style={[ backgroundStyle.MainContainer, { justifyContent:'center', flex:9}]}>

          <FormControl isInvalid={'userName' in errors}>
            
            <Text style={[backgroundStyle.text, styles.textFormat]} color="primary.400">Username</Text>
            <Input
              ml={38}
              w="80%"
              placeholder='Username'
              onChangeText={handleChange('userName')}
              value={values.userName}
              placeholderTextColor="#939393"
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
              ml={38}
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon 
                as={
                  <FontAwesome name={"unlock-alt"} />
                }
                m={2}
                size="sm"
                color="#85c256"
                />
              }
              InputRightElement={
                <Icon 
                as={
                  <MaterialCommunityIcons name={show ? 'eye-off' : 'eye'} onPress={handleClick}/>
                }
                m={2}
                size="sm"
                color="#85c256"
                />
              }
              w="80%"
              placeholder='Password'
              caption={renderCaption}
              onChangeText={(value) => setPass({ ...pass, name: value })}
              status={'primary'}
              placeholderTextColor="#939393"
              onChangeText={handleChange('pass')}
              value={values.pass}
            />
            <FormControl.ErrorMessage>
              {errors.pass}
            </FormControl.ErrorMessage>
          </FormControl>


          <Button style={styles.button} variant={'unstyled'} onPress={() => navigation.navigate('Signup')} >
            <Text style={{color:'#7DBE4B'}}>
              Sign up
            </Text>
          </Button>

          </Stack>
        
          <View style={{flex:1, justifyContent:'flex-end'}}>
            <Button style={styles.button} bg="button.700" onPress={handleSubmit} >
            <Text color="primary.400">Login</Text>
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
    margin: 4,
    marginLeft: 42
  },
  InputBoxes:{
    width:'80%',
    height:'10%',
}
});