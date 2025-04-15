import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const FlatListAPI = () => {
  const [data, setData] = useState<PostData[]>([]);
  const getAPIData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      let response = await fetch(url);
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Text style={{color: 'skyblue'}}>ID: {item.id}</Text>
              <Text>User ID: {item.userId}</Text>
              <Text>Title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default FlatListAPI;
