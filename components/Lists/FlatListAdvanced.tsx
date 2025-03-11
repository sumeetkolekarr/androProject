import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListAdvanced = () => {
  const users = [
    {
      id: 1,
      name: 'Leo',
      email: 'leo@gmail.com',
    },
    {
      id: 2,
      name: 'SK',
      email: 'sk@gmail.com',
    },
    {
      id: 3,
      name: 'Sumeet',
      email: 'sumeetk@gmail.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 27}}>Component in Loop with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 5,
  },
});

export default FlatListAdvanced;
