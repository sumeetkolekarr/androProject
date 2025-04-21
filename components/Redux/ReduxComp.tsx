import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from './Header';
import Product from './Product';

const ReduxComp = () => {
  const products = [
    {
      name: 'Samsung Mobile',
      color: 'White',
      price: 92000,
      image:
        'https://images.pexels.com/photos/16149966/pexels-photo-16149966/free-photo-of-get-ready-for-the-future-with-samsung-galaxy-s23.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Apple Mobile',
      color: 'Sky Blue',
      price: 152000,
      image:
        'https://images.pexels.com/photos/29020349/pexels-photo-29020349/free-photo-of-modern-smartphone-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Sony Xperia',
      color: 'Black',
      price: 22000,
      image:
        'https://images.pexels.com/photos/2591485/pexels-photo-2591485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  return (
    <View>
      <Header />
      <ScrollView>
        {products.map((item, idx) => (
          <Product item={item} key={idx}/>
        ))}
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//   },
// });

export default ReduxComp;
