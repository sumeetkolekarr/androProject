import React from 'react';
import {Text, View, Platform, StyleSheet} from 'react-native';

const PlatformNative = () => {
  return (
    <View>
      <Text style={{fontSize: 24}}>{Platform.OS}</Text>
      {Platform.OS === 'android' ? (
        <View style={{backgroundColor: 'green', height: 50, width: 50}}></View>
      ) : (
        <View style={{backgroundColor: 'red', height: 50, width: 50}}></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize: 13}}>{JSON.stringify(Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? 'orange' : 'blue',
    fontSize: 24,
  },
});

export default PlatformNative;
