import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

interface PostData {
  id: string;
  name: string;
  age: number;
  email: string;
}

const SearchAPI = () => {
  const [data, setData] = useState<PostData[]>([]);
  const searchUser = async (txt: string) => {
    console.log(txt);
    const url = `http://10.0.50.3:3000/users?name=${txt}`;
    console.log(url);
    let result = await fetch(url);
    let response = await result.json();
    if (response) {
      setData(response);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40}}>Search with API</Text>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          margin: 15,
          fontSize: 20,
        }}
        placeholder="Search"
        onChangeText={text => searchUser(text)}></TextInput>
      {data.length
        ? data.map(item => (
            <View id={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchAPI;
