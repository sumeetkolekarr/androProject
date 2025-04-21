import {ADD_TO_CART} from './constants';

const initialState: never[] = [];
export const reducer = (
  _state = initialState,
  action: {type: any; data: any},
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [..._state, action.data];

    default:
      return _state;
  }
};
