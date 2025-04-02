import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const HookEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <View>
      <Text style={{fontSize: 30}}>Life Cycle with Use Effect</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)} />
      <Text style={{fontSize: 30}}>Count {count}</Text>
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <Text style={{fontSize: 30}}>Data {data}</Text>
      <User info={{data}} />
    </View>
  );
};

const User = (props: { info: { data: number; }; }) => {
//   console.log(props.info);
  useEffect(() => {
    console.log('Run the code only when data prop is updated');
  }, [props.info.data]);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>User Component</Text>
    </View>
  );
};

export default HookEffect;
