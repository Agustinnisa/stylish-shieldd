import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';

function WeeklyForecast() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.509865&longitude=-0.118092&daily=temperature_2m_max,temperature_2m_min')
      .then(response => response.json())
      .then(data => setForecast(data.daily))
      .catch(error => console.error('Error fetching forecast:', error));
  }, []);

  if (!forecast) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <h1>Weekly Forecast</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Max Temp</th>
            <th>Min Temp</th>
          </tr>
        </thead>
        <tbody>
          {forecast.temperature_2m_max.map((maxTemp, index) => (
            <tr key={index}>
              <td>Day {index + 1}</td>
              <td>{maxTemp}°C</td>
              <td>{forecast.temperature_2m_min[index]}°C</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WeeklyForecast;
