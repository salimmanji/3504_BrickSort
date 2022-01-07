import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import SinglePart from "../../components/SinglePart";
import AuthContext from '../contexts/auth';

const SetParts = () => {
    const [ parts, setParts ] = useState([]);
    const { partsSet } = React.useContext(AuthContext);
    useEffect(() => {
        let tempParts = partsSet;
        if(!tempParts){
            tempParts = "41169-1"
        }

        var requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": "key 1c132f7e6ccedaab5a9f48ae3b7a7d05",
                "Cookie": "__cfduid=dc88f472e0b943f0c2533f5cb87b212061606437671; __cflb=0H28vzNcsA143GW52FyVXZfrjruJ6kaTX41bgx8Rfij"
            },
            redirect: 'follow'
        };

        fetch("https://rebrickable.com/api/v3/lego/sets/"+tempParts+"/parts/", requestOptions)
            .then(response => response.text())
            .then(result => {
                var queryParts = JSON.parse(result);
                setParts(queryParts.results);
            }
            )
            .catch(error => console.log('error', error));
    }, [])
    if(!parts)
            return null;
    let setList = parts.map((m) => <SinglePart key={m.id} partNum={m.part.part_num} partName={m.part.name} partURL={m.part.part_url} imageURL={m.part.part_img_url} quantity={m.quantity} />)
    return (
        <ScrollView /**style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around", flexWrap: 'wrap' }}**/>
            {setList}
        </ScrollView>
    )
}
export default SetParts