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
  Select,
  CheckIcon,
  FormControl
  } from 'native-base';

//Icons
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';

export const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

import backgroundStyle from '../config/backgroundStyle';

export default function Signup({navigation}) {


  const validate = (values) => {
    const errors = {};
    // empty field check
    if (!values.height) {
      errors.height = 'height required';
    }
    if (!values.weight) {
      errors.weight = 'Weight required';
    }
    if (!values.age) {
      errors.age = 'Age required';
    }
    if (!values.gender) {
      errors.gender = 'Gender required';
    }
    if (!values.activityLvl) {
      errors.activityLvl = 'Activity required';
    }
    return errors;
  };
 

  const onSubmit = (data) => {
    console.log('submiting with ', data);
    navigation.navigate('HomePage')
  };


  return (
    <Formik initialValues={{ height: '', weight: '', age:'', gender:'', activityLvl:'' }} onSubmit={onSubmit} validate={validate}>
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Box style={[{ justifyContent:'center',flex:1, }]} bg={'background.800'} safeArea>

          <Stack space={2} w="100%"  style={[ backgroundStyle.MainContainer, { justifyContent:'center', flex:9}]}>  

            <FormControl isInvalid={'height' in errors}>
              <Text style={[backgroundStyle.text, styles.textFormat]} color="primary.400">Height</Text>
              <Input
                ml={38} 
                w="80%"
                placeholder='Height cm'
                placeholderTextColor="#939393"
                keyboardType='numeric'
                onChangeText={handleChange('height')}
                value={values.height}
                InputLeftElement={
                  <Icon 
                  as={ <MaterialCommunityIcons name="human-male-height" />}
                  m={2}
                  size="sm"
                  color="#85c256"
                  />        
                }
              />
              <FormControl.ErrorMessage>
                {errors.height}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'weight' in errors}>

              <Text style={[backgroundStyle.text, styles.textFormat]} color="primary.400">Weight</Text>
              <Input 
                ml={38} 
                w="80%"
                placeholder='Weight KG'
                status={'primary'}
                placeholderTextColor="#939393"
                keyboardType='numeric'
                onChangeText={handleChange('weight')}
                value={values.weight}
                InputLeftElement={
                  <Icon 
                  as={ <MaterialCommunityIcons name={"scale-bathroom"} /> }
                  m={2}
                  size="sm"
                  color="#85c256"
                  />
                }
              />
              <FormControl.ErrorMessage>
                {errors.weight}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'age' in errors}>
              <Text style={[backgroundStyle.text, styles.textFormat]} color={'primary.400'}>Age</Text>
              <Input 
                ml={38} 
                w="80%"
                placeholder='Age'
                placeholderTextColor="#939393"
                keyboardType='numeric'
                onChangeText={handleChange('age')}
                value={values.age}
              />
              <FormControl.ErrorMessage>
                {errors.age}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'gender' in errors}>
              <Text style={[backgroundStyle.text, styles.textFormat]} color={'primary.400'}>Gender</Text>
              <Select
                ml={38}
                mr={38} 
                selectedValue={values.gender}
                minWidth="80%"
                accessibilityLabel="Select Gender"
                placeholder="Select Gender"
                onValueChange={handleChange('gender')}
                _selectedItem={{
                  bg: "primary.400",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Male" value="male" />
                <Select.Item label="Female" value="female" />
              </Select>
              <FormControl.ErrorMessage>
                {errors.gender}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'activityLvl' in errors}>  
              <Text style={[backgroundStyle.text, styles.textFormat]} color={'primary.400'}>Activity level</Text>
              <Select
                ml={38}
                mr={38}
                selectedValue={values.activityLvl}
                minWidth="80%"
                accessibilityLabel="Select activity level"
                placeholder="Select activity level"
                onValueChange={handleChange('activityLvl')}
                _selectedItem={{
                  bg: "primary.400",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Office work (sedentary)" value=" sedentary" />
                <Select.Item label="exercise 1-2 days/week" value="light" />
                <Select.Item label="exercise 3-5 days/week" value="moderate" />
                <Select.Item label="exercise 6-7 days/week" value="active" />
                <Select.Item label="exercise 2x days" value="athlete" />
              </Select>
              <FormControl.ErrorMessage>
                {errors.activityLvl}
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
