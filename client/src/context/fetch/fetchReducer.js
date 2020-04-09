import { GET_AIRPORTS, GET_AIRCRAFTS, GET_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_AIRPORTS:
      return {
        ...state,
        airports: action.payload,
        loading: false,
      };
    case GET_AIRCRAFTS:
      return {
        ...state,
        aircrafts: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
