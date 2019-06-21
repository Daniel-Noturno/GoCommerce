import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'details/GET_REQUEST',
  GET_SUCCESS: 'details/GET_SUCCESS',
  GET_FAILURE: 'details/GET_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function details(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      }
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
}

export const Creators = {
  getDetailsRequest: idProduct => ({
    type: Types.GET_REQUEST,
    payload: { idProduct },
  }),
  getDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getDetailsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
