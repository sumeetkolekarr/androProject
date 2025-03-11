import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Grid = () => {
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
      <Text style={{fontSize: 31}}>Grid with Dynamic Data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(itm => (
          <Text style={styles.item} key={itm.id}>{itm.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#FFF',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Grid;
