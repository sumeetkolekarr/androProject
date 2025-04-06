import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';

const Stats = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState<
    'default' | 'dark-content' | 'light-content'
  >('default');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EFB618" barStyle={barStyle} hidden={hide} />
      <Button title="Toggle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update Style"
        onPress={() => setBarStyle('dark-content')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Stats;
