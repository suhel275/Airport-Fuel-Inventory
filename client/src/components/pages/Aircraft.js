import React, { useContext, useEffect } from 'react';
import FetchContext from '../../context/fetch/fetchContext';
import AuthContext from '../../context/auth/authContext';
import * as ReactBootStrap from 'react-bootstrap';

const Aircrafts = (props) => {
  const fetchContext = useContext(FetchContext);
  const authContext = useContext(AuthContext);

  const { aircrafts, getAircrafts } = fetchContext;

  useEffect(() => {
    authContext.loadUser();
    getAircrafts();
    // eslint-disable-next-line
  }, []);

  const renderAircraft = (aircraft) => {
    return (
      <tr>
        <td>{aircraft.no}</td>
        <td>{aircraft.airline}</td>
        <td>{aircraft.source}</td>
        <td>{aircraft.destination}</td>
      </tr>
    );
  };

  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Aircraft No</th>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>{aircrafts && aircrafts.map(renderAircraft)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Aircrafts;
