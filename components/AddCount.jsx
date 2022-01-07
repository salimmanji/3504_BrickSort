import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';

const AddCount = (props) => {
  const {
    label, count, setCount,
  } = props;

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{
          height: 40,
          width: 130,
          marginBottom: 0,
          marginTop: 0,
        }}
        mode="outlined"
        label={label}
        value={count.toString()}
        keyboardType="numeric"
        placeholder="0"
        onChangeText={(text) => {
          if (
            text.length === 0
            || Number.isNaN(text)
          ) {
            setCount(0);
          } else {
            setCount(parseFloat(text));
          }
        }}
      />
      <Text>
        {'You have '}
        {count}
        {' of this piece.'}
      </Text>
    </View>
  );
};

AddCount.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default AddCount;
