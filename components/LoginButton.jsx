import React from "react";
import { Button } from "react-native";
import PropTypes from 'prop-types';
import AuthContext from '../src/contexts/auth.jsx';

const LoginButton = (props) => {
    const { setToken } = React.useContext(AuthContext);
    return (
        <Button style={{ marginLeft: 25, marginRight: 25 }}
            mode="contained"
            color="#F6EC36"
            title="Login"
            onPress={() => {
                let details = {
                    "username": props.username,
                    "password": props.password
                }
                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

                var requestOptions = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": "key 1c132f7e6ccedaab5a9f48ae3b7a7d05",
                        "Cookie": "cfduid=d8b18b3f3a875a3cbd3f86f5bee4947131603843059; cflb=0H28vzNcsA143GW52FyVXZfrjruJ6kaTVg4RfiUXsMD"
                    },
                    body: formBody,
                    redirect: 'follow'
                };

                fetch("https://rebrickable.com/api/v3/users/_token/", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        var token = JSON.parse(result);
                        setToken(token.user_token);
                        if(token.user_token){
                        props.navigation.navigate(props.destination)
                        }
                    })
                    .catch(error => console.log('error', error));
            }}
        />
    )
}

LoginButton.propTypes = {
    password: PropTypes.string,
    username: PropTypes.string,
    destination: PropTypes.string,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired
}


export default LoginButton;