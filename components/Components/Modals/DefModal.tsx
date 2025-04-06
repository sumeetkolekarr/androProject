import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

const DefModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Hello, SK and Leo</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'skyblue',
    padding: 25,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 12,
  },
});

export default DefModal;
