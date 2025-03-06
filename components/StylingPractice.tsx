import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExStyles from './style';

const StylingPractice = () => {
  return (
    <View>
      <Text style={styles.textBox}>StylingPractice</Text>
      <Text style={styles.textBox}>StylingPractice</Text>
      <Text style={[ExStyles.textBox, styles.textBox]}>StylingPractice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'purple',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 2,
  },
});

export default StylingPractice;
