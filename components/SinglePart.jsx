import React from "react";
import { Text, View, Image } from "react-native";
import PropTypes from 'prop-types';

class SinglePart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ backgroundColor: 'red', margin: 10, elevation: 3, flex: 1, flexDirection: 'row' }}>
                <Image style={{ width: 150, height: 100, margin: 5 }} source={{ uri: this.props.imageURL, }} />
                <View>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>x{this.props.quantity}</Text>
                    <Text style={{ fontSize: 20, color: "#FFFFFF" }}>{this.props.partNum}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ flex: 1, fontSize: 12, color: "#FFFFFF", flexWrap: 'wrap', flexBasis: '58%' }}>{this.props.partName}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
SinglePart.propTypes = {
    partName: PropTypes.string,
    partNum: PropTypes.string,
    setURL: PropTypes.string,
    partURL: PropTypes.string,
    imageURL: PropTypes.string,
    quantity: PropTypes.number
}
export default SinglePart