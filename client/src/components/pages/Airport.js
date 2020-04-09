import React, { useContext, useEffect } from 'react';
import FetchContext from '../../context/fetch/fetchContext';
import AuthContext from '../../context/auth/authContext';
import * as ReactBootStrap from 'react-bootstrap';

const Airports = (props) => {
  const fetchContext = useContext(FetchContext);
  const authContext = useContext(AuthContext);

  const { airports, getAirports } = fetchContext;

  useEffect(() => {
    authContext.loadUser();
    getAirports();
    // eslint-disable-next-line
  }, []);

  const renderAirport = (airport) => {
    return (
      <tr>
        <td>{airport.name}</td>
        <td>{airport.fuel_capacity}</td>
        <td>{airport.fuel_available}</td>
      </tr>
    );
  };

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Airport Name</th>
            <th>Fuel Capacity</th>
            <th>Fuel Available</th>
          </tr>
        </thead>
        <tbody>{airports && airports.map(renderAirport)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Airports;
