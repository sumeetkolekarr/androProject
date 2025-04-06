import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator, Button} from 'react-native';

const ActivityIndicatorUse = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);

    // API Calls
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={styles.main}>
      <ActivityIndicator size={100} color="#EFB618" animating={show} />
      <Button title="Show Loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActivityIndicatorUse;
