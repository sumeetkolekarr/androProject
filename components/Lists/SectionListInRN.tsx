import React from 'react';
import { SectionList, Text, View } from 'react-native';

const SectionListInRN = () => {
  const users = [
    {
      id: 1,
      name: 'Leo',
      data: ['PHP', 'React JS', 'Angular'],
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        SectionList Example
      </Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={{ marginLeft: 10 }}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 18, fontWeight: 'bold', backgroundColor: '#ddd', padding: 5, color: 'purple' }}>
            {name}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionListInRN;
