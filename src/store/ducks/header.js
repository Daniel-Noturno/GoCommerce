import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'header/GET_REQUEST',
  GET_SUCCESS: 'header/GET_SUCCESS',
  GET_FAILURE: 'header/GET_FAILURE',
  GET_PRODUCTS_REQUEST: 'header/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'header/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'header/GET_PRODUCTS_SUCCESS',
};

const initialState = Immutable({
  data: [],
  products: [],
  itemID: 1,
  loading: false,
  error: null,
});

export default function header(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case Types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        itemID: action.payload.itemID,
        loading: false,
      };
    case Types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  getHeaderRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getHeaderSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getHeaderFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
  getProductsRequest: itemID => ({
    type: Types.GET_PRODUCTS_REQUEST,
    payload: { itemID }
  }),
  getProductsSuccess: (data, itemID) => ({
    type: Types.GET_PRODUCTS_SUCCESS,
    payload: { data, itemID },
  }),
  getProductsFailure: error => ({
    type: Types.GET_PRODUCTS_FAILURE,
    payload: { error },
  }),
};
