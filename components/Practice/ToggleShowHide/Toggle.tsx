import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <View>
      <Text style={{fontSize: 30}}>Toggler</Text>
      <Button
        title={toggle ? 'Hide Component' : 'Show Component'}
        onPress={() => setToggle(!toggle)}
      />
      {toggle ? <Component /> : null}
    </View>
  );
};

const Component = () => {
  let timer = setInterval(() => {
    console.log('Timer Called');
  }, 2000);
  useEffect(() => {
    return () => {
      console.log('UseEffect called on unmount');
      clearInterval(timer);
    };
  });
  return (
    <View>
      <Text style={{fontSize: 30}}>User Component</Text>
    </View>
  );
};

export default Toggle;
