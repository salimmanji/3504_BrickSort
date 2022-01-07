import React from 'react';
import { View} from 'react-native';
import 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

const TestScreen = ( { navigation }) => {
    return (
  
      <View >
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('Login');
          }}
        >Login</Button>
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('Privacy');
          }}
        >Privacy Disclaimer</Button>
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('Upload');
          }}
        >PictureUpload</Button>
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('MySets');
          }}
        >MySets</Button>
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('SetParts');
          }}
        >SetParts</Button>
        <Button
          style={{ marginLeft: 25, marginRight: 25 }}
          mode="contained"
          color="#F6EC36"
          onPress={() => {
             navigation.navigate('NotLego');
          }}
        >NotLego</Button>
       
      </View>
    );
  };
  TestScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default TestScreen;