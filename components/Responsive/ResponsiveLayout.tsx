import React from 'react';
import {StyleSheet, View} from 'react-native';

const ResponsiveLayout = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.InnerBox1} />
        <View style={styles.InnerBox2} />
        <View style={styles.InnerBox3} />
      </View>
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    backgroundColor: 'violet',
  },
  box3: {
    flex: 1,
    backgroundColor: 'red',
  },
  InnerBox1: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10,
  },
  InnerBox2: {
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
  },
  InnerBox3: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 10,
  },
});

export default ResponsiveLayout;
