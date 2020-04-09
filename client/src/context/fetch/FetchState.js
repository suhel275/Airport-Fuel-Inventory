import React, { useReducer } from 'react';
import axios from 'axios';
import FetchContext from './fetchContext';
import fetchReducer from './fetchReducer';
import { GET_AIRPORTS, GET_AIRCRAFTS, GET_ERROR } from '../types';

const FetchState = (props) => {
  const initialState = {
    airports: null,
    aircraft: null,
    error: null,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  // Get Airports
  const getAirports = async () => {
    try {
      const res = await axios.get('/api/airports');

      dispatch({
        type: GET_AIRPORTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };

  // GET Aircrafts
  const getAircrafts = async () => {
    try {
      const res = await axios.get('/api/aircrafts');

      dispatch({
        type: GET_AIRCRAFTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };

  return (
    <FetchContext.Provider
      value={{
        airports: state.airports,
        aircrafts: state.aircrafts,
        error: state.error,
        getAirports,
        getAircrafts,
      }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchState;
