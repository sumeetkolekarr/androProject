import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Index = () => {
  const [data, setData] = useState<PostData | null>(null);
  const getAPIData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts/1';
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
    <View>
      {data ? (
        <View>
          <Text>ID: {data.id}</Text>
          <Text>User ID: {data.userId}</Text>
          <Text>Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Index;
