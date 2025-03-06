import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const PropsPractice = () => {
    let [name, setName] = useState('Leo')
    return (
        <View><Text style={{ fontSize: 30 }}>Props in React</Text><Button title='Update Props' onPress={() => { setName('SK') }} /><App name={name} age={21}/></View>

    )
}

const App = (props) => {

    return (
        <View>
            <Text style={{ fontSize: 20 }}>{props.name}</Text>
            <Text style={{ fontSize: 20 }}>{props.age}</Text>
        </View>
    )
}

export default PropsPractice