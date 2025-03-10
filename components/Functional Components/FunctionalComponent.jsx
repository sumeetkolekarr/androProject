import React from 'react';
import {Button, Text, View} from 'react-native';

const name = 'Leo';

const FunctionalComponent = () => {
  const fruit = () => {
    console.warn('Function Called');
  };
  return (
    <View>
      <Text style={{fontSize: 25, paddingLeft: 20}}>Hello, </Text>
      <Text style={{fontSize: 20, paddingLeft: 30}}>{name}</Text>
      <Button title="Press Here" onPress={fruit} color={'purple'}></Button>
      <Button title="Press Me Too"></Button>
    </View>
  );
};

export default FunctionalComponent;