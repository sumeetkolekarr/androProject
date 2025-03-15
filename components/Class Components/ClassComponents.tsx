import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './Student';

interface State {
  name: string;
  age: number;
}

class ClassComponents extends Component<{}, State> {
  // Can't use let, const in Class Components
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'SK',
      age: 10,
    };
  }

  updateName(val: string) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'violet'}}>Class Component</Text>
        <Text style={{fontSize: 30, color: 'violet'}}>
          {this.state.name} {this.state.age}
        </Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Press Me" />
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default ClassComponents;
