import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import SingleSet from "../../components/SingleSet";
import AuthContext from '../contexts/auth';
import PropTypes from 'prop-types';

const MySets = ({navigation}) => {
    const [userSets, setUserSets] = useState([]);
    const { rebrickableToken } = React.useContext(AuthContext);
    useEffect(() => {


        var requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": "key 1c132f7e6ccedaab5a9f48ae3b7a7d05",
                "Cookie": "__cfduid=dc88f472e0b943f0c2533f5cb87b212061606437671; __cflb=0H28vzNcsA143GW52FyVXZfrjruJ6kaToaGugFrAdTq"
            },
            redirect: 'follow'
        };

        fetch("https://rebrickable.com/api/v3/users/" + rebrickableToken + "/sets/", requestOptions)
            .then(response => response.text())
            .then(result => {
                var sets = JSON.parse(result);
                setUserSets(sets.results)
            })
            .catch(error => console.log('error', error));
    }, [])

    if (!userSets) {
        return null;
    }
    let setList = userSets.map((m) => <SingleSet key={m.set.set_num} setNum={m.set.set_num} setName={m.set.name} setURL={m.set.set_url} imageURL={m.set.set_img_url} navigation={navigation} />)
        return (
            <ScrollView /**style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around", flexWrap: 'wrap' }}**/>
                {setList}
            </ScrollView>
        )
}
MySets.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
export default MySets