import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={{padding: 10, backgroundColor: 'skyblue'}}>
      <Text style={{fontSize: 30, textAlign: 'right'}}>0</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default Header;
