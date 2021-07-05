import React from 'react';
import { TouchableWithoutFeedback,
  StyleSheet,
  View,
  SafeAreaView } from 'react-native';

import { Icon,
  Input,
  Text,
  Button,
  useTheme, } from '@ui-kitten/components';


import Colours from './config/colours';
import BackgroundStyle from './backgroundStyle';

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);



export default function Login() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
      <Text style={[BackgroundStyle.text, styles.textFormat]}>Username</Text>
      <Input value={user}
        //textStyle={{color:'white'}}
        style={styles.text}
        placeholder='Username'
        onChangeText={nextValue => setUser(nextValue)}
        status={'primary'}
        placeholderTextColor="#939393"
        style={styles.InputBoxes}
      />
      <Text style={[BackgroundStyle.text, styles.textFormat]}>Password</Text>
      <Input value={pass}
        placeholder='Password'
        caption={renderCaption}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={nextValue => setPass(nextValue)}
        status={'primary'}
        placeholderTextColor="#939393"
        style={styles.InputBoxes}
      />
      </View>

      <View style={{flex:1, justifyContent:'flex-end'}}>
        <Button style={styles.button} appearance='filled' >
        <Text style= {BackgroundStyle.text}>Login</Text>
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