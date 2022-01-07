import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import PropTypes from 'prop-types';
import AuthContext from '../src/contexts/auth';

class SingleSet extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = AuthContext;
    render() {
        return (
            <TouchableHighlight onPress={() => {
                const context = this.context;
                context.setPartsSet(this.props.setNum);
                this.props.navigation.navigate("SetParts");
            }}>
                <View style={{ backgroundColor: 'red', margin: 10, elevation: 3, flex: 1, flexDirection: 'row' }}>
                    <Image style={{width: 150, height: 100, margin: 5 }} source={{ uri: this.props.imageURL, }} />
                    <View>
                        <Text style={{ fontSize: 20, color: "#FFFFFF"}}>{this.props.setName}</Text>
                        <Text style={{ fontSize: 20, color: "#FFFFFF"}}>{this.props.setNum}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}
SingleSet.propTypes = {
    setName: PropTypes.string,
    setNum: PropTypes.string,
    setURL: PropTypes.string,
    imageURL: PropTypes.string,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}
export default SingleSet