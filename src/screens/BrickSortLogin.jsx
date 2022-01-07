import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import * as Linking from 'expo-linking';
import PropTypes from 'prop-types';
import LoginButton from '../../components/LoginButton';
// tempory style sheet until we make our own
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D01012',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 250,
  },
  rowContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttons: {
    marginLeft: 25,
    marginRight: 25,
  },
  Text: {
    marginBottom: 25,
    margintop: 25,
    Textcolor: "#000000",
  },

});
*/
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", focused: true }
  }
  handleUsername = (text) => this.setState({ username: text });
  handlePassword = (text) => this.setState({ password: text });
  blur = () => this.setState({focused: true})
  focus = () => this.setState({focused: false})
  
  render() {
    return (

      <ScrollView >
          <Image source={require('./../Logo2.jpg')} style={{ width: 323, height: 400 }} />
        <TextInput mode="outlined" placeholder="Rebrickable email" value={this.state.username} onChangeText={this.handleUsername} onFocus={this.focus} onBlur={this.blur} />
        <TextInput mode="outlined" placeholder="Rebrickable password" value={this.state.password} onChangeText={this.handlePassword} onFocus={this.focus} onBlur={this.blur} />
        <LoginButton username={this.state.username} password={this.state.password} navigation={this.props.navigation} destination="TestScreen" ></LoginButton>

        <Text style={{ color: "#0000ff" }}
          onPress={() => Linking.openURL('https://rebrickable.com/register/')}>
          No account? Create one!
        </Text>

        <View>
          <Text onPress={() => {
            this.props.navigation.navigate('Privacy');
          }}>Privacy Disclaimer </Text>
        </View>

      </ScrollView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;

/**{this.state.focused &&
          <Image source={require('./../Logo2.jpg')} style={{ width: 323, height: 400 }} />
        } */