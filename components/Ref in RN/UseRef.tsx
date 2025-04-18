import React, {useRef} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const UseRef = () => {
  const input = useRef<TextInput>(null);

  const updateInput = () => {
    console.log('Call');
    input.current?.focus();
    input.current?.setNativeProps({
      fontSize: 24,
      color: 'violet',
    });
  };

  return (
    <View style={styles.container}>
      <TextInput ref={input} placeholder="Enter Name" style={styles.input} />
      <TextInput placeholder="Enter Password" style={styles.input} />
      <Button title="Update Input" onPress={updateInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10,
  },
});

export default UseRef;
