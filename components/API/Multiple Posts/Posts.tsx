import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = () => {
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
        data.map(info => (
          <View>
            <Text>ID: {info.id}</Text>
            <Text>User ID: {info.userId}</Text>
            <Text>Title: {info.title}</Text>
            <Text>Body: {info.body}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default Posts;
