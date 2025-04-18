import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

interface PostData {
  id: string;
  name: string;
  age: number;
  email: string;
}

const LocalConnect = () => {
  const [data, setData] = useState<PostData[]>([]);
  const getAPIData = async () => {
    const url = 'http://10.0.50.3:3000/users';
    let response = await fetch(url);
    let result = await response.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text>LocalConnect</Text>
      {data.length
        ? data.map(item => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default LocalConnect;
