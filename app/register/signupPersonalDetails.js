import React from 'react';
import { TouchableWithoutFeedback,
  StyleSheet,
  View,
  SafeAreaView } from 'react-native';

import { Icon,
  Input,
  Text,
  Button,
  useTheme,
  Select,
  SelectItem,
  IndexPath } from '@ui-kitten/components';


import Colours from '../config/colours';
import BackgroundStyle from '../backgroundStyle';








const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);
export const ScaleIcon = (props) => (
    <Icon {...props} name='scale-bathroom' pack='MaterialCommunityIcons' />
    );

export const HeightIcon = (props) => (
<Icon {...props} name='human-male-height' pack='MaterialCommunityIcons' />
);


export default function signupPersonalDetails() {

  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fitness, setFitness] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [passConfirm, setPassConfirm] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);



  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

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
  <SafeAreaView style={[{ justifyContent:'center',flex:1, backgroundColor: theme['background-basic-color-1'] }]}>
    
    <View style={[BackgroundStyle.MainContainer, { justifyContent:'center', flex:9}]}>

        <Text style={[BackgroundStyle.text, styles.textFormat]}>Height</Text>
        <Input value={height}
            style={styles.text}
            placeholder='Height (cm)'
            accessoryRight={HeightIcon}
            onChangeText={nextValue => setHeight(nextValue)}
            style={styles.InputBoxes}
            status={'primary'}
            placeholderTextColor="#939393"
        />


        <Text style={[BackgroundStyle.text, styles.textFormat]}>Weight</Text>
        <Input value={weight}
            placeholder='weight (kg)'
            accessoryRight={ScaleIcon}
            onChangeText={nextValue => setWeight(nextValue)}
            style={styles.InputBoxes}
            status={'primary'}
            placeholderTextColor="#939393"
        />

        <Text style={[BackgroundStyle.text, styles.textFormat]}>Age</Text>
        <Input value={age}
            placeholder='Age'
            onChangeText={nextValue => setAge(nextValue)}
            style={styles.InputBoxes}
            status={'primary'}
            placeholderTextColor="#939393"
        />


        <Text style={[BackgroundStyle.text, styles.textFormat]}>Fitness level</Text>
        <Select
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem title='office job( very little)'/>
            <SelectItem title='1-2 x week'/>
            <SelectItem title='3-5 x week'/>
            <SelectItem title='6-7 x week'/>
            <SelectItem title='2x day'/>
        </Select>



        <Text style={[BackgroundStyle.text, styles.textFormat]}>Gender</Text>
        <Select
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <SelectItem title='Select'/>
            <SelectItem title='Male'/>
            <SelectItem title='Female'/>
        </Select>


        <Button style={styles.button} appearance='ghost' >
            <Text style={{color:'#7DBE4B'}}>
                Already have an account?
            </Text>
        </Button>


      </View>

      <View style={{flex:1, justifyContent:'flex-end'}}>
        <Button style={styles.button} appearance='filled' >
        <Text style= {BackgroundStyle.text}>Next</Text>
        </Button>
      </View>
    
    
  </SafeAreaView>
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
