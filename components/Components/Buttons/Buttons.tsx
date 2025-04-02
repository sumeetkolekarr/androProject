import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warn]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warn: {
    backgroundColor: 'gold',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default Buttons;
