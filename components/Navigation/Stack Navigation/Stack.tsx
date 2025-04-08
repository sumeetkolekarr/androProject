import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, Button} from 'react-native';

const Stk = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stk.Navigator>
        <Stk.Screen name="Login" component={Login} />
        <Stk.Screen name="Home" component={Home} />
      </Stk.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
    </View>
  );
};
const Login = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <Button
        title="Go To Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default Stack;
