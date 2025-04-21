import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {addToCart} from './store/action';
import {useDispatch} from 'react-redux';

interface ProductProps {
  item: {
    name: string;
    color: string;
    price: number;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item: {
    name: string;
    color: string;
    price: number;
    image: string;
  }) => {
    console.log('Called', item);
    dispatch(addToCart(item));
  };
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          borderBottomColor: 'orange',
          borderBottomWidth: 5,
          padding: 10,
        }}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.color}</Text>
        <Image width={100} height={200} source={{uri: item.image}} />
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default Product;
