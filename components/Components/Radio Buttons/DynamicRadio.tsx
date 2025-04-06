import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DynamicRadio = () => {
  const skills = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: 'SQL'},
    {id: 3, name: 'PHP'},
    {id: 4, name: 'JavaScript'},
  ];
  const [selectedRadio, setSelectedRadio] = useState(0);

  return (
    <View style={styles.main}>
      {skills.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => {
            setSelectedRadio(item.id);
          }}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg} />
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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

export default DynamicRadio;
