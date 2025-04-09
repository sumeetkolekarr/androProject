import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

const Stk = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stk.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stk.Screen
          name="Login"
          component={Login}
          options={{
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'violet',
            },
            headerTintColor: 'black',
            headerLeft: () => {
              return <Button title="Left" />;
            },
            headerRight: () => {
              return <Header />;
            },
          }}
        />
        <Stk.Screen name="Home" component={Home} />
      </Stk.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return <TextInput placeholder="name" />;
};

const Home = (props: {route: {params: {name: any; age: any}}}) => {
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Text style={{fontSize: 30}}>Name: {name}</Text>
      <Text style={{fontSize: 30}}>Age: {age}</Text>
    </View>
  );
};
const Login = (props: {
  navigation: {navigate: (arg0: string, arg1?: object) => void};
}) => {
  const [name, setName] = useState('');
  const age = 21;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput
        style={{fontSize: 20, borderColor: '#000', borderWidth: 2}}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
      <Button
        title="Go To Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};

export default Stack;
