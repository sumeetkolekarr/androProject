import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListsInRN = () => {
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
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>List with FlatList Component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
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

export default FlatListsInRN;
