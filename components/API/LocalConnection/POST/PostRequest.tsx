import React from 'react';
import {Button, Text, View} from 'react-native';

const PostRequest = () => {
  const saveAPIData = async () => {
    const url = 'http://192.168.28.110:3000/users';
    let info = await fetch(url);
    let infoRes = await info.json();
    const data = {
      id: (infoRes.length + 1).toString(),
      name: 'SK',
      age: 0,
      email: 'sk@gmail.com',
    };
    let response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });

    let result = await response.json();
    console.log(result);
  };

  return (
    <View>
      <Text>PostRequest</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
};

export default PostRequest;
