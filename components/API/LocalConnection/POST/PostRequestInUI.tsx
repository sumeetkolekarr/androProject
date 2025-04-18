import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const PostRequestInUI = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const saveData = async () => {
    if (!name || !age || !email) {
      setError(true);
      return false;
    }
    console.log(name);
    console.log(age);
    console.log(email);
    const url = 'http://10.0.50.3:3000/users';
    let info = await fetch(url);
    let infoRes = await info.json();
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: (infoRes.length + 1).toString(),
        name: name,
        email: email,
        age: age,
      }),
    });
    let result = await response.json();
    console.log(result);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>POST API With Input Field Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
      />
      {error && !name ? (
        <Text style={styles.error}>Enter a Valid Name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        onChangeText={text => setAge(parseInt(text, 10))}
      />
      {error && !age ? (
        <Text style={styles.error}>Enter a Valid Age</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
      />
      {error && !email ? (
        <Text style={styles.error}>Enter a Valid Email</Text>
      ) : null}
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});

export default PostRequestInUI;
