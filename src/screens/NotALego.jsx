import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: 10,
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#D11013',
  },
  buttons: {
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#F6EC35',
  },
});

const NotALego = ({navigation}) => (
  <View style={styles.rowContainer}>

    <Text style={styles.paragraph}>
      The picture you took was not a registered lego peice.
    </Text>

    <View style={styles.rowContainer}>
      <Button
        style={styles.buttons}
        icon="camera"
        mode="contained"
        color="#F6EC35"
        onPress={() => {
          navigation.navigate('Upload');
        }}>
        Try Again
      </Button>
    </View>
    
  </View>
);
NotALego.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default NotALego;
