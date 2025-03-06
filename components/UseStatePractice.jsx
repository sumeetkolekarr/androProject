import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const UseStatePractice = () => {
    const [name, setName] = useState('Leo')
    function testName() {
        setName('SK')
    }
    return (
        <View>
            <Text style={{ fontSize: 30, paddingLeft: 12 }}>{name}</Text>
            <Button title='Update Name' onPress={testName} />
        </View>
    )
}

export default UseStatePractice