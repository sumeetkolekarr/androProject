import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface StudentProps {
  name: string;
}

class Student extends Component<StudentProps> {
  // Can't use let, const in Class Components
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'cyan'}}>Student Name: {this.props.name}</Text>
      </View>
    );
  }
}

export default Student;
