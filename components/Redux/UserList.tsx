import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './store/action';

interface UserData {
  users: Array<{
    id: number;
    firstName: string;
    lastName: string;
    // Add other user properties as needed
  }>;
  total: number;
  limit: number;
  skip: number;
}

interface RootState {
  reducer: UserData;
  // Add other reducers if you have more
}

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]); // Add empty dependency array to prevent infinite loop

  return (
    <View style={styles.container}>
      {userList.users ? (
        userList.users.map(item => <Text key={item.id}>{item.firstName}</Text>)
      ) : (
        <Text>Loading users...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'skyblue',
  },
});

export default UserList;
