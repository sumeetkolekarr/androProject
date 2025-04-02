import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButtons = () => {
  const [selectedRadio, setSelectedRadio] = useState(0);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(1);
        }}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg} /> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(2);
        }}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg} /> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RadioButtons;
