import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';

const initialState: never[] = [];
export const reducer = (
  _state = initialState,
  action: {type: any; data: any},
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [..._state, action.data];
    case REMOVE_FROM_CART:
      let result = _state.filter((item: {name: any}) => {
        return item.name !== action.data;
      });
      return [...result];
    case SET_USER_DATA:
      return [..._state, action.data];
    default:
      return _state;
  }
};
