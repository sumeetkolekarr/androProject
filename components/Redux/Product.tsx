import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {addToCart, removeFromCart} from './store/action';
import {useDispatch, useSelector} from 'react-redux';

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
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state: any) => state.reducer);
  const handleAddToCart = (item: {
    name: string;
    color: string;
    price: number;
    image: string;
  }) => {
    console.log('Called', item);
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: {
    name: string;
    color: string;
    price: number;
    image: string;
  }) => {
    dispatch(removeFromCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter((element: {name: string}) => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, item.name]);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          borderBottomColor: 'orange',
          borderBottomWidth: 5,
          padding: 10,
          marginBottom: 75,
        }}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.color}</Text>
        <Image
          width={100}
          height={200}
          style={{marginBottom: 12}}
          source={{uri: item.image}}
        />
        {isAdded ? (
          <Button
            title="Remove from Cart"
            onPress={() => handleRemoveFromCart(item)}
          />
        ) : (
          <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
        )}
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
