import Immutable from 'seamless-immutable';

export const Types = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_TO_CART: 'cart/REMOVE_TO_CART',
  UPDATE_TO_CART: 'cart/UPDATE_TO_CART',
  SUCCESS: 'cart/SUCESS',
  FAILURE: 'cart/FAILURE',
};

const initialState = Immutable({
  data: [],
  error: null,
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.SUCCESS:
      return {
        data: action.payload.data,
        error: null,
      }
    case Types.FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state;
  }
}

export const Creators = {
  SUCCESS: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  FAILURE: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
  ADD_TO_CART: data => ({
    type: Types.ADD_TO_CART,
    payload: { data },
  }),
  REMOVE_TO_CART: id => ({
    type: Types.REMOVE_TO_CART,
    payload: { id },
  }),
  UPDATE_TO_CART: (value, id) => ({
    type: Types.UPDATE_TO_CART,
    payload: { value, id },
  }),
};
