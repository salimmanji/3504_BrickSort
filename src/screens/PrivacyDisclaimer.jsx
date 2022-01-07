import React from 'react';
import { Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

const PrivacyDisclaimer = ( { navigation }) => {
  return (

    <View >
      <Image source={require('./../Logo2.jpg')} style={{ width: 323, height: 400 }} />
      <Button
        style={{ marginLeft: 25, marginRight: 25 }}
        mode="contained"
        color="#F6EC36"
        onPress={() => {
           navigation.navigate('Login');
        }}
      >
        Return to Login Page
          </Button>
        <Text>
            This is a student project, with our main focus being learning React Native. User privacy and security are our highest priority, and we do not seek to capture or use any
            user inputted information relating to the BrickSort application. In using our app, you agree that all claims against us are considered null and void.
        </Text>
     
    </View>
  );
};

PrivacyDisclaimer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};


export default PrivacyDisclaimer;