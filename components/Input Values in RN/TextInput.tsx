import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const MyTextInput = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>Handle Input Text</Text>
      <Text style={{fontSize: 30}}>Your name is : {name}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={txt => setName(txt)}
        placeholder="Enter your Name"
      />
      <Button title="Clear Input Value" onPress={() => setName('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'black',
    borderWidth: 1,
    borderColor: 'purple',
    margin: 10,
    padding: 5,
  },
});

export default MyTextInput;
