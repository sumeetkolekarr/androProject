import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector((state: any) => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  console.log(cartData);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={{padding: 10, backgroundColor: 'skyblue'}}>
      <Text style={{fontSize: 30, textAlign: 'right'}}>{cartItems}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default Header;
