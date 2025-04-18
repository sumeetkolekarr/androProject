import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Modal, TextInput} from 'react-native';

interface PostData {
  id: string;
  name: string;
  age: number;
  email: string;
}

const Lists = () => {
  const [data, setData] = useState<PostData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<PostData | undefined>(
    undefined,
  );
  const getAPIData = async () => {
    const url = 'http://10.0.50.3:3000/users';
    let response = await fetch(url);
    let result = await response.json();
    setData(result);
  };

  const deleteUser = async (id: string) => {
    const url = 'http://10.0.50.3:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    let response = await result.json();
    if (response) {
      console.log('User Deleted');
      getAPIData();
    }
  };

  const updateModal = (user: PostData) => {
    setShowModal(true);
    setSelectedUser(user);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <View style={styles.dataWrapper}>
        <View style={{flex: 0.65}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper} key={item.id}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" onPress={() => updateModal(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          getAPIData={getAPIData}
        />
      </Modal>
    </View>
  );
};

interface UserModalProps {
  setShowModal: (value: boolean) => void;
  selectedUser: PostData | undefined;
  getAPIData: any;
}

const UserModal = (props: UserModalProps) => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setEmail(props.selectedUser.email);
      setAge(props.selectedUser.age.toString());
    }
  }, [props.selectedUser]);

  const updateUser = async () => {
    console.warn(name, age, email, props.selectedUser?.id);
    const url = 'http://10.0.50.3:3000/users';
    let response = await fetch(`${url}/${props.selectedUser?.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    let result = await response.json();
    if (result) {
      console.warn(result);
      props.getAPIData();
      props.setShowModal(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={age}
          placeholder="Enter Age"
          onChangeText={text => setAge(text)}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
        />
        <View style={{marginBottom: 15}}>
          <Button title="Update" onPress={updateUser} />
        </View>
        <Button title="Close" onPress={() => props.setShowModal(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
  },
});

export default Lists;
