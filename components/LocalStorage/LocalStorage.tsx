import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = () => {
  const [user, setUser] = useState<string | null>('');
  const setData = async () => {
    await AsyncStorage.setItem('name', 'Leo');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    setUser(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
    setUser('');
  };
  return (
    <View style={{marginTop: 50, marginLeft: 20, marginRight: 20}}>
      <Text style={{fontSize: 35}}>
        Async Storage with React Native | {user}
      </Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};

export default LocalStorage;
