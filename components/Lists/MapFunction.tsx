import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const MapFunction = () => {
  const users = [
    {
      id: '1',
      name: 'Leo',
    },
    {
      id: '2',
      name: 'SK',
    },
    {
      id: '3',
      name: 'Momo',
    },
    {
      id: '4',
      name: 'Bunny',
    },
    {
      id: '5',
      name: 'Bunny',
    },
    {
      id: '6',
      name: 'Bunny',
    },
    {
      id: '7',
      name: 'Bunny',
    },
    {
      id: '8',
      name: 'Bunny',
    },
    {
      id: '9',
      name: 'Bunny',
    },
    {
      id: '10',
      name: 'Bunny',
    },
    {
      id: '11',
      name: 'Bunny',
    },
    {
      id: '12',
      name: 'Bunny',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 31}}>List with Map Function</Text>
      <ScrollView style={{marginBottom: 111}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: 'purple',
    backgroundColor: 'gold',
    margin: 10,
  },
});

export default MapFunction;
