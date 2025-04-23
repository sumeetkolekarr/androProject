import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // Add other user properties as needed
}

interface UserListResponse {
  users: User[];
  total: number;
  limit: number;
  skip: number;
}

function* userList(): Generator<any, void, any> {
  try {
    const url = 'https://dummyjson.com/users';
    const response: Response = yield fetch(url);
    const data: UserListResponse = yield response.json();

    yield put({
      type: SET_USER_DATA,
      data: data, // Changed from dataRes to data for consistency
    });

    console.warn('Saga Function Called');
  } catch (error) {
    console.error('Error fetching user list:', error);
    // You might want to dispatch an error action here
  }
}

function* sagaData(): Generator<any, void, any> {
  yield takeEvery(USER_LIST, userList);
}

export default sagaData;
