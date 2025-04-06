import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Pressing = () => {
  return (
    <View style={styles.main}>
      <Pressable
        delayLongPress={5000}
        // onPressIn={()=>console.log('Pressed In')}
        // onPressOut={()=>console.log('Pressed Out')}
        // onPress={() => console.log('Normal Press')}
        onLongPress={() => console.log('Long Press')}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 8,
  },
});

export default Pressing;
