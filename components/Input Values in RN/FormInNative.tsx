import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const FormInNative = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setEmail('');
    setPass('');
    setName('');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Simple Form in React Native</Text>
      <TextInput
        placeholder="Enter User Name"
        style={styles.textInput}
        onChangeText={txt => setName(txt)}
        value={name}
      />
      <TextInput
        placeholder="Enter User Email"
        style={styles.textInput}
        onChangeText={txt => setEmail(txt)}
        value={email}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={txt => setPass(txt)}
        value={pass}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color={'purple'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <Button title="Clear Details" onPress={resetFormData} />
      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 15}}>Your Name is: {name}</Text>
            <Text style={{fontSize: 15}}>Your Email is: {email}</Text>
            <Text style={{fontSize: 15}}>Your Password is: {pass}</Text>
          </View>
        ) : null}
      </View>
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

export default FormInNative;
