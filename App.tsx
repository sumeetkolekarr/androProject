/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import UserData from './components/UserData';

const name = 'Leo';

const App = () => {
  const fruit = () => {
    console.warn('Function Called');
  };
  return (
    <View>
      <Text style={{fontSize: 25, paddingLeft: 20}}>Hello, </Text>
      <Text style={{fontSize: 20, paddingLeft: 30}}>{name}</Text>
      <Button title="Press Here" onPress={fruit} color={'purple'}></Button>
      <Button title="Press Me Too"></Button>
      <UserData />
    </View>
  );
};

export default App;
